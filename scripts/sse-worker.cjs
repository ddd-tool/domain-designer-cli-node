#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.ts
var import_worker_threads2 = require("worker_threads");

// src/worker.ts
var import_worker_threads = require("worker_threads");

// src/sse-server.ts
var import_node_http = __toESM(require("node:http"));
var clientMap = /* @__PURE__ */ new Map();
var aiBaseURL = "https://api.chatanywhere.org/v1";
var model = "gpt-4o";
var serverPort = 3e3;
async function aiRequest(wrapper, apiKey, data) {
  const messages = [
    {
      role: "system",
      content: "\u4F60\u662F\u4E00\u4E2A\u7F16\u7A0B\u52A9\u624B\uFF0C\u8BF7\u56DE\u7B54\u7528\u6237\u7684\u95EE\u9898\u3002"
    },
    { role: "user", content: data.query }
  ];
  const aiRes = await fetch(`${aiBaseURL}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      stream: true,
      model: data.model || model,
      messages
    })
  });
  const reader = aiRes.body?.getReader();
  const decoder = new TextDecoder("utf-8");
  for (; ; ) {
    const { value, done } = await reader.read();
    if (done) break;
    const str = decoder.decode(value, { stream: true });
    for (const id of clientMap.keys()) {
      console.debug("write chunk clientId: ", id, "content: ", str);
      clientMap.get(id)?.sendMessage(str);
    }
  }
  decoder.decode();
}
function isAIQueryRequestParam(data) {
  return typeof data.query === "string" && !!data.query;
}
function nextClientId() {
  let id = 0;
  return ++id;
}
function sseWrapper(req, res) {
  let clientId = 0;
  let errorCode = NaN;
  const url = new URL(req.url || "/", `http://${req.headers.host}`);
  const reqMethod = req.method?.toUpperCase();
  const reqPathname = url.pathname;
  console.debug("request with", reqMethod, reqPathname);
  function replyJson(statusCode, data) {
    let dataStr = typeof data === "string" ? data : JSON.stringify(data);
    res.writeHead(statusCode, {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*"
    });
    res.end(dataStr);
    console.debug("reply with", statusCode, data);
  }
  return {
    getClientId() {
      return clientId;
    },
    getErrorCode() {
      return errorCode;
    },
    getReqMethod() {
      return reqMethod;
    },
    getReqPathname() {
      return reqPathname;
    },
    isMatchRoute(method, path) {
      return method === reqMethod && path === reqPathname;
    },
    KeepAlive() {
      clientId = nextClientId();
      clientMap.set(clientId, this);
      res.writeHead(200, {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        // CORS 视情况而定（若浏览器跨域访问）
        "Access-Control-Allow-Origin": "*",
        "X-Accel-Buffering": "no",
        "X-Accel-Charset": "utf-8"
      });
      this.sendHeartbeat();
      const intervalId = setInterval(() => {
        this.sendHeartbeat();
      }, 8e3);
      req.on("close", () => {
        clientMap.delete(clientId);
        intervalId && clearInterval(intervalId);
      });
    },
    sendHeartbeat() {
      res.write(": heartbeat\n");
    },
    sendMessage(data) {
      res.write(`data: ${data}

`);
    },
    getReqParams() {
      return url.searchParams;
    },
    getReqHeaders() {
      return req.headers;
    },
    async readReqBodyJson() {
      return await new Promise((resolve, reject) => {
        const chunks = [];
        req.on("data", (c) => chunks.push(c));
        req.on("end", () => {
          try {
            resolve(JSON.parse(Buffer.concat(chunks).toString()));
          } catch (error) {
            errorCode = 400;
            reject(error);
          }
        });
        req.on("error", reject);
      });
    },
    replyJson,
    reply(statusCode, data = "") {
      res.writeHead(statusCode, {
        "Content-Type": "text/plain; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
      });
      res.end(data);
      console.debug("reply with", statusCode, data);
    }
  };
}
function startServer() {
  const server2 = import_node_http.default.createServer(async (req, res) => {
    const wrapper = sseWrapper(req, res);
    try {
      if (wrapper.isMatchRoute("GET", "/connect")) {
        wrapper.KeepAlive();
      } else if (wrapper.isMatchRoute("POST", "/query")) {
        const data = await wrapper.readReqBodyJson();
        const token = wrapper.getReqHeaders().authorization?.substring("Bearer ".length);
        if (!token?.length) {
          wrapper.replyJson(403, { error: "Need a token in header. Authorization: Bearer <token>" });
          return;
        } else if (!isAIQueryRequestParam(data)) {
          wrapper.replyJson(400, { error: "Invalid request" });
          return;
        }
        aiRequest(wrapper, token, data);
        wrapper.replyJson(200, {});
      } else if (wrapper.isMatchRoute("GET", "/test")) {
        wrapper.reply(200, "OK");
      } else {
        wrapper.replyJson(404, { error: "Not found" });
        return;
      }
    } catch (e) {
      wrapper.replyJson(wrapper.getErrorCode() || 500, { error: e });
      console.error(e);
    }
  });
  server2.listen(serverPort, () => {
    console.log(`SSE Server listening on http://localhost:${serverPort}`);
  });
}

// src/worker.ts
var server = startServer();
import_worker_threads.parentPort?.on("message", () => {
  import_worker_threads.parentPort?.postMessage("ok");
});

// src/index.ts
import_worker_threads2.parentPort?.on("message", () => {
});
