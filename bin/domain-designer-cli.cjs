#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/@vue+shared@3.5.13/node_modules/@vue/shared/dist/shared.cjs.prod.js
var require_shared_cjs_prod = __commonJS({
  "node_modules/.pnpm/@vue+shared@3.5.13/node_modules/@vue/shared/dist/shared.cjs.prod.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    // @__NO_SIDE_EFFECTS__
    function makeMap(str) {
      const map = /* @__PURE__ */ Object.create(null);
      for (const key of str.split(",")) map[key] = 1;
      return (val) => val in map;
    }
    var EMPTY_OBJ = {};
    var EMPTY_ARR = [];
    var NOOP = () => {
    };
    var NO = () => false;
    var isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
    (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
    var isModelListener = (key) => key.startsWith("onUpdate:");
    var extend = Object.assign;
    var remove = (arr, el) => {
      const i = arr.indexOf(el);
      if (i > -1) {
        arr.splice(i, 1);
      }
    };
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var hasOwn = (val, key) => hasOwnProperty.call(val, key);
    var isArray = Array.isArray;
    var isMap = (val) => toTypeString(val) === "[object Map]";
    var isSet = (val) => toTypeString(val) === "[object Set]";
    var isDate = (val) => toTypeString(val) === "[object Date]";
    var isRegExp = (val) => toTypeString(val) === "[object RegExp]";
    var isFunction = (val) => typeof val === "function";
    var isString = (val) => typeof val === "string";
    var isSymbol = (val) => typeof val === "symbol";
    var isObject = (val) => val !== null && typeof val === "object";
    var isPromise = (val) => {
      return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
    };
    var objectToString = Object.prototype.toString;
    var toTypeString = (value) => objectToString.call(value);
    var toRawType = (value) => {
      return toTypeString(value).slice(8, -1);
    };
    var isPlainObject = (val) => toTypeString(val) === "[object Object]";
    var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
    var isReservedProp = /* @__PURE__ */ makeMap(
      // the leading comma is intentional so empty string "" is also included
      ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
    );
    var isBuiltInDirective = /* @__PURE__ */ makeMap(
      "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
    );
    var cacheStringFunction = (fn3) => {
      const cache = /* @__PURE__ */ Object.create(null);
      return (str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn3(str));
      };
    };
    var camelizeRE = /-(\w)/g;
    var camelize = cacheStringFunction(
      (str) => {
        return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
      }
    );
    var hyphenateRE = /\B([A-Z])/g;
    var hyphenate = cacheStringFunction(
      (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
    );
    var capitalize = cacheStringFunction((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    var toHandlerKey = cacheStringFunction(
      (str) => {
        const s = str ? `on${capitalize(str)}` : ``;
        return s;
      }
    );
    var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
    var invokeArrayFns = (fns, ...arg) => {
      for (let i = 0; i < fns.length; i++) {
        fns[i](...arg);
      }
    };
    var def = (obj, key, value, writable = false) => {
      Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        writable,
        value
      });
    };
    var looseToNumber = (val) => {
      const n = parseFloat(val);
      return isNaN(n) ? val : n;
    };
    var toNumber = (val) => {
      const n = isString(val) ? Number(val) : NaN;
      return isNaN(n) ? val : n;
    };
    var _globalThis;
    var getGlobalThis = () => {
      return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    };
    var identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
    function genPropsAccessExp(name) {
      return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
    }
    function genCacheKey(source, options) {
      return source + JSON.stringify(
        options,
        (_, val) => typeof val === "function" ? val.toString() : val
      );
    }
    var PatchFlags = {
      "TEXT": 1,
      "1": "TEXT",
      "CLASS": 2,
      "2": "CLASS",
      "STYLE": 4,
      "4": "STYLE",
      "PROPS": 8,
      "8": "PROPS",
      "FULL_PROPS": 16,
      "16": "FULL_PROPS",
      "NEED_HYDRATION": 32,
      "32": "NEED_HYDRATION",
      "STABLE_FRAGMENT": 64,
      "64": "STABLE_FRAGMENT",
      "KEYED_FRAGMENT": 128,
      "128": "KEYED_FRAGMENT",
      "UNKEYED_FRAGMENT": 256,
      "256": "UNKEYED_FRAGMENT",
      "NEED_PATCH": 512,
      "512": "NEED_PATCH",
      "DYNAMIC_SLOTS": 1024,
      "1024": "DYNAMIC_SLOTS",
      "DEV_ROOT_FRAGMENT": 2048,
      "2048": "DEV_ROOT_FRAGMENT",
      "CACHED": -1,
      "-1": "CACHED",
      "BAIL": -2,
      "-2": "BAIL"
    };
    var PatchFlagNames = {
      [1]: `TEXT`,
      [2]: `CLASS`,
      [4]: `STYLE`,
      [8]: `PROPS`,
      [16]: `FULL_PROPS`,
      [32]: `NEED_HYDRATION`,
      [64]: `STABLE_FRAGMENT`,
      [128]: `KEYED_FRAGMENT`,
      [256]: `UNKEYED_FRAGMENT`,
      [512]: `NEED_PATCH`,
      [1024]: `DYNAMIC_SLOTS`,
      [2048]: `DEV_ROOT_FRAGMENT`,
      [-1]: `HOISTED`,
      [-2]: `BAIL`
    };
    var ShapeFlags = {
      "ELEMENT": 1,
      "1": "ELEMENT",
      "FUNCTIONAL_COMPONENT": 2,
      "2": "FUNCTIONAL_COMPONENT",
      "STATEFUL_COMPONENT": 4,
      "4": "STATEFUL_COMPONENT",
      "TEXT_CHILDREN": 8,
      "8": "TEXT_CHILDREN",
      "ARRAY_CHILDREN": 16,
      "16": "ARRAY_CHILDREN",
      "SLOTS_CHILDREN": 32,
      "32": "SLOTS_CHILDREN",
      "TELEPORT": 64,
      "64": "TELEPORT",
      "SUSPENSE": 128,
      "128": "SUSPENSE",
      "COMPONENT_SHOULD_KEEP_ALIVE": 256,
      "256": "COMPONENT_SHOULD_KEEP_ALIVE",
      "COMPONENT_KEPT_ALIVE": 512,
      "512": "COMPONENT_KEPT_ALIVE",
      "COMPONENT": 6,
      "6": "COMPONENT"
    };
    var SlotFlags = {
      "STABLE": 1,
      "1": "STABLE",
      "DYNAMIC": 2,
      "2": "DYNAMIC",
      "FORWARDED": 3,
      "3": "FORWARDED"
    };
    var slotFlagsText = {
      [1]: "STABLE",
      [2]: "DYNAMIC",
      [3]: "FORWARDED"
    };
    var GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol";
    var isGloballyAllowed = /* @__PURE__ */ makeMap(GLOBALS_ALLOWED);
    var isGloballyWhitelisted = isGloballyAllowed;
    var range = 2;
    function generateCodeFrame(source, start2 = 0, end = source.length) {
      start2 = Math.max(0, Math.min(start2, source.length));
      end = Math.max(0, Math.min(end, source.length));
      if (start2 > end) return "";
      let lines = source.split(/(\r?\n)/);
      const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
      lines = lines.filter((_, idx) => idx % 2 === 0);
      let count = 0;
      const res = [];
      for (let i = 0; i < lines.length; i++) {
        count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
        if (count >= start2) {
          for (let j4 = i - range; j4 <= i + range || end > count; j4++) {
            if (j4 < 0 || j4 >= lines.length) continue;
            const line = j4 + 1;
            res.push(
              `${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j4]}`
            );
            const lineLength = lines[j4].length;
            const newLineSeqLength = newlineSequences[j4] && newlineSequences[j4].length || 0;
            if (j4 === i) {
              const pad = start2 - (count - (lineLength + newLineSeqLength));
              const length = Math.max(
                1,
                end > count ? lineLength - pad : end - start2
              );
              res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
            } else if (j4 > i) {
              if (end > count) {
                const length = Math.max(Math.min(end - count, lineLength), 1);
                res.push(`   |  ` + "^".repeat(length));
              }
              count += lineLength + newLineSeqLength;
            }
          }
          break;
        }
      }
      return res.join("\n");
    }
    function normalizeStyle(value) {
      if (isArray(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
          const item = value[i];
          const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
          if (normalized) {
            for (const key in normalized) {
              res[key] = normalized[key];
            }
          }
        }
        return res;
      } else if (isString(value) || isObject(value)) {
        return value;
      }
    }
    var listDelimiterRE = /;(?![^(]*\))/g;
    var propertyDelimiterRE = /:([^]+)/;
    var styleCommentRE = /\/\*[^]*?\*\//g;
    function parseStringStyle(cssText) {
      const ret = {};
      cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
        if (item) {
          const tmp = item.split(propertyDelimiterRE);
          tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
      });
      return ret;
    }
    function stringifyStyle(styles3) {
      if (!styles3) return "";
      if (isString(styles3)) return styles3;
      let ret = "";
      for (const key in styles3) {
        const value = styles3[key];
        if (isString(value) || typeof value === "number") {
          const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
          ret += `${normalizedKey}:${value};`;
        }
      }
      return ret;
    }
    function normalizeClass(value) {
      let res = "";
      if (isString(value)) {
        res = value;
      } else if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          const normalized = normalizeClass(value[i]);
          if (normalized) {
            res += normalized + " ";
          }
        }
      } else if (isObject(value)) {
        for (const name in value) {
          if (value[name]) {
            res += name + " ";
          }
        }
      }
      return res.trim();
    }
    function normalizeProps(props) {
      if (!props) return null;
      let { class: klass, style } = props;
      if (klass && !isString(klass)) {
        props.class = normalizeClass(klass);
      }
      if (style) {
        props.style = normalizeStyle(style);
      }
      return props;
    }
    var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
    var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
    var MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
    var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
    var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
    var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
    var isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
    var isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
    var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
    var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
    var isBooleanAttr = /* @__PURE__ */ makeMap(
      specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`
    );
    function includeBooleanAttr(value) {
      return !!value || value === "";
    }
    var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
    var attrValidationCache = {};
    function isSSRSafeAttrName(name) {
      if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name];
      }
      const isUnsafe = unsafeAttrCharRE.test(name);
      if (isUnsafe) {
        console.error(`unsafe attribute name: ${name}`);
      }
      return attrValidationCache[name] = !isUnsafe;
    }
    var propsToAttrMap = {
      acceptCharset: "accept-charset",
      className: "class",
      htmlFor: "for",
      httpEquiv: "http-equiv"
    };
    var isKnownHtmlAttr = /* @__PURE__ */ makeMap(
      `accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`
    );
    var isKnownSvgAttr = /* @__PURE__ */ makeMap(
      `xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`
    );
    var isKnownMathMLAttr = /* @__PURE__ */ makeMap(
      `accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns`
    );
    function isRenderableAttrValue(value) {
      if (value == null) {
        return false;
      }
      const type = typeof value;
      return type === "string" || type === "number" || type === "boolean";
    }
    var escapeRE = /["'&<>]/;
    function escapeHtml(string) {
      const str = "" + string;
      const match = escapeRE.exec(str);
      if (!match) {
        return str;
      }
      let html = "";
      let escaped;
      let index;
      let lastIndex = 0;
      for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
          case 34:
            escaped = "&quot;";
            break;
          case 38:
            escaped = "&amp;";
            break;
          case 39:
            escaped = "&#39;";
            break;
          case 60:
            escaped = "&lt;";
            break;
          case 62:
            escaped = "&gt;";
            break;
          default:
            continue;
        }
        if (lastIndex !== index) {
          html += str.slice(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escaped;
      }
      return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
    }
    var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
    function escapeHtmlComment(src) {
      return src.replace(commentStripRE, "");
    }
    var cssVarNameEscapeSymbolsRE = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
    function getEscapedCssVarName(key, doubleEscape) {
      return key.replace(
        cssVarNameEscapeSymbolsRE,
        (s) => doubleEscape ? s === '"' ? '\\\\\\"' : `\\\\${s}` : `\\${s}`
      );
    }
    function looseCompareArrays(a, b2) {
      if (a.length !== b2.length) return false;
      let equal = true;
      for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b2[i]);
      }
      return equal;
    }
    function looseEqual(a, b2) {
      if (a === b2) return true;
      let aValidType = isDate(a);
      let bValidType = isDate(b2);
      if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b2.getTime() : false;
      }
      aValidType = isSymbol(a);
      bValidType = isSymbol(b2);
      if (aValidType || bValidType) {
        return a === b2;
      }
      aValidType = isArray(a);
      bValidType = isArray(b2);
      if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b2) : false;
      }
      aValidType = isObject(a);
      bValidType = isObject(b2);
      if (aValidType || bValidType) {
        if (!aValidType || !bValidType) {
          return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b2).length;
        if (aKeysCount !== bKeysCount) {
          return false;
        }
        for (const key in a) {
          const aHasKey = a.hasOwnProperty(key);
          const bHasKey = b2.hasOwnProperty(key);
          if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b2[key])) {
            return false;
          }
        }
      }
      return String(a) === String(b2);
    }
    function looseIndexOf(arr, val) {
      return arr.findIndex((item) => looseEqual(item, val));
    }
    var isRef = (val) => {
      return !!(val && val["__v_isRef"] === true);
    };
    var toDisplayString = (val) => {
      return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
    };
    var replacer = (_key, val) => {
      if (isRef(val)) {
        return replacer(_key, val.value);
      } else if (isMap(val)) {
        return {
          [`Map(${val.size})`]: [...val.entries()].reduce(
            (entries, [key, val2], i) => {
              entries[stringifySymbol(key, i) + " =>"] = val2;
              return entries;
            },
            {}
          )
        };
      } else if (isSet(val)) {
        return {
          [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
        };
      } else if (isSymbol(val)) {
        return stringifySymbol(val);
      } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
      }
      return val;
    };
    var stringifySymbol = (v, i = "") => {
      var _a;
      return (
        // Symbol.description in es2019+ so we need to cast here to pass
        // the lib: es2016 check
        isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v
      );
    };
    exports2.EMPTY_ARR = EMPTY_ARR;
    exports2.EMPTY_OBJ = EMPTY_OBJ;
    exports2.NO = NO;
    exports2.NOOP = NOOP;
    exports2.PatchFlagNames = PatchFlagNames;
    exports2.PatchFlags = PatchFlags;
    exports2.ShapeFlags = ShapeFlags;
    exports2.SlotFlags = SlotFlags;
    exports2.camelize = camelize;
    exports2.capitalize = capitalize;
    exports2.cssVarNameEscapeSymbolsRE = cssVarNameEscapeSymbolsRE;
    exports2.def = def;
    exports2.escapeHtml = escapeHtml;
    exports2.escapeHtmlComment = escapeHtmlComment;
    exports2.extend = extend;
    exports2.genCacheKey = genCacheKey;
    exports2.genPropsAccessExp = genPropsAccessExp;
    exports2.generateCodeFrame = generateCodeFrame;
    exports2.getEscapedCssVarName = getEscapedCssVarName;
    exports2.getGlobalThis = getGlobalThis;
    exports2.hasChanged = hasChanged;
    exports2.hasOwn = hasOwn;
    exports2.hyphenate = hyphenate;
    exports2.includeBooleanAttr = includeBooleanAttr;
    exports2.invokeArrayFns = invokeArrayFns;
    exports2.isArray = isArray;
    exports2.isBooleanAttr = isBooleanAttr;
    exports2.isBuiltInDirective = isBuiltInDirective;
    exports2.isDate = isDate;
    exports2.isFunction = isFunction;
    exports2.isGloballyAllowed = isGloballyAllowed;
    exports2.isGloballyWhitelisted = isGloballyWhitelisted;
    exports2.isHTMLTag = isHTMLTag;
    exports2.isIntegerKey = isIntegerKey;
    exports2.isKnownHtmlAttr = isKnownHtmlAttr;
    exports2.isKnownMathMLAttr = isKnownMathMLAttr;
    exports2.isKnownSvgAttr = isKnownSvgAttr;
    exports2.isMap = isMap;
    exports2.isMathMLTag = isMathMLTag;
    exports2.isModelListener = isModelListener;
    exports2.isObject = isObject;
    exports2.isOn = isOn;
    exports2.isPlainObject = isPlainObject;
    exports2.isPromise = isPromise;
    exports2.isRegExp = isRegExp;
    exports2.isRenderableAttrValue = isRenderableAttrValue;
    exports2.isReservedProp = isReservedProp;
    exports2.isSSRSafeAttrName = isSSRSafeAttrName;
    exports2.isSVGTag = isSVGTag;
    exports2.isSet = isSet;
    exports2.isSpecialBooleanAttr = isSpecialBooleanAttr;
    exports2.isString = isString;
    exports2.isSymbol = isSymbol;
    exports2.isVoidTag = isVoidTag;
    exports2.looseEqual = looseEqual;
    exports2.looseIndexOf = looseIndexOf;
    exports2.looseToNumber = looseToNumber;
    exports2.makeMap = makeMap;
    exports2.normalizeClass = normalizeClass;
    exports2.normalizeProps = normalizeProps;
    exports2.normalizeStyle = normalizeStyle;
    exports2.objectToString = objectToString;
    exports2.parseStringStyle = parseStringStyle;
    exports2.propsToAttrMap = propsToAttrMap;
    exports2.remove = remove;
    exports2.slotFlagsText = slotFlagsText;
    exports2.stringifyStyle = stringifyStyle;
    exports2.toDisplayString = toDisplayString;
    exports2.toHandlerKey = toHandlerKey;
    exports2.toNumber = toNumber;
    exports2.toRawType = toRawType;
    exports2.toTypeString = toTypeString;
  }
});

// node_modules/.pnpm/@vue+shared@3.5.13/node_modules/@vue/shared/dist/shared.cjs.js
var require_shared_cjs = __commonJS({
  "node_modules/.pnpm/@vue+shared@3.5.13/node_modules/@vue/shared/dist/shared.cjs.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    // @__NO_SIDE_EFFECTS__
    function makeMap(str) {
      const map = /* @__PURE__ */ Object.create(null);
      for (const key of str.split(",")) map[key] = 1;
      return (val) => val in map;
    }
    var EMPTY_OBJ = Object.freeze({});
    var EMPTY_ARR = Object.freeze([]);
    var NOOP = () => {
    };
    var NO = () => false;
    var isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
    (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
    var isModelListener = (key) => key.startsWith("onUpdate:");
    var extend = Object.assign;
    var remove = (arr, el) => {
      const i = arr.indexOf(el);
      if (i > -1) {
        arr.splice(i, 1);
      }
    };
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var hasOwn = (val, key) => hasOwnProperty.call(val, key);
    var isArray = Array.isArray;
    var isMap = (val) => toTypeString(val) === "[object Map]";
    var isSet = (val) => toTypeString(val) === "[object Set]";
    var isDate = (val) => toTypeString(val) === "[object Date]";
    var isRegExp = (val) => toTypeString(val) === "[object RegExp]";
    var isFunction = (val) => typeof val === "function";
    var isString = (val) => typeof val === "string";
    var isSymbol = (val) => typeof val === "symbol";
    var isObject = (val) => val !== null && typeof val === "object";
    var isPromise = (val) => {
      return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
    };
    var objectToString = Object.prototype.toString;
    var toTypeString = (value) => objectToString.call(value);
    var toRawType = (value) => {
      return toTypeString(value).slice(8, -1);
    };
    var isPlainObject = (val) => toTypeString(val) === "[object Object]";
    var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
    var isReservedProp = /* @__PURE__ */ makeMap(
      // the leading comma is intentional so empty string "" is also included
      ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
    );
    var isBuiltInDirective = /* @__PURE__ */ makeMap(
      "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
    );
    var cacheStringFunction = (fn3) => {
      const cache = /* @__PURE__ */ Object.create(null);
      return (str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn3(str));
      };
    };
    var camelizeRE = /-(\w)/g;
    var camelize = cacheStringFunction(
      (str) => {
        return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
      }
    );
    var hyphenateRE = /\B([A-Z])/g;
    var hyphenate = cacheStringFunction(
      (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
    );
    var capitalize = cacheStringFunction((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    var toHandlerKey = cacheStringFunction(
      (str) => {
        const s = str ? `on${capitalize(str)}` : ``;
        return s;
      }
    );
    var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
    var invokeArrayFns = (fns, ...arg) => {
      for (let i = 0; i < fns.length; i++) {
        fns[i](...arg);
      }
    };
    var def = (obj, key, value, writable = false) => {
      Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        writable,
        value
      });
    };
    var looseToNumber = (val) => {
      const n = parseFloat(val);
      return isNaN(n) ? val : n;
    };
    var toNumber = (val) => {
      const n = isString(val) ? Number(val) : NaN;
      return isNaN(n) ? val : n;
    };
    var _globalThis;
    var getGlobalThis = () => {
      return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    };
    var identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
    function genPropsAccessExp(name) {
      return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
    }
    function genCacheKey(source, options) {
      return source + JSON.stringify(
        options,
        (_, val) => typeof val === "function" ? val.toString() : val
      );
    }
    var PatchFlags = {
      "TEXT": 1,
      "1": "TEXT",
      "CLASS": 2,
      "2": "CLASS",
      "STYLE": 4,
      "4": "STYLE",
      "PROPS": 8,
      "8": "PROPS",
      "FULL_PROPS": 16,
      "16": "FULL_PROPS",
      "NEED_HYDRATION": 32,
      "32": "NEED_HYDRATION",
      "STABLE_FRAGMENT": 64,
      "64": "STABLE_FRAGMENT",
      "KEYED_FRAGMENT": 128,
      "128": "KEYED_FRAGMENT",
      "UNKEYED_FRAGMENT": 256,
      "256": "UNKEYED_FRAGMENT",
      "NEED_PATCH": 512,
      "512": "NEED_PATCH",
      "DYNAMIC_SLOTS": 1024,
      "1024": "DYNAMIC_SLOTS",
      "DEV_ROOT_FRAGMENT": 2048,
      "2048": "DEV_ROOT_FRAGMENT",
      "CACHED": -1,
      "-1": "CACHED",
      "BAIL": -2,
      "-2": "BAIL"
    };
    var PatchFlagNames = {
      [1]: `TEXT`,
      [2]: `CLASS`,
      [4]: `STYLE`,
      [8]: `PROPS`,
      [16]: `FULL_PROPS`,
      [32]: `NEED_HYDRATION`,
      [64]: `STABLE_FRAGMENT`,
      [128]: `KEYED_FRAGMENT`,
      [256]: `UNKEYED_FRAGMENT`,
      [512]: `NEED_PATCH`,
      [1024]: `DYNAMIC_SLOTS`,
      [2048]: `DEV_ROOT_FRAGMENT`,
      [-1]: `HOISTED`,
      [-2]: `BAIL`
    };
    var ShapeFlags = {
      "ELEMENT": 1,
      "1": "ELEMENT",
      "FUNCTIONAL_COMPONENT": 2,
      "2": "FUNCTIONAL_COMPONENT",
      "STATEFUL_COMPONENT": 4,
      "4": "STATEFUL_COMPONENT",
      "TEXT_CHILDREN": 8,
      "8": "TEXT_CHILDREN",
      "ARRAY_CHILDREN": 16,
      "16": "ARRAY_CHILDREN",
      "SLOTS_CHILDREN": 32,
      "32": "SLOTS_CHILDREN",
      "TELEPORT": 64,
      "64": "TELEPORT",
      "SUSPENSE": 128,
      "128": "SUSPENSE",
      "COMPONENT_SHOULD_KEEP_ALIVE": 256,
      "256": "COMPONENT_SHOULD_KEEP_ALIVE",
      "COMPONENT_KEPT_ALIVE": 512,
      "512": "COMPONENT_KEPT_ALIVE",
      "COMPONENT": 6,
      "6": "COMPONENT"
    };
    var SlotFlags = {
      "STABLE": 1,
      "1": "STABLE",
      "DYNAMIC": 2,
      "2": "DYNAMIC",
      "FORWARDED": 3,
      "3": "FORWARDED"
    };
    var slotFlagsText = {
      [1]: "STABLE",
      [2]: "DYNAMIC",
      [3]: "FORWARDED"
    };
    var GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol";
    var isGloballyAllowed = /* @__PURE__ */ makeMap(GLOBALS_ALLOWED);
    var isGloballyWhitelisted = isGloballyAllowed;
    var range = 2;
    function generateCodeFrame(source, start2 = 0, end = source.length) {
      start2 = Math.max(0, Math.min(start2, source.length));
      end = Math.max(0, Math.min(end, source.length));
      if (start2 > end) return "";
      let lines = source.split(/(\r?\n)/);
      const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
      lines = lines.filter((_, idx) => idx % 2 === 0);
      let count = 0;
      const res = [];
      for (let i = 0; i < lines.length; i++) {
        count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
        if (count >= start2) {
          for (let j4 = i - range; j4 <= i + range || end > count; j4++) {
            if (j4 < 0 || j4 >= lines.length) continue;
            const line = j4 + 1;
            res.push(
              `${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j4]}`
            );
            const lineLength = lines[j4].length;
            const newLineSeqLength = newlineSequences[j4] && newlineSequences[j4].length || 0;
            if (j4 === i) {
              const pad = start2 - (count - (lineLength + newLineSeqLength));
              const length = Math.max(
                1,
                end > count ? lineLength - pad : end - start2
              );
              res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
            } else if (j4 > i) {
              if (end > count) {
                const length = Math.max(Math.min(end - count, lineLength), 1);
                res.push(`   |  ` + "^".repeat(length));
              }
              count += lineLength + newLineSeqLength;
            }
          }
          break;
        }
      }
      return res.join("\n");
    }
    function normalizeStyle(value) {
      if (isArray(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
          const item = value[i];
          const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
          if (normalized) {
            for (const key in normalized) {
              res[key] = normalized[key];
            }
          }
        }
        return res;
      } else if (isString(value) || isObject(value)) {
        return value;
      }
    }
    var listDelimiterRE = /;(?![^(]*\))/g;
    var propertyDelimiterRE = /:([^]+)/;
    var styleCommentRE = /\/\*[^]*?\*\//g;
    function parseStringStyle(cssText) {
      const ret = {};
      cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
        if (item) {
          const tmp = item.split(propertyDelimiterRE);
          tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
      });
      return ret;
    }
    function stringifyStyle(styles3) {
      if (!styles3) return "";
      if (isString(styles3)) return styles3;
      let ret = "";
      for (const key in styles3) {
        const value = styles3[key];
        if (isString(value) || typeof value === "number") {
          const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
          ret += `${normalizedKey}:${value};`;
        }
      }
      return ret;
    }
    function normalizeClass(value) {
      let res = "";
      if (isString(value)) {
        res = value;
      } else if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          const normalized = normalizeClass(value[i]);
          if (normalized) {
            res += normalized + " ";
          }
        }
      } else if (isObject(value)) {
        for (const name in value) {
          if (value[name]) {
            res += name + " ";
          }
        }
      }
      return res.trim();
    }
    function normalizeProps(props) {
      if (!props) return null;
      let { class: klass, style } = props;
      if (klass && !isString(klass)) {
        props.class = normalizeClass(klass);
      }
      if (style) {
        props.style = normalizeStyle(style);
      }
      return props;
    }
    var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
    var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
    var MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
    var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
    var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
    var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
    var isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
    var isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
    var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
    var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
    var isBooleanAttr = /* @__PURE__ */ makeMap(
      specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`
    );
    function includeBooleanAttr(value) {
      return !!value || value === "";
    }
    var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
    var attrValidationCache = {};
    function isSSRSafeAttrName(name) {
      if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name];
      }
      const isUnsafe = unsafeAttrCharRE.test(name);
      if (isUnsafe) {
        console.error(`unsafe attribute name: ${name}`);
      }
      return attrValidationCache[name] = !isUnsafe;
    }
    var propsToAttrMap = {
      acceptCharset: "accept-charset",
      className: "class",
      htmlFor: "for",
      httpEquiv: "http-equiv"
    };
    var isKnownHtmlAttr = /* @__PURE__ */ makeMap(
      `accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`
    );
    var isKnownSvgAttr = /* @__PURE__ */ makeMap(
      `xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`
    );
    var isKnownMathMLAttr = /* @__PURE__ */ makeMap(
      `accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns`
    );
    function isRenderableAttrValue(value) {
      if (value == null) {
        return false;
      }
      const type = typeof value;
      return type === "string" || type === "number" || type === "boolean";
    }
    var escapeRE = /["'&<>]/;
    function escapeHtml(string) {
      const str = "" + string;
      const match = escapeRE.exec(str);
      if (!match) {
        return str;
      }
      let html = "";
      let escaped;
      let index;
      let lastIndex = 0;
      for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
          case 34:
            escaped = "&quot;";
            break;
          case 38:
            escaped = "&amp;";
            break;
          case 39:
            escaped = "&#39;";
            break;
          case 60:
            escaped = "&lt;";
            break;
          case 62:
            escaped = "&gt;";
            break;
          default:
            continue;
        }
        if (lastIndex !== index) {
          html += str.slice(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escaped;
      }
      return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
    }
    var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
    function escapeHtmlComment(src) {
      return src.replace(commentStripRE, "");
    }
    var cssVarNameEscapeSymbolsRE = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
    function getEscapedCssVarName(key, doubleEscape) {
      return key.replace(
        cssVarNameEscapeSymbolsRE,
        (s) => doubleEscape ? s === '"' ? '\\\\\\"' : `\\\\${s}` : `\\${s}`
      );
    }
    function looseCompareArrays(a, b2) {
      if (a.length !== b2.length) return false;
      let equal = true;
      for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b2[i]);
      }
      return equal;
    }
    function looseEqual(a, b2) {
      if (a === b2) return true;
      let aValidType = isDate(a);
      let bValidType = isDate(b2);
      if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b2.getTime() : false;
      }
      aValidType = isSymbol(a);
      bValidType = isSymbol(b2);
      if (aValidType || bValidType) {
        return a === b2;
      }
      aValidType = isArray(a);
      bValidType = isArray(b2);
      if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b2) : false;
      }
      aValidType = isObject(a);
      bValidType = isObject(b2);
      if (aValidType || bValidType) {
        if (!aValidType || !bValidType) {
          return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b2).length;
        if (aKeysCount !== bKeysCount) {
          return false;
        }
        for (const key in a) {
          const aHasKey = a.hasOwnProperty(key);
          const bHasKey = b2.hasOwnProperty(key);
          if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b2[key])) {
            return false;
          }
        }
      }
      return String(a) === String(b2);
    }
    function looseIndexOf(arr, val) {
      return arr.findIndex((item) => looseEqual(item, val));
    }
    var isRef = (val) => {
      return !!(val && val["__v_isRef"] === true);
    };
    var toDisplayString = (val) => {
      return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
    };
    var replacer = (_key, val) => {
      if (isRef(val)) {
        return replacer(_key, val.value);
      } else if (isMap(val)) {
        return {
          [`Map(${val.size})`]: [...val.entries()].reduce(
            (entries, [key, val2], i) => {
              entries[stringifySymbol(key, i) + " =>"] = val2;
              return entries;
            },
            {}
          )
        };
      } else if (isSet(val)) {
        return {
          [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
        };
      } else if (isSymbol(val)) {
        return stringifySymbol(val);
      } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
      }
      return val;
    };
    var stringifySymbol = (v, i = "") => {
      var _a;
      return (
        // Symbol.description in es2019+ so we need to cast here to pass
        // the lib: es2016 check
        isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v
      );
    };
    exports2.EMPTY_ARR = EMPTY_ARR;
    exports2.EMPTY_OBJ = EMPTY_OBJ;
    exports2.NO = NO;
    exports2.NOOP = NOOP;
    exports2.PatchFlagNames = PatchFlagNames;
    exports2.PatchFlags = PatchFlags;
    exports2.ShapeFlags = ShapeFlags;
    exports2.SlotFlags = SlotFlags;
    exports2.camelize = camelize;
    exports2.capitalize = capitalize;
    exports2.cssVarNameEscapeSymbolsRE = cssVarNameEscapeSymbolsRE;
    exports2.def = def;
    exports2.escapeHtml = escapeHtml;
    exports2.escapeHtmlComment = escapeHtmlComment;
    exports2.extend = extend;
    exports2.genCacheKey = genCacheKey;
    exports2.genPropsAccessExp = genPropsAccessExp;
    exports2.generateCodeFrame = generateCodeFrame;
    exports2.getEscapedCssVarName = getEscapedCssVarName;
    exports2.getGlobalThis = getGlobalThis;
    exports2.hasChanged = hasChanged;
    exports2.hasOwn = hasOwn;
    exports2.hyphenate = hyphenate;
    exports2.includeBooleanAttr = includeBooleanAttr;
    exports2.invokeArrayFns = invokeArrayFns;
    exports2.isArray = isArray;
    exports2.isBooleanAttr = isBooleanAttr;
    exports2.isBuiltInDirective = isBuiltInDirective;
    exports2.isDate = isDate;
    exports2.isFunction = isFunction;
    exports2.isGloballyAllowed = isGloballyAllowed;
    exports2.isGloballyWhitelisted = isGloballyWhitelisted;
    exports2.isHTMLTag = isHTMLTag;
    exports2.isIntegerKey = isIntegerKey;
    exports2.isKnownHtmlAttr = isKnownHtmlAttr;
    exports2.isKnownMathMLAttr = isKnownMathMLAttr;
    exports2.isKnownSvgAttr = isKnownSvgAttr;
    exports2.isMap = isMap;
    exports2.isMathMLTag = isMathMLTag;
    exports2.isModelListener = isModelListener;
    exports2.isObject = isObject;
    exports2.isOn = isOn;
    exports2.isPlainObject = isPlainObject;
    exports2.isPromise = isPromise;
    exports2.isRegExp = isRegExp;
    exports2.isRenderableAttrValue = isRenderableAttrValue;
    exports2.isReservedProp = isReservedProp;
    exports2.isSSRSafeAttrName = isSSRSafeAttrName;
    exports2.isSVGTag = isSVGTag;
    exports2.isSet = isSet;
    exports2.isSpecialBooleanAttr = isSpecialBooleanAttr;
    exports2.isString = isString;
    exports2.isSymbol = isSymbol;
    exports2.isVoidTag = isVoidTag;
    exports2.looseEqual = looseEqual;
    exports2.looseIndexOf = looseIndexOf;
    exports2.looseToNumber = looseToNumber;
    exports2.makeMap = makeMap;
    exports2.normalizeClass = normalizeClass;
    exports2.normalizeProps = normalizeProps;
    exports2.normalizeStyle = normalizeStyle;
    exports2.objectToString = objectToString;
    exports2.parseStringStyle = parseStringStyle;
    exports2.propsToAttrMap = propsToAttrMap;
    exports2.remove = remove;
    exports2.slotFlagsText = slotFlagsText;
    exports2.stringifyStyle = stringifyStyle;
    exports2.toDisplayString = toDisplayString;
    exports2.toHandlerKey = toHandlerKey;
    exports2.toNumber = toNumber;
    exports2.toRawType = toRawType;
    exports2.toTypeString = toTypeString;
  }
});

// node_modules/.pnpm/@vue+shared@3.5.13/node_modules/@vue/shared/index.js
var require_shared = __commonJS({
  "node_modules/.pnpm/@vue+shared@3.5.13/node_modules/@vue/shared/index.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_shared_cjs_prod();
    } else {
      module2.exports = require_shared_cjs();
    }
  }
});

// node_modules/.pnpm/@vue+reactivity@3.5.13/node_modules/@vue/reactivity/dist/reactivity.cjs.prod.js
var require_reactivity_cjs_prod = __commonJS({
  "node_modules/.pnpm/@vue+reactivity@3.5.13/node_modules/@vue/reactivity/dist/reactivity.cjs.prod.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var shared = require_shared();
    var activeEffectScope;
    var EffectScope = class {
      constructor(detached = false) {
        this.detached = detached;
        this._active = true;
        this.effects = [];
        this.cleanups = [];
        this._isPaused = false;
        this.parent = activeEffectScope;
        if (!detached && activeEffectScope) {
          this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
            this
          ) - 1;
        }
      }
      get active() {
        return this._active;
      }
      pause() {
        if (this._active) {
          this._isPaused = true;
          let i, l2;
          if (this.scopes) {
            for (i = 0, l2 = this.scopes.length; i < l2; i++) {
              this.scopes[i].pause();
            }
          }
          for (i = 0, l2 = this.effects.length; i < l2; i++) {
            this.effects[i].pause();
          }
        }
      }
      /**
       * Resumes the effect scope, including all child scopes and effects.
       */
      resume() {
        if (this._active) {
          if (this._isPaused) {
            this._isPaused = false;
            let i, l2;
            if (this.scopes) {
              for (i = 0, l2 = this.scopes.length; i < l2; i++) {
                this.scopes[i].resume();
              }
            }
            for (i = 0, l2 = this.effects.length; i < l2; i++) {
              this.effects[i].resume();
            }
          }
        }
      }
      run(fn3) {
        if (this._active) {
          const currentEffectScope = activeEffectScope;
          try {
            activeEffectScope = this;
            return fn3();
          } finally {
            activeEffectScope = currentEffectScope;
          }
        }
      }
      /**
       * This should only be called on non-detached scopes
       * @internal
       */
      on() {
        activeEffectScope = this;
      }
      /**
       * This should only be called on non-detached scopes
       * @internal
       */
      off() {
        activeEffectScope = this.parent;
      }
      stop(fromParent) {
        if (this._active) {
          this._active = false;
          let i, l2;
          for (i = 0, l2 = this.effects.length; i < l2; i++) {
            this.effects[i].stop();
          }
          this.effects.length = 0;
          for (i = 0, l2 = this.cleanups.length; i < l2; i++) {
            this.cleanups[i]();
          }
          this.cleanups.length = 0;
          if (this.scopes) {
            for (i = 0, l2 = this.scopes.length; i < l2; i++) {
              this.scopes[i].stop(true);
            }
            this.scopes.length = 0;
          }
          if (!this.detached && this.parent && !fromParent) {
            const last = this.parent.scopes.pop();
            if (last && last !== this) {
              this.parent.scopes[this.index] = last;
              last.index = this.index;
            }
          }
          this.parent = void 0;
        }
      }
    };
    function effectScope(detached) {
      return new EffectScope(detached);
    }
    function getCurrentScope() {
      return activeEffectScope;
    }
    function onScopeDispose(fn3, failSilently = false) {
      if (activeEffectScope) {
        activeEffectScope.cleanups.push(fn3);
      }
    }
    var activeSub;
    var EffectFlags = {
      "ACTIVE": 1,
      "1": "ACTIVE",
      "RUNNING": 2,
      "2": "RUNNING",
      "TRACKING": 4,
      "4": "TRACKING",
      "NOTIFIED": 8,
      "8": "NOTIFIED",
      "DIRTY": 16,
      "16": "DIRTY",
      "ALLOW_RECURSE": 32,
      "32": "ALLOW_RECURSE",
      "PAUSED": 64,
      "64": "PAUSED"
    };
    var pausedQueueEffects = /* @__PURE__ */ new WeakSet();
    var ReactiveEffect = class {
      constructor(fn3) {
        this.fn = fn3;
        this.deps = void 0;
        this.depsTail = void 0;
        this.flags = 1 | 4;
        this.next = void 0;
        this.cleanup = void 0;
        this.scheduler = void 0;
        if (activeEffectScope && activeEffectScope.active) {
          activeEffectScope.effects.push(this);
        }
      }
      pause() {
        this.flags |= 64;
      }
      resume() {
        if (this.flags & 64) {
          this.flags &= ~64;
          if (pausedQueueEffects.has(this)) {
            pausedQueueEffects.delete(this);
            this.trigger();
          }
        }
      }
      /**
       * @internal
       */
      notify() {
        if (this.flags & 2 && !(this.flags & 32)) {
          return;
        }
        if (!(this.flags & 8)) {
          batch(this);
        }
      }
      run() {
        if (!(this.flags & 1)) {
          return this.fn();
        }
        this.flags |= 2;
        cleanupEffect(this);
        prepareDeps(this);
        const prevEffect = activeSub;
        const prevShouldTrack = shouldTrack;
        activeSub = this;
        shouldTrack = true;
        try {
          return this.fn();
        } finally {
          cleanupDeps(this);
          activeSub = prevEffect;
          shouldTrack = prevShouldTrack;
          this.flags &= ~2;
        }
      }
      stop() {
        if (this.flags & 1) {
          for (let link = this.deps; link; link = link.nextDep) {
            removeSub(link);
          }
          this.deps = this.depsTail = void 0;
          cleanupEffect(this);
          this.onStop && this.onStop();
          this.flags &= ~1;
        }
      }
      trigger() {
        if (this.flags & 64) {
          pausedQueueEffects.add(this);
        } else if (this.scheduler) {
          this.scheduler();
        } else {
          this.runIfDirty();
        }
      }
      /**
       * @internal
       */
      runIfDirty() {
        if (isDirty(this)) {
          this.run();
        }
      }
      get dirty() {
        return isDirty(this);
      }
    };
    var batchDepth = 0;
    var batchedSub;
    var batchedComputed;
    function batch(sub, isComputed = false) {
      sub.flags |= 8;
      if (isComputed) {
        sub.next = batchedComputed;
        batchedComputed = sub;
        return;
      }
      sub.next = batchedSub;
      batchedSub = sub;
    }
    function startBatch() {
      batchDepth++;
    }
    function endBatch() {
      if (--batchDepth > 0) {
        return;
      }
      if (batchedComputed) {
        let e = batchedComputed;
        batchedComputed = void 0;
        while (e) {
          const next = e.next;
          e.next = void 0;
          e.flags &= ~8;
          e = next;
        }
      }
      let error;
      while (batchedSub) {
        let e = batchedSub;
        batchedSub = void 0;
        while (e) {
          const next = e.next;
          e.next = void 0;
          e.flags &= ~8;
          if (e.flags & 1) {
            try {
              ;
              e.trigger();
            } catch (err) {
              if (!error) error = err;
            }
          }
          e = next;
        }
      }
      if (error) throw error;
    }
    function prepareDeps(sub) {
      for (let link = sub.deps; link; link = link.nextDep) {
        link.version = -1;
        link.prevActiveLink = link.dep.activeLink;
        link.dep.activeLink = link;
      }
    }
    function cleanupDeps(sub) {
      let head;
      let tail = sub.depsTail;
      let link = tail;
      while (link) {
        const prev = link.prevDep;
        if (link.version === -1) {
          if (link === tail) tail = prev;
          removeSub(link);
          removeDep(link);
        } else {
          head = link;
        }
        link.dep.activeLink = link.prevActiveLink;
        link.prevActiveLink = void 0;
        link = prev;
      }
      sub.deps = head;
      sub.depsTail = tail;
    }
    function isDirty(sub) {
      for (let link = sub.deps; link; link = link.nextDep) {
        if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) {
          return true;
        }
      }
      if (sub._dirty) {
        return true;
      }
      return false;
    }
    function refreshComputed(computed2) {
      if (computed2.flags & 4 && !(computed2.flags & 16)) {
        return;
      }
      computed2.flags &= ~16;
      if (computed2.globalVersion === globalVersion) {
        return;
      }
      computed2.globalVersion = globalVersion;
      const dep = computed2.dep;
      computed2.flags |= 2;
      if (dep.version > 0 && !computed2.isSSR && computed2.deps && !isDirty(computed2)) {
        computed2.flags &= ~2;
        return;
      }
      const prevSub = activeSub;
      const prevShouldTrack = shouldTrack;
      activeSub = computed2;
      shouldTrack = true;
      try {
        prepareDeps(computed2);
        const value = computed2.fn(computed2._value);
        if (dep.version === 0 || shared.hasChanged(value, computed2._value)) {
          computed2._value = value;
          dep.version++;
        }
      } catch (err) {
        dep.version++;
        throw err;
      } finally {
        activeSub = prevSub;
        shouldTrack = prevShouldTrack;
        cleanupDeps(computed2);
        computed2.flags &= ~2;
      }
    }
    function removeSub(link, soft = false) {
      const { dep, prevSub, nextSub } = link;
      if (prevSub) {
        prevSub.nextSub = nextSub;
        link.prevSub = void 0;
      }
      if (nextSub) {
        nextSub.prevSub = prevSub;
        link.nextSub = void 0;
      }
      if (dep.subs === link) {
        dep.subs = prevSub;
        if (!prevSub && dep.computed) {
          dep.computed.flags &= ~4;
          for (let l2 = dep.computed.deps; l2; l2 = l2.nextDep) {
            removeSub(l2, true);
          }
        }
      }
      if (!soft && !--dep.sc && dep.map) {
        dep.map.delete(dep.key);
      }
    }
    function removeDep(link) {
      const { prevDep, nextDep } = link;
      if (prevDep) {
        prevDep.nextDep = nextDep;
        link.prevDep = void 0;
      }
      if (nextDep) {
        nextDep.prevDep = prevDep;
        link.nextDep = void 0;
      }
    }
    function effect(fn3, options) {
      if (fn3.effect instanceof ReactiveEffect) {
        fn3 = fn3.effect.fn;
      }
      const e = new ReactiveEffect(fn3);
      if (options) {
        shared.extend(e, options);
      }
      try {
        e.run();
      } catch (err) {
        e.stop();
        throw err;
      }
      const runner = e.run.bind(e);
      runner.effect = e;
      return runner;
    }
    function stop(runner) {
      runner.effect.stop();
    }
    var shouldTrack = true;
    var trackStack = [];
    function pauseTracking() {
      trackStack.push(shouldTrack);
      shouldTrack = false;
    }
    function enableTracking() {
      trackStack.push(shouldTrack);
      shouldTrack = true;
    }
    function resetTracking() {
      const last = trackStack.pop();
      shouldTrack = last === void 0 ? true : last;
    }
    function onEffectCleanup(fn3, failSilently = false) {
      if (activeSub instanceof ReactiveEffect) {
        activeSub.cleanup = fn3;
      }
    }
    function cleanupEffect(e) {
      const { cleanup } = e;
      e.cleanup = void 0;
      if (cleanup) {
        const prevSub = activeSub;
        activeSub = void 0;
        try {
          cleanup();
        } finally {
          activeSub = prevSub;
        }
      }
    }
    var globalVersion = 0;
    var Link = class {
      constructor(sub, dep) {
        this.sub = sub;
        this.dep = dep;
        this.version = dep.version;
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
      }
    };
    var Dep = class {
      constructor(computed2) {
        this.computed = computed2;
        this.version = 0;
        this.activeLink = void 0;
        this.subs = void 0;
        this.map = void 0;
        this.key = void 0;
        this.sc = 0;
      }
      track(debugInfo) {
        if (!activeSub || !shouldTrack || activeSub === this.computed) {
          return;
        }
        let link = this.activeLink;
        if (link === void 0 || link.sub !== activeSub) {
          link = this.activeLink = new Link(activeSub, this);
          if (!activeSub.deps) {
            activeSub.deps = activeSub.depsTail = link;
          } else {
            link.prevDep = activeSub.depsTail;
            activeSub.depsTail.nextDep = link;
            activeSub.depsTail = link;
          }
          addSub(link);
        } else if (link.version === -1) {
          link.version = this.version;
          if (link.nextDep) {
            const next = link.nextDep;
            next.prevDep = link.prevDep;
            if (link.prevDep) {
              link.prevDep.nextDep = next;
            }
            link.prevDep = activeSub.depsTail;
            link.nextDep = void 0;
            activeSub.depsTail.nextDep = link;
            activeSub.depsTail = link;
            if (activeSub.deps === link) {
              activeSub.deps = next;
            }
          }
        }
        return link;
      }
      trigger(debugInfo) {
        this.version++;
        globalVersion++;
        this.notify(debugInfo);
      }
      notify(debugInfo) {
        startBatch();
        try {
          if (false) ;
          for (let link = this.subs; link; link = link.prevSub) {
            if (link.sub.notify()) {
              ;
              link.sub.dep.notify();
            }
          }
        } finally {
          endBatch();
        }
      }
    };
    function addSub(link) {
      link.dep.sc++;
      if (link.sub.flags & 4) {
        const computed2 = link.dep.computed;
        if (computed2 && !link.dep.subs) {
          computed2.flags |= 4 | 16;
          for (let l2 = computed2.deps; l2; l2 = l2.nextDep) {
            addSub(l2);
          }
        }
        const currentTail = link.dep.subs;
        if (currentTail !== link) {
          link.prevSub = currentTail;
          if (currentTail) currentTail.nextSub = link;
        }
        link.dep.subs = link;
      }
    }
    var targetMap = /* @__PURE__ */ new WeakMap();
    var ITERATE_KEY = Symbol(
      ""
    );
    var MAP_KEY_ITERATE_KEY = Symbol(
      ""
    );
    var ARRAY_ITERATE_KEY = Symbol(
      ""
    );
    function track(target, type, key) {
      if (shouldTrack && activeSub) {
        let depsMap = targetMap.get(target);
        if (!depsMap) {
          targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
        }
        let dep = depsMap.get(key);
        if (!dep) {
          depsMap.set(key, dep = new Dep());
          dep.map = depsMap;
          dep.key = key;
        }
        {
          dep.track();
        }
      }
    }
    function trigger(target, type, key, newValue, oldValue, oldTarget) {
      const depsMap = targetMap.get(target);
      if (!depsMap) {
        globalVersion++;
        return;
      }
      const run = (dep) => {
        if (dep) {
          {
            dep.trigger();
          }
        }
      };
      startBatch();
      if (type === "clear") {
        depsMap.forEach(run);
      } else {
        const targetIsArray = shared.isArray(target);
        const isArrayIndex = targetIsArray && shared.isIntegerKey(key);
        if (targetIsArray && key === "length") {
          const newLength = Number(newValue);
          depsMap.forEach((dep, key2) => {
            if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !shared.isSymbol(key2) && key2 >= newLength) {
              run(dep);
            }
          });
        } else {
          if (key !== void 0 || depsMap.has(void 0)) {
            run(depsMap.get(key));
          }
          if (isArrayIndex) {
            run(depsMap.get(ARRAY_ITERATE_KEY));
          }
          switch (type) {
            case "add":
              if (!targetIsArray) {
                run(depsMap.get(ITERATE_KEY));
                if (shared.isMap(target)) {
                  run(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
              } else if (isArrayIndex) {
                run(depsMap.get("length"));
              }
              break;
            case "delete":
              if (!targetIsArray) {
                run(depsMap.get(ITERATE_KEY));
                if (shared.isMap(target)) {
                  run(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
              }
              break;
            case "set":
              if (shared.isMap(target)) {
                run(depsMap.get(ITERATE_KEY));
              }
              break;
          }
        }
      }
      endBatch();
    }
    function getDepFromReactive(object, key) {
      const depMap = targetMap.get(object);
      return depMap && depMap.get(key);
    }
    function reactiveReadArray(array) {
      const raw = toRaw(array);
      if (raw === array) return raw;
      track(raw, "iterate", ARRAY_ITERATE_KEY);
      return isShallow(array) ? raw : raw.map(toReactive);
    }
    function shallowReadArray(arr) {
      track(arr = toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
      return arr;
    }
    var arrayInstrumentations = {
      __proto__: null,
      [Symbol.iterator]() {
        return iterator(this, Symbol.iterator, toReactive);
      },
      concat(...args) {
        return reactiveReadArray(this).concat(
          ...args.map((x3) => shared.isArray(x3) ? reactiveReadArray(x3) : x3)
        );
      },
      entries() {
        return iterator(this, "entries", (value) => {
          value[1] = toReactive(value[1]);
          return value;
        });
      },
      every(fn3, thisArg) {
        return apply(this, "every", fn3, thisArg, void 0, arguments);
      },
      filter(fn3, thisArg) {
        return apply(this, "filter", fn3, thisArg, (v) => v.map(toReactive), arguments);
      },
      find(fn3, thisArg) {
        return apply(this, "find", fn3, thisArg, toReactive, arguments);
      },
      findIndex(fn3, thisArg) {
        return apply(this, "findIndex", fn3, thisArg, void 0, arguments);
      },
      findLast(fn3, thisArg) {
        return apply(this, "findLast", fn3, thisArg, toReactive, arguments);
      },
      findLastIndex(fn3, thisArg) {
        return apply(this, "findLastIndex", fn3, thisArg, void 0, arguments);
      },
      // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
      forEach(fn3, thisArg) {
        return apply(this, "forEach", fn3, thisArg, void 0, arguments);
      },
      includes(...args) {
        return searchProxy(this, "includes", args);
      },
      indexOf(...args) {
        return searchProxy(this, "indexOf", args);
      },
      join(separator) {
        return reactiveReadArray(this).join(separator);
      },
      // keys() iterator only reads `length`, no optimisation required
      lastIndexOf(...args) {
        return searchProxy(this, "lastIndexOf", args);
      },
      map(fn3, thisArg) {
        return apply(this, "map", fn3, thisArg, void 0, arguments);
      },
      pop() {
        return noTracking(this, "pop");
      },
      push(...args) {
        return noTracking(this, "push", args);
      },
      reduce(fn3, ...args) {
        return reduce(this, "reduce", fn3, args);
      },
      reduceRight(fn3, ...args) {
        return reduce(this, "reduceRight", fn3, args);
      },
      shift() {
        return noTracking(this, "shift");
      },
      // slice could use ARRAY_ITERATE but also seems to beg for range tracking
      some(fn3, thisArg) {
        return apply(this, "some", fn3, thisArg, void 0, arguments);
      },
      splice(...args) {
        return noTracking(this, "splice", args);
      },
      toReversed() {
        return reactiveReadArray(this).toReversed();
      },
      toSorted(comparer) {
        return reactiveReadArray(this).toSorted(comparer);
      },
      toSpliced(...args) {
        return reactiveReadArray(this).toSpliced(...args);
      },
      unshift(...args) {
        return noTracking(this, "unshift", args);
      },
      values() {
        return iterator(this, "values", toReactive);
      }
    };
    function iterator(self2, method, wrapValue) {
      const arr = shallowReadArray(self2);
      const iter = arr[method]();
      if (arr !== self2 && !isShallow(self2)) {
        iter._next = iter.next;
        iter.next = () => {
          const result = iter._next();
          if (result.value) {
            result.value = wrapValue(result.value);
          }
          return result;
        };
      }
      return iter;
    }
    var arrayProto = Array.prototype;
    function apply(self2, method, fn3, thisArg, wrappedRetFn, args) {
      const arr = shallowReadArray(self2);
      const needsWrap = arr !== self2 && !isShallow(self2);
      const methodFn = arr[method];
      if (methodFn !== arrayProto[method]) {
        const result2 = methodFn.apply(self2, args);
        return needsWrap ? toReactive(result2) : result2;
      }
      let wrappedFn = fn3;
      if (arr !== self2) {
        if (needsWrap) {
          wrappedFn = function(item, index) {
            return fn3.call(this, toReactive(item), index, self2);
          };
        } else if (fn3.length > 2) {
          wrappedFn = function(item, index) {
            return fn3.call(this, item, index, self2);
          };
        }
      }
      const result = methodFn.call(arr, wrappedFn, thisArg);
      return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
    }
    function reduce(self2, method, fn3, args) {
      const arr = shallowReadArray(self2);
      let wrappedFn = fn3;
      if (arr !== self2) {
        if (!isShallow(self2)) {
          wrappedFn = function(acc, item, index) {
            return fn3.call(this, acc, toReactive(item), index, self2);
          };
        } else if (fn3.length > 3) {
          wrappedFn = function(acc, item, index) {
            return fn3.call(this, acc, item, index, self2);
          };
        }
      }
      return arr[method](wrappedFn, ...args);
    }
    function searchProxy(self2, method, args) {
      const arr = toRaw(self2);
      track(arr, "iterate", ARRAY_ITERATE_KEY);
      const res = arr[method](...args);
      if ((res === -1 || res === false) && isProxy(args[0])) {
        args[0] = toRaw(args[0]);
        return arr[method](...args);
      }
      return res;
    }
    function noTracking(self2, method, args = []) {
      pauseTracking();
      startBatch();
      const res = toRaw(self2)[method].apply(self2, args);
      endBatch();
      resetTracking();
      return res;
    }
    var isNonTrackableKeys = /* @__PURE__ */ shared.makeMap(`__proto__,__v_isRef,__isVue`);
    var builtInSymbols = new Set(
      /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(shared.isSymbol)
    );
    function hasOwnProperty(key) {
      if (!shared.isSymbol(key)) key = String(key);
      const obj = toRaw(this);
      track(obj, "has", key);
      return obj.hasOwnProperty(key);
    }
    var BaseReactiveHandler = class {
      constructor(_isReadonly = false, _isShallow = false) {
        this._isReadonly = _isReadonly;
        this._isShallow = _isShallow;
      }
      get(target, key, receiver) {
        if (key === "__v_skip") return target["__v_skip"];
        const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
        if (key === "__v_isReactive") {
          return !isReadonly2;
        } else if (key === "__v_isReadonly") {
          return isReadonly2;
        } else if (key === "__v_isShallow") {
          return isShallow2;
        } else if (key === "__v_raw") {
          if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
          // this means the receiver is a user proxy of the reactive proxy
          Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
            return target;
          }
          return;
        }
        const targetIsArray = shared.isArray(target);
        if (!isReadonly2) {
          let fn3;
          if (targetIsArray && (fn3 = arrayInstrumentations[key])) {
            return fn3;
          }
          if (key === "hasOwnProperty") {
            return hasOwnProperty;
          }
        }
        const res = Reflect.get(
          target,
          key,
          // if this is a proxy wrapping a ref, return methods using the raw ref
          // as receiver so that we don't have to call `toRaw` on the ref in all
          // its class methods
          isRef(target) ? target : receiver
        );
        if (shared.isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
          return res;
        }
        if (!isReadonly2) {
          track(target, "get", key);
        }
        if (isShallow2) {
          return res;
        }
        if (isRef(res)) {
          return targetIsArray && shared.isIntegerKey(key) ? res : res.value;
        }
        if (shared.isObject(res)) {
          return isReadonly2 ? readonly(res) : reactive2(res);
        }
        return res;
      }
    };
    var MutableReactiveHandler = class extends BaseReactiveHandler {
      constructor(isShallow2 = false) {
        super(false, isShallow2);
      }
      set(target, key, value, receiver) {
        let oldValue = target[key];
        if (!this._isShallow) {
          const isOldValueReadonly = isReadonly(oldValue);
          if (!isShallow(value) && !isReadonly(value)) {
            oldValue = toRaw(oldValue);
            value = toRaw(value);
          }
          if (!shared.isArray(target) && isRef(oldValue) && !isRef(value)) {
            if (isOldValueReadonly) {
              return false;
            } else {
              oldValue.value = value;
              return true;
            }
          }
        }
        const hadKey = shared.isArray(target) && shared.isIntegerKey(key) ? Number(key) < target.length : shared.hasOwn(target, key);
        const result = Reflect.set(
          target,
          key,
          value,
          isRef(target) ? target : receiver
        );
        if (target === toRaw(receiver)) {
          if (!hadKey) {
            trigger(target, "add", key, value);
          } else if (shared.hasChanged(value, oldValue)) {
            trigger(target, "set", key, value);
          }
        }
        return result;
      }
      deleteProperty(target, key) {
        const hadKey = shared.hasOwn(target, key);
        target[key];
        const result = Reflect.deleteProperty(target, key);
        if (result && hadKey) {
          trigger(target, "delete", key, void 0);
        }
        return result;
      }
      has(target, key) {
        const result = Reflect.has(target, key);
        if (!shared.isSymbol(key) || !builtInSymbols.has(key)) {
          track(target, "has", key);
        }
        return result;
      }
      ownKeys(target) {
        track(
          target,
          "iterate",
          shared.isArray(target) ? "length" : ITERATE_KEY
        );
        return Reflect.ownKeys(target);
      }
    };
    var ReadonlyReactiveHandler = class extends BaseReactiveHandler {
      constructor(isShallow2 = false) {
        super(true, isShallow2);
      }
      set(target, key) {
        return true;
      }
      deleteProperty(target, key) {
        return true;
      }
    };
    var mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
    var readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
    var shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
    var shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
    var toShallow = (value) => value;
    var getProto = (v) => Reflect.getPrototypeOf(v);
    function createIterableMethod(method, isReadonly2, isShallow2) {
      return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const targetIsMap = shared.isMap(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
        !isReadonly2 && track(
          rawTarget,
          "iterate",
          isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
        );
        return {
          // iterator protocol
          next() {
            const { value, done } = innerIterator.next();
            return done ? { value, done } : {
              value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
              done
            };
          },
          // iterable protocol
          [Symbol.iterator]() {
            return this;
          }
        };
      };
    }
    function createReadonlyMethod(type) {
      return function(...args) {
        return type === "delete" ? false : type === "clear" ? void 0 : this;
      };
    }
    function createInstrumentations(readonly2, shallow) {
      const instrumentations = {
        get(key) {
          const target = this["__v_raw"];
          const rawTarget = toRaw(target);
          const rawKey = toRaw(key);
          if (!readonly2) {
            if (shared.hasChanged(key, rawKey)) {
              track(rawTarget, "get", key);
            }
            track(rawTarget, "get", rawKey);
          }
          const { has } = getProto(rawTarget);
          const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
          if (has.call(rawTarget, key)) {
            return wrap(target.get(key));
          } else if (has.call(rawTarget, rawKey)) {
            return wrap(target.get(rawKey));
          } else if (target !== rawTarget) {
            target.get(key);
          }
        },
        get size() {
          const target = this["__v_raw"];
          !readonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
          return Reflect.get(target, "size", target);
        },
        has(key) {
          const target = this["__v_raw"];
          const rawTarget = toRaw(target);
          const rawKey = toRaw(key);
          if (!readonly2) {
            if (shared.hasChanged(key, rawKey)) {
              track(rawTarget, "has", key);
            }
            track(rawTarget, "has", rawKey);
          }
          return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
        },
        forEach(callback, thisArg) {
          const observed = this;
          const target = observed["__v_raw"];
          const rawTarget = toRaw(target);
          const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
          !readonly2 && track(rawTarget, "iterate", ITERATE_KEY);
          return target.forEach((value, key) => {
            return callback.call(thisArg, wrap(value), wrap(key), observed);
          });
        }
      };
      shared.extend(
        instrumentations,
        readonly2 ? {
          add: createReadonlyMethod("add"),
          set: createReadonlyMethod("set"),
          delete: createReadonlyMethod("delete"),
          clear: createReadonlyMethod("clear")
        } : {
          add(value) {
            if (!shallow && !isShallow(value) && !isReadonly(value)) {
              value = toRaw(value);
            }
            const target = toRaw(this);
            const proto2 = getProto(target);
            const hadKey = proto2.has.call(target, value);
            if (!hadKey) {
              target.add(value);
              trigger(target, "add", value, value);
            }
            return this;
          },
          set(key, value) {
            if (!shallow && !isShallow(value) && !isReadonly(value)) {
              value = toRaw(value);
            }
            const target = toRaw(this);
            const { has, get } = getProto(target);
            let hadKey = has.call(target, key);
            if (!hadKey) {
              key = toRaw(key);
              hadKey = has.call(target, key);
            }
            const oldValue = get.call(target, key);
            target.set(key, value);
            if (!hadKey) {
              trigger(target, "add", key, value);
            } else if (shared.hasChanged(value, oldValue)) {
              trigger(target, "set", key, value);
            }
            return this;
          },
          delete(key) {
            const target = toRaw(this);
            const { has, get } = getProto(target);
            let hadKey = has.call(target, key);
            if (!hadKey) {
              key = toRaw(key);
              hadKey = has.call(target, key);
            }
            get ? get.call(target, key) : void 0;
            const result = target.delete(key);
            if (hadKey) {
              trigger(target, "delete", key, void 0);
            }
            return result;
          },
          clear() {
            const target = toRaw(this);
            const hadItems = target.size !== 0;
            const result = target.clear();
            if (hadItems) {
              trigger(
                target,
                "clear",
                void 0,
                void 0
              );
            }
            return result;
          }
        }
      );
      const iteratorMethods = [
        "keys",
        "values",
        "entries",
        Symbol.iterator
      ];
      iteratorMethods.forEach((method) => {
        instrumentations[method] = createIterableMethod(method, readonly2, shallow);
      });
      return instrumentations;
    }
    function createInstrumentationGetter(isReadonly2, shallow) {
      const instrumentations = createInstrumentations(isReadonly2, shallow);
      return (target, key, receiver) => {
        if (key === "__v_isReactive") {
          return !isReadonly2;
        } else if (key === "__v_isReadonly") {
          return isReadonly2;
        } else if (key === "__v_raw") {
          return target;
        }
        return Reflect.get(
          shared.hasOwn(instrumentations, key) && key in target ? instrumentations : target,
          key,
          receiver
        );
      };
    }
    var mutableCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(false, false)
    };
    var shallowCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(false, true)
    };
    var readonlyCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(true, false)
    };
    var shallowReadonlyCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(true, true)
    };
    var reactiveMap = /* @__PURE__ */ new WeakMap();
    var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
    var readonlyMap = /* @__PURE__ */ new WeakMap();
    var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
    function targetTypeMap(rawType) {
      switch (rawType) {
        case "Object":
        case "Array":
          return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
          return 2;
        default:
          return 0;
      }
    }
    function getTargetType(value) {
      return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(shared.toRawType(value));
    }
    function reactive2(target) {
      if (isReadonly(target)) {
        return target;
      }
      return createReactiveObject(
        target,
        false,
        mutableHandlers,
        mutableCollectionHandlers,
        reactiveMap
      );
    }
    function shallowReactive(target) {
      return createReactiveObject(
        target,
        false,
        shallowReactiveHandlers,
        shallowCollectionHandlers,
        shallowReactiveMap
      );
    }
    function readonly(target) {
      return createReactiveObject(
        target,
        true,
        readonlyHandlers,
        readonlyCollectionHandlers,
        readonlyMap
      );
    }
    function shallowReadonly(target) {
      return createReactiveObject(
        target,
        true,
        shallowReadonlyHandlers,
        shallowReadonlyCollectionHandlers,
        shallowReadonlyMap
      );
    }
    function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
      if (!shared.isObject(target)) {
        return target;
      }
      if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
        return target;
      }
      const existingProxy = proxyMap.get(target);
      if (existingProxy) {
        return existingProxy;
      }
      const targetType = getTargetType(target);
      if (targetType === 0) {
        return target;
      }
      const proxy = new Proxy(
        target,
        targetType === 2 ? collectionHandlers : baseHandlers
      );
      proxyMap.set(target, proxy);
      return proxy;
    }
    function isReactive(value) {
      if (isReadonly(value)) {
        return isReactive(value["__v_raw"]);
      }
      return !!(value && value["__v_isReactive"]);
    }
    function isReadonly(value) {
      return !!(value && value["__v_isReadonly"]);
    }
    function isShallow(value) {
      return !!(value && value["__v_isShallow"]);
    }
    function isProxy(value) {
      return value ? !!value["__v_raw"] : false;
    }
    function toRaw(observed) {
      const raw = observed && observed["__v_raw"];
      return raw ? toRaw(raw) : observed;
    }
    function markRaw(value) {
      if (!shared.hasOwn(value, "__v_skip") && Object.isExtensible(value)) {
        shared.def(value, "__v_skip", true);
      }
      return value;
    }
    var toReactive = (value) => shared.isObject(value) ? reactive2(value) : value;
    var toReadonly = (value) => shared.isObject(value) ? readonly(value) : value;
    function isRef(r2) {
      return r2 ? r2["__v_isRef"] === true : false;
    }
    function ref4(value) {
      return createRef(value, false);
    }
    function shallowRef(value) {
      return createRef(value, true);
    }
    function createRef(rawValue, shallow) {
      if (isRef(rawValue)) {
        return rawValue;
      }
      return new RefImpl(rawValue, shallow);
    }
    var RefImpl = class {
      constructor(value, isShallow2) {
        this.dep = new Dep();
        this["__v_isRef"] = true;
        this["__v_isShallow"] = false;
        this._rawValue = isShallow2 ? value : toRaw(value);
        this._value = isShallow2 ? value : toReactive(value);
        this["__v_isShallow"] = isShallow2;
      }
      get value() {
        {
          this.dep.track();
        }
        return this._value;
      }
      set value(newValue) {
        const oldValue = this._rawValue;
        const useDirectValue = this["__v_isShallow"] || isShallow(newValue) || isReadonly(newValue);
        newValue = useDirectValue ? newValue : toRaw(newValue);
        if (shared.hasChanged(newValue, oldValue)) {
          this._rawValue = newValue;
          this._value = useDirectValue ? newValue : toReactive(newValue);
          {
            this.dep.trigger();
          }
        }
      }
    };
    function triggerRef(ref22) {
      if (ref22.dep) {
        {
          ref22.dep.trigger();
        }
      }
    }
    function unref(ref22) {
      return isRef(ref22) ? ref22.value : ref22;
    }
    function toValue(source) {
      return shared.isFunction(source) ? source() : unref(source);
    }
    var shallowUnwrapHandlers = {
      get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
      set: (target, key, value, receiver) => {
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        } else {
          return Reflect.set(target, key, value, receiver);
        }
      }
    };
    function proxyRefs(objectWithRefs) {
      return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
    }
    var CustomRefImpl = class {
      constructor(factory) {
        this["__v_isRef"] = true;
        this._value = void 0;
        const dep = this.dep = new Dep();
        const { get, set } = factory(dep.track.bind(dep), dep.trigger.bind(dep));
        this._get = get;
        this._set = set;
      }
      get value() {
        return this._value = this._get();
      }
      set value(newVal) {
        this._set(newVal);
      }
    };
    function customRef(factory) {
      return new CustomRefImpl(factory);
    }
    function toRefs(object) {
      const ret = shared.isArray(object) ? new Array(object.length) : {};
      for (const key in object) {
        ret[key] = propertyToRef(object, key);
      }
      return ret;
    }
    var ObjectRefImpl = class {
      constructor(_object, _key, _defaultValue) {
        this._object = _object;
        this._key = _key;
        this._defaultValue = _defaultValue;
        this["__v_isRef"] = true;
        this._value = void 0;
      }
      get value() {
        const val = this._object[this._key];
        return this._value = val === void 0 ? this._defaultValue : val;
      }
      set value(newVal) {
        this._object[this._key] = newVal;
      }
      get dep() {
        return getDepFromReactive(toRaw(this._object), this._key);
      }
    };
    var GetterRefImpl = class {
      constructor(_getter) {
        this._getter = _getter;
        this["__v_isRef"] = true;
        this["__v_isReadonly"] = true;
        this._value = void 0;
      }
      get value() {
        return this._value = this._getter();
      }
    };
    function toRef(source, key, defaultValue) {
      if (isRef(source)) {
        return source;
      } else if (shared.isFunction(source)) {
        return new GetterRefImpl(source);
      } else if (shared.isObject(source) && arguments.length > 1) {
        return propertyToRef(source, key, defaultValue);
      } else {
        return ref4(source);
      }
    }
    function propertyToRef(source, key, defaultValue) {
      const val = source[key];
      return isRef(val) ? val : new ObjectRefImpl(source, key, defaultValue);
    }
    var ComputedRefImpl = class {
      constructor(fn3, setter, isSSR) {
        this.fn = fn3;
        this.setter = setter;
        this._value = void 0;
        this.dep = new Dep(this);
        this.__v_isRef = true;
        this.deps = void 0;
        this.depsTail = void 0;
        this.flags = 16;
        this.globalVersion = globalVersion - 1;
        this.next = void 0;
        this.effect = this;
        this["__v_isReadonly"] = !setter;
        this.isSSR = isSSR;
      }
      /**
       * @internal
       */
      notify() {
        this.flags |= 16;
        if (!(this.flags & 8) && // avoid infinite self recursion
        activeSub !== this) {
          batch(this, true);
          return true;
        }
      }
      get value() {
        const link = this.dep.track();
        refreshComputed(this);
        if (link) {
          link.version = this.dep.version;
        }
        return this._value;
      }
      set value(newValue) {
        if (this.setter) {
          this.setter(newValue);
        }
      }
    };
    function computed(getterOrOptions, debugOptions, isSSR = false) {
      let getter;
      let setter;
      if (shared.isFunction(getterOrOptions)) {
        getter = getterOrOptions;
      } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
      }
      const cRef = new ComputedRefImpl(getter, setter, isSSR);
      return cRef;
    }
    var TrackOpTypes = {
      "GET": "get",
      "HAS": "has",
      "ITERATE": "iterate"
    };
    var TriggerOpTypes = {
      "SET": "set",
      "ADD": "add",
      "DELETE": "delete",
      "CLEAR": "clear"
    };
    var ReactiveFlags = {
      "SKIP": "__v_skip",
      "IS_REACTIVE": "__v_isReactive",
      "IS_READONLY": "__v_isReadonly",
      "IS_SHALLOW": "__v_isShallow",
      "RAW": "__v_raw",
      "IS_REF": "__v_isRef"
    };
    var WatchErrorCodes = {
      "WATCH_GETTER": 2,
      "2": "WATCH_GETTER",
      "WATCH_CALLBACK": 3,
      "3": "WATCH_CALLBACK",
      "WATCH_CLEANUP": 4,
      "4": "WATCH_CLEANUP"
    };
    var INITIAL_WATCHER_VALUE = {};
    var cleanupMap = /* @__PURE__ */ new WeakMap();
    var activeWatcher = void 0;
    function getCurrentWatcher() {
      return activeWatcher;
    }
    function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
      if (owner) {
        let cleanups = cleanupMap.get(owner);
        if (!cleanups) cleanupMap.set(owner, cleanups = []);
        cleanups.push(cleanupFn);
      }
    }
    function watch(source, cb, options = shared.EMPTY_OBJ) {
      const { immediate, deep, once, scheduler, augmentJob, call } = options;
      const reactiveGetter = (source2) => {
        if (deep) return source2;
        if (isShallow(source2) || deep === false || deep === 0)
          return traverse(source2, 1);
        return traverse(source2);
      };
      let effect2;
      let getter;
      let cleanup;
      let boundCleanup;
      let forceTrigger = false;
      let isMultiSource = false;
      if (isRef(source)) {
        getter = () => source.value;
        forceTrigger = isShallow(source);
      } else if (isReactive(source)) {
        getter = () => reactiveGetter(source);
        forceTrigger = true;
      } else if (shared.isArray(source)) {
        isMultiSource = true;
        forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
        getter = () => source.map((s) => {
          if (isRef(s)) {
            return s.value;
          } else if (isReactive(s)) {
            return reactiveGetter(s);
          } else if (shared.isFunction(s)) {
            return call ? call(s, 2) : s();
          } else ;
        });
      } else if (shared.isFunction(source)) {
        if (cb) {
          getter = call ? () => call(source, 2) : source;
        } else {
          getter = () => {
            if (cleanup) {
              pauseTracking();
              try {
                cleanup();
              } finally {
                resetTracking();
              }
            }
            const currentEffect = activeWatcher;
            activeWatcher = effect2;
            try {
              return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
            } finally {
              activeWatcher = currentEffect;
            }
          };
        }
      } else {
        getter = shared.NOOP;
      }
      if (cb && deep) {
        const baseGetter = getter;
        const depth = deep === true ? Infinity : deep;
        getter = () => traverse(baseGetter(), depth);
      }
      const scope = getCurrentScope();
      const watchHandle = () => {
        effect2.stop();
        if (scope && scope.active) {
          shared.remove(scope.effects, effect2);
        }
      };
      if (once && cb) {
        const _cb = cb;
        cb = (...args) => {
          _cb(...args);
          watchHandle();
        };
      }
      let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
      const job = (immediateFirstRun) => {
        if (!(effect2.flags & 1) || !effect2.dirty && !immediateFirstRun) {
          return;
        }
        if (cb) {
          const newValue = effect2.run();
          if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => shared.hasChanged(v, oldValue[i])) : shared.hasChanged(newValue, oldValue))) {
            if (cleanup) {
              cleanup();
            }
            const currentWatcher = activeWatcher;
            activeWatcher = effect2;
            try {
              const args = [
                newValue,
                // pass undefined as the old value when it's changed for the first time
                oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
                boundCleanup
              ];
              call ? call(cb, 3, args) : (
                // @ts-expect-error
                cb(...args)
              );
              oldValue = newValue;
            } finally {
              activeWatcher = currentWatcher;
            }
          }
        } else {
          effect2.run();
        }
      };
      if (augmentJob) {
        augmentJob(job);
      }
      effect2 = new ReactiveEffect(getter);
      effect2.scheduler = scheduler ? () => scheduler(job, false) : job;
      boundCleanup = (fn3) => onWatcherCleanup(fn3, false, effect2);
      cleanup = effect2.onStop = () => {
        const cleanups = cleanupMap.get(effect2);
        if (cleanups) {
          if (call) {
            call(cleanups, 4);
          } else {
            for (const cleanup2 of cleanups) cleanup2();
          }
          cleanupMap.delete(effect2);
        }
      };
      if (cb) {
        if (immediate) {
          job(true);
        } else {
          oldValue = effect2.run();
        }
      } else if (scheduler) {
        scheduler(job.bind(null, true), true);
      } else {
        effect2.run();
      }
      watchHandle.pause = effect2.pause.bind(effect2);
      watchHandle.resume = effect2.resume.bind(effect2);
      watchHandle.stop = watchHandle;
      return watchHandle;
    }
    function traverse(value, depth = Infinity, seen) {
      if (depth <= 0 || !shared.isObject(value) || value["__v_skip"]) {
        return value;
      }
      seen = seen || /* @__PURE__ */ new Set();
      if (seen.has(value)) {
        return value;
      }
      seen.add(value);
      depth--;
      if (isRef(value)) {
        traverse(value.value, depth, seen);
      } else if (shared.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          traverse(value[i], depth, seen);
        }
      } else if (shared.isSet(value) || shared.isMap(value)) {
        value.forEach((v) => {
          traverse(v, depth, seen);
        });
      } else if (shared.isPlainObject(value)) {
        for (const key in value) {
          traverse(value[key], depth, seen);
        }
        for (const key of Object.getOwnPropertySymbols(value)) {
          if (Object.prototype.propertyIsEnumerable.call(value, key)) {
            traverse(value[key], depth, seen);
          }
        }
      }
      return value;
    }
    exports2.ARRAY_ITERATE_KEY = ARRAY_ITERATE_KEY;
    exports2.EffectFlags = EffectFlags;
    exports2.EffectScope = EffectScope;
    exports2.ITERATE_KEY = ITERATE_KEY;
    exports2.MAP_KEY_ITERATE_KEY = MAP_KEY_ITERATE_KEY;
    exports2.ReactiveEffect = ReactiveEffect;
    exports2.ReactiveFlags = ReactiveFlags;
    exports2.TrackOpTypes = TrackOpTypes;
    exports2.TriggerOpTypes = TriggerOpTypes;
    exports2.WatchErrorCodes = WatchErrorCodes;
    exports2.computed = computed;
    exports2.customRef = customRef;
    exports2.effect = effect;
    exports2.effectScope = effectScope;
    exports2.enableTracking = enableTracking;
    exports2.getCurrentScope = getCurrentScope;
    exports2.getCurrentWatcher = getCurrentWatcher;
    exports2.isProxy = isProxy;
    exports2.isReactive = isReactive;
    exports2.isReadonly = isReadonly;
    exports2.isRef = isRef;
    exports2.isShallow = isShallow;
    exports2.markRaw = markRaw;
    exports2.onEffectCleanup = onEffectCleanup;
    exports2.onScopeDispose = onScopeDispose;
    exports2.onWatcherCleanup = onWatcherCleanup;
    exports2.pauseTracking = pauseTracking;
    exports2.proxyRefs = proxyRefs;
    exports2.reactive = reactive2;
    exports2.reactiveReadArray = reactiveReadArray;
    exports2.readonly = readonly;
    exports2.ref = ref4;
    exports2.resetTracking = resetTracking;
    exports2.shallowReactive = shallowReactive;
    exports2.shallowReadArray = shallowReadArray;
    exports2.shallowReadonly = shallowReadonly;
    exports2.shallowRef = shallowRef;
    exports2.stop = stop;
    exports2.toRaw = toRaw;
    exports2.toReactive = toReactive;
    exports2.toReadonly = toReadonly;
    exports2.toRef = toRef;
    exports2.toRefs = toRefs;
    exports2.toValue = toValue;
    exports2.track = track;
    exports2.traverse = traverse;
    exports2.trigger = trigger;
    exports2.triggerRef = triggerRef;
    exports2.unref = unref;
    exports2.watch = watch;
  }
});

// node_modules/.pnpm/@vue+reactivity@3.5.13/node_modules/@vue/reactivity/dist/reactivity.cjs.js
var require_reactivity_cjs = __commonJS({
  "node_modules/.pnpm/@vue+reactivity@3.5.13/node_modules/@vue/reactivity/dist/reactivity.cjs.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var shared = require_shared();
    function warn(msg, ...args) {
      console.warn(`[Vue warn] ${msg}`, ...args);
    }
    var activeEffectScope;
    var EffectScope = class {
      constructor(detached = false) {
        this.detached = detached;
        this._active = true;
        this.effects = [];
        this.cleanups = [];
        this._isPaused = false;
        this.parent = activeEffectScope;
        if (!detached && activeEffectScope) {
          this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
            this
          ) - 1;
        }
      }
      get active() {
        return this._active;
      }
      pause() {
        if (this._active) {
          this._isPaused = true;
          let i, l2;
          if (this.scopes) {
            for (i = 0, l2 = this.scopes.length; i < l2; i++) {
              this.scopes[i].pause();
            }
          }
          for (i = 0, l2 = this.effects.length; i < l2; i++) {
            this.effects[i].pause();
          }
        }
      }
      /**
       * Resumes the effect scope, including all child scopes and effects.
       */
      resume() {
        if (this._active) {
          if (this._isPaused) {
            this._isPaused = false;
            let i, l2;
            if (this.scopes) {
              for (i = 0, l2 = this.scopes.length; i < l2; i++) {
                this.scopes[i].resume();
              }
            }
            for (i = 0, l2 = this.effects.length; i < l2; i++) {
              this.effects[i].resume();
            }
          }
        }
      }
      run(fn3) {
        if (this._active) {
          const currentEffectScope = activeEffectScope;
          try {
            activeEffectScope = this;
            return fn3();
          } finally {
            activeEffectScope = currentEffectScope;
          }
        } else {
          warn(`cannot run an inactive effect scope.`);
        }
      }
      /**
       * This should only be called on non-detached scopes
       * @internal
       */
      on() {
        activeEffectScope = this;
      }
      /**
       * This should only be called on non-detached scopes
       * @internal
       */
      off() {
        activeEffectScope = this.parent;
      }
      stop(fromParent) {
        if (this._active) {
          this._active = false;
          let i, l2;
          for (i = 0, l2 = this.effects.length; i < l2; i++) {
            this.effects[i].stop();
          }
          this.effects.length = 0;
          for (i = 0, l2 = this.cleanups.length; i < l2; i++) {
            this.cleanups[i]();
          }
          this.cleanups.length = 0;
          if (this.scopes) {
            for (i = 0, l2 = this.scopes.length; i < l2; i++) {
              this.scopes[i].stop(true);
            }
            this.scopes.length = 0;
          }
          if (!this.detached && this.parent && !fromParent) {
            const last = this.parent.scopes.pop();
            if (last && last !== this) {
              this.parent.scopes[this.index] = last;
              last.index = this.index;
            }
          }
          this.parent = void 0;
        }
      }
    };
    function effectScope(detached) {
      return new EffectScope(detached);
    }
    function getCurrentScope() {
      return activeEffectScope;
    }
    function onScopeDispose(fn3, failSilently = false) {
      if (activeEffectScope) {
        activeEffectScope.cleanups.push(fn3);
      } else if (!failSilently) {
        warn(
          `onScopeDispose() is called when there is no active effect scope to be associated with.`
        );
      }
    }
    var activeSub;
    var EffectFlags = {
      "ACTIVE": 1,
      "1": "ACTIVE",
      "RUNNING": 2,
      "2": "RUNNING",
      "TRACKING": 4,
      "4": "TRACKING",
      "NOTIFIED": 8,
      "8": "NOTIFIED",
      "DIRTY": 16,
      "16": "DIRTY",
      "ALLOW_RECURSE": 32,
      "32": "ALLOW_RECURSE",
      "PAUSED": 64,
      "64": "PAUSED"
    };
    var pausedQueueEffects = /* @__PURE__ */ new WeakSet();
    var ReactiveEffect = class {
      constructor(fn3) {
        this.fn = fn3;
        this.deps = void 0;
        this.depsTail = void 0;
        this.flags = 1 | 4;
        this.next = void 0;
        this.cleanup = void 0;
        this.scheduler = void 0;
        if (activeEffectScope && activeEffectScope.active) {
          activeEffectScope.effects.push(this);
        }
      }
      pause() {
        this.flags |= 64;
      }
      resume() {
        if (this.flags & 64) {
          this.flags &= ~64;
          if (pausedQueueEffects.has(this)) {
            pausedQueueEffects.delete(this);
            this.trigger();
          }
        }
      }
      /**
       * @internal
       */
      notify() {
        if (this.flags & 2 && !(this.flags & 32)) {
          return;
        }
        if (!(this.flags & 8)) {
          batch(this);
        }
      }
      run() {
        if (!(this.flags & 1)) {
          return this.fn();
        }
        this.flags |= 2;
        cleanupEffect(this);
        prepareDeps(this);
        const prevEffect = activeSub;
        const prevShouldTrack = shouldTrack;
        activeSub = this;
        shouldTrack = true;
        try {
          return this.fn();
        } finally {
          if (activeSub !== this) {
            warn(
              "Active effect was not restored correctly - this is likely a Vue internal bug."
            );
          }
          cleanupDeps(this);
          activeSub = prevEffect;
          shouldTrack = prevShouldTrack;
          this.flags &= ~2;
        }
      }
      stop() {
        if (this.flags & 1) {
          for (let link = this.deps; link; link = link.nextDep) {
            removeSub(link);
          }
          this.deps = this.depsTail = void 0;
          cleanupEffect(this);
          this.onStop && this.onStop();
          this.flags &= ~1;
        }
      }
      trigger() {
        if (this.flags & 64) {
          pausedQueueEffects.add(this);
        } else if (this.scheduler) {
          this.scheduler();
        } else {
          this.runIfDirty();
        }
      }
      /**
       * @internal
       */
      runIfDirty() {
        if (isDirty(this)) {
          this.run();
        }
      }
      get dirty() {
        return isDirty(this);
      }
    };
    var batchDepth = 0;
    var batchedSub;
    var batchedComputed;
    function batch(sub, isComputed = false) {
      sub.flags |= 8;
      if (isComputed) {
        sub.next = batchedComputed;
        batchedComputed = sub;
        return;
      }
      sub.next = batchedSub;
      batchedSub = sub;
    }
    function startBatch() {
      batchDepth++;
    }
    function endBatch() {
      if (--batchDepth > 0) {
        return;
      }
      if (batchedComputed) {
        let e = batchedComputed;
        batchedComputed = void 0;
        while (e) {
          const next = e.next;
          e.next = void 0;
          e.flags &= ~8;
          e = next;
        }
      }
      let error;
      while (batchedSub) {
        let e = batchedSub;
        batchedSub = void 0;
        while (e) {
          const next = e.next;
          e.next = void 0;
          e.flags &= ~8;
          if (e.flags & 1) {
            try {
              ;
              e.trigger();
            } catch (err) {
              if (!error) error = err;
            }
          }
          e = next;
        }
      }
      if (error) throw error;
    }
    function prepareDeps(sub) {
      for (let link = sub.deps; link; link = link.nextDep) {
        link.version = -1;
        link.prevActiveLink = link.dep.activeLink;
        link.dep.activeLink = link;
      }
    }
    function cleanupDeps(sub) {
      let head;
      let tail = sub.depsTail;
      let link = tail;
      while (link) {
        const prev = link.prevDep;
        if (link.version === -1) {
          if (link === tail) tail = prev;
          removeSub(link);
          removeDep(link);
        } else {
          head = link;
        }
        link.dep.activeLink = link.prevActiveLink;
        link.prevActiveLink = void 0;
        link = prev;
      }
      sub.deps = head;
      sub.depsTail = tail;
    }
    function isDirty(sub) {
      for (let link = sub.deps; link; link = link.nextDep) {
        if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) {
          return true;
        }
      }
      if (sub._dirty) {
        return true;
      }
      return false;
    }
    function refreshComputed(computed2) {
      if (computed2.flags & 4 && !(computed2.flags & 16)) {
        return;
      }
      computed2.flags &= ~16;
      if (computed2.globalVersion === globalVersion) {
        return;
      }
      computed2.globalVersion = globalVersion;
      const dep = computed2.dep;
      computed2.flags |= 2;
      if (dep.version > 0 && !computed2.isSSR && computed2.deps && !isDirty(computed2)) {
        computed2.flags &= ~2;
        return;
      }
      const prevSub = activeSub;
      const prevShouldTrack = shouldTrack;
      activeSub = computed2;
      shouldTrack = true;
      try {
        prepareDeps(computed2);
        const value = computed2.fn(computed2._value);
        if (dep.version === 0 || shared.hasChanged(value, computed2._value)) {
          computed2._value = value;
          dep.version++;
        }
      } catch (err) {
        dep.version++;
        throw err;
      } finally {
        activeSub = prevSub;
        shouldTrack = prevShouldTrack;
        cleanupDeps(computed2);
        computed2.flags &= ~2;
      }
    }
    function removeSub(link, soft = false) {
      const { dep, prevSub, nextSub } = link;
      if (prevSub) {
        prevSub.nextSub = nextSub;
        link.prevSub = void 0;
      }
      if (nextSub) {
        nextSub.prevSub = prevSub;
        link.nextSub = void 0;
      }
      if (dep.subsHead === link) {
        dep.subsHead = nextSub;
      }
      if (dep.subs === link) {
        dep.subs = prevSub;
        if (!prevSub && dep.computed) {
          dep.computed.flags &= ~4;
          for (let l2 = dep.computed.deps; l2; l2 = l2.nextDep) {
            removeSub(l2, true);
          }
        }
      }
      if (!soft && !--dep.sc && dep.map) {
        dep.map.delete(dep.key);
      }
    }
    function removeDep(link) {
      const { prevDep, nextDep } = link;
      if (prevDep) {
        prevDep.nextDep = nextDep;
        link.prevDep = void 0;
      }
      if (nextDep) {
        nextDep.prevDep = prevDep;
        link.nextDep = void 0;
      }
    }
    function effect(fn3, options) {
      if (fn3.effect instanceof ReactiveEffect) {
        fn3 = fn3.effect.fn;
      }
      const e = new ReactiveEffect(fn3);
      if (options) {
        shared.extend(e, options);
      }
      try {
        e.run();
      } catch (err) {
        e.stop();
        throw err;
      }
      const runner = e.run.bind(e);
      runner.effect = e;
      return runner;
    }
    function stop(runner) {
      runner.effect.stop();
    }
    var shouldTrack = true;
    var trackStack = [];
    function pauseTracking() {
      trackStack.push(shouldTrack);
      shouldTrack = false;
    }
    function enableTracking() {
      trackStack.push(shouldTrack);
      shouldTrack = true;
    }
    function resetTracking() {
      const last = trackStack.pop();
      shouldTrack = last === void 0 ? true : last;
    }
    function onEffectCleanup(fn3, failSilently = false) {
      if (activeSub instanceof ReactiveEffect) {
        activeSub.cleanup = fn3;
      } else if (!failSilently) {
        warn(
          `onEffectCleanup() was called when there was no active effect to associate with.`
        );
      }
    }
    function cleanupEffect(e) {
      const { cleanup } = e;
      e.cleanup = void 0;
      if (cleanup) {
        const prevSub = activeSub;
        activeSub = void 0;
        try {
          cleanup();
        } finally {
          activeSub = prevSub;
        }
      }
    }
    var globalVersion = 0;
    var Link = class {
      constructor(sub, dep) {
        this.sub = sub;
        this.dep = dep;
        this.version = dep.version;
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
      }
    };
    var Dep = class {
      constructor(computed2) {
        this.computed = computed2;
        this.version = 0;
        this.activeLink = void 0;
        this.subs = void 0;
        this.map = void 0;
        this.key = void 0;
        this.sc = 0;
        {
          this.subsHead = void 0;
        }
      }
      track(debugInfo) {
        if (!activeSub || !shouldTrack || activeSub === this.computed) {
          return;
        }
        let link = this.activeLink;
        if (link === void 0 || link.sub !== activeSub) {
          link = this.activeLink = new Link(activeSub, this);
          if (!activeSub.deps) {
            activeSub.deps = activeSub.depsTail = link;
          } else {
            link.prevDep = activeSub.depsTail;
            activeSub.depsTail.nextDep = link;
            activeSub.depsTail = link;
          }
          addSub(link);
        } else if (link.version === -1) {
          link.version = this.version;
          if (link.nextDep) {
            const next = link.nextDep;
            next.prevDep = link.prevDep;
            if (link.prevDep) {
              link.prevDep.nextDep = next;
            }
            link.prevDep = activeSub.depsTail;
            link.nextDep = void 0;
            activeSub.depsTail.nextDep = link;
            activeSub.depsTail = link;
            if (activeSub.deps === link) {
              activeSub.deps = next;
            }
          }
        }
        if (activeSub.onTrack) {
          activeSub.onTrack(
            shared.extend(
              {
                effect: activeSub
              },
              debugInfo
            )
          );
        }
        return link;
      }
      trigger(debugInfo) {
        this.version++;
        globalVersion++;
        this.notify(debugInfo);
      }
      notify(debugInfo) {
        startBatch();
        try {
          if (true) {
            for (let head = this.subsHead; head; head = head.nextSub) {
              if (head.sub.onTrigger && !(head.sub.flags & 8)) {
                head.sub.onTrigger(
                  shared.extend(
                    {
                      effect: head.sub
                    },
                    debugInfo
                  )
                );
              }
            }
          }
          for (let link = this.subs; link; link = link.prevSub) {
            if (link.sub.notify()) {
              ;
              link.sub.dep.notify();
            }
          }
        } finally {
          endBatch();
        }
      }
    };
    function addSub(link) {
      link.dep.sc++;
      if (link.sub.flags & 4) {
        const computed2 = link.dep.computed;
        if (computed2 && !link.dep.subs) {
          computed2.flags |= 4 | 16;
          for (let l2 = computed2.deps; l2; l2 = l2.nextDep) {
            addSub(l2);
          }
        }
        const currentTail = link.dep.subs;
        if (currentTail !== link) {
          link.prevSub = currentTail;
          if (currentTail) currentTail.nextSub = link;
        }
        if (link.dep.subsHead === void 0) {
          link.dep.subsHead = link;
        }
        link.dep.subs = link;
      }
    }
    var targetMap = /* @__PURE__ */ new WeakMap();
    var ITERATE_KEY = Symbol(
      "Object iterate"
    );
    var MAP_KEY_ITERATE_KEY = Symbol(
      "Map keys iterate"
    );
    var ARRAY_ITERATE_KEY = Symbol(
      "Array iterate"
    );
    function track(target, type, key) {
      if (shouldTrack && activeSub) {
        let depsMap = targetMap.get(target);
        if (!depsMap) {
          targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
        }
        let dep = depsMap.get(key);
        if (!dep) {
          depsMap.set(key, dep = new Dep());
          dep.map = depsMap;
          dep.key = key;
        }
        {
          dep.track({
            target,
            type,
            key
          });
        }
      }
    }
    function trigger(target, type, key, newValue, oldValue, oldTarget) {
      const depsMap = targetMap.get(target);
      if (!depsMap) {
        globalVersion++;
        return;
      }
      const run = (dep) => {
        if (dep) {
          {
            dep.trigger({
              target,
              type,
              key,
              newValue,
              oldValue,
              oldTarget
            });
          }
        }
      };
      startBatch();
      if (type === "clear") {
        depsMap.forEach(run);
      } else {
        const targetIsArray = shared.isArray(target);
        const isArrayIndex = targetIsArray && shared.isIntegerKey(key);
        if (targetIsArray && key === "length") {
          const newLength = Number(newValue);
          depsMap.forEach((dep, key2) => {
            if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !shared.isSymbol(key2) && key2 >= newLength) {
              run(dep);
            }
          });
        } else {
          if (key !== void 0 || depsMap.has(void 0)) {
            run(depsMap.get(key));
          }
          if (isArrayIndex) {
            run(depsMap.get(ARRAY_ITERATE_KEY));
          }
          switch (type) {
            case "add":
              if (!targetIsArray) {
                run(depsMap.get(ITERATE_KEY));
                if (shared.isMap(target)) {
                  run(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
              } else if (isArrayIndex) {
                run(depsMap.get("length"));
              }
              break;
            case "delete":
              if (!targetIsArray) {
                run(depsMap.get(ITERATE_KEY));
                if (shared.isMap(target)) {
                  run(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
              }
              break;
            case "set":
              if (shared.isMap(target)) {
                run(depsMap.get(ITERATE_KEY));
              }
              break;
          }
        }
      }
      endBatch();
    }
    function getDepFromReactive(object, key) {
      const depMap = targetMap.get(object);
      return depMap && depMap.get(key);
    }
    function reactiveReadArray(array) {
      const raw = toRaw(array);
      if (raw === array) return raw;
      track(raw, "iterate", ARRAY_ITERATE_KEY);
      return isShallow(array) ? raw : raw.map(toReactive);
    }
    function shallowReadArray(arr) {
      track(arr = toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
      return arr;
    }
    var arrayInstrumentations = {
      __proto__: null,
      [Symbol.iterator]() {
        return iterator(this, Symbol.iterator, toReactive);
      },
      concat(...args) {
        return reactiveReadArray(this).concat(
          ...args.map((x3) => shared.isArray(x3) ? reactiveReadArray(x3) : x3)
        );
      },
      entries() {
        return iterator(this, "entries", (value) => {
          value[1] = toReactive(value[1]);
          return value;
        });
      },
      every(fn3, thisArg) {
        return apply(this, "every", fn3, thisArg, void 0, arguments);
      },
      filter(fn3, thisArg) {
        return apply(this, "filter", fn3, thisArg, (v) => v.map(toReactive), arguments);
      },
      find(fn3, thisArg) {
        return apply(this, "find", fn3, thisArg, toReactive, arguments);
      },
      findIndex(fn3, thisArg) {
        return apply(this, "findIndex", fn3, thisArg, void 0, arguments);
      },
      findLast(fn3, thisArg) {
        return apply(this, "findLast", fn3, thisArg, toReactive, arguments);
      },
      findLastIndex(fn3, thisArg) {
        return apply(this, "findLastIndex", fn3, thisArg, void 0, arguments);
      },
      // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
      forEach(fn3, thisArg) {
        return apply(this, "forEach", fn3, thisArg, void 0, arguments);
      },
      includes(...args) {
        return searchProxy(this, "includes", args);
      },
      indexOf(...args) {
        return searchProxy(this, "indexOf", args);
      },
      join(separator) {
        return reactiveReadArray(this).join(separator);
      },
      // keys() iterator only reads `length`, no optimisation required
      lastIndexOf(...args) {
        return searchProxy(this, "lastIndexOf", args);
      },
      map(fn3, thisArg) {
        return apply(this, "map", fn3, thisArg, void 0, arguments);
      },
      pop() {
        return noTracking(this, "pop");
      },
      push(...args) {
        return noTracking(this, "push", args);
      },
      reduce(fn3, ...args) {
        return reduce(this, "reduce", fn3, args);
      },
      reduceRight(fn3, ...args) {
        return reduce(this, "reduceRight", fn3, args);
      },
      shift() {
        return noTracking(this, "shift");
      },
      // slice could use ARRAY_ITERATE but also seems to beg for range tracking
      some(fn3, thisArg) {
        return apply(this, "some", fn3, thisArg, void 0, arguments);
      },
      splice(...args) {
        return noTracking(this, "splice", args);
      },
      toReversed() {
        return reactiveReadArray(this).toReversed();
      },
      toSorted(comparer) {
        return reactiveReadArray(this).toSorted(comparer);
      },
      toSpliced(...args) {
        return reactiveReadArray(this).toSpliced(...args);
      },
      unshift(...args) {
        return noTracking(this, "unshift", args);
      },
      values() {
        return iterator(this, "values", toReactive);
      }
    };
    function iterator(self2, method, wrapValue) {
      const arr = shallowReadArray(self2);
      const iter = arr[method]();
      if (arr !== self2 && !isShallow(self2)) {
        iter._next = iter.next;
        iter.next = () => {
          const result = iter._next();
          if (result.value) {
            result.value = wrapValue(result.value);
          }
          return result;
        };
      }
      return iter;
    }
    var arrayProto = Array.prototype;
    function apply(self2, method, fn3, thisArg, wrappedRetFn, args) {
      const arr = shallowReadArray(self2);
      const needsWrap = arr !== self2 && !isShallow(self2);
      const methodFn = arr[method];
      if (methodFn !== arrayProto[method]) {
        const result2 = methodFn.apply(self2, args);
        return needsWrap ? toReactive(result2) : result2;
      }
      let wrappedFn = fn3;
      if (arr !== self2) {
        if (needsWrap) {
          wrappedFn = function(item, index) {
            return fn3.call(this, toReactive(item), index, self2);
          };
        } else if (fn3.length > 2) {
          wrappedFn = function(item, index) {
            return fn3.call(this, item, index, self2);
          };
        }
      }
      const result = methodFn.call(arr, wrappedFn, thisArg);
      return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
    }
    function reduce(self2, method, fn3, args) {
      const arr = shallowReadArray(self2);
      let wrappedFn = fn3;
      if (arr !== self2) {
        if (!isShallow(self2)) {
          wrappedFn = function(acc, item, index) {
            return fn3.call(this, acc, toReactive(item), index, self2);
          };
        } else if (fn3.length > 3) {
          wrappedFn = function(acc, item, index) {
            return fn3.call(this, acc, item, index, self2);
          };
        }
      }
      return arr[method](wrappedFn, ...args);
    }
    function searchProxy(self2, method, args) {
      const arr = toRaw(self2);
      track(arr, "iterate", ARRAY_ITERATE_KEY);
      const res = arr[method](...args);
      if ((res === -1 || res === false) && isProxy(args[0])) {
        args[0] = toRaw(args[0]);
        return arr[method](...args);
      }
      return res;
    }
    function noTracking(self2, method, args = []) {
      pauseTracking();
      startBatch();
      const res = toRaw(self2)[method].apply(self2, args);
      endBatch();
      resetTracking();
      return res;
    }
    var isNonTrackableKeys = /* @__PURE__ */ shared.makeMap(`__proto__,__v_isRef,__isVue`);
    var builtInSymbols = new Set(
      /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(shared.isSymbol)
    );
    function hasOwnProperty(key) {
      if (!shared.isSymbol(key)) key = String(key);
      const obj = toRaw(this);
      track(obj, "has", key);
      return obj.hasOwnProperty(key);
    }
    var BaseReactiveHandler = class {
      constructor(_isReadonly = false, _isShallow = false) {
        this._isReadonly = _isReadonly;
        this._isShallow = _isShallow;
      }
      get(target, key, receiver) {
        if (key === "__v_skip") return target["__v_skip"];
        const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
        if (key === "__v_isReactive") {
          return !isReadonly2;
        } else if (key === "__v_isReadonly") {
          return isReadonly2;
        } else if (key === "__v_isShallow") {
          return isShallow2;
        } else if (key === "__v_raw") {
          if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
          // this means the receiver is a user proxy of the reactive proxy
          Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
            return target;
          }
          return;
        }
        const targetIsArray = shared.isArray(target);
        if (!isReadonly2) {
          let fn3;
          if (targetIsArray && (fn3 = arrayInstrumentations[key])) {
            return fn3;
          }
          if (key === "hasOwnProperty") {
            return hasOwnProperty;
          }
        }
        const res = Reflect.get(
          target,
          key,
          // if this is a proxy wrapping a ref, return methods using the raw ref
          // as receiver so that we don't have to call `toRaw` on the ref in all
          // its class methods
          isRef(target) ? target : receiver
        );
        if (shared.isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
          return res;
        }
        if (!isReadonly2) {
          track(target, "get", key);
        }
        if (isShallow2) {
          return res;
        }
        if (isRef(res)) {
          return targetIsArray && shared.isIntegerKey(key) ? res : res.value;
        }
        if (shared.isObject(res)) {
          return isReadonly2 ? readonly(res) : reactive2(res);
        }
        return res;
      }
    };
    var MutableReactiveHandler = class extends BaseReactiveHandler {
      constructor(isShallow2 = false) {
        super(false, isShallow2);
      }
      set(target, key, value, receiver) {
        let oldValue = target[key];
        if (!this._isShallow) {
          const isOldValueReadonly = isReadonly(oldValue);
          if (!isShallow(value) && !isReadonly(value)) {
            oldValue = toRaw(oldValue);
            value = toRaw(value);
          }
          if (!shared.isArray(target) && isRef(oldValue) && !isRef(value)) {
            if (isOldValueReadonly) {
              return false;
            } else {
              oldValue.value = value;
              return true;
            }
          }
        }
        const hadKey = shared.isArray(target) && shared.isIntegerKey(key) ? Number(key) < target.length : shared.hasOwn(target, key);
        const result = Reflect.set(
          target,
          key,
          value,
          isRef(target) ? target : receiver
        );
        if (target === toRaw(receiver)) {
          if (!hadKey) {
            trigger(target, "add", key, value);
          } else if (shared.hasChanged(value, oldValue)) {
            trigger(target, "set", key, value, oldValue);
          }
        }
        return result;
      }
      deleteProperty(target, key) {
        const hadKey = shared.hasOwn(target, key);
        const oldValue = target[key];
        const result = Reflect.deleteProperty(target, key);
        if (result && hadKey) {
          trigger(target, "delete", key, void 0, oldValue);
        }
        return result;
      }
      has(target, key) {
        const result = Reflect.has(target, key);
        if (!shared.isSymbol(key) || !builtInSymbols.has(key)) {
          track(target, "has", key);
        }
        return result;
      }
      ownKeys(target) {
        track(
          target,
          "iterate",
          shared.isArray(target) ? "length" : ITERATE_KEY
        );
        return Reflect.ownKeys(target);
      }
    };
    var ReadonlyReactiveHandler = class extends BaseReactiveHandler {
      constructor(isShallow2 = false) {
        super(true, isShallow2);
      }
      set(target, key) {
        {
          warn(
            `Set operation on key "${String(key)}" failed: target is readonly.`,
            target
          );
        }
        return true;
      }
      deleteProperty(target, key) {
        {
          warn(
            `Delete operation on key "${String(key)}" failed: target is readonly.`,
            target
          );
        }
        return true;
      }
    };
    var mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
    var readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
    var shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
    var shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
    var toShallow = (value) => value;
    var getProto = (v) => Reflect.getPrototypeOf(v);
    function createIterableMethod(method, isReadonly2, isShallow2) {
      return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const targetIsMap = shared.isMap(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
        !isReadonly2 && track(
          rawTarget,
          "iterate",
          isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
        );
        return {
          // iterator protocol
          next() {
            const { value, done } = innerIterator.next();
            return done ? { value, done } : {
              value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
              done
            };
          },
          // iterable protocol
          [Symbol.iterator]() {
            return this;
          }
        };
      };
    }
    function createReadonlyMethod(type) {
      return function(...args) {
        {
          const key = args[0] ? `on key "${args[0]}" ` : ``;
          warn(
            `${shared.capitalize(type)} operation ${key}failed: target is readonly.`,
            toRaw(this)
          );
        }
        return type === "delete" ? false : type === "clear" ? void 0 : this;
      };
    }
    function createInstrumentations(readonly2, shallow) {
      const instrumentations = {
        get(key) {
          const target = this["__v_raw"];
          const rawTarget = toRaw(target);
          const rawKey = toRaw(key);
          if (!readonly2) {
            if (shared.hasChanged(key, rawKey)) {
              track(rawTarget, "get", key);
            }
            track(rawTarget, "get", rawKey);
          }
          const { has } = getProto(rawTarget);
          const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
          if (has.call(rawTarget, key)) {
            return wrap(target.get(key));
          } else if (has.call(rawTarget, rawKey)) {
            return wrap(target.get(rawKey));
          } else if (target !== rawTarget) {
            target.get(key);
          }
        },
        get size() {
          const target = this["__v_raw"];
          !readonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
          return Reflect.get(target, "size", target);
        },
        has(key) {
          const target = this["__v_raw"];
          const rawTarget = toRaw(target);
          const rawKey = toRaw(key);
          if (!readonly2) {
            if (shared.hasChanged(key, rawKey)) {
              track(rawTarget, "has", key);
            }
            track(rawTarget, "has", rawKey);
          }
          return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
        },
        forEach(callback, thisArg) {
          const observed = this;
          const target = observed["__v_raw"];
          const rawTarget = toRaw(target);
          const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
          !readonly2 && track(rawTarget, "iterate", ITERATE_KEY);
          return target.forEach((value, key) => {
            return callback.call(thisArg, wrap(value), wrap(key), observed);
          });
        }
      };
      shared.extend(
        instrumentations,
        readonly2 ? {
          add: createReadonlyMethod("add"),
          set: createReadonlyMethod("set"),
          delete: createReadonlyMethod("delete"),
          clear: createReadonlyMethod("clear")
        } : {
          add(value) {
            if (!shallow && !isShallow(value) && !isReadonly(value)) {
              value = toRaw(value);
            }
            const target = toRaw(this);
            const proto2 = getProto(target);
            const hadKey = proto2.has.call(target, value);
            if (!hadKey) {
              target.add(value);
              trigger(target, "add", value, value);
            }
            return this;
          },
          set(key, value) {
            if (!shallow && !isShallow(value) && !isReadonly(value)) {
              value = toRaw(value);
            }
            const target = toRaw(this);
            const { has, get } = getProto(target);
            let hadKey = has.call(target, key);
            if (!hadKey) {
              key = toRaw(key);
              hadKey = has.call(target, key);
            } else {
              checkIdentityKeys(target, has, key);
            }
            const oldValue = get.call(target, key);
            target.set(key, value);
            if (!hadKey) {
              trigger(target, "add", key, value);
            } else if (shared.hasChanged(value, oldValue)) {
              trigger(target, "set", key, value, oldValue);
            }
            return this;
          },
          delete(key) {
            const target = toRaw(this);
            const { has, get } = getProto(target);
            let hadKey = has.call(target, key);
            if (!hadKey) {
              key = toRaw(key);
              hadKey = has.call(target, key);
            } else {
              checkIdentityKeys(target, has, key);
            }
            const oldValue = get ? get.call(target, key) : void 0;
            const result = target.delete(key);
            if (hadKey) {
              trigger(target, "delete", key, void 0, oldValue);
            }
            return result;
          },
          clear() {
            const target = toRaw(this);
            const hadItems = target.size !== 0;
            const oldTarget = shared.isMap(target) ? new Map(target) : new Set(target);
            const result = target.clear();
            if (hadItems) {
              trigger(
                target,
                "clear",
                void 0,
                void 0,
                oldTarget
              );
            }
            return result;
          }
        }
      );
      const iteratorMethods = [
        "keys",
        "values",
        "entries",
        Symbol.iterator
      ];
      iteratorMethods.forEach((method) => {
        instrumentations[method] = createIterableMethod(method, readonly2, shallow);
      });
      return instrumentations;
    }
    function createInstrumentationGetter(isReadonly2, shallow) {
      const instrumentations = createInstrumentations(isReadonly2, shallow);
      return (target, key, receiver) => {
        if (key === "__v_isReactive") {
          return !isReadonly2;
        } else if (key === "__v_isReadonly") {
          return isReadonly2;
        } else if (key === "__v_raw") {
          return target;
        }
        return Reflect.get(
          shared.hasOwn(instrumentations, key) && key in target ? instrumentations : target,
          key,
          receiver
        );
      };
    }
    var mutableCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(false, false)
    };
    var shallowCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(false, true)
    };
    var readonlyCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(true, false)
    };
    var shallowReadonlyCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(true, true)
    };
    function checkIdentityKeys(target, has, key) {
      const rawKey = toRaw(key);
      if (rawKey !== key && has.call(target, rawKey)) {
        const type = shared.toRawType(target);
        warn(
          `Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
        );
      }
    }
    var reactiveMap = /* @__PURE__ */ new WeakMap();
    var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
    var readonlyMap = /* @__PURE__ */ new WeakMap();
    var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
    function targetTypeMap(rawType) {
      switch (rawType) {
        case "Object":
        case "Array":
          return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
          return 2;
        default:
          return 0;
      }
    }
    function getTargetType(value) {
      return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(shared.toRawType(value));
    }
    function reactive2(target) {
      if (isReadonly(target)) {
        return target;
      }
      return createReactiveObject(
        target,
        false,
        mutableHandlers,
        mutableCollectionHandlers,
        reactiveMap
      );
    }
    function shallowReactive(target) {
      return createReactiveObject(
        target,
        false,
        shallowReactiveHandlers,
        shallowCollectionHandlers,
        shallowReactiveMap
      );
    }
    function readonly(target) {
      return createReactiveObject(
        target,
        true,
        readonlyHandlers,
        readonlyCollectionHandlers,
        readonlyMap
      );
    }
    function shallowReadonly(target) {
      return createReactiveObject(
        target,
        true,
        shallowReadonlyHandlers,
        shallowReadonlyCollectionHandlers,
        shallowReadonlyMap
      );
    }
    function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
      if (!shared.isObject(target)) {
        {
          warn(
            `value cannot be made ${isReadonly2 ? "readonly" : "reactive"}: ${String(
              target
            )}`
          );
        }
        return target;
      }
      if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
        return target;
      }
      const existingProxy = proxyMap.get(target);
      if (existingProxy) {
        return existingProxy;
      }
      const targetType = getTargetType(target);
      if (targetType === 0) {
        return target;
      }
      const proxy = new Proxy(
        target,
        targetType === 2 ? collectionHandlers : baseHandlers
      );
      proxyMap.set(target, proxy);
      return proxy;
    }
    function isReactive(value) {
      if (isReadonly(value)) {
        return isReactive(value["__v_raw"]);
      }
      return !!(value && value["__v_isReactive"]);
    }
    function isReadonly(value) {
      return !!(value && value["__v_isReadonly"]);
    }
    function isShallow(value) {
      return !!(value && value["__v_isShallow"]);
    }
    function isProxy(value) {
      return value ? !!value["__v_raw"] : false;
    }
    function toRaw(observed) {
      const raw = observed && observed["__v_raw"];
      return raw ? toRaw(raw) : observed;
    }
    function markRaw(value) {
      if (!shared.hasOwn(value, "__v_skip") && Object.isExtensible(value)) {
        shared.def(value, "__v_skip", true);
      }
      return value;
    }
    var toReactive = (value) => shared.isObject(value) ? reactive2(value) : value;
    var toReadonly = (value) => shared.isObject(value) ? readonly(value) : value;
    function isRef(r2) {
      return r2 ? r2["__v_isRef"] === true : false;
    }
    function ref4(value) {
      return createRef(value, false);
    }
    function shallowRef(value) {
      return createRef(value, true);
    }
    function createRef(rawValue, shallow) {
      if (isRef(rawValue)) {
        return rawValue;
      }
      return new RefImpl(rawValue, shallow);
    }
    var RefImpl = class {
      constructor(value, isShallow2) {
        this.dep = new Dep();
        this["__v_isRef"] = true;
        this["__v_isShallow"] = false;
        this._rawValue = isShallow2 ? value : toRaw(value);
        this._value = isShallow2 ? value : toReactive(value);
        this["__v_isShallow"] = isShallow2;
      }
      get value() {
        {
          this.dep.track({
            target: this,
            type: "get",
            key: "value"
          });
        }
        return this._value;
      }
      set value(newValue) {
        const oldValue = this._rawValue;
        const useDirectValue = this["__v_isShallow"] || isShallow(newValue) || isReadonly(newValue);
        newValue = useDirectValue ? newValue : toRaw(newValue);
        if (shared.hasChanged(newValue, oldValue)) {
          this._rawValue = newValue;
          this._value = useDirectValue ? newValue : toReactive(newValue);
          {
            this.dep.trigger({
              target: this,
              type: "set",
              key: "value",
              newValue,
              oldValue
            });
          }
        }
      }
    };
    function triggerRef(ref22) {
      if (ref22.dep) {
        {
          ref22.dep.trigger({
            target: ref22,
            type: "set",
            key: "value",
            newValue: ref22._value
          });
        }
      }
    }
    function unref(ref22) {
      return isRef(ref22) ? ref22.value : ref22;
    }
    function toValue(source) {
      return shared.isFunction(source) ? source() : unref(source);
    }
    var shallowUnwrapHandlers = {
      get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
      set: (target, key, value, receiver) => {
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        } else {
          return Reflect.set(target, key, value, receiver);
        }
      }
    };
    function proxyRefs(objectWithRefs) {
      return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
    }
    var CustomRefImpl = class {
      constructor(factory) {
        this["__v_isRef"] = true;
        this._value = void 0;
        const dep = this.dep = new Dep();
        const { get, set } = factory(dep.track.bind(dep), dep.trigger.bind(dep));
        this._get = get;
        this._set = set;
      }
      get value() {
        return this._value = this._get();
      }
      set value(newVal) {
        this._set(newVal);
      }
    };
    function customRef(factory) {
      return new CustomRefImpl(factory);
    }
    function toRefs(object) {
      if (!isProxy(object)) {
        warn(`toRefs() expects a reactive object but received a plain one.`);
      }
      const ret = shared.isArray(object) ? new Array(object.length) : {};
      for (const key in object) {
        ret[key] = propertyToRef(object, key);
      }
      return ret;
    }
    var ObjectRefImpl = class {
      constructor(_object, _key, _defaultValue) {
        this._object = _object;
        this._key = _key;
        this._defaultValue = _defaultValue;
        this["__v_isRef"] = true;
        this._value = void 0;
      }
      get value() {
        const val = this._object[this._key];
        return this._value = val === void 0 ? this._defaultValue : val;
      }
      set value(newVal) {
        this._object[this._key] = newVal;
      }
      get dep() {
        return getDepFromReactive(toRaw(this._object), this._key);
      }
    };
    var GetterRefImpl = class {
      constructor(_getter) {
        this._getter = _getter;
        this["__v_isRef"] = true;
        this["__v_isReadonly"] = true;
        this._value = void 0;
      }
      get value() {
        return this._value = this._getter();
      }
    };
    function toRef(source, key, defaultValue) {
      if (isRef(source)) {
        return source;
      } else if (shared.isFunction(source)) {
        return new GetterRefImpl(source);
      } else if (shared.isObject(source) && arguments.length > 1) {
        return propertyToRef(source, key, defaultValue);
      } else {
        return ref4(source);
      }
    }
    function propertyToRef(source, key, defaultValue) {
      const val = source[key];
      return isRef(val) ? val : new ObjectRefImpl(source, key, defaultValue);
    }
    var ComputedRefImpl = class {
      constructor(fn3, setter, isSSR) {
        this.fn = fn3;
        this.setter = setter;
        this._value = void 0;
        this.dep = new Dep(this);
        this.__v_isRef = true;
        this.deps = void 0;
        this.depsTail = void 0;
        this.flags = 16;
        this.globalVersion = globalVersion - 1;
        this.next = void 0;
        this.effect = this;
        this["__v_isReadonly"] = !setter;
        this.isSSR = isSSR;
      }
      /**
       * @internal
       */
      notify() {
        this.flags |= 16;
        if (!(this.flags & 8) && // avoid infinite self recursion
        activeSub !== this) {
          batch(this, true);
          return true;
        }
      }
      get value() {
        const link = this.dep.track({
          target: this,
          type: "get",
          key: "value"
        });
        refreshComputed(this);
        if (link) {
          link.version = this.dep.version;
        }
        return this._value;
      }
      set value(newValue) {
        if (this.setter) {
          this.setter(newValue);
        } else {
          warn("Write operation failed: computed value is readonly");
        }
      }
    };
    function computed(getterOrOptions, debugOptions, isSSR = false) {
      let getter;
      let setter;
      if (shared.isFunction(getterOrOptions)) {
        getter = getterOrOptions;
      } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
      }
      const cRef = new ComputedRefImpl(getter, setter, isSSR);
      if (debugOptions && !isSSR) {
        cRef.onTrack = debugOptions.onTrack;
        cRef.onTrigger = debugOptions.onTrigger;
      }
      return cRef;
    }
    var TrackOpTypes = {
      "GET": "get",
      "HAS": "has",
      "ITERATE": "iterate"
    };
    var TriggerOpTypes = {
      "SET": "set",
      "ADD": "add",
      "DELETE": "delete",
      "CLEAR": "clear"
    };
    var ReactiveFlags = {
      "SKIP": "__v_skip",
      "IS_REACTIVE": "__v_isReactive",
      "IS_READONLY": "__v_isReadonly",
      "IS_SHALLOW": "__v_isShallow",
      "RAW": "__v_raw",
      "IS_REF": "__v_isRef"
    };
    var WatchErrorCodes = {
      "WATCH_GETTER": 2,
      "2": "WATCH_GETTER",
      "WATCH_CALLBACK": 3,
      "3": "WATCH_CALLBACK",
      "WATCH_CLEANUP": 4,
      "4": "WATCH_CLEANUP"
    };
    var INITIAL_WATCHER_VALUE = {};
    var cleanupMap = /* @__PURE__ */ new WeakMap();
    var activeWatcher = void 0;
    function getCurrentWatcher() {
      return activeWatcher;
    }
    function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
      if (owner) {
        let cleanups = cleanupMap.get(owner);
        if (!cleanups) cleanupMap.set(owner, cleanups = []);
        cleanups.push(cleanupFn);
      } else if (!failSilently) {
        warn(
          `onWatcherCleanup() was called when there was no active watcher to associate with.`
        );
      }
    }
    function watch(source, cb, options = shared.EMPTY_OBJ) {
      const { immediate, deep, once, scheduler, augmentJob, call } = options;
      const warnInvalidSource = (s) => {
        (options.onWarn || warn)(
          `Invalid watch source: `,
          s,
          `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`
        );
      };
      const reactiveGetter = (source2) => {
        if (deep) return source2;
        if (isShallow(source2) || deep === false || deep === 0)
          return traverse(source2, 1);
        return traverse(source2);
      };
      let effect2;
      let getter;
      let cleanup;
      let boundCleanup;
      let forceTrigger = false;
      let isMultiSource = false;
      if (isRef(source)) {
        getter = () => source.value;
        forceTrigger = isShallow(source);
      } else if (isReactive(source)) {
        getter = () => reactiveGetter(source);
        forceTrigger = true;
      } else if (shared.isArray(source)) {
        isMultiSource = true;
        forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
        getter = () => source.map((s) => {
          if (isRef(s)) {
            return s.value;
          } else if (isReactive(s)) {
            return reactiveGetter(s);
          } else if (shared.isFunction(s)) {
            return call ? call(s, 2) : s();
          } else {
            warnInvalidSource(s);
          }
        });
      } else if (shared.isFunction(source)) {
        if (cb) {
          getter = call ? () => call(source, 2) : source;
        } else {
          getter = () => {
            if (cleanup) {
              pauseTracking();
              try {
                cleanup();
              } finally {
                resetTracking();
              }
            }
            const currentEffect = activeWatcher;
            activeWatcher = effect2;
            try {
              return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
            } finally {
              activeWatcher = currentEffect;
            }
          };
        }
      } else {
        getter = shared.NOOP;
        warnInvalidSource(source);
      }
      if (cb && deep) {
        const baseGetter = getter;
        const depth = deep === true ? Infinity : deep;
        getter = () => traverse(baseGetter(), depth);
      }
      const scope = getCurrentScope();
      const watchHandle = () => {
        effect2.stop();
        if (scope && scope.active) {
          shared.remove(scope.effects, effect2);
        }
      };
      if (once && cb) {
        const _cb = cb;
        cb = (...args) => {
          _cb(...args);
          watchHandle();
        };
      }
      let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
      const job = (immediateFirstRun) => {
        if (!(effect2.flags & 1) || !effect2.dirty && !immediateFirstRun) {
          return;
        }
        if (cb) {
          const newValue = effect2.run();
          if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => shared.hasChanged(v, oldValue[i])) : shared.hasChanged(newValue, oldValue))) {
            if (cleanup) {
              cleanup();
            }
            const currentWatcher = activeWatcher;
            activeWatcher = effect2;
            try {
              const args = [
                newValue,
                // pass undefined as the old value when it's changed for the first time
                oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
                boundCleanup
              ];
              call ? call(cb, 3, args) : (
                // @ts-expect-error
                cb(...args)
              );
              oldValue = newValue;
            } finally {
              activeWatcher = currentWatcher;
            }
          }
        } else {
          effect2.run();
        }
      };
      if (augmentJob) {
        augmentJob(job);
      }
      effect2 = new ReactiveEffect(getter);
      effect2.scheduler = scheduler ? () => scheduler(job, false) : job;
      boundCleanup = (fn3) => onWatcherCleanup(fn3, false, effect2);
      cleanup = effect2.onStop = () => {
        const cleanups = cleanupMap.get(effect2);
        if (cleanups) {
          if (call) {
            call(cleanups, 4);
          } else {
            for (const cleanup2 of cleanups) cleanup2();
          }
          cleanupMap.delete(effect2);
        }
      };
      {
        effect2.onTrack = options.onTrack;
        effect2.onTrigger = options.onTrigger;
      }
      if (cb) {
        if (immediate) {
          job(true);
        } else {
          oldValue = effect2.run();
        }
      } else if (scheduler) {
        scheduler(job.bind(null, true), true);
      } else {
        effect2.run();
      }
      watchHandle.pause = effect2.pause.bind(effect2);
      watchHandle.resume = effect2.resume.bind(effect2);
      watchHandle.stop = watchHandle;
      return watchHandle;
    }
    function traverse(value, depth = Infinity, seen) {
      if (depth <= 0 || !shared.isObject(value) || value["__v_skip"]) {
        return value;
      }
      seen = seen || /* @__PURE__ */ new Set();
      if (seen.has(value)) {
        return value;
      }
      seen.add(value);
      depth--;
      if (isRef(value)) {
        traverse(value.value, depth, seen);
      } else if (shared.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          traverse(value[i], depth, seen);
        }
      } else if (shared.isSet(value) || shared.isMap(value)) {
        value.forEach((v) => {
          traverse(v, depth, seen);
        });
      } else if (shared.isPlainObject(value)) {
        for (const key in value) {
          traverse(value[key], depth, seen);
        }
        for (const key of Object.getOwnPropertySymbols(value)) {
          if (Object.prototype.propertyIsEnumerable.call(value, key)) {
            traverse(value[key], depth, seen);
          }
        }
      }
      return value;
    }
    exports2.ARRAY_ITERATE_KEY = ARRAY_ITERATE_KEY;
    exports2.EffectFlags = EffectFlags;
    exports2.EffectScope = EffectScope;
    exports2.ITERATE_KEY = ITERATE_KEY;
    exports2.MAP_KEY_ITERATE_KEY = MAP_KEY_ITERATE_KEY;
    exports2.ReactiveEffect = ReactiveEffect;
    exports2.ReactiveFlags = ReactiveFlags;
    exports2.TrackOpTypes = TrackOpTypes;
    exports2.TriggerOpTypes = TriggerOpTypes;
    exports2.WatchErrorCodes = WatchErrorCodes;
    exports2.computed = computed;
    exports2.customRef = customRef;
    exports2.effect = effect;
    exports2.effectScope = effectScope;
    exports2.enableTracking = enableTracking;
    exports2.getCurrentScope = getCurrentScope;
    exports2.getCurrentWatcher = getCurrentWatcher;
    exports2.isProxy = isProxy;
    exports2.isReactive = isReactive;
    exports2.isReadonly = isReadonly;
    exports2.isRef = isRef;
    exports2.isShallow = isShallow;
    exports2.markRaw = markRaw;
    exports2.onEffectCleanup = onEffectCleanup;
    exports2.onScopeDispose = onScopeDispose;
    exports2.onWatcherCleanup = onWatcherCleanup;
    exports2.pauseTracking = pauseTracking;
    exports2.proxyRefs = proxyRefs;
    exports2.reactive = reactive2;
    exports2.reactiveReadArray = reactiveReadArray;
    exports2.readonly = readonly;
    exports2.ref = ref4;
    exports2.resetTracking = resetTracking;
    exports2.shallowReactive = shallowReactive;
    exports2.shallowReadArray = shallowReadArray;
    exports2.shallowReadonly = shallowReadonly;
    exports2.shallowRef = shallowRef;
    exports2.stop = stop;
    exports2.toRaw = toRaw;
    exports2.toReactive = toReactive;
    exports2.toReadonly = toReadonly;
    exports2.toRef = toRef;
    exports2.toRefs = toRefs;
    exports2.toValue = toValue;
    exports2.track = track;
    exports2.traverse = traverse;
    exports2.trigger = trigger;
    exports2.triggerRef = triggerRef;
    exports2.unref = unref;
    exports2.watch = watch;
  }
});

// node_modules/.pnpm/@vue+reactivity@3.5.13/node_modules/@vue/reactivity/index.js
var require_reactivity = __commonJS({
  "node_modules/.pnpm/@vue+reactivity@3.5.13/node_modules/@vue/reactivity/index.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_reactivity_cjs_prod();
    } else {
      module2.exports = require_reactivity_cjs();
    }
  }
});

// node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/error.js
var require_error = __commonJS({
  "node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/error.js"(exports2) {
    "use strict";
    var CommanderError2 = class extends Error {
      /**
       * Constructs the CommanderError class
       * @param {number} exitCode suggested exit code which could be used with process.exit
       * @param {string} code an id string representing the error
       * @param {string} message human-readable description of the error
       */
      constructor(exitCode, code, message) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.code = code;
        this.exitCode = exitCode;
        this.nestedError = void 0;
      }
    };
    var InvalidArgumentError2 = class extends CommanderError2 {
      /**
       * Constructs the InvalidArgumentError class
       * @param {string} [message] explanation of why argument is invalid
       */
      constructor(message) {
        super(1, "commander.invalidArgument", message);
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
      }
    };
    exports2.CommanderError = CommanderError2;
    exports2.InvalidArgumentError = InvalidArgumentError2;
  }
});

// node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/argument.js
var require_argument = __commonJS({
  "node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/argument.js"(exports2) {
    "use strict";
    var { InvalidArgumentError: InvalidArgumentError2 } = require_error();
    var Argument2 = class {
      /**
       * Initialize a new command argument with the given name and description.
       * The default is that the argument is required, and you can explicitly
       * indicate this with <> around the name. Put [] around the name for an optional argument.
       *
       * @param {string} name
       * @param {string} [description]
       */
      constructor(name, description) {
        this.description = description || "";
        this.variadic = false;
        this.parseArg = void 0;
        this.defaultValue = void 0;
        this.defaultValueDescription = void 0;
        this.argChoices = void 0;
        switch (name[0]) {
          case "<":
            this.required = true;
            this._name = name.slice(1, -1);
            break;
          case "[":
            this.required = false;
            this._name = name.slice(1, -1);
            break;
          default:
            this.required = true;
            this._name = name;
            break;
        }
        if (this._name.length > 3 && this._name.slice(-3) === "...") {
          this.variadic = true;
          this._name = this._name.slice(0, -3);
        }
      }
      /**
       * Return argument name.
       *
       * @return {string}
       */
      name() {
        return this._name;
      }
      /**
       * @package
       */
      _concatValue(value, previous) {
        if (previous === this.defaultValue || !Array.isArray(previous)) {
          return [value];
        }
        return previous.concat(value);
      }
      /**
       * Set the default value, and optionally supply the description to be displayed in the help.
       *
       * @param {*} value
       * @param {string} [description]
       * @return {Argument}
       */
      default(value, description) {
        this.defaultValue = value;
        this.defaultValueDescription = description;
        return this;
      }
      /**
       * Set the custom handler for processing CLI command arguments into argument values.
       *
       * @param {Function} [fn]
       * @return {Argument}
       */
      argParser(fn3) {
        this.parseArg = fn3;
        return this;
      }
      /**
       * Only allow argument value to be one of choices.
       *
       * @param {string[]} values
       * @return {Argument}
       */
      choices(values) {
        this.argChoices = values.slice();
        this.parseArg = (arg, previous) => {
          if (!this.argChoices.includes(arg)) {
            throw new InvalidArgumentError2(
              `Allowed choices are ${this.argChoices.join(", ")}.`
            );
          }
          if (this.variadic) {
            return this._concatValue(arg, previous);
          }
          return arg;
        };
        return this;
      }
      /**
       * Make argument required.
       *
       * @returns {Argument}
       */
      argRequired() {
        this.required = true;
        return this;
      }
      /**
       * Make argument optional.
       *
       * @returns {Argument}
       */
      argOptional() {
        this.required = false;
        return this;
      }
    };
    function humanReadableArgName(arg) {
      const nameOutput = arg.name() + (arg.variadic === true ? "..." : "");
      return arg.required ? "<" + nameOutput + ">" : "[" + nameOutput + "]";
    }
    exports2.Argument = Argument2;
    exports2.humanReadableArgName = humanReadableArgName;
  }
});

// node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/help.js
var require_help = __commonJS({
  "node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/help.js"(exports2) {
    "use strict";
    var { humanReadableArgName } = require_argument();
    var Help2 = class {
      constructor() {
        this.helpWidth = void 0;
        this.sortSubcommands = false;
        this.sortOptions = false;
        this.showGlobalOptions = false;
      }
      /**
       * Get an array of the visible subcommands. Includes a placeholder for the implicit help command, if there is one.
       *
       * @param {Command} cmd
       * @returns {Command[]}
       */
      visibleCommands(cmd) {
        const visibleCommands = cmd.commands.filter((cmd2) => !cmd2._hidden);
        const helpCommand = cmd._getHelpCommand();
        if (helpCommand && !helpCommand._hidden) {
          visibleCommands.push(helpCommand);
        }
        if (this.sortSubcommands) {
          visibleCommands.sort((a, b2) => {
            return a.name().localeCompare(b2.name());
          });
        }
        return visibleCommands;
      }
      /**
       * Compare options for sort.
       *
       * @param {Option} a
       * @param {Option} b
       * @returns {number}
       */
      compareOptions(a, b2) {
        const getSortKey = (option) => {
          return option.short ? option.short.replace(/^-/, "") : option.long.replace(/^--/, "");
        };
        return getSortKey(a).localeCompare(getSortKey(b2));
      }
      /**
       * Get an array of the visible options. Includes a placeholder for the implicit help option, if there is one.
       *
       * @param {Command} cmd
       * @returns {Option[]}
       */
      visibleOptions(cmd) {
        const visibleOptions = cmd.options.filter((option) => !option.hidden);
        const helpOption = cmd._getHelpOption();
        if (helpOption && !helpOption.hidden) {
          const removeShort = helpOption.short && cmd._findOption(helpOption.short);
          const removeLong = helpOption.long && cmd._findOption(helpOption.long);
          if (!removeShort && !removeLong) {
            visibleOptions.push(helpOption);
          } else if (helpOption.long && !removeLong) {
            visibleOptions.push(
              cmd.createOption(helpOption.long, helpOption.description)
            );
          } else if (helpOption.short && !removeShort) {
            visibleOptions.push(
              cmd.createOption(helpOption.short, helpOption.description)
            );
          }
        }
        if (this.sortOptions) {
          visibleOptions.sort(this.compareOptions);
        }
        return visibleOptions;
      }
      /**
       * Get an array of the visible global options. (Not including help.)
       *
       * @param {Command} cmd
       * @returns {Option[]}
       */
      visibleGlobalOptions(cmd) {
        if (!this.showGlobalOptions) return [];
        const globalOptions = [];
        for (let ancestorCmd = cmd.parent; ancestorCmd; ancestorCmd = ancestorCmd.parent) {
          const visibleOptions = ancestorCmd.options.filter(
            (option) => !option.hidden
          );
          globalOptions.push(...visibleOptions);
        }
        if (this.sortOptions) {
          globalOptions.sort(this.compareOptions);
        }
        return globalOptions;
      }
      /**
       * Get an array of the arguments if any have a description.
       *
       * @param {Command} cmd
       * @returns {Argument[]}
       */
      visibleArguments(cmd) {
        if (cmd._argsDescription) {
          cmd.registeredArguments.forEach((argument) => {
            argument.description = argument.description || cmd._argsDescription[argument.name()] || "";
          });
        }
        if (cmd.registeredArguments.find((argument) => argument.description)) {
          return cmd.registeredArguments;
        }
        return [];
      }
      /**
       * Get the command term to show in the list of subcommands.
       *
       * @param {Command} cmd
       * @returns {string}
       */
      subcommandTerm(cmd) {
        const args = cmd.registeredArguments.map((arg) => humanReadableArgName(arg)).join(" ");
        return cmd._name + (cmd._aliases[0] ? "|" + cmd._aliases[0] : "") + (cmd.options.length ? " [options]" : "") + // simplistic check for non-help option
        (args ? " " + args : "");
      }
      /**
       * Get the option term to show in the list of options.
       *
       * @param {Option} option
       * @returns {string}
       */
      optionTerm(option) {
        return option.flags;
      }
      /**
       * Get the argument term to show in the list of arguments.
       *
       * @param {Argument} argument
       * @returns {string}
       */
      argumentTerm(argument) {
        return argument.name();
      }
      /**
       * Get the longest command term length.
       *
       * @param {Command} cmd
       * @param {Help} helper
       * @returns {number}
       */
      longestSubcommandTermLength(cmd, helper) {
        return helper.visibleCommands(cmd).reduce((max, command) => {
          return Math.max(max, helper.subcommandTerm(command).length);
        }, 0);
      }
      /**
       * Get the longest option term length.
       *
       * @param {Command} cmd
       * @param {Help} helper
       * @returns {number}
       */
      longestOptionTermLength(cmd, helper) {
        return helper.visibleOptions(cmd).reduce((max, option) => {
          return Math.max(max, helper.optionTerm(option).length);
        }, 0);
      }
      /**
       * Get the longest global option term length.
       *
       * @param {Command} cmd
       * @param {Help} helper
       * @returns {number}
       */
      longestGlobalOptionTermLength(cmd, helper) {
        return helper.visibleGlobalOptions(cmd).reduce((max, option) => {
          return Math.max(max, helper.optionTerm(option).length);
        }, 0);
      }
      /**
       * Get the longest argument term length.
       *
       * @param {Command} cmd
       * @param {Help} helper
       * @returns {number}
       */
      longestArgumentTermLength(cmd, helper) {
        return helper.visibleArguments(cmd).reduce((max, argument) => {
          return Math.max(max, helper.argumentTerm(argument).length);
        }, 0);
      }
      /**
       * Get the command usage to be displayed at the top of the built-in help.
       *
       * @param {Command} cmd
       * @returns {string}
       */
      commandUsage(cmd) {
        let cmdName = cmd._name;
        if (cmd._aliases[0]) {
          cmdName = cmdName + "|" + cmd._aliases[0];
        }
        let ancestorCmdNames = "";
        for (let ancestorCmd = cmd.parent; ancestorCmd; ancestorCmd = ancestorCmd.parent) {
          ancestorCmdNames = ancestorCmd.name() + " " + ancestorCmdNames;
        }
        return ancestorCmdNames + cmdName + " " + cmd.usage();
      }
      /**
       * Get the description for the command.
       *
       * @param {Command} cmd
       * @returns {string}
       */
      commandDescription(cmd) {
        return cmd.description();
      }
      /**
       * Get the subcommand summary to show in the list of subcommands.
       * (Fallback to description for backwards compatibility.)
       *
       * @param {Command} cmd
       * @returns {string}
       */
      subcommandDescription(cmd) {
        return cmd.summary() || cmd.description();
      }
      /**
       * Get the option description to show in the list of options.
       *
       * @param {Option} option
       * @return {string}
       */
      optionDescription(option) {
        const extraInfo = [];
        if (option.argChoices) {
          extraInfo.push(
            // use stringify to match the display of the default value
            `choices: ${option.argChoices.map((choice) => JSON.stringify(choice)).join(", ")}`
          );
        }
        if (option.defaultValue !== void 0) {
          const showDefault = option.required || option.optional || option.isBoolean() && typeof option.defaultValue === "boolean";
          if (showDefault) {
            extraInfo.push(
              `default: ${option.defaultValueDescription || JSON.stringify(option.defaultValue)}`
            );
          }
        }
        if (option.presetArg !== void 0 && option.optional) {
          extraInfo.push(`preset: ${JSON.stringify(option.presetArg)}`);
        }
        if (option.envVar !== void 0) {
          extraInfo.push(`env: ${option.envVar}`);
        }
        if (extraInfo.length > 0) {
          return `${option.description} (${extraInfo.join(", ")})`;
        }
        return option.description;
      }
      /**
       * Get the argument description to show in the list of arguments.
       *
       * @param {Argument} argument
       * @return {string}
       */
      argumentDescription(argument) {
        const extraInfo = [];
        if (argument.argChoices) {
          extraInfo.push(
            // use stringify to match the display of the default value
            `choices: ${argument.argChoices.map((choice) => JSON.stringify(choice)).join(", ")}`
          );
        }
        if (argument.defaultValue !== void 0) {
          extraInfo.push(
            `default: ${argument.defaultValueDescription || JSON.stringify(argument.defaultValue)}`
          );
        }
        if (extraInfo.length > 0) {
          const extraDescripton = `(${extraInfo.join(", ")})`;
          if (argument.description) {
            return `${argument.description} ${extraDescripton}`;
          }
          return extraDescripton;
        }
        return argument.description;
      }
      /**
       * Generate the built-in help text.
       *
       * @param {Command} cmd
       * @param {Help} helper
       * @returns {string}
       */
      formatHelp(cmd, helper) {
        const termWidth = helper.padWidth(cmd, helper);
        const helpWidth = helper.helpWidth || 80;
        const itemIndentWidth = 2;
        const itemSeparatorWidth = 2;
        function formatItem(term, description) {
          if (description) {
            const fullText = `${term.padEnd(termWidth + itemSeparatorWidth)}${description}`;
            return helper.wrap(
              fullText,
              helpWidth - itemIndentWidth,
              termWidth + itemSeparatorWidth
            );
          }
          return term;
        }
        function formatList(textArray) {
          return textArray.join("\n").replace(/^/gm, " ".repeat(itemIndentWidth));
        }
        let output = [`Usage: ${helper.commandUsage(cmd)}`, ""];
        const commandDescription = helper.commandDescription(cmd);
        if (commandDescription.length > 0) {
          output = output.concat([
            helper.wrap(commandDescription, helpWidth, 0),
            ""
          ]);
        }
        const argumentList = helper.visibleArguments(cmd).map((argument) => {
          return formatItem(
            helper.argumentTerm(argument),
            helper.argumentDescription(argument)
          );
        });
        if (argumentList.length > 0) {
          output = output.concat(["Arguments:", formatList(argumentList), ""]);
        }
        const optionList = helper.visibleOptions(cmd).map((option) => {
          return formatItem(
            helper.optionTerm(option),
            helper.optionDescription(option)
          );
        });
        if (optionList.length > 0) {
          output = output.concat(["Options:", formatList(optionList), ""]);
        }
        if (this.showGlobalOptions) {
          const globalOptionList = helper.visibleGlobalOptions(cmd).map((option) => {
            return formatItem(
              helper.optionTerm(option),
              helper.optionDescription(option)
            );
          });
          if (globalOptionList.length > 0) {
            output = output.concat([
              "Global Options:",
              formatList(globalOptionList),
              ""
            ]);
          }
        }
        const commandList = helper.visibleCommands(cmd).map((cmd2) => {
          return formatItem(
            helper.subcommandTerm(cmd2),
            helper.subcommandDescription(cmd2)
          );
        });
        if (commandList.length > 0) {
          output = output.concat(["Commands:", formatList(commandList), ""]);
        }
        return output.join("\n");
      }
      /**
       * Calculate the pad width from the maximum term length.
       *
       * @param {Command} cmd
       * @param {Help} helper
       * @returns {number}
       */
      padWidth(cmd, helper) {
        return Math.max(
          helper.longestOptionTermLength(cmd, helper),
          helper.longestGlobalOptionTermLength(cmd, helper),
          helper.longestSubcommandTermLength(cmd, helper),
          helper.longestArgumentTermLength(cmd, helper)
        );
      }
      /**
       * Wrap the given string to width characters per line, with lines after the first indented.
       * Do not wrap if insufficient room for wrapping (minColumnWidth), or string is manually formatted.
       *
       * @param {string} str
       * @param {number} width
       * @param {number} indent
       * @param {number} [minColumnWidth=40]
       * @return {string}
       *
       */
      wrap(str, width, indent, minColumnWidth = 40) {
        const indents = " \\f\\t\\v\xA0\u1680\u2000-\u200A\u202F\u205F\u3000\uFEFF";
        const manualIndent = new RegExp(`[\\n][${indents}]+`);
        if (str.match(manualIndent)) return str;
        const columnWidth = width - indent;
        if (columnWidth < minColumnWidth) return str;
        const leadingStr = str.slice(0, indent);
        const columnText = str.slice(indent).replace("\r\n", "\n");
        const indentString = " ".repeat(indent);
        const zeroWidthSpace = "\u200B";
        const breaks = `\\s${zeroWidthSpace}`;
        const regex = new RegExp(
          `
|.{1,${columnWidth - 1}}([${breaks}]|$)|[^${breaks}]+?([${breaks}]|$)`,
          "g"
        );
        const lines = columnText.match(regex) || [];
        return leadingStr + lines.map((line, i) => {
          if (line === "\n") return "";
          return (i > 0 ? indentString : "") + line.trimEnd();
        }).join("\n");
      }
    };
    exports2.Help = Help2;
  }
});

// node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/option.js
var require_option = __commonJS({
  "node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/option.js"(exports2) {
    "use strict";
    var { InvalidArgumentError: InvalidArgumentError2 } = require_error();
    var Option2 = class {
      /**
       * Initialize a new `Option` with the given `flags` and `description`.
       *
       * @param {string} flags
       * @param {string} [description]
       */
      constructor(flags, description) {
        this.flags = flags;
        this.description = description || "";
        this.required = flags.includes("<");
        this.optional = flags.includes("[");
        this.variadic = /\w\.\.\.[>\]]$/.test(flags);
        this.mandatory = false;
        const optionFlags = splitOptionFlags(flags);
        this.short = optionFlags.shortFlag;
        this.long = optionFlags.longFlag;
        this.negate = false;
        if (this.long) {
          this.negate = this.long.startsWith("--no-");
        }
        this.defaultValue = void 0;
        this.defaultValueDescription = void 0;
        this.presetArg = void 0;
        this.envVar = void 0;
        this.parseArg = void 0;
        this.hidden = false;
        this.argChoices = void 0;
        this.conflictsWith = [];
        this.implied = void 0;
      }
      /**
       * Set the default value, and optionally supply the description to be displayed in the help.
       *
       * @param {*} value
       * @param {string} [description]
       * @return {Option}
       */
      default(value, description) {
        this.defaultValue = value;
        this.defaultValueDescription = description;
        return this;
      }
      /**
       * Preset to use when option used without option-argument, especially optional but also boolean and negated.
       * The custom processing (parseArg) is called.
       *
       * @example
       * new Option('--color').default('GREYSCALE').preset('RGB');
       * new Option('--donate [amount]').preset('20').argParser(parseFloat);
       *
       * @param {*} arg
       * @return {Option}
       */
      preset(arg) {
        this.presetArg = arg;
        return this;
      }
      /**
       * Add option name(s) that conflict with this option.
       * An error will be displayed if conflicting options are found during parsing.
       *
       * @example
       * new Option('--rgb').conflicts('cmyk');
       * new Option('--js').conflicts(['ts', 'jsx']);
       *
       * @param {(string | string[])} names
       * @return {Option}
       */
      conflicts(names) {
        this.conflictsWith = this.conflictsWith.concat(names);
        return this;
      }
      /**
       * Specify implied option values for when this option is set and the implied options are not.
       *
       * The custom processing (parseArg) is not called on the implied values.
       *
       * @example
       * program
       *   .addOption(new Option('--log', 'write logging information to file'))
       *   .addOption(new Option('--trace', 'log extra details').implies({ log: 'trace.txt' }));
       *
       * @param {object} impliedOptionValues
       * @return {Option}
       */
      implies(impliedOptionValues) {
        let newImplied = impliedOptionValues;
        if (typeof impliedOptionValues === "string") {
          newImplied = { [impliedOptionValues]: true };
        }
        this.implied = Object.assign(this.implied || {}, newImplied);
        return this;
      }
      /**
       * Set environment variable to check for option value.
       *
       * An environment variable is only used if when processed the current option value is
       * undefined, or the source of the current value is 'default' or 'config' or 'env'.
       *
       * @param {string} name
       * @return {Option}
       */
      env(name) {
        this.envVar = name;
        return this;
      }
      /**
       * Set the custom handler for processing CLI option arguments into option values.
       *
       * @param {Function} [fn]
       * @return {Option}
       */
      argParser(fn3) {
        this.parseArg = fn3;
        return this;
      }
      /**
       * Whether the option is mandatory and must have a value after parsing.
       *
       * @param {boolean} [mandatory=true]
       * @return {Option}
       */
      makeOptionMandatory(mandatory = true) {
        this.mandatory = !!mandatory;
        return this;
      }
      /**
       * Hide option in help.
       *
       * @param {boolean} [hide=true]
       * @return {Option}
       */
      hideHelp(hide = true) {
        this.hidden = !!hide;
        return this;
      }
      /**
       * @package
       */
      _concatValue(value, previous) {
        if (previous === this.defaultValue || !Array.isArray(previous)) {
          return [value];
        }
        return previous.concat(value);
      }
      /**
       * Only allow option value to be one of choices.
       *
       * @param {string[]} values
       * @return {Option}
       */
      choices(values) {
        this.argChoices = values.slice();
        this.parseArg = (arg, previous) => {
          if (!this.argChoices.includes(arg)) {
            throw new InvalidArgumentError2(
              `Allowed choices are ${this.argChoices.join(", ")}.`
            );
          }
          if (this.variadic) {
            return this._concatValue(arg, previous);
          }
          return arg;
        };
        return this;
      }
      /**
       * Return option name.
       *
       * @return {string}
       */
      name() {
        if (this.long) {
          return this.long.replace(/^--/, "");
        }
        return this.short.replace(/^-/, "");
      }
      /**
       * Return option name, in a camelcase format that can be used
       * as a object attribute key.
       *
       * @return {string}
       */
      attributeName() {
        return camelcase(this.name().replace(/^no-/, ""));
      }
      /**
       * Check if `arg` matches the short or long flag.
       *
       * @param {string} arg
       * @return {boolean}
       * @package
       */
      is(arg) {
        return this.short === arg || this.long === arg;
      }
      /**
       * Return whether a boolean option.
       *
       * Options are one of boolean, negated, required argument, or optional argument.
       *
       * @return {boolean}
       * @package
       */
      isBoolean() {
        return !this.required && !this.optional && !this.negate;
      }
    };
    var DualOptions = class {
      /**
       * @param {Option[]} options
       */
      constructor(options) {
        this.positiveOptions = /* @__PURE__ */ new Map();
        this.negativeOptions = /* @__PURE__ */ new Map();
        this.dualOptions = /* @__PURE__ */ new Set();
        options.forEach((option) => {
          if (option.negate) {
            this.negativeOptions.set(option.attributeName(), option);
          } else {
            this.positiveOptions.set(option.attributeName(), option);
          }
        });
        this.negativeOptions.forEach((value, key) => {
          if (this.positiveOptions.has(key)) {
            this.dualOptions.add(key);
          }
        });
      }
      /**
       * Did the value come from the option, and not from possible matching dual option?
       *
       * @param {*} value
       * @param {Option} option
       * @returns {boolean}
       */
      valueFromOption(value, option) {
        const optionKey = option.attributeName();
        if (!this.dualOptions.has(optionKey)) return true;
        const preset = this.negativeOptions.get(optionKey).presetArg;
        const negativeValue = preset !== void 0 ? preset : false;
        return option.negate === (negativeValue === value);
      }
    };
    function camelcase(str) {
      return str.split("-").reduce((str2, word) => {
        return str2 + word[0].toUpperCase() + word.slice(1);
      });
    }
    function splitOptionFlags(flags) {
      let shortFlag;
      let longFlag;
      const flagParts = flags.split(/[ |,]+/);
      if (flagParts.length > 1 && !/^[[<]/.test(flagParts[1]))
        shortFlag = flagParts.shift();
      longFlag = flagParts.shift();
      if (!shortFlag && /^-[^-]$/.test(longFlag)) {
        shortFlag = longFlag;
        longFlag = void 0;
      }
      return { shortFlag, longFlag };
    }
    exports2.Option = Option2;
    exports2.DualOptions = DualOptions;
  }
});

// node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/suggestSimilar.js
var require_suggestSimilar = __commonJS({
  "node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/suggestSimilar.js"(exports2) {
    "use strict";
    var maxDistance = 3;
    function editDistance(a, b2) {
      if (Math.abs(a.length - b2.length) > maxDistance)
        return Math.max(a.length, b2.length);
      const d = [];
      for (let i = 0; i <= a.length; i++) {
        d[i] = [i];
      }
      for (let j4 = 0; j4 <= b2.length; j4++) {
        d[0][j4] = j4;
      }
      for (let j4 = 1; j4 <= b2.length; j4++) {
        for (let i = 1; i <= a.length; i++) {
          let cost = 1;
          if (a[i - 1] === b2[j4 - 1]) {
            cost = 0;
          } else {
            cost = 1;
          }
          d[i][j4] = Math.min(
            d[i - 1][j4] + 1,
            // deletion
            d[i][j4 - 1] + 1,
            // insertion
            d[i - 1][j4 - 1] + cost
            // substitution
          );
          if (i > 1 && j4 > 1 && a[i - 1] === b2[j4 - 2] && a[i - 2] === b2[j4 - 1]) {
            d[i][j4] = Math.min(d[i][j4], d[i - 2][j4 - 2] + 1);
          }
        }
      }
      return d[a.length][b2.length];
    }
    function suggestSimilar(word, candidates) {
      if (!candidates || candidates.length === 0) return "";
      candidates = Array.from(new Set(candidates));
      const searchingOptions = word.startsWith("--");
      if (searchingOptions) {
        word = word.slice(2);
        candidates = candidates.map((candidate) => candidate.slice(2));
      }
      let similar = [];
      let bestDistance = maxDistance;
      const minSimilarity = 0.4;
      candidates.forEach((candidate) => {
        if (candidate.length <= 1) return;
        const distance = editDistance(word, candidate);
        const length = Math.max(word.length, candidate.length);
        const similarity = (length - distance) / length;
        if (similarity > minSimilarity) {
          if (distance < bestDistance) {
            bestDistance = distance;
            similar = [candidate];
          } else if (distance === bestDistance) {
            similar.push(candidate);
          }
        }
      });
      similar.sort((a, b2) => a.localeCompare(b2));
      if (searchingOptions) {
        similar = similar.map((candidate) => `--${candidate}`);
      }
      if (similar.length > 1) {
        return `
(Did you mean one of ${similar.join(", ")}?)`;
      }
      if (similar.length === 1) {
        return `
(Did you mean ${similar[0]}?)`;
      }
      return "";
    }
    exports2.suggestSimilar = suggestSimilar;
  }
});

// node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/command.js
var require_command = __commonJS({
  "node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/command.js"(exports2) {
    "use strict";
    var EventEmitter = require("node:events").EventEmitter;
    var childProcess = require("node:child_process");
    var path8 = require("node:path");
    var fs7 = require("node:fs");
    var process3 = require("node:process");
    var { Argument: Argument2, humanReadableArgName } = require_argument();
    var { CommanderError: CommanderError2 } = require_error();
    var { Help: Help2 } = require_help();
    var { Option: Option2, DualOptions } = require_option();
    var { suggestSimilar } = require_suggestSimilar();
    var Command2 = class _Command extends EventEmitter {
      /**
       * Initialize a new `Command`.
       *
       * @param {string} [name]
       */
      constructor(name) {
        super();
        this.commands = [];
        this.options = [];
        this.parent = null;
        this._allowUnknownOption = false;
        this._allowExcessArguments = true;
        this.registeredArguments = [];
        this._args = this.registeredArguments;
        this.args = [];
        this.rawArgs = [];
        this.processedArgs = [];
        this._scriptPath = null;
        this._name = name || "";
        this._optionValues = {};
        this._optionValueSources = {};
        this._storeOptionsAsProperties = false;
        this._actionHandler = null;
        this._executableHandler = false;
        this._executableFile = null;
        this._executableDir = null;
        this._defaultCommandName = null;
        this._exitCallback = null;
        this._aliases = [];
        this._combineFlagAndOptionalValue = true;
        this._description = "";
        this._summary = "";
        this._argsDescription = void 0;
        this._enablePositionalOptions = false;
        this._passThroughOptions = false;
        this._lifeCycleHooks = {};
        this._showHelpAfterError = false;
        this._showSuggestionAfterError = true;
        this._outputConfiguration = {
          writeOut: (str) => process3.stdout.write(str),
          writeErr: (str) => process3.stderr.write(str),
          getOutHelpWidth: () => process3.stdout.isTTY ? process3.stdout.columns : void 0,
          getErrHelpWidth: () => process3.stderr.isTTY ? process3.stderr.columns : void 0,
          outputError: (str, write) => write(str)
        };
        this._hidden = false;
        this._helpOption = void 0;
        this._addImplicitHelpCommand = void 0;
        this._helpCommand = void 0;
        this._helpConfiguration = {};
      }
      /**
       * Copy settings that are useful to have in common across root command and subcommands.
       *
       * (Used internally when adding a command using `.command()` so subcommands inherit parent settings.)
       *
       * @param {Command} sourceCommand
       * @return {Command} `this` command for chaining
       */
      copyInheritedSettings(sourceCommand) {
        this._outputConfiguration = sourceCommand._outputConfiguration;
        this._helpOption = sourceCommand._helpOption;
        this._helpCommand = sourceCommand._helpCommand;
        this._helpConfiguration = sourceCommand._helpConfiguration;
        this._exitCallback = sourceCommand._exitCallback;
        this._storeOptionsAsProperties = sourceCommand._storeOptionsAsProperties;
        this._combineFlagAndOptionalValue = sourceCommand._combineFlagAndOptionalValue;
        this._allowExcessArguments = sourceCommand._allowExcessArguments;
        this._enablePositionalOptions = sourceCommand._enablePositionalOptions;
        this._showHelpAfterError = sourceCommand._showHelpAfterError;
        this._showSuggestionAfterError = sourceCommand._showSuggestionAfterError;
        return this;
      }
      /**
       * @returns {Command[]}
       * @private
       */
      _getCommandAndAncestors() {
        const result = [];
        for (let command = this; command; command = command.parent) {
          result.push(command);
        }
        return result;
      }
      /**
       * Define a command.
       *
       * There are two styles of command: pay attention to where to put the description.
       *
       * @example
       * // Command implemented using action handler (description is supplied separately to `.command`)
       * program
       *   .command('clone <source> [destination]')
       *   .description('clone a repository into a newly created directory')
       *   .action((source, destination) => {
       *     console.log('clone command called');
       *   });
       *
       * // Command implemented using separate executable file (description is second parameter to `.command`)
       * program
       *   .command('start <service>', 'start named service')
       *   .command('stop [service]', 'stop named service, or all if no name supplied');
       *
       * @param {string} nameAndArgs - command name and arguments, args are `<required>` or `[optional]` and last may also be `variadic...`
       * @param {(object | string)} [actionOptsOrExecDesc] - configuration options (for action), or description (for executable)
       * @param {object} [execOpts] - configuration options (for executable)
       * @return {Command} returns new command for action handler, or `this` for executable command
       */
      command(nameAndArgs, actionOptsOrExecDesc, execOpts) {
        let desc = actionOptsOrExecDesc;
        let opts = execOpts;
        if (typeof desc === "object" && desc !== null) {
          opts = desc;
          desc = null;
        }
        opts = opts || {};
        const [, name, args] = nameAndArgs.match(/([^ ]+) *(.*)/);
        const cmd = this.createCommand(name);
        if (desc) {
          cmd.description(desc);
          cmd._executableHandler = true;
        }
        if (opts.isDefault) this._defaultCommandName = cmd._name;
        cmd._hidden = !!(opts.noHelp || opts.hidden);
        cmd._executableFile = opts.executableFile || null;
        if (args) cmd.arguments(args);
        this._registerCommand(cmd);
        cmd.parent = this;
        cmd.copyInheritedSettings(this);
        if (desc) return this;
        return cmd;
      }
      /**
       * Factory routine to create a new unattached command.
       *
       * See .command() for creating an attached subcommand, which uses this routine to
       * create the command. You can override createCommand to customise subcommands.
       *
       * @param {string} [name]
       * @return {Command} new command
       */
      createCommand(name) {
        return new _Command(name);
      }
      /**
       * You can customise the help with a subclass of Help by overriding createHelp,
       * or by overriding Help properties using configureHelp().
       *
       * @return {Help}
       */
      createHelp() {
        return Object.assign(new Help2(), this.configureHelp());
      }
      /**
       * You can customise the help by overriding Help properties using configureHelp(),
       * or with a subclass of Help by overriding createHelp().
       *
       * @param {object} [configuration] - configuration options
       * @return {(Command | object)} `this` command for chaining, or stored configuration
       */
      configureHelp(configuration) {
        if (configuration === void 0) return this._helpConfiguration;
        this._helpConfiguration = configuration;
        return this;
      }
      /**
       * The default output goes to stdout and stderr. You can customise this for special
       * applications. You can also customise the display of errors by overriding outputError.
       *
       * The configuration properties are all functions:
       *
       *     // functions to change where being written, stdout and stderr
       *     writeOut(str)
       *     writeErr(str)
       *     // matching functions to specify width for wrapping help
       *     getOutHelpWidth()
       *     getErrHelpWidth()
       *     // functions based on what is being written out
       *     outputError(str, write) // used for displaying errors, and not used for displaying help
       *
       * @param {object} [configuration] - configuration options
       * @return {(Command | object)} `this` command for chaining, or stored configuration
       */
      configureOutput(configuration) {
        if (configuration === void 0) return this._outputConfiguration;
        Object.assign(this._outputConfiguration, configuration);
        return this;
      }
      /**
       * Display the help or a custom message after an error occurs.
       *
       * @param {(boolean|string)} [displayHelp]
       * @return {Command} `this` command for chaining
       */
      showHelpAfterError(displayHelp = true) {
        if (typeof displayHelp !== "string") displayHelp = !!displayHelp;
        this._showHelpAfterError = displayHelp;
        return this;
      }
      /**
       * Display suggestion of similar commands for unknown commands, or options for unknown options.
       *
       * @param {boolean} [displaySuggestion]
       * @return {Command} `this` command for chaining
       */
      showSuggestionAfterError(displaySuggestion = true) {
        this._showSuggestionAfterError = !!displaySuggestion;
        return this;
      }
      /**
       * Add a prepared subcommand.
       *
       * See .command() for creating an attached subcommand which inherits settings from its parent.
       *
       * @param {Command} cmd - new subcommand
       * @param {object} [opts] - configuration options
       * @return {Command} `this` command for chaining
       */
      addCommand(cmd, opts) {
        if (!cmd._name) {
          throw new Error(`Command passed to .addCommand() must have a name
- specify the name in Command constructor or using .name()`);
        }
        opts = opts || {};
        if (opts.isDefault) this._defaultCommandName = cmd._name;
        if (opts.noHelp || opts.hidden) cmd._hidden = true;
        this._registerCommand(cmd);
        cmd.parent = this;
        cmd._checkForBrokenPassThrough();
        return this;
      }
      /**
       * Factory routine to create a new unattached argument.
       *
       * See .argument() for creating an attached argument, which uses this routine to
       * create the argument. You can override createArgument to return a custom argument.
       *
       * @param {string} name
       * @param {string} [description]
       * @return {Argument} new argument
       */
      createArgument(name, description) {
        return new Argument2(name, description);
      }
      /**
       * Define argument syntax for command.
       *
       * The default is that the argument is required, and you can explicitly
       * indicate this with <> around the name. Put [] around the name for an optional argument.
       *
       * @example
       * program.argument('<input-file>');
       * program.argument('[output-file]');
       *
       * @param {string} name
       * @param {string} [description]
       * @param {(Function|*)} [fn] - custom argument processing function
       * @param {*} [defaultValue]
       * @return {Command} `this` command for chaining
       */
      argument(name, description, fn3, defaultValue) {
        const argument = this.createArgument(name, description);
        if (typeof fn3 === "function") {
          argument.default(defaultValue).argParser(fn3);
        } else {
          argument.default(fn3);
        }
        this.addArgument(argument);
        return this;
      }
      /**
       * Define argument syntax for command, adding multiple at once (without descriptions).
       *
       * See also .argument().
       *
       * @example
       * program.arguments('<cmd> [env]');
       *
       * @param {string} names
       * @return {Command} `this` command for chaining
       */
      arguments(names) {
        names.trim().split(/ +/).forEach((detail) => {
          this.argument(detail);
        });
        return this;
      }
      /**
       * Define argument syntax for command, adding a prepared argument.
       *
       * @param {Argument} argument
       * @return {Command} `this` command for chaining
       */
      addArgument(argument) {
        const previousArgument = this.registeredArguments.slice(-1)[0];
        if (previousArgument && previousArgument.variadic) {
          throw new Error(
            `only the last argument can be variadic '${previousArgument.name()}'`
          );
        }
        if (argument.required && argument.defaultValue !== void 0 && argument.parseArg === void 0) {
          throw new Error(
            `a default value for a required argument is never used: '${argument.name()}'`
          );
        }
        this.registeredArguments.push(argument);
        return this;
      }
      /**
       * Customise or override default help command. By default a help command is automatically added if your command has subcommands.
       *
       * @example
       *    program.helpCommand('help [cmd]');
       *    program.helpCommand('help [cmd]', 'show help');
       *    program.helpCommand(false); // suppress default help command
       *    program.helpCommand(true); // add help command even if no subcommands
       *
       * @param {string|boolean} enableOrNameAndArgs - enable with custom name and/or arguments, or boolean to override whether added
       * @param {string} [description] - custom description
       * @return {Command} `this` command for chaining
       */
      helpCommand(enableOrNameAndArgs, description) {
        if (typeof enableOrNameAndArgs === "boolean") {
          this._addImplicitHelpCommand = enableOrNameAndArgs;
          return this;
        }
        enableOrNameAndArgs = enableOrNameAndArgs ?? "help [command]";
        const [, helpName, helpArgs] = enableOrNameAndArgs.match(/([^ ]+) *(.*)/);
        const helpDescription = description ?? "display help for command";
        const helpCommand = this.createCommand(helpName);
        helpCommand.helpOption(false);
        if (helpArgs) helpCommand.arguments(helpArgs);
        if (helpDescription) helpCommand.description(helpDescription);
        this._addImplicitHelpCommand = true;
        this._helpCommand = helpCommand;
        return this;
      }
      /**
       * Add prepared custom help command.
       *
       * @param {(Command|string|boolean)} helpCommand - custom help command, or deprecated enableOrNameAndArgs as for `.helpCommand()`
       * @param {string} [deprecatedDescription] - deprecated custom description used with custom name only
       * @return {Command} `this` command for chaining
       */
      addHelpCommand(helpCommand, deprecatedDescription) {
        if (typeof helpCommand !== "object") {
          this.helpCommand(helpCommand, deprecatedDescription);
          return this;
        }
        this._addImplicitHelpCommand = true;
        this._helpCommand = helpCommand;
        return this;
      }
      /**
       * Lazy create help command.
       *
       * @return {(Command|null)}
       * @package
       */
      _getHelpCommand() {
        const hasImplicitHelpCommand = this._addImplicitHelpCommand ?? (this.commands.length && !this._actionHandler && !this._findCommand("help"));
        if (hasImplicitHelpCommand) {
          if (this._helpCommand === void 0) {
            this.helpCommand(void 0, void 0);
          }
          return this._helpCommand;
        }
        return null;
      }
      /**
       * Add hook for life cycle event.
       *
       * @param {string} event
       * @param {Function} listener
       * @return {Command} `this` command for chaining
       */
      hook(event, listener) {
        const allowedValues = ["preSubcommand", "preAction", "postAction"];
        if (!allowedValues.includes(event)) {
          throw new Error(`Unexpected value for event passed to hook : '${event}'.
Expecting one of '${allowedValues.join("', '")}'`);
        }
        if (this._lifeCycleHooks[event]) {
          this._lifeCycleHooks[event].push(listener);
        } else {
          this._lifeCycleHooks[event] = [listener];
        }
        return this;
      }
      /**
       * Register callback to use as replacement for calling process.exit.
       *
       * @param {Function} [fn] optional callback which will be passed a CommanderError, defaults to throwing
       * @return {Command} `this` command for chaining
       */
      exitOverride(fn3) {
        if (fn3) {
          this._exitCallback = fn3;
        } else {
          this._exitCallback = (err) => {
            if (err.code !== "commander.executeSubCommandAsync") {
              throw err;
            } else {
            }
          };
        }
        return this;
      }
      /**
       * Call process.exit, and _exitCallback if defined.
       *
       * @param {number} exitCode exit code for using with process.exit
       * @param {string} code an id string representing the error
       * @param {string} message human-readable description of the error
       * @return never
       * @private
       */
      _exit(exitCode, code, message) {
        if (this._exitCallback) {
          this._exitCallback(new CommanderError2(exitCode, code, message));
        }
        process3.exit(exitCode);
      }
      /**
       * Register callback `fn` for the command.
       *
       * @example
       * program
       *   .command('serve')
       *   .description('start service')
       *   .action(function() {
       *      // do work here
       *   });
       *
       * @param {Function} fn
       * @return {Command} `this` command for chaining
       */
      action(fn3) {
        const listener = (args) => {
          const expectedArgsCount = this.registeredArguments.length;
          const actionArgs = args.slice(0, expectedArgsCount);
          if (this._storeOptionsAsProperties) {
            actionArgs[expectedArgsCount] = this;
          } else {
            actionArgs[expectedArgsCount] = this.opts();
          }
          actionArgs.push(this);
          return fn3.apply(this, actionArgs);
        };
        this._actionHandler = listener;
        return this;
      }
      /**
       * Factory routine to create a new unattached option.
       *
       * See .option() for creating an attached option, which uses this routine to
       * create the option. You can override createOption to return a custom option.
       *
       * @param {string} flags
       * @param {string} [description]
       * @return {Option} new option
       */
      createOption(flags, description) {
        return new Option2(flags, description);
      }
      /**
       * Wrap parseArgs to catch 'commander.invalidArgument'.
       *
       * @param {(Option | Argument)} target
       * @param {string} value
       * @param {*} previous
       * @param {string} invalidArgumentMessage
       * @private
       */
      _callParseArg(target, value, previous, invalidArgumentMessage) {
        try {
          return target.parseArg(value, previous);
        } catch (err) {
          if (err.code === "commander.invalidArgument") {
            const message = `${invalidArgumentMessage} ${err.message}`;
            this.error(message, { exitCode: err.exitCode, code: err.code });
          }
          throw err;
        }
      }
      /**
       * Check for option flag conflicts.
       * Register option if no conflicts found, or throw on conflict.
       *
       * @param {Option} option
       * @private
       */
      _registerOption(option) {
        const matchingOption = option.short && this._findOption(option.short) || option.long && this._findOption(option.long);
        if (matchingOption) {
          const matchingFlag = option.long && this._findOption(option.long) ? option.long : option.short;
          throw new Error(`Cannot add option '${option.flags}'${this._name && ` to command '${this._name}'`} due to conflicting flag '${matchingFlag}'
-  already used by option '${matchingOption.flags}'`);
        }
        this.options.push(option);
      }
      /**
       * Check for command name and alias conflicts with existing commands.
       * Register command if no conflicts found, or throw on conflict.
       *
       * @param {Command} command
       * @private
       */
      _registerCommand(command) {
        const knownBy = (cmd) => {
          return [cmd.name()].concat(cmd.aliases());
        };
        const alreadyUsed = knownBy(command).find(
          (name) => this._findCommand(name)
        );
        if (alreadyUsed) {
          const existingCmd = knownBy(this._findCommand(alreadyUsed)).join("|");
          const newCmd = knownBy(command).join("|");
          throw new Error(
            `cannot add command '${newCmd}' as already have command '${existingCmd}'`
          );
        }
        this.commands.push(command);
      }
      /**
       * Add an option.
       *
       * @param {Option} option
       * @return {Command} `this` command for chaining
       */
      addOption(option) {
        this._registerOption(option);
        const oname = option.name();
        const name = option.attributeName();
        if (option.negate) {
          const positiveLongFlag = option.long.replace(/^--no-/, "--");
          if (!this._findOption(positiveLongFlag)) {
            this.setOptionValueWithSource(
              name,
              option.defaultValue === void 0 ? true : option.defaultValue,
              "default"
            );
          }
        } else if (option.defaultValue !== void 0) {
          this.setOptionValueWithSource(name, option.defaultValue, "default");
        }
        const handleOptionValue = (val, invalidValueMessage, valueSource) => {
          if (val == null && option.presetArg !== void 0) {
            val = option.presetArg;
          }
          const oldValue = this.getOptionValue(name);
          if (val !== null && option.parseArg) {
            val = this._callParseArg(option, val, oldValue, invalidValueMessage);
          } else if (val !== null && option.variadic) {
            val = option._concatValue(val, oldValue);
          }
          if (val == null) {
            if (option.negate) {
              val = false;
            } else if (option.isBoolean() || option.optional) {
              val = true;
            } else {
              val = "";
            }
          }
          this.setOptionValueWithSource(name, val, valueSource);
        };
        this.on("option:" + oname, (val) => {
          const invalidValueMessage = `error: option '${option.flags}' argument '${val}' is invalid.`;
          handleOptionValue(val, invalidValueMessage, "cli");
        });
        if (option.envVar) {
          this.on("optionEnv:" + oname, (val) => {
            const invalidValueMessage = `error: option '${option.flags}' value '${val}' from env '${option.envVar}' is invalid.`;
            handleOptionValue(val, invalidValueMessage, "env");
          });
        }
        return this;
      }
      /**
       * Internal implementation shared by .option() and .requiredOption()
       *
       * @return {Command} `this` command for chaining
       * @private
       */
      _optionEx(config, flags, description, fn3, defaultValue) {
        if (typeof flags === "object" && flags instanceof Option2) {
          throw new Error(
            "To add an Option object use addOption() instead of option() or requiredOption()"
          );
        }
        const option = this.createOption(flags, description);
        option.makeOptionMandatory(!!config.mandatory);
        if (typeof fn3 === "function") {
          option.default(defaultValue).argParser(fn3);
        } else if (fn3 instanceof RegExp) {
          const regex = fn3;
          fn3 = (val, def) => {
            const m2 = regex.exec(val);
            return m2 ? m2[0] : def;
          };
          option.default(defaultValue).argParser(fn3);
        } else {
          option.default(fn3);
        }
        return this.addOption(option);
      }
      /**
       * Define option with `flags`, `description`, and optional argument parsing function or `defaultValue` or both.
       *
       * The `flags` string contains the short and/or long flags, separated by comma, a pipe or space. A required
       * option-argument is indicated by `<>` and an optional option-argument by `[]`.
       *
       * See the README for more details, and see also addOption() and requiredOption().
       *
       * @example
       * program
       *     .option('-p, --pepper', 'add pepper')
       *     .option('-p, --pizza-type <TYPE>', 'type of pizza') // required option-argument
       *     .option('-c, --cheese [CHEESE]', 'add extra cheese', 'mozzarella') // optional option-argument with default
       *     .option('-t, --tip <VALUE>', 'add tip to purchase cost', parseFloat) // custom parse function
       *
       * @param {string} flags
       * @param {string} [description]
       * @param {(Function|*)} [parseArg] - custom option processing function or default value
       * @param {*} [defaultValue]
       * @return {Command} `this` command for chaining
       */
      option(flags, description, parseArg, defaultValue) {
        return this._optionEx({}, flags, description, parseArg, defaultValue);
      }
      /**
       * Add a required option which must have a value after parsing. This usually means
       * the option must be specified on the command line. (Otherwise the same as .option().)
       *
       * The `flags` string contains the short and/or long flags, separated by comma, a pipe or space.
       *
       * @param {string} flags
       * @param {string} [description]
       * @param {(Function|*)} [parseArg] - custom option processing function or default value
       * @param {*} [defaultValue]
       * @return {Command} `this` command for chaining
       */
      requiredOption(flags, description, parseArg, defaultValue) {
        return this._optionEx(
          { mandatory: true },
          flags,
          description,
          parseArg,
          defaultValue
        );
      }
      /**
       * Alter parsing of short flags with optional values.
       *
       * @example
       * // for `.option('-f,--flag [value]'):
       * program.combineFlagAndOptionalValue(true);  // `-f80` is treated like `--flag=80`, this is the default behaviour
       * program.combineFlagAndOptionalValue(false) // `-fb` is treated like `-f -b`
       *
       * @param {boolean} [combine] - if `true` or omitted, an optional value can be specified directly after the flag.
       * @return {Command} `this` command for chaining
       */
      combineFlagAndOptionalValue(combine = true) {
        this._combineFlagAndOptionalValue = !!combine;
        return this;
      }
      /**
       * Allow unknown options on the command line.
       *
       * @param {boolean} [allowUnknown] - if `true` or omitted, no error will be thrown for unknown options.
       * @return {Command} `this` command for chaining
       */
      allowUnknownOption(allowUnknown = true) {
        this._allowUnknownOption = !!allowUnknown;
        return this;
      }
      /**
       * Allow excess command-arguments on the command line. Pass false to make excess arguments an error.
       *
       * @param {boolean} [allowExcess] - if `true` or omitted, no error will be thrown for excess arguments.
       * @return {Command} `this` command for chaining
       */
      allowExcessArguments(allowExcess = true) {
        this._allowExcessArguments = !!allowExcess;
        return this;
      }
      /**
       * Enable positional options. Positional means global options are specified before subcommands which lets
       * subcommands reuse the same option names, and also enables subcommands to turn on passThroughOptions.
       * The default behaviour is non-positional and global options may appear anywhere on the command line.
       *
       * @param {boolean} [positional]
       * @return {Command} `this` command for chaining
       */
      enablePositionalOptions(positional = true) {
        this._enablePositionalOptions = !!positional;
        return this;
      }
      /**
       * Pass through options that come after command-arguments rather than treat them as command-options,
       * so actual command-options come before command-arguments. Turning this on for a subcommand requires
       * positional options to have been enabled on the program (parent commands).
       * The default behaviour is non-positional and options may appear before or after command-arguments.
       *
       * @param {boolean} [passThrough] for unknown options.
       * @return {Command} `this` command for chaining
       */
      passThroughOptions(passThrough = true) {
        this._passThroughOptions = !!passThrough;
        this._checkForBrokenPassThrough();
        return this;
      }
      /**
       * @private
       */
      _checkForBrokenPassThrough() {
        if (this.parent && this._passThroughOptions && !this.parent._enablePositionalOptions) {
          throw new Error(
            `passThroughOptions cannot be used for '${this._name}' without turning on enablePositionalOptions for parent command(s)`
          );
        }
      }
      /**
       * Whether to store option values as properties on command object,
       * or store separately (specify false). In both cases the option values can be accessed using .opts().
       *
       * @param {boolean} [storeAsProperties=true]
       * @return {Command} `this` command for chaining
       */
      storeOptionsAsProperties(storeAsProperties = true) {
        if (this.options.length) {
          throw new Error("call .storeOptionsAsProperties() before adding options");
        }
        if (Object.keys(this._optionValues).length) {
          throw new Error(
            "call .storeOptionsAsProperties() before setting option values"
          );
        }
        this._storeOptionsAsProperties = !!storeAsProperties;
        return this;
      }
      /**
       * Retrieve option value.
       *
       * @param {string} key
       * @return {object} value
       */
      getOptionValue(key) {
        if (this._storeOptionsAsProperties) {
          return this[key];
        }
        return this._optionValues[key];
      }
      /**
       * Store option value.
       *
       * @param {string} key
       * @param {object} value
       * @return {Command} `this` command for chaining
       */
      setOptionValue(key, value) {
        return this.setOptionValueWithSource(key, value, void 0);
      }
      /**
       * Store option value and where the value came from.
       *
       * @param {string} key
       * @param {object} value
       * @param {string} source - expected values are default/config/env/cli/implied
       * @return {Command} `this` command for chaining
       */
      setOptionValueWithSource(key, value, source) {
        if (this._storeOptionsAsProperties) {
          this[key] = value;
        } else {
          this._optionValues[key] = value;
        }
        this._optionValueSources[key] = source;
        return this;
      }
      /**
       * Get source of option value.
       * Expected values are default | config | env | cli | implied
       *
       * @param {string} key
       * @return {string}
       */
      getOptionValueSource(key) {
        return this._optionValueSources[key];
      }
      /**
       * Get source of option value. See also .optsWithGlobals().
       * Expected values are default | config | env | cli | implied
       *
       * @param {string} key
       * @return {string}
       */
      getOptionValueSourceWithGlobals(key) {
        let source;
        this._getCommandAndAncestors().forEach((cmd) => {
          if (cmd.getOptionValueSource(key) !== void 0) {
            source = cmd.getOptionValueSource(key);
          }
        });
        return source;
      }
      /**
       * Get user arguments from implied or explicit arguments.
       * Side-effects: set _scriptPath if args included script. Used for default program name, and subcommand searches.
       *
       * @private
       */
      _prepareUserArgs(argv, parseOptions) {
        if (argv !== void 0 && !Array.isArray(argv)) {
          throw new Error("first parameter to parse must be array or undefined");
        }
        parseOptions = parseOptions || {};
        if (argv === void 0 && parseOptions.from === void 0) {
          if (process3.versions?.electron) {
            parseOptions.from = "electron";
          }
          const execArgv = process3.execArgv ?? [];
          if (execArgv.includes("-e") || execArgv.includes("--eval") || execArgv.includes("-p") || execArgv.includes("--print")) {
            parseOptions.from = "eval";
          }
        }
        if (argv === void 0) {
          argv = process3.argv;
        }
        this.rawArgs = argv.slice();
        let userArgs;
        switch (parseOptions.from) {
          case void 0:
          case "node":
            this._scriptPath = argv[1];
            userArgs = argv.slice(2);
            break;
          case "electron":
            if (process3.defaultApp) {
              this._scriptPath = argv[1];
              userArgs = argv.slice(2);
            } else {
              userArgs = argv.slice(1);
            }
            break;
          case "user":
            userArgs = argv.slice(0);
            break;
          case "eval":
            userArgs = argv.slice(1);
            break;
          default:
            throw new Error(
              `unexpected parse option { from: '${parseOptions.from}' }`
            );
        }
        if (!this._name && this._scriptPath)
          this.nameFromFilename(this._scriptPath);
        this._name = this._name || "program";
        return userArgs;
      }
      /**
       * Parse `argv`, setting options and invoking commands when defined.
       *
       * Use parseAsync instead of parse if any of your action handlers are async.
       *
       * Call with no parameters to parse `process.argv`. Detects Electron and special node options like `node --eval`. Easy mode!
       *
       * Or call with an array of strings to parse, and optionally where the user arguments start by specifying where the arguments are `from`:
       * - `'node'`: default, `argv[0]` is the application and `argv[1]` is the script being run, with user arguments after that
       * - `'electron'`: `argv[0]` is the application and `argv[1]` varies depending on whether the electron application is packaged
       * - `'user'`: just user arguments
       *
       * @example
       * program.parse(); // parse process.argv and auto-detect electron and special node flags
       * program.parse(process.argv); // assume argv[0] is app and argv[1] is script
       * program.parse(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
       *
       * @param {string[]} [argv] - optional, defaults to process.argv
       * @param {object} [parseOptions] - optionally specify style of options with from: node/user/electron
       * @param {string} [parseOptions.from] - where the args are from: 'node', 'user', 'electron'
       * @return {Command} `this` command for chaining
       */
      parse(argv, parseOptions) {
        const userArgs = this._prepareUserArgs(argv, parseOptions);
        this._parseCommand([], userArgs);
        return this;
      }
      /**
       * Parse `argv`, setting options and invoking commands when defined.
       *
       * Call with no parameters to parse `process.argv`. Detects Electron and special node options like `node --eval`. Easy mode!
       *
       * Or call with an array of strings to parse, and optionally where the user arguments start by specifying where the arguments are `from`:
       * - `'node'`: default, `argv[0]` is the application and `argv[1]` is the script being run, with user arguments after that
       * - `'electron'`: `argv[0]` is the application and `argv[1]` varies depending on whether the electron application is packaged
       * - `'user'`: just user arguments
       *
       * @example
       * await program.parseAsync(); // parse process.argv and auto-detect electron and special node flags
       * await program.parseAsync(process.argv); // assume argv[0] is app and argv[1] is script
       * await program.parseAsync(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
       *
       * @param {string[]} [argv]
       * @param {object} [parseOptions]
       * @param {string} parseOptions.from - where the args are from: 'node', 'user', 'electron'
       * @return {Promise}
       */
      async parseAsync(argv, parseOptions) {
        const userArgs = this._prepareUserArgs(argv, parseOptions);
        await this._parseCommand([], userArgs);
        return this;
      }
      /**
       * Execute a sub-command executable.
       *
       * @private
       */
      _executeSubCommand(subcommand, args) {
        args = args.slice();
        let launchWithNode = false;
        const sourceExt = [".js", ".ts", ".tsx", ".mjs", ".cjs"];
        function findFile(baseDir, baseName) {
          const localBin = path8.resolve(baseDir, baseName);
          if (fs7.existsSync(localBin)) return localBin;
          if (sourceExt.includes(path8.extname(baseName))) return void 0;
          const foundExt = sourceExt.find(
            (ext) => fs7.existsSync(`${localBin}${ext}`)
          );
          if (foundExt) return `${localBin}${foundExt}`;
          return void 0;
        }
        this._checkForMissingMandatoryOptions();
        this._checkForConflictingOptions();
        let executableFile = subcommand._executableFile || `${this._name}-${subcommand._name}`;
        let executableDir = this._executableDir || "";
        if (this._scriptPath) {
          let resolvedScriptPath;
          try {
            resolvedScriptPath = fs7.realpathSync(this._scriptPath);
          } catch (err) {
            resolvedScriptPath = this._scriptPath;
          }
          executableDir = path8.resolve(
            path8.dirname(resolvedScriptPath),
            executableDir
          );
        }
        if (executableDir) {
          let localFile = findFile(executableDir, executableFile);
          if (!localFile && !subcommand._executableFile && this._scriptPath) {
            const legacyName = path8.basename(
              this._scriptPath,
              path8.extname(this._scriptPath)
            );
            if (legacyName !== this._name) {
              localFile = findFile(
                executableDir,
                `${legacyName}-${subcommand._name}`
              );
            }
          }
          executableFile = localFile || executableFile;
        }
        launchWithNode = sourceExt.includes(path8.extname(executableFile));
        let proc;
        if (process3.platform !== "win32") {
          if (launchWithNode) {
            args.unshift(executableFile);
            args = incrementNodeInspectorPort(process3.execArgv).concat(args);
            proc = childProcess.spawn(process3.argv[0], args, { stdio: "inherit" });
          } else {
            proc = childProcess.spawn(executableFile, args, { stdio: "inherit" });
          }
        } else {
          args.unshift(executableFile);
          args = incrementNodeInspectorPort(process3.execArgv).concat(args);
          proc = childProcess.spawn(process3.execPath, args, { stdio: "inherit" });
        }
        if (!proc.killed) {
          const signals = ["SIGUSR1", "SIGUSR2", "SIGTERM", "SIGINT", "SIGHUP"];
          signals.forEach((signal) => {
            process3.on(signal, () => {
              if (proc.killed === false && proc.exitCode === null) {
                proc.kill(signal);
              }
            });
          });
        }
        const exitCallback = this._exitCallback;
        proc.on("close", (code) => {
          code = code ?? 1;
          if (!exitCallback) {
            process3.exit(code);
          } else {
            exitCallback(
              new CommanderError2(
                code,
                "commander.executeSubCommandAsync",
                "(close)"
              )
            );
          }
        });
        proc.on("error", (err) => {
          if (err.code === "ENOENT") {
            const executableDirMessage = executableDir ? `searched for local subcommand relative to directory '${executableDir}'` : "no directory for search for local subcommand, use .executableDir() to supply a custom directory";
            const executableMissing = `'${executableFile}' does not exist
 - if '${subcommand._name}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead
 - if the default executable name is not suitable, use the executableFile option to supply a custom name or path
 - ${executableDirMessage}`;
            throw new Error(executableMissing);
          } else if (err.code === "EACCES") {
            throw new Error(`'${executableFile}' not executable`);
          }
          if (!exitCallback) {
            process3.exit(1);
          } else {
            const wrappedError = new CommanderError2(
              1,
              "commander.executeSubCommandAsync",
              "(error)"
            );
            wrappedError.nestedError = err;
            exitCallback(wrappedError);
          }
        });
        this.runningCommand = proc;
      }
      /**
       * @private
       */
      _dispatchSubcommand(commandName, operands, unknown) {
        const subCommand = this._findCommand(commandName);
        if (!subCommand) this.help({ error: true });
        let promiseChain;
        promiseChain = this._chainOrCallSubCommandHook(
          promiseChain,
          subCommand,
          "preSubcommand"
        );
        promiseChain = this._chainOrCall(promiseChain, () => {
          if (subCommand._executableHandler) {
            this._executeSubCommand(subCommand, operands.concat(unknown));
          } else {
            return subCommand._parseCommand(operands, unknown);
          }
        });
        return promiseChain;
      }
      /**
       * Invoke help directly if possible, or dispatch if necessary.
       * e.g. help foo
       *
       * @private
       */
      _dispatchHelpCommand(subcommandName) {
        if (!subcommandName) {
          this.help();
        }
        const subCommand = this._findCommand(subcommandName);
        if (subCommand && !subCommand._executableHandler) {
          subCommand.help();
        }
        return this._dispatchSubcommand(
          subcommandName,
          [],
          [this._getHelpOption()?.long ?? this._getHelpOption()?.short ?? "--help"]
        );
      }
      /**
       * Check this.args against expected this.registeredArguments.
       *
       * @private
       */
      _checkNumberOfArguments() {
        this.registeredArguments.forEach((arg, i) => {
          if (arg.required && this.args[i] == null) {
            this.missingArgument(arg.name());
          }
        });
        if (this.registeredArguments.length > 0 && this.registeredArguments[this.registeredArguments.length - 1].variadic) {
          return;
        }
        if (this.args.length > this.registeredArguments.length) {
          this._excessArguments(this.args);
        }
      }
      /**
       * Process this.args using this.registeredArguments and save as this.processedArgs!
       *
       * @private
       */
      _processArguments() {
        const myParseArg = (argument, value, previous) => {
          let parsedValue = value;
          if (value !== null && argument.parseArg) {
            const invalidValueMessage = `error: command-argument value '${value}' is invalid for argument '${argument.name()}'.`;
            parsedValue = this._callParseArg(
              argument,
              value,
              previous,
              invalidValueMessage
            );
          }
          return parsedValue;
        };
        this._checkNumberOfArguments();
        const processedArgs = [];
        this.registeredArguments.forEach((declaredArg, index) => {
          let value = declaredArg.defaultValue;
          if (declaredArg.variadic) {
            if (index < this.args.length) {
              value = this.args.slice(index);
              if (declaredArg.parseArg) {
                value = value.reduce((processed, v) => {
                  return myParseArg(declaredArg, v, processed);
                }, declaredArg.defaultValue);
              }
            } else if (value === void 0) {
              value = [];
            }
          } else if (index < this.args.length) {
            value = this.args[index];
            if (declaredArg.parseArg) {
              value = myParseArg(declaredArg, value, declaredArg.defaultValue);
            }
          }
          processedArgs[index] = value;
        });
        this.processedArgs = processedArgs;
      }
      /**
       * Once we have a promise we chain, but call synchronously until then.
       *
       * @param {(Promise|undefined)} promise
       * @param {Function} fn
       * @return {(Promise|undefined)}
       * @private
       */
      _chainOrCall(promise, fn3) {
        if (promise && promise.then && typeof promise.then === "function") {
          return promise.then(() => fn3());
        }
        return fn3();
      }
      /**
       *
       * @param {(Promise|undefined)} promise
       * @param {string} event
       * @return {(Promise|undefined)}
       * @private
       */
      _chainOrCallHooks(promise, event) {
        let result = promise;
        const hooks = [];
        this._getCommandAndAncestors().reverse().filter((cmd) => cmd._lifeCycleHooks[event] !== void 0).forEach((hookedCommand) => {
          hookedCommand._lifeCycleHooks[event].forEach((callback) => {
            hooks.push({ hookedCommand, callback });
          });
        });
        if (event === "postAction") {
          hooks.reverse();
        }
        hooks.forEach((hookDetail) => {
          result = this._chainOrCall(result, () => {
            return hookDetail.callback(hookDetail.hookedCommand, this);
          });
        });
        return result;
      }
      /**
       *
       * @param {(Promise|undefined)} promise
       * @param {Command} subCommand
       * @param {string} event
       * @return {(Promise|undefined)}
       * @private
       */
      _chainOrCallSubCommandHook(promise, subCommand, event) {
        let result = promise;
        if (this._lifeCycleHooks[event] !== void 0) {
          this._lifeCycleHooks[event].forEach((hook) => {
            result = this._chainOrCall(result, () => {
              return hook(this, subCommand);
            });
          });
        }
        return result;
      }
      /**
       * Process arguments in context of this command.
       * Returns action result, in case it is a promise.
       *
       * @private
       */
      _parseCommand(operands, unknown) {
        const parsed = this.parseOptions(unknown);
        this._parseOptionsEnv();
        this._parseOptionsImplied();
        operands = operands.concat(parsed.operands);
        unknown = parsed.unknown;
        this.args = operands.concat(unknown);
        if (operands && this._findCommand(operands[0])) {
          return this._dispatchSubcommand(operands[0], operands.slice(1), unknown);
        }
        if (this._getHelpCommand() && operands[0] === this._getHelpCommand().name()) {
          return this._dispatchHelpCommand(operands[1]);
        }
        if (this._defaultCommandName) {
          this._outputHelpIfRequested(unknown);
          return this._dispatchSubcommand(
            this._defaultCommandName,
            operands,
            unknown
          );
        }
        if (this.commands.length && this.args.length === 0 && !this._actionHandler && !this._defaultCommandName) {
          this.help({ error: true });
        }
        this._outputHelpIfRequested(parsed.unknown);
        this._checkForMissingMandatoryOptions();
        this._checkForConflictingOptions();
        const checkForUnknownOptions = () => {
          if (parsed.unknown.length > 0) {
            this.unknownOption(parsed.unknown[0]);
          }
        };
        const commandEvent = `command:${this.name()}`;
        if (this._actionHandler) {
          checkForUnknownOptions();
          this._processArguments();
          let promiseChain;
          promiseChain = this._chainOrCallHooks(promiseChain, "preAction");
          promiseChain = this._chainOrCall(
            promiseChain,
            () => this._actionHandler(this.processedArgs)
          );
          if (this.parent) {
            promiseChain = this._chainOrCall(promiseChain, () => {
              this.parent.emit(commandEvent, operands, unknown);
            });
          }
          promiseChain = this._chainOrCallHooks(promiseChain, "postAction");
          return promiseChain;
        }
        if (this.parent && this.parent.listenerCount(commandEvent)) {
          checkForUnknownOptions();
          this._processArguments();
          this.parent.emit(commandEvent, operands, unknown);
        } else if (operands.length) {
          if (this._findCommand("*")) {
            return this._dispatchSubcommand("*", operands, unknown);
          }
          if (this.listenerCount("command:*")) {
            this.emit("command:*", operands, unknown);
          } else if (this.commands.length) {
            this.unknownCommand();
          } else {
            checkForUnknownOptions();
            this._processArguments();
          }
        } else if (this.commands.length) {
          checkForUnknownOptions();
          this.help({ error: true });
        } else {
          checkForUnknownOptions();
          this._processArguments();
        }
      }
      /**
       * Find matching command.
       *
       * @private
       * @return {Command | undefined}
       */
      _findCommand(name) {
        if (!name) return void 0;
        return this.commands.find(
          (cmd) => cmd._name === name || cmd._aliases.includes(name)
        );
      }
      /**
       * Return an option matching `arg` if any.
       *
       * @param {string} arg
       * @return {Option}
       * @package
       */
      _findOption(arg) {
        return this.options.find((option) => option.is(arg));
      }
      /**
       * Display an error message if a mandatory option does not have a value.
       * Called after checking for help flags in leaf subcommand.
       *
       * @private
       */
      _checkForMissingMandatoryOptions() {
        this._getCommandAndAncestors().forEach((cmd) => {
          cmd.options.forEach((anOption) => {
            if (anOption.mandatory && cmd.getOptionValue(anOption.attributeName()) === void 0) {
              cmd.missingMandatoryOptionValue(anOption);
            }
          });
        });
      }
      /**
       * Display an error message if conflicting options are used together in this.
       *
       * @private
       */
      _checkForConflictingLocalOptions() {
        const definedNonDefaultOptions = this.options.filter((option) => {
          const optionKey = option.attributeName();
          if (this.getOptionValue(optionKey) === void 0) {
            return false;
          }
          return this.getOptionValueSource(optionKey) !== "default";
        });
        const optionsWithConflicting = definedNonDefaultOptions.filter(
          (option) => option.conflictsWith.length > 0
        );
        optionsWithConflicting.forEach((option) => {
          const conflictingAndDefined = definedNonDefaultOptions.find(
            (defined) => option.conflictsWith.includes(defined.attributeName())
          );
          if (conflictingAndDefined) {
            this._conflictingOption(option, conflictingAndDefined);
          }
        });
      }
      /**
       * Display an error message if conflicting options are used together.
       * Called after checking for help flags in leaf subcommand.
       *
       * @private
       */
      _checkForConflictingOptions() {
        this._getCommandAndAncestors().forEach((cmd) => {
          cmd._checkForConflictingLocalOptions();
        });
      }
      /**
       * Parse options from `argv` removing known options,
       * and return argv split into operands and unknown arguments.
       *
       * Examples:
       *
       *     argv => operands, unknown
       *     --known kkk op => [op], []
       *     op --known kkk => [op], []
       *     sub --unknown uuu op => [sub], [--unknown uuu op]
       *     sub -- --unknown uuu op => [sub --unknown uuu op], []
       *
       * @param {string[]} argv
       * @return {{operands: string[], unknown: string[]}}
       */
      parseOptions(argv) {
        const operands = [];
        const unknown = [];
        let dest = operands;
        const args = argv.slice();
        function maybeOption(arg) {
          return arg.length > 1 && arg[0] === "-";
        }
        let activeVariadicOption = null;
        while (args.length) {
          const arg = args.shift();
          if (arg === "--") {
            if (dest === unknown) dest.push(arg);
            dest.push(...args);
            break;
          }
          if (activeVariadicOption && !maybeOption(arg)) {
            this.emit(`option:${activeVariadicOption.name()}`, arg);
            continue;
          }
          activeVariadicOption = null;
          if (maybeOption(arg)) {
            const option = this._findOption(arg);
            if (option) {
              if (option.required) {
                const value = args.shift();
                if (value === void 0) this.optionMissingArgument(option);
                this.emit(`option:${option.name()}`, value);
              } else if (option.optional) {
                let value = null;
                if (args.length > 0 && !maybeOption(args[0])) {
                  value = args.shift();
                }
                this.emit(`option:${option.name()}`, value);
              } else {
                this.emit(`option:${option.name()}`);
              }
              activeVariadicOption = option.variadic ? option : null;
              continue;
            }
          }
          if (arg.length > 2 && arg[0] === "-" && arg[1] !== "-") {
            const option = this._findOption(`-${arg[1]}`);
            if (option) {
              if (option.required || option.optional && this._combineFlagAndOptionalValue) {
                this.emit(`option:${option.name()}`, arg.slice(2));
              } else {
                this.emit(`option:${option.name()}`);
                args.unshift(`-${arg.slice(2)}`);
              }
              continue;
            }
          }
          if (/^--[^=]+=/.test(arg)) {
            const index = arg.indexOf("=");
            const option = this._findOption(arg.slice(0, index));
            if (option && (option.required || option.optional)) {
              this.emit(`option:${option.name()}`, arg.slice(index + 1));
              continue;
            }
          }
          if (maybeOption(arg)) {
            dest = unknown;
          }
          if ((this._enablePositionalOptions || this._passThroughOptions) && operands.length === 0 && unknown.length === 0) {
            if (this._findCommand(arg)) {
              operands.push(arg);
              if (args.length > 0) unknown.push(...args);
              break;
            } else if (this._getHelpCommand() && arg === this._getHelpCommand().name()) {
              operands.push(arg);
              if (args.length > 0) operands.push(...args);
              break;
            } else if (this._defaultCommandName) {
              unknown.push(arg);
              if (args.length > 0) unknown.push(...args);
              break;
            }
          }
          if (this._passThroughOptions) {
            dest.push(arg);
            if (args.length > 0) dest.push(...args);
            break;
          }
          dest.push(arg);
        }
        return { operands, unknown };
      }
      /**
       * Return an object containing local option values as key-value pairs.
       *
       * @return {object}
       */
      opts() {
        if (this._storeOptionsAsProperties) {
          const result = {};
          const len = this.options.length;
          for (let i = 0; i < len; i++) {
            const key = this.options[i].attributeName();
            result[key] = key === this._versionOptionName ? this._version : this[key];
          }
          return result;
        }
        return this._optionValues;
      }
      /**
       * Return an object containing merged local and global option values as key-value pairs.
       *
       * @return {object}
       */
      optsWithGlobals() {
        return this._getCommandAndAncestors().reduce(
          (combinedOptions, cmd) => Object.assign(combinedOptions, cmd.opts()),
          {}
        );
      }
      /**
       * Display error message and exit (or call exitOverride).
       *
       * @param {string} message
       * @param {object} [errorOptions]
       * @param {string} [errorOptions.code] - an id string representing the error
       * @param {number} [errorOptions.exitCode] - used with process.exit
       */
      error(message, errorOptions) {
        this._outputConfiguration.outputError(
          `${message}
`,
          this._outputConfiguration.writeErr
        );
        if (typeof this._showHelpAfterError === "string") {
          this._outputConfiguration.writeErr(`${this._showHelpAfterError}
`);
        } else if (this._showHelpAfterError) {
          this._outputConfiguration.writeErr("\n");
          this.outputHelp({ error: true });
        }
        const config = errorOptions || {};
        const exitCode = config.exitCode || 1;
        const code = config.code || "commander.error";
        this._exit(exitCode, code, message);
      }
      /**
       * Apply any option related environment variables, if option does
       * not have a value from cli or client code.
       *
       * @private
       */
      _parseOptionsEnv() {
        this.options.forEach((option) => {
          if (option.envVar && option.envVar in process3.env) {
            const optionKey = option.attributeName();
            if (this.getOptionValue(optionKey) === void 0 || ["default", "config", "env"].includes(
              this.getOptionValueSource(optionKey)
            )) {
              if (option.required || option.optional) {
                this.emit(`optionEnv:${option.name()}`, process3.env[option.envVar]);
              } else {
                this.emit(`optionEnv:${option.name()}`);
              }
            }
          }
        });
      }
      /**
       * Apply any implied option values, if option is undefined or default value.
       *
       * @private
       */
      _parseOptionsImplied() {
        const dualHelper = new DualOptions(this.options);
        const hasCustomOptionValue = (optionKey) => {
          return this.getOptionValue(optionKey) !== void 0 && !["default", "implied"].includes(this.getOptionValueSource(optionKey));
        };
        this.options.filter(
          (option) => option.implied !== void 0 && hasCustomOptionValue(option.attributeName()) && dualHelper.valueFromOption(
            this.getOptionValue(option.attributeName()),
            option
          )
        ).forEach((option) => {
          Object.keys(option.implied).filter((impliedKey) => !hasCustomOptionValue(impliedKey)).forEach((impliedKey) => {
            this.setOptionValueWithSource(
              impliedKey,
              option.implied[impliedKey],
              "implied"
            );
          });
        });
      }
      /**
       * Argument `name` is missing.
       *
       * @param {string} name
       * @private
       */
      missingArgument(name) {
        const message = `error: missing required argument '${name}'`;
        this.error(message, { code: "commander.missingArgument" });
      }
      /**
       * `Option` is missing an argument.
       *
       * @param {Option} option
       * @private
       */
      optionMissingArgument(option) {
        const message = `error: option '${option.flags}' argument missing`;
        this.error(message, { code: "commander.optionMissingArgument" });
      }
      /**
       * `Option` does not have a value, and is a mandatory option.
       *
       * @param {Option} option
       * @private
       */
      missingMandatoryOptionValue(option) {
        const message = `error: required option '${option.flags}' not specified`;
        this.error(message, { code: "commander.missingMandatoryOptionValue" });
      }
      /**
       * `Option` conflicts with another option.
       *
       * @param {Option} option
       * @param {Option} conflictingOption
       * @private
       */
      _conflictingOption(option, conflictingOption) {
        const findBestOptionFromValue = (option2) => {
          const optionKey = option2.attributeName();
          const optionValue = this.getOptionValue(optionKey);
          const negativeOption = this.options.find(
            (target) => target.negate && optionKey === target.attributeName()
          );
          const positiveOption = this.options.find(
            (target) => !target.negate && optionKey === target.attributeName()
          );
          if (negativeOption && (negativeOption.presetArg === void 0 && optionValue === false || negativeOption.presetArg !== void 0 && optionValue === negativeOption.presetArg)) {
            return negativeOption;
          }
          return positiveOption || option2;
        };
        const getErrorMessage = (option2) => {
          const bestOption = findBestOptionFromValue(option2);
          const optionKey = bestOption.attributeName();
          const source = this.getOptionValueSource(optionKey);
          if (source === "env") {
            return `environment variable '${bestOption.envVar}'`;
          }
          return `option '${bestOption.flags}'`;
        };
        const message = `error: ${getErrorMessage(option)} cannot be used with ${getErrorMessage(conflictingOption)}`;
        this.error(message, { code: "commander.conflictingOption" });
      }
      /**
       * Unknown option `flag`.
       *
       * @param {string} flag
       * @private
       */
      unknownOption(flag) {
        if (this._allowUnknownOption) return;
        let suggestion = "";
        if (flag.startsWith("--") && this._showSuggestionAfterError) {
          let candidateFlags = [];
          let command = this;
          do {
            const moreFlags = command.createHelp().visibleOptions(command).filter((option) => option.long).map((option) => option.long);
            candidateFlags = candidateFlags.concat(moreFlags);
            command = command.parent;
          } while (command && !command._enablePositionalOptions);
          suggestion = suggestSimilar(flag, candidateFlags);
        }
        const message = `error: unknown option '${flag}'${suggestion}`;
        this.error(message, { code: "commander.unknownOption" });
      }
      /**
       * Excess arguments, more than expected.
       *
       * @param {string[]} receivedArgs
       * @private
       */
      _excessArguments(receivedArgs) {
        if (this._allowExcessArguments) return;
        const expected = this.registeredArguments.length;
        const s = expected === 1 ? "" : "s";
        const forSubcommand = this.parent ? ` for '${this.name()}'` : "";
        const message = `error: too many arguments${forSubcommand}. Expected ${expected} argument${s} but got ${receivedArgs.length}.`;
        this.error(message, { code: "commander.excessArguments" });
      }
      /**
       * Unknown command.
       *
       * @private
       */
      unknownCommand() {
        const unknownName = this.args[0];
        let suggestion = "";
        if (this._showSuggestionAfterError) {
          const candidateNames = [];
          this.createHelp().visibleCommands(this).forEach((command) => {
            candidateNames.push(command.name());
            if (command.alias()) candidateNames.push(command.alias());
          });
          suggestion = suggestSimilar(unknownName, candidateNames);
        }
        const message = `error: unknown command '${unknownName}'${suggestion}`;
        this.error(message, { code: "commander.unknownCommand" });
      }
      /**
       * Get or set the program version.
       *
       * This method auto-registers the "-V, --version" option which will print the version number.
       *
       * You can optionally supply the flags and description to override the defaults.
       *
       * @param {string} [str]
       * @param {string} [flags]
       * @param {string} [description]
       * @return {(this | string | undefined)} `this` command for chaining, or version string if no arguments
       */
      version(str, flags, description) {
        if (str === void 0) return this._version;
        this._version = str;
        flags = flags || "-V, --version";
        description = description || "output the version number";
        const versionOption = this.createOption(flags, description);
        this._versionOptionName = versionOption.attributeName();
        this._registerOption(versionOption);
        this.on("option:" + versionOption.name(), () => {
          this._outputConfiguration.writeOut(`${str}
`);
          this._exit(0, "commander.version", str);
        });
        return this;
      }
      /**
       * Set the description.
       *
       * @param {string} [str]
       * @param {object} [argsDescription]
       * @return {(string|Command)}
       */
      description(str, argsDescription) {
        if (str === void 0 && argsDescription === void 0)
          return this._description;
        this._description = str;
        if (argsDescription) {
          this._argsDescription = argsDescription;
        }
        return this;
      }
      /**
       * Set the summary. Used when listed as subcommand of parent.
       *
       * @param {string} [str]
       * @return {(string|Command)}
       */
      summary(str) {
        if (str === void 0) return this._summary;
        this._summary = str;
        return this;
      }
      /**
       * Set an alias for the command.
       *
       * You may call more than once to add multiple aliases. Only the first alias is shown in the auto-generated help.
       *
       * @param {string} [alias]
       * @return {(string|Command)}
       */
      alias(alias) {
        if (alias === void 0) return this._aliases[0];
        let command = this;
        if (this.commands.length !== 0 && this.commands[this.commands.length - 1]._executableHandler) {
          command = this.commands[this.commands.length - 1];
        }
        if (alias === command._name)
          throw new Error("Command alias can't be the same as its name");
        const matchingCommand = this.parent?._findCommand(alias);
        if (matchingCommand) {
          const existingCmd = [matchingCommand.name()].concat(matchingCommand.aliases()).join("|");
          throw new Error(
            `cannot add alias '${alias}' to command '${this.name()}' as already have command '${existingCmd}'`
          );
        }
        command._aliases.push(alias);
        return this;
      }
      /**
       * Set aliases for the command.
       *
       * Only the first alias is shown in the auto-generated help.
       *
       * @param {string[]} [aliases]
       * @return {(string[]|Command)}
       */
      aliases(aliases) {
        if (aliases === void 0) return this._aliases;
        aliases.forEach((alias) => this.alias(alias));
        return this;
      }
      /**
       * Set / get the command usage `str`.
       *
       * @param {string} [str]
       * @return {(string|Command)}
       */
      usage(str) {
        if (str === void 0) {
          if (this._usage) return this._usage;
          const args = this.registeredArguments.map((arg) => {
            return humanReadableArgName(arg);
          });
          return [].concat(
            this.options.length || this._helpOption !== null ? "[options]" : [],
            this.commands.length ? "[command]" : [],
            this.registeredArguments.length ? args : []
          ).join(" ");
        }
        this._usage = str;
        return this;
      }
      /**
       * Get or set the name of the command.
       *
       * @param {string} [str]
       * @return {(string|Command)}
       */
      name(str) {
        if (str === void 0) return this._name;
        this._name = str;
        return this;
      }
      /**
       * Set the name of the command from script filename, such as process.argv[1],
       * or require.main.filename, or __filename.
       *
       * (Used internally and public although not documented in README.)
       *
       * @example
       * program.nameFromFilename(require.main.filename);
       *
       * @param {string} filename
       * @return {Command}
       */
      nameFromFilename(filename) {
        this._name = path8.basename(filename, path8.extname(filename));
        return this;
      }
      /**
       * Get or set the directory for searching for executable subcommands of this command.
       *
       * @example
       * program.executableDir(__dirname);
       * // or
       * program.executableDir('subcommands');
       *
       * @param {string} [path]
       * @return {(string|null|Command)}
       */
      executableDir(path9) {
        if (path9 === void 0) return this._executableDir;
        this._executableDir = path9;
        return this;
      }
      /**
       * Return program help documentation.
       *
       * @param {{ error: boolean }} [contextOptions] - pass {error:true} to wrap for stderr instead of stdout
       * @return {string}
       */
      helpInformation(contextOptions) {
        const helper = this.createHelp();
        if (helper.helpWidth === void 0) {
          helper.helpWidth = contextOptions && contextOptions.error ? this._outputConfiguration.getErrHelpWidth() : this._outputConfiguration.getOutHelpWidth();
        }
        return helper.formatHelp(this, helper);
      }
      /**
       * @private
       */
      _getHelpContext(contextOptions) {
        contextOptions = contextOptions || {};
        const context = { error: !!contextOptions.error };
        let write;
        if (context.error) {
          write = (arg) => this._outputConfiguration.writeErr(arg);
        } else {
          write = (arg) => this._outputConfiguration.writeOut(arg);
        }
        context.write = contextOptions.write || write;
        context.command = this;
        return context;
      }
      /**
       * Output help information for this command.
       *
       * Outputs built-in help, and custom text added using `.addHelpText()`.
       *
       * @param {{ error: boolean } | Function} [contextOptions] - pass {error:true} to write to stderr instead of stdout
       */
      outputHelp(contextOptions) {
        let deprecatedCallback;
        if (typeof contextOptions === "function") {
          deprecatedCallback = contextOptions;
          contextOptions = void 0;
        }
        const context = this._getHelpContext(contextOptions);
        this._getCommandAndAncestors().reverse().forEach((command) => command.emit("beforeAllHelp", context));
        this.emit("beforeHelp", context);
        let helpInformation = this.helpInformation(context);
        if (deprecatedCallback) {
          helpInformation = deprecatedCallback(helpInformation);
          if (typeof helpInformation !== "string" && !Buffer.isBuffer(helpInformation)) {
            throw new Error("outputHelp callback must return a string or a Buffer");
          }
        }
        context.write(helpInformation);
        if (this._getHelpOption()?.long) {
          this.emit(this._getHelpOption().long);
        }
        this.emit("afterHelp", context);
        this._getCommandAndAncestors().forEach(
          (command) => command.emit("afterAllHelp", context)
        );
      }
      /**
       * You can pass in flags and a description to customise the built-in help option.
       * Pass in false to disable the built-in help option.
       *
       * @example
       * program.helpOption('-?, --help' 'show help'); // customise
       * program.helpOption(false); // disable
       *
       * @param {(string | boolean)} flags
       * @param {string} [description]
       * @return {Command} `this` command for chaining
       */
      helpOption(flags, description) {
        if (typeof flags === "boolean") {
          if (flags) {
            this._helpOption = this._helpOption ?? void 0;
          } else {
            this._helpOption = null;
          }
          return this;
        }
        flags = flags ?? "-h, --help";
        description = description ?? "display help for command";
        this._helpOption = this.createOption(flags, description);
        return this;
      }
      /**
       * Lazy create help option.
       * Returns null if has been disabled with .helpOption(false).
       *
       * @returns {(Option | null)} the help option
       * @package
       */
      _getHelpOption() {
        if (this._helpOption === void 0) {
          this.helpOption(void 0, void 0);
        }
        return this._helpOption;
      }
      /**
       * Supply your own option to use for the built-in help option.
       * This is an alternative to using helpOption() to customise the flags and description etc.
       *
       * @param {Option} option
       * @return {Command} `this` command for chaining
       */
      addHelpOption(option) {
        this._helpOption = option;
        return this;
      }
      /**
       * Output help information and exit.
       *
       * Outputs built-in help, and custom text added using `.addHelpText()`.
       *
       * @param {{ error: boolean }} [contextOptions] - pass {error:true} to write to stderr instead of stdout
       */
      help(contextOptions) {
        this.outputHelp(contextOptions);
        let exitCode = process3.exitCode || 0;
        if (exitCode === 0 && contextOptions && typeof contextOptions !== "function" && contextOptions.error) {
          exitCode = 1;
        }
        this._exit(exitCode, "commander.help", "(outputHelp)");
      }
      /**
       * Add additional text to be displayed with the built-in help.
       *
       * Position is 'before' or 'after' to affect just this command,
       * and 'beforeAll' or 'afterAll' to affect this command and all its subcommands.
       *
       * @param {string} position - before or after built-in help
       * @param {(string | Function)} text - string to add, or a function returning a string
       * @return {Command} `this` command for chaining
       */
      addHelpText(position, text) {
        const allowedValues = ["beforeAll", "before", "after", "afterAll"];
        if (!allowedValues.includes(position)) {
          throw new Error(`Unexpected value for position to addHelpText.
Expecting one of '${allowedValues.join("', '")}'`);
        }
        const helpEvent = `${position}Help`;
        this.on(helpEvent, (context) => {
          let helpStr;
          if (typeof text === "function") {
            helpStr = text({ error: context.error, command: context.command });
          } else {
            helpStr = text;
          }
          if (helpStr) {
            context.write(`${helpStr}
`);
          }
        });
        return this;
      }
      /**
       * Output help information if help flags specified
       *
       * @param {Array} args - array of options to search for help flags
       * @private
       */
      _outputHelpIfRequested(args) {
        const helpOption = this._getHelpOption();
        const helpRequested = helpOption && args.find((arg) => helpOption.is(arg));
        if (helpRequested) {
          this.outputHelp();
          this._exit(0, "commander.helpDisplayed", "(outputHelp)");
        }
      }
    };
    function incrementNodeInspectorPort(args) {
      return args.map((arg) => {
        if (!arg.startsWith("--inspect")) {
          return arg;
        }
        let debugOption;
        let debugHost = "127.0.0.1";
        let debugPort = "9229";
        let match;
        if ((match = arg.match(/^(--inspect(-brk)?)$/)) !== null) {
          debugOption = match[1];
        } else if ((match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+)$/)) !== null) {
          debugOption = match[1];
          if (/^\d+$/.test(match[3])) {
            debugPort = match[3];
          } else {
            debugHost = match[3];
          }
        } else if ((match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/)) !== null) {
          debugOption = match[1];
          debugHost = match[3];
          debugPort = match[4];
        }
        if (debugOption && debugPort !== "0") {
          return `${debugOption}=${debugHost}:${parseInt(debugPort) + 1}`;
        }
        return arg;
      });
    }
    exports2.Command = Command2;
  }
});

// node_modules/.pnpm/commander@12.1.0/node_modules/commander/index.js
var require_commander = __commonJS({
  "node_modules/.pnpm/commander@12.1.0/node_modules/commander/index.js"(exports2) {
    "use strict";
    var { Argument: Argument2 } = require_argument();
    var { Command: Command2 } = require_command();
    var { CommanderError: CommanderError2, InvalidArgumentError: InvalidArgumentError2 } = require_error();
    var { Help: Help2 } = require_help();
    var { Option: Option2 } = require_option();
    exports2.program = new Command2();
    exports2.createCommand = (name) => new Command2(name);
    exports2.createOption = (flags, description) => new Option2(flags, description);
    exports2.createArgument = (name, description) => new Argument2(name, description);
    exports2.Command = Command2;
    exports2.Option = Option2;
    exports2.Argument = Argument2;
    exports2.Help = Help2;
    exports2.CommanderError = CommanderError2;
    exports2.InvalidArgumentError = InvalidArgumentError2;
    exports2.InvalidOptionArgumentError = InvalidArgumentError2;
  }
});

// node_modules/.pnpm/kleur@3.0.3/node_modules/kleur/index.js
var require_kleur = __commonJS({
  "node_modules/.pnpm/kleur@3.0.3/node_modules/kleur/index.js"(exports2, module2) {
    "use strict";
    var { FORCE_COLOR, NODE_DISABLE_COLORS, TERM } = process.env;
    var $2 = {
      enabled: !NODE_DISABLE_COLORS && TERM !== "dumb" && FORCE_COLOR !== "0",
      // modifiers
      reset: init(0, 0),
      bold: init(1, 22),
      dim: init(2, 22),
      italic: init(3, 23),
      underline: init(4, 24),
      inverse: init(7, 27),
      hidden: init(8, 28),
      strikethrough: init(9, 29),
      // colors
      black: init(30, 39),
      red: init(31, 39),
      green: init(32, 39),
      yellow: init(33, 39),
      blue: init(34, 39),
      magenta: init(35, 39),
      cyan: init(36, 39),
      white: init(37, 39),
      gray: init(90, 39),
      grey: init(90, 39),
      // background colors
      bgBlack: init(40, 49),
      bgRed: init(41, 49),
      bgGreen: init(42, 49),
      bgYellow: init(43, 49),
      bgBlue: init(44, 49),
      bgMagenta: init(45, 49),
      bgCyan: init(46, 49),
      bgWhite: init(47, 49)
    };
    function run(arr, str) {
      let i = 0, tmp, beg = "", end = "";
      for (; i < arr.length; i++) {
        tmp = arr[i];
        beg += tmp.open;
        end += tmp.close;
        if (str.includes(tmp.close)) {
          str = str.replace(tmp.rgx, tmp.close + tmp.open);
        }
      }
      return beg + str + end;
    }
    function chain(has, keys) {
      let ctx = { has, keys };
      ctx.reset = $2.reset.bind(ctx);
      ctx.bold = $2.bold.bind(ctx);
      ctx.dim = $2.dim.bind(ctx);
      ctx.italic = $2.italic.bind(ctx);
      ctx.underline = $2.underline.bind(ctx);
      ctx.inverse = $2.inverse.bind(ctx);
      ctx.hidden = $2.hidden.bind(ctx);
      ctx.strikethrough = $2.strikethrough.bind(ctx);
      ctx.black = $2.black.bind(ctx);
      ctx.red = $2.red.bind(ctx);
      ctx.green = $2.green.bind(ctx);
      ctx.yellow = $2.yellow.bind(ctx);
      ctx.blue = $2.blue.bind(ctx);
      ctx.magenta = $2.magenta.bind(ctx);
      ctx.cyan = $2.cyan.bind(ctx);
      ctx.white = $2.white.bind(ctx);
      ctx.gray = $2.gray.bind(ctx);
      ctx.grey = $2.grey.bind(ctx);
      ctx.bgBlack = $2.bgBlack.bind(ctx);
      ctx.bgRed = $2.bgRed.bind(ctx);
      ctx.bgGreen = $2.bgGreen.bind(ctx);
      ctx.bgYellow = $2.bgYellow.bind(ctx);
      ctx.bgBlue = $2.bgBlue.bind(ctx);
      ctx.bgMagenta = $2.bgMagenta.bind(ctx);
      ctx.bgCyan = $2.bgCyan.bind(ctx);
      ctx.bgWhite = $2.bgWhite.bind(ctx);
      return ctx;
    }
    function init(open, close) {
      let blk = {
        open: `\x1B[${open}m`,
        close: `\x1B[${close}m`,
        rgx: new RegExp(`\\x1b\\[${close}m`, "g")
      };
      return function(txt) {
        if (this !== void 0 && this.has !== void 0) {
          this.has.includes(open) || (this.has.push(open), this.keys.push(blk));
          return txt === void 0 ? this : $2.enabled ? run(this.keys, txt + "") : txt + "";
        }
        return txt === void 0 ? chain([open], [blk]) : $2.enabled ? run([blk], txt + "") : txt + "";
      };
    }
    module2.exports = $2;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/action.js
var require_action = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/action.js"(exports2, module2) {
    "use strict";
    module2.exports = (key, isSelect) => {
      if (key.meta && key.name !== "escape") return;
      if (key.ctrl) {
        if (key.name === "a") return "first";
        if (key.name === "c") return "abort";
        if (key.name === "d") return "abort";
        if (key.name === "e") return "last";
        if (key.name === "g") return "reset";
      }
      if (isSelect) {
        if (key.name === "j") return "down";
        if (key.name === "k") return "up";
      }
      if (key.name === "return") return "submit";
      if (key.name === "enter") return "submit";
      if (key.name === "backspace") return "delete";
      if (key.name === "delete") return "deleteForward";
      if (key.name === "abort") return "abort";
      if (key.name === "escape") return "exit";
      if (key.name === "tab") return "next";
      if (key.name === "pagedown") return "nextPage";
      if (key.name === "pageup") return "prevPage";
      if (key.name === "home") return "home";
      if (key.name === "end") return "end";
      if (key.name === "up") return "up";
      if (key.name === "down") return "down";
      if (key.name === "right") return "right";
      if (key.name === "left") return "left";
      return false;
    };
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/strip.js
var require_strip = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/strip.js"(exports2, module2) {
    "use strict";
    module2.exports = (str) => {
      const pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))"].join("|");
      const RGX = new RegExp(pattern, "g");
      return typeof str === "string" ? str.replace(RGX, "") : str;
    };
  }
});

// node_modules/.pnpm/sisteransi@1.0.5/node_modules/sisteransi/src/index.js
var require_src = __commonJS({
  "node_modules/.pnpm/sisteransi@1.0.5/node_modules/sisteransi/src/index.js"(exports2, module2) {
    "use strict";
    var ESC = "\x1B";
    var CSI = `${ESC}[`;
    var beep = "\x07";
    var cursor = {
      to(x3, y3) {
        if (!y3) return `${CSI}${x3 + 1}G`;
        return `${CSI}${y3 + 1};${x3 + 1}H`;
      },
      move(x3, y3) {
        let ret = "";
        if (x3 < 0) ret += `${CSI}${-x3}D`;
        else if (x3 > 0) ret += `${CSI}${x3}C`;
        if (y3 < 0) ret += `${CSI}${-y3}A`;
        else if (y3 > 0) ret += `${CSI}${y3}B`;
        return ret;
      },
      up: (count = 1) => `${CSI}${count}A`,
      down: (count = 1) => `${CSI}${count}B`,
      forward: (count = 1) => `${CSI}${count}C`,
      backward: (count = 1) => `${CSI}${count}D`,
      nextLine: (count = 1) => `${CSI}E`.repeat(count),
      prevLine: (count = 1) => `${CSI}F`.repeat(count),
      left: `${CSI}G`,
      hide: `${CSI}?25l`,
      show: `${CSI}?25h`,
      save: `${ESC}7`,
      restore: `${ESC}8`
    };
    var scroll = {
      up: (count = 1) => `${CSI}S`.repeat(count),
      down: (count = 1) => `${CSI}T`.repeat(count)
    };
    var erase = {
      screen: `${CSI}2J`,
      up: (count = 1) => `${CSI}1J`.repeat(count),
      down: (count = 1) => `${CSI}J`.repeat(count),
      line: `${CSI}2K`,
      lineEnd: `${CSI}K`,
      lineStart: `${CSI}1K`,
      lines(count) {
        let clear = "";
        for (let i = 0; i < count; i++)
          clear += this.line + (i < count - 1 ? cursor.up() : "");
        if (count)
          clear += cursor.left;
        return clear;
      }
    };
    module2.exports = { cursor, scroll, erase, beep };
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/clear.js
var require_clear = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/clear.js"(exports2, module2) {
    "use strict";
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it2 = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it2) {
        if (Array.isArray(o) || (it2 = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it2) o = it2;
          var i = 0;
          var F4 = function F5() {
          };
          return { s: F4, n: function n() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          }, e: function e(_e3) {
            throw _e3;
          }, f: F4 };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return { s: function s() {
        it2 = it2.call(o);
      }, n: function n() {
        var step = it2.next();
        normalCompletion = step.done;
        return step;
      }, e: function e(_e22) {
        didErr = true;
        err = _e22;
      }, f: function f() {
        try {
          if (!normalCompletion && it2.return != null) it2.return();
        } finally {
          if (didErr) throw err;
        }
      } };
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    var strip = require_strip();
    var _require = require_src();
    var erase = _require.erase;
    var cursor = _require.cursor;
    var width = (str) => [...strip(str)].length;
    module2.exports = function(prompt, perLine) {
      if (!perLine) return erase.line + cursor.to(0);
      let rows = 0;
      const lines = prompt.split(/\r?\n/);
      var _iterator = _createForOfIteratorHelper(lines), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          let line = _step.value;
          rows += 1 + Math.floor(Math.max(width(line) - 1, 0) / perLine);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return erase.lines(rows);
    };
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/figures.js
var require_figures = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/figures.js"(exports2, module2) {
    "use strict";
    var main = {
      arrowUp: "\u2191",
      arrowDown: "\u2193",
      arrowLeft: "\u2190",
      arrowRight: "\u2192",
      radioOn: "\u25C9",
      radioOff: "\u25EF",
      tick: "\u2714",
      cross: "\u2716",
      ellipsis: "\u2026",
      pointerSmall: "\u203A",
      line: "\u2500",
      pointer: "\u276F"
    };
    var win = {
      arrowUp: main.arrowUp,
      arrowDown: main.arrowDown,
      arrowLeft: main.arrowLeft,
      arrowRight: main.arrowRight,
      radioOn: "(*)",
      radioOff: "( )",
      tick: "\u221A",
      cross: "\xD7",
      ellipsis: "...",
      pointerSmall: "\xBB",
      line: "\u2500",
      pointer: ">"
    };
    var figures = process.platform === "win32" ? win : main;
    module2.exports = figures;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/style.js
var require_style = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/style.js"(exports2, module2) {
    "use strict";
    var c = require_kleur();
    var figures = require_figures();
    var styles3 = Object.freeze({
      password: {
        scale: 1,
        render: (input) => "*".repeat(input.length)
      },
      emoji: {
        scale: 2,
        render: (input) => "\u{1F603}".repeat(input.length)
      },
      invisible: {
        scale: 0,
        render: (input) => ""
      },
      default: {
        scale: 1,
        render: (input) => `${input}`
      }
    });
    var render = (type) => styles3[type] || styles3.default;
    var symbols = Object.freeze({
      aborted: c.red(figures.cross),
      done: c.green(figures.tick),
      exited: c.yellow(figures.cross),
      default: c.cyan("?")
    });
    var symbol = (done, aborted, exited) => aborted ? symbols.aborted : exited ? symbols.exited : done ? symbols.done : symbols.default;
    var delimiter = (completing) => c.gray(completing ? figures.ellipsis : figures.pointerSmall);
    var item = (expandable, expanded) => c.gray(expandable ? expanded ? figures.pointerSmall : "+" : figures.line);
    module2.exports = {
      styles: styles3,
      render,
      symbols,
      symbol,
      delimiter,
      item
    };
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/lines.js
var require_lines = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/lines.js"(exports2, module2) {
    "use strict";
    var strip = require_strip();
    module2.exports = function(msg, perLine) {
      let lines = String(strip(msg) || "").split(/\r?\n/);
      if (!perLine) return lines.length;
      return lines.map((l2) => Math.ceil(l2.length / perLine)).reduce((a, b2) => a + b2);
    };
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/wrap.js
var require_wrap = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/wrap.js"(exports2, module2) {
    "use strict";
    module2.exports = (msg, opts = {}) => {
      const tab = Number.isSafeInteger(parseInt(opts.margin)) ? new Array(parseInt(opts.margin)).fill(" ").join("") : opts.margin || "";
      const width = opts.width;
      return (msg || "").split(/\r?\n/g).map((line) => line.split(/\s+/g).reduce((arr, w2) => {
        if (w2.length + tab.length >= width || arr[arr.length - 1].length + w2.length + 1 < width) arr[arr.length - 1] += ` ${w2}`;
        else arr.push(`${tab}${w2}`);
        return arr;
      }, [tab]).join("\n")).join("\n");
    };
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/entriesToDisplay.js
var require_entriesToDisplay = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/entriesToDisplay.js"(exports2, module2) {
    "use strict";
    module2.exports = (cursor, total, maxVisible) => {
      maxVisible = maxVisible || total;
      let startIndex = Math.min(total - maxVisible, cursor - Math.floor(maxVisible / 2));
      if (startIndex < 0) startIndex = 0;
      let endIndex = Math.min(startIndex + maxVisible, total);
      return {
        startIndex,
        endIndex
      };
    };
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/index.js
var require_util = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/index.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      action: require_action(),
      clear: require_clear(),
      style: require_style(),
      strip: require_strip(),
      figures: require_figures(),
      lines: require_lines(),
      wrap: require_wrap(),
      entriesToDisplay: require_entriesToDisplay()
    };
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/prompt.js
var require_prompt = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/prompt.js"(exports2, module2) {
    "use strict";
    var readline = require("readline");
    var _require = require_util();
    var action = _require.action;
    var EventEmitter = require("events");
    var _require2 = require_src();
    var beep = _require2.beep;
    var cursor = _require2.cursor;
    var color = require_kleur();
    var Prompt = class extends EventEmitter {
      constructor(opts = {}) {
        super();
        this.firstRender = true;
        this.in = opts.stdin || process.stdin;
        this.out = opts.stdout || process.stdout;
        this.onRender = (opts.onRender || (() => void 0)).bind(this);
        const rl = readline.createInterface({
          input: this.in,
          escapeCodeTimeout: 50
        });
        readline.emitKeypressEvents(this.in, rl);
        if (this.in.isTTY) this.in.setRawMode(true);
        const isSelect = ["SelectPrompt", "MultiselectPrompt"].indexOf(this.constructor.name) > -1;
        const keypress = (str, key) => {
          let a = action(key, isSelect);
          if (a === false) {
            this._ && this._(str, key);
          } else if (typeof this[a] === "function") {
            this[a](key);
          } else {
            this.bell();
          }
        };
        this.close = () => {
          this.out.write(cursor.show);
          this.in.removeListener("keypress", keypress);
          if (this.in.isTTY) this.in.setRawMode(false);
          rl.close();
          this.emit(this.aborted ? "abort" : this.exited ? "exit" : "submit", this.value);
          this.closed = true;
        };
        this.in.on("keypress", keypress);
      }
      fire() {
        this.emit("state", {
          value: this.value,
          aborted: !!this.aborted,
          exited: !!this.exited
        });
      }
      bell() {
        this.out.write(beep);
      }
      render() {
        this.onRender(color);
        if (this.firstRender) this.firstRender = false;
      }
    };
    module2.exports = Prompt;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/text.js
var require_text = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/text.js"(exports2, module2) {
    "use strict";
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
    function _asyncToGenerator(fn3) {
      return function() {
        var self2 = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn3.apply(self2, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    var color = require_kleur();
    var Prompt = require_prompt();
    var _require = require_src();
    var erase = _require.erase;
    var cursor = _require.cursor;
    var _require2 = require_util();
    var style = _require2.style;
    var clear = _require2.clear;
    var lines = _require2.lines;
    var figures = _require2.figures;
    var TextPrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.transform = style.render(opts.style);
        this.scale = this.transform.scale;
        this.msg = opts.message;
        this.initial = opts.initial || ``;
        this.validator = opts.validate || (() => true);
        this.value = ``;
        this.errorMsg = opts.error || `Please Enter A Valid Value`;
        this.cursor = Number(!!this.initial);
        this.cursorOffset = 0;
        this.clear = clear(``, this.out.columns);
        this.render();
      }
      set value(v) {
        if (!v && this.initial) {
          this.placeholder = true;
          this.rendered = color.gray(this.transform.render(this.initial));
        } else {
          this.placeholder = false;
          this.rendered = this.transform.render(v);
        }
        this._value = v;
        this.fire();
      }
      get value() {
        return this._value;
      }
      reset() {
        this.value = ``;
        this.cursor = Number(!!this.initial);
        this.cursorOffset = 0;
        this.fire();
        this.render();
      }
      exit() {
        this.abort();
      }
      abort() {
        this.value = this.value || this.initial;
        this.done = this.aborted = true;
        this.error = false;
        this.red = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      validate() {
        var _this = this;
        return _asyncToGenerator(function* () {
          let valid = yield _this.validator(_this.value);
          if (typeof valid === `string`) {
            _this.errorMsg = valid;
            valid = false;
          }
          _this.error = !valid;
        })();
      }
      submit() {
        var _this2 = this;
        return _asyncToGenerator(function* () {
          _this2.value = _this2.value || _this2.initial;
          _this2.cursorOffset = 0;
          _this2.cursor = _this2.rendered.length;
          yield _this2.validate();
          if (_this2.error) {
            _this2.red = true;
            _this2.fire();
            _this2.render();
            return;
          }
          _this2.done = true;
          _this2.aborted = false;
          _this2.fire();
          _this2.render();
          _this2.out.write("\n");
          _this2.close();
        })();
      }
      next() {
        if (!this.placeholder) return this.bell();
        this.value = this.initial;
        this.cursor = this.rendered.length;
        this.fire();
        this.render();
      }
      moveCursor(n) {
        if (this.placeholder) return;
        this.cursor = this.cursor + n;
        this.cursorOffset += n;
      }
      _(c, key) {
        let s1 = this.value.slice(0, this.cursor);
        let s2 = this.value.slice(this.cursor);
        this.value = `${s1}${c}${s2}`;
        this.red = false;
        this.cursor = this.placeholder ? 0 : s1.length + 1;
        this.render();
      }
      delete() {
        if (this.isCursorAtStart()) return this.bell();
        let s1 = this.value.slice(0, this.cursor - 1);
        let s2 = this.value.slice(this.cursor);
        this.value = `${s1}${s2}`;
        this.red = false;
        if (this.isCursorAtStart()) {
          this.cursorOffset = 0;
        } else {
          this.cursorOffset++;
          this.moveCursor(-1);
        }
        this.render();
      }
      deleteForward() {
        if (this.cursor * this.scale >= this.rendered.length || this.placeholder) return this.bell();
        let s1 = this.value.slice(0, this.cursor);
        let s2 = this.value.slice(this.cursor + 1);
        this.value = `${s1}${s2}`;
        this.red = false;
        if (this.isCursorAtEnd()) {
          this.cursorOffset = 0;
        } else {
          this.cursorOffset++;
        }
        this.render();
      }
      first() {
        this.cursor = 0;
        this.render();
      }
      last() {
        this.cursor = this.value.length;
        this.render();
      }
      left() {
        if (this.cursor <= 0 || this.placeholder) return this.bell();
        this.moveCursor(-1);
        this.render();
      }
      right() {
        if (this.cursor * this.scale >= this.rendered.length || this.placeholder) return this.bell();
        this.moveCursor(1);
        this.render();
      }
      isCursorAtStart() {
        return this.cursor === 0 || this.placeholder && this.cursor === 1;
      }
      isCursorAtEnd() {
        return this.cursor === this.rendered.length || this.placeholder && this.cursor === this.rendered.length + 1;
      }
      render() {
        if (this.closed) return;
        if (!this.firstRender) {
          if (this.outputError) this.out.write(cursor.down(lines(this.outputError, this.out.columns) - 1) + clear(this.outputError, this.out.columns));
          this.out.write(clear(this.outputText, this.out.columns));
        }
        super.render();
        this.outputError = "";
        this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(this.done), this.red ? color.red(this.rendered) : this.rendered].join(` `);
        if (this.error) {
          this.outputError += this.errorMsg.split(`
`).reduce((a, l2, i) => a + `
${i ? " " : figures.pointerSmall} ${color.red().italic(l2)}`, ``);
        }
        this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore + cursor.move(this.cursorOffset, 0));
      }
    };
    module2.exports = TextPrompt;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/select.js
var require_select = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/select.js"(exports2, module2) {
    "use strict";
    var color = require_kleur();
    var Prompt = require_prompt();
    var _require = require_util();
    var style = _require.style;
    var clear = _require.clear;
    var figures = _require.figures;
    var wrap = _require.wrap;
    var entriesToDisplay = _require.entriesToDisplay;
    var _require2 = require_src();
    var cursor = _require2.cursor;
    var SelectPrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.msg = opts.message;
        this.hint = opts.hint || "- Use arrow-keys. Return to submit.";
        this.warn = opts.warn || "- This option is disabled";
        this.cursor = opts.initial || 0;
        this.choices = opts.choices.map((ch, idx) => {
          if (typeof ch === "string") ch = {
            title: ch,
            value: idx
          };
          return {
            title: ch && (ch.title || ch.value || ch),
            value: ch && (ch.value === void 0 ? idx : ch.value),
            description: ch && ch.description,
            selected: ch && ch.selected,
            disabled: ch && ch.disabled
          };
        });
        this.optionsPerPage = opts.optionsPerPage || 10;
        this.value = (this.choices[this.cursor] || {}).value;
        this.clear = clear("", this.out.columns);
        this.render();
      }
      moveCursor(n) {
        this.cursor = n;
        this.value = this.choices[n].value;
        this.fire();
      }
      reset() {
        this.moveCursor(0);
        this.fire();
        this.render();
      }
      exit() {
        this.abort();
      }
      abort() {
        this.done = this.aborted = true;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      submit() {
        if (!this.selection.disabled) {
          this.done = true;
          this.aborted = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        } else this.bell();
      }
      first() {
        this.moveCursor(0);
        this.render();
      }
      last() {
        this.moveCursor(this.choices.length - 1);
        this.render();
      }
      up() {
        if (this.cursor === 0) {
          this.moveCursor(this.choices.length - 1);
        } else {
          this.moveCursor(this.cursor - 1);
        }
        this.render();
      }
      down() {
        if (this.cursor === this.choices.length - 1) {
          this.moveCursor(0);
        } else {
          this.moveCursor(this.cursor + 1);
        }
        this.render();
      }
      next() {
        this.moveCursor((this.cursor + 1) % this.choices.length);
        this.render();
      }
      _(c, key) {
        if (c === " ") return this.submit();
      }
      get selection() {
        return this.choices[this.cursor];
      }
      render() {
        if (this.closed) return;
        if (this.firstRender) this.out.write(cursor.hide);
        else this.out.write(clear(this.outputText, this.out.columns));
        super.render();
        let _entriesToDisplay = entriesToDisplay(this.cursor, this.choices.length, this.optionsPerPage), startIndex = _entriesToDisplay.startIndex, endIndex = _entriesToDisplay.endIndex;
        this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(false), this.done ? this.selection.title : this.selection.disabled ? color.yellow(this.warn) : color.gray(this.hint)].join(" ");
        if (!this.done) {
          this.outputText += "\n";
          for (let i = startIndex; i < endIndex; i++) {
            let title, prefix, desc = "", v = this.choices[i];
            if (i === startIndex && startIndex > 0) {
              prefix = figures.arrowUp;
            } else if (i === endIndex - 1 && endIndex < this.choices.length) {
              prefix = figures.arrowDown;
            } else {
              prefix = " ";
            }
            if (v.disabled) {
              title = this.cursor === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
              prefix = (this.cursor === i ? color.bold().gray(figures.pointer) + " " : "  ") + prefix;
            } else {
              title = this.cursor === i ? color.cyan().underline(v.title) : v.title;
              prefix = (this.cursor === i ? color.cyan(figures.pointer) + " " : "  ") + prefix;
              if (v.description && this.cursor === i) {
                desc = ` - ${v.description}`;
                if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
                  desc = "\n" + wrap(v.description, {
                    margin: 3,
                    width: this.out.columns
                  });
                }
              }
            }
            this.outputText += `${prefix} ${title}${color.gray(desc)}
`;
          }
        }
        this.out.write(this.outputText);
      }
    };
    module2.exports = SelectPrompt;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/toggle.js
var require_toggle = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/toggle.js"(exports2, module2) {
    "use strict";
    var color = require_kleur();
    var Prompt = require_prompt();
    var _require = require_util();
    var style = _require.style;
    var clear = _require.clear;
    var _require2 = require_src();
    var cursor = _require2.cursor;
    var erase = _require2.erase;
    var TogglePrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.msg = opts.message;
        this.value = !!opts.initial;
        this.active = opts.active || "on";
        this.inactive = opts.inactive || "off";
        this.initialValue = this.value;
        this.render();
      }
      reset() {
        this.value = this.initialValue;
        this.fire();
        this.render();
      }
      exit() {
        this.abort();
      }
      abort() {
        this.done = this.aborted = true;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      submit() {
        this.done = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      deactivate() {
        if (this.value === false) return this.bell();
        this.value = false;
        this.render();
      }
      activate() {
        if (this.value === true) return this.bell();
        this.value = true;
        this.render();
      }
      delete() {
        this.deactivate();
      }
      left() {
        this.deactivate();
      }
      right() {
        this.activate();
      }
      down() {
        this.deactivate();
      }
      up() {
        this.activate();
      }
      next() {
        this.value = !this.value;
        this.fire();
        this.render();
      }
      _(c, key) {
        if (c === " ") {
          this.value = !this.value;
        } else if (c === "1") {
          this.value = true;
        } else if (c === "0") {
          this.value = false;
        } else return this.bell();
        this.render();
      }
      render() {
        if (this.closed) return;
        if (this.firstRender) this.out.write(cursor.hide);
        else this.out.write(clear(this.outputText, this.out.columns));
        super.render();
        this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(this.done), this.value ? this.inactive : color.cyan().underline(this.inactive), color.gray("/"), this.value ? color.cyan().underline(this.active) : this.active].join(" ");
        this.out.write(erase.line + cursor.to(0) + this.outputText);
      }
    };
    module2.exports = TogglePrompt;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/datepart.js
var require_datepart = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/datepart.js"(exports2, module2) {
    "use strict";
    var DatePart = class _DatePart {
      constructor({
        token,
        date,
        parts,
        locales
      }) {
        this.token = token;
        this.date = date || /* @__PURE__ */ new Date();
        this.parts = parts || [this];
        this.locales = locales || {};
      }
      up() {
      }
      down() {
      }
      next() {
        const currentIdx = this.parts.indexOf(this);
        return this.parts.find((part, idx) => idx > currentIdx && part instanceof _DatePart);
      }
      setTo(val) {
      }
      prev() {
        let parts = [].concat(this.parts).reverse();
        const currentIdx = parts.indexOf(this);
        return parts.find((part, idx) => idx > currentIdx && part instanceof _DatePart);
      }
      toString() {
        return String(this.date);
      }
    };
    module2.exports = DatePart;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/meridiem.js
var require_meridiem = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/meridiem.js"(exports2, module2) {
    "use strict";
    var DatePart = require_datepart();
    var Meridiem = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setHours((this.date.getHours() + 12) % 24);
      }
      down() {
        this.up();
      }
      toString() {
        let meridiem = this.date.getHours() > 12 ? "pm" : "am";
        return /\A/.test(this.token) ? meridiem.toUpperCase() : meridiem;
      }
    };
    module2.exports = Meridiem;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/day.js
var require_day = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/day.js"(exports2, module2) {
    "use strict";
    var DatePart = require_datepart();
    var pos = (n) => {
      n = n % 10;
      return n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th";
    };
    var Day = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setDate(this.date.getDate() + 1);
      }
      down() {
        this.date.setDate(this.date.getDate() - 1);
      }
      setTo(val) {
        this.date.setDate(parseInt(val.substr(-2)));
      }
      toString() {
        let date = this.date.getDate();
        let day = this.date.getDay();
        return this.token === "DD" ? String(date).padStart(2, "0") : this.token === "Do" ? date + pos(date) : this.token === "d" ? day + 1 : this.token === "ddd" ? this.locales.weekdaysShort[day] : this.token === "dddd" ? this.locales.weekdays[day] : date;
      }
    };
    module2.exports = Day;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/hours.js
var require_hours = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/hours.js"(exports2, module2) {
    "use strict";
    var DatePart = require_datepart();
    var Hours = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setHours(this.date.getHours() + 1);
      }
      down() {
        this.date.setHours(this.date.getHours() - 1);
      }
      setTo(val) {
        this.date.setHours(parseInt(val.substr(-2)));
      }
      toString() {
        let hours = this.date.getHours();
        if (/h/.test(this.token)) hours = hours % 12 || 12;
        return this.token.length > 1 ? String(hours).padStart(2, "0") : hours;
      }
    };
    module2.exports = Hours;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/milliseconds.js
var require_milliseconds = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/milliseconds.js"(exports2, module2) {
    "use strict";
    var DatePart = require_datepart();
    var Milliseconds = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setMilliseconds(this.date.getMilliseconds() + 1);
      }
      down() {
        this.date.setMilliseconds(this.date.getMilliseconds() - 1);
      }
      setTo(val) {
        this.date.setMilliseconds(parseInt(val.substr(-this.token.length)));
      }
      toString() {
        return String(this.date.getMilliseconds()).padStart(4, "0").substr(0, this.token.length);
      }
    };
    module2.exports = Milliseconds;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/minutes.js
var require_minutes = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/minutes.js"(exports2, module2) {
    "use strict";
    var DatePart = require_datepart();
    var Minutes = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setMinutes(this.date.getMinutes() + 1);
      }
      down() {
        this.date.setMinutes(this.date.getMinutes() - 1);
      }
      setTo(val) {
        this.date.setMinutes(parseInt(val.substr(-2)));
      }
      toString() {
        let m2 = this.date.getMinutes();
        return this.token.length > 1 ? String(m2).padStart(2, "0") : m2;
      }
    };
    module2.exports = Minutes;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/month.js
var require_month = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/month.js"(exports2, module2) {
    "use strict";
    var DatePart = require_datepart();
    var Month = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setMonth(this.date.getMonth() + 1);
      }
      down() {
        this.date.setMonth(this.date.getMonth() - 1);
      }
      setTo(val) {
        val = parseInt(val.substr(-2)) - 1;
        this.date.setMonth(val < 0 ? 0 : val);
      }
      toString() {
        let month = this.date.getMonth();
        let tl = this.token.length;
        return tl === 2 ? String(month + 1).padStart(2, "0") : tl === 3 ? this.locales.monthsShort[month] : tl === 4 ? this.locales.months[month] : String(month + 1);
      }
    };
    module2.exports = Month;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/seconds.js
var require_seconds = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/seconds.js"(exports2, module2) {
    "use strict";
    var DatePart = require_datepart();
    var Seconds = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setSeconds(this.date.getSeconds() + 1);
      }
      down() {
        this.date.setSeconds(this.date.getSeconds() - 1);
      }
      setTo(val) {
        this.date.setSeconds(parseInt(val.substr(-2)));
      }
      toString() {
        let s = this.date.getSeconds();
        return this.token.length > 1 ? String(s).padStart(2, "0") : s;
      }
    };
    module2.exports = Seconds;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/year.js
var require_year = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/year.js"(exports2, module2) {
    "use strict";
    var DatePart = require_datepart();
    var Year = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setFullYear(this.date.getFullYear() + 1);
      }
      down() {
        this.date.setFullYear(this.date.getFullYear() - 1);
      }
      setTo(val) {
        this.date.setFullYear(val.substr(-4));
      }
      toString() {
        let year = String(this.date.getFullYear()).padStart(4, "0");
        return this.token.length === 2 ? year.substr(-2) : year;
      }
    };
    module2.exports = Year;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/index.js
var require_dateparts = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/index.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      DatePart: require_datepart(),
      Meridiem: require_meridiem(),
      Day: require_day(),
      Hours: require_hours(),
      Milliseconds: require_milliseconds(),
      Minutes: require_minutes(),
      Month: require_month(),
      Seconds: require_seconds(),
      Year: require_year()
    };
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/date.js
var require_date = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/date.js"(exports2, module2) {
    "use strict";
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
    function _asyncToGenerator(fn3) {
      return function() {
        var self2 = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn3.apply(self2, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    var color = require_kleur();
    var Prompt = require_prompt();
    var _require = require_util();
    var style = _require.style;
    var clear = _require.clear;
    var figures = _require.figures;
    var _require2 = require_src();
    var erase = _require2.erase;
    var cursor = _require2.cursor;
    var _require3 = require_dateparts();
    var DatePart = _require3.DatePart;
    var Meridiem = _require3.Meridiem;
    var Day = _require3.Day;
    var Hours = _require3.Hours;
    var Milliseconds = _require3.Milliseconds;
    var Minutes = _require3.Minutes;
    var Month = _require3.Month;
    var Seconds = _require3.Seconds;
    var Year = _require3.Year;
    var regex = /\\(.)|"((?:\\["\\]|[^"])+)"|(D[Do]?|d{3,4}|d)|(M{1,4})|(YY(?:YY)?)|([aA])|([Hh]{1,2})|(m{1,2})|(s{1,2})|(S{1,4})|./g;
    var regexGroups = {
      1: ({
        token
      }) => token.replace(/\\(.)/g, "$1"),
      2: (opts) => new Day(opts),
      // Day // TODO
      3: (opts) => new Month(opts),
      // Month
      4: (opts) => new Year(opts),
      // Year
      5: (opts) => new Meridiem(opts),
      // AM/PM // TODO (special)
      6: (opts) => new Hours(opts),
      // Hours
      7: (opts) => new Minutes(opts),
      // Minutes
      8: (opts) => new Seconds(opts),
      // Seconds
      9: (opts) => new Milliseconds(opts)
      // Fractional seconds
    };
    var dfltLocales = {
      months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
      monthsShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
      weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
      weekdaysShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",")
    };
    var DatePrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.msg = opts.message;
        this.cursor = 0;
        this.typed = "";
        this.locales = Object.assign(dfltLocales, opts.locales);
        this._date = opts.initial || /* @__PURE__ */ new Date();
        this.errorMsg = opts.error || "Please Enter A Valid Value";
        this.validator = opts.validate || (() => true);
        this.mask = opts.mask || "YYYY-MM-DD HH:mm:ss";
        this.clear = clear("", this.out.columns);
        this.render();
      }
      get value() {
        return this.date;
      }
      get date() {
        return this._date;
      }
      set date(date) {
        if (date) this._date.setTime(date.getTime());
      }
      set mask(mask) {
        let result;
        this.parts = [];
        while (result = regex.exec(mask)) {
          let match = result.shift();
          let idx = result.findIndex((gr) => gr != null);
          this.parts.push(idx in regexGroups ? regexGroups[idx]({
            token: result[idx] || match,
            date: this.date,
            parts: this.parts,
            locales: this.locales
          }) : result[idx] || match);
        }
        let parts = this.parts.reduce((arr, i) => {
          if (typeof i === "string" && typeof arr[arr.length - 1] === "string") arr[arr.length - 1] += i;
          else arr.push(i);
          return arr;
        }, []);
        this.parts.splice(0);
        this.parts.push(...parts);
        this.reset();
      }
      moveCursor(n) {
        this.typed = "";
        this.cursor = n;
        this.fire();
      }
      reset() {
        this.moveCursor(this.parts.findIndex((p) => p instanceof DatePart));
        this.fire();
        this.render();
      }
      exit() {
        this.abort();
      }
      abort() {
        this.done = this.aborted = true;
        this.error = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      validate() {
        var _this = this;
        return _asyncToGenerator(function* () {
          let valid = yield _this.validator(_this.value);
          if (typeof valid === "string") {
            _this.errorMsg = valid;
            valid = false;
          }
          _this.error = !valid;
        })();
      }
      submit() {
        var _this2 = this;
        return _asyncToGenerator(function* () {
          yield _this2.validate();
          if (_this2.error) {
            _this2.color = "red";
            _this2.fire();
            _this2.render();
            return;
          }
          _this2.done = true;
          _this2.aborted = false;
          _this2.fire();
          _this2.render();
          _this2.out.write("\n");
          _this2.close();
        })();
      }
      up() {
        this.typed = "";
        this.parts[this.cursor].up();
        this.render();
      }
      down() {
        this.typed = "";
        this.parts[this.cursor].down();
        this.render();
      }
      left() {
        let prev = this.parts[this.cursor].prev();
        if (prev == null) return this.bell();
        this.moveCursor(this.parts.indexOf(prev));
        this.render();
      }
      right() {
        let next = this.parts[this.cursor].next();
        if (next == null) return this.bell();
        this.moveCursor(this.parts.indexOf(next));
        this.render();
      }
      next() {
        let next = this.parts[this.cursor].next();
        this.moveCursor(next ? this.parts.indexOf(next) : this.parts.findIndex((part) => part instanceof DatePart));
        this.render();
      }
      _(c) {
        if (/\d/.test(c)) {
          this.typed += c;
          this.parts[this.cursor].setTo(this.typed);
          this.render();
        }
      }
      render() {
        if (this.closed) return;
        if (this.firstRender) this.out.write(cursor.hide);
        else this.out.write(clear(this.outputText, this.out.columns));
        super.render();
        this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(false), this.parts.reduce((arr, p, idx) => arr.concat(idx === this.cursor && !this.done ? color.cyan().underline(p.toString()) : p), []).join("")].join(" ");
        if (this.error) {
          this.outputText += this.errorMsg.split("\n").reduce((a, l2, i) => a + `
${i ? ` ` : figures.pointerSmall} ${color.red().italic(l2)}`, ``);
        }
        this.out.write(erase.line + cursor.to(0) + this.outputText);
      }
    };
    module2.exports = DatePrompt;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/number.js
var require_number = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/number.js"(exports2, module2) {
    "use strict";
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
    function _asyncToGenerator(fn3) {
      return function() {
        var self2 = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn3.apply(self2, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    var color = require_kleur();
    var Prompt = require_prompt();
    var _require = require_src();
    var cursor = _require.cursor;
    var erase = _require.erase;
    var _require2 = require_util();
    var style = _require2.style;
    var figures = _require2.figures;
    var clear = _require2.clear;
    var lines = _require2.lines;
    var isNumber = /[0-9]/;
    var isDef = (any) => any !== void 0;
    var round = (number, precision) => {
      let factor = Math.pow(10, precision);
      return Math.round(number * factor) / factor;
    };
    var NumberPrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.transform = style.render(opts.style);
        this.msg = opts.message;
        this.initial = isDef(opts.initial) ? opts.initial : "";
        this.float = !!opts.float;
        this.round = opts.round || 2;
        this.inc = opts.increment || 1;
        this.min = isDef(opts.min) ? opts.min : -Infinity;
        this.max = isDef(opts.max) ? opts.max : Infinity;
        this.errorMsg = opts.error || `Please Enter A Valid Value`;
        this.validator = opts.validate || (() => true);
        this.color = `cyan`;
        this.value = ``;
        this.typed = ``;
        this.lastHit = 0;
        this.render();
      }
      set value(v) {
        if (!v && v !== 0) {
          this.placeholder = true;
          this.rendered = color.gray(this.transform.render(`${this.initial}`));
          this._value = ``;
        } else {
          this.placeholder = false;
          this.rendered = this.transform.render(`${round(v, this.round)}`);
          this._value = round(v, this.round);
        }
        this.fire();
      }
      get value() {
        return this._value;
      }
      parse(x3) {
        return this.float ? parseFloat(x3) : parseInt(x3);
      }
      valid(c) {
        return c === `-` || c === `.` && this.float || isNumber.test(c);
      }
      reset() {
        this.typed = ``;
        this.value = ``;
        this.fire();
        this.render();
      }
      exit() {
        this.abort();
      }
      abort() {
        let x3 = this.value;
        this.value = x3 !== `` ? x3 : this.initial;
        this.done = this.aborted = true;
        this.error = false;
        this.fire();
        this.render();
        this.out.write(`
`);
        this.close();
      }
      validate() {
        var _this = this;
        return _asyncToGenerator(function* () {
          let valid = yield _this.validator(_this.value);
          if (typeof valid === `string`) {
            _this.errorMsg = valid;
            valid = false;
          }
          _this.error = !valid;
        })();
      }
      submit() {
        var _this2 = this;
        return _asyncToGenerator(function* () {
          yield _this2.validate();
          if (_this2.error) {
            _this2.color = `red`;
            _this2.fire();
            _this2.render();
            return;
          }
          let x3 = _this2.value;
          _this2.value = x3 !== `` ? x3 : _this2.initial;
          _this2.done = true;
          _this2.aborted = false;
          _this2.error = false;
          _this2.fire();
          _this2.render();
          _this2.out.write(`
`);
          _this2.close();
        })();
      }
      up() {
        this.typed = ``;
        if (this.value === "") {
          this.value = this.min - this.inc;
        }
        if (this.value >= this.max) return this.bell();
        this.value += this.inc;
        this.color = `cyan`;
        this.fire();
        this.render();
      }
      down() {
        this.typed = ``;
        if (this.value === "") {
          this.value = this.min + this.inc;
        }
        if (this.value <= this.min) return this.bell();
        this.value -= this.inc;
        this.color = `cyan`;
        this.fire();
        this.render();
      }
      delete() {
        let val = this.value.toString();
        if (val.length === 0) return this.bell();
        this.value = this.parse(val = val.slice(0, -1)) || ``;
        if (this.value !== "" && this.value < this.min) {
          this.value = this.min;
        }
        this.color = `cyan`;
        this.fire();
        this.render();
      }
      next() {
        this.value = this.initial;
        this.fire();
        this.render();
      }
      _(c, key) {
        if (!this.valid(c)) return this.bell();
        const now = Date.now();
        if (now - this.lastHit > 1e3) this.typed = ``;
        this.typed += c;
        this.lastHit = now;
        this.color = `cyan`;
        if (c === `.`) return this.fire();
        this.value = Math.min(this.parse(this.typed), this.max);
        if (this.value > this.max) this.value = this.max;
        if (this.value < this.min) this.value = this.min;
        this.fire();
        this.render();
      }
      render() {
        if (this.closed) return;
        if (!this.firstRender) {
          if (this.outputError) this.out.write(cursor.down(lines(this.outputError, this.out.columns) - 1) + clear(this.outputError, this.out.columns));
          this.out.write(clear(this.outputText, this.out.columns));
        }
        super.render();
        this.outputError = "";
        this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(this.done), !this.done || !this.done && !this.placeholder ? color[this.color]().underline(this.rendered) : this.rendered].join(` `);
        if (this.error) {
          this.outputError += this.errorMsg.split(`
`).reduce((a, l2, i) => a + `
${i ? ` ` : figures.pointerSmall} ${color.red().italic(l2)}`, ``);
        }
        this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore);
      }
    };
    module2.exports = NumberPrompt;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/multiselect.js
var require_multiselect = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/multiselect.js"(exports2, module2) {
    "use strict";
    var color = require_kleur();
    var _require = require_src();
    var cursor = _require.cursor;
    var Prompt = require_prompt();
    var _require2 = require_util();
    var clear = _require2.clear;
    var figures = _require2.figures;
    var style = _require2.style;
    var wrap = _require2.wrap;
    var entriesToDisplay = _require2.entriesToDisplay;
    var MultiselectPrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.msg = opts.message;
        this.cursor = opts.cursor || 0;
        this.scrollIndex = opts.cursor || 0;
        this.hint = opts.hint || "";
        this.warn = opts.warn || "- This option is disabled -";
        this.minSelected = opts.min;
        this.showMinError = false;
        this.maxChoices = opts.max;
        this.instructions = opts.instructions;
        this.optionsPerPage = opts.optionsPerPage || 10;
        this.value = opts.choices.map((ch, idx) => {
          if (typeof ch === "string") ch = {
            title: ch,
            value: idx
          };
          return {
            title: ch && (ch.title || ch.value || ch),
            description: ch && ch.description,
            value: ch && (ch.value === void 0 ? idx : ch.value),
            selected: ch && ch.selected,
            disabled: ch && ch.disabled
          };
        });
        this.clear = clear("", this.out.columns);
        if (!opts.overrideRender) {
          this.render();
        }
      }
      reset() {
        this.value.map((v) => !v.selected);
        this.cursor = 0;
        this.fire();
        this.render();
      }
      selected() {
        return this.value.filter((v) => v.selected);
      }
      exit() {
        this.abort();
      }
      abort() {
        this.done = this.aborted = true;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      submit() {
        const selected = this.value.filter((e) => e.selected);
        if (this.minSelected && selected.length < this.minSelected) {
          this.showMinError = true;
          this.render();
        } else {
          this.done = true;
          this.aborted = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
      }
      first() {
        this.cursor = 0;
        this.render();
      }
      last() {
        this.cursor = this.value.length - 1;
        this.render();
      }
      next() {
        this.cursor = (this.cursor + 1) % this.value.length;
        this.render();
      }
      up() {
        if (this.cursor === 0) {
          this.cursor = this.value.length - 1;
        } else {
          this.cursor--;
        }
        this.render();
      }
      down() {
        if (this.cursor === this.value.length - 1) {
          this.cursor = 0;
        } else {
          this.cursor++;
        }
        this.render();
      }
      left() {
        this.value[this.cursor].selected = false;
        this.render();
      }
      right() {
        if (this.value.filter((e) => e.selected).length >= this.maxChoices) return this.bell();
        this.value[this.cursor].selected = true;
        this.render();
      }
      handleSpaceToggle() {
        const v = this.value[this.cursor];
        if (v.selected) {
          v.selected = false;
          this.render();
        } else if (v.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
          return this.bell();
        } else {
          v.selected = true;
          this.render();
        }
      }
      toggleAll() {
        if (this.maxChoices !== void 0 || this.value[this.cursor].disabled) {
          return this.bell();
        }
        const newSelected = !this.value[this.cursor].selected;
        this.value.filter((v) => !v.disabled).forEach((v) => v.selected = newSelected);
        this.render();
      }
      _(c, key) {
        if (c === " ") {
          this.handleSpaceToggle();
        } else if (c === "a") {
          this.toggleAll();
        } else {
          return this.bell();
        }
      }
      renderInstructions() {
        if (this.instructions === void 0 || this.instructions) {
          if (typeof this.instructions === "string") {
            return this.instructions;
          }
          return `
Instructions:
    ${figures.arrowUp}/${figures.arrowDown}: Highlight option
    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection
` + (this.maxChoices === void 0 ? `    a: Toggle all
` : "") + `    enter/return: Complete answer`;
        }
        return "";
      }
      renderOption(cursor2, v, i, arrowIndicator) {
        const prefix = (v.selected ? color.green(figures.radioOn) : figures.radioOff) + " " + arrowIndicator + " ";
        let title, desc;
        if (v.disabled) {
          title = cursor2 === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
        } else {
          title = cursor2 === i ? color.cyan().underline(v.title) : v.title;
          if (cursor2 === i && v.description) {
            desc = ` - ${v.description}`;
            if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
              desc = "\n" + wrap(v.description, {
                margin: prefix.length,
                width: this.out.columns
              });
            }
          }
        }
        return prefix + title + color.gray(desc || "");
      }
      // shared with autocompleteMultiselect
      paginateOptions(options) {
        if (options.length === 0) {
          return color.red("No matches for this query.");
        }
        let _entriesToDisplay = entriesToDisplay(this.cursor, options.length, this.optionsPerPage), startIndex = _entriesToDisplay.startIndex, endIndex = _entriesToDisplay.endIndex;
        let prefix, styledOptions = [];
        for (let i = startIndex; i < endIndex; i++) {
          if (i === startIndex && startIndex > 0) {
            prefix = figures.arrowUp;
          } else if (i === endIndex - 1 && endIndex < options.length) {
            prefix = figures.arrowDown;
          } else {
            prefix = " ";
          }
          styledOptions.push(this.renderOption(this.cursor, options[i], i, prefix));
        }
        return "\n" + styledOptions.join("\n");
      }
      // shared with autocomleteMultiselect
      renderOptions(options) {
        if (!this.done) {
          return this.paginateOptions(options);
        }
        return "";
      }
      renderDoneOrInstructions() {
        if (this.done) {
          return this.value.filter((e) => e.selected).map((v) => v.title).join(", ");
        }
        const output = [color.gray(this.hint), this.renderInstructions()];
        if (this.value[this.cursor].disabled) {
          output.push(color.yellow(this.warn));
        }
        return output.join(" ");
      }
      render() {
        if (this.closed) return;
        if (this.firstRender) this.out.write(cursor.hide);
        super.render();
        let prompt = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(false), this.renderDoneOrInstructions()].join(" ");
        if (this.showMinError) {
          prompt += color.red(`You must select a minimum of ${this.minSelected} choices.`);
          this.showMinError = false;
        }
        prompt += this.renderOptions(this.value);
        this.out.write(this.clear + prompt);
        this.clear = clear(prompt, this.out.columns);
      }
    };
    module2.exports = MultiselectPrompt;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/autocomplete.js
var require_autocomplete = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/autocomplete.js"(exports2, module2) {
    "use strict";
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
    function _asyncToGenerator(fn3) {
      return function() {
        var self2 = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn3.apply(self2, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    var color = require_kleur();
    var Prompt = require_prompt();
    var _require = require_src();
    var erase = _require.erase;
    var cursor = _require.cursor;
    var _require2 = require_util();
    var style = _require2.style;
    var clear = _require2.clear;
    var figures = _require2.figures;
    var wrap = _require2.wrap;
    var entriesToDisplay = _require2.entriesToDisplay;
    var getVal = (arr, i) => arr[i] && (arr[i].value || arr[i].title || arr[i]);
    var getTitle = (arr, i) => arr[i] && (arr[i].title || arr[i].value || arr[i]);
    var getIndex = (arr, valOrTitle) => {
      const index = arr.findIndex((el) => el.value === valOrTitle || el.title === valOrTitle);
      return index > -1 ? index : void 0;
    };
    var AutocompletePrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.msg = opts.message;
        this.suggest = opts.suggest;
        this.choices = opts.choices;
        this.initial = typeof opts.initial === "number" ? opts.initial : getIndex(opts.choices, opts.initial);
        this.select = this.initial || opts.cursor || 0;
        this.i18n = {
          noMatches: opts.noMatches || "no matches found"
        };
        this.fallback = opts.fallback || this.initial;
        this.clearFirst = opts.clearFirst || false;
        this.suggestions = [];
        this.input = "";
        this.limit = opts.limit || 10;
        this.cursor = 0;
        this.transform = style.render(opts.style);
        this.scale = this.transform.scale;
        this.render = this.render.bind(this);
        this.complete = this.complete.bind(this);
        this.clear = clear("", this.out.columns);
        this.complete(this.render);
        this.render();
      }
      set fallback(fb) {
        this._fb = Number.isSafeInteger(parseInt(fb)) ? parseInt(fb) : fb;
      }
      get fallback() {
        let choice;
        if (typeof this._fb === "number") choice = this.choices[this._fb];
        else if (typeof this._fb === "string") choice = {
          title: this._fb
        };
        return choice || this._fb || {
          title: this.i18n.noMatches
        };
      }
      moveSelect(i) {
        this.select = i;
        if (this.suggestions.length > 0) this.value = getVal(this.suggestions, i);
        else this.value = this.fallback.value;
        this.fire();
      }
      complete(cb) {
        var _this = this;
        return _asyncToGenerator(function* () {
          const p = _this.completing = _this.suggest(_this.input, _this.choices);
          const suggestions = yield p;
          if (_this.completing !== p) return;
          _this.suggestions = suggestions.map((s, i, arr) => ({
            title: getTitle(arr, i),
            value: getVal(arr, i),
            description: s.description
          }));
          _this.completing = false;
          const l2 = Math.max(suggestions.length - 1, 0);
          _this.moveSelect(Math.min(l2, _this.select));
          cb && cb();
        })();
      }
      reset() {
        this.input = "";
        this.complete(() => {
          this.moveSelect(this.initial !== void 0 ? this.initial : 0);
          this.render();
        });
        this.render();
      }
      exit() {
        if (this.clearFirst && this.input.length > 0) {
          this.reset();
        } else {
          this.done = this.exited = true;
          this.aborted = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
      }
      abort() {
        this.done = this.aborted = true;
        this.exited = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      submit() {
        this.done = true;
        this.aborted = this.exited = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      _(c, key) {
        let s1 = this.input.slice(0, this.cursor);
        let s2 = this.input.slice(this.cursor);
        this.input = `${s1}${c}${s2}`;
        this.cursor = s1.length + 1;
        this.complete(this.render);
        this.render();
      }
      delete() {
        if (this.cursor === 0) return this.bell();
        let s1 = this.input.slice(0, this.cursor - 1);
        let s2 = this.input.slice(this.cursor);
        this.input = `${s1}${s2}`;
        this.complete(this.render);
        this.cursor = this.cursor - 1;
        this.render();
      }
      deleteForward() {
        if (this.cursor * this.scale >= this.rendered.length) return this.bell();
        let s1 = this.input.slice(0, this.cursor);
        let s2 = this.input.slice(this.cursor + 1);
        this.input = `${s1}${s2}`;
        this.complete(this.render);
        this.render();
      }
      first() {
        this.moveSelect(0);
        this.render();
      }
      last() {
        this.moveSelect(this.suggestions.length - 1);
        this.render();
      }
      up() {
        if (this.select === 0) {
          this.moveSelect(this.suggestions.length - 1);
        } else {
          this.moveSelect(this.select - 1);
        }
        this.render();
      }
      down() {
        if (this.select === this.suggestions.length - 1) {
          this.moveSelect(0);
        } else {
          this.moveSelect(this.select + 1);
        }
        this.render();
      }
      next() {
        if (this.select === this.suggestions.length - 1) {
          this.moveSelect(0);
        } else this.moveSelect(this.select + 1);
        this.render();
      }
      nextPage() {
        this.moveSelect(Math.min(this.select + this.limit, this.suggestions.length - 1));
        this.render();
      }
      prevPage() {
        this.moveSelect(Math.max(this.select - this.limit, 0));
        this.render();
      }
      left() {
        if (this.cursor <= 0) return this.bell();
        this.cursor = this.cursor - 1;
        this.render();
      }
      right() {
        if (this.cursor * this.scale >= this.rendered.length) return this.bell();
        this.cursor = this.cursor + 1;
        this.render();
      }
      renderOption(v, hovered, isStart, isEnd) {
        let desc;
        let prefix = isStart ? figures.arrowUp : isEnd ? figures.arrowDown : " ";
        let title = hovered ? color.cyan().underline(v.title) : v.title;
        prefix = (hovered ? color.cyan(figures.pointer) + " " : "  ") + prefix;
        if (v.description) {
          desc = ` - ${v.description}`;
          if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
            desc = "\n" + wrap(v.description, {
              margin: 3,
              width: this.out.columns
            });
          }
        }
        return prefix + " " + title + color.gray(desc || "");
      }
      render() {
        if (this.closed) return;
        if (this.firstRender) this.out.write(cursor.hide);
        else this.out.write(clear(this.outputText, this.out.columns));
        super.render();
        let _entriesToDisplay = entriesToDisplay(this.select, this.choices.length, this.limit), startIndex = _entriesToDisplay.startIndex, endIndex = _entriesToDisplay.endIndex;
        this.outputText = [style.symbol(this.done, this.aborted, this.exited), color.bold(this.msg), style.delimiter(this.completing), this.done && this.suggestions[this.select] ? this.suggestions[this.select].title : this.rendered = this.transform.render(this.input)].join(" ");
        if (!this.done) {
          const suggestions = this.suggestions.slice(startIndex, endIndex).map((item, i) => this.renderOption(item, this.select === i + startIndex, i === 0 && startIndex > 0, i + startIndex === endIndex - 1 && endIndex < this.choices.length)).join("\n");
          this.outputText += `
` + (suggestions || color.gray(this.fallback.title));
        }
        this.out.write(erase.line + cursor.to(0) + this.outputText);
      }
    };
    module2.exports = AutocompletePrompt;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/autocompleteMultiselect.js
var require_autocompleteMultiselect = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/autocompleteMultiselect.js"(exports2, module2) {
    "use strict";
    var color = require_kleur();
    var _require = require_src();
    var cursor = _require.cursor;
    var MultiselectPrompt = require_multiselect();
    var _require2 = require_util();
    var clear = _require2.clear;
    var style = _require2.style;
    var figures = _require2.figures;
    var AutocompleteMultiselectPrompt = class extends MultiselectPrompt {
      constructor(opts = {}) {
        opts.overrideRender = true;
        super(opts);
        this.inputValue = "";
        this.clear = clear("", this.out.columns);
        this.filteredOptions = this.value;
        this.render();
      }
      last() {
        this.cursor = this.filteredOptions.length - 1;
        this.render();
      }
      next() {
        this.cursor = (this.cursor + 1) % this.filteredOptions.length;
        this.render();
      }
      up() {
        if (this.cursor === 0) {
          this.cursor = this.filteredOptions.length - 1;
        } else {
          this.cursor--;
        }
        this.render();
      }
      down() {
        if (this.cursor === this.filteredOptions.length - 1) {
          this.cursor = 0;
        } else {
          this.cursor++;
        }
        this.render();
      }
      left() {
        this.filteredOptions[this.cursor].selected = false;
        this.render();
      }
      right() {
        if (this.value.filter((e) => e.selected).length >= this.maxChoices) return this.bell();
        this.filteredOptions[this.cursor].selected = true;
        this.render();
      }
      delete() {
        if (this.inputValue.length) {
          this.inputValue = this.inputValue.substr(0, this.inputValue.length - 1);
          this.updateFilteredOptions();
        }
      }
      updateFilteredOptions() {
        const currentHighlight = this.filteredOptions[this.cursor];
        this.filteredOptions = this.value.filter((v) => {
          if (this.inputValue) {
            if (typeof v.title === "string") {
              if (v.title.toLowerCase().includes(this.inputValue.toLowerCase())) {
                return true;
              }
            }
            if (typeof v.value === "string") {
              if (v.value.toLowerCase().includes(this.inputValue.toLowerCase())) {
                return true;
              }
            }
            return false;
          }
          return true;
        });
        const newHighlightIndex = this.filteredOptions.findIndex((v) => v === currentHighlight);
        this.cursor = newHighlightIndex < 0 ? 0 : newHighlightIndex;
        this.render();
      }
      handleSpaceToggle() {
        const v = this.filteredOptions[this.cursor];
        if (v.selected) {
          v.selected = false;
          this.render();
        } else if (v.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
          return this.bell();
        } else {
          v.selected = true;
          this.render();
        }
      }
      handleInputChange(c) {
        this.inputValue = this.inputValue + c;
        this.updateFilteredOptions();
      }
      _(c, key) {
        if (c === " ") {
          this.handleSpaceToggle();
        } else {
          this.handleInputChange(c);
        }
      }
      renderInstructions() {
        if (this.instructions === void 0 || this.instructions) {
          if (typeof this.instructions === "string") {
            return this.instructions;
          }
          return `
Instructions:
    ${figures.arrowUp}/${figures.arrowDown}: Highlight option
    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection
    [a,b,c]/delete: Filter choices
    enter/return: Complete answer
`;
        }
        return "";
      }
      renderCurrentInput() {
        return `
Filtered results for: ${this.inputValue ? this.inputValue : color.gray("Enter something to filter")}
`;
      }
      renderOption(cursor2, v, i) {
        let title;
        if (v.disabled) title = cursor2 === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
        else title = cursor2 === i ? color.cyan().underline(v.title) : v.title;
        return (v.selected ? color.green(figures.radioOn) : figures.radioOff) + "  " + title;
      }
      renderDoneOrInstructions() {
        if (this.done) {
          return this.value.filter((e) => e.selected).map((v) => v.title).join(", ");
        }
        const output = [color.gray(this.hint), this.renderInstructions(), this.renderCurrentInput()];
        if (this.filteredOptions.length && this.filteredOptions[this.cursor].disabled) {
          output.push(color.yellow(this.warn));
        }
        return output.join(" ");
      }
      render() {
        if (this.closed) return;
        if (this.firstRender) this.out.write(cursor.hide);
        super.render();
        let prompt = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(false), this.renderDoneOrInstructions()].join(" ");
        if (this.showMinError) {
          prompt += color.red(`You must select a minimum of ${this.minSelected} choices.`);
          this.showMinError = false;
        }
        prompt += this.renderOptions(this.filteredOptions);
        this.out.write(this.clear + prompt);
        this.clear = clear(prompt, this.out.columns);
      }
    };
    module2.exports = AutocompleteMultiselectPrompt;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/confirm.js
var require_confirm = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/confirm.js"(exports2, module2) {
    "use strict";
    var color = require_kleur();
    var Prompt = require_prompt();
    var _require = require_util();
    var style = _require.style;
    var clear = _require.clear;
    var _require2 = require_src();
    var erase = _require2.erase;
    var cursor = _require2.cursor;
    var ConfirmPrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.msg = opts.message;
        this.value = opts.initial;
        this.initialValue = !!opts.initial;
        this.yesMsg = opts.yes || "yes";
        this.yesOption = opts.yesOption || "(Y/n)";
        this.noMsg = opts.no || "no";
        this.noOption = opts.noOption || "(y/N)";
        this.render();
      }
      reset() {
        this.value = this.initialValue;
        this.fire();
        this.render();
      }
      exit() {
        this.abort();
      }
      abort() {
        this.done = this.aborted = true;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      submit() {
        this.value = this.value || false;
        this.done = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      _(c, key) {
        if (c.toLowerCase() === "y") {
          this.value = true;
          return this.submit();
        }
        if (c.toLowerCase() === "n") {
          this.value = false;
          return this.submit();
        }
        return this.bell();
      }
      render() {
        if (this.closed) return;
        if (this.firstRender) this.out.write(cursor.hide);
        else this.out.write(clear(this.outputText, this.out.columns));
        super.render();
        this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(this.done), this.done ? this.value ? this.yesMsg : this.noMsg : color.gray(this.initialValue ? this.yesOption : this.noOption)].join(" ");
        this.out.write(erase.line + cursor.to(0) + this.outputText);
      }
    };
    module2.exports = ConfirmPrompt;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/index.js
var require_elements = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/index.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      TextPrompt: require_text(),
      SelectPrompt: require_select(),
      TogglePrompt: require_toggle(),
      DatePrompt: require_date(),
      NumberPrompt: require_number(),
      MultiselectPrompt: require_multiselect(),
      AutocompletePrompt: require_autocomplete(),
      AutocompleteMultiselectPrompt: require_autocompleteMultiselect(),
      ConfirmPrompt: require_confirm()
    };
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/prompts.js
var require_prompts = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/prompts.js"(exports2) {
    "use strict";
    var $2 = exports2;
    var el = require_elements();
    var noop = (v) => v;
    function toPrompt(type, args, opts = {}) {
      return new Promise((res, rej) => {
        const p = new el[type](args);
        const onAbort = opts.onAbort || noop;
        const onSubmit = opts.onSubmit || noop;
        const onExit = opts.onExit || noop;
        p.on("state", args.onState || noop);
        p.on("submit", (x3) => res(onSubmit(x3)));
        p.on("exit", (x3) => res(onExit(x3)));
        p.on("abort", (x3) => rej(onAbort(x3)));
      });
    }
    $2.text = (args) => toPrompt("TextPrompt", args);
    $2.password = (args) => {
      args.style = "password";
      return $2.text(args);
    };
    $2.invisible = (args) => {
      args.style = "invisible";
      return $2.text(args);
    };
    $2.number = (args) => toPrompt("NumberPrompt", args);
    $2.date = (args) => toPrompt("DatePrompt", args);
    $2.confirm = (args) => toPrompt("ConfirmPrompt", args);
    $2.list = (args) => {
      const sep = args.separator || ",";
      return toPrompt("TextPrompt", args, {
        onSubmit: (str) => str.split(sep).map((s) => s.trim())
      });
    };
    $2.toggle = (args) => toPrompt("TogglePrompt", args);
    $2.select = (args) => toPrompt("SelectPrompt", args);
    $2.multiselect = (args) => {
      args.choices = [].concat(args.choices || []);
      const toSelected = (items) => items.filter((item) => item.selected).map((item) => item.value);
      return toPrompt("MultiselectPrompt", args, {
        onAbort: toSelected,
        onSubmit: toSelected
      });
    };
    $2.autocompleteMultiselect = (args) => {
      args.choices = [].concat(args.choices || []);
      const toSelected = (items) => items.filter((item) => item.selected).map((item) => item.value);
      return toPrompt("AutocompleteMultiselectPrompt", args, {
        onAbort: toSelected,
        onSubmit: toSelected
      });
    };
    var byTitle = (input, choices) => Promise.resolve(choices.filter((item) => item.title.slice(0, input.length).toLowerCase() === input.toLowerCase()));
    $2.autocomplete = (args) => {
      args.suggest = args.suggest || byTitle;
      args.choices = [].concat(args.choices || []);
      return toPrompt("AutocompletePrompt", args);
    };
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/index.js"(exports2, module2) {
    "use strict";
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it2 = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it2) {
        if (Array.isArray(o) || (it2 = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it2) o = it2;
          var i = 0;
          var F4 = function F5() {
          };
          return { s: F4, n: function n() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          }, e: function e(_e3) {
            throw _e3;
          }, f: F4 };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return { s: function s() {
        it2 = it2.call(o);
      }, n: function n() {
        var step = it2.next();
        normalCompletion = step.done;
        return step;
      }, e: function e(_e22) {
        didErr = true;
        err = _e22;
      }, f: function f() {
        try {
          if (!normalCompletion && it2.return != null) it2.return();
        } finally {
          if (didErr) throw err;
        }
      } };
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
    function _asyncToGenerator(fn3) {
      return function() {
        var self2 = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn3.apply(self2, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    var prompts7 = require_prompts();
    var passOn = ["suggest", "format", "onState", "validate", "onRender", "type"];
    var noop = () => {
    };
    function prompt() {
      return _prompt.apply(this, arguments);
    }
    function _prompt() {
      _prompt = _asyncToGenerator(function* (questions = [], {
        onSubmit = noop,
        onCancel: onCancel2 = noop
      } = {}) {
        const answers = {};
        const override2 = prompt._override || {};
        questions = [].concat(questions);
        let answer, question, quit, name, type, lastPrompt;
        const getFormattedAnswer = /* @__PURE__ */ function() {
          var _ref = _asyncToGenerator(function* (question2, answer2, skipValidation = false) {
            if (!skipValidation && question2.validate && question2.validate(answer2) !== true) {
              return;
            }
            return question2.format ? yield question2.format(answer2, answers) : answer2;
          });
          return function getFormattedAnswer2(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();
        var _iterator = _createForOfIteratorHelper(questions), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            question = _step.value;
            var _question = question;
            name = _question.name;
            type = _question.type;
            if (typeof type === "function") {
              type = yield type(answer, _objectSpread({}, answers), question);
              question["type"] = type;
            }
            if (!type) continue;
            for (let key in question) {
              if (passOn.includes(key)) continue;
              let value = question[key];
              question[key] = typeof value === "function" ? yield value(answer, _objectSpread({}, answers), lastPrompt) : value;
            }
            lastPrompt = question;
            if (typeof question.message !== "string") {
              throw new Error("prompt message is required");
            }
            var _question2 = question;
            name = _question2.name;
            type = _question2.type;
            if (prompts7[type] === void 0) {
              throw new Error(`prompt type (${type}) is not defined`);
            }
            if (override2[question.name] !== void 0) {
              answer = yield getFormattedAnswer(question, override2[question.name]);
              if (answer !== void 0) {
                answers[name] = answer;
                continue;
              }
            }
            try {
              answer = prompt._injected ? getInjectedAnswer(prompt._injected, question.initial) : yield prompts7[type](question);
              answers[name] = answer = yield getFormattedAnswer(question, answer, true);
              quit = yield onSubmit(question, answer, answers);
            } catch (err) {
              quit = !(yield onCancel2(question, answers));
            }
            if (quit) return answers;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return answers;
      });
      return _prompt.apply(this, arguments);
    }
    function getInjectedAnswer(injected, deafultValue) {
      const answer = injected.shift();
      if (answer instanceof Error) {
        throw answer;
      }
      return answer === void 0 ? deafultValue : answer;
    }
    function inject(answers) {
      prompt._injected = (prompt._injected || []).concat(answers);
    }
    function override(answers) {
      prompt._override = Object.assign({}, answers);
    }
    module2.exports = Object.assign(prompt, {
      prompt,
      prompts: prompts7,
      inject,
      override
    });
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/action.js
var require_action2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/action.js"(exports2, module2) {
    "use strict";
    module2.exports = (key, isSelect) => {
      if (key.meta && key.name !== "escape") return;
      if (key.ctrl) {
        if (key.name === "a") return "first";
        if (key.name === "c") return "abort";
        if (key.name === "d") return "abort";
        if (key.name === "e") return "last";
        if (key.name === "g") return "reset";
      }
      if (isSelect) {
        if (key.name === "j") return "down";
        if (key.name === "k") return "up";
      }
      if (key.name === "return") return "submit";
      if (key.name === "enter") return "submit";
      if (key.name === "backspace") return "delete";
      if (key.name === "delete") return "deleteForward";
      if (key.name === "abort") return "abort";
      if (key.name === "escape") return "exit";
      if (key.name === "tab") return "next";
      if (key.name === "pagedown") return "nextPage";
      if (key.name === "pageup") return "prevPage";
      if (key.name === "home") return "home";
      if (key.name === "end") return "end";
      if (key.name === "up") return "up";
      if (key.name === "down") return "down";
      if (key.name === "right") return "right";
      if (key.name === "left") return "left";
      return false;
    };
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/strip.js
var require_strip2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/strip.js"(exports2, module2) {
    "use strict";
    module2.exports = (str) => {
      const pattern = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))"
      ].join("|");
      const RGX = new RegExp(pattern, "g");
      return typeof str === "string" ? str.replace(RGX, "") : str;
    };
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/clear.js
var require_clear2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/clear.js"(exports2, module2) {
    "use strict";
    var strip = require_strip2();
    var { erase, cursor } = require_src();
    var width = (str) => [...strip(str)].length;
    module2.exports = function(prompt, perLine) {
      if (!perLine) return erase.line + cursor.to(0);
      let rows = 0;
      const lines = prompt.split(/\r?\n/);
      for (let line of lines) {
        rows += 1 + Math.floor(Math.max(width(line) - 1, 0) / perLine);
      }
      return erase.lines(rows);
    };
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/figures.js
var require_figures2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/figures.js"(exports2, module2) {
    "use strict";
    var main = {
      arrowUp: "\u2191",
      arrowDown: "\u2193",
      arrowLeft: "\u2190",
      arrowRight: "\u2192",
      radioOn: "\u25C9",
      radioOff: "\u25EF",
      tick: "\u2714",
      cross: "\u2716",
      ellipsis: "\u2026",
      pointerSmall: "\u203A",
      line: "\u2500",
      pointer: "\u276F"
    };
    var win = {
      arrowUp: main.arrowUp,
      arrowDown: main.arrowDown,
      arrowLeft: main.arrowLeft,
      arrowRight: main.arrowRight,
      radioOn: "(*)",
      radioOff: "( )",
      tick: "\u221A",
      cross: "\xD7",
      ellipsis: "...",
      pointerSmall: "\xBB",
      line: "\u2500",
      pointer: ">"
    };
    var figures = process.platform === "win32" ? win : main;
    module2.exports = figures;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/style.js
var require_style2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/style.js"(exports2, module2) {
    "use strict";
    var c = require_kleur();
    var figures = require_figures2();
    var styles3 = Object.freeze({
      password: { scale: 1, render: (input) => "*".repeat(input.length) },
      emoji: { scale: 2, render: (input) => "\u{1F603}".repeat(input.length) },
      invisible: { scale: 0, render: (input) => "" },
      default: { scale: 1, render: (input) => `${input}` }
    });
    var render = (type) => styles3[type] || styles3.default;
    var symbols = Object.freeze({
      aborted: c.red(figures.cross),
      done: c.green(figures.tick),
      exited: c.yellow(figures.cross),
      default: c.cyan("?")
    });
    var symbol = (done, aborted, exited) => aborted ? symbols.aborted : exited ? symbols.exited : done ? symbols.done : symbols.default;
    var delimiter = (completing) => c.gray(completing ? figures.ellipsis : figures.pointerSmall);
    var item = (expandable, expanded) => c.gray(expandable ? expanded ? figures.pointerSmall : "+" : figures.line);
    module2.exports = {
      styles: styles3,
      render,
      symbols,
      symbol,
      delimiter,
      item
    };
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/lines.js
var require_lines2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/lines.js"(exports2, module2) {
    "use strict";
    var strip = require_strip2();
    module2.exports = function(msg, perLine) {
      let lines = String(strip(msg) || "").split(/\r?\n/);
      if (!perLine) return lines.length;
      return lines.map((l2) => Math.ceil(l2.length / perLine)).reduce((a, b2) => a + b2);
    };
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/wrap.js
var require_wrap2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/wrap.js"(exports2, module2) {
    "use strict";
    module2.exports = (msg, opts = {}) => {
      const tab = Number.isSafeInteger(parseInt(opts.margin)) ? new Array(parseInt(opts.margin)).fill(" ").join("") : opts.margin || "";
      const width = opts.width;
      return (msg || "").split(/\r?\n/g).map((line) => line.split(/\s+/g).reduce((arr, w2) => {
        if (w2.length + tab.length >= width || arr[arr.length - 1].length + w2.length + 1 < width)
          arr[arr.length - 1] += ` ${w2}`;
        else arr.push(`${tab}${w2}`);
        return arr;
      }, [tab]).join("\n")).join("\n");
    };
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/entriesToDisplay.js
var require_entriesToDisplay2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/entriesToDisplay.js"(exports2, module2) {
    "use strict";
    module2.exports = (cursor, total, maxVisible) => {
      maxVisible = maxVisible || total;
      let startIndex = Math.min(total - maxVisible, cursor - Math.floor(maxVisible / 2));
      if (startIndex < 0) startIndex = 0;
      let endIndex = Math.min(startIndex + maxVisible, total);
      return { startIndex, endIndex };
    };
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/index.js
var require_util2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/index.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      action: require_action2(),
      clear: require_clear2(),
      style: require_style2(),
      strip: require_strip2(),
      figures: require_figures2(),
      lines: require_lines2(),
      wrap: require_wrap2(),
      entriesToDisplay: require_entriesToDisplay2()
    };
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/prompt.js
var require_prompt2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/prompt.js"(exports2, module2) {
    "use strict";
    var readline = require("readline");
    var { action } = require_util2();
    var EventEmitter = require("events");
    var { beep, cursor } = require_src();
    var color = require_kleur();
    var Prompt = class extends EventEmitter {
      constructor(opts = {}) {
        super();
        this.firstRender = true;
        this.in = opts.stdin || process.stdin;
        this.out = opts.stdout || process.stdout;
        this.onRender = (opts.onRender || (() => void 0)).bind(this);
        const rl = readline.createInterface({ input: this.in, escapeCodeTimeout: 50 });
        readline.emitKeypressEvents(this.in, rl);
        if (this.in.isTTY) this.in.setRawMode(true);
        const isSelect = ["SelectPrompt", "MultiselectPrompt"].indexOf(this.constructor.name) > -1;
        const keypress = (str, key) => {
          let a = action(key, isSelect);
          if (a === false) {
            this._ && this._(str, key);
          } else if (typeof this[a] === "function") {
            this[a](key);
          } else {
            this.bell();
          }
        };
        this.close = () => {
          this.out.write(cursor.show);
          this.in.removeListener("keypress", keypress);
          if (this.in.isTTY) this.in.setRawMode(false);
          rl.close();
          this.emit(this.aborted ? "abort" : this.exited ? "exit" : "submit", this.value);
          this.closed = true;
        };
        this.in.on("keypress", keypress);
      }
      fire() {
        this.emit("state", {
          value: this.value,
          aborted: !!this.aborted,
          exited: !!this.exited
        });
      }
      bell() {
        this.out.write(beep);
      }
      render() {
        this.onRender(color);
        if (this.firstRender) this.firstRender = false;
      }
    };
    module2.exports = Prompt;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/text.js
var require_text2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/text.js"(exports2, module2) {
    "use strict";
    var color = require_kleur();
    var Prompt = require_prompt2();
    var { erase, cursor } = require_src();
    var { style, clear, lines, figures } = require_util2();
    var TextPrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.transform = style.render(opts.style);
        this.scale = this.transform.scale;
        this.msg = opts.message;
        this.initial = opts.initial || ``;
        this.validator = opts.validate || (() => true);
        this.value = ``;
        this.errorMsg = opts.error || `Please Enter A Valid Value`;
        this.cursor = Number(!!this.initial);
        this.cursorOffset = 0;
        this.clear = clear(``, this.out.columns);
        this.render();
      }
      set value(v) {
        if (!v && this.initial) {
          this.placeholder = true;
          this.rendered = color.gray(this.transform.render(this.initial));
        } else {
          this.placeholder = false;
          this.rendered = this.transform.render(v);
        }
        this._value = v;
        this.fire();
      }
      get value() {
        return this._value;
      }
      reset() {
        this.value = ``;
        this.cursor = Number(!!this.initial);
        this.cursorOffset = 0;
        this.fire();
        this.render();
      }
      exit() {
        this.abort();
      }
      abort() {
        this.value = this.value || this.initial;
        this.done = this.aborted = true;
        this.error = false;
        this.red = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      async validate() {
        let valid = await this.validator(this.value);
        if (typeof valid === `string`) {
          this.errorMsg = valid;
          valid = false;
        }
        this.error = !valid;
      }
      async submit() {
        this.value = this.value || this.initial;
        this.cursorOffset = 0;
        this.cursor = this.rendered.length;
        await this.validate();
        if (this.error) {
          this.red = true;
          this.fire();
          this.render();
          return;
        }
        this.done = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      next() {
        if (!this.placeholder) return this.bell();
        this.value = this.initial;
        this.cursor = this.rendered.length;
        this.fire();
        this.render();
      }
      moveCursor(n) {
        if (this.placeholder) return;
        this.cursor = this.cursor + n;
        this.cursorOffset += n;
      }
      _(c, key) {
        let s1 = this.value.slice(0, this.cursor);
        let s2 = this.value.slice(this.cursor);
        this.value = `${s1}${c}${s2}`;
        this.red = false;
        this.cursor = this.placeholder ? 0 : s1.length + 1;
        this.render();
      }
      delete() {
        if (this.isCursorAtStart()) return this.bell();
        let s1 = this.value.slice(0, this.cursor - 1);
        let s2 = this.value.slice(this.cursor);
        this.value = `${s1}${s2}`;
        this.red = false;
        if (this.isCursorAtStart()) {
          this.cursorOffset = 0;
        } else {
          this.cursorOffset++;
          this.moveCursor(-1);
        }
        this.render();
      }
      deleteForward() {
        if (this.cursor * this.scale >= this.rendered.length || this.placeholder) return this.bell();
        let s1 = this.value.slice(0, this.cursor);
        let s2 = this.value.slice(this.cursor + 1);
        this.value = `${s1}${s2}`;
        this.red = false;
        if (this.isCursorAtEnd()) {
          this.cursorOffset = 0;
        } else {
          this.cursorOffset++;
        }
        this.render();
      }
      first() {
        this.cursor = 0;
        this.render();
      }
      last() {
        this.cursor = this.value.length;
        this.render();
      }
      left() {
        if (this.cursor <= 0 || this.placeholder) return this.bell();
        this.moveCursor(-1);
        this.render();
      }
      right() {
        if (this.cursor * this.scale >= this.rendered.length || this.placeholder) return this.bell();
        this.moveCursor(1);
        this.render();
      }
      isCursorAtStart() {
        return this.cursor === 0 || this.placeholder && this.cursor === 1;
      }
      isCursorAtEnd() {
        return this.cursor === this.rendered.length || this.placeholder && this.cursor === this.rendered.length + 1;
      }
      render() {
        if (this.closed) return;
        if (!this.firstRender) {
          if (this.outputError)
            this.out.write(cursor.down(lines(this.outputError, this.out.columns) - 1) + clear(this.outputError, this.out.columns));
          this.out.write(clear(this.outputText, this.out.columns));
        }
        super.render();
        this.outputError = "";
        this.outputText = [
          style.symbol(this.done, this.aborted),
          color.bold(this.msg),
          style.delimiter(this.done),
          this.red ? color.red(this.rendered) : this.rendered
        ].join(` `);
        if (this.error) {
          this.outputError += this.errorMsg.split(`
`).reduce((a, l2, i) => a + `
${i ? " " : figures.pointerSmall} ${color.red().italic(l2)}`, ``);
        }
        this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore + cursor.move(this.cursorOffset, 0));
      }
    };
    module2.exports = TextPrompt;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/select.js
var require_select2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/select.js"(exports2, module2) {
    "use strict";
    var color = require_kleur();
    var Prompt = require_prompt2();
    var { style, clear, figures, wrap, entriesToDisplay } = require_util2();
    var { cursor } = require_src();
    var SelectPrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.msg = opts.message;
        this.hint = opts.hint || "- Use arrow-keys. Return to submit.";
        this.warn = opts.warn || "- This option is disabled";
        this.cursor = opts.initial || 0;
        this.choices = opts.choices.map((ch, idx) => {
          if (typeof ch === "string")
            ch = { title: ch, value: idx };
          return {
            title: ch && (ch.title || ch.value || ch),
            value: ch && (ch.value === void 0 ? idx : ch.value),
            description: ch && ch.description,
            selected: ch && ch.selected,
            disabled: ch && ch.disabled
          };
        });
        this.optionsPerPage = opts.optionsPerPage || 10;
        this.value = (this.choices[this.cursor] || {}).value;
        this.clear = clear("", this.out.columns);
        this.render();
      }
      moveCursor(n) {
        this.cursor = n;
        this.value = this.choices[n].value;
        this.fire();
      }
      reset() {
        this.moveCursor(0);
        this.fire();
        this.render();
      }
      exit() {
        this.abort();
      }
      abort() {
        this.done = this.aborted = true;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      submit() {
        if (!this.selection.disabled) {
          this.done = true;
          this.aborted = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        } else
          this.bell();
      }
      first() {
        this.moveCursor(0);
        this.render();
      }
      last() {
        this.moveCursor(this.choices.length - 1);
        this.render();
      }
      up() {
        if (this.cursor === 0) {
          this.moveCursor(this.choices.length - 1);
        } else {
          this.moveCursor(this.cursor - 1);
        }
        this.render();
      }
      down() {
        if (this.cursor === this.choices.length - 1) {
          this.moveCursor(0);
        } else {
          this.moveCursor(this.cursor + 1);
        }
        this.render();
      }
      next() {
        this.moveCursor((this.cursor + 1) % this.choices.length);
        this.render();
      }
      _(c, key) {
        if (c === " ") return this.submit();
      }
      get selection() {
        return this.choices[this.cursor];
      }
      render() {
        if (this.closed) return;
        if (this.firstRender) this.out.write(cursor.hide);
        else this.out.write(clear(this.outputText, this.out.columns));
        super.render();
        let { startIndex, endIndex } = entriesToDisplay(this.cursor, this.choices.length, this.optionsPerPage);
        this.outputText = [
          style.symbol(this.done, this.aborted),
          color.bold(this.msg),
          style.delimiter(false),
          this.done ? this.selection.title : this.selection.disabled ? color.yellow(this.warn) : color.gray(this.hint)
        ].join(" ");
        if (!this.done) {
          this.outputText += "\n";
          for (let i = startIndex; i < endIndex; i++) {
            let title, prefix, desc = "", v = this.choices[i];
            if (i === startIndex && startIndex > 0) {
              prefix = figures.arrowUp;
            } else if (i === endIndex - 1 && endIndex < this.choices.length) {
              prefix = figures.arrowDown;
            } else {
              prefix = " ";
            }
            if (v.disabled) {
              title = this.cursor === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
              prefix = (this.cursor === i ? color.bold().gray(figures.pointer) + " " : "  ") + prefix;
            } else {
              title = this.cursor === i ? color.cyan().underline(v.title) : v.title;
              prefix = (this.cursor === i ? color.cyan(figures.pointer) + " " : "  ") + prefix;
              if (v.description && this.cursor === i) {
                desc = ` - ${v.description}`;
                if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
                  desc = "\n" + wrap(v.description, { margin: 3, width: this.out.columns });
                }
              }
            }
            this.outputText += `${prefix} ${title}${color.gray(desc)}
`;
          }
        }
        this.out.write(this.outputText);
      }
    };
    module2.exports = SelectPrompt;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/toggle.js
var require_toggle2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/toggle.js"(exports2, module2) {
    "use strict";
    var color = require_kleur();
    var Prompt = require_prompt2();
    var { style, clear } = require_util2();
    var { cursor, erase } = require_src();
    var TogglePrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.msg = opts.message;
        this.value = !!opts.initial;
        this.active = opts.active || "on";
        this.inactive = opts.inactive || "off";
        this.initialValue = this.value;
        this.render();
      }
      reset() {
        this.value = this.initialValue;
        this.fire();
        this.render();
      }
      exit() {
        this.abort();
      }
      abort() {
        this.done = this.aborted = true;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      submit() {
        this.done = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      deactivate() {
        if (this.value === false) return this.bell();
        this.value = false;
        this.render();
      }
      activate() {
        if (this.value === true) return this.bell();
        this.value = true;
        this.render();
      }
      delete() {
        this.deactivate();
      }
      left() {
        this.deactivate();
      }
      right() {
        this.activate();
      }
      down() {
        this.deactivate();
      }
      up() {
        this.activate();
      }
      next() {
        this.value = !this.value;
        this.fire();
        this.render();
      }
      _(c, key) {
        if (c === " ") {
          this.value = !this.value;
        } else if (c === "1") {
          this.value = true;
        } else if (c === "0") {
          this.value = false;
        } else return this.bell();
        this.render();
      }
      render() {
        if (this.closed) return;
        if (this.firstRender) this.out.write(cursor.hide);
        else this.out.write(clear(this.outputText, this.out.columns));
        super.render();
        this.outputText = [
          style.symbol(this.done, this.aborted),
          color.bold(this.msg),
          style.delimiter(this.done),
          this.value ? this.inactive : color.cyan().underline(this.inactive),
          color.gray("/"),
          this.value ? color.cyan().underline(this.active) : this.active
        ].join(" ");
        this.out.write(erase.line + cursor.to(0) + this.outputText);
      }
    };
    module2.exports = TogglePrompt;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/datepart.js
var require_datepart2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/datepart.js"(exports2, module2) {
    "use strict";
    var DatePart = class _DatePart {
      constructor({ token, date, parts, locales }) {
        this.token = token;
        this.date = date || /* @__PURE__ */ new Date();
        this.parts = parts || [this];
        this.locales = locales || {};
      }
      up() {
      }
      down() {
      }
      next() {
        const currentIdx = this.parts.indexOf(this);
        return this.parts.find((part, idx) => idx > currentIdx && part instanceof _DatePart);
      }
      setTo(val) {
      }
      prev() {
        let parts = [].concat(this.parts).reverse();
        const currentIdx = parts.indexOf(this);
        return parts.find((part, idx) => idx > currentIdx && part instanceof _DatePart);
      }
      toString() {
        return String(this.date);
      }
    };
    module2.exports = DatePart;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/meridiem.js
var require_meridiem2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/meridiem.js"(exports2, module2) {
    "use strict";
    var DatePart = require_datepart2();
    var Meridiem = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setHours((this.date.getHours() + 12) % 24);
      }
      down() {
        this.up();
      }
      toString() {
        let meridiem = this.date.getHours() > 12 ? "pm" : "am";
        return /\A/.test(this.token) ? meridiem.toUpperCase() : meridiem;
      }
    };
    module2.exports = Meridiem;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/day.js
var require_day2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/day.js"(exports2, module2) {
    "use strict";
    var DatePart = require_datepart2();
    var pos = (n) => {
      n = n % 10;
      return n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th";
    };
    var Day = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setDate(this.date.getDate() + 1);
      }
      down() {
        this.date.setDate(this.date.getDate() - 1);
      }
      setTo(val) {
        this.date.setDate(parseInt(val.substr(-2)));
      }
      toString() {
        let date = this.date.getDate();
        let day = this.date.getDay();
        return this.token === "DD" ? String(date).padStart(2, "0") : this.token === "Do" ? date + pos(date) : this.token === "d" ? day + 1 : this.token === "ddd" ? this.locales.weekdaysShort[day] : this.token === "dddd" ? this.locales.weekdays[day] : date;
      }
    };
    module2.exports = Day;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/hours.js
var require_hours2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/hours.js"(exports2, module2) {
    "use strict";
    var DatePart = require_datepart2();
    var Hours = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setHours(this.date.getHours() + 1);
      }
      down() {
        this.date.setHours(this.date.getHours() - 1);
      }
      setTo(val) {
        this.date.setHours(parseInt(val.substr(-2)));
      }
      toString() {
        let hours = this.date.getHours();
        if (/h/.test(this.token))
          hours = hours % 12 || 12;
        return this.token.length > 1 ? String(hours).padStart(2, "0") : hours;
      }
    };
    module2.exports = Hours;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/milliseconds.js
var require_milliseconds2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/milliseconds.js"(exports2, module2) {
    "use strict";
    var DatePart = require_datepart2();
    var Milliseconds = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setMilliseconds(this.date.getMilliseconds() + 1);
      }
      down() {
        this.date.setMilliseconds(this.date.getMilliseconds() - 1);
      }
      setTo(val) {
        this.date.setMilliseconds(parseInt(val.substr(-this.token.length)));
      }
      toString() {
        return String(this.date.getMilliseconds()).padStart(4, "0").substr(0, this.token.length);
      }
    };
    module2.exports = Milliseconds;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/minutes.js
var require_minutes2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/minutes.js"(exports2, module2) {
    "use strict";
    var DatePart = require_datepart2();
    var Minutes = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setMinutes(this.date.getMinutes() + 1);
      }
      down() {
        this.date.setMinutes(this.date.getMinutes() - 1);
      }
      setTo(val) {
        this.date.setMinutes(parseInt(val.substr(-2)));
      }
      toString() {
        let m2 = this.date.getMinutes();
        return this.token.length > 1 ? String(m2).padStart(2, "0") : m2;
      }
    };
    module2.exports = Minutes;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/month.js
var require_month2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/month.js"(exports2, module2) {
    "use strict";
    var DatePart = require_datepart2();
    var Month = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setMonth(this.date.getMonth() + 1);
      }
      down() {
        this.date.setMonth(this.date.getMonth() - 1);
      }
      setTo(val) {
        val = parseInt(val.substr(-2)) - 1;
        this.date.setMonth(val < 0 ? 0 : val);
      }
      toString() {
        let month = this.date.getMonth();
        let tl = this.token.length;
        return tl === 2 ? String(month + 1).padStart(2, "0") : tl === 3 ? this.locales.monthsShort[month] : tl === 4 ? this.locales.months[month] : String(month + 1);
      }
    };
    module2.exports = Month;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/seconds.js
var require_seconds2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/seconds.js"(exports2, module2) {
    "use strict";
    var DatePart = require_datepart2();
    var Seconds = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setSeconds(this.date.getSeconds() + 1);
      }
      down() {
        this.date.setSeconds(this.date.getSeconds() - 1);
      }
      setTo(val) {
        this.date.setSeconds(parseInt(val.substr(-2)));
      }
      toString() {
        let s = this.date.getSeconds();
        return this.token.length > 1 ? String(s).padStart(2, "0") : s;
      }
    };
    module2.exports = Seconds;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/year.js
var require_year2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/year.js"(exports2, module2) {
    "use strict";
    var DatePart = require_datepart2();
    var Year = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setFullYear(this.date.getFullYear() + 1);
      }
      down() {
        this.date.setFullYear(this.date.getFullYear() - 1);
      }
      setTo(val) {
        this.date.setFullYear(val.substr(-4));
      }
      toString() {
        let year = String(this.date.getFullYear()).padStart(4, "0");
        return this.token.length === 2 ? year.substr(-2) : year;
      }
    };
    module2.exports = Year;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/index.js
var require_dateparts2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/index.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      DatePart: require_datepart2(),
      Meridiem: require_meridiem2(),
      Day: require_day2(),
      Hours: require_hours2(),
      Milliseconds: require_milliseconds2(),
      Minutes: require_minutes2(),
      Month: require_month2(),
      Seconds: require_seconds2(),
      Year: require_year2()
    };
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/date.js
var require_date2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/date.js"(exports2, module2) {
    "use strict";
    var color = require_kleur();
    var Prompt = require_prompt2();
    var { style, clear, figures } = require_util2();
    var { erase, cursor } = require_src();
    var { DatePart, Meridiem, Day, Hours, Milliseconds, Minutes, Month, Seconds, Year } = require_dateparts2();
    var regex = /\\(.)|"((?:\\["\\]|[^"])+)"|(D[Do]?|d{3,4}|d)|(M{1,4})|(YY(?:YY)?)|([aA])|([Hh]{1,2})|(m{1,2})|(s{1,2})|(S{1,4})|./g;
    var regexGroups = {
      1: ({ token }) => token.replace(/\\(.)/g, "$1"),
      2: (opts) => new Day(opts),
      // Day // TODO
      3: (opts) => new Month(opts),
      // Month
      4: (opts) => new Year(opts),
      // Year
      5: (opts) => new Meridiem(opts),
      // AM/PM // TODO (special)
      6: (opts) => new Hours(opts),
      // Hours
      7: (opts) => new Minutes(opts),
      // Minutes
      8: (opts) => new Seconds(opts),
      // Seconds
      9: (opts) => new Milliseconds(opts)
      // Fractional seconds
    };
    var dfltLocales = {
      months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
      monthsShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
      weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
      weekdaysShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",")
    };
    var DatePrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.msg = opts.message;
        this.cursor = 0;
        this.typed = "";
        this.locales = Object.assign(dfltLocales, opts.locales);
        this._date = opts.initial || /* @__PURE__ */ new Date();
        this.errorMsg = opts.error || "Please Enter A Valid Value";
        this.validator = opts.validate || (() => true);
        this.mask = opts.mask || "YYYY-MM-DD HH:mm:ss";
        this.clear = clear("", this.out.columns);
        this.render();
      }
      get value() {
        return this.date;
      }
      get date() {
        return this._date;
      }
      set date(date) {
        if (date) this._date.setTime(date.getTime());
      }
      set mask(mask) {
        let result;
        this.parts = [];
        while (result = regex.exec(mask)) {
          let match = result.shift();
          let idx = result.findIndex((gr) => gr != null);
          this.parts.push(idx in regexGroups ? regexGroups[idx]({ token: result[idx] || match, date: this.date, parts: this.parts, locales: this.locales }) : result[idx] || match);
        }
        let parts = this.parts.reduce((arr, i) => {
          if (typeof i === "string" && typeof arr[arr.length - 1] === "string")
            arr[arr.length - 1] += i;
          else arr.push(i);
          return arr;
        }, []);
        this.parts.splice(0);
        this.parts.push(...parts);
        this.reset();
      }
      moveCursor(n) {
        this.typed = "";
        this.cursor = n;
        this.fire();
      }
      reset() {
        this.moveCursor(this.parts.findIndex((p) => p instanceof DatePart));
        this.fire();
        this.render();
      }
      exit() {
        this.abort();
      }
      abort() {
        this.done = this.aborted = true;
        this.error = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      async validate() {
        let valid = await this.validator(this.value);
        if (typeof valid === "string") {
          this.errorMsg = valid;
          valid = false;
        }
        this.error = !valid;
      }
      async submit() {
        await this.validate();
        if (this.error) {
          this.color = "red";
          this.fire();
          this.render();
          return;
        }
        this.done = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      up() {
        this.typed = "";
        this.parts[this.cursor].up();
        this.render();
      }
      down() {
        this.typed = "";
        this.parts[this.cursor].down();
        this.render();
      }
      left() {
        let prev = this.parts[this.cursor].prev();
        if (prev == null) return this.bell();
        this.moveCursor(this.parts.indexOf(prev));
        this.render();
      }
      right() {
        let next = this.parts[this.cursor].next();
        if (next == null) return this.bell();
        this.moveCursor(this.parts.indexOf(next));
        this.render();
      }
      next() {
        let next = this.parts[this.cursor].next();
        this.moveCursor(next ? this.parts.indexOf(next) : this.parts.findIndex((part) => part instanceof DatePart));
        this.render();
      }
      _(c) {
        if (/\d/.test(c)) {
          this.typed += c;
          this.parts[this.cursor].setTo(this.typed);
          this.render();
        }
      }
      render() {
        if (this.closed) return;
        if (this.firstRender) this.out.write(cursor.hide);
        else this.out.write(clear(this.outputText, this.out.columns));
        super.render();
        this.outputText = [
          style.symbol(this.done, this.aborted),
          color.bold(this.msg),
          style.delimiter(false),
          this.parts.reduce((arr, p, idx) => arr.concat(idx === this.cursor && !this.done ? color.cyan().underline(p.toString()) : p), []).join("")
        ].join(" ");
        if (this.error) {
          this.outputText += this.errorMsg.split("\n").reduce(
            (a, l2, i) => a + `
${i ? ` ` : figures.pointerSmall} ${color.red().italic(l2)}`,
            ``
          );
        }
        this.out.write(erase.line + cursor.to(0) + this.outputText);
      }
    };
    module2.exports = DatePrompt;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/number.js
var require_number2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/number.js"(exports2, module2) {
    "use strict";
    var color = require_kleur();
    var Prompt = require_prompt2();
    var { cursor, erase } = require_src();
    var { style, figures, clear, lines } = require_util2();
    var isNumber = /[0-9]/;
    var isDef = (any) => any !== void 0;
    var round = (number, precision) => {
      let factor = Math.pow(10, precision);
      return Math.round(number * factor) / factor;
    };
    var NumberPrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.transform = style.render(opts.style);
        this.msg = opts.message;
        this.initial = isDef(opts.initial) ? opts.initial : "";
        this.float = !!opts.float;
        this.round = opts.round || 2;
        this.inc = opts.increment || 1;
        this.min = isDef(opts.min) ? opts.min : -Infinity;
        this.max = isDef(opts.max) ? opts.max : Infinity;
        this.errorMsg = opts.error || `Please Enter A Valid Value`;
        this.validator = opts.validate || (() => true);
        this.color = `cyan`;
        this.value = ``;
        this.typed = ``;
        this.lastHit = 0;
        this.render();
      }
      set value(v) {
        if (!v && v !== 0) {
          this.placeholder = true;
          this.rendered = color.gray(this.transform.render(`${this.initial}`));
          this._value = ``;
        } else {
          this.placeholder = false;
          this.rendered = this.transform.render(`${round(v, this.round)}`);
          this._value = round(v, this.round);
        }
        this.fire();
      }
      get value() {
        return this._value;
      }
      parse(x3) {
        return this.float ? parseFloat(x3) : parseInt(x3);
      }
      valid(c) {
        return c === `-` || c === `.` && this.float || isNumber.test(c);
      }
      reset() {
        this.typed = ``;
        this.value = ``;
        this.fire();
        this.render();
      }
      exit() {
        this.abort();
      }
      abort() {
        let x3 = this.value;
        this.value = x3 !== `` ? x3 : this.initial;
        this.done = this.aborted = true;
        this.error = false;
        this.fire();
        this.render();
        this.out.write(`
`);
        this.close();
      }
      async validate() {
        let valid = await this.validator(this.value);
        if (typeof valid === `string`) {
          this.errorMsg = valid;
          valid = false;
        }
        this.error = !valid;
      }
      async submit() {
        await this.validate();
        if (this.error) {
          this.color = `red`;
          this.fire();
          this.render();
          return;
        }
        let x3 = this.value;
        this.value = x3 !== `` ? x3 : this.initial;
        this.done = true;
        this.aborted = false;
        this.error = false;
        this.fire();
        this.render();
        this.out.write(`
`);
        this.close();
      }
      up() {
        this.typed = ``;
        if (this.value === "") {
          this.value = this.min - this.inc;
        }
        if (this.value >= this.max) return this.bell();
        this.value += this.inc;
        this.color = `cyan`;
        this.fire();
        this.render();
      }
      down() {
        this.typed = ``;
        if (this.value === "") {
          this.value = this.min + this.inc;
        }
        if (this.value <= this.min) return this.bell();
        this.value -= this.inc;
        this.color = `cyan`;
        this.fire();
        this.render();
      }
      delete() {
        let val = this.value.toString();
        if (val.length === 0) return this.bell();
        this.value = this.parse(val = val.slice(0, -1)) || ``;
        if (this.value !== "" && this.value < this.min) {
          this.value = this.min;
        }
        this.color = `cyan`;
        this.fire();
        this.render();
      }
      next() {
        this.value = this.initial;
        this.fire();
        this.render();
      }
      _(c, key) {
        if (!this.valid(c)) return this.bell();
        const now = Date.now();
        if (now - this.lastHit > 1e3) this.typed = ``;
        this.typed += c;
        this.lastHit = now;
        this.color = `cyan`;
        if (c === `.`) return this.fire();
        this.value = Math.min(this.parse(this.typed), this.max);
        if (this.value > this.max) this.value = this.max;
        if (this.value < this.min) this.value = this.min;
        this.fire();
        this.render();
      }
      render() {
        if (this.closed) return;
        if (!this.firstRender) {
          if (this.outputError)
            this.out.write(cursor.down(lines(this.outputError, this.out.columns) - 1) + clear(this.outputError, this.out.columns));
          this.out.write(clear(this.outputText, this.out.columns));
        }
        super.render();
        this.outputError = "";
        this.outputText = [
          style.symbol(this.done, this.aborted),
          color.bold(this.msg),
          style.delimiter(this.done),
          !this.done || !this.done && !this.placeholder ? color[this.color]().underline(this.rendered) : this.rendered
        ].join(` `);
        if (this.error) {
          this.outputError += this.errorMsg.split(`
`).reduce((a, l2, i) => a + `
${i ? ` ` : figures.pointerSmall} ${color.red().italic(l2)}`, ``);
        }
        this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore);
      }
    };
    module2.exports = NumberPrompt;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/multiselect.js
var require_multiselect2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/multiselect.js"(exports2, module2) {
    "use strict";
    var color = require_kleur();
    var { cursor } = require_src();
    var Prompt = require_prompt2();
    var { clear, figures, style, wrap, entriesToDisplay } = require_util2();
    var MultiselectPrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.msg = opts.message;
        this.cursor = opts.cursor || 0;
        this.scrollIndex = opts.cursor || 0;
        this.hint = opts.hint || "";
        this.warn = opts.warn || "- This option is disabled -";
        this.minSelected = opts.min;
        this.showMinError = false;
        this.maxChoices = opts.max;
        this.instructions = opts.instructions;
        this.optionsPerPage = opts.optionsPerPage || 10;
        this.value = opts.choices.map((ch, idx) => {
          if (typeof ch === "string")
            ch = { title: ch, value: idx };
          return {
            title: ch && (ch.title || ch.value || ch),
            description: ch && ch.description,
            value: ch && (ch.value === void 0 ? idx : ch.value),
            selected: ch && ch.selected,
            disabled: ch && ch.disabled
          };
        });
        this.clear = clear("", this.out.columns);
        if (!opts.overrideRender) {
          this.render();
        }
      }
      reset() {
        this.value.map((v) => !v.selected);
        this.cursor = 0;
        this.fire();
        this.render();
      }
      selected() {
        return this.value.filter((v) => v.selected);
      }
      exit() {
        this.abort();
      }
      abort() {
        this.done = this.aborted = true;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      submit() {
        const selected = this.value.filter((e) => e.selected);
        if (this.minSelected && selected.length < this.minSelected) {
          this.showMinError = true;
          this.render();
        } else {
          this.done = true;
          this.aborted = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
      }
      first() {
        this.cursor = 0;
        this.render();
      }
      last() {
        this.cursor = this.value.length - 1;
        this.render();
      }
      next() {
        this.cursor = (this.cursor + 1) % this.value.length;
        this.render();
      }
      up() {
        if (this.cursor === 0) {
          this.cursor = this.value.length - 1;
        } else {
          this.cursor--;
        }
        this.render();
      }
      down() {
        if (this.cursor === this.value.length - 1) {
          this.cursor = 0;
        } else {
          this.cursor++;
        }
        this.render();
      }
      left() {
        this.value[this.cursor].selected = false;
        this.render();
      }
      right() {
        if (this.value.filter((e) => e.selected).length >= this.maxChoices) return this.bell();
        this.value[this.cursor].selected = true;
        this.render();
      }
      handleSpaceToggle() {
        const v = this.value[this.cursor];
        if (v.selected) {
          v.selected = false;
          this.render();
        } else if (v.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
          return this.bell();
        } else {
          v.selected = true;
          this.render();
        }
      }
      toggleAll() {
        if (this.maxChoices !== void 0 || this.value[this.cursor].disabled) {
          return this.bell();
        }
        const newSelected = !this.value[this.cursor].selected;
        this.value.filter((v) => !v.disabled).forEach((v) => v.selected = newSelected);
        this.render();
      }
      _(c, key) {
        if (c === " ") {
          this.handleSpaceToggle();
        } else if (c === "a") {
          this.toggleAll();
        } else {
          return this.bell();
        }
      }
      renderInstructions() {
        if (this.instructions === void 0 || this.instructions) {
          if (typeof this.instructions === "string") {
            return this.instructions;
          }
          return `
Instructions:
    ${figures.arrowUp}/${figures.arrowDown}: Highlight option
    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection
` + (this.maxChoices === void 0 ? `    a: Toggle all
` : "") + `    enter/return: Complete answer`;
        }
        return "";
      }
      renderOption(cursor2, v, i, arrowIndicator) {
        const prefix = (v.selected ? color.green(figures.radioOn) : figures.radioOff) + " " + arrowIndicator + " ";
        let title, desc;
        if (v.disabled) {
          title = cursor2 === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
        } else {
          title = cursor2 === i ? color.cyan().underline(v.title) : v.title;
          if (cursor2 === i && v.description) {
            desc = ` - ${v.description}`;
            if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
              desc = "\n" + wrap(v.description, { margin: prefix.length, width: this.out.columns });
            }
          }
        }
        return prefix + title + color.gray(desc || "");
      }
      // shared with autocompleteMultiselect
      paginateOptions(options) {
        if (options.length === 0) {
          return color.red("No matches for this query.");
        }
        let { startIndex, endIndex } = entriesToDisplay(this.cursor, options.length, this.optionsPerPage);
        let prefix, styledOptions = [];
        for (let i = startIndex; i < endIndex; i++) {
          if (i === startIndex && startIndex > 0) {
            prefix = figures.arrowUp;
          } else if (i === endIndex - 1 && endIndex < options.length) {
            prefix = figures.arrowDown;
          } else {
            prefix = " ";
          }
          styledOptions.push(this.renderOption(this.cursor, options[i], i, prefix));
        }
        return "\n" + styledOptions.join("\n");
      }
      // shared with autocomleteMultiselect
      renderOptions(options) {
        if (!this.done) {
          return this.paginateOptions(options);
        }
        return "";
      }
      renderDoneOrInstructions() {
        if (this.done) {
          return this.value.filter((e) => e.selected).map((v) => v.title).join(", ");
        }
        const output = [color.gray(this.hint), this.renderInstructions()];
        if (this.value[this.cursor].disabled) {
          output.push(color.yellow(this.warn));
        }
        return output.join(" ");
      }
      render() {
        if (this.closed) return;
        if (this.firstRender) this.out.write(cursor.hide);
        super.render();
        let prompt = [
          style.symbol(this.done, this.aborted),
          color.bold(this.msg),
          style.delimiter(false),
          this.renderDoneOrInstructions()
        ].join(" ");
        if (this.showMinError) {
          prompt += color.red(`You must select a minimum of ${this.minSelected} choices.`);
          this.showMinError = false;
        }
        prompt += this.renderOptions(this.value);
        this.out.write(this.clear + prompt);
        this.clear = clear(prompt, this.out.columns);
      }
    };
    module2.exports = MultiselectPrompt;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/autocomplete.js
var require_autocomplete2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/autocomplete.js"(exports2, module2) {
    "use strict";
    var color = require_kleur();
    var Prompt = require_prompt2();
    var { erase, cursor } = require_src();
    var { style, clear, figures, wrap, entriesToDisplay } = require_util2();
    var getVal = (arr, i) => arr[i] && (arr[i].value || arr[i].title || arr[i]);
    var getTitle = (arr, i) => arr[i] && (arr[i].title || arr[i].value || arr[i]);
    var getIndex = (arr, valOrTitle) => {
      const index = arr.findIndex((el) => el.value === valOrTitle || el.title === valOrTitle);
      return index > -1 ? index : void 0;
    };
    var AutocompletePrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.msg = opts.message;
        this.suggest = opts.suggest;
        this.choices = opts.choices;
        this.initial = typeof opts.initial === "number" ? opts.initial : getIndex(opts.choices, opts.initial);
        this.select = this.initial || opts.cursor || 0;
        this.i18n = { noMatches: opts.noMatches || "no matches found" };
        this.fallback = opts.fallback || this.initial;
        this.clearFirst = opts.clearFirst || false;
        this.suggestions = [];
        this.input = "";
        this.limit = opts.limit || 10;
        this.cursor = 0;
        this.transform = style.render(opts.style);
        this.scale = this.transform.scale;
        this.render = this.render.bind(this);
        this.complete = this.complete.bind(this);
        this.clear = clear("", this.out.columns);
        this.complete(this.render);
        this.render();
      }
      set fallback(fb) {
        this._fb = Number.isSafeInteger(parseInt(fb)) ? parseInt(fb) : fb;
      }
      get fallback() {
        let choice;
        if (typeof this._fb === "number")
          choice = this.choices[this._fb];
        else if (typeof this._fb === "string")
          choice = { title: this._fb };
        return choice || this._fb || { title: this.i18n.noMatches };
      }
      moveSelect(i) {
        this.select = i;
        if (this.suggestions.length > 0)
          this.value = getVal(this.suggestions, i);
        else this.value = this.fallback.value;
        this.fire();
      }
      async complete(cb) {
        const p = this.completing = this.suggest(this.input, this.choices);
        const suggestions = await p;
        if (this.completing !== p) return;
        this.suggestions = suggestions.map((s, i, arr) => ({ title: getTitle(arr, i), value: getVal(arr, i), description: s.description }));
        this.completing = false;
        const l2 = Math.max(suggestions.length - 1, 0);
        this.moveSelect(Math.min(l2, this.select));
        cb && cb();
      }
      reset() {
        this.input = "";
        this.complete(() => {
          this.moveSelect(this.initial !== void 0 ? this.initial : 0);
          this.render();
        });
        this.render();
      }
      exit() {
        if (this.clearFirst && this.input.length > 0) {
          this.reset();
        } else {
          this.done = this.exited = true;
          this.aborted = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
      }
      abort() {
        this.done = this.aborted = true;
        this.exited = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      submit() {
        this.done = true;
        this.aborted = this.exited = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      _(c, key) {
        let s1 = this.input.slice(0, this.cursor);
        let s2 = this.input.slice(this.cursor);
        this.input = `${s1}${c}${s2}`;
        this.cursor = s1.length + 1;
        this.complete(this.render);
        this.render();
      }
      delete() {
        if (this.cursor === 0) return this.bell();
        let s1 = this.input.slice(0, this.cursor - 1);
        let s2 = this.input.slice(this.cursor);
        this.input = `${s1}${s2}`;
        this.complete(this.render);
        this.cursor = this.cursor - 1;
        this.render();
      }
      deleteForward() {
        if (this.cursor * this.scale >= this.rendered.length) return this.bell();
        let s1 = this.input.slice(0, this.cursor);
        let s2 = this.input.slice(this.cursor + 1);
        this.input = `${s1}${s2}`;
        this.complete(this.render);
        this.render();
      }
      first() {
        this.moveSelect(0);
        this.render();
      }
      last() {
        this.moveSelect(this.suggestions.length - 1);
        this.render();
      }
      up() {
        if (this.select === 0) {
          this.moveSelect(this.suggestions.length - 1);
        } else {
          this.moveSelect(this.select - 1);
        }
        this.render();
      }
      down() {
        if (this.select === this.suggestions.length - 1) {
          this.moveSelect(0);
        } else {
          this.moveSelect(this.select + 1);
        }
        this.render();
      }
      next() {
        if (this.select === this.suggestions.length - 1) {
          this.moveSelect(0);
        } else this.moveSelect(this.select + 1);
        this.render();
      }
      nextPage() {
        this.moveSelect(Math.min(this.select + this.limit, this.suggestions.length - 1));
        this.render();
      }
      prevPage() {
        this.moveSelect(Math.max(this.select - this.limit, 0));
        this.render();
      }
      left() {
        if (this.cursor <= 0) return this.bell();
        this.cursor = this.cursor - 1;
        this.render();
      }
      right() {
        if (this.cursor * this.scale >= this.rendered.length) return this.bell();
        this.cursor = this.cursor + 1;
        this.render();
      }
      renderOption(v, hovered, isStart, isEnd) {
        let desc;
        let prefix = isStart ? figures.arrowUp : isEnd ? figures.arrowDown : " ";
        let title = hovered ? color.cyan().underline(v.title) : v.title;
        prefix = (hovered ? color.cyan(figures.pointer) + " " : "  ") + prefix;
        if (v.description) {
          desc = ` - ${v.description}`;
          if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
            desc = "\n" + wrap(v.description, { margin: 3, width: this.out.columns });
          }
        }
        return prefix + " " + title + color.gray(desc || "");
      }
      render() {
        if (this.closed) return;
        if (this.firstRender) this.out.write(cursor.hide);
        else this.out.write(clear(this.outputText, this.out.columns));
        super.render();
        let { startIndex, endIndex } = entriesToDisplay(this.select, this.choices.length, this.limit);
        this.outputText = [
          style.symbol(this.done, this.aborted, this.exited),
          color.bold(this.msg),
          style.delimiter(this.completing),
          this.done && this.suggestions[this.select] ? this.suggestions[this.select].title : this.rendered = this.transform.render(this.input)
        ].join(" ");
        if (!this.done) {
          const suggestions = this.suggestions.slice(startIndex, endIndex).map((item, i) => this.renderOption(
            item,
            this.select === i + startIndex,
            i === 0 && startIndex > 0,
            i + startIndex === endIndex - 1 && endIndex < this.choices.length
          )).join("\n");
          this.outputText += `
` + (suggestions || color.gray(this.fallback.title));
        }
        this.out.write(erase.line + cursor.to(0) + this.outputText);
      }
    };
    module2.exports = AutocompletePrompt;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/autocompleteMultiselect.js
var require_autocompleteMultiselect2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/autocompleteMultiselect.js"(exports2, module2) {
    "use strict";
    var color = require_kleur();
    var { cursor } = require_src();
    var MultiselectPrompt = require_multiselect2();
    var { clear, style, figures } = require_util2();
    var AutocompleteMultiselectPrompt = class extends MultiselectPrompt {
      constructor(opts = {}) {
        opts.overrideRender = true;
        super(opts);
        this.inputValue = "";
        this.clear = clear("", this.out.columns);
        this.filteredOptions = this.value;
        this.render();
      }
      last() {
        this.cursor = this.filteredOptions.length - 1;
        this.render();
      }
      next() {
        this.cursor = (this.cursor + 1) % this.filteredOptions.length;
        this.render();
      }
      up() {
        if (this.cursor === 0) {
          this.cursor = this.filteredOptions.length - 1;
        } else {
          this.cursor--;
        }
        this.render();
      }
      down() {
        if (this.cursor === this.filteredOptions.length - 1) {
          this.cursor = 0;
        } else {
          this.cursor++;
        }
        this.render();
      }
      left() {
        this.filteredOptions[this.cursor].selected = false;
        this.render();
      }
      right() {
        if (this.value.filter((e) => e.selected).length >= this.maxChoices) return this.bell();
        this.filteredOptions[this.cursor].selected = true;
        this.render();
      }
      delete() {
        if (this.inputValue.length) {
          this.inputValue = this.inputValue.substr(0, this.inputValue.length - 1);
          this.updateFilteredOptions();
        }
      }
      updateFilteredOptions() {
        const currentHighlight = this.filteredOptions[this.cursor];
        this.filteredOptions = this.value.filter((v) => {
          if (this.inputValue) {
            if (typeof v.title === "string") {
              if (v.title.toLowerCase().includes(this.inputValue.toLowerCase())) {
                return true;
              }
            }
            if (typeof v.value === "string") {
              if (v.value.toLowerCase().includes(this.inputValue.toLowerCase())) {
                return true;
              }
            }
            return false;
          }
          return true;
        });
        const newHighlightIndex = this.filteredOptions.findIndex((v) => v === currentHighlight);
        this.cursor = newHighlightIndex < 0 ? 0 : newHighlightIndex;
        this.render();
      }
      handleSpaceToggle() {
        const v = this.filteredOptions[this.cursor];
        if (v.selected) {
          v.selected = false;
          this.render();
        } else if (v.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
          return this.bell();
        } else {
          v.selected = true;
          this.render();
        }
      }
      handleInputChange(c) {
        this.inputValue = this.inputValue + c;
        this.updateFilteredOptions();
      }
      _(c, key) {
        if (c === " ") {
          this.handleSpaceToggle();
        } else {
          this.handleInputChange(c);
        }
      }
      renderInstructions() {
        if (this.instructions === void 0 || this.instructions) {
          if (typeof this.instructions === "string") {
            return this.instructions;
          }
          return `
Instructions:
    ${figures.arrowUp}/${figures.arrowDown}: Highlight option
    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection
    [a,b,c]/delete: Filter choices
    enter/return: Complete answer
`;
        }
        return "";
      }
      renderCurrentInput() {
        return `
Filtered results for: ${this.inputValue ? this.inputValue : color.gray("Enter something to filter")}
`;
      }
      renderOption(cursor2, v, i) {
        let title;
        if (v.disabled) title = cursor2 === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
        else title = cursor2 === i ? color.cyan().underline(v.title) : v.title;
        return (v.selected ? color.green(figures.radioOn) : figures.radioOff) + "  " + title;
      }
      renderDoneOrInstructions() {
        if (this.done) {
          return this.value.filter((e) => e.selected).map((v) => v.title).join(", ");
        }
        const output = [color.gray(this.hint), this.renderInstructions(), this.renderCurrentInput()];
        if (this.filteredOptions.length && this.filteredOptions[this.cursor].disabled) {
          output.push(color.yellow(this.warn));
        }
        return output.join(" ");
      }
      render() {
        if (this.closed) return;
        if (this.firstRender) this.out.write(cursor.hide);
        super.render();
        let prompt = [
          style.symbol(this.done, this.aborted),
          color.bold(this.msg),
          style.delimiter(false),
          this.renderDoneOrInstructions()
        ].join(" ");
        if (this.showMinError) {
          prompt += color.red(`You must select a minimum of ${this.minSelected} choices.`);
          this.showMinError = false;
        }
        prompt += this.renderOptions(this.filteredOptions);
        this.out.write(this.clear + prompt);
        this.clear = clear(prompt, this.out.columns);
      }
    };
    module2.exports = AutocompleteMultiselectPrompt;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/confirm.js
var require_confirm2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/confirm.js"(exports2, module2) {
    "use strict";
    var color = require_kleur();
    var Prompt = require_prompt2();
    var { style, clear } = require_util2();
    var { erase, cursor } = require_src();
    var ConfirmPrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.msg = opts.message;
        this.value = opts.initial;
        this.initialValue = !!opts.initial;
        this.yesMsg = opts.yes || "yes";
        this.yesOption = opts.yesOption || "(Y/n)";
        this.noMsg = opts.no || "no";
        this.noOption = opts.noOption || "(y/N)";
        this.render();
      }
      reset() {
        this.value = this.initialValue;
        this.fire();
        this.render();
      }
      exit() {
        this.abort();
      }
      abort() {
        this.done = this.aborted = true;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      submit() {
        this.value = this.value || false;
        this.done = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      _(c, key) {
        if (c.toLowerCase() === "y") {
          this.value = true;
          return this.submit();
        }
        if (c.toLowerCase() === "n") {
          this.value = false;
          return this.submit();
        }
        return this.bell();
      }
      render() {
        if (this.closed) return;
        if (this.firstRender) this.out.write(cursor.hide);
        else this.out.write(clear(this.outputText, this.out.columns));
        super.render();
        this.outputText = [
          style.symbol(this.done, this.aborted),
          color.bold(this.msg),
          style.delimiter(this.done),
          this.done ? this.value ? this.yesMsg : this.noMsg : color.gray(this.initialValue ? this.yesOption : this.noOption)
        ].join(" ");
        this.out.write(erase.line + cursor.to(0) + this.outputText);
      }
    };
    module2.exports = ConfirmPrompt;
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/index.js
var require_elements2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/index.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      TextPrompt: require_text2(),
      SelectPrompt: require_select2(),
      TogglePrompt: require_toggle2(),
      DatePrompt: require_date2(),
      NumberPrompt: require_number2(),
      MultiselectPrompt: require_multiselect2(),
      AutocompletePrompt: require_autocomplete2(),
      AutocompleteMultiselectPrompt: require_autocompleteMultiselect2(),
      ConfirmPrompt: require_confirm2()
    };
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/prompts.js
var require_prompts2 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/prompts.js"(exports2) {
    "use strict";
    var $2 = exports2;
    var el = require_elements2();
    var noop = (v) => v;
    function toPrompt(type, args, opts = {}) {
      return new Promise((res, rej) => {
        const p = new el[type](args);
        const onAbort = opts.onAbort || noop;
        const onSubmit = opts.onSubmit || noop;
        const onExit = opts.onExit || noop;
        p.on("state", args.onState || noop);
        p.on("submit", (x3) => res(onSubmit(x3)));
        p.on("exit", (x3) => res(onExit(x3)));
        p.on("abort", (x3) => rej(onAbort(x3)));
      });
    }
    $2.text = (args) => toPrompt("TextPrompt", args);
    $2.password = (args) => {
      args.style = "password";
      return $2.text(args);
    };
    $2.invisible = (args) => {
      args.style = "invisible";
      return $2.text(args);
    };
    $2.number = (args) => toPrompt("NumberPrompt", args);
    $2.date = (args) => toPrompt("DatePrompt", args);
    $2.confirm = (args) => toPrompt("ConfirmPrompt", args);
    $2.list = (args) => {
      const sep = args.separator || ",";
      return toPrompt("TextPrompt", args, {
        onSubmit: (str) => str.split(sep).map((s) => s.trim())
      });
    };
    $2.toggle = (args) => toPrompt("TogglePrompt", args);
    $2.select = (args) => toPrompt("SelectPrompt", args);
    $2.multiselect = (args) => {
      args.choices = [].concat(args.choices || []);
      const toSelected = (items) => items.filter((item) => item.selected).map((item) => item.value);
      return toPrompt("MultiselectPrompt", args, {
        onAbort: toSelected,
        onSubmit: toSelected
      });
    };
    $2.autocompleteMultiselect = (args) => {
      args.choices = [].concat(args.choices || []);
      const toSelected = (items) => items.filter((item) => item.selected).map((item) => item.value);
      return toPrompt("AutocompleteMultiselectPrompt", args, {
        onAbort: toSelected,
        onSubmit: toSelected
      });
    };
    var byTitle = (input, choices) => Promise.resolve(
      choices.filter((item) => item.title.slice(0, input.length).toLowerCase() === input.toLowerCase())
    );
    $2.autocomplete = (args) => {
      args.suggest = args.suggest || byTitle;
      args.choices = [].concat(args.choices || []);
      return toPrompt("AutocompletePrompt", args);
    };
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/index.js
var require_lib = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/index.js"(exports2, module2) {
    "use strict";
    var prompts7 = require_prompts2();
    var passOn = ["suggest", "format", "onState", "validate", "onRender", "type"];
    var noop = () => {
    };
    async function prompt(questions = [], { onSubmit = noop, onCancel: onCancel2 = noop } = {}) {
      const answers = {};
      const override2 = prompt._override || {};
      questions = [].concat(questions);
      let answer, question, quit, name, type, lastPrompt;
      const getFormattedAnswer = async (question2, answer2, skipValidation = false) => {
        if (!skipValidation && question2.validate && question2.validate(answer2) !== true) {
          return;
        }
        return question2.format ? await question2.format(answer2, answers) : answer2;
      };
      for (question of questions) {
        ({ name, type } = question);
        if (typeof type === "function") {
          type = await type(answer, { ...answers }, question);
          question["type"] = type;
        }
        if (!type) continue;
        for (let key in question) {
          if (passOn.includes(key)) continue;
          let value = question[key];
          question[key] = typeof value === "function" ? await value(answer, { ...answers }, lastPrompt) : value;
        }
        lastPrompt = question;
        if (typeof question.message !== "string") {
          throw new Error("prompt message is required");
        }
        ({ name, type } = question);
        if (prompts7[type] === void 0) {
          throw new Error(`prompt type (${type}) is not defined`);
        }
        if (override2[question.name] !== void 0) {
          answer = await getFormattedAnswer(question, override2[question.name]);
          if (answer !== void 0) {
            answers[name] = answer;
            continue;
          }
        }
        try {
          answer = prompt._injected ? getInjectedAnswer(prompt._injected, question.initial) : await prompts7[type](question);
          answers[name] = answer = await getFormattedAnswer(question, answer, true);
          quit = await onSubmit(question, answer, answers);
        } catch (err) {
          quit = !await onCancel2(question, answers);
        }
        if (quit) return answers;
      }
      return answers;
    }
    function getInjectedAnswer(injected, deafultValue) {
      const answer = injected.shift();
      if (answer instanceof Error) {
        throw answer;
      }
      return answer === void 0 ? deafultValue : answer;
    }
    function inject(answers) {
      prompt._injected = (prompt._injected || []).concat(answers);
    }
    function override(answers) {
      prompt._override = Object.assign({}, answers);
    }
    module2.exports = Object.assign(prompt, { prompt, prompts: prompts7, inject, override });
  }
});

// node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/index.js
var require_prompts3 = __commonJS({
  "node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/index.js"(exports2, module2) {
    "use strict";
    function isNodeLT(tar) {
      tar = (Array.isArray(tar) ? tar : tar.split(".")).map(Number);
      let i = 0, src = process.versions.node.split(".").map(Number);
      for (; i < tar.length; i++) {
        if (src[i] > tar[i]) return false;
        if (tar[i] > src[i]) return true;
      }
      return false;
    }
    module2.exports = isNodeLT("8.6.0") ? require_dist() : require_lib();
  }
});

// src/domain/cli-args-agg/index.ts
var import_reactivity4 = __toESM(require_reactivity(), 1);

// node_modules/.pnpm/commander@12.1.0/node_modules/commander/esm.mjs
var import_index = __toESM(require_commander(), 1);
var {
  program,
  createCommand,
  createArgument,
  createOption,
  CommanderError,
  InvalidArgumentError,
  InvalidOptionArgumentError,
  // deprecated old name
  Command,
  Argument,
  Option,
  Help
} = import_index.default;

// src/domain/cli-args-agg/index.ts
var import_prompts6 = __toESM(require_prompts3(), 1);

// node_modules/.pnpm/chalk@5.4.1/node_modules/chalk/source/vendor/ansi-styles/index.js
var ANSI_BACKGROUND_OFFSET = 10;
var wrapAnsi16 = (offset = 0) => (code) => `\x1B[${code + offset}m`;
var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
var styles = {
  modifier: {
    reset: [0, 0],
    // 21 isn't widely supported and 22 does the same thing
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    overline: [53, 55],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29]
  },
  color: {
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    // Bright color
    blackBright: [90, 39],
    gray: [90, 39],
    // Alias of `blackBright`
    grey: [90, 39],
    // Alias of `blackBright`
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39]
  },
  bgColor: {
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    // Bright color
    bgBlackBright: [100, 49],
    bgGray: [100, 49],
    // Alias of `bgBlackBright`
    bgGrey: [100, 49],
    // Alias of `bgBlackBright`
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49]
  }
};
var modifierNames = Object.keys(styles.modifier);
var foregroundColorNames = Object.keys(styles.color);
var backgroundColorNames = Object.keys(styles.bgColor);
var colorNames = [...foregroundColorNames, ...backgroundColorNames];
function assembleStyles() {
  const codes = /* @__PURE__ */ new Map();
  for (const [groupName, group] of Object.entries(styles)) {
    for (const [styleName, style] of Object.entries(group)) {
      styles[styleName] = {
        open: `\x1B[${style[0]}m`,
        close: `\x1B[${style[1]}m`
      };
      group[styleName] = styles[styleName];
      codes.set(style[0], style[1]);
    }
    Object.defineProperty(styles, groupName, {
      value: group,
      enumerable: false
    });
  }
  Object.defineProperty(styles, "codes", {
    value: codes,
    enumerable: false
  });
  styles.color.close = "\x1B[39m";
  styles.bgColor.close = "\x1B[49m";
  styles.color.ansi = wrapAnsi16();
  styles.color.ansi256 = wrapAnsi256();
  styles.color.ansi16m = wrapAnsi16m();
  styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
  Object.defineProperties(styles, {
    rgbToAnsi256: {
      value(red, green, blue) {
        if (red === green && green === blue) {
          if (red < 8) {
            return 16;
          }
          if (red > 248) {
            return 231;
          }
          return Math.round((red - 8) / 247 * 24) + 232;
        }
        return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
      },
      enumerable: false
    },
    hexToRgb: {
      value(hex) {
        const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
        if (!matches) {
          return [0, 0, 0];
        }
        let [colorString] = matches;
        if (colorString.length === 3) {
          colorString = [...colorString].map((character) => character + character).join("");
        }
        const integer = Number.parseInt(colorString, 16);
        return [
          /* eslint-disable no-bitwise */
          integer >> 16 & 255,
          integer >> 8 & 255,
          integer & 255
          /* eslint-enable no-bitwise */
        ];
      },
      enumerable: false
    },
    hexToAnsi256: {
      value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
      enumerable: false
    },
    ansi256ToAnsi: {
      value(code) {
        if (code < 8) {
          return 30 + code;
        }
        if (code < 16) {
          return 90 + (code - 8);
        }
        let red;
        let green;
        let blue;
        if (code >= 232) {
          red = ((code - 232) * 10 + 8) / 255;
          green = red;
          blue = red;
        } else {
          code -= 16;
          const remainder = code % 36;
          red = Math.floor(code / 36) / 5;
          green = Math.floor(remainder / 6) / 5;
          blue = remainder % 6 / 5;
        }
        const value = Math.max(red, green, blue) * 2;
        if (value === 0) {
          return 30;
        }
        let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
        if (value === 2) {
          result += 60;
        }
        return result;
      },
      enumerable: false
    },
    rgbToAnsi: {
      value: (red, green, blue) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue)),
      enumerable: false
    },
    hexToAnsi: {
      value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
      enumerable: false
    }
  });
  return styles;
}
var ansiStyles = assembleStyles();
var ansi_styles_default = ansiStyles;

// node_modules/.pnpm/chalk@5.4.1/node_modules/chalk/source/vendor/supports-color/index.js
var import_node_process = __toESM(require("node:process"), 1);
var import_node_os = __toESM(require("node:os"), 1);
var import_node_tty = __toESM(require("node:tty"), 1);
function hasFlag(flag, argv = globalThis.Deno ? globalThis.Deno.args : import_node_process.default.argv) {
  const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
  const position = argv.indexOf(prefix + flag);
  const terminatorPosition = argv.indexOf("--");
  return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}
var { env } = import_node_process.default;
var flagForceColor;
if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
  flagForceColor = 0;
} else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
  flagForceColor = 1;
}
function envForceColor() {
  if ("FORCE_COLOR" in env) {
    if (env.FORCE_COLOR === "true") {
      return 1;
    }
    if (env.FORCE_COLOR === "false") {
      return 0;
    }
    return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
  }
}
function translateLevel(level) {
  if (level === 0) {
    return false;
  }
  return {
    level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3
  };
}
function _supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {
  const noFlagForceColor = envForceColor();
  if (noFlagForceColor !== void 0) {
    flagForceColor = noFlagForceColor;
  }
  const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;
  if (forceColor === 0) {
    return 0;
  }
  if (sniffFlags) {
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
      return 3;
    }
    if (hasFlag("color=256")) {
      return 2;
    }
  }
  if ("TF_BUILD" in env && "AGENT_NAME" in env) {
    return 1;
  }
  if (haveStream && !streamIsTTY && forceColor === void 0) {
    return 0;
  }
  const min = forceColor || 0;
  if (env.TERM === "dumb") {
    return min;
  }
  if (import_node_process.default.platform === "win32") {
    const osRelease = import_node_os.default.release().split(".");
    if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }
    return 1;
  }
  if ("CI" in env) {
    if (["GITHUB_ACTIONS", "GITEA_ACTIONS", "CIRCLECI"].some((key) => key in env)) {
      return 3;
    }
    if (["TRAVIS", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
      return 1;
    }
    return min;
  }
  if ("TEAMCITY_VERSION" in env) {
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
  }
  if (env.COLORTERM === "truecolor") {
    return 3;
  }
  if (env.TERM === "xterm-kitty") {
    return 3;
  }
  if ("TERM_PROGRAM" in env) {
    const version = Number.parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (env.TERM_PROGRAM) {
      case "iTerm.app": {
        return version >= 3 ? 3 : 2;
      }
      case "Apple_Terminal": {
        return 2;
      }
    }
  }
  if (/-256(color)?$/i.test(env.TERM)) {
    return 2;
  }
  if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    return 1;
  }
  if ("COLORTERM" in env) {
    return 1;
  }
  return min;
}
function createSupportsColor(stream, options = {}) {
  const level = _supportsColor(stream, {
    streamIsTTY: stream && stream.isTTY,
    ...options
  });
  return translateLevel(level);
}
var supportsColor = {
  stdout: createSupportsColor({ isTTY: import_node_tty.default.isatty(1) }),
  stderr: createSupportsColor({ isTTY: import_node_tty.default.isatty(2) })
};
var supports_color_default = supportsColor;

// node_modules/.pnpm/chalk@5.4.1/node_modules/chalk/source/utilities.js
function stringReplaceAll(string, substring, replacer) {
  let index = string.indexOf(substring);
  if (index === -1) {
    return string;
  }
  const substringLength = substring.length;
  let endIndex = 0;
  let returnValue = "";
  do {
    returnValue += string.slice(endIndex, index) + substring + replacer;
    endIndex = index + substringLength;
    index = string.indexOf(substring, endIndex);
  } while (index !== -1);
  returnValue += string.slice(endIndex);
  return returnValue;
}
function stringEncaseCRLFWithFirstIndex(string, prefix, postfix, index) {
  let endIndex = 0;
  let returnValue = "";
  do {
    const gotCR = string[index - 1] === "\r";
    returnValue += string.slice(endIndex, gotCR ? index - 1 : index) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
    endIndex = index + 1;
    index = string.indexOf("\n", endIndex);
  } while (index !== -1);
  returnValue += string.slice(endIndex);
  return returnValue;
}

// node_modules/.pnpm/chalk@5.4.1/node_modules/chalk/source/index.js
var { stdout: stdoutColor, stderr: stderrColor } = supports_color_default;
var GENERATOR = Symbol("GENERATOR");
var STYLER = Symbol("STYLER");
var IS_EMPTY = Symbol("IS_EMPTY");
var levelMapping = [
  "ansi",
  "ansi",
  "ansi256",
  "ansi16m"
];
var styles2 = /* @__PURE__ */ Object.create(null);
var applyOptions = (object, options = {}) => {
  if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
    throw new Error("The `level` option should be an integer from 0 to 3");
  }
  const colorLevel = stdoutColor ? stdoutColor.level : 0;
  object.level = options.level === void 0 ? colorLevel : options.level;
};
var chalkFactory = (options) => {
  const chalk2 = (...strings) => strings.join(" ");
  applyOptions(chalk2, options);
  Object.setPrototypeOf(chalk2, createChalk.prototype);
  return chalk2;
};
function createChalk(options) {
  return chalkFactory(options);
}
Object.setPrototypeOf(createChalk.prototype, Function.prototype);
for (const [styleName, style] of Object.entries(ansi_styles_default)) {
  styles2[styleName] = {
    get() {
      const builder = createBuilder(this, createStyler(style.open, style.close, this[STYLER]), this[IS_EMPTY]);
      Object.defineProperty(this, styleName, { value: builder });
      return builder;
    }
  };
}
styles2.visible = {
  get() {
    const builder = createBuilder(this, this[STYLER], true);
    Object.defineProperty(this, "visible", { value: builder });
    return builder;
  }
};
var getModelAnsi = (model, level, type, ...arguments_) => {
  if (model === "rgb") {
    if (level === "ansi16m") {
      return ansi_styles_default[type].ansi16m(...arguments_);
    }
    if (level === "ansi256") {
      return ansi_styles_default[type].ansi256(ansi_styles_default.rgbToAnsi256(...arguments_));
    }
    return ansi_styles_default[type].ansi(ansi_styles_default.rgbToAnsi(...arguments_));
  }
  if (model === "hex") {
    return getModelAnsi("rgb", level, type, ...ansi_styles_default.hexToRgb(...arguments_));
  }
  return ansi_styles_default[type][model](...arguments_);
};
var usedModels = ["rgb", "hex", "ansi256"];
for (const model of usedModels) {
  styles2[model] = {
    get() {
      const { level } = this;
      return function(...arguments_) {
        const styler = createStyler(getModelAnsi(model, levelMapping[level], "color", ...arguments_), ansi_styles_default.color.close, this[STYLER]);
        return createBuilder(this, styler, this[IS_EMPTY]);
      };
    }
  };
  const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
  styles2[bgModel] = {
    get() {
      const { level } = this;
      return function(...arguments_) {
        const styler = createStyler(getModelAnsi(model, levelMapping[level], "bgColor", ...arguments_), ansi_styles_default.bgColor.close, this[STYLER]);
        return createBuilder(this, styler, this[IS_EMPTY]);
      };
    }
  };
}
var proto = Object.defineProperties(() => {
}, {
  ...styles2,
  level: {
    enumerable: true,
    get() {
      return this[GENERATOR].level;
    },
    set(level) {
      this[GENERATOR].level = level;
    }
  }
});
var createStyler = (open, close, parent) => {
  let openAll;
  let closeAll;
  if (parent === void 0) {
    openAll = open;
    closeAll = close;
  } else {
    openAll = parent.openAll + open;
    closeAll = close + parent.closeAll;
  }
  return {
    open,
    close,
    openAll,
    closeAll,
    parent
  };
};
var createBuilder = (self2, _styler, _isEmpty) => {
  const builder = (...arguments_) => applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
  Object.setPrototypeOf(builder, proto);
  builder[GENERATOR] = self2;
  builder[STYLER] = _styler;
  builder[IS_EMPTY] = _isEmpty;
  return builder;
};
var applyStyle = (self2, string) => {
  if (self2.level <= 0 || !string) {
    return self2[IS_EMPTY] ? "" : string;
  }
  let styler = self2[STYLER];
  if (styler === void 0) {
    return string;
  }
  const { openAll, closeAll } = styler;
  if (string.includes("\x1B")) {
    while (styler !== void 0) {
      string = stringReplaceAll(string, styler.close, styler.open);
      styler = styler.parent;
    }
  }
  const lfIndex = string.indexOf("\n");
  if (lfIndex !== -1) {
    string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
  }
  return openAll + string + closeAll;
};
Object.defineProperties(createChalk.prototype, styles2);
var chalk = createChalk();
var chalkStderr = createChalk({ level: stderrColor ? stderrColor.level : 0 });
var source_default = chalk;

// src/utils/log.ts
var log_default = {
  print(...args) {
    console.log(...args);
  },
  printError(...args) {
    console.error(this.error(...toString(...args)));
  },
  printSuccess(...args) {
    console.log(this.success(...toString(...args)));
  },
  printWarn(...args) {
    console.log(this.warn(...toString(...args)));
  },
  printInfo(...args) {
    console.log(this.info(...toString(...args)));
  },
  printDebug(...args) {
    if (process.argv.includes("--debug")) {
      console.log(this.debug(...toString(...args)));
    }
  },
  error(...args) {
    return source_default.red(...toString(...args));
  },
  success(...args) {
    return source_default.green(...toString(...args));
  },
  warn(...args) {
    return source_default.yellow(...toString(...args));
  },
  info(...args) {
    return source_default.blueBright(...toString(...args));
  },
  debug(...args) {
    return source_default.gray(...toString(...args));
  }
};
function toString(...args) {
  if (!args) {
    return [""];
  }
  return args.reduce((arr, item) => {
    if (!item) {
      arr.push("");
    }
    if (item instanceof Error) {
      arr.push(item.message + "\n" + item.stack);
    } else if (typeof item === "string") {
      arr.push(item);
    } else if (typeof item === "object") {
      arr.push(JSON.stringify(item, null, 2));
    } else {
      arr.push(item.toString());
    }
    return arr;
  }, []);
}

// src/domain/i18n-agg/index.ts
var import_reactivity2 = __toESM(require_reactivity(), 1);

// node_modules/.pnpm/vue-fn@0.1.0-beta.1_@vue+re_4ca1cd6871b8a9d3850126940100dd32/node_modules/vue-fn/domain-server/index.mjs
var import_reactivity = __toESM(require_reactivity(), 1);

// node_modules/.pnpm/vue-fn@0.1.0-beta.1_@vue+re_4ca1cd6871b8a9d3850126940100dd32/node_modules/vue-fn/index.browser-CWCjzKuA.js
var l = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
var r = (t = 21) => {
  let e = "", n = crypto.getRandomValues(new Uint8Array(t |= 0));
  for (; t--; )
    e += l[n[t] & 63];
  return e;
};

// node_modules/.pnpm/vue-fn@0.1.0-beta.1_@vue+re_4ca1cd6871b8a9d3850126940100dd32/node_modules/vue-fn/domain-server/index.mjs
function I(r2, o = true, a = false) {
  const n = (0, import_reactivity.ref)();
  let e;
  const t = (0, import_reactivity.ref)(false);
  let i = () => {
  };
  const u = new Proxy(r2, {
    apply: function(c, d, s) {
      let l2;
      try {
        l2 = c(...s);
      } catch (p) {
        l2 = p;
      }
      if (l2 instanceof Error) {
        if (n.value = l2, e = l2, o)
          throw i(), l2;
      } else
        t.value = true, n.value = void 0, e = true, i();
    }
  }), f = () => {
  }, v = new Proxy(
    (c) => {
      n.value = c;
    },
    {
      apply: function(c, d, s) {
        c(...s), f(...s);
      }
    }
  );
  return {
    promise: new Promise((c, d) => {
      if (o && e instanceof Error) {
        d(e);
        return;
      } else if (e === true) {
        c();
        return;
      }
      let s;
      a && (s = setTimeout(() => {
        const l2 = new Error("timeout!");
        n.value = l2, o && d(l2);
      }, a)), i = () => {
        s && (clearTimeout(s), s = void 0), c();
      };
    }),
    callback: u,
    onError: v,
    resolved: (0, import_reactivity.computed)(() => t.value),
    error: (0, import_reactivity.computed)(() => n.value)
  };
}
function g() {
  return r();
}
function N(r2) {
  const o = j(r2);
  return (0, import_reactivity.shallowReadonly)({
    states: o.states,
    commands: o.commands,
    events: o.events
  });
}
function j(r2) {
  const o = r2.states;
  for (const i of Object.keys(r2.states))
    o[i] = (0, import_reactivity.readonly)(o[i]);
  const a = (0, import_reactivity.shallowReadonly)(r2.states), n = (0, import_reactivity.readonly)(r2.commands), e = {}, t = r2.events;
  for (const i in r2.events)
    e[i] = t[i].api;
  return (0, import_reactivity.shallowReadonly)({
    states: a,
    commands: n,
    events: (0, import_reactivity.shallowReadonly)(e),
    destroy: r2.destroy
  });
}
function X(r2) {
  const {
    callback: o,
    onError: a,
    promise: n,
    resolved: e
  } = I(() => {
  }, false, 5e3);
  function t(c) {
    if (e.value === true)
      throw new Error("Agg already initialized");
    i.push(c());
  }
  const i = [], u = r2({
    onCreated(c) {
      Promise.resolve().then(c);
    },
    onBeforeInitialize: t,
    isInitialized: (0, import_reactivity.computed)(() => e.value),
    untilInitialized: n
  });
  setTimeout(
    () => Promise.all(i).then(() => {
      o();
    }).catch((c) => {
      a(c);
    }),
    0
  );
  const f = u.states || {}, v = u.commands || {}, h2 = u.events || {};
  return {
    __id: g(),
    type: "Singleton",
    api: N({
      states: f,
      commands: v,
      events: h2,
      destroy: () => {
      }
    }),
    isInitialized: e,
    async untilInitialized() {
      return await n.catch((c) => {
        throw new Error(`Failed to initialize Agg: ${c.message}
Stack : ${c.stack || "unkown"}`);
      });
    }
  };
}

// src/domain/i18n-agg/locale/en-US.ts
var enDict = {
  "signal.{str}": "Error: {str}",
  "signal.scriptStart": "===== Script start =====",
  "signal.successComplete": "===== Program execution succeeded =====",
  "signal.exitWithError": "===== Exit with error =====",
  "question.subcommand": "Select the business type",
  "question.subcommand.genCode": "Generate code",
  "question.subcommand.genCode.language": "Select your programming language",
  "question.subcommand.genCode.namespace": "Input your domain namespace",
  "question.subcommand.genCode.package": "Input your domain package",
  "question.subcommand.genCode.csharp.additions": "Select additional options",
  "question.subcommand.genCode.csharp.additions.timezone": "Use [DateTimeOffset] to represent time",
  "question.subcommand.genCode.csharp.additions.recordStruct": "Use record+struct value object",
  "question.subcommand.genCode.csharp.additions.primaryConstructor": "Use primary constructor",
  "question.subcommand.genCode.csharp.additions.commandHandlerInterface": "Implement custom CommandHandler interface",
  "question.subcommand.genCode.csharp.additions.commandHandlerInterface.hint": "Please enter the custom CommandHandler interface name",
  "question.subcommand.genCode.csharp.additions.aggInterface": "Implement custom Agg interface",
  "question.subcommand.genCode.csharp.additions.aggInterface.hint": "Please enter the custom Agg interface name",
  "question.subcommand.genCode.kotlin.additions": "Select additional options",
  "question.subcommand.genCode.kotlin.additions.commandHandler": "Generate CommandHandler for each command",
  "question.subcommand.genCode.kotlin.additions.valueClass": "Use value class (Kotlin1.5+)",
  "question.subcommand.genCode.kotlin.additions.timezone": "Use [OffsetDateTime] to represent time",
  "question.subcommand.genCode.java.additions": "Select additional options",
  "question.subcommand.genCode.java.additions.springFramework": "Use spring container for development",
  "question.subcommand.genCode.java.additions.lombok": "Use [@Getter, @RequiredArgsConstructor...] of lombok",
  "question.subcommand.genCode.java.additions.lombokBuilder": "Use [@Builder] of lombok to avoid long parameter lists",
  "question.subcommand.genCode.java.additions.commandHandler": "Generate CommandHandler for each command",
  "question.subcommand.genCode.java.additions.recordVakueObject": "Use [java record] to generate value object (JDK16+)",
  "question.subcommand.genCode.java.additions.timezone": "Use [OffsetDateTime] to represent time",
  "question.subcommand.genCode.java.nonNullAnnotation": "Select non-null annotation",
  "question.subcommand.genCode.additions.hint": "- Space to select. Return to submit",
  "question.subcommand.init": "Initialize project",
  "question.subcommand.updateWorkspace": "Update Workspace",
  "question.subcommand.runWeb": "Run Web server",
  "question.subcommand.runWeb.source": "Please enter the ts file directory",
  "question.subcommand.info": "[ test ]",
  "error.userCancel": "User canceled",
  "error.invalidArgs{str}": "Invalid args: {str}",
  "error.badArgs": "Bad args",
  "error.shouldBeValidDir{dir}": "{dir} should be a valid directory",
  "error.shouldBeValidWorkspaceOrEmptyDir{dir}": "{dir} should be a valid workspace or an empty directory",
  "error.shouldBeEmptyDir{dir}": "{dir} should be an empty directory",
  "error.noPackageManager": "No package manager found, please install bun or pnpm",
  "warning.needUpdate{workspaceVer}{scriptVer}": "The version between workspace and script is not the same.\nCurrent workspace version: {workspaceVer}\nCurrent script version:    {scriptVer}\nIf you want to use the local script version, please execute the update command in the workspace"
};
var en_US_default = enDict;

// src/domain/i18n-agg/locale/zh-CN.ts
var zhDict = {
  "signal.{str}": "\u9519\u8BEF: {str}",
  "signal.scriptStart": "===== \u811A\u672C\u5F00\u59CB\u6267\u884C =====",
  "signal.successComplete": "===== \u811A\u672C\u6267\u884C\u6210\u529F =====",
  "signal.exitWithError": "===== \u811A\u672C\u5F02\u5E38\u9000\u51FA =====",
  "question.subcommand": "\u8BF7\u9009\u62E9\u8981\u6267\u884C\u7684\u4E1A\u52A1\u7C7B\u578B",
  "question.subcommand.genCode": "\u751F\u6210\u4EE3\u7801",
  "question.subcommand.genCode.language": "\u9009\u62E9\u4F60\u7684\u7F16\u7A0B\u8BED\u8A00",
  "question.subcommand.genCode.namespace": "\u8F93\u5165\u9886\u57DF\u6A21\u5757\u7684namespace\u540D\u79F0",
  "question.subcommand.genCode.package": "\u8F93\u5165\u9886\u57DF\u6A21\u5757\u7684package\u540D\u79F0",
  "question.subcommand.genCode.csharp.additions": "\u9009\u62E9\u9644\u52A0\u9009\u9879",
  "question.subcommand.genCode.csharp.additions.timezone": "\u4F7F\u7528\u5305\u542B\u65F6\u533A\u7684DateTimeOffset\u8868\u793A\u65F6\u95F4",
  "question.subcommand.genCode.csharp.additions.recordStruct": "\u4F7F\u7528record+struct\u503C\u5BF9\u8C61",
  "question.subcommand.genCode.csharp.additions.primaryConstructor": "\u4F7F\u7528\u4E3B\u6784\u9020\u51FD\u6570",
  "question.subcommand.genCode.csharp.additions.commandHandlerInterface": "\u5B9E\u73B0\u81EA\u5B9A\u4E49\u7684CommandHandler\u63A5\u53E3",
  "question.subcommand.genCode.csharp.additions.commandHandlerInterface.hint": "\u8BF7\u8F93\u5165\u8981\u5B9E\u73B0\u7684\u81EA\u5B9A\u4E49CommandHandler\u63A5\u53E3\u540D\u79F0",
  "question.subcommand.genCode.csharp.additions.aggInterface": "\u5B9E\u73B0\u81EA\u5B9A\u4E49\u7684Agg\u63A5\u53E3",
  "question.subcommand.genCode.csharp.additions.aggInterface.hint": "\u8BF7\u8F93\u5165\u8981\u5B9E\u73B0\u7684\u81EA\u5B9A\u4E49Agg\u63A5\u53E3\u540D\u79F0",
  "question.subcommand.genCode.kotlin.additions": "\u9009\u62E9\u9644\u52A0\u9009\u9879",
  "question.subcommand.genCode.kotlin.additions.commandHandler": "\u4E3A\u6BCF\u4E2A\u547D\u4EE4\u751F\u6210CommandHandler",
  "question.subcommand.genCode.kotlin.additions.valueClass": "\u4F7F\u7528\u503C\u7C7B\uFF08Kotlin1.5+\uFF09",
  "question.subcommand.genCode.kotlin.additions.timezone": "\u4F7F\u7528\u5E26\u65F6\u533A\u7684OffsetDateTime\u8868\u793A\u65F6\u95F4",
  "question.subcommand.genCode.java.additions": "\u9009\u62E9\u9644\u52A0\u9009\u9879",
  "question.subcommand.genCode.java.additions.springFramework": "\u4F7F\u7528spring\u5BB9\u5668\u8FDB\u884C\u5F00\u53D1",
  "question.subcommand.genCode.java.additions.lombok": "\u4F7F\u7528lombok\u5E38\u7528\u7684Getter\u7B49\u6CE8\u89E3",
  "question.subcommand.genCode.java.additions.lombokBuilder": "\u4F7F\u7528lombok\u7684Builder\u6CE8\u89E3\u907F\u514D\u957F\u53C2\u6570\u5217\u8868",
  "question.subcommand.genCode.java.additions.commandHandler": "\u4E3A\u6BCF\u4E2A\u547D\u4EE4\u751F\u6210CommandHandler",
  "question.subcommand.genCode.java.additions.recordVakueObject": "\u4F7F\u7528record\u7C7B\u751F\u6210\u503C\u5BF9\u8C61\uFF08JDK16+\uFF09",
  "question.subcommand.genCode.java.additions.timezone": "\u4F7F\u7528\u5E26\u65F6\u533A\u7684OffsetDateTime\u8868\u793A\u65F6\u95F4",
  "question.subcommand.genCode.java.nonNullAnnotation": "\u9009\u62E9\u975E\u7A7A\u6CE8\u89E3",
  "question.subcommand.genCode.additions.hint": "- \u7A7A\u683C\u52FE\u9009\uFF0C\u56DE\u8F66\u63D0\u4EA4",
  "question.subcommand.init": "\u521D\u59CB\u5316\u9879\u76EE",
  "question.subcommand.updateWorkspace": "\u66F4\u65B0\u4F9D\u8D56",
  "question.subcommand.runWeb": "\u8FD0\u884C Web \u670D\u52A1",
  "question.subcommand.runWeb.source": "\u8BF7\u8F93\u5165ts\u6587\u4EF6\u76EE\u5F55",
  "question.subcommand.info": "\u3010\u6D4B\u8BD5\u3011",
  "error.userCancel": "\u7528\u6237\u7EC8\u6B62\u4E86\u811A\u672C\u6267\u884C",
  "error.invalidArgs{str}": "\u65E0\u6548\u7684\u53C2\u6570: {str}",
  "error.badArgs": "\u9519\u8BEF\u7684\u53C2\u6570",
  "error.shouldBeValidDir{dir}": "{dir} \u5E94\u8BE5\u662F\u4E00\u4E2A\u6709\u6548\u7684\u76EE\u5F55",
  "error.shouldBeValidWorkspaceOrEmptyDir{dir}": "{dir} \u5E94\u8BE5\u662F \u4E00\u4E2A\u7A7A\u76EE\u5F55 \u6216\u8005 \u4E00\u4E2A\u6709\u6548\u7684\u5DE5\u4F5C\u533A",
  "error.shouldBeEmptyDir{dir}": "{dir} \u5E94\u8BE5\u662F\u4E00\u4E2A\u7A7A\u76EE\u5F55",
  "error.noPackageManager": "\u672A\u627E\u5230\u5305\u7BA1\u7406\u5668,\u8BF7\u5B89\u88C5 bun \u6216 pnpm",
  "warning.needUpdate{workspaceVer}{scriptVer}": "\u68C0\u6D4B\u5230\u5DE5\u4F5C\u76EE\u5F55\u7248\u672C\u4E0E\u811A\u624B\u67B6\u7248\u672C\u4E0D\u5339\u914D\n\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u7248\u672C\uFF1A {workspaceVer}\n\u811A\u624B\u67B6\u7248\u672C\uFF1A       {scriptVer}\n\u5982\u679C\u8981\u4EE5\u672C\u5730\u811A\u624B\u67B6\u7248\u672C\u4E3A\u51C6\uFF0C\u8BF7\u6267\u884C\u5728\u5DE5\u4F5C\u76EE\u5F55\u6267\u884Cupdate\u547D\u4EE4\u8FDB\u884C\u66F4\u65B0"
};
var zh_CN_default = zhDict;

// src/domain/i18n-agg/index.ts
var agg = X(() => {
  const currentLang = (0, import_reactivity2.ref)("zh");
  const locale = (0, import_reactivity2.ref)(en_US_default);
  function t(key, attr1, attr2) {
    let v = locale.value[key];
    if (!v) {
      if (typeof attr1 === "string") {
        v = attr1;
      } else if (typeof attr2 === "string") {
        v = attr2;
      }
    }
    if (!v) {
      log_default.printWarn(`i18n not found: ${key}`);
      return "";
    }
    if (typeof attr1 === "object") {
      v = v.replace(/\{\s*([a-zA-z_]+)\s*\}/g, (_, name) => {
        return String(attr1[name]);
      });
    }
    return v;
  }
  return {
    states: {
      currentLang
    },
    commands: {
      t,
      setCurrentLang(lang) {
        if (lang === "en") {
          locale.value = en_US_default;
        } else if (lang === "zh") {
          locale.value = zh_CN_default;
        } else {
          isNever(lang);
        }
        currentLang.value = lang;
      }
    }
  };
});
function useI18nAgg() {
  return agg.api;
}

// src/utils/signal.ts
var $t = useI18nAgg().commands.t;
function onCancel() {
  throw Error($t("error.userCancel"));
}

// src/utils/package-info.ts
var package_info_default = {
  "name": "@ddd-tool/domain-designer-cli",
  "version": "0.1.0-beta.4",
  "private": true,
  "type": "module",
  "files": [
    "./src"
  ],
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ddd-tool/domain-designer-cli-node.git"
  },
  "bugs": {
    "url": "https://github.com/ddd-tool/domain-designer-cli-node/issues"
  },
  "readme": "ERROR: No README data found!",
  "homepage": "https://github.com/ddd-tool/domain-designer-cli-node#readme",
  "_id": "@ddd-tool/domain-designer-cli@0.1.0-beta.4"
};

// src/domain/environment-agg/index.ts
var import_child_process2 = require("child_process");
var import_os = __toESM(require("os"), 1);
var import_path2 = __toESM(require("path"), 1);
var import_reactivity3 = __toESM(require_reactivity(), 1);

// src/domain/environment-agg/web-root.ts
var import_child_process = require("child_process");
var import_fs = __toESM(require("fs"), 1);
var import_path = __toESM(require("path"), 1);
function findWebRoot(osType, packageManager) {
  let webRoot = import_path.default.resolve(import_path.default.dirname(process.argv[1]), "..").replace(/\\/g, "/");
  if (!verifyWebRoot(webRoot)) {
    if (packageManager === "bun" /* BUN */) {
      webRoot = import_path.default.resolve(
        import_path.default.dirname(process.argv[1]),
        "..",
        "install",
        "global",
        "node_modules",
        "@ddd-tool",
        "domain-designer-cli"
      ).replace(/\\/g, "/");
    } else if (packageManager === "pnpm" /* PNPM */ || packageManager === "npm" /* NPM */) {
      if (osType === "windows") {
        const result = (0, import_child_process.spawnSync)("where.exe domain-designer-cli", { encoding: "utf-8", shell: true });
        if (result.status !== 0) {
          throw new Error("domain-designer-cli not found");
        }
        let p = import_path.default.resolve(import_path.default.dirname(result.stdout.split("\n")[0].trim()), "..");
        if (!verifyWebRoot(p)) {
          p = import_path.default.resolve(p, "lib", "node_modules", "@ddd-tool", "domain-designer-cli");
          mustBeWebRoot(p);
        }
        webRoot = p;
      } else if (osType === "linux" || osType === "mac") {
        const result = (0, import_child_process.spawnSync)("whereis domain-designer-cli", { encoding: "utf-8", shell: true });
        if (result.status !== 0) {
          throw new Error("domain-designer-cli not found");
        }
        let p = import_path.default.resolve(import_path.default.dirname(result.stdout.split("\n")[0].split(":")[1].trim()), "..");
        if (!verifyWebRoot(p)) {
          p = import_path.default.resolve(p, "lib", "node_modules", "@ddd-tool", "domain-designer-cli");
          mustBeWebRoot(p);
        }
        webRoot = p;
      } else if (osType === "undefined") {
        throw new Error("unknown os type");
      } else {
        isNever(osType);
      }
    } else {
      throw new Error("unknown webRoot manager");
    }
  }
  return webRoot;
}
function verifyWebRoot(dirPath) {
  if (!import_fs.default.existsSync(dirPath) || !import_fs.default.statSync(dirPath).isDirectory()) {
    return false;
  }
  const templatesDir = import_path.default.join(dirPath, "templates");
  if (!import_fs.default.existsSync(templatesDir) || !import_fs.default.statSync(templatesDir).isDirectory()) {
    return false;
  }
  return true;
}
function mustBeWebRoot(dirPath) {
  if (!import_fs.default.existsSync(dirPath) || !import_fs.default.statSync(dirPath).isDirectory()) {
    throw new Error("webRoot is invalid");
  }
  const templatesDir = import_path.default.join(dirPath, "templates");
  if (!import_fs.default.existsSync(templatesDir) || !import_fs.default.statSync(templatesDir).isDirectory()) {
    throw new Error("webRoot is invalid");
  }
}

// src/domain/environment-agg/index.ts
var agg2 = X(() => {
  const debugMode = (0, import_reactivity3.ref)(false);
  const osType = (0, import_reactivity3.ref)(
    function() {
      const osType2 = import_os.default.type();
      if (osType2 === "Windows_NT") {
        return "windows" /* Windows */;
      } else if (osType2 === "Linux") {
        return "linux" /* Linux */;
      } else if (osType2 === "Darwin") {
        return "mac" /* Mac */;
      }
      return "undefined" /* Undefined */;
    }()
  );
  const executable = import_path2.default.basename(process.argv[0]);
  const packageManager = (0, import_reactivity3.ref)("npm" /* NPM */);
  if (executable.includes("bun")) {
    packageManager.value = "bun" /* BUN */;
  } else if (executable.includes("node")) {
    if (checkPnpm()) {
      packageManager.value = "pnpm" /* PNPM */;
    } else {
      packageManager.value = "npm" /* NPM */;
    }
  } else {
    throw new Error("unknown package manager");
  }
  const osLanguage = (0, import_reactivity3.ref)(
    function() {
      if (Intl && Intl.DateTimeFormat) {
        const options = Intl.DateTimeFormat().resolvedOptions();
        if (options && options.locale) {
          return options.locale;
        }
      }
      if (typeof navigator !== "undefined") {
        const nav = navigator;
        return nav.language || nav.userLanguage || nav.browserLanguage || nav.systemLanguage || "en-US";
      }
      if (typeof process !== "undefined") {
        const env2 = process.env;
        const locale = env2.LC_ALL || env2.LC_MESSAGES || env2.LANG || env2.LANGUAGE;
        return locale ? locale.split(/\./)[0].replace("_", "-") : "en-US";
      }
      return "en-US";
    }()
  );
  const webRoot = (0, import_reactivity3.ref)(findWebRoot(osType.value, packageManager.value));
  function checkBun() {
    let status = null;
    if (osType.value === "windows") {
      const cmd = "where.exe bun";
      log_default.printDebug(cmd);
      status = (0, import_child_process2.spawnSync)(cmd, { encoding: "utf-8", shell: true }).status;
    } else if (osType.value === "linux") {
      const cmd = "hash bun";
      log_default.printDebug(cmd);
      status = (0, import_child_process2.spawnSync)(cmd, { encoding: "utf-8", shell: true }).status;
    } else if (osType.value === "mac") {
      const cmd = "hash bun";
      log_default.printDebug(cmd);
      status = (0, import_child_process2.spawnSync)(cmd, { encoding: "utf-8", shell: true }).status;
    }
    return status === 0;
  }
  function checkPnpm() {
    let status = null;
    if (osType.value === "windows") {
      const cmd = "where.exe pnpm";
      log_default.printDebug(cmd);
      status = (0, import_child_process2.spawnSync)(cmd, { encoding: "utf-8", shell: true }).status;
    } else if (osType.value === "linux") {
      const cmd = "hash pnpm";
      log_default.printDebug(cmd);
      status = (0, import_child_process2.spawnSync)(cmd, { encoding: "utf-8", shell: true }).status;
    } else if (osType.value === "mac") {
      const cmd = "hash pnpm";
      log_default.printDebug(cmd);
      status = (0, import_child_process2.spawnSync)(cmd, { encoding: "utf-8", shell: true }).status;
    }
    return status === 0;
  }
  function checkNpm() {
    let status = null;
    if (osType.value === "windows") {
      const cmd = "where.exe npm";
      log_default.printDebug(cmd);
      status = (0, import_child_process2.spawnSync)(cmd, { encoding: "utf-8", shell: true }).status;
    } else if (osType.value === "linux") {
      const cmd = "hash npm";
      log_default.printDebug(cmd);
      status = (0, import_child_process2.spawnSync)(cmd, { encoding: "utf-8", shell: true }).status;
    } else if (osType.value === "mac") {
      const cmd = "hash npm";
      log_default.printDebug(cmd);
      status = (0, import_child_process2.spawnSync)(cmd, { encoding: "utf-8", shell: true }).status;
    }
    return status === 0;
  }
  return {
    states: {
      packageManager,
      webRoot,
      osLanguage,
      debugMode,
      osType
    },
    commands: {
      checkBun,
      checkNpm,
      checkPnpm,
      setDebugMode(v) {
        debugMode.value = v;
      }
    }
  };
});
function useEnvironmentAgg() {
  return agg2.api;
}

// src/domain/cli-args-agg/define.ts
function getRunWebScript() {
  const environmentAgg7 = useEnvironmentAgg();
  const packageManager = environmentAgg7.states.packageManager.value;
  const repoAddr = package_info_default.repository.url.replace(/git\+/g, "");
  const winScript = `REM App Name: Domain Designer Cli
REM Script Version: ${package_info_default.version}
REM Repo Addr: ${repoAddr}
REM Package Manager: ${packageManager}

@echo off
setlocal
set "scriptPath=%~dp0"

${packageManager === "bun" ? "bunx " : ""}domain-designer-cli runWeb --source=%scriptPath%
`;
  const linuxScript = `#!/bin/bash
# App Name: Domain Designer Cli
# Script Version: ${package_info_default.version}
# Repo Addr: ${repoAddr}
# Package Manager: ${packageManager}

${packageManager === "bun" ? "bunx " : ""}domain-designer-cli runWeb --source="$(dirname "$(realpath "$0")")"
`;
  const macScript = `#!/bin/bash
# App Name: Domain Designer Cli
# Script Version: ${package_info_default.version}
# Repo Addr: ${repoAddr}
# Package Manager: ${packageManager}

${packageManager === "bun" ? "bunx " : ""}domain-designer-cli runWeb --source="$(dirname "$(realpath "$0")")"
`;
  const osType = environmentAgg7.states.osType.value;
  if (osType === "windows") {
    return {
      name: "RunWeb.bat",
      content: winScript
    };
  } else if (osType === "linux") {
    return {
      name: "RunWeb.sh",
      content: linuxScript
    };
  } else if (osType === "mac") {
    return {
      name: "RunWeb.sh",
      content: macScript
    };
  } else {
    log_default.printError(`Unsupported OS: ${osType}`);
  }
}
function getGenCodeScript() {
  const environmentAgg7 = useEnvironmentAgg();
  const packageManager = environmentAgg7.states.packageManager.value;
  const repoAddr = package_info_default.repository.url.replace(/git\+/g, "");
  const winScript = `REM App Name: Domain Designer Cli
REM Script Version: ${package_info_default.version}
REM Repo Addr: ${repoAddr}
REM Package Manager: ${packageManager}

@echo off
setlocal
set "scriptPath=%~dp0"

${packageManager === "bun" ? "bunx " : ""}domain-designer-cli genCode --source=%scriptPath%
`;
  const linuxScript = `#!/bin/bash
# App Name: Domain Designer Cli
# Script Version: ${package_info_default.version}
# Repo Addr: ${repoAddr}
# Package Manager: ${packageManager}

${packageManager === "bun" ? "bunx " : ""}domain-designer-cli genCode --source="$(dirname "$(realpath "$0")")"
`;
  const macScript = `#!/bin/bash
# App Name: Domain Designer Cli
# Script Version: ${package_info_default.version}
# Repo Addr: ${repoAddr}
# Package Manager: ${packageManager}

${packageManager === "bun" ? "bunx " : ""}domain-designer-cli genCode --source="$(dirname "$(realpath "$0")")"
`;
  const osType = environmentAgg7.states.osType.value;
  if (osType === "windows") {
    return {
      name: "GenCode.bat",
      content: winScript
    };
  } else if (osType === "linux") {
    return {
      name: "GenCode.sh",
      content: linuxScript
    };
  } else if (osType === "mac") {
    return {
      name: "GenCode.sh",
      content: macScript
    };
  } else {
    log_default.printError(`Unsupported OS: ${osType}`);
  }
}
function getGitignore() {
  return {
    name: ".gitignore",
    content: `!node_modules
.output

*.bat
*.sh
`
  };
}

// src/domain/cli-args-agg/cmd-init.ts
var import_path4 = __toESM(require("path"), 1);
var import_fs3 = __toESM(require("fs"), 1);

// src/utils/io.ts
var import_fs2 = __toESM(require("fs"), 1);
var import_path3 = __toESM(require("path"), 1);
function copyFolderRecursive(src, dest, opts = {}) {
  if (!import_fs2.default.existsSync(src)) {
    throw new Error(`Source folder does not exist: ${src}`);
  }
  if (!import_fs2.default.existsSync(dest)) {
    import_fs2.default.mkdirSync(dest, { recursive: true });
  }
  const entries = import_fs2.default.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = import_path3.default.join(src, entry.name);
    const destPath = import_path3.default.join(dest, entry.name);
    if (opts.ignore && opts.ignore.includes(entry.name)) {
      continue;
    }
    if (opts.pattern && !opts.pattern.test(entry.name)) {
      continue;
    }
    if (entry.isDirectory()) {
      copyFolderRecursive(srcPath, destPath);
    } else {
      import_fs2.default.copyFileSync(srcPath, destPath);
    }
  }
}
function deleteFolderRecursive(path8) {
  if (import_fs2.default.existsSync(path8)) {
    import_fs2.default.readdirSync(path8).forEach((file) => {
      const curPath = path8 + "/" + file;
      if (import_fs2.default.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        import_fs2.default.unlinkSync(curPath);
      }
    });
    import_fs2.default.rmdirSync(path8);
  }
}

// src/domain/cli-args-agg/cmd-init.ts
var $t2 = useI18nAgg().commands.t;
var environmentAgg = useEnvironmentAgg();
function requireInitCommand(params) {
  return new Command().name("init").option("--source <sourceDir>", "ts files' dir").action((options) => {
    params.currentCommand.value = "init" /* Init */;
    if (options.source) {
      params.args.source = import_path4.default.resolve(options.source);
    }
  }).addHelpText("before", "Initialize the workspace.\n").addHelpText("before", "\u521D\u59CB\u5316\u4E00\u4E2A\u5DE5\u4F5C\u7A7A\u95F4\n");
}
async function requireInitCommandArgs(params) {
  params.currentCommand.value = "init" /* Init */;
}
async function execute(args) {
  const distDir = import_path4.default.join(args.source);
  if (!import_fs3.default.existsSync(distDir) || !import_fs3.default.statSync(distDir).isDirectory()) {
    throw new Error($t2("error.shouldBeValidDir{dir}", { dir: distDir }));
  }
  const existsFiles = import_fs3.default.readdirSync(distDir);
  const copyIgnores = [];
  if (existsFiles.length > 0) {
    if (existsFiles.filter((name) => name.endsWith(".ts")).length === 0) {
      throw new Error($t2("error.shouldBeValidWorkspaceOrEmptyDir{dir}", { dir: distDir }));
    }
    copyIgnores.push("example-agg.ts");
    copyIgnores.push("example.ts");
    copyIgnores.push("node_modules");
  }
  log_default.printInfo("================ \u521D\u59CB\u5316\u5DE5\u4F5C\u7A7A\u95F4: Starting... ================");
  copyFolderRecursive(import_path4.default.join(environmentAgg.states.webRoot.value, "templates"), distDir, { ignore: copyIgnores });
  const runWebScript = getRunWebScript();
  if (runWebScript) {
    import_fs3.default.writeFileSync(import_path4.default.join(distDir, runWebScript.name), runWebScript.content, "utf-8");
  }
  const genCodeScript = getGenCodeScript();
  if (genCodeScript) {
    import_fs3.default.writeFileSync(import_path4.default.join(distDir, genCodeScript.name), genCodeScript.content, "utf-8");
  }
  const gitignore = getGitignore();
  import_fs3.default.writeFileSync(import_path4.default.join(distDir, gitignore.name), gitignore.content, "utf-8");
  log_default.printSuccess("================ \u521D\u59CB\u5316\u5DE5\u4F5C\u7A7A\u95F4: Succeeded ================");
}

// src/domain/cli-args-agg/cmd-info.ts
var import_child_process3 = require("child_process");
var environmentAgg2 = useEnvironmentAgg();
function requireInfoCommand(params) {
  return new Command().name("info").action(() => {
    params.currentCommand.value = "info" /* Info */;
  }).addHelpText("before", "Print info.\n").addHelpText("before", "\u6253\u5370\u4FE1\u606F\n");
}
async function requireInfoCommandArgs(params) {
  params.currentCommand.value = "info" /* Info */;
}
async function execute2() {
  log_default.printInfo("================ Print info: Starting... ================");
  (0, import_child_process3.spawnSync)('echo "print domain-designer info"', { encoding: "utf-8", stdio: "inherit", shell: true });
  log_default.print("");
  log_default.print(log_default.info("DEBUG_MODE:"), environmentAgg2.states.debugMode.value);
  log_default.print("");
  log_default.print(log_default.info("lang:"), environmentAgg2.states.osLanguage.value);
  log_default.print("");
  log_default.print(log_default.info("__dirname:"), __dirname);
  log_default.print("");
  log_default.print(log_default.info("cwd():"), process.cwd());
  log_default.print("");
  log_default.print(log_default.info("PACKAGE_MANAGER:"), environmentAgg2.states.packageManager.value);
  log_default.print("");
  log_default.print(log_default.info("webRoot:"), environmentAgg2.states.webRoot.value);
  log_default.print("");
  log_default.printSuccess("================ Print info: Succeeded ================");
}

// src/domain/cli-args-agg/cmd-update.ts
var import_fs4 = __toESM(require("fs"), 1);
var import_path5 = __toESM(require("path"), 1);
var environmentAgg3 = useEnvironmentAgg();
function requireUpdateWorkspaceCommand(params) {
  return new Command().name("update").option("--source <sourceDir>", "ts files' dir").action((options) => {
    params.currentCommand.value = "updateWorkspace" /* UpdateWorkspace */;
    if (options.source) {
      params.args.source = import_path5.default.resolve(options.source);
    }
  }).addHelpText("before", "Update the workspace.\n").addHelpText("before", "\u66F4\u65B0\u5DE5\u4F5C\u7A7A\u95F4\n");
}
async function requireUpdateWorkspaceCommandArgs(params) {
  params.currentCommand.value = "updateWorkspace" /* UpdateWorkspace */;
}
async function execute3(args) {
  const distDir = import_path5.default.join(args.source);
  log_default.printInfo("================ \u66F4\u65B0\u4F9D\u8D56: Starting... ================");
  if (!import_fs4.default.existsSync(import_path5.default.join(distDir, "node_modules")) || import_fs4.default.existsSync(import_path5.default.join(args.source, "package.json"))) {
    log_default.printWarn("\u8BE5\u76EE\u5F55\u4E0D\u662F\u5DE5\u4F5C\u7A7A\u95F4\uFF0C\u65E0\u6CD5\u66F4\u65B0");
    log_default.printWarn("================ \u66F4\u65B0\u4F9D\u8D56: End ================");
    return;
  }
  const versionFilePath = import_path5.default.join(distDir, "node_modules", "version.txt");
  const workspaceVer = !import_fs4.default.existsSync(versionFilePath) ? "unknown" : !import_fs4.default.statSync(versionFilePath).isFile() ? "unknown" : import_fs4.default.readFileSync(versionFilePath).toString().trim();
  if (workspaceVer === package_info_default.version) {
    log_default.print("\u5DE5\u4F5C\u76EE\u5F55\u5DF2\u662F\u6700\u65B0\u7248\u672C\uFF0C\u65E0\u9700\u66F4\u65B0");
    log_default.printSuccess("================ \u66F4\u65B0\u4F9D\u8D56: Succeeded ================");
    return;
  }
  log_default.print("\u5DE5\u4F5C\u76EE\u5F55\u7248\u672C\uFF1A", workspaceVer);
  deleteFolderRecursive(import_path5.default.join(distDir, "node_modules"));
  const runWebScript = getRunWebScript();
  if (runWebScript && import_fs4.default.existsSync(import_path5.default.join(distDir, runWebScript.name))) {
    import_fs4.default.rmSync(import_path5.default.join(distDir, runWebScript.name));
  }
  const genCodeScript = getGenCodeScript();
  if (genCodeScript && import_fs4.default.existsSync(import_path5.default.join(distDir, genCodeScript.name))) {
    import_fs4.default.rmSync(import_path5.default.join(distDir, genCodeScript.name));
  }
  const gitignore = getGitignore();
  if (import_fs4.default.existsSync(import_path5.default.join(distDir, gitignore.name))) {
    import_fs4.default.rmSync(import_path5.default.join(distDir, gitignore.name));
  }
  copyFolderRecursive(import_path5.default.join(environmentAgg3.states.webRoot.value, "templates"), distDir, {
    ignore: ["example.ts", "example-agg.ts"]
  });
  if (runWebScript) {
    import_fs4.default.writeFileSync(import_path5.default.join(distDir, runWebScript.name), runWebScript.content, "utf-8");
  }
  if (genCodeScript) {
    import_fs4.default.writeFileSync(import_path5.default.join(distDir, genCodeScript.name), genCodeScript.content, "utf-8");
  }
  import_fs4.default.writeFileSync(import_path5.default.join(distDir, gitignore.name), gitignore.content, "utf-8");
  log_default.print(`\u76EE\u5F55\u5DF2\u66F4\u65B0\u81F3 ${package_info_default.version}`);
  log_default.printSuccess("================ \u66F4\u65B0\u4F9D\u8D56: Succeeded ================");
}

// src/domain/cli-args-agg/cmd-run-web.ts
var import_child_process4 = require("child_process");
var import_path6 = __toESM(require("path"), 1);
var import_fs5 = __toESM(require("fs"), 1);
var $t3 = useI18nAgg().commands.t;
var environmentAgg4 = useEnvironmentAgg();
function requireRunWebCommand(params) {
  return new Command().name("runWeb").option("--source <sourceDir>", "ts files' dir").action((options) => {
    params.currentCommand.value = "runWeb" /* RunWeb */;
    if (options.source) {
      params.args.source = options.source;
    }
  }).addHelpText("before", "Run web server.\n").addHelpText("before", "\u8FD0\u884C web \u670D\u52A1\n");
}
async function requireRunWebCommandArgs(params) {
  params.currentCommand.value = "runWeb" /* RunWeb */;
}
async function execute4(args) {
  const webRoot = environmentAgg4.states.webRoot.value;
  log_default.printDebug("webRoot\u8DEF\u5F84", webRoot);
  const packageManager = environmentAgg4.states.packageManager.value;
  log_default.printInfo("================ \u5B89\u88C5\u8FD0\u884C\u4F9D\u8D56: Starting... ================");
  if (packageManager === "bun" /* BUN */) {
    const cmd = `bun i --cwd "${webRoot}"`;
    log_default.printDebug(cmd);
    (0, import_child_process4.spawnSync)(cmd, { encoding: "utf-8", stdio: "inherit", shell: true });
  } else if (packageManager === "pnpm" /* PNPM */) {
    const cmd = `pnpm i --prefix "${webRoot}"`;
    log_default.printDebug(cmd);
    (0, import_child_process4.spawnSync)(cmd, { encoding: "utf-8", stdio: "inherit", shell: true });
  } else if (packageManager === "npm" /* NPM */) {
    const cmd = `npm i --prefix "${webRoot}"`;
    log_default.printDebug(cmd);
    (0, import_child_process4.spawnSync)(cmd);
  } else {
    isNever(packageManager);
  }
  log_default.printSuccess("================ \u5B89\u88C5\u8FD0\u884C\u4F9D\u8D56: Succeeded ================");
  log_default.printInfo("================ \u88C5\u914D\u4EE3\u7801\u6587\u4EF6: Starting... ================");
  configSource(webRoot, args.source);
  log_default.printSuccess("================ \u88C5\u914D\u4EE3\u7801\u6587\u4EF6: Succeeded ================");
  log_default.printInfo("================ \u8FD0\u884CWeb\u670D\u52A1: Starting... ================");
  if (packageManager === "bun" /* BUN */) {
    const cmd = `bun --cwd "${webRoot}" dev`;
    log_default.printDebug(cmd);
    (0, import_child_process4.spawnSync)(cmd, {
      encoding: "utf-8",
      stdio: "inherit",
      shell: true
    });
  } else if (packageManager === "pnpm" /* PNPM */) {
    const cmd = `pnpm --prefix "${webRoot}" dev`;
    log_default.printDebug(cmd);
    (0, import_child_process4.spawnSync)(cmd, {
      encoding: "utf-8",
      stdio: "inherit",
      shell: true
    });
  } else if (packageManager === "npm" /* NPM */) {
    const cmd = `npm --prefix "${webRoot}" run dev`;
    log_default.printDebug(cmd);
    (0, import_child_process4.spawnSync)(cmd, {
      encoding: "utf-8",
      stdio: "inherit",
      shell: true
    });
  } else {
    isNever(packageManager);
  }
}
async function configSource(webRoot, source) {
  if (!import_fs5.default.existsSync(source) || !import_fs5.default.statSync(source).isDirectory()) {
    throw new Error($t3("error.shouldBeValidDir{dir}", { dir: source }));
  }
  const versionFilePath = import_path6.default.join(source, "node_modules", "version.txt");
  if (!import_fs5.default.existsSync(versionFilePath) || !import_fs5.default.statSync(versionFilePath).isFile() || import_fs5.default.readFileSync(versionFilePath, "utf-8").trim() !== package_info_default.version) {
    log_default.printWarn(
      $t3("warning.needUpdate{workspaceVer}{scriptVer}", {
        workspaceVer: import_fs5.default.readFileSync(versionFilePath, "utf-8").trim(),
        scriptVer: package_info_default.version
      })
    );
    log_default.print(
      source_default.bgYellow(`${environmentAgg4.states.packageManager.value === "bun" ? "bunx " : ""}domain-designer-cli update`)
    );
  }
  const designs = [];
  const matcher = new RegExp(/(.+)\.ts$/);
  let i = 0;
  import_fs5.default.readdirSync(source).forEach((file) => {
    if (matcher.test(file)) {
      const name = matcher.exec(file)[1];
      designs.push({
        name,
        flag: `__d${++i}`,
        importCode: `(await import('${import_path6.default.resolve(source, name).replace(/\\/g, "/")}')).default`
      });
    }
  });
  const mergedTsCode = `import { type DomainDesigner, isDomainDesigner } from '@ddd-tool/domain-designer-core'

${designs.map((d) => {
    return `const ${d.flag} = ${d.importCode}`;
  }).join("\n")}

const data: Record<string, DomainDesigner> = {}

${designs.map((d) => {
    return `if (isDomainDesigner(${d.flag})) {
  data['${d.name}'] = ${d.flag}
}`;
  }).join("\n")}

export default data
`;
  import_fs5.default.writeFileSync(import_path6.default.join(webRoot, "src", "views", "index.ts"), mergedTsCode, { encoding: "utf-8" });
}

// src/domain/cli-args-agg/cmd-gen-code/index.ts
var import_fs6 = __toESM(require("fs"), 1);
var import_path7 = __toESM(require("path"), 1);
var import_child_process5 = require("child_process");

// node_modules/.pnpm/@ddd-tool+domain-designer-core@0.1.0-beta.2/node_modules/@ddd-tool/domain-designer-core/index.js
function tr(t) {
  const e = t;
  return e && typeof e.actor == "function" && typeof e.startWorkflow == "function" && typeof e.defineUserStory == "function" && typeof e._getContext == "function" && typeof e.note == "function" && typeof e.info == "object" && typeof e.command == "function" && typeof e.facadeCmd == "function" && typeof e.agg == "function" && typeof e.event == "function" && typeof e.system == "function" && typeof e.policy == "function" && typeof e.service == "function" && typeof e.readModel == "function";
}
var yt = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
var Lt = () => {
};
var Re = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97);
var B = Object.assign;
var y2 = Array.isArray;
var $ = (t) => typeof t == "function";
var x = (t) => typeof t == "string";
var Z = (t) => typeof t == "symbol";
var R = (t) => t !== null && typeof t == "object";
var De = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
};
var xe = De((t) => t.charAt(0).toUpperCase() + t.slice(1));
var $t4;
var dt = () => $t4 || ($t4 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rt(t) {
  if (y2(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const s = t[n], r2 = x(s) ? Me(s) : Rt(s);
      if (r2)
        for (const o in r2)
          e[o] = r2[o];
    }
    return e;
  } else if (x(t) || R(t))
    return t;
}
var Ae = /;(?![^(]*\))/g;
var Ve = /:([^]+)/;
var Ie = /\/\*[^]*?\*\//g;
function Me(t) {
  const e = {};
  return t.replace(Ie, "").split(Ae).forEach((n) => {
    if (n) {
      const s = n.split(Ve);
      s.length > 1 && (e[s[0].trim()] = s[1].trim());
    }
  }), e;
}
function Ft(t) {
  let e = "";
  if (x(t))
    e = t;
  else if (y2(t))
    for (let n = 0; n < t.length; n++) {
      const s = Ft(t[n]);
      s && (e += s + " ");
    }
  else if (R(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
var st = true;
var Yt = [];
function xt() {
  Yt.push(st), st = false;
}
function At() {
  const t = Yt.pop();
  st = t === void 0 ? true : t;
}
var j2 = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
);
var Nt = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
);
var Q = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
var $e = Array.prototype;
var qt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Z)
);
function ee(t) {
  return P2(t) ? ee(t.__v_raw) : !!(t && t.__v_isReactive);
}
function P2(t) {
  return !!(t && t.__v_isReadonly);
}
function F2(t) {
  return !!(t && t.__v_isShallow);
}
function ct(t) {
  return t ? !!t.__v_raw : false;
}
function h(t) {
  const e = t && t.__v_raw;
  return e ? h(e) : t;
}
function M2(t) {
  return t ? t.__v_isRef === true : false;
}
var k = [];
function tn(t) {
  k.push(t);
}
function en() {
  k.pop();
}
var gt = false;
function W(t, ...e) {
  if (gt) return;
  gt = true, xt();
  const n = k.length ? k[k.length - 1].component : null, s = n && n.appContext.config.warnHandler, r2 = nn();
  if (s)
    It(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        t + e.map((o) => {
          var c, i;
          return (i = (c = o.toString) == null ? void 0 : c.call(o)) != null ? i : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        r2.map(
          ({ vnode: o }) => `at <${ge(n, o.type)}>`
        ).join(`
`),
        r2
      ]
    );
  else {
    const o = [`[Vue warn]: ${t}`, ...e];
    r2.length && o.push(`
`, ...rn(r2));
  }
  At(), gt = false;
}
function nn() {
  let t = k[k.length - 1];
  if (!t)
    return [];
  const e = [];
  for (; t; ) {
    const n = e[0];
    n && n.vnode === t ? n.recurseCount++ : e.push({
      vnode: t,
      recurseCount: 0
    });
    const s = t.component && t.component.parent;
    t = s && s.vnode;
  }
  return e;
}
function rn(t) {
  const e = [];
  return t.forEach((n, s) => {
    e.push(...s === 0 ? [] : [`
`], ...on(n));
  }), e;
}
function on({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", s = t.component ? t.component.parent == null : false, r2 = ` at <${ge(
    t.component,
    t.type,
    s
  )}`, o = ">" + n;
  return t.props ? [r2, ...sn(t.props), o] : [r2 + o];
}
function sn(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((s) => {
    e.push(...ne(s, t[s]));
  }), n.length > 3 && e.push(" ..."), e;
}
function ne(t, e, n) {
  return x(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : M2(e) ? (e = ne(t, h(e.value), true), n ? e : [`${t}=Ref<`, e, ">"]) : $(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = h(e), n ? e : [`${t}=`, e]);
}
var re = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function It(t, e, n, s) {
  try {
    return s ? t(...s) : t();
  } catch (r2) {
    oe(r2, e, n);
  }
}
function oe(t, e, n, s = true) {
  const r2 = e ? e.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: c } = e && e.appContext.config || yt;
  if (e) {
    let i = e.parent;
    const a = e.proxy, d = process.env.NODE_ENV !== "production" ? re[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const l2 = i.ec;
      if (l2) {
        for (let u = 0; u < l2.length; u++)
          if (l2[u](t, a, d) === false)
            return;
      }
      i = i.parent;
    }
    if (o) {
      xt(), It(o, null, 10, [
        t,
        a,
        d
      ]), At();
      return;
    }
  }
  cn(t, n, r2, s, c);
}
function cn(t, e, n, s = true, r2 = false) {
  if (process.env.NODE_ENV !== "production") {
    const o = re[e];
    if (n && tn(n), W(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && en(), s)
      throw t;
  } else if (r2)
    throw t;
}
var O = [];
var D = -1;
var L = [];
var V = null;
var K = 0;
var un = /* @__PURE__ */ Promise.resolve();
var Ot = null;
var an = 100;
function ln(t) {
  let e = D + 1, n = O.length;
  for (; e < n; ) {
    const s = e + n >>> 1, r2 = O[s], o = X2(r2);
    o < t || o === t && r2.flags & 2 ? e = s + 1 : n = s;
  }
  return e;
}
function fn(t) {
  if (!(t.flags & 1)) {
    const e = X2(t), n = O[O.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= X2(n) ? O.push(t) : O.splice(ln(e), 0, t), t.flags |= 1, se();
  }
}
function se() {
  Ot || (Ot = un.then(ie));
}
function dn(t) {
  y2(t) ? L.push(...t) : V && t.id === -1 ? V.splice(K + 1, 0, t) : t.flags & 1 || (L.push(t), t.flags |= 1), se();
}
function _n(t) {
  if (L.length) {
    const e = [...new Set(L)].sort(
      (n, s) => X2(n) - X2(s)
    );
    if (L.length = 0, V) {
      V.push(...e);
      return;
    }
    for (V = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), K = 0; K < V.length; K++) {
      const n = V[K];
      process.env.NODE_ENV !== "production" && ce(t, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    V = null, K = 0;
  }
}
var X2 = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function ie(t) {
  process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map());
  const e = process.env.NODE_ENV !== "production" ? (n) => ce(t, n) : Lt;
  try {
    for (D = 0; D < O.length; D++) {
      const n = O[D];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && e(n))
          continue;
        n.flags & 4 && (n.flags &= -2), It(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; D < O.length; D++) {
      const n = O[D];
      n && (n.flags &= -2);
    }
    D = -1, O.length = 0, _n(t), Ot = null, (O.length || L.length) && ie(t);
  }
}
function ce(t, e) {
  const n = t.get(e) || 0;
  if (n > an) {
    const s = e.i, r2 = s && he(s.type);
    return oe(
      `Maximum recursive updates exceeded${r2 ? ` in component <${r2}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), true;
  }
  return t.set(e, n + 1), false;
}
var bt = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (dt().__VUE_HMR_RUNTIME__ = {
  createRecord: mt(pn),
  rerender: mt(hn),
  reload: mt(gn)
});
var ut = /* @__PURE__ */ new Map();
function pn(t, e) {
  return ut.has(t) ? false : (ut.set(t, {
    initialDef: at(e),
    instances: /* @__PURE__ */ new Set()
  }), true);
}
function at(t) {
  return be(t) ? t.__vccOpts : t;
}
function hn(t, e) {
  const n = ut.get(t);
  n && (n.initialDef.render = e, [...n.instances].forEach((s) => {
    e && (s.render = e, at(s.type).render = e), s.renderCache = [], s.update();
  }));
}
function gn(t, e) {
  const n = ut.get(t);
  if (!n) return;
  e = at(e), Ht(n.initialDef, e);
  const s = [...n.instances];
  for (let r2 = 0; r2 < s.length; r2++) {
    const o = s[r2], c = at(o.type);
    let i = bt.get(c);
    i || (c !== n.initialDef && Ht(c, e), bt.set(c, i = /* @__PURE__ */ new Set())), i.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (i.add(o), o.ceReload(e.styles), i.delete(o)) : o.parent ? fn(() => {
      o.parent.update(), i.delete(o);
    }) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" && window.location.reload(), o.root.ce && o !== o.root && o.root.ce._removeChildStyle(c);
  }
  dn(() => {
    bt.clear();
  });
}
function Ht(t, e) {
  B(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function mt(t) {
  return (e, n) => {
    try {
      return t(e, n);
    } catch {
    }
  };
}
var lt = null;
var bn = null;
var mn = (t) => t.__isTeleport;
function ae(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, ae(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
dt().requestIdleCallback;
dt().cancelIdleCallback;
var yn = Symbol.for("v-ndc");
var En = {};
process.env.NODE_ENV !== "production" && (En.ownKeys = (t) => (W(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t)));
var wn = {};
var le = (t) => Object.getPrototypeOf(t) === wn;
var Nn = (t) => t.__isSuspense;
var fe = Symbol.for("v-fgt");
var vn = Symbol.for("v-txt");
var Sn = Symbol.for("v-cmt");
function On(t) {
  return t ? t.__v_isVNode === true : false;
}
var Tn = (...t) => _e(
  ...t
);
var de = ({ key: t }) => t ?? null;
var ot = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? x(t) || M2(t) || $(t) ? { i: lt, r: t, k: e, f: !!n } : t : null);
function Rn(t, e = null, n = null, s = 0, r2 = null, o = t === fe ? 0 : 1, c = false, i = false) {
  const a = {
    __v_isVNode: true,
    __v_skip: true,
    type: t,
    props: e,
    key: e && de(e),
    ref: e && ot(e),
    scopeId: bn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r2,
    dynamicChildren: null,
    appContext: null,
    ctx: lt
  };
  return i ? (Mt(a, n), o & 128 && t.normalize(a)) : n && (a.shapeFlag |= x(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && W("VNode created with invalid key (NaN). VNode type:", a.type), a;
}
var Fn = process.env.NODE_ENV !== "production" ? Tn : _e;
function _e(t, e = null, n = null, s = 0, r2 = null, o = false) {
  if ((!t || t === yn) && (process.env.NODE_ENV !== "production" && !t && W(`Invalid vnode type when creating vnode: ${t}.`), t = Sn), On(t)) {
    const i = ft(
      t,
      e,
      true
      /* mergeRef: true */
    );
    return n && Mt(i, n), i.patchFlag = -2, i;
  }
  if (be(t) && (t = t.__vccOpts), e) {
    e = Cn(e);
    let { class: i, style: a } = e;
    i && !x(i) && (e.class = Ft(i)), R(a) && (ct(a) && !y2(a) && (a = B({}, a)), e.style = Rt(a));
  }
  const c = x(t) ? 1 : Nn(t) ? 128 : mn(t) ? 64 : R(t) ? 4 : $(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && c & 4 && ct(t) && (t = h(t), W(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), Rn(
    t,
    e,
    n,
    s,
    r2,
    c,
    o,
    true
  );
}
function Cn(t) {
  return t ? ct(t) || le(t) ? B({}, t) : t : null;
}
function ft(t, e, n = false, s = false) {
  const { props: r2, ref: o, patchFlag: c, children: i, transition: a } = t, d = e ? xn(r2 || {}, e) : r2, l2 = {
    __v_isVNode: true,
    __v_skip: true,
    type: t.type,
    props: d,
    key: d && de(d),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? y2(o) ? o.concat(ot(e)) : [o, ot(e)] : ot(e)
    ) : o,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && c === -1 && y2(i) ? i.map(pe) : i,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== fe ? c === -1 ? 16 : c | 16 : c,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && ft(t.ssContent),
    ssFallback: t.ssFallback && ft(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return a && s && ae(
    l2,
    a.clone(l2)
  ), l2;
}
function pe(t) {
  const e = ft(t);
  return y2(t.children) && (e.children = t.children.map(pe)), e;
}
function Dn(t = " ", e = 0) {
  return Fn(vn, null, t, e);
}
function Mt(t, e) {
  let n = 0;
  const { shapeFlag: s } = t;
  if (e == null)
    e = null;
  else if (y2(e))
    n = 16;
  else if (typeof e == "object")
    if (s & 65) {
      const r2 = e.default;
      r2 && (r2._c && (r2._d = false), Mt(t, r2()), r2._c && (r2._d = true));
      return;
    } else
      n = 32, !e._ && !le(e) && (e._ctx = lt);
  else $(e) ? (e = { default: e, _ctx: lt }, n = 32) : (e = String(e), s & 64 ? (n = 16, e = [Dn(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function xn(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    for (const r2 in s)
      if (r2 === "class")
        e.class !== s.class && (e.class = Ft([e.class, s.class]));
      else if (r2 === "style")
        e.style = Rt([e.style, s.style]);
      else if (Re(r2)) {
        const o = e[r2], c = s[r2];
        c && o !== c && !(y2(o) && o.includes(c)) && (e[r2] = o ? [].concat(o, c) : c);
      } else r2 !== "" && (e[r2] = s[r2]);
  }
  return e;
}
{
  const t = dt(), e = (n, s) => {
    let r2;
    return (r2 = t[n]) || (r2 = t[n] = []), r2.push(s), (o) => {
      r2.length > 1 ? r2.forEach((c) => c(o)) : r2[0](o);
    };
  };
  e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => n
  ), e(
    "__VUE_SSR_SETTERS__",
    (n) => n
  );
}
process.env.NODE_ENV;
var An = /(?:^|[-_])(\w)/g;
var Vn = (t) => t.replace(An, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function he(t, e = true) {
  return $(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function ge(t, e, n = false) {
  let s = he(e);
  if (!s && e.__file) {
    const r2 = e.__file.match(/([^/\\]+)\.\w+$/);
    r2 && (s = r2[1]);
  }
  if (!s && t && t.parent) {
    const r2 = (o) => {
      for (const c in o)
        if (o[c] === e)
          return c;
    };
    s = r2(
      t.components || t.parent.type.components
    ) || r2(t.appContext.components);
  }
  return s ? Vn(s) : n ? "App" : "Anonymous";
}
function be(t) {
  return $(t) && "__vccOpts" in t;
}
function In() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, r2 = {
    __vue_custom_formatter: true,
    header(u) {
      return R(u) ? u.__isVue ? ["div", t, "VueInstance"] : M2(u) ? [
        "div",
        {},
        ["span", t, l2(u)],
        "<",
        // avoid debugger accessing value affecting behavior
        i("_value" in u ? u._value : u),
        ">"
      ] : ee(u) ? [
        "div",
        {},
        ["span", t, F2(u) ? "ShallowReactive" : "Reactive"],
        "<",
        i(u),
        `>${P2(u) ? " (readonly)" : ""}`
      ] : P2(u) ? [
        "div",
        {},
        ["span", t, F2(u) ? "ShallowReadonly" : "Readonly"],
        "<",
        i(u),
        ">"
      ] : null : null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...o(u.$)
        ];
    }
  };
  function o(u) {
    const f = [];
    u.type.props && u.props && f.push(c("props", h(u.props))), u.setupState !== yt && f.push(c("setup", u.setupState)), u.data !== yt && f.push(c("data", h(u.data)));
    const _ = a(u, "computed");
    _ && f.push(c("computed", _));
    const g2 = a(u, "inject");
    return g2 && f.push(c("injected", g2)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), f;
  }
  function c(u, f) {
    return f = B({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((_) => [
          "div",
          {},
          ["span", s, _ + ": "],
          i(f[_], false)
        ])
      ]
    ] : ["span", {}];
  }
  function i(u, f = true) {
    return typeof u == "number" ? ["span", e, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", s, u] : R(u) ? ["object", { object: f ? h(u) : u }] : ["span", n, String(u)];
  }
  function a(u, f) {
    const _ = u.type;
    if ($(_))
      return;
    const g2 = {};
    for (const b2 in u.ctx)
      d(_, b2, f) && (g2[b2] = u.ctx[b2]);
    return g2;
  }
  function d(u, f, _) {
    const g2 = u[_];
    if (y2(g2) && g2.includes(f) || R(g2) && f in g2 || u.extends && d(u.extends, f, _) || u.mixins && u.mixins.some((b2) => d(b2, f, _)))
      return true;
  }
  function l2(u) {
    return F2(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r2) : window.devtoolsFormatters = [r2];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
function Mn() {
  In();
}
process.env.NODE_ENV !== "production" && Mn();

// node_modules/.pnpm/@ddd-tool+domain-designer-g_362d88813f3b0dfc824996070056c685/node_modules/@ddd-tool/domain-designer-generator/index.js
// @__NO_SIDE_EFFECTS__
function Kn(e) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const t of e.split(",")) n[t] = 1;
  return (t) => t in n;
}
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
var Fe = Object.assign;
var zn = Object.prototype.hasOwnProperty;
var Ve2 = (e, n) => zn.call(e, n);
var J = Array.isArray;
var ne2 = (e) => pn2(e) === "[object Map]";
var Bn = (e) => typeof e == "function";
var Un = (e) => typeof e == "string";
var ce2 = (e) => typeof e == "symbol";
var ye = (e) => e !== null && typeof e == "object";
var Gn = Object.prototype.toString;
var pn2 = (e) => Gn.call(e);
var dn2 = (e) => pn2(e).slice(8, -1);
var Je = (e) => Un(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
var Wn = (e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return (t) => n[t] || (n[t] = e(t));
};
var Jn = Wn((e) => e.charAt(0).toUpperCase() + e.slice(1));
var Y = (e, n) => !Object.is(e, n);
function X3(e, ...n) {
}
var S2;
var fn2 = 0;
var te;
var oe2;
function Yn(e, n = false) {
  if (e.flags |= 8, n) {
    e.next = oe2, oe2 = e;
    return;
  }
  e.next = te, te = e;
}
function Ye() {
  fn2++;
}
function Ze() {
  if (--fn2 > 0)
    return;
  if (oe2) {
    let n = oe2;
    for (oe2 = void 0; n; ) {
      const t = n.next;
      n.next = void 0, n.flags &= -9, n = t;
    }
  }
  let e;
  for (; te; ) {
    let n = te;
    for (te = void 0; n; ) {
      const t = n.next;
      if (n.next = void 0, n.flags &= -9, n.flags & 1)
        try {
          n.trigger();
        } catch (o) {
          e || (e = o);
        }
      n = t;
    }
  }
  if (e) throw e;
}
function Zn(e) {
  for (let n = e.deps; n; n = n.nextDep)
    n.version = -1, n.prevActiveLink = n.dep.activeLink, n.dep.activeLink = n;
}
function qn(e) {
  let n, t = e.depsTail, o = t;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === t && (t = s), hn2(o), Qn(o)) : n = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = n, e.depsTail = t;
}
function Xn(e) {
  for (let n = e.deps; n; n = n.nextDep)
    if (n.dep.version !== n.version || n.dep.computed && (mn2(n.dep.computed) || n.dep.version !== n.version))
      return true;
  return !!e._dirty;
}
function mn2(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === se2))
    return;
  e.globalVersion = se2;
  const n = e.dep;
  if (e.flags |= 2, n.version > 0 && !e.isSSR && e.deps && !Xn(e)) {
    e.flags &= -3;
    return;
  }
  const t = S2, o = R2;
  S2 = e, R2 = true;
  try {
    Zn(e);
    const s = e.fn(e._value);
    (n.version === 0 || Y(s, e._value)) && (e._value = s, n.version++);
  } catch (s) {
    throw n.version++, s;
  } finally {
    S2 = t, R2 = o, qn(e), e.flags &= -3;
  }
}
function hn2(e, n = false) {
  const { dep: t, prevSub: o, nextSub: s } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && t.subsHead === e && (t.subsHead = s), t.subs === e && (t.subs = o, !o && t.computed)) {
    t.computed.flags &= -5;
    for (let a = t.computed.deps; a; a = a.nextDep)
      hn2(a, true);
  }
  !n && !--t.sc && t.map && t.map.delete(t.key);
}
function Qn(e) {
  const { prevDep: n, nextDep: t } = e;
  n && (n.nextDep = t, e.prevDep = void 0), t && (t.prevDep = n, e.nextDep = void 0);
}
var R2 = true;
var gn2 = [];
function et() {
  gn2.push(R2), R2 = false;
}
function nt() {
  const e = gn2.pop();
  R2 = e === void 0 ? true : e;
}
var se2 = 0;
var tt = class {
  constructor(n, t) {
    this.sub = n, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
};
var qe = class {
  constructor(n) {
    this.computed = n, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(n) {
    if (!S2 || !R2 || S2 === this.computed)
      return;
    let t = this.activeLink;
    if (t === void 0 || t.sub !== S2)
      t = this.activeLink = new tt(S2, this), S2.deps ? (t.prevDep = S2.depsTail, S2.depsTail.nextDep = t, S2.depsTail = t) : S2.deps = S2.depsTail = t, vn2(t);
    else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
      const o = t.nextDep;
      o.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = o), t.prevDep = S2.depsTail, t.nextDep = void 0, S2.depsTail.nextDep = t, S2.depsTail = t, S2.deps === t && (S2.deps = o);
    }
    return process.env.NODE_ENV !== "production" && S2.onTrack && S2.onTrack(
      Fe(
        {
          effect: S2
        },
        n
      )
    ), t;
  }
  trigger(n) {
    this.version++, se2++, this.notify(n);
  }
  notify(n) {
    Ye();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let t = this.subsHead; t; t = t.nextSub)
          t.sub.onTrigger && !(t.sub.flags & 8) && t.sub.onTrigger(
            Fe(
              {
                effect: t.sub
              },
              n
            )
          );
      for (let t = this.subs; t; t = t.prevSub)
        t.sub.notify() && t.sub.dep.notify();
    } finally {
      Ze();
    }
  }
};
function vn2(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const n = e.dep.computed;
    if (n && !e.dep.subs) {
      n.flags |= 20;
      for (let o = n.deps; o; o = o.nextDep)
        vn2(o);
    }
    const t = e.dep.subs;
    t !== e && (e.prevSub = t, t && (t.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
var Re2 = /* @__PURE__ */ new WeakMap();
var M3 = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
);
var ke = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
);
var re2 = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function I2(e, n, t) {
  if (R2 && S2) {
    let o = Re2.get(e);
    o || Re2.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(t);
    s || (o.set(t, s = new qe()), s.map = o, s.key = t), process.env.NODE_ENV !== "production" ? s.track({
      target: e,
      type: n,
      key: t
    }) : s.track();
  }
}
function V2(e, n, t, o, s, a) {
  const c = Re2.get(e);
  if (!c) {
    se2++;
    return;
  }
  const g2 = (v) => {
    v && (process.env.NODE_ENV !== "production" ? v.trigger({
      target: e,
      type: n,
      key: t,
      newValue: o,
      oldValue: s,
      oldTarget: a
    }) : v.trigger());
  };
  if (Ye(), n === "clear")
    c.forEach(g2);
  else {
    const v = J(e), d = v && Je(t);
    if (v && t === "length") {
      const r2 = Number(o);
      c.forEach((i, l2) => {
        (l2 === "length" || l2 === re2 || !ce2(l2) && l2 >= r2) && g2(i);
      });
    } else
      switch ((t !== void 0 || c.has(void 0)) && g2(c.get(t)), d && g2(c.get(re2)), n) {
        case "add":
          v ? d && g2(c.get("length")) : (g2(c.get(M3)), ne2(e) && g2(c.get(ke)));
          break;
        case "delete":
          v || (g2(c.get(M3)), ne2(e) && g2(c.get(ke)));
          break;
        case "set":
          ne2(e) && g2(c.get(M3));
          break;
      }
  }
  Ze();
}
function U(e) {
  const n = E2(e);
  return n === e ? n : (I2(n, "iterate", re2), k2(e) ? n : n.map(A));
}
function Xe(e) {
  return I2(e = E2(e), "iterate", re2), e;
}
var ot2 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Oe(this, Symbol.iterator, A);
  },
  concat(...e) {
    return U(this).concat(
      ...e.map((n) => J(n) ? U(n) : n)
    );
  },
  entries() {
    return Oe(this, "entries", (e) => (e[1] = A(e[1]), e));
  },
  every(e, n) {
    return P3(this, "every", e, n, void 0, arguments);
  },
  filter(e, n) {
    return P3(this, "filter", e, n, (t) => t.map(A), arguments);
  },
  find(e, n) {
    return P3(this, "find", e, n, A, arguments);
  },
  findIndex(e, n) {
    return P3(this, "findIndex", e, n, void 0, arguments);
  },
  findLast(e, n) {
    return P3(this, "findLast", e, n, A, arguments);
  },
  findLastIndex(e, n) {
    return P3(this, "findLastIndex", e, n, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, n) {
    return P3(this, "forEach", e, n, void 0, arguments);
  },
  includes(...e) {
    return Ae2(this, "includes", e);
  },
  indexOf(...e) {
    return Ae2(this, "indexOf", e);
  },
  join(e) {
    return U(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Ae2(this, "lastIndexOf", e);
  },
  map(e, n) {
    return P3(this, "map", e, n, void 0, arguments);
  },
  pop() {
    return ee2(this, "pop");
  },
  push(...e) {
    return ee2(this, "push", e);
  },
  reduce(e, ...n) {
    return an2(this, "reduce", e, n);
  },
  reduceRight(e, ...n) {
    return an2(this, "reduceRight", e, n);
  },
  shift() {
    return ee2(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, n) {
    return P3(this, "some", e, n, void 0, arguments);
  },
  splice(...e) {
    return ee2(this, "splice", e);
  },
  toReversed() {
    return U(this).toReversed();
  },
  toSorted(e) {
    return U(this).toSorted(e);
  },
  toSpliced(...e) {
    return U(this).toSpliced(...e);
  },
  unshift(...e) {
    return ee2(this, "unshift", e);
  },
  values() {
    return Oe(this, "values", A);
  }
};
function Oe(e, n, t) {
  const o = Xe(e), s = o[n]();
  return o !== e && !k2(e) && (s._next = s.next, s.next = () => {
    const a = s._next();
    return a.value && (a.value = t(a.value)), a;
  }), s;
}
var st2 = Array.prototype;
function P3(e, n, t, o, s, a) {
  const c = Xe(e), g2 = c !== e && !k2(e), v = c[n];
  if (v !== st2[n]) {
    const i = v.apply(e, a);
    return g2 ? A(i) : i;
  }
  let d = t;
  c !== e && (g2 ? d = function(i, l2) {
    return t.call(this, A(i), l2, e);
  } : t.length > 2 && (d = function(i, l2) {
    return t.call(this, i, l2, e);
  }));
  const r2 = v.call(c, d, o);
  return g2 && s ? s(r2) : r2;
}
function an2(e, n, t, o) {
  const s = Xe(e);
  let a = t;
  return s !== e && (k2(e) ? t.length > 3 && (a = function(c, g2, v) {
    return t.call(this, c, g2, v, e);
  }) : a = function(c, g2, v) {
    return t.call(this, c, A(g2), v, e);
  }), s[n](a, ...o);
}
function Ae2(e, n, t) {
  const o = E2(e);
  I2(o, "iterate", re2);
  const s = o[n](...t);
  return (s === -1 || s === false) && Ct(t[0]) ? (t[0] = E2(t[0]), o[n](...t)) : s;
}
function ee2(e, n, t = []) {
  et(), Ye();
  const o = E2(e)[n].apply(e, t);
  return Ze(), nt(), o;
}
var rt = /* @__PURE__ */ Kn("__proto__,__v_isRef,__isVue");
var _n2 = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ce2)
);
function at2(e) {
  ce2(e) || (e = String(e));
  const n = E2(this);
  return I2(n, "has", e), n.hasOwnProperty(e);
}
var Cn2 = class {
  constructor(n = false, t = false) {
    this._isReadonly = n, this._isShallow = t;
  }
  get(n, t, o) {
    if (t === "__v_skip") return n.__v_skip;
    const s = this._isReadonly, a = this._isShallow;
    if (t === "__v_isReactive")
      return !s;
    if (t === "__v_isReadonly")
      return s;
    if (t === "__v_isShallow")
      return a;
    if (t === "__v_raw")
      return o === (s ? a ? Nn2 : wn2 : a ? gt2 : bn2).get(n) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(n) === Object.getPrototypeOf(o) ? n : void 0;
    const c = J(n);
    if (!s) {
      let v;
      if (c && (v = ot2[t]))
        return v;
      if (t === "hasOwnProperty")
        return at2;
    }
    const g2 = Reflect.get(
      n,
      t,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Z2(n) ? n : o
    );
    return (ce2(t) ? _n2.has(t) : rt(t)) || (s || I2(n, "get", t), a) ? g2 : Z2(g2) ? c && Je(t) ? g2 : g2.value : ye(g2) ? s ? he2(g2) : yn2(g2) : g2;
  }
};
var it = class extends Cn2 {
  constructor(n = false) {
    super(false, n);
  }
  set(n, t, o, s) {
    let a = n[t];
    if (!this._isShallow) {
      const v = Q2(a);
      if (!k2(o) && !Q2(o) && (a = E2(a), o = E2(o)), !J(n) && Z2(a) && !Z2(o))
        return v ? false : (a.value = o, true);
    }
    const c = J(n) && Je(t) ? Number(t) < n.length : Ve2(n, t), g2 = Reflect.set(
      n,
      t,
      o,
      Z2(n) ? n : s
    );
    return n === E2(s) && (c ? Y(o, a) && V2(n, "set", t, o, a) : V2(n, "add", t, o)), g2;
  }
  deleteProperty(n, t) {
    const o = Ve2(n, t), s = n[t], a = Reflect.deleteProperty(n, t);
    return a && o && V2(n, "delete", t, void 0, s), a;
  }
  has(n, t) {
    const o = Reflect.has(n, t);
    return (!ce2(t) || !_n2.has(t)) && I2(n, "has", t), o;
  }
  ownKeys(n) {
    return I2(
      n,
      "iterate",
      J(n) ? "length" : M3
    ), Reflect.ownKeys(n);
  }
};
var $n = class extends Cn2 {
  constructor(n = false) {
    super(true, n);
  }
  set(n, t) {
    return process.env.NODE_ENV !== "production" && X3(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      n
    ), true;
  }
  deleteProperty(n, t) {
    return process.env.NODE_ENV !== "production" && X3(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      n
    ), true;
  }
};
var ct2 = /* @__PURE__ */ new it();
var ut2 = /* @__PURE__ */ new $n();
var lt2 = /* @__PURE__ */ new $n(true);
var He = (e) => e;
var le2 = (e) => Reflect.getPrototypeOf(e);
function pt(e, n, t) {
  return function(...o) {
    const s = this.__v_raw, a = E2(s), c = ne2(a), g2 = e === "entries" || e === Symbol.iterator && c, v = e === "keys" && c, d = s[e](...o), r2 = t ? He : n ? Me2 : A;
    return !n && I2(
      a,
      "iterate",
      v ? ke : M3
    ), {
      // iterator protocol
      next() {
        const { value: i, done: l2 } = d.next();
        return l2 ? { value: i, done: l2 } : {
          value: g2 ? [r2(i[0]), r2(i[1])] : r2(i),
          done: l2
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function pe2(e) {
  return function(...n) {
    if (process.env.NODE_ENV !== "production") {
      const t = n[0] ? `on key "${n[0]}" ` : "";
      X3(
        `${Jn(e)} operation ${t}failed: target is readonly.`,
        E2(this)
      );
    }
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function dt2(e, n) {
  const t = {
    get(s) {
      const a = this.__v_raw, c = E2(a), g2 = E2(s);
      e || (Y(s, g2) && I2(c, "get", s), I2(c, "get", g2));
      const { has: v } = le2(c), d = n ? He : e ? Me2 : A;
      if (v.call(c, s))
        return d(a.get(s));
      if (v.call(c, g2))
        return d(a.get(g2));
      a !== c && a.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && I2(E2(s), "iterate", M3), Reflect.get(s, "size", s);
    },
    has(s) {
      const a = this.__v_raw, c = E2(a), g2 = E2(s);
      return e || (Y(s, g2) && I2(c, "has", s), I2(c, "has", g2)), s === g2 ? a.has(s) : a.has(s) || a.has(g2);
    },
    forEach(s, a) {
      const c = this, g2 = c.__v_raw, v = E2(g2), d = n ? He : e ? Me2 : A;
      return !e && I2(v, "iterate", M3), g2.forEach((r2, i) => s.call(a, d(r2), d(i), c));
    }
  };
  return Fe(
    t,
    e ? {
      add: pe2("add"),
      set: pe2("set"),
      delete: pe2("delete"),
      clear: pe2("clear")
    } : {
      add(s) {
        !n && !k2(s) && !Q2(s) && (s = E2(s));
        const a = E2(this);
        return le2(a).has.call(a, s) || (a.add(s), V2(a, "add", s, s)), this;
      },
      set(s, a) {
        !n && !k2(a) && !Q2(a) && (a = E2(a));
        const c = E2(this), { has: g2, get: v } = le2(c);
        let d = g2.call(c, s);
        d ? process.env.NODE_ENV !== "production" && cn2(c, g2, s) : (s = E2(s), d = g2.call(c, s));
        const r2 = v.call(c, s);
        return c.set(s, a), d ? Y(a, r2) && V2(c, "set", s, a, r2) : V2(c, "add", s, a), this;
      },
      delete(s) {
        const a = E2(this), { has: c, get: g2 } = le2(a);
        let v = c.call(a, s);
        v ? process.env.NODE_ENV !== "production" && cn2(a, c, s) : (s = E2(s), v = c.call(a, s));
        const d = g2 ? g2.call(a, s) : void 0, r2 = a.delete(s);
        return v && V2(a, "delete", s, void 0, d), r2;
      },
      clear() {
        const s = E2(this), a = s.size !== 0, c = process.env.NODE_ENV !== "production" ? ne2(s) ? new Map(s) : new Set(s) : void 0, g2 = s.clear();
        return a && V2(
          s,
          "clear",
          void 0,
          void 0,
          c
        ), g2;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    t[s] = pt(s, e, n);
  }), t;
}
function Qe(e, n) {
  const t = dt2(e, n);
  return (o, s, a) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    Ve2(t, s) && s in o ? t : o,
    s,
    a
  );
}
var ft2 = {
  get: /* @__PURE__ */ Qe(false, false)
};
var mt2 = {
  get: /* @__PURE__ */ Qe(true, false)
};
var ht = {
  get: /* @__PURE__ */ Qe(true, true)
};
function cn2(e, n, t) {
  const o = E2(t);
  if (o !== t && n.call(e, o)) {
    const s = dn2(e);
    X3(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
var bn2 = /* @__PURE__ */ new WeakMap();
var gt2 = /* @__PURE__ */ new WeakMap();
var wn2 = /* @__PURE__ */ new WeakMap();
var Nn2 = /* @__PURE__ */ new WeakMap();
function vt(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function _t(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : vt(dn2(e));
}
function yn2(e) {
  return Q2(e) ? e : en2(
    e,
    false,
    ct2,
    ft2,
    bn2
  );
}
function he2(e) {
  return en2(
    e,
    true,
    ut2,
    mt2,
    wn2
  );
}
function fe2(e) {
  return en2(
    e,
    true,
    lt2,
    ht,
    Nn2
  );
}
function en2(e, n, t, o, s) {
  if (!ye(e))
    return process.env.NODE_ENV !== "production" && X3(
      `value cannot be made ${n ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(n && e.__v_isReactive))
    return e;
  const a = s.get(e);
  if (a)
    return a;
  const c = _t(e);
  if (c === 0)
    return e;
  const g2 = new Proxy(
    e,
    c === 2 ? o : t
  );
  return s.set(e, g2), g2;
}
function Q2(e) {
  return !!(e && e.__v_isReadonly);
}
function k2(e) {
  return !!(e && e.__v_isShallow);
}
function Ct(e) {
  return e ? !!e.__v_raw : false;
}
function E2(e) {
  const n = e && e.__v_raw;
  return n ? E2(n) : e;
}
var A = (e) => ye(e) ? yn2(e) : e;
var Me2 = (e) => ye(e) ? he2(e) : e;
function Z2(e) {
  return e ? e.__v_isRef === true : false;
}
function ge2(e) {
  return $t5(e, false);
}
function $t5(e, n) {
  return Z2(e) ? e : new bt2(e, n);
}
var bt2 = class {
  constructor(n, t) {
    this.dep = new qe(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = t ? n : E2(n), this._value = t ? n : A(n), this.__v_isShallow = t;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(n) {
    const t = this._rawValue, o = this.__v_isShallow || k2(n) || Q2(n);
    n = o ? n : E2(n), Y(n, t) && (this._rawValue = n, this._value = o ? n : A(n), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: n,
      oldValue: t
    }) : this.dep.trigger());
  }
};
var wt = class {
  constructor(n, t, o) {
    this.fn = n, this.setter = t, this._value = void 0, this.dep = new qe(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = se2 - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    S2 !== this)
      return Yn(this, true), true;
    process.env.NODE_ENV;
  }
  get value() {
    const n = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return mn2(this), n && (n.version = this.dep.version), this._value;
  }
  set value(n) {
    this.setter ? this.setter(n) : process.env.NODE_ENV !== "production" && X3("Write operation failed: computed value is readonly");
  }
};
function Le(e, n, t = false) {
  let o, s;
  Bn(e) ? o = e : (o = e.get, s = e.set);
  const a = new wt(o, s, t);
  return process.env.NODE_ENV, a;
}
var Nt2 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
var yt2 = (e = 21) => {
  let n = "", t = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    n += Nt2[t[e] & 63];
  return n;
};
function Et(e, n = true, t = false) {
  const o = ge2();
  let s;
  const a = ge2(false);
  let c = () => {
  };
  const g2 = new Proxy(e, {
    apply: function(r2, i, l2) {
      let m2;
      try {
        m2 = r2(...l2);
      } catch (C2) {
        m2 = C2;
      }
      if (m2 instanceof Error) {
        if (o.value = m2, s = m2, n)
          throw c(), m2;
      } else
        a.value = true, o.value = void 0, s = true, c();
    }
  }), v = () => {
  }, d = new Proxy(
    (r2) => {
      o.value = r2;
    },
    {
      apply: function(r2, i, l2) {
        r2(...l2), v(...l2);
      }
    }
  );
  return {
    promise: new Promise((r2, i) => {
      if (n && s instanceof Error) {
        i(s);
        return;
      } else if (s === true) {
        r2();
        return;
      }
      let l2;
      t && (l2 = setTimeout(() => {
        const m2 = new Error("timeout!");
        o.value = m2, n && i(m2);
      }, t)), c = () => {
        l2 && (clearTimeout(l2), l2 = void 0), r2();
      };
    }),
    callback: g2,
    onError: d,
    resolved: Le(() => a.value),
    error: Le(() => o.value)
  };
}
function Ke() {
  return yt2();
}
function St() {
  const e = {}, n = {}, t = /* @__PURE__ */ new WeakMap(), o = {};
  return Object.freeze({
    registerAgg(s) {
      if (s.isInitialized.value)
        throw new Error("Agg must register before initialized");
      if (o[s.__id])
        throw new Error("Agg already registered");
      s.type === "MultiInstance" && s.api.events.destroyed.watchPublish(() => {
        delete o[s.__id];
      }), o[s.__id] = s;
      const a = [];
      for (const c of Object.values(e))
        c.mount({ api: s.api, __aggId: s.__id, isInitialized: s.isInitialized });
      for (const c of Object.values(n))
        c.mount({ api: s.api, __aggId: s.__id }), a.push(c.__id);
      t.set(s, a);
    },
    createSetupPlugin(s) {
      let a;
      return s instanceof Function ? a = s() : a = s, Object.freeze({
        __id: Ke(),
        type: "Setup",
        mount(c) {
          if (c.isInitialized.value)
            throw new Error("Can not setup after initialized");
          a.mount({ api: c.api, __aggId: c.__aggId });
        }
      });
    },
    createHotSwapPlugin(s) {
      let a;
      return s instanceof Function ? a = s() : a = s, Object.freeze({
        __id: Ke(),
        type: "HotSwap",
        mount: a.mount,
        unmount: a.unmount
      });
    },
    registerPlugin(s) {
      if (s.type === "Setup") {
        if (e[s.__id])
          throw new Error("Plugin already registered");
        e[s.__id] = s;
        for (const a in o)
          s.mount({
            api: o[a].api,
            __aggId: o[a].__id,
            isInitialized: o[a].isInitialized
          });
      } else if (s.type === "HotSwap") {
        n[s.__id] = s;
        for (const a in o)
          t.has(o[a]) && !t.get(o[a]).includes(s.__id) && (s.mount({ api: o[a].api, __aggId: o[a].__id }), t.get(o[a]).push(s.__id));
      } else
        isNever(s);
    },
    unregisterPlugin(s) {
      if (s.type === "Setup")
        throw new Error("Can not unregister setup plugin");
      if (s.type === "HotSwap") {
        for (const a in o)
          t.has(o[a]) && t.get(o[a]).includes(s.__id) && s.unmount({ api: o[a].api, __aggId: o[a].__id });
        delete n[s.__id];
      } else
        isNever(s);
    }
  });
}
function jt(e) {
  return St();
}
function Ot2(e) {
  const n = At2(e);
  return fe2({
    states: n.states,
    commands: n.commands,
    events: n.events
  });
}
function At2(e) {
  const n = e.states;
  for (const c of Object.keys(e.states))
    n[c] = he2(n[c]);
  const t = fe2(e.states), o = he2(e.commands), s = {}, a = e.events;
  for (const c in e.events)
    s[c] = a[c].api;
  return fe2({
    states: t,
    commands: o,
    events: fe2(s),
    destroy: e.destroy
  });
}
function It2(e) {
  const {
    callback: n,
    onError: t,
    promise: o,
    resolved: s
  } = Et(() => {
  }, false, 5e3);
  function a(i) {
    if (s.value === true)
      throw new Error("Agg already initialized");
    c.push(i());
  }
  const c = [], g2 = e({
    onCreated(i) {
      Promise.resolve().then(i);
    },
    onBeforeInitialize: a,
    isInitialized: Le(() => s.value),
    untilInitialized: o
  });
  setTimeout(
    () => Promise.all(c).then(() => {
      n();
    }).catch((i) => {
      t(i);
    }),
    0
  );
  const v = g2.states || {}, d = g2.commands || {}, r2 = g2.events || {};
  return {
    __id: Ke(),
    type: "Singleton",
    api: Ot2({
      states: v,
      commands: d,
      events: r2,
      destroy: () => {
      }
    }),
    isInitialized: s,
    async untilInitialized() {
      return await o.catch((i) => {
        throw new Error(`Failed to initialize Agg: ${i.message}
Stack : ${i.stack || "unkown"}`);
      });
    }
  };
}
var de2;
function xt2(e) {
  return It2(() => {
    const n = ge2(e), t = ge2({});
    let o = () => [], s = () => [], a = () => [], c = () => [], g2 = () => [], v = () => [], d = () => [];
    return {
      states: {
        designer: n,
        context: t
      },
      commands: {
        genCodeFiles() {
          return d();
        },
        clearCaches() {
        },
        setContext(r2) {
          t.value = r2;
        },
        setDomainDesigner(r2) {
          this.clearCaches(), n.value = r2;
        },
        _genInfoCode(...r2) {
          return o(...r2);
        },
        _setInfoCodeProvider(r2) {
          o = r2;
        },
        _genCommandCode(...r2) {
          return s(...r2);
        },
        _setCommandCodeProvider(r2) {
          s = r2;
        },
        _genFacadeCommandCode(...r2) {
          return a(...r2);
        },
        _setFacadeCommandCodeProvider(r2) {
          a = r2;
        },
        _genAggCode(...r2) {
          return c(...r2);
        },
        _setAggCodeProvider(r2) {
          c = r2;
        },
        _genEventCode(...r2) {
          return g2(...r2);
        },
        _setEventCodeProvider(r2) {
          g2 = r2;
        },
        _genReadModelCode(...r2) {
          return v(...r2);
        },
        _setReadModelCodeProvider(r2) {
          v = r2;
        },
        _setCodeFileProvider(r2) {
          d = r2;
        }
      }
    };
  });
}
var ue = jt();
function So(e) {
  if (!de2) {
    if (!e)
      throw new Error("designer is required");
    de2 = xt2(e), ue.registerAgg(de2);
  }
  return de2.api;
}
function Ee(e) {
  return e && e._attributes && e._attributes.rule === "Info";
}
function Dt(e) {
  return e && e._attributes && e._attributes.rule === "Agg";
}
function Pt(e) {
  return e && e._attributes && e._attributes.rule === "Command";
}
function Tt(e) {
  return e && e._attributes && e._attributes.rule === "FacadeCommand";
}
function Ft2(e) {
  return e && e._attributes && e._attributes.rule === "Event";
}
function Vt(e) {
  return e && e._attributes && e._attributes.rule === "ReadModel";
}
var ze = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
var Rt2 = () => {
};
var kt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
var Se = Object.assign;
var D2 = Array.isArray;
var B2 = (e) => typeof e == "function";
var H = (e) => typeof e == "string";
var Ht2 = (e) => typeof e == "symbol";
var L2 = (e) => e !== null && typeof e == "object";
var un2;
var je = () => un2 || (un2 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function nn2(e) {
  if (D2(e)) {
    const n = {};
    for (let t = 0; t < e.length; t++) {
      const o = e[t], s = H(o) ? zt(o) : nn2(o);
      if (s)
        for (const a in s)
          n[a] = s[a];
    }
    return n;
  } else if (H(e) || L2(e))
    return e;
}
var Mt2 = /;(?![^(]*\))/g;
var Lt2 = /:([^]+)/;
var Kt = /\/\*[^]*?\*\//g;
function zt(e) {
  const n = {};
  return e.replace(Kt, "").split(Mt2).forEach((t) => {
    if (t) {
      const o = t.split(Lt2);
      o.length > 1 && (n[o[0].trim()] = o[1].trim());
    }
  }), n;
}
function tn2(e) {
  let n = "";
  if (H(e))
    n = e;
  else if (D2(e))
    for (let t = 0; t < e.length; t++) {
      const o = tn2(e[t]);
      o && (n += o + " ");
    }
  else if (L2(e))
    for (const t in e)
      e[t] && (n += t + " ");
  return n.trim();
}
Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
);
Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
);
Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ht2)
);
function En2(e) {
  return Be(e) ? En2(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Be(e) {
  return !!(e && e.__v_isReadonly);
}
function Ie2(e) {
  return !!(e && e.__v_isShallow);
}
function Ue(e) {
  return e ? !!e.__v_raw : false;
}
function K2(e) {
  const n = e && e.__v_raw;
  return n ? K2(n) : e;
}
function on2(e) {
  return e ? e.__v_isRef === true : false;
}
var z = [];
function Bt(e) {
  z.push(e);
}
function Ut() {
  z.pop();
}
var xe2 = false;
function ae2(e, ...n) {
  if (xe2) return;
  xe2 = true;
  const t = z.length ? z[z.length - 1].component : null, o = t && t.appContext.config.warnHandler, s = Gt();
  if (o)
    sn2(
      o,
      t,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + n.map((a) => {
          var c, g2;
          return (g2 = (c = a.toString) == null ? void 0 : c.call(a)) != null ? g2 : JSON.stringify(a);
        }).join(""),
        t && t.proxy,
        s.map(
          ({ vnode: a }) => `at <${Hn(t, a.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const a = [`[Vue warn]: ${e}`, ...n];
    s.length && a.push(`
`, ...Wt(s));
  }
  xe2 = false;
}
function Gt() {
  let e = z[z.length - 1];
  if (!e)
    return [];
  const n = [];
  for (; e; ) {
    const t = n[0];
    t && t.vnode === e ? t.recurseCount++ : n.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return n;
}
function Wt(e) {
  const n = [];
  return e.forEach((t, o) => {
    n.push(...o === 0 ? [] : [`
`], ...Jt(t));
  }), n;
}
function Jt({ vnode: e, recurseCount: n }) {
  const t = n > 0 ? `... (${n} recursive calls)` : "", o = e.component ? e.component.parent == null : false, s = ` at <${Hn(
    e.component,
    e.type,
    o
  )}`, a = ">" + t;
  return e.props ? [s, ...Yt2(e.props), a] : [s + a];
}
function Yt2(e) {
  const n = [], t = Object.keys(e);
  return t.slice(0, 3).forEach((o) => {
    n.push(...Sn2(o, e[o]));
  }), t.length > 3 && n.push(" ..."), n;
}
function Sn2(e, n, t) {
  return H(n) ? (n = JSON.stringify(n), t ? n : [`${e}=${n}`]) : typeof n == "number" || typeof n == "boolean" || n == null ? t ? n : [`${e}=${n}`] : on2(n) ? (n = Sn2(e, K2(n.value), true), t ? n : [`${e}=Ref<`, n, ">"]) : B2(n) ? [`${e}=fn${n.name ? `<${n.name}>` : ""}`] : (n = K2(n), t ? n : [`${e}=`, n]);
}
var jn = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function sn2(e, n, t, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    On2(s, n, t);
  }
}
function On2(e, n, t, o = true) {
  const s = n ? n.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: c } = n && n.appContext.config || ze;
  if (n) {
    let g2 = n.parent;
    const v = n.proxy, d = process.env.NODE_ENV !== "production" ? jn[t] : `https://vuejs.org/error-reference/#runtime-${t}`;
    for (; g2; ) {
      const r2 = g2.ec;
      if (r2) {
        for (let i = 0; i < r2.length; i++)
          if (r2[i](e, v, d) === false)
            return;
      }
      g2 = g2.parent;
    }
    if (a) {
      sn2(a, null, 10, [
        e,
        v,
        d
      ]);
      return;
    }
  }
  Zt(e, t, s, o, c);
}
function Zt(e, n, t, o = true, s = false) {
  if (process.env.NODE_ENV !== "production") {
    const a = jn[n];
    if (t && Bt(t), ae2(`Unhandled error${a ? ` during execution of ${a}` : ""}`), t && Ut(), o)
      throw e;
  } else if (s)
    throw e;
}
var x2 = [];
var T = -1;
var q = [];
var F3 = null;
var W2 = 0;
var qt2 = /* @__PURE__ */ Promise.resolve();
var Ge = null;
var Xt = 100;
function Qt(e) {
  let n = T + 1, t = x2.length;
  for (; n < t; ) {
    const o = n + t >>> 1, s = x2[o], a = ie2(s);
    a < e || a === e && s.flags & 2 ? n = o + 1 : t = o;
  }
  return n;
}
function eo(e) {
  if (!(e.flags & 1)) {
    const n = ie2(e), t = x2[x2.length - 1];
    !t || // fast path when the job id is larger than the tail
    !(e.flags & 2) && n >= ie2(t) ? x2.push(e) : x2.splice(Qt(n), 0, e), e.flags |= 1, An2();
  }
}
function An2() {
  Ge || (Ge = qt2.then(In2));
}
function no(e) {
  D2(e) ? q.push(...e) : F3 && e.id === -1 ? F3.splice(W2 + 1, 0, e) : e.flags & 1 || (q.push(e), e.flags |= 1), An2();
}
function to(e) {
  if (q.length) {
    const n = [...new Set(q)].sort(
      (t, o) => ie2(t) - ie2(o)
    );
    if (q.length = 0, F3) {
      F3.push(...n);
      return;
    }
    for (F3 = n, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), W2 = 0; W2 < F3.length; W2++) {
      const t = F3[W2];
      process.env.NODE_ENV !== "production" && xn2(e, t) || (t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2);
    }
    F3 = null, W2 = 0;
  }
}
var ie2 = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function In2(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const n = process.env.NODE_ENV !== "production" ? (t) => xn2(e, t) : Rt2;
  try {
    for (T = 0; T < x2.length; T++) {
      const t = x2[T];
      if (t && !(t.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && n(t))
          continue;
        t.flags & 4 && (t.flags &= -2), sn2(
          t,
          t.i,
          t.i ? 15 : 14
        ), t.flags & 4 || (t.flags &= -2);
      }
    }
  } finally {
    for (; T < x2.length; T++) {
      const t = x2[T];
      t && (t.flags &= -2);
    }
    T = -1, x2.length = 0, to(e), Ge = null, (x2.length || q.length) && In2(e);
  }
}
function xn2(e, n) {
  const t = e.get(n) || 0;
  if (t > Xt) {
    const o = n.i, s = o && kn(o.type);
    return On2(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), true;
  }
  return e.set(n, t + 1), false;
}
var De2 = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (je().__VUE_HMR_RUNTIME__ = {
  createRecord: Pe(oo),
  rerender: Pe(so),
  reload: Pe(ro)
});
var ve = /* @__PURE__ */ new Map();
function oo(e, n) {
  return ve.has(e) ? false : (ve.set(e, {
    initialDef: _e2(n),
    instances: /* @__PURE__ */ new Set()
  }), true);
}
function _e2(e) {
  return Mn2(e) ? e.__vccOpts : e;
}
function so(e, n) {
  const t = ve.get(e);
  t && (t.initialDef.render = n, [...t.instances].forEach((o) => {
    n && (o.render = n, _e2(o.type).render = n), o.renderCache = [], o.update();
  }));
}
function ro(e, n) {
  const t = ve.get(e);
  if (!t) return;
  n = _e2(n), ln2(t.initialDef, n);
  const o = [...t.instances];
  for (let s = 0; s < o.length; s++) {
    const a = o[s], c = _e2(a.type);
    let g2 = De2.get(c);
    g2 || (c !== t.initialDef && ln2(c, n), De2.set(c, g2 = /* @__PURE__ */ new Set())), g2.add(a), a.appContext.propsCache.delete(a.type), a.appContext.emitsCache.delete(a.type), a.appContext.optionsCache.delete(a.type), a.ceReload ? (g2.add(a), a.ceReload(n.styles), g2.delete(a)) : a.parent ? eo(() => {
      a.parent.update(), g2.delete(a);
    }) : a.appContext.reload ? a.appContext.reload() : typeof window < "u" && window.location.reload(), a.root.ce && a !== a.root && a.root.ce._removeChildStyle(c);
  }
  no(() => {
    De2.clear();
  });
}
function ln2(e, n) {
  Se(e, n);
  for (const t in e)
    t !== "__file" && !(t in n) && delete e[t];
}
function Pe(e) {
  return (n, t) => {
    try {
      return e(n, t);
    } catch {
    }
  };
}
var Ce = null;
var ao = null;
var io = (e) => e.__isTeleport;
function Dn2(e, n) {
  e.shapeFlag & 6 && e.component ? (e.transition = n, Dn2(e.component.subTree, n)) : e.shapeFlag & 128 ? (e.ssContent.transition = n.clone(e.ssContent), e.ssFallback.transition = n.clone(e.ssFallback)) : e.transition = n;
}
je().requestIdleCallback;
je().cancelIdleCallback;
var co = Symbol.for("v-ndc");
process.env.NODE_ENV;
var uo = {};
var Pn = (e) => Object.getPrototypeOf(e) === uo;
var lo = (e) => e.__isSuspense;
var Tn2 = Symbol.for("v-fgt");
var po = Symbol.for("v-txt");
var fo = Symbol.for("v-cmt");
function mo(e) {
  return e ? e.__v_isVNode === true : false;
}
var ho = (...e) => Vn2(
  ...e
);
var Fn2 = ({ key: e }) => e ?? null;
var me = ({
  ref: e,
  ref_key: n,
  ref_for: t
}) => (typeof e == "number" && (e = "" + e), e != null ? H(e) || on2(e) || B2(e) ? { i: Ce, r: e, k: n, f: !!t } : e : null);
function go(e, n = null, t = null, o = 0, s = null, a = e === Tn2 ? 0 : 1, c = false, g2 = false) {
  const v = {
    __v_isVNode: true,
    __v_skip: true,
    type: e,
    props: n,
    key: n && Fn2(n),
    ref: n && me(n),
    scopeId: ao,
    slotScopeIds: null,
    children: t,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: a,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ce
  };
  return g2 ? (rn2(v, t), a & 128 && e.normalize(v)) : t && (v.shapeFlag |= H(t) ? 8 : 16), process.env.NODE_ENV !== "production" && v.key !== v.key && ae2("VNode created with invalid key (NaN). VNode type:", v.type), v;
}
var vo = process.env.NODE_ENV !== "production" ? ho : Vn2;
function Vn2(e, n = null, t = null, o = 0, s = null, a = false) {
  if ((!e || e === co) && (process.env.NODE_ENV !== "production" && !e && ae2(`Invalid vnode type when creating vnode: ${e}.`), e = fo), mo(e)) {
    const g2 = $e2(
      e,
      n,
      true
      /* mergeRef: true */
    );
    return t && rn2(g2, t), g2.patchFlag = -2, g2;
  }
  if (Mn2(e) && (e = e.__vccOpts), n) {
    n = _o(n);
    let { class: g2, style: v } = n;
    g2 && !H(g2) && (n.class = tn2(g2)), L2(v) && (Ue(v) && !D2(v) && (v = Se({}, v)), n.style = nn2(v));
  }
  const c = H(e) ? 1 : lo(e) ? 128 : io(e) ? 64 : L2(e) ? 4 : B2(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && c & 4 && Ue(e) && (e = K2(e), ae2(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), go(
    e,
    n,
    t,
    o,
    s,
    c,
    a,
    true
  );
}
function _o(e) {
  return e ? Ue(e) || Pn(e) ? Se({}, e) : e : null;
}
function $e2(e, n, t = false, o = false) {
  const { props: s, ref: a, patchFlag: c, children: g2, transition: v } = e, d = n ? $o(s || {}, n) : s, r2 = {
    __v_isVNode: true,
    __v_skip: true,
    type: e.type,
    props: d,
    key: d && Fn2(d),
    ref: n && n.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      t && a ? D2(a) ? a.concat(me(n)) : [a, me(n)] : me(n)
    ) : a,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && c === -1 && D2(g2) ? g2.map(Rn2) : g2,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: n && e.type !== Tn2 ? c === -1 ? 16 : c | 16 : c,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: v,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && $e2(e.ssContent),
    ssFallback: e.ssFallback && $e2(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return v && o && Dn2(
    r2,
    v.clone(r2)
  ), r2;
}
function Rn2(e) {
  const n = $e2(e);
  return D2(e.children) && (n.children = e.children.map(Rn2)), n;
}
function Co(e = " ", n = 0) {
  return vo(po, null, e, n);
}
function rn2(e, n) {
  let t = 0;
  const { shapeFlag: o } = e;
  if (n == null)
    n = null;
  else if (D2(n))
    t = 16;
  else if (typeof n == "object")
    if (o & 65) {
      const s = n.default;
      s && (s._c && (s._d = false), rn2(e, s()), s._c && (s._d = true));
      return;
    } else
      t = 32, !n._ && !Pn(n) && (n._ctx = Ce);
  else B2(n) ? (n = { default: n, _ctx: Ce }, t = 32) : (n = String(n), o & 64 ? (t = 16, n = [Co(n)]) : t = 8);
  e.children = n, e.shapeFlag |= t;
}
function $o(...e) {
  const n = {};
  for (let t = 0; t < e.length; t++) {
    const o = e[t];
    for (const s in o)
      if (s === "class")
        n.class !== o.class && (n.class = tn2([n.class, o.class]));
      else if (s === "style")
        n.style = nn2([n.style, o.style]);
      else if (kt(s)) {
        const a = n[s], c = o[s];
        c && a !== c && !(D2(a) && a.includes(c)) && (n[s] = a ? [].concat(a, c) : c);
      } else s !== "" && (n[s] = o[s]);
  }
  return n;
}
{
  const e = je(), n = (t, o) => {
    let s;
    return (s = e[t]) || (s = e[t] = []), s.push(o), (a) => {
      s.length > 1 ? s.forEach((c) => c(a)) : s[0](a);
    };
  };
  n(
    "__VUE_INSTANCE_SETTERS__",
    (t) => t
  ), n(
    "__VUE_SSR_SETTERS__",
    (t) => t
  );
}
process.env.NODE_ENV;
var bo = /(?:^|[-_])(\w)/g;
var wo = (e) => e.replace(bo, (n) => n.toUpperCase()).replace(/[-_]/g, "");
function kn(e, n = true) {
  return B2(e) ? e.displayName || e.name : e.name || n && e.__name;
}
function Hn(e, n, t = false) {
  let o = kn(n);
  if (!o && n.__file) {
    const s = n.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (a) => {
      for (const c in a)
        if (a[c] === n)
          return c;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? wo(o) : t ? "App" : "Anonymous";
}
function Mn2(e) {
  return B2(e) && "__vccOpts" in e;
}
function No() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, n = { style: "color:#1677ff" }, t = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: true,
    header(i) {
      return L2(i) ? i.__isVue ? ["div", e, "VueInstance"] : on2(i) ? [
        "div",
        {},
        ["span", e, r2(i)],
        "<",
        // avoid debugger accessing value affecting behavior
        g2("_value" in i ? i._value : i),
        ">"
      ] : En2(i) ? [
        "div",
        {},
        ["span", e, Ie2(i) ? "ShallowReactive" : "Reactive"],
        "<",
        g2(i),
        `>${Be(i) ? " (readonly)" : ""}`
      ] : Be(i) ? [
        "div",
        {},
        ["span", e, Ie2(i) ? "ShallowReadonly" : "Readonly"],
        "<",
        g2(i),
        ">"
      ] : null : null;
    },
    hasBody(i) {
      return i && i.__isVue;
    },
    body(i) {
      if (i && i.__isVue)
        return [
          "div",
          {},
          ...a(i.$)
        ];
    }
  };
  function a(i) {
    const l2 = [];
    i.type.props && i.props && l2.push(c("props", K2(i.props))), i.setupState !== ze && l2.push(c("setup", i.setupState)), i.data !== ze && l2.push(c("data", K2(i.data)));
    const m2 = v(i, "computed");
    m2 && l2.push(c("computed", m2));
    const C2 = v(i, "inject");
    return C2 && l2.push(c("injected", C2)), l2.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: i }]
    ]), l2;
  }
  function c(i, l2) {
    return l2 = Se({}, l2), Object.keys(l2).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        i
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(l2).map((m2) => [
          "div",
          {},
          ["span", o, m2 + ": "],
          g2(l2[m2], false)
        ])
      ]
    ] : ["span", {}];
  }
  function g2(i, l2 = true) {
    return typeof i == "number" ? ["span", n, i] : typeof i == "string" ? ["span", t, JSON.stringify(i)] : typeof i == "boolean" ? ["span", o, i] : L2(i) ? ["object", { object: l2 ? K2(i) : i }] : ["span", t, String(i)];
  }
  function v(i, l2) {
    const m2 = i.type;
    if (B2(m2))
      return;
    const C2 = {};
    for (const p in i.ctx)
      d(m2, p, l2) && (C2[p] = i.ctx[p]);
    return C2;
  }
  function d(i, l2, m2) {
    const C2 = i[m2];
    if (D2(C2) && C2.includes(l2) || L2(C2) && l2 in C2 || i.extends && d(i.extends, l2, m2) || i.mixins && i.mixins.some((p) => d(p, l2, m2)))
      return true;
  }
  function r2(i) {
    return Ie2(i) ? "ShallowRef" : i.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
function yo() {
  No();
}
process.env.NODE_ENV !== "production" && yo();
function Eo(e) {
  return Pt(e) || Tt(e) || Dt(e) || Ft2(e) || Vt(e);
}
var Ln = /* @__PURE__ */ ((e) => (e.Java = "java", e.Kotlin = "kotlin", e.CSharp = "csharp", e.Go = "go", e))(Ln || {});
var j3 = class {
  imports = /* @__PURE__ */ new Set();
  parentDir;
  name;
  content = "";
  constructor(n, t) {
    this.parentDir = n, this.name = t;
  }
  addImport(n) {
    this.imports.add(n);
  }
  addImports(n) {
    for (const t of n)
      this.imports.add(t);
  }
  getImports() {
    return Array.from(this.imports);
  }
  appendContent(n) {
    this.content += n;
  }
  appendContentln(n) {
    this.content += n + `
`;
  }
  getContent() {
    return this.content;
  }
  getName() {
    return this.name;
  }
  setName(n) {
    this.name = n;
  }
  getParentDir() {
    return this.parentDir;
  }
  setParentDir(n) {
    this.parentDir = n;
  }
};
var be2;
((e) => {
  ((n) => {
    n.Lombok = "Lombok", n.LombokBuilder = "LombokBuilder", n.RecordVakueObject = "RecordVakueObject", n.CommandHandler = "CommandHandler", n.Jpa = "Jpa", n.Timezone = "Timezone", n.SpringFramework = "SpringFramework";
  })(e.JavaGeneratorAddition || (e.JavaGeneratorAddition = {}));
})(be2 || (be2 = {}));
var we;
((e) => {
  ((n) => {
    n.ValueClass = "ValueClass", n.CommandHandler = "CommandHandler", n.Timezone = "Timezone";
  })(e.KotlinGeneratorAddition || (e.KotlinGeneratorAddition = {}));
})(we || (we = {}));
var Ne;
((e) => {
  ((n) => {
    n.Timezone = "Timezone", n.RecordStruct = "RecordStruct", n.PrimaryConstructor = "PrimaryConstructor", n.CommandHandlerInterface = "CommandHandlerInterface", n.AggInterface = "AggInterface";
  })(e.CSharpGeneratorAddition || (e.CSharpGeneratorAddition = {}));
})(Ne || (Ne = {}));
var We;
((e) => {
  ((n) => {
    n.SinglePackageEachDesigner = "SinglePackageEachDesigner";
  })(e.GoGeneratorAddition || (e.GoGeneratorAddition = {}));
})(We || (We = {}));
var jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CodeFile: j3,
  Language: Ln,
  get csharp() {
    return Ne;
  },
  get go() {
    return We;
  },
  isStruct: Eo,
  get java() {
    return be2;
  },
  get kotlin() {
    return we;
  }
}, Symbol.toStringTag, { value: "Module" }));
var N2;
((e) => {
  function n(d) {
    return d.trim().split(d.includes("_") ? /_|\s/ : /(?=[A-Z])/g).map((r2) => r2.charAt(0).toUpperCase() + r2.toLowerCase().slice(1)).join("");
  }
  e.stringToUpperCamel = n;
  function t(d) {
    let r2 = true;
    return d.trim().split(d.includes("_") ? /_|\s/ : /(?=[A-Z])/g).map((i) => r2 ? (r2 = false, i.toLowerCase()) : i.charAt(0).toUpperCase() + i.toLowerCase().slice(1)).join("");
  }
  e.stringToLowerCamel = t;
  function o(d) {
    return d.includes("_") ? d.toLowerCase() : a(d);
  }
  e.stringToLowerSnake = o;
  function s(d) {
    return d.trim().split(/(?=[A-Z])/g).join("_").toUpperCase();
  }
  e.camelToUpperSnake = s;
  function a(d) {
    return d.trim().split(/(?=[A-Z])/g).join("_").toLowerCase();
  }
  e.camelToLowerSnake = a;
  function c(d) {
    return d.trim().split("_").map((r2) => r2.charAt(0).toUpperCase() + r2.slice(1)).join("");
  }
  e.snakeToUpperCamel = c;
  function g2(d) {
    return d.trim().charAt(0).toLowerCase() + d.slice(1);
  }
  e.lowerFirst = g2;
  function v(d) {
    return d.trim().charAt(0).toUpperCase() + d.slice(1);
  }
  e.upperFirst = v;
})(N2 || (N2 = {}));
var O2 = be2.JavaGeneratorAddition;
var Oo = ue.createHotSwapPlugin(() => {
  const e = "value";
  function n(t) {
    return N2.stringToUpperCamel(t._attributes.name);
  }
  return {
    unmount({ api: t }) {
      t.commands.clearCaches(), t.commands._setCommandCodeProvider(() => []), t.commands._setFacadeCommandCodeProvider(() => []), t.commands._setAggCodeProvider(() => []), t.commands._setEventCodeProvider(() => []), t.commands._setReadModelCodeProvider(() => []), t.commands._setCodeFileProvider(() => []), t.commands.setContext({});
    },
    mount({ api: t }) {
      const o = t.states.context, s = t.states.designer.value._getContext().getDesignerOptions().ignoreValueObjects.map((r2) => N2.stringToLowerCamel(r2));
      function a(r2) {
        return !s.includes(N2.stringToLowerCamel(r2._attributes.name));
      }
      function c(r2, i) {
        return a(i) ? N2.stringToUpperCamel(i._attributes.name) : v(r2, i);
      }
      function g2(r2, i) {
        for (const l2 of i) {
          if (!a(l2)) {
            v(r2, l2);
            continue;
          }
          r2.add(
            `${o.value.namespace}.${o.value.moduleName}.${e}.${n(l2)}`
          );
        }
      }
      function v(r2, i) {
        const l2 = o.value.additions, m2 = N2.stringToLowerSnake(i._attributes.name).replace(/_/, " ");
        return /\b(time|timestamp|date|deadline|expire)\b/.test(m2) ? l2.has(O2.Timezone) ? (r2.add("java.time.OffsetDateTime"), "OffsetDateTime") : (r2.add("java.time.LocalDateTime"), "LocalDateTime") : /\b(enum|gender|sex|count|amount|num|number|flag|times)\b/.test(m2) ? "Integer" : /\b(price)$/.test(m2) ? (r2.add("java.math.BigDecimal"), "BigDecimal") : /^(if|is)\b/.test(m2) ? "Boolean" : Ee(i) && (i._attributes.type === "Id" || i._attributes.type === "Version") ? "Long" : "String";
      }
      t.commands._setInfoCodeProvider(
        (r2) => {
          const i = /* @__PURE__ */ new Set();
          i.add(o.value.nonNullAnnotation);
          const l2 = o.value.nonNullAnnotation.split(".").pop(), m2 = n(r2), C2 = o.value.additions, p = [];
          return C2.has(O2.RecordVakueObject) ? (p.push(`public record ${m2}(@${l2} ${v(i, r2)} value) {`), p.push(`    public ${m2} {`), p.push("        // HACK check value"), p.push("    }"), p.push("}")) : C2.has(O2.Lombok) ? (p.push("@lombok.Getter"), p.push(`public class ${m2} {`), p.push(`    private final ${v(i, r2)} value;`), p.push(""), p.push(`    public ${m2} (@${l2} ${v(i, r2)} value) {`), p.push("        // HACK check value"), p.push("        this.value = value;"), p.push("    }"), p.push("}")) : (p.push(`public class ${n(r2)} {`), p.push(`    private final ${v(i, r2)} value;`), p.push(""), p.push(`    public ${m2} (@${l2} ${v(i, r2)} value) {`), p.push("        // HACK check value"), p.push("        this.value = value;"), p.push("    }"), p.push(""), p.push(`    public ${v(i, r2)} getValue() {`), p.push("        return this.value;"), p.push("    }"), p.push("}")), [
            {
              type: "Info",
              imports: i,
              content: p.join(`
`)
            }
          ];
        }
      );
      function d(r2) {
        const i = [], l2 = o.value.additions, m2 = o.value.nonNullAnnotation.split(".").pop();
        {
          const C2 = /* @__PURE__ */ new Set();
          C2.add(o.value.nonNullAnnotation);
          const p = n(r2), f = [], $2 = Object.values(r2.inner);
          if (g2(C2, $2), l2.has(O2.RecordVakueObject)) {
            l2.has(O2.LombokBuilder) && f.push("@lombok.Builder(toBuilder = true)"), f.push(`public record ${p}(`);
            const _ = [];
            for (const b2 of $2) {
              const h2 = n(b2);
              _.push(
                `        @${m2}
        ${c(
                  C2,
                  b2
                )} ${N2.lowerFirst(h2)}`
              );
            }
            f.push(_.join(`,
`)), f.push(") {"), f.push(`    public ${p} {`), f.push("        // HACK check value"), f.push("    }"), f.push("}");
          } else if (l2.has(O2.Lombok)) {
            f.push("@lombok.AllArgsConstructor"), f.push("@lombok.Getter"), l2.has(O2.LombokBuilder) && f.push("@lombok.Builder(toBuilder = true)"), f.push(`public class ${p} {`);
            for (const _ of $2) {
              const b2 = n(_);
              f.push(`    @${m2}`), f.push(
                `    private final ${c(C2, _)} ${N2.lowerFirst(b2)};`
              );
            }
            f.push("}");
          } else {
            f.push(`public class ${p} {`);
            for (const h2 of $2) {
              const u = n(h2);
              f.push(`    @${m2}`), f.push(
                `    private final ${c(C2, h2)} ${N2.lowerFirst(u)};`
              );
            }
            f.push("");
            const _ = [], b2 = [];
            for (const h2 of $2) {
              const u = n(h2);
              _.push(
                `@${m2} ${v(C2, h2)} ${N2.lowerFirst(u)}`
              ), b2.push(`this.${N2.lowerFirst(u)} = ${N2.lowerFirst(u)};`);
            }
            f.push(`    public ${p}(${_.join(", ")}) {`), f.push(`        ${b2.join(`
        `)}`), f.push("    }");
            for (const h2 of $2) {
              const u = n(h2);
              f.push(""), f.push(`    public ${c(C2, h2)} get${u} () {`), f.push(`        return this.${N2.lowerFirst(u)};`), f.push("    }");
            }
            f.push("}");
          }
          i.push({
            type: "Command",
            imports: C2,
            content: f.join(`
`)
          });
        }
        if (!l2.has(O2.CommandHandler))
          return i;
        {
          const C2 = /* @__PURE__ */ new Set();
          C2.add(o.value.nonNullAnnotation);
          const p = n(r2), f = [];
          l2.has(O2.SpringFramework) && (C2.add("org.springframework.stereotype.Component"), f.push("@Component")), l2.has(O2.Lombok) && f.push("@lombok.RequiredArgsConstructor"), f.push(`public class ${p}Handler {`);
          const $2 = [...t.states.designer.value._getContext().getAssociationMap()[r2._attributes.__id]].filter(
            (_) => _._attributes.rule === "Agg"
          );
          for (const _ of $2)
            C2.add(`${o.value.namespace}.${o.value.moduleName}.${n(_)}`), f.push(`    public ${n(_)} handle(@${m2} ${p} command) {`), f.push("        // HACK Implement"), f.push("    }");
          f.push("}"), i.push({
            type: "CommandHandler",
            imports: C2,
            content: f.join(`
`)
          });
        }
        return i;
      }
      t.commands._setCommandCodeProvider(d), t.commands._setFacadeCommandCodeProvider(d), t.commands._setAggCodeProvider(
        (r2) => {
          const i = o.value.additions, l2 = t.states.designer.value, m2 = o.value.nonNullAnnotation.split(".").pop(), C2 = n(r2), p = [];
          {
            const f = /* @__PURE__ */ new Set();
            f.add(o.value.nonNullAnnotation);
            const $2 = [], _ = [], b2 = [...l2._getContext().getAssociationMap()[r2._attributes.__id]].filter((h2) => h2._attributes.rule === "Command" || h2._attributes.rule === "FacadeCommand");
            for (const h2 of b2) {
              const u = n(h2);
              _.push(`public void handle${u}(@${m2} ${u} command);`);
            }
            $2.push(`public interface ${C2} {`), $2.push(`    ${_.join(`

    `)}`), $2.push("}"), p.push({
              type: "Agg",
              imports: f,
              content: $2.join(`
`)
            });
          }
          {
            const f = /* @__PURE__ */ new Set();
            f.add(o.value.nonNullAnnotation);
            const $2 = [], _ = Object.values(r2.inner);
            if (g2(f, _), i.has(O2.Lombok)) {
              $2.push("@lombok.AllArgsConstructor"), $2.push("@lombok.Getter"), $2.push(`public class ${C2}Impl implements ${C2} {`);
              for (const h2 of _) {
                const u = n(h2);
                $2.push(`    @${m2}`), $2.push(`    private ${c(f, h2)} ${N2.lowerFirst(u)};`);
              }
              const b2 = [...l2._getContext().getAssociationMap()[r2._attributes.__id]].filter((h2) => h2._attributes.rule === "Command" || h2._attributes.rule === "FacadeCommand");
              for (const h2 of b2) {
                const u = n(h2);
                $2.push(""), $2.push(
                  `    public void handle${u}(@${m2} ${u} ${N2.lowerFirst(
                    u
                  )}) {`
                ), $2.push("        // HACK need implement"), $2.push("    }");
              }
              $2.push("}");
            } else {
              $2.push(`public class ${C2}Impl implements ${C2} {`);
              for (const w2 of _) {
                const y3 = n(w2);
                $2.push(`    @${m2}`), $2.push(`    private ${c(f, w2)} ${N2.lowerFirst(y3)};`);
              }
              $2.push("");
              const b2 = [], h2 = [];
              for (const w2 of _) {
                const y3 = n(w2);
                b2.push(
                  `@${m2} ${c(f, w2)} ${N2.lowerFirst(y3)}`
                ), h2.push(`this.${N2.lowerFirst(y3)} = ${N2.lowerFirst(y3)};`);
              }
              $2.push(`    public ${C2}(${b2.join(", ")}) {`), $2.push(`        ${h2.join(`
        `)}`), $2.push("    }");
              for (const w2 of _) {
                const y3 = n(w2);
                $2.push(""), $2.push(`    @${m2}`), $2.push(`    public ${c(f, w2)} get${y3}() {`), $2.push(`        return this.${N2.lowerFirst(y3)};`), $2.push("    }");
              }
              const u = [...l2._getContext().getAssociationMap()[r2._attributes.__id]].filter(
                (w2) => w2._attributes.rule === "Command" || w2._attributes.rule === "FacadeCommand"
              );
              for (const w2 of u) {
                const y3 = n(w2);
                $2.push(""), $2.push(
                  `    public void handle${y3}(@${m2} ${y3} ${N2.lowerFirst(
                    y3
                  )}) {`
                ), $2.push("        // HACK need implement"), $2.push("    }");
              }
              $2.push("}");
            }
            p.push({
              type: "AggImpl",
              imports: f,
              content: $2.join(`
`)
            });
          }
          return p;
        }
      ), t.commands._setEventCodeProvider(
        (r2) => {
          const i = /* @__PURE__ */ new Set();
          i.add(o.value.nonNullAnnotation);
          const l2 = o.value.nonNullAnnotation.split(".").pop(), m2 = o.value.additions, C2 = n(r2), p = [], f = Object.values(r2.inner);
          if (g2(i, f), m2.has(O2.RecordVakueObject)) {
            m2.has(O2.LombokBuilder) && p.push("@lombok.Builder(toBuilder = true)"), p.push(`public record ${C2}(`);
            const $2 = [];
            for (const _ of f) {
              const b2 = n(_);
              $2.push(
                `        @${l2}
        ${c(
                  i,
                  _
                )} ${N2.lowerFirst(b2)}`
              );
            }
            p.push($2.join(`,
`)), p.push(") {"), p.push(`    public ${C2} {`), p.push("        // HACK check value"), p.push("    }"), p.push("}");
          } else if (m2.has(O2.Lombok)) {
            p.push("@lombok.AllArgsConstructor"), p.push("@lombok.Getter"), m2.has(O2.LombokBuilder) && p.push("@lombok.Builder(toBuilder = true)"), p.push(`public class ${C2} {`);
            for (const $2 of f) {
              const _ = n($2);
              p.push(`    @${l2}`), p.push(
                `    private final ${c(i, $2)} ${N2.lowerFirst(_)};`
              );
            }
            p.push("}");
          } else {
            p.push(`public class ${C2} {`);
            for (const b2 of f) {
              const h2 = n(b2);
              p.push(`    @${l2}`), p.push(`    private final ${h2} ${N2.lowerFirst(h2)};`);
            }
            p.push("");
            const $2 = [], _ = [];
            for (const b2 of f) {
              const h2 = n(b2);
              $2.push(
                `@${l2} ${v(i, b2)} ${N2.lowerFirst(h2)}`
              ), _.push(`this.${N2.lowerFirst(h2)} = ${N2.lowerFirst(h2)};`);
            }
            p.push(`    public ${C2}(${$2.join(", ")}) {`), p.push(`        ${_.join(`
        `)}`), p.push("    }");
            for (const b2 of f) {
              const h2 = n(b2);
              p.push(""), p.push(`    public ${h2} get${h2} () {`), p.push(`        return this.${N2.lowerFirst(h2)};`), p.push("    }");
            }
            p.push("}");
          }
          return [
            {
              type: "Event",
              imports: i,
              content: p.join(`
`)
            }
          ];
        }
      ), t.commands._setReadModelCodeProvider(() => []), t.commands._setCodeFileProvider(() => {
        const r2 = [], i = {};
        function l2($2) {
          for (const _ of Object.values($2)) {
            if (!a(_))
              continue;
            const b2 = [...o.value.namespace.split(/\./), o.value.moduleName, e], h2 = n(_) + ".java";
            if (i[`${b2.join("/")}/${h2}`] === true)
              continue;
            const u = t.commands._genInfoCode(_);
            if (u.length === 0)
              continue;
            const w2 = new j3(b2, h2);
            w2.appendContentln(`package ${o.value.namespace}.${o.value.moduleName}.${e};`), w2.appendContentln("");
            for (const y3 of u[0].imports)
              w2.appendContentln(`import ${y3};`);
            w2.appendContentln(""), w2.appendContentln(u[0].content), r2.push(w2), i[`${b2.join("/")}/${h2}`] = true;
          }
        }
        const m2 = t.states.designer.value._getContext().getCommands();
        for (const $2 of m2) {
          l2($2.inner);
          const _ = t.commands._genCommandCode($2), b2 = [...o.value.namespace.split(/\./), o.value.moduleName];
          _.forEach((h2) => {
            if (h2.type === "Command") {
              const u = new j3(b2, n($2) + ".java");
              u.appendContentln(`package ${o.value.namespace}.${o.value.moduleName};`), u.appendContentln(""), u.addImports(h2.imports);
              for (const w2 of h2.imports)
                u.appendContentln(`import ${w2};`);
              u.appendContentln(""), u.appendContentln(h2.content), r2.push(u);
            } else if (h2.type === "CommandHandler") {
              const u = new j3(b2, n($2) + "Handler.java");
              u.appendContentln(`package ${o.value.namespace}.${o.value.moduleName};`), u.appendContentln(""), u.addImports(h2.imports);
              for (const w2 of h2.imports)
                u.appendContentln(`import ${w2};`);
              u.appendContentln(""), u.appendContentln(h2.content), r2.push(u);
            } else
              isNever(h2.type);
          });
        }
        const C2 = t.states.designer.value._getContext().getFacadeCommands();
        for (const $2 of C2) {
          l2($2.inner);
          const _ = t.commands._genFacadeCommandCode($2), b2 = [...o.value.namespace.split(/\./), o.value.moduleName];
          _.forEach((h2) => {
            if (h2.type === "FacadeCommand") {
              const u = new j3(b2, n($2) + ".java");
              u.appendContentln(`package ${o.value.namespace}.${o.value.moduleName};`), u.appendContentln(""), u.addImports(h2.imports);
              for (const w2 of h2.imports)
                u.appendContentln(`import ${w2};`);
              u.appendContentln(""), u.appendContentln(h2.content), r2.push(u);
            } else
              isNever(h2.type);
          });
        }
        const p = t.states.designer.value._getContext().getAggs();
        for (const $2 of p) {
          l2($2.inner);
          const _ = t.commands._genAggCode($2), b2 = [...o.value.namespace.split(/\./), o.value.moduleName];
          _.forEach((h2) => {
            if (h2.type === "Agg") {
              const u = new j3(b2, n($2) + ".java");
              u.appendContentln(`package ${o.value.namespace}.${o.value.moduleName};`), u.appendContentln(""), u.addImports(h2.imports);
              for (const w2 of h2.imports)
                u.appendContentln(`import ${w2};`);
              u.appendContentln(""), u.appendContentln(h2.content), r2.push(u);
            } else if (h2.type === "AggImpl") {
              const u = new j3(b2, n($2) + "Impl.java");
              u.appendContentln(`package ${o.value.namespace}.${o.value.moduleName};`), u.appendContentln(""), u.addImports(h2.imports);
              for (const w2 of h2.imports)
                u.appendContentln(`import ${w2};`);
              u.appendContentln(""), u.appendContentln(h2.content), r2.push(u);
            } else
              isNever(h2.type);
          });
        }
        const f = t.states.designer.value._getContext().getEvents();
        for (const $2 of f) {
          l2($2.inner);
          const _ = t.commands._genEventCode($2), b2 = [...o.value.namespace.split(/\./), o.value.moduleName];
          _.forEach((h2) => {
            const u = new j3(b2, n($2) + ".java");
            u.appendContentln(`package ${o.value.namespace}.${o.value.moduleName};`), u.appendContentln(""), u.addImports(h2.imports);
            for (const w2 of h2.imports)
              u.appendContentln(`import ${w2};`);
            u.appendContentln(""), u.appendContentln(h2.content), r2.push(u);
          });
        }
        return r2;
      });
    }
  };
});
var Te = we.KotlinGeneratorAddition;
var Ao = ue.createHotSwapPlugin(() => ({
  unmount({ api: e }) {
    e.commands.clearCaches(), e.commands._setCommandCodeProvider(() => []), e.commands._setFacadeCommandCodeProvider(() => []), e.commands._setAggCodeProvider(() => []), e.commands._setEventCodeProvider(() => []), e.commands._setReadModelCodeProvider(() => []), e.commands._setCodeFileProvider(() => []), e.commands.setContext({});
  },
  mount({ api: e }) {
    const n = "value", t = e.states.context, o = e.states.designer.value._getContext().getDesignerOptions().ignoreValueObjects.map((d) => N2.stringToLowerCamel(d));
    function s(d) {
      return !o.includes(N2.stringToLowerCamel(d._attributes.name));
    }
    function a(d, r2) {
      return s(r2) ? N2.stringToUpperCamel(r2._attributes.name) : v(d, r2);
    }
    function c(d) {
      return N2.stringToUpperCamel(d._attributes.name);
    }
    function g2(d, r2) {
      for (const i of r2) {
        if (!s(i)) {
          v(d, i);
          continue;
        }
        d.add(
          `${t.value.namespace}.${t.value.moduleName}.${n}.${c(i)}`
        );
      }
    }
    function v(d, r2) {
      const i = t.value.additions, l2 = N2.stringToLowerSnake(r2._attributes.name).replace(/_/, " ");
      return /\b(time|timestamp|date|deadline|expire)\b/.test(l2) ? i.has(Te.Timezone) ? (d.add("java.time.OffsetDateTime"), "OffsetDateTime") : (d.add("java.time.LocalDateTime"), "LocalDateTime") : /\b(enum|gender|sex|count|amount|num|number|flag|times)\b/.test(l2) ? "Integer" : /\b(price)$/.test(l2) ? (d.add("java.math.BigDecimal"), "BigDecimal") : /^(if|is)\b/.test(l2) ? "Boolean" : Ee(r2) && (r2._attributes.type === "Id" || r2._attributes.type === "Version") ? "Long" : "String";
    }
    e.commands._setInfoCodeProvider(
      (d) => {
        const r2 = /* @__PURE__ */ new Set(), i = c(d), l2 = t.value.additions, m2 = [];
        return l2.has(Te.ValueClass) ? (r2.add("kotlin.jvm.JvmInline"), m2.push("@JvmInline"), m2.push(`value class ${i}(val value: ${v(r2, d)})`)) : m2.push(`data class ${i}(val value: ${v(r2, d)})`), [
          {
            type: "Info",
            imports: r2,
            content: m2.join(`
`)
          }
        ];
      }
    ), e.commands._setCommandCodeProvider(
      (d) => {
        const r2 = [], i = t.value.additions;
        {
          const l2 = /* @__PURE__ */ new Set(), m2 = c(d), C2 = [], p = Object.values(d.inner);
          g2(l2, p);
          const f = [];
          for (const $2 of p) {
            const _ = c($2);
            f.push(`val ${N2.lowerFirst(_)}: ${a(l2, $2)}`);
          }
          C2.push(`data class ${m2}(${f.join(", ")})`), r2.push({
            type: "Command",
            imports: l2,
            content: C2.join(`
`)
          });
        }
        if (!i.has(Te.CommandHandler))
          return r2;
        {
          const l2 = /* @__PURE__ */ new Set(), m2 = c(d), C2 = [];
          C2.push(`class ${m2}Handler {`);
          const p = [...e.states.designer.value._getContext().getAssociationMap()[d._attributes.__id]].filter(
            (f) => f._attributes.rule === "Agg"
          );
          for (const f of p)
            l2.add(`${t.value.namespace}.${t.value.moduleName}.${c(f)}`), C2.push(`    fun handle(command: ${m2}): ${c(f)} {`), C2.push("        // HACK Implement"), C2.push("    }");
          C2.push("}"), r2.push({
            type: "CommandHandler",
            imports: l2,
            content: C2.join(`
`)
          });
        }
        return r2;
      }
    ), e.commands._setFacadeCommandCodeProvider(
      (d) => {
        const r2 = /* @__PURE__ */ new Set(), i = c(d), l2 = [], m2 = Object.values(d.inner);
        g2(r2, m2);
        const C2 = [];
        for (const p of m2) {
          const f = c(p);
          C2.push(`val ${N2.lowerFirst(f)}: ${a(r2, p)}`);
        }
        return l2.push(`data class ${i}(${C2.join(", ")})`), [
          {
            type: "FacadeCommand",
            imports: r2,
            content: l2.join(`
`)
          }
        ];
      }
    ), e.commands._setAggCodeProvider((d) => {
      const r2 = /* @__PURE__ */ new Set(), i = e.states.designer.value, l2 = c(d), m2 = [], C2 = Object.values(d.inner);
      g2(r2, C2);
      const p = [], f = [...i._getContext().getAssociationMap()[d._attributes.__id]].filter((_) => _._attributes.rule === "Command" || _._attributes.rule === "FacadeCommand");
      for (const _ of f) {
        const b2 = c(_);
        p.push(`fun handle(command: ${b2})`);
      }
      m2.push(`interface ${l2} {`), m2.push(`    ${p.join(`
    `)}`), m2.push("}"), m2.push(""), m2.push(`class ${l2}Impl(`);
      const $2 = [];
      for (const _ of C2) {
        const b2 = c(_);
        $2.push(`val ${N2.lowerFirst(b2)}: ${a(r2, _)}`);
      }
      m2.push(`    ${$2.join(`,
    `)}`), m2.push(`): ${l2} {`);
      for (const _ of f) {
        const b2 = c(_);
        m2.push(`    override fun handle(command: ${b2}) {`), m2.push("        // HACK Implement"), m2.push("    }");
      }
      return m2.push("}"), [
        {
          type: "Agg",
          imports: r2,
          content: m2.join(`
`)
        }
      ];
    }), e.commands._setEventCodeProvider(
      (d) => {
        const r2 = /* @__PURE__ */ new Set(), i = c(d), l2 = [], m2 = Object.values(d.inner);
        g2(r2, m2);
        const C2 = [];
        for (const p of m2) {
          const f = c(p);
          C2.push(`val ${N2.lowerFirst(f)}: ${a(r2, p)}`);
        }
        return l2.push(`data class ${i}(${C2.join(", ")})`), [
          {
            type: "Event",
            imports: r2,
            content: l2.join(`
`)
          }
        ];
      }
    ), e.commands._setReadModelCodeProvider(() => []), e.commands._setCodeFileProvider(() => {
      const d = [], r2 = {};
      function i(f) {
        for (const $2 of Object.values(f)) {
          if (!s($2))
            continue;
          const _ = [...t.value.namespace.split(/\./), t.value.moduleName, n], b2 = c($2) + ".kt";
          if (r2[`${_.join("/")}/${b2}`] === true)
            continue;
          const h2 = e.commands._genInfoCode($2);
          if (h2.length === 0)
            continue;
          const u = new j3(_, b2);
          u.appendContentln(`package ${t.value.namespace}.${t.value.moduleName}.${n}`), u.appendContentln("");
          for (const w2 of h2[0].imports)
            u.appendContentln(`import ${w2}`);
          u.appendContentln(""), u.appendContentln(h2[0].content), d.push(u), r2[`${_.join("/")}/${b2}`] = true;
        }
      }
      const l2 = e.states.designer.value._getContext().getCommands();
      for (const f of l2) {
        i(f.inner);
        const $2 = e.commands._genCommandCode(f), _ = [...t.value.namespace.split(/\./), t.value.moduleName], b2 = new j3(_, c(f) + ".kt"), h2 = [];
        b2.appendContentln(`package ${t.value.namespace}.${t.value.moduleName}`), b2.appendContentln(""), $2.forEach((u) => {
          u.type === "Command" || u.type === "CommandHandler" ? (b2.addImports(u.imports), h2.push(u.content)) : isNever(u.type);
        });
        for (const u of b2.getImports())
          b2.appendContentln(`import ${u}`);
        b2.appendContentln("");
        for (const u of h2)
          b2.appendContentln(u);
        d.push(b2);
      }
      const m2 = e.states.designer.value._getContext().getFacadeCommands();
      for (const f of m2) {
        i(f.inner);
        const $2 = e.commands._genFacadeCommandCode(f), _ = [...t.value.namespace.split(/\./), t.value.moduleName];
        $2.forEach((b2) => {
          if (b2.type === "FacadeCommand") {
            const h2 = new j3(_, c(f) + ".kt");
            h2.appendContentln(`package ${t.value.namespace}.${t.value.moduleName}`), h2.appendContentln(""), h2.addImports(b2.imports);
            for (const u of b2.imports)
              h2.appendContentln(`import ${u}`);
            h2.appendContentln(""), h2.appendContentln(b2.content), d.push(h2);
          } else
            isNever(b2.type);
        });
      }
      const C2 = e.states.designer.value._getContext().getAggs();
      for (const f of C2) {
        i(f.inner);
        const $2 = e.commands._genAggCode(f), _ = [...t.value.namespace.split(/\./), t.value.moduleName], b2 = new j3(_, c(f) + ".kt"), h2 = [];
        b2.appendContentln(`package ${t.value.namespace}.${t.value.moduleName}`), b2.appendContentln(""), $2.forEach((u) => {
          u.type === "Agg" || u.type === "AggImpl" ? (b2.addImports(u.imports), h2.push(u.content)) : isNever(u.type);
        });
        for (const u of b2.getImports())
          b2.appendContentln(`import ${u}`);
        b2.appendContentln("");
        for (const u of h2)
          b2.appendContentln(u);
        d.push(b2);
      }
      const p = e.states.designer.value._getContext().getEvents();
      for (const f of p) {
        i(f.inner);
        const $2 = e.commands._genEventCode(f), _ = [...t.value.namespace.split(/\./), t.value.moduleName];
        $2.forEach((b2) => {
          if (b2.type === "Event") {
            const h2 = new j3(_, c(f) + ".kt");
            h2.appendContentln(`package ${t.value.namespace}.${t.value.moduleName}`), h2.appendContentln(""), h2.addImports(b2.imports);
            for (const u of b2.imports)
              h2.appendContentln(`import ${u}`);
            h2.appendContentln(""), h2.appendContentln(b2.content), d.push(h2);
          } else
            isNever(b2.type);
        });
      }
      return d;
    });
  }
}));
var Io = ue.createHotSwapPlugin(() => ({
  unmount({ api: e }) {
    e.commands.clearCaches(), e.commands._setCommandCodeProvider(() => []), e.commands._setFacadeCommandCodeProvider(() => []), e.commands._setAggCodeProvider(() => []), e.commands._setEventCodeProvider(() => []), e.commands._setReadModelCodeProvider(() => []), e.commands._setCodeFileProvider(() => []), e.commands.setContext({});
  },
  mount({ api: e }) {
    const n = e.states.context, t = e.states.designer.value._getContext().getDesignerOptions().ignoreValueObjects.map((v) => N2.stringToLowerCamel(v));
    function o(v) {
      return !t.includes(N2.stringToLowerCamel(v._attributes.name));
    }
    function s(v, d) {
      return o(d) ? N2.stringToUpperCamel(d._attributes.name) : g2(v, d);
    }
    function a(v) {
      return N2.stringToUpperCamel(v._attributes.name);
    }
    function c(v) {
      return N2.stringToLowerCamel(v._attributes.name);
    }
    function g2(v, d) {
      const r2 = N2.stringToLowerSnake(d._attributes.name).replace(/_/, " ");
      return /\b(time|timestamp|date|deadline|expire)\b/.test(r2) ? (v.add("time"), "time.Time") : /\b(enum|gender|sex|count|amount|num|number|flag|times)\b/.test(r2) ? "int" : /\b(price)$/.test(r2) ? "string" : /^(if|is)\b/.test(r2) ? "bool" : Ee(d) && (d._attributes.type === "Id" || d._attributes.type === "Version") ? "int64" : "string";
    }
    e.commands._setInfoCodeProvider(
      (v) => {
        const d = /* @__PURE__ */ new Set(), r2 = [];
        return r2.push(`type ${a(v)} struct {`), r2.push(`    value ${g2(d, v)}`), r2.push("}"), r2.push(""), r2.push(
          `func New${a(v)}(value ${g2(
            d,
            v
          )}) ${a(v)} {`
        ), r2.push("    // HACK check value"), r2.push(`    return ${a(v)}{value}`), r2.push("}"), r2.push(
          `func (${c(v)} ${a(v)}) GetValue() ${g2(
            d,
            v
          )} {`
        ), r2.push(`    return ${c(v)}.value`), r2.push("}"), [{ type: "Info", imports: d, content: r2.join(`
`) }];
      }
    ), e.commands._setCommandCodeProvider(
      (v) => {
        const d = a(v), r2 = c(v), i = /* @__PURE__ */ new Set(), l2 = [];
        l2.push(`type ${d} struct {`);
        const m2 = Object.values(v.inner);
        for (const f of m2)
          l2.push(`    ${c(f)} ${s(i, f)}`);
        l2.push("}");
        for (const f of m2)
          l2.push(
            `func (${r2} ${d}) Get${a(f)} () ${s(
              i,
              f
            )} {`
          ), l2.push(`    return ${r2}.${c(f)}`), l2.push("}");
        const C2 = [], p = [];
        for (const f of m2)
          C2.push(`${c(f)} ${s(i, f)}`), p.push(c(f));
        return l2.push(`func New${d}(${C2.join(", ")}) ${d} {`), l2.push("    // HACK check value"), l2.push(`    return ${d}{`), l2.push(`        ${p.join(`,
        `)},`), l2.push("    }"), l2.push("}"), [{ type: "Command", imports: i, content: l2.join(`
`) }];
      }
    ), e.commands._setFacadeCommandCodeProvider(
      (v) => {
        const d = a(v), r2 = c(v), i = Object.values(v.inner), l2 = /* @__PURE__ */ new Set(), m2 = [];
        m2.push(`type ${d} struct {`);
        for (const f of i)
          m2.push(`    ${c(f)} ${s(l2, f)}`);
        m2.push("}");
        for (const f of i)
          m2.push(
            `func (${r2} ${d}) Get${a(f)} () ${s(
              l2,
              f
            )} {`
          ), m2.push(`    return ${r2}.${c(f)}`), m2.push("}");
        const C2 = [], p = [];
        for (const f of i)
          C2.push(`${c(f)} ${s(l2, f)}`), p.push(c(f));
        return m2.push(`func New${d}(${C2.join(", ")}) ${d} {`), m2.push("    // HACK check value"), m2.push(`    return ${d}{`), m2.push(`        ${p.join(`,
        `)},`), m2.push("    }"), m2.push("}"), [
          {
            type: "FacadeCommand",
            imports: l2,
            content: m2.join(`
`)
          }
        ];
      }
    ), e.commands._setAggCodeProvider((v) => {
      const d = e.states.designer.value, r2 = a(v), i = c(v), l2 = Object.values(v.inner), m2 = /* @__PURE__ */ new Set(), C2 = [];
      C2.push(`type ${r2} struct {`);
      for (const _ of l2)
        C2.push(`    ${c(_)} ${s(m2, _)}`);
      C2.push("}");
      for (const _ of l2)
        C2.push(
          `func (${i} ${r2}) Get${a(_)} () ${s(
            m2,
            _
          )} {`
        ), C2.push(`    return ${i}.${c(_)}`), C2.push("}");
      const p = [], f = [];
      for (const _ of l2)
        p.push(`${c(_)} ${s(m2, _)}`), f.push(c(_));
      C2.push(`func New${r2}(${p.join(", ")}) ${r2} {`), C2.push("    // HACK check value"), C2.push(`    return ${r2}{`), C2.push(`        ${f.join(`,
        `)},`), C2.push("    }"), C2.push("}"), C2.push("");
      const $2 = [...d._getContext().getAssociationMap()[v._attributes.__id]].filter((_) => _._attributes.rule === "Command" || _._attributes.rule === "FacadeCommand");
      for (const _ of $2) {
        const b2 = a(_), h2 = c(_);
        C2.push(`func (${i} ${r2}) Handle${b2} (${h2} ${b2}) {`), C2.push("    // HACK implement"), C2.push("}");
      }
      return [
        {
          type: "Agg",
          imports: m2,
          content: C2.join(`
`)
        }
      ];
    }), e.commands._setEventCodeProvider(
      (v) => {
        const d = [], r2 = /* @__PURE__ */ new Set(), i = Object.values(v.inner), l2 = a(v), m2 = c(v);
        d.push(`type ${l2} struct {`);
        for (const f of i)
          d.push(`    ${c(f)} ${s(r2, f)}`);
        d.push("}");
        for (const f of i)
          d.push(
            `func (${m2} ${l2}) Get${a(f)} () ${s(
              r2,
              f
            )} {`
          ), d.push(`    return ${m2}.${c(f)}`), d.push("}");
        const C2 = [], p = [];
        for (const f of i)
          C2.push(`${c(f)} ${s(r2, f)}`), p.push(c(f));
        return d.push(`func New${l2}(${C2.join(", ")}) ${l2} {`), d.push("    // HACK check value"), d.push(`    return ${l2}{`), d.push(`        ${p.join(`,
        `)},`), d.push("    }"), d.push("}"), [
          {
            type: "Event",
            imports: r2,
            content: d.join(`
`)
          }
        ];
      }
    ), e.commands._setCodeFileProvider(() => {
      const v = [], d = {}, r2 = [...n.value.namespace.split(/\./), n.value.moduleName], i = new j3(r2, `${n.value.moduleName}.go`), l2 = [], m2 = new j3(r2, `${n.value.moduleName}_value_object.go`), C2 = [];
      function p(h2) {
        for (const u of Object.values(h2)) {
          if (!o(u))
            continue;
          const w2 = a(u);
          if (d[`${r2.join("/")}/${w2}`] === true)
            continue;
          const y3 = e.commands._genInfoCode(u);
          y3.length !== 0 && (m2.addImports(y3[0].imports), C2.push(y3[0].content), C2.push(""), d[`${r2.join("/")}/${w2}`] = true);
        }
      }
      const f = e.states.designer.value._getContext().getCommands();
      for (const h2 of f) {
        p(h2.inner);
        const u = e.commands._genCommandCode(h2);
        for (const w2 of u)
          d[w2.content] !== true && (i.addImports(w2.imports), l2.push(w2.content));
      }
      const $2 = e.states.designer.value._getContext().getFacadeCommands();
      for (const h2 of $2) {
        p(h2.inner);
        const u = e.commands._genFacadeCommandCode(h2);
        for (const w2 of u)
          d[w2.content] !== true && (i.addImports(w2.imports), l2.push(w2.content));
      }
      const _ = e.states.designer.value._getContext().getAggs();
      for (const h2 of _) {
        p(h2.inner);
        const u = e.commands._genAggCode(h2);
        for (const w2 of u)
          d[w2.content] !== true && (i.addImports(w2.imports), l2.push(w2.content));
      }
      const b2 = e.states.designer.value._getContext().getEvents();
      for (const h2 of b2) {
        p(h2.inner);
        const u = e.commands._genEventCode(h2);
        for (const w2 of u)
          d[w2.content] !== true && (i.addImports(w2.imports), l2.push(w2.content));
      }
      return i.appendContentln(`package ${n.value.moduleName}`), i.appendContentln(""), i.getImports().length > 0 && (i.appendContentln("import ("), i.appendContentln(`    ${[...i.getImports()].join(`
    `)}`), i.appendContentln(")")), i.appendContentln(l2.join(`
`)), m2.appendContentln(`package ${n.value.moduleName}`), m2.appendContentln(""), m2.getImports().length > 0 && (m2.appendContentln("import ("), m2.appendContentln(`    ${[...m2.getImports()].map((h2) => `"${h2}"`).join(`
    `)}`), m2.appendContentln(")"), m2.appendContentln("")), m2.appendContentln(C2.join(`
`)), v.push(i), v.push(m2), v;
    });
  }
}));
var G = Ne.CSharpGeneratorAddition;
var xo = ue.createHotSwapPlugin(() => {
  const e = "    ";
  function n(t, o = 1) {
    return t.split(`
`).map((s) => e.repeat(o) + s).join(`
`);
  }
  return {
    unmount({ api: t }) {
      t.commands.clearCaches(), t.commands._setCommandCodeProvider(() => []), t.commands._setFacadeCommandCodeProvider(() => []), t.commands._setAggCodeProvider(() => []), t.commands._setEventCodeProvider(() => []), t.commands._setReadModelCodeProvider(() => []), t.commands._setCodeFileProvider(() => []), t.commands.setContext({});
    },
    mount({ api: t }) {
      const o = t.states.context, s = t.states.designer.value._getContext().getDesignerOptions().ignoreValueObjects.map((r2) => N2.stringToLowerCamel(r2));
      function a(r2) {
        return !s.includes(N2.stringToLowerCamel(r2._attributes.name));
      }
      function c(r2, i) {
        return a(i) ? N2.stringToUpperCamel(i._attributes.name) : d(r2, i);
      }
      function g2(r2) {
        return N2.stringToUpperCamel(r2._attributes.name);
      }
      function v(r2) {
        return r2.has(G.RecordStruct) ? " struct" : "";
      }
      function d(r2, i) {
        const l2 = o.value.additions, m2 = N2.stringToLowerSnake(i._attributes.name).replace(/_/, " ");
        return /\b(time|timestamp|date|deadline|expire)\b/.test(m2) ? l2.has(G.Timezone) ? "System.DateTimeOffset" : "System.DateTime" : /\b(enum|gender|sex|count|amount|num|number|flag|times)\b/.test(m2) ? "int" : /\b(price)$/.test(m2) ? "decimal" : /^(if|is)\b/.test(m2) ? "bool" : Ee(i) && (i._attributes.type === "Id" || i._attributes.type === "Version") ? "long" : "string";
      }
      t.commands._setInfoCodeProvider(
        (r2) => {
          const i = o.value.additions, l2 = /* @__PURE__ */ new Set(), m2 = [];
          return m2.push(
            `public record${v(i)} ${g2(r2)}(${d(
              l2,
              r2
            )} value);`
          ), [
            {
              type: "Info",
              content: m2.join(`
`),
              imports: l2
            }
          ];
        }
      ), t.commands._setCommandCodeProvider(
        (r2) => {
          const i = [], l2 = o.value.additions, m2 = /* @__PURE__ */ new Set(), C2 = g2(r2);
          {
            const p = [], f = Object.values(r2.inner);
            p.push(`public record${v(l2)} ${C2}`), p.push("(");
            const $2 = [];
            for (const _ of f) {
              const b2 = g2(_);
              $2.push(`${c(m2, _)} ${N2.upperFirst(b2)}`);
            }
            p.push(`    ${$2.join(`,
    `)}`), p.push(")"), p.push("{"), p.push("}"), i.push({
              type: "Command",
              content: p.join(`
`),
              imports: m2
            });
          }
          {
            const p = l2.has(G.CommandHandlerInterface) ? ` : ${o.value.commandHandlerInterface}` : "", f = [];
            f.push(`public class ${C2}Handler${p}`), f.push("{"), f.push(`    public void Handle(${C2} command)`), f.push("    {"), f.push("        // HACK implement"), f.push("    }"), f.push("}"), i.push({
              type: "CommandHandler",
              content: f.join(`
`),
              imports: m2
            });
          }
          return i;
        }
      ), t.commands._setAggCodeProvider(
        (r2) => {
          const i = [], l2 = t.states.designer.value, m2 = o.value.additions;
          {
            const C2 = /* @__PURE__ */ new Set(), p = [], f = m2.has(G.AggInterface) ? ` : ${o.value.aggInterface}` : "";
            p.push(`public interface I${g2(r2)}${f}`), p.push("{");
            const $2 = [], _ = [...l2._getContext().getAssociationMap()[r2._attributes.__id]].filter((b2) => b2._attributes.rule === "Command" || b2._attributes.rule === "FacadeCommand");
            for (const b2 of _) {
              const h2 = g2(b2);
              $2.push(`void Handle${h2}(${h2} command);`);
            }
            p.push(`    ${$2.join(`

    `)}`), p.push("}"), p.push(""), i.push({
              type: "Agg",
              content: p.join(`
`),
              imports: C2
            });
          }
          {
            const C2 = /* @__PURE__ */ new Set(), p = [], f = g2(r2), $2 = Object.values(r2.inner), _ = m2.has(G.AggInterface) ? `, ${o.value.aggInterface}` : "";
            if (m2.has(G.PrimaryConstructor)) {
              const b2 = [...l2._getContext().getAssociationMap()[r2._attributes.__id]].filter((w2) => w2._attributes.rule === "Command" || w2._attributes.rule === "FacadeCommand"), h2 = [];
              for (const w2 of $2) {
                const y3 = g2(w2);
                h2.push(`${c(C2, w2)} ${N2.lowerFirst(y3)}`);
              }
              p.push(`public class ${f}`), p.push("("), p.push(`    ${h2.join(`,
    `)}`), p.push(`): I${f}${_}`), p.push("{");
              for (const w2 of $2) {
                const y3 = g2(w2);
                p.push(
                  `    public ${c(C2, w2)} ${N2.upperFirst(
                    y3
                  )} { get; private set; } = ${N2.lowerFirst(y3)};`
                ), p.push("");
              }
              const u = [];
              for (const w2 of b2) {
                const y3 = g2(w2);
                u.push(`public void Handle${y3}(${y3} command)`), u.push("{"), u.push("    // HACK implement"), u.push("}"), u.push("");
              }
              p.push(`    ${u.join(`
    `)}`), p.push("}");
            } else {
              const b2 = [...l2._getContext().getAssociationMap()[r2._attributes.__id]].filter((w2) => w2._attributes.rule === "Command" || w2._attributes.rule === "FacadeCommand");
              p.push(`public class ${f} : I${f}${_}`), p.push("{");
              for (const w2 of $2) {
                const y3 = g2(w2);
                p.push(
                  `    public ${c(C2, w2)} ${N2.lowerFirst(
                    y3
                  )} { get; private set; }`
                );
              }
              p.push("");
              const h2 = [];
              for (const w2 of $2) {
                const y3 = g2(w2);
                h2.push(`${c(C2, w2)} ${y3}`);
              }
              p.push(`    public ${f}(${h2.join(", ")})`), p.push("    {");
              for (const w2 of $2) {
                const y3 = g2(w2);
                p.push(`        ${y3} = ${N2.lowerFirst(y3)};`);
              }
              p.push("    }");
              const u = [];
              for (const w2 of b2) {
                const y3 = g2(w2);
                u.push(`public void Handle${y3}(${y3} command)`), u.push("{"), u.push("    // HACK implement"), u.push("}"), u.push("");
              }
              p.push(`    ${u.join(`
    `)}`), p.push("}");
            }
            i.push({
              type: "AggImpl",
              content: p.join(`
`),
              imports: C2
            });
          }
          return i;
        }
      ), t.commands._setEventCodeProvider(
        (r2) => {
          const i = o.value.additions, l2 = g2(r2), m2 = /* @__PURE__ */ new Set(), C2 = Object.values(r2.inner), p = [];
          p.push(`public record${v(i)} ${l2}`), p.push("(");
          const f = [];
          for (const $2 of C2) {
            const _ = g2($2);
            f.push(`${c(m2, $2)} ${N2.upperFirst(_)}`);
          }
          return p.push(`    ${f.join(`,
    `)}`), p.push(")"), p.push("{"), p.push("}"), [
            {
              type: "Event",
              content: p.join(`
`),
              imports: m2
            }
          ];
        }
      ), t.commands._setReadModelCodeProvider(() => []), t.commands._setCodeFileProvider(() => {
        const r2 = [], i = {}, l2 = [...o.value.namespace.split(/\./), N2.stringToUpperCamel(o.value.moduleName)];
        function m2(_) {
          for (const b2 of Object.values(_)) {
            if (!a(b2))
              continue;
            const h2 = g2(b2) + ".cs";
            if (i[`${l2.join("/")}/${h2}`] === true)
              continue;
            const u = t.commands._genInfoCode(b2);
            if (u.length === 0)
              continue;
            const w2 = new j3(l2, h2);
            for (const y3 of u[0].imports)
              w2.appendContentln(`using ${y3};`);
            w2.appendContentln(""), w2.appendContentln(
              `namespace ${o.value.namespace}.${N2.stringToUpperCamel(o.value.moduleName)}`
            ), w2.appendContentln("{"), w2.appendContentln(n(u[0].content)), w2.appendContentln("}"), r2.push(w2), i[`${l2.join("/")}/${h2}`] = true;
          }
        }
        const C2 = t.states.designer.value._getContext().getCommands();
        for (const _ of C2) {
          m2(_.inner);
          const b2 = g2(_) + ".cs", h2 = t.commands._genCommandCode(_), u = new j3(l2, b2);
          for (const w2 of h2)
            if (w2.type === "Command") {
              u.addImports(w2.imports);
              for (const y3 of w2.imports)
                u.appendContentln(`using ${y3};`);
              u.appendContentln(""), u.appendContentln(
                `namespace ${o.value.namespace}.${N2.stringToUpperCamel(o.value.moduleName)}`
              ), u.appendContentln("{"), u.appendContentln(n(w2.content)), u.appendContentln("}");
            }
          r2.push(u);
        }
        const p = t.states.designer.value._getContext().getFacadeCommands();
        for (const _ of p) {
          m2(_.inner);
          const b2 = g2(_) + ".cs", h2 = t.commands._genFacadeCommandCode(_), u = new j3(l2, b2);
          u.addImports(h2[0].imports);
          for (const w2 of h2[0].imports)
            u.appendContentln(`using ${w2};`);
          u.appendContentln(""), u.appendContentln(
            `namespace ${o.value.namespace}.${N2.stringToUpperCamel(o.value.moduleName)}`
          ), u.appendContentln("{"), u.appendContentln(n(h2[0].content)), u.appendContentln("}"), r2.push(u);
        }
        const f = t.states.designer.value._getContext().getAggs();
        for (const _ of f) {
          m2(_.inner);
          const b2 = t.commands._genAggCode(_), h2 = g2(_) + ".cs", u = new j3(l2, h2);
          for (const w2 of b2) {
            u.addImports(w2.imports);
            for (const y3 of w2.imports)
              u.appendContentln(`using ${y3};`);
            u.appendContentln("");
          }
          u.appendContentln(
            `namespace ${o.value.namespace}.${N2.stringToUpperCamel(o.value.moduleName)}`
          ), u.appendContentln("{");
          for (const w2 of b2)
            u.appendContentln(n(w2.content));
          u.appendContentln("}"), r2.push(u);
        }
        const $2 = t.states.designer.value._getContext().getEvents();
        for (const _ of $2) {
          m2(_.inner);
          const b2 = g2(_) + ".cs", h2 = t.commands._genEventCode(_), u = new j3(l2, b2);
          u.addImports(h2[0].imports);
          for (const w2 of h2[0].imports)
            u.appendContentln(`using ${w2};`);
          u.appendContentln(""), u.appendContentln(
            `namespace ${o.value.namespace}.${N2.stringToUpperCamel(o.value.moduleName)}`
          ), u.appendContentln("{"), u.appendContentln(n(h2[0].content)), u.appendContentln("}"), r2.push(u);
        }
        return r2;
      });
    }
  };
});

// src/domain/cli-args-agg/cmd-gen-code/index.ts
var import_prompts5 = __toESM(require_prompts3(), 1);

// src/domain/cli-args-agg/cmd-gen-code/gen-java.ts
var import_prompts = __toESM(require_prompts3(), 1);
var { t: $t6 } = useI18nAgg().commands;
async function requireGenJavaContext() {
  const context = {};
  const { namespace, additions } = await (0, import_prompts.default)(
    [
      {
        name: "namespace",
        type: "text",
        message: $t6("question.subcommand.genCode.package"),
        initial: "com.github.example"
      },
      {
        name: "additions",
        type: "multiselect",
        message: $t6("question.subcommand.genCode.java.additions"),
        choices: [
          {
            title: jo.java.JavaGeneratorAddition.SpringFramework,
            value: jo.java.JavaGeneratorAddition.SpringFramework,
            selected: true,
            description: $t6("question.subcommand.genCode.java.additions.springFramework")
          },
          {
            title: jo.java.JavaGeneratorAddition.Lombok,
            value: jo.java.JavaGeneratorAddition.Lombok,
            selected: true,
            description: $t6("question.subcommand.genCode.java.additions.lombok")
          },
          {
            title: jo.java.JavaGeneratorAddition.LombokBuilder,
            value: jo.java.JavaGeneratorAddition.LombokBuilder,
            description: $t6("question.subcommand.genCode.java.additions.lombokBuilder")
          },
          {
            title: jo.java.JavaGeneratorAddition.CommandHandler,
            value: jo.java.JavaGeneratorAddition.CommandHandler,
            selected: true,
            description: $t6("question.subcommand.genCode.java.additions.commandHandler")
          },
          {
            title: jo.java.JavaGeneratorAddition.RecordVakueObject,
            value: jo.java.JavaGeneratorAddition.RecordVakueObject,
            description: $t6("question.subcommand.genCode.java.additions.recordVakueObject")
          },
          {
            title: jo.java.JavaGeneratorAddition.Timezone,
            value: jo.java.JavaGeneratorAddition.Timezone,
            selected: true,
            description: $t6("question.subcommand.genCode.java.additions.timezone")
          }
        ],
        hint: $t6("question.subcommand.genCode.additions.hint")
      }
    ],
    { onCancel }
  );
  let nonNullAnnotation = additions.includes(
    jo.java.JavaGeneratorAddition.SpringFramework
  ) ? "org.springframework.lang.NonNull" : void 0;
  if (nonNullAnnotation === void 0) {
    nonNullAnnotation = (await (0, import_prompts.default)(
      [
        {
          name: "nonNullAnnotation",
          type: "select",
          message: $t6("question.subcommand.genCode.java.nonNullAnnotation"),
          choices: [
            { title: "org.springframework.lang.NonNull", value: "org.springframework.lang.NonNull" },
            { title: "org.jetbrains.annotations.NotNull", value: "org.jetbrains.annotations.NotNull" },
            { title: "javax.annotation.Nonnull", value: "javax.annotation.Nonnull" }
          ]
        }
      ],
      { onCancel }
    )).nonNullAnnotation;
  }
  context.namespace = namespace;
  context.additions = new Set(additions);
  context.moduleName = "";
  context.nonNullAnnotation = nonNullAnnotation;
  return context;
}

// src/domain/cli-args-agg/cmd-gen-code/gen-kotlin.ts
var import_prompts2 = __toESM(require_prompts3(), 1);
var { t: $t7 } = useI18nAgg().commands;
async function requireGenKotlinContext() {
  const context = {};
  const { namespace, additions } = await (0, import_prompts2.default)(
    [
      {
        name: "namespace",
        type: "text",
        message: $t7("question.subcommand.genCode.package"),
        initial: "com.github.example"
      },
      {
        name: "additions",
        type: "multiselect",
        message: $t7("question.subcommand.genCode.kotlin.additions"),
        choices: [
          {
            title: jo.kotlin.KotlinGeneratorAddition.CommandHandler,
            value: jo.kotlin.KotlinGeneratorAddition.CommandHandler,
            selected: true,
            description: $t7("question.subcommand.genCode.kotlin.additions.commandHandler")
          },
          {
            title: jo.kotlin.KotlinGeneratorAddition.ValueClass,
            value: jo.kotlin.KotlinGeneratorAddition.ValueClass,
            selected: true,
            description: $t7("question.subcommand.genCode.kotlin.additions.valueClass")
          },
          {
            title: jo.kotlin.KotlinGeneratorAddition.Timezone,
            value: jo.kotlin.KotlinGeneratorAddition.Timezone,
            description: $t7("question.subcommand.genCode.kotlin.additions.timezone")
          }
        ],
        hint: $t7("question.subcommand.genCode.additions.hint")
      }
    ],
    { onCancel }
  );
  context.namespace = namespace;
  context.additions = new Set(additions);
  return context;
}

// src/domain/cli-args-agg/cmd-gen-code/gen-csharp.ts
var import_prompts3 = __toESM(require_prompts3(), 1);
var { t: $t8 } = useI18nAgg().commands;
async function requireGenCsharpContext() {
  const context = {};
  const { namespace, additions } = await (0, import_prompts3.default)(
    [
      {
        name: "namespace",
        type: "text",
        message: $t8("question.subcommand.genCode.namespace"),
        initial: "WebApplication1.Domain"
      },
      {
        name: "additions",
        type: "multiselect",
        message: $t8("question.subcommand.genCode.csharp.additions"),
        choices: [
          {
            title: jo.csharp.CSharpGeneratorAddition.Timezone,
            value: jo.csharp.CSharpGeneratorAddition.Timezone,
            selected: true,
            description: $t8("question.subcommand.genCode.csharp.additions.timezone")
          },
          {
            title: jo.csharp.CSharpGeneratorAddition.RecordStruct,
            value: jo.csharp.CSharpGeneratorAddition.RecordStruct,
            selected: true,
            description: $t8("question.subcommand.genCode.csharp.additions.recordStruct")
          },
          {
            title: jo.csharp.CSharpGeneratorAddition.PrimaryConstructor,
            value: jo.csharp.CSharpGeneratorAddition.PrimaryConstructor,
            selected: true,
            description: $t8("question.subcommand.genCode.csharp.additions.primaryConstructor")
          },
          {
            title: jo.csharp.CSharpGeneratorAddition.CommandHandlerInterface,
            value: jo.csharp.CSharpGeneratorAddition.CommandHandlerInterface,
            selected: false,
            description: $t8("question.subcommand.genCode.csharp.additions.commandHandlerInterface")
          },
          {
            title: jo.csharp.CSharpGeneratorAddition.AggInterface,
            value: jo.csharp.CSharpGeneratorAddition.AggInterface,
            selected: false,
            description: $t8("question.subcommand.genCode.csharp.additions.aggInterface")
          }
        ],
        hint: $t8("question.subcommand.genCode.additions.hint")
      }
    ],
    { onCancel }
  );
  context.additions = new Set(additions);
  context.namespace = namespace;
  if (context.additions.has(jo.csharp.CSharpGeneratorAddition.CommandHandlerInterface)) {
    const { commandHandlerInterface } = await (0, import_prompts3.default)(
      [
        {
          name: "commandHandlerInterface",
          type: "text",
          message: $t8("question.subcommand.genCode.csharp.additions.commandHandlerInterface.hint")
        }
      ],
      { onCancel }
    );
    context.commandHandlerInterface = commandHandlerInterface;
  }
  if (context.additions.has(jo.csharp.CSharpGeneratorAddition.AggInterface)) {
    const { aggInterface } = await (0, import_prompts3.default)(
      [
        {
          name: "aggInterface",
          type: "text",
          message: $t8("question.subcommand.genCode.csharp.additions.aggInterface.hint")
        }
      ],
      { onCancel }
    );
    context.aggInterface = aggInterface;
  }
  return context;
}

// src/domain/cli-args-agg/cmd-gen-code/gen-go.ts
var import_prompts4 = __toESM(require_prompts3(), 1);
var { t: $t9 } = useI18nAgg().commands;
async function requireGenGoContext() {
  const context = {};
  const {
    namespace
    /* additions */
  } = await (0, import_prompts4.default)(
    [
      {
        name: "namespace",
        type: "text",
        message: $t9("question.subcommand.genCode.namespace"),
        initial: "ComGithub.Example"
      }
      // {
      //   name: 'additions',
      //   type: 'multiselect',
      //   message: $t('question.subcommand.genCode.csharp.additions'),
      //   choices: [],
      //   hint: $t('question.subcommand.genCode.additions.hint'),
      // },
    ],
    { onCancel }
  );
  context.namespace = namespace;
  context.additions = /* @__PURE__ */ new Set();
  return context;
}

// src/domain/cli-args-agg/cmd-gen-code/index.ts
var { t: $t10 } = useI18nAgg().commands;
var environmentAgg5 = useEnvironmentAgg();
function requireGenCodeCommand(params) {
  return new Command().name("genCode").option("--source <sourceDir>", "ts files' dir").action((options) => {
    params.currentCommand.value = "GenCode" /* GenCode */;
    if (options.source) {
      params.args.source = import_path7.default.resolve(options.source);
    }
  }).addHelpText("before", "Generate code.\n").addHelpText("before", "\u751F\u6210\u4EE3\u7801\n");
}
async function requireGenCodeCommandArgs(params) {
  const language = (await (0, import_prompts5.default)(
    [
      {
        name: "language",
        type: "select",
        message: $t10("question.subcommand.genCode.language"),
        choices: [
          {
            title: jo.Language.CSharp,
            value: jo.Language.CSharp
          },
          {
            title: jo.Language.Go,
            value: jo.Language.Go
          },
          {
            title: jo.Language.Java,
            value: jo.Language.Java
          },
          {
            title: jo.Language.Kotlin,
            value: jo.Language.Kotlin
          }
        ]
      }
    ],
    { onCancel }
  )).language;
  params.args.language = language;
  if (language === jo.Language.Java) {
    params.args.context = await requireGenJavaContext();
  } else if (language === jo.Language.Kotlin) {
    params.args.context = await requireGenKotlinContext();
  } else if (language === jo.Language.CSharp) {
    params.args.context = await requireGenCsharpContext();
  } else if (language === jo.Language.Go) {
    params.args.context = await requireGenGoContext();
  } else {
    isNever(language);
  }
}
async function execute5(args) {
  const webRoot = environmentAgg5.states.webRoot.value;
  const sourcePath = args.source;
  const packageManager = environmentAgg5.states.packageManager.value;
  const versionFilePath = import_path7.default.join(sourcePath, "node_modules", "version.txt");
  if (!import_fs6.default.existsSync(versionFilePath) || !import_fs6.default.statSync(versionFilePath).isFile() || import_fs6.default.readFileSync(versionFilePath, "utf-8").trim() !== package_info_default.version) {
    log_default.printWarn("\u68C0\u6D4B\u5230\u5DE5\u4F5C\u76EE\u5F55\u7248\u672C\u4E0E\u811A\u624B\u67B6\u7248\u672C\u4E0D\u5339\u914D");
    log_default.printWarn("\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u7248\u672C\uFF1A", import_fs6.default.readFileSync(versionFilePath, "utf-8").trim());
    log_default.printWarn("\u811A\u624B\u67B6\u7248\u672C\uFF1A      ", package_info_default.version);
    log_default.printWarn("\u5982\u679C\u8981\u4EE5\u672C\u5730\u811A\u624B\u67B6\u7248\u672C\u4E3A\u51C6\uFF0C\u8BF7\u6267\u884C\u5728\u5DE5\u4F5C\u76EE\u5F55\u6267\u884Cupdate\u547D\u4EE4\u8FDB\u884C\u66F4\u65B0");
    log_default.print(source_default.bgYellow(`${packageManager === "bun" ? "bunx " : ""}domain-designer-cli update`));
  }
  log_default.printInfo("================ Install dependencies: Starting... ================");
  if (packageManager === "bun") {
    (0, import_child_process5.spawnSync)(`bun i --cwd "${webRoot}"`, { encoding: "utf-8", stdio: "inherit", shell: true });
  } else if (packageManager === "pnpm") {
    (0, import_child_process5.spawnSync)(`pnpm i --prefix "${webRoot}"`, { encoding: "utf-8", stdio: "inherit", shell: true });
  } else if (packageManager === "npm") {
    (0, import_child_process5.spawnSync)(`npm i --prefix "${webRoot}"`, { encoding: "utf-8", stdio: "inherit", shell: true });
  } else {
    isNever(packageManager);
  }
  log_default.printSuccess("================ Install dependencies: Succeeded ================");
  log_default.printInfo("================ Compliling ts code: Starting... ================");
  const exeCmd = packageManager === "bun" ? "bunx" : "pnpx";
  (0, import_child_process5.spawnSync)(`${exeCmd} zx ${webRoot.replace(/\\/g, "/")}/scripts/build-ts.mjs --source=${sourcePath}`, {
    encoding: "utf-8",
    stdio: "inherit",
    shell: true
  });
  log_default.printSuccess("================ Compliling ts code: Succeeded ================");
  log_default.printInfo("================ Generating code: Starting... ================");
  const files = import_fs6.default.readdirSync(import_path7.default.join(sourcePath, ".output", "esm"));
  let agg4;
  let pluginLoaded = false;
  deleteFolderRecursive(`${sourcePath.replace(/\\/g, "/")}/.output/${args.language}`);
  for (const file of files) {
    if (import_fs6.default.statSync(import_path7.default.join(sourcePath, ".output", "esm", file)).isDirectory() || !file.endsWith(".mjs")) {
      continue;
    }
    const m2 = await import(`file://${sourcePath.replace(/\\/g, "/")}/.output/esm/${file}`);
    if (!m2 || !tr(m2.default)) {
      continue;
    }
    const designer = m2.default;
    if (!pluginLoaded) {
      if (args.language === jo.Language.Java) {
        ue.registerPlugin(Oo);
      } else if (args.language === jo.Language.Kotlin) {
        ue.registerPlugin(Ao);
      } else if (args.language === jo.Language.CSharp) {
        ue.registerPlugin(xo);
      } else if (args.language === jo.Language.Go) {
        ue.registerPlugin(Io);
      } else {
        isNever(args.language);
      }
      pluginLoaded = true;
    }
    agg4 = So(designer);
    agg4.commands.setDomainDesigner(designer);
    args.context.moduleName = designer._getContext().getDesignerOptions().moduleName || file.split(".")[0];
    agg4.commands.setContext(args.context);
    const codeFiles = agg4.commands.genCodeFiles();
    for (const codeFile of codeFiles) {
      const p = import_path7.default.join(sourcePath, ".output", args.language, ...codeFile.getParentDir());
      if (!import_fs6.default.existsSync(p)) {
        import_fs6.default.mkdirSync(p, { recursive: true });
      }
      import_fs6.default.writeFileSync(import_path7.default.join(p, codeFile.getName()), codeFile.getContent(), "utf-8");
    }
  }
  log_default.printSuccess("================ Generating code: Succeeded ================");
}

// src/domain/cli-args-agg/index.ts
var { t: $t11, setCurrentLang } = useI18nAgg().commands;
var environmentAgg6 = useEnvironmentAgg();
var agg3 = X(() => {
  const isReady = (0, import_reactivity4.ref)(false);
  const currentCommand = (0, import_reactivity4.ref)("none" /* None */);
  const source = process.cwd();
  const initCommandArgs = (0, import_reactivity4.reactive)({ source });
  const updateWorkspaceCommandArgs = (0, import_reactivity4.reactive)({ source });
  const runWebCommandArgs = (0, import_reactivity4.reactive)({ source });
  const genCodeCommandArgs = (0, import_reactivity4.reactive)({ source });
  async function init() {
    if (isReady.value) {
      return;
    }
    const program2 = new Command().name("domain-designer-cli").version(package_info_default.version).addOption(new Option("--debug", "debug mode").default(false)).hook("preAction", (thisCommand) => {
      const debugMode = thisCommand.opts().debug;
      if (debugMode === true) {
        log_default.printDebug("\u8C03\u8BD5\u6A21\u5F0F\u5DF2\u5F00\u542F");
        environmentAgg6.commands.setDebugMode(true);
      } else {
        environmentAgg6.commands.setDebugMode(false);
      }
    }).addCommand(requireInitCommand({ currentCommand, args: initCommandArgs })).addCommand(requireInfoCommand({ currentCommand })).addCommand(requireUpdateWorkspaceCommand({ currentCommand, args: updateWorkspaceCommandArgs })).addCommand(requireRunWebCommand({ currentCommand, args: runWebCommandArgs })).addCommand(requireGenCodeCommand({ currentCommand, args: genCodeCommandArgs }));
    program2.parse(process.argv);
    if (environmentAgg6.states.debugMode.value === true) {
      log_default.printDebug("- DEBUG: args\u4FE1\u606F\uFF1A", `[
	${process.argv.join("\n	")}
]`);
      log_default.printDebug("- DEBUG: packageManager", environmentAgg6.states.packageManager.value);
    }
    if ("GenCode" /* GenCode */ !== currentCommand.value && "none" /* None */ !== currentCommand.value) {
      isReady.value = true;
      return;
    }
    await configArgsFromUserChoise();
    isReady.value = true;
  }
  async function configArgsFromUserChoise() {
    let lang = environmentAgg6.states.osLanguage.value;
    if (lang.startsWith("zh")) {
      lang = "zh";
    } else if (lang.startsWith("en")) {
      lang = "en";
    } else {
      const { language } = await (0, import_prompts6.default)(
        [
          {
            name: "language",
            type: "select",
            message: "Choose The language during this creation process",
            choices: [
              { title: "\u4E2D\u6587", value: "zh" },
              { title: "English", value: "en" }
            ]
          }
        ],
        { onCancel }
      );
      lang = language;
    }
    setCurrentLang(lang);
    if (currentCommand.value === "none" /* None */) {
      const result = await (0, import_prompts6.default)(
        [
          {
            name: "subcommand",
            type: "select",
            message: $t11("question.subcommand"),
            choices: [
              {
                title: $t11("question.subcommand.genCode"),
                value: "GenCode" /* GenCode */
              },
              {
                title: $t11("question.subcommand.init"),
                value: "init" /* Init */
              },
              {
                title: $t11("question.subcommand.updateWorkspace"),
                value: "updateWorkspace" /* UpdateWorkspace */
              },
              {
                title: $t11("question.subcommand.runWeb"),
                value: "runWeb" /* RunWeb */
              },
              {
                title: $t11("question.subcommand.info"),
                value: "info" /* Info */
              }
            ]
          }
        ],
        { onCancel }
      );
      currentCommand.value = result.subcommand;
    }
    const subcommand = currentCommand.value;
    if (subcommand === "init" /* Init */) {
      await requireInitCommandArgs({ currentCommand, args: initCommandArgs });
    } else if (subcommand === "updateWorkspace" /* UpdateWorkspace */) {
      await requireUpdateWorkspaceCommandArgs({ currentCommand, args: updateWorkspaceCommandArgs });
    } else if (subcommand === "runWeb" /* RunWeb */) {
      await requireRunWebCommandArgs({ currentCommand, args: runWebCommandArgs });
    } else if (subcommand === "info" /* Info */) {
      await requireInfoCommandArgs({ currentCommand });
    } else if (subcommand === "GenCode" /* GenCode */) {
      await requireGenCodeCommandArgs({ currentCommand, args: genCodeCommandArgs });
    } else if (subcommand === "none" /* None */) {
      return;
    } else {
      isNever(subcommand);
    }
  }
  return {
    states: {
      initCommandArgs,
      updateCommandArgs: updateWorkspaceCommandArgs
    },
    commands: {
      init,
      async exec() {
        const c = currentCommand.value;
        if (c === "info" /* Info */) {
          await execute2();
        } else if (c === "init" /* Init */) {
          await execute(initCommandArgs);
        } else if (c === "runWeb" /* RunWeb */) {
          await execute4(runWebCommandArgs);
        } else if (c === "updateWorkspace" /* UpdateWorkspace */) {
          await execute3(updateWorkspaceCommandArgs);
        } else if (c === "GenCode" /* GenCode */) {
          await execute5(genCodeCommandArgs);
        } else if (c === "none" /* None */) {
        } else {
          isNever(c);
        }
      }
    }
  };
});
function useCliArgsAgg() {
  return agg3.api;
}

// src/index.ts
var $t12 = useI18nAgg().commands.t;
log_default.printInfo($t12("signal.scriptStart"));
var cliArgsAgg = useCliArgsAgg();
start().then(() => {
  log_default.printSuccess($t12("signal.successComplete"));
}).catch((e) => {
  log_default.printError(e.message);
  log_default.printError($t12("signal.exitWithError"));
});
process.on("SIGINT", onCancel);
async function start() {
  log_default.print(`Repo Addr:`, log_default.info(package_info_default.repository.url.replace(/git\+/g, "")));
  log_default.print("");
  log_default.print(`Script Version:`, log_default.info(package_info_default.version));
  log_default.print("");
  await cliArgsAgg.commands.init();
  await cliArgsAgg.commands.exec();
}
/*! Bundled license information:

@vue/shared/dist/shared.cjs.prod.js:
  (**
  * @vue/shared v3.5.13
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (*! #__NO_SIDE_EFFECTS__ *)

@vue/shared/dist/shared.cjs.js:
  (**
  * @vue/shared v3.5.13
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (*! #__NO_SIDE_EFFECTS__ *)

@vue/reactivity/dist/reactivity.cjs.prod.js:
  (**
  * @vue/reactivity v3.5.13
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/reactivity/dist/reactivity.cjs.js:
  (**
  * @vue/reactivity v3.5.13
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@ddd-tool/domain-designer-core/index.js:
  (**
  * @vue/shared v3.5.13
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (*! #__NO_SIDE_EFFECTS__ *)

@ddd-tool/domain-designer-core/index.js:
  (**
  * @vue/reactivity v3.5.13
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@ddd-tool/domain-designer-core/index.js:
  (**
  * @vue/runtime-core v3.5.13
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@ddd-tool/domain-designer-core/index.js:
  (**
  * vue v3.5.13
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@ddd-tool/domain-designer-generator/index.js:
  (**
  * @vue/shared v3.5.13
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (*! #__NO_SIDE_EFFECTS__ *)
  (**
  * @vue/reactivity v3.5.13
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (**
  * @vue/runtime-core v3.5.13
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (**
  * vue v3.5.13
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
*/
