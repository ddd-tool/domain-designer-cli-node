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

// ../../node_modules/.pnpm/@vue+shared@3.5.14/node_modules/@vue/shared/dist/shared.cjs.prod.js
var require_shared_cjs_prod = __commonJS({
  "../../node_modules/.pnpm/@vue+shared@3.5.14/node_modules/@vue/shared/dist/shared.cjs.prod.js"(exports2) {
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

// ../../node_modules/.pnpm/@vue+shared@3.5.14/node_modules/@vue/shared/dist/shared.cjs.js
var require_shared_cjs = __commonJS({
  "../../node_modules/.pnpm/@vue+shared@3.5.14/node_modules/@vue/shared/dist/shared.cjs.js"(exports2) {
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

// ../../node_modules/.pnpm/@vue+shared@3.5.14/node_modules/@vue/shared/index.js
var require_shared = __commonJS({
  "../../node_modules/.pnpm/@vue+shared@3.5.14/node_modules/@vue/shared/index.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_shared_cjs_prod();
    } else {
      module2.exports = require_shared_cjs();
    }
  }
});

// ../../node_modules/.pnpm/@vue+reactivity@3.5.14/node_modules/@vue/reactivity/dist/reactivity.cjs.prod.js
var require_reactivity_cjs_prod = __commonJS({
  "../../node_modules/.pnpm/@vue+reactivity@3.5.14/node_modules/@vue/reactivity/dist/reactivity.cjs.prod.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var shared = require_shared();
    var activeEffectScope;
    var EffectScope = class {
      constructor(detached = false) {
        this.detached = detached;
        this._active = true;
        this._on = 0;
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
        if (++this._on === 1) {
          this.prevScope = activeEffectScope;
          activeEffectScope = this;
        }
      }
      /**
       * This should only be called on non-detached scopes
       * @internal
       */
      off() {
        if (this._on > 0 && --this._on === 0) {
          activeEffectScope = this.prevScope;
          this.prevScope = void 0;
        }
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
      "64": "PAUSED",
      "EVALUATED": 128,
      "128": "EVALUATED"
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
          this.flags &= -65;
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
          this.flags &= -3;
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
          this.flags &= -2;
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
          e.flags &= -9;
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
          e.flags &= -9;
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
      computed2.flags &= -17;
      if (computed2.globalVersion === globalVersion) {
        return;
      }
      computed2.globalVersion = globalVersion;
      if (!computed2.isSSR && computed2.flags & 128 && (!computed2.deps && !computed2._dirty || !isDirty(computed2))) {
        return;
      }
      computed2.flags |= 2;
      const dep = computed2.dep;
      const prevSub = activeSub;
      const prevShouldTrack = shouldTrack;
      activeSub = computed2;
      shouldTrack = true;
      try {
        prepareDeps(computed2);
        const value = computed2.fn(computed2._value);
        if (dep.version === 0 || shared.hasChanged(value, computed2._value)) {
          computed2.flags |= 128;
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
        computed2.flags &= -3;
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
          dep.computed.flags &= -5;
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
      const targetType = getTargetType(target);
      if (targetType === 0) {
        return target;
      }
      const existingProxy = proxyMap.get(target);
      if (existingProxy) {
        return existingProxy;
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

// ../../node_modules/.pnpm/@vue+reactivity@3.5.14/node_modules/@vue/reactivity/dist/reactivity.cjs.js
var require_reactivity_cjs = __commonJS({
  "../../node_modules/.pnpm/@vue+reactivity@3.5.14/node_modules/@vue/reactivity/dist/reactivity.cjs.js"(exports2) {
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
        this._on = 0;
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
        if (++this._on === 1) {
          this.prevScope = activeEffectScope;
          activeEffectScope = this;
        }
      }
      /**
       * This should only be called on non-detached scopes
       * @internal
       */
      off() {
        if (this._on > 0 && --this._on === 0) {
          activeEffectScope = this.prevScope;
          this.prevScope = void 0;
        }
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
      "64": "PAUSED",
      "EVALUATED": 128,
      "128": "EVALUATED"
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
          this.flags &= -65;
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
          this.flags &= -3;
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
          this.flags &= -2;
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
          e.flags &= -9;
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
          e.flags &= -9;
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
      computed2.flags &= -17;
      if (computed2.globalVersion === globalVersion) {
        return;
      }
      computed2.globalVersion = globalVersion;
      if (!computed2.isSSR && computed2.flags & 128 && (!computed2.deps && !computed2._dirty || !isDirty(computed2))) {
        return;
      }
      computed2.flags |= 2;
      const dep = computed2.dep;
      const prevSub = activeSub;
      const prevShouldTrack = shouldTrack;
      activeSub = computed2;
      shouldTrack = true;
      try {
        prepareDeps(computed2);
        const value = computed2.fn(computed2._value);
        if (dep.version === 0 || shared.hasChanged(value, computed2._value)) {
          computed2.flags |= 128;
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
        computed2.flags &= -3;
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
          dep.computed.flags &= -5;
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
      const targetType = getTargetType(target);
      if (targetType === 0) {
        return target;
      }
      const existingProxy = proxyMap.get(target);
      if (existingProxy) {
        return existingProxy;
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

// ../../node_modules/.pnpm/@vue+reactivity@3.5.14/node_modules/@vue/reactivity/index.js
var require_reactivity = __commonJS({
  "../../node_modules/.pnpm/@vue+reactivity@3.5.14/node_modules/@vue/reactivity/index.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_reactivity_cjs_prod();
    } else {
      module2.exports = require_reactivity_cjs();
    }
  }
});

// ../../node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/error.js
var require_error = __commonJS({
  "../../node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/error.js"(exports2) {
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

// ../../node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/argument.js
var require_argument = __commonJS({
  "../../node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/argument.js"(exports2) {
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

// ../../node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/help.js
var require_help = __commonJS({
  "../../node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/help.js"(exports2) {
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

// ../../node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/option.js
var require_option = __commonJS({
  "../../node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/option.js"(exports2) {
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

// ../../node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/suggestSimilar.js
var require_suggestSimilar = __commonJS({
  "../../node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/suggestSimilar.js"(exports2) {
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

// ../../node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/command.js
var require_command = __commonJS({
  "../../node_modules/.pnpm/commander@12.1.0/node_modules/commander/lib/command.js"(exports2) {
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

// ../../node_modules/.pnpm/commander@12.1.0/node_modules/commander/index.js
var require_commander = __commonJS({
  "../../node_modules/.pnpm/commander@12.1.0/node_modules/commander/index.js"(exports2) {
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

// ../../node_modules/.pnpm/kleur@3.0.3/node_modules/kleur/index.js
var require_kleur = __commonJS({
  "../../node_modules/.pnpm/kleur@3.0.3/node_modules/kleur/index.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/action.js
var require_action = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/action.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/strip.js
var require_strip = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/strip.js"(exports2, module2) {
    "use strict";
    module2.exports = (str) => {
      const pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))"].join("|");
      const RGX = new RegExp(pattern, "g");
      return typeof str === "string" ? str.replace(RGX, "") : str;
    };
  }
});

// ../../node_modules/.pnpm/sisteransi@1.0.5/node_modules/sisteransi/src/index.js
var require_src = __commonJS({
  "../../node_modules/.pnpm/sisteransi@1.0.5/node_modules/sisteransi/src/index.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/clear.js
var require_clear = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/clear.js"(exports2, module2) {
    "use strict";
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it2 = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it2) {
        if (Array.isArray(o) || (it2 = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it2) o = it2;
          var i = 0;
          var F3 = function F4() {
          };
          return { s: F3, n: function n() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          }, e: function e(_e3) {
            throw _e3;
          }, f: F3 };
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/figures.js
var require_figures = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/figures.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/style.js
var require_style = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/style.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/lines.js
var require_lines = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/lines.js"(exports2, module2) {
    "use strict";
    var strip = require_strip();
    module2.exports = function(msg, perLine) {
      let lines = String(strip(msg) || "").split(/\r?\n/);
      if (!perLine) return lines.length;
      return lines.map((l2) => Math.ceil(l2.length / perLine)).reduce((a, b2) => a + b2);
    };
  }
});

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/wrap.js
var require_wrap = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/wrap.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/entriesToDisplay.js
var require_entriesToDisplay = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/entriesToDisplay.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/index.js
var require_util = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/util/index.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/prompt.js
var require_prompt = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/prompt.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/text.js
var require_text = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/text.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/select.js
var require_select = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/select.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/toggle.js
var require_toggle = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/toggle.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/datepart.js
var require_datepart = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/datepart.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/meridiem.js
var require_meridiem = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/meridiem.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/day.js
var require_day = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/day.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/hours.js
var require_hours = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/hours.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/milliseconds.js
var require_milliseconds = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/milliseconds.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/minutes.js
var require_minutes = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/minutes.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/month.js
var require_month = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/month.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/seconds.js
var require_seconds = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/seconds.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/year.js
var require_year = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/year.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/index.js
var require_dateparts = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/dateparts/index.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/date.js
var require_date = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/date.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/number.js
var require_number = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/number.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/multiselect.js
var require_multiselect = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/multiselect.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/autocomplete.js
var require_autocomplete = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/autocomplete.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/autocompleteMultiselect.js
var require_autocompleteMultiselect = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/autocompleteMultiselect.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/confirm.js
var require_confirm = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/confirm.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/index.js
var require_elements = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/elements/index.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/prompts.js
var require_prompts = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/prompts.js"(exports2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/dist/index.js"(exports2, module2) {
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
          var F3 = function F4() {
          };
          return { s: F3, n: function n() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          }, e: function e(_e3) {
            throw _e3;
          }, f: F3 };
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/action.js
var require_action2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/action.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/strip.js
var require_strip2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/strip.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/clear.js
var require_clear2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/clear.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/figures.js
var require_figures2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/figures.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/style.js
var require_style2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/style.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/lines.js
var require_lines2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/lines.js"(exports2, module2) {
    "use strict";
    var strip = require_strip2();
    module2.exports = function(msg, perLine) {
      let lines = String(strip(msg) || "").split(/\r?\n/);
      if (!perLine) return lines.length;
      return lines.map((l2) => Math.ceil(l2.length / perLine)).reduce((a, b2) => a + b2);
    };
  }
});

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/wrap.js
var require_wrap2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/wrap.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/entriesToDisplay.js
var require_entriesToDisplay2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/entriesToDisplay.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/index.js
var require_util2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/util/index.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/prompt.js
var require_prompt2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/prompt.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/text.js
var require_text2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/text.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/select.js
var require_select2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/select.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/toggle.js
var require_toggle2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/toggle.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/datepart.js
var require_datepart2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/datepart.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/meridiem.js
var require_meridiem2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/meridiem.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/day.js
var require_day2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/day.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/hours.js
var require_hours2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/hours.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/milliseconds.js
var require_milliseconds2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/milliseconds.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/minutes.js
var require_minutes2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/minutes.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/month.js
var require_month2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/month.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/seconds.js
var require_seconds2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/seconds.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/year.js
var require_year2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/year.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/index.js
var require_dateparts2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/dateparts/index.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/date.js
var require_date2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/date.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/number.js
var require_number2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/number.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/multiselect.js
var require_multiselect2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/multiselect.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/autocomplete.js
var require_autocomplete2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/autocomplete.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/autocompleteMultiselect.js
var require_autocompleteMultiselect2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/autocompleteMultiselect.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/confirm.js
var require_confirm2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/confirm.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/index.js
var require_elements2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/elements/index.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/prompts.js
var require_prompts2 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/prompts.js"(exports2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/lib/index.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/index.js
var require_prompts3 = __commonJS({
  "../../node_modules/.pnpm/prompts@2.4.2/node_modules/prompts/index.js"(exports2, module2) {
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

// ../../node_modules/.pnpm/commander@12.1.0/node_modules/commander/esm.mjs
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

// ../../node_modules/.pnpm/chalk@5.6.2/node_modules/chalk/source/vendor/ansi-styles/index.js
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

// ../../node_modules/.pnpm/chalk@5.6.2/node_modules/chalk/source/vendor/supports-color/index.js
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
  if (env.TERM === "xterm-ghostty") {
    return 3;
  }
  if (env.TERM === "wezterm") {
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

// ../../node_modules/.pnpm/chalk@5.6.2/node_modules/chalk/source/utilities.js
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

// ../../node_modules/.pnpm/chalk@5.6.2/node_modules/chalk/source/index.js
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

// ../../node_modules/.pnpm/vue-fn@0.1.0-beta.1_@vue+re_a4dd3c73fce1a239aad60b870a65c99f/node_modules/vue-fn/domain-server/index.mjs
var import_reactivity = __toESM(require_reactivity(), 1);

// ../../node_modules/.pnpm/vue-fn@0.1.0-beta.1_@vue+re_a4dd3c73fce1a239aad60b870a65c99f/node_modules/vue-fn/index.browser-CWCjzKuA.js
var l = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
var r = (t = 21) => {
  let e = "", n = crypto.getRandomValues(new Uint8Array(t |= 0));
  for (; t--; )
    e += l[n[t] & 63];
  return e;
};

// ../../node_modules/.pnpm/vue-fn@0.1.0-beta.1_@vue+re_a4dd3c73fce1a239aad60b870a65c99f/node_modules/vue-fn/domain-server/index.mjs
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
  "question.subcommand.genCode.java.additions.jpa": "Use jpa for persistence",
  "question.subcommand.genCode.java.additions.lombok": "Use [@Getter, @RequiredArgsConstructor...] of lombok",
  "question.subcommand.genCode.java.additions.lombokBuilder": "Use [@Builder] of lombok to avoid long parameter lists",
  "question.subcommand.genCode.java.additions.commandHandler": "Generate CommandHandler for each command",
  "question.subcommand.genCode.java.additions.recordValueObject": "Use [java record] to generate value object (JDK16+)",
  "question.subcommand.genCode.java.additions.timezone": "Use [OffsetDateTime] to represent time",
  "question.subcommand.genCode.java.nonNullAnnotation": "Select non-null annotation",
  "question.subcommand.genCode.java.idGenStrategy": "Select ID generation strategy",
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
  "question.subcommand.genCode.java.additions.jpa": "\u4F7F\u7528jpa\u8FDB\u884C\u6301\u4E45\u5316",
  "question.subcommand.genCode.java.additions.lombok": "\u4F7F\u7528lombok\u5E38\u7528\u7684Getter\u7B49\u6CE8\u89E3",
  "question.subcommand.genCode.java.additions.lombokBuilder": "\u4F7F\u7528lombok\u7684Builder\u6CE8\u89E3\u907F\u514D\u957F\u53C2\u6570\u5217\u8868",
  "question.subcommand.genCode.java.additions.commandHandler": "\u4E3A\u6BCF\u4E2A\u547D\u4EE4\u751F\u6210CommandHandler",
  "question.subcommand.genCode.java.additions.recordValueObject": "\u4F7F\u7528record\u7C7B\u751F\u6210\u503C\u5BF9\u8C61\uFF08JDK16+\uFF09",
  "question.subcommand.genCode.java.additions.timezone": "\u4F7F\u7528\u5E26\u65F6\u533A\u7684OffsetDateTime\u8868\u793A\u65F6\u95F4",
  "question.subcommand.genCode.java.nonNullAnnotation": "\u9009\u62E9\u975E\u7A7A\u6CE8\u89E3",
  "question.subcommand.genCode.java.idGenStrategy": "\u9009\u62E9ID\u751F\u6210\u7B56\u7565",
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
  "name": "cli",
  "version": "0.1.0-beta.16",
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
  "_id": "cli@0.1.0-beta.16"
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
        const paths = import_path.default.dirname(result.stdout.split("\n")[0].trim());
        for (let p of paths.split("\n")) {
          p = import_path.default.resolve(p.trim(), "..");
          if (verifyWebRoot(p)) {
            webRoot = p;
            break;
          }
          p = import_path.default.resolve(p, "lib", "node_modules", "@ddd-tool", "domain-designer-cli");
          if (verifyWebRoot(p)) {
            webRoot = p;
            break;
          }
        }
        mustBeWebRoot(webRoot);
      } else if (osType === "linux" || osType === "mac") {
        const result = (0, import_child_process.spawnSync)("whereis domain-designer-cli", { encoding: "utf-8", shell: true });
        if (result.status !== 0) {
          throw new Error("domain-designer-cli not found");
        }
        const paths = result.stdout.split("\n")[0].split(":")[1].trim();
        for (let p of paths.split(" ")) {
          p = import_path.default.resolve(import_path.default.dirname(p.trim()), "..");
          if (verifyWebRoot(p)) {
            webRoot = p;
            break;
          }
          p = import_path.default.resolve(p, "lib", "node_modules", "@ddd-tool", "domain-designer-cli");
          if (verifyWebRoot(p)) {
            webRoot = p;
            break;
          }
        }
        mustBeWebRoot(webRoot);
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
  if (executable.includes("bun") || process.argv[1].includes("/.bun/")) {
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
    copyIgnores.push("simple-example.ts");
    copyIgnores.push("complex-example.ts");
    copyIgnores.push("complex-example-detail");
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
    ignore: ["simple-example.ts", "complex-example.ts", "complex-example-detail"]
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
var import_worker_threads = require("worker_threads");
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
  const worker = new import_worker_threads.Worker(`${webRoot}/scripts/ai-assist-worker.cjs`);
  worker.on("online", () => {
    log_default.printDebug("worker online");
  });
  function onExit() {
    worker.terminate();
  }
  process.on("SIGINT", onExit);
  process.on("SIGTERM", onExit);
  process.on("SIGQUIT", onExit);
  console.debug("worker threadId", worker.threadId);
  process.nextTick(() => {
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
  });
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
  const tsSuffixMatcher = new RegExp(/(.+)\.ts$/);
  let i = 0;
  import_fs5.default.readdirSync(source).forEach((file) => {
    if (tsSuffixMatcher.test(file)) {
      const name = tsSuffixMatcher.exec(file)[1];
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
  import_fs5.default.writeFileSync(import_path6.default.join(webRoot, "packages", "playground", "src", "views", "index.ts"), mergedTsCode, {
    encoding: "utf-8"
  });
}

// src/domain/cli-args-agg/cmd-gen-code/index.ts
var import_fs6 = __toESM(require("fs"), 1);
var import_path7 = __toESM(require("path"), 1);
var import_child_process5 = require("child_process");

// ../../node_modules/.pnpm/@ddd-tool+domain-designer-core@0.1.0-beta.10/node_modules/@ddd-tool/domain-designer-core/index.js
function tr(t) {
  const e = t;
  return e && typeof e.actor == "function" && typeof e.startWorkflow == "function" && typeof e.defineUserStory == "function" && typeof e._getContext == "function" && typeof e.note == "function" && typeof e.info == "object" && typeof e.command == "function" && typeof e.facadeCmd == "function" && typeof e.agg == "function" && typeof e.event == "function" && typeof e.system == "function" && typeof e.policy == "function" && typeof e.service == "function" && typeof e.readModel == "function";
}
var Nt = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
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
function Dt(t) {
  if (y2(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const s = t[n], r2 = x(s) ? Me(s) : Dt(s);
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
function xt(t) {
  let e = "";
  if (x(t))
    e = t;
  else if (y2(t))
    for (let n = 0; n < t.length; n++) {
      const s = xt(t[n]);
      s && (e += s + " ");
    }
  else if (R(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
var st = true;
var Yt = [];
function _t() {
  Yt.push(st), st = false;
}
function pt() {
  const t = Yt.pop();
  st = t === void 0 ? true : t;
}
var j2 = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
);
var Ot = Symbol(
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
function C2(t) {
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
var yt = false;
function W(t, ...e) {
  if (yt) return;
  yt = true, _t();
  const n = k.length ? k[k.length - 1].component : null, s = n && n.appContext.config.warnHandler, r2 = nn();
  if (s)
    Mt(
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
  pt(), yt = false;
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
function Mt(t, e, n, s) {
  try {
    return s ? t(...s) : t();
  } catch (r2) {
    oe(r2, e, n);
  }
}
function oe(t, e, n, s = true) {
  const r2 = e ? e.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: c } = e && e.appContext.config || Nt;
  if (e) {
    let i = e.parent;
    const f = e.proxy, p = process.env.NODE_ENV !== "production" ? re[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const a = i.ec;
      if (a) {
        for (let u = 0; u < a.length; u++)
          if (a[u](t, f, p) === false)
            return;
      }
      i = i.parent;
    }
    if (o) {
      _t(), Mt(o, null, 10, [
        t,
        f,
        p
      ]), pt();
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
var Ct = null;
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
  Ct || (Ct = un.then(ie));
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
        n.flags & 4 && (n.flags &= -2), Mt(
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
    D = -1, O.length = 0, _n(t), Ct = null, (O.length || L.length) && ie(t);
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
var Et = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (dt().__VUE_HMR_RUNTIME__ = {
  createRecord: wt(pn),
  rerender: wt(hn),
  reload: wt(gn)
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
    let i = Et.get(c);
    i || (c !== n.initialDef && Ht(c, e), Et.set(c, i = /* @__PURE__ */ new Set())), i.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (i.add(o), o.ceReload(e.styles), i.delete(o)) : o.parent ? fn(() => {
      o.parent.update(), i.delete(o);
    }) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" && window.location.reload(), o.root.ce && o !== o.root && o.root.ce._removeChildStyle(c);
  }
  dn(() => {
    Et.clear();
  });
}
function Ht(t, e) {
  B(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function wt(t) {
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
  const f = {
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
  return i ? (Pt(f, n), o & 128 && t.normalize(f)) : n && (f.shapeFlag |= x(n) ? 8 : 16), process.env.NODE_ENV !== "production" && f.key !== f.key && W("VNode created with invalid key (NaN). VNode type:", f.type), f;
}
var Cn = process.env.NODE_ENV !== "production" ? Tn : _e;
function _e(t, e = null, n = null, s = 0, r2 = null, o = false) {
  if ((!t || t === yn) && (process.env.NODE_ENV !== "production" && !t && W(`Invalid vnode type when creating vnode: ${t}.`), t = Sn), On(t)) {
    const i = ft(
      t,
      e,
      true
      /* mergeRef: true */
    );
    return n && Pt(i, n), i.patchFlag = -2, i;
  }
  if (be(t) && (t = t.__vccOpts), e) {
    e = Fn(e);
    let { class: i, style: f } = e;
    i && !x(i) && (e.class = xt(i)), R(f) && (ct(f) && !y2(f) && (f = B({}, f)), e.style = Dt(f));
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
function Fn(t) {
  return t ? ct(t) || le(t) ? B({}, t) : t : null;
}
function ft(t, e, n = false, s = false) {
  const { props: r2, ref: o, patchFlag: c, children: i, transition: f } = t, p = e ? xn(r2 || {}, e) : r2, a = {
    __v_isVNode: true,
    __v_skip: true,
    type: t.type,
    props: p,
    key: p && de(p),
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
    transition: f,
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
  return f && s && ae(
    a,
    f.clone(a)
  ), a;
}
function pe(t) {
  const e = ft(t);
  return y2(t.children) && (e.children = t.children.map(pe)), e;
}
function Dn(t = " ", e = 0) {
  return Cn(vn, null, t, e);
}
function Pt(t, e) {
  let n = 0;
  const { shapeFlag: s } = t;
  if (e == null)
    e = null;
  else if (y2(e))
    n = 16;
  else if (typeof e == "object")
    if (s & 65) {
      const r2 = e.default;
      r2 && (r2._c && (r2._d = false), Pt(t, r2()), r2._c && (r2._d = true));
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
        e.class !== s.class && (e.class = xt([e.class, s.class]));
      else if (r2 === "style")
        e.style = Dt([e.style, s.style]);
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
      if (!R(u))
        return null;
      if (u.__isVue)
        return ["div", t, "VueInstance"];
      if (M2(u)) {
        _t();
        const l2 = u.value;
        return pt(), [
          "div",
          {},
          ["span", t, a(u)],
          "<",
          i(l2),
          ">"
        ];
      } else {
        if (ee(u))
          return [
            "div",
            {},
            ["span", t, C2(u) ? "ShallowReactive" : "Reactive"],
            "<",
            i(u),
            `>${P2(u) ? " (readonly)" : ""}`
          ];
        if (P2(u))
          return [
            "div",
            {},
            ["span", t, C2(u) ? "ShallowReadonly" : "Readonly"],
            "<",
            i(u),
            ">"
          ];
      }
      return null;
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
    const l2 = [];
    u.type.props && u.props && l2.push(c("props", h(u.props))), u.setupState !== Nt && l2.push(c("setup", u.setupState)), u.data !== Nt && l2.push(c("data", h(u.data)));
    const d = f(u, "computed");
    d && l2.push(c("computed", d));
    const g2 = f(u, "inject");
    return g2 && l2.push(c("injected", g2)), l2.push([
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
    ]), l2;
  }
  function c(u, l2) {
    return l2 = B({}, l2), Object.keys(l2).length ? [
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
        ...Object.keys(l2).map((d) => [
          "div",
          {},
          ["span", s, d + ": "],
          i(l2[d], false)
        ])
      ]
    ] : ["span", {}];
  }
  function i(u, l2 = true) {
    return typeof u == "number" ? ["span", e, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", s, u] : R(u) ? ["object", { object: l2 ? h(u) : u }] : ["span", n, String(u)];
  }
  function f(u, l2) {
    const d = u.type;
    if ($(d))
      return;
    const g2 = {};
    for (const b2 in u.ctx)
      p(d, b2, l2) && (g2[b2] = u.ctx[b2]);
    return g2;
  }
  function p(u, l2, d) {
    const g2 = u[d];
    if (y2(g2) && g2.includes(l2) || R(g2) && l2 in g2 || u.extends && p(u.extends, l2, d) || u.mixins && u.mixins.some((b2) => p(b2, l2, d)))
      return true;
  }
  function a(u) {
    return C2(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
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

// ../../node_modules/.pnpm/@ddd-tool+domain-designer-g_09ad5c92bf98bddbd3411b9a1b60aa9a/node_modules/@ddd-tool/domain-designer-generator/index.js
// @__NO_SIDE_EFFECTS__
function Bn(e) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const t of e.split(",")) n[t] = 1;
  return (t) => t in n;
}
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
var Fe = Object.assign;
var Un = Object.prototype.hasOwnProperty;
var Ve2 = (e, n) => Un.call(e, n);
var Y = Array.isArray;
var te = (e) => dn2(e) === "[object Map]";
var zn = (e) => typeof e == "function";
var Gn = (e) => typeof e == "string";
var ue = (e) => typeof e == "symbol";
var je = (e) => e !== null && typeof e == "object";
var Jn = Object.prototype.toString;
var dn2 = (e) => Jn.call(e);
var mn2 = (e) => dn2(e).slice(8, -1);
var Ye = (e) => Gn(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
var Wn = (e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return (t) => n[t] || (n[t] = e(t));
};
var Yn = Wn((e) => e.charAt(0).toUpperCase() + e.slice(1));
var q = (e, n) => !Object.is(e, n);
function X3(e, ...n) {
}
var A;
var fn2 = 0;
var oe2;
var se2;
function qn(e, n = false) {
  if (e.flags |= 8, n) {
    e.next = se2, se2 = e;
    return;
  }
  e.next = oe2, oe2 = e;
}
function qe() {
  fn2++;
}
function Ze() {
  if (--fn2 > 0)
    return;
  if (se2) {
    let n = se2;
    for (se2 = void 0; n; ) {
      const t = n.next;
      n.next = void 0, n.flags &= -9, n = t;
    }
  }
  let e;
  for (; oe2; ) {
    let n = oe2;
    for (oe2 = void 0; n; ) {
      const t = n.next;
      if (n.next = void 0, n.flags &= -9, n.flags & 1)
        try {
          n.trigger();
        } catch (r2) {
          e || (e = r2);
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
function Qn(e) {
  let n, t = e.depsTail, r2 = t;
  for (; r2; ) {
    const o = r2.prevDep;
    r2.version === -1 ? (r2 === t && (t = o), vn2(r2), et(r2)) : n = r2, r2.dep.activeLink = r2.prevActiveLink, r2.prevActiveLink = void 0, r2 = o;
  }
  e.deps = n, e.depsTail = t;
}
function Xn(e) {
  for (let n = e.deps; n; n = n.nextDep)
    if (n.dep.version !== n.version || n.dep.computed && (hn2(n.dep.computed) || n.dep.version !== n.version))
      return true;
  return !!e._dirty;
}
function hn2(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === re2) || (e.globalVersion = re2, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Xn(e))))
    return;
  e.flags |= 2;
  const n = e.dep, t = A, r2 = R2;
  A = e, R2 = true;
  try {
    Zn(e);
    const o = e.fn(e._value);
    (n.version === 0 || q(o, e._value)) && (e.flags |= 128, e._value = o, n.version++);
  } catch (o) {
    throw n.version++, o;
  } finally {
    A = t, R2 = r2, Qn(e), e.flags &= -3;
  }
}
function vn2(e, n = false) {
  const { dep: t, prevSub: r2, nextSub: o } = e;
  if (r2 && (r2.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r2, e.nextSub = void 0), process.env.NODE_ENV !== "production" && t.subsHead === e && (t.subsHead = o), t.subs === e && (t.subs = r2, !r2 && t.computed)) {
    t.computed.flags &= -5;
    for (let s = t.computed.deps; s; s = s.nextDep)
      vn2(s, true);
  }
  !n && !--t.sc && t.map && t.map.delete(t.key);
}
function et(e) {
  const { prevDep: n, nextDep: t } = e;
  n && (n.nextDep = t, e.prevDep = void 0), t && (t.prevDep = n, e.nextDep = void 0);
}
var R2 = true;
var gn2 = [];
function nt() {
  gn2.push(R2), R2 = false;
}
function tt() {
  const e = gn2.pop();
  R2 = e === void 0 ? true : e;
}
var re2 = 0;
var ot2 = class {
  constructor(n, t) {
    this.sub = n, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
};
var Qe = class {
  constructor(n) {
    this.computed = n, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(n) {
    if (!A || !R2 || A === this.computed)
      return;
    let t = this.activeLink;
    if (t === void 0 || t.sub !== A)
      t = this.activeLink = new ot2(A, this), A.deps ? (t.prevDep = A.depsTail, A.depsTail.nextDep = t, A.depsTail = t) : A.deps = A.depsTail = t, _n2(t);
    else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
      const r2 = t.nextDep;
      r2.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = r2), t.prevDep = A.depsTail, t.nextDep = void 0, A.depsTail.nextDep = t, A.depsTail = t, A.deps === t && (A.deps = r2);
    }
    return process.env.NODE_ENV !== "production" && A.onTrack && A.onTrack(
      Fe(
        {
          effect: A
        },
        n
      )
    ), t;
  }
  trigger(n) {
    this.version++, re2++, this.notify(n);
  }
  notify(n) {
    qe();
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
function _n2(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const n = e.dep.computed;
    if (n && !e.dep.subs) {
      n.flags |= 20;
      for (let r2 = n.deps; r2; r2 = r2.nextDep)
        _n2(r2);
    }
    const t = e.dep.subs;
    t !== e && (e.prevSub = t, t && (t.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
var Re2 = /* @__PURE__ */ new WeakMap();
var K2 = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
);
var He = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
);
var ae2 = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function k2(e, n, t) {
  if (R2 && A) {
    let r2 = Re2.get(e);
    r2 || Re2.set(e, r2 = /* @__PURE__ */ new Map());
    let o = r2.get(t);
    o || (r2.set(t, o = new Qe()), o.map = r2, o.key = t), process.env.NODE_ENV !== "production" ? o.track({
      target: e,
      type: n,
      key: t
    }) : o.track();
  }
}
function V2(e, n, t, r2, o, s) {
  const p = Re2.get(e);
  if (!p) {
    re2++;
    return;
  }
  const _ = (C3) => {
    C3 && (process.env.NODE_ENV !== "production" ? C3.trigger({
      target: e,
      type: n,
      key: t,
      newValue: r2,
      oldValue: o,
      oldTarget: s
    }) : C3.trigger());
  };
  if (qe(), n === "clear")
    p.forEach(_);
  else {
    const C3 = Y(e), m2 = C3 && Ye(t);
    if (C3 && t === "length") {
      const i = Number(r2);
      p.forEach((a, l2) => {
        (l2 === "length" || l2 === ae2 || !ue(l2) && l2 >= i) && _(a);
      });
    } else
      switch ((t !== void 0 || p.has(void 0)) && _(p.get(t)), m2 && _(p.get(ae2)), n) {
        case "add":
          C3 ? m2 && _(p.get("length")) : (_(p.get(K2)), te(e) && _(p.get(He)));
          break;
        case "delete":
          C3 || (_(p.get(K2)), te(e) && _(p.get(He)));
          break;
        case "set":
          te(e) && _(p.get(K2));
          break;
      }
  }
  Ze();
}
function J(e) {
  const n = E2(e);
  return n === e ? n : (k2(n, "iterate", ae2), H(e) ? n : n.map(I2));
}
function Xe(e) {
  return k2(e = E2(e), "iterate", ae2), e;
}
var st2 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Oe(this, Symbol.iterator, I2);
  },
  concat(...e) {
    return J(this).concat(
      ...e.map((n) => Y(n) ? J(n) : n)
    );
  },
  entries() {
    return Oe(this, "entries", (e) => (e[1] = I2(e[1]), e));
  },
  every(e, n) {
    return D2(this, "every", e, n, void 0, arguments);
  },
  filter(e, n) {
    return D2(this, "filter", e, n, (t) => t.map(I2), arguments);
  },
  find(e, n) {
    return D2(this, "find", e, n, I2, arguments);
  },
  findIndex(e, n) {
    return D2(this, "findIndex", e, n, void 0, arguments);
  },
  findLast(e, n) {
    return D2(this, "findLast", e, n, I2, arguments);
  },
  findLastIndex(e, n) {
    return D2(this, "findLastIndex", e, n, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, n) {
    return D2(this, "forEach", e, n, void 0, arguments);
  },
  includes(...e) {
    return Ie2(this, "includes", e);
  },
  indexOf(...e) {
    return Ie2(this, "indexOf", e);
  },
  join(e) {
    return J(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Ie2(this, "lastIndexOf", e);
  },
  map(e, n) {
    return D2(this, "map", e, n, void 0, arguments);
  },
  pop() {
    return ne2(this, "pop");
  },
  push(...e) {
    return ne2(this, "push", e);
  },
  reduce(e, ...n) {
    return cn2(this, "reduce", e, n);
  },
  reduceRight(e, ...n) {
    return cn2(this, "reduceRight", e, n);
  },
  shift() {
    return ne2(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, n) {
    return D2(this, "some", e, n, void 0, arguments);
  },
  splice(...e) {
    return ne2(this, "splice", e);
  },
  toReversed() {
    return J(this).toReversed();
  },
  toSorted(e) {
    return J(this).toSorted(e);
  },
  toSpliced(...e) {
    return J(this).toSpliced(...e);
  },
  unshift(...e) {
    return ne2(this, "unshift", e);
  },
  values() {
    return Oe(this, "values", I2);
  }
};
function Oe(e, n, t) {
  const r2 = Xe(e), o = r2[n]();
  return r2 !== e && !H(e) && (o._next = o.next, o.next = () => {
    const s = o._next();
    return s.value && (s.value = t(s.value)), s;
  }), o;
}
var rt = Array.prototype;
function D2(e, n, t, r2, o, s) {
  const p = Xe(e), _ = p !== e && !H(e), C3 = p[n];
  if (C3 !== rt[n]) {
    const a = C3.apply(e, s);
    return _ ? I2(a) : a;
  }
  let m2 = t;
  p !== e && (_ ? m2 = function(a, l2) {
    return t.call(this, I2(a), l2, e);
  } : t.length > 2 && (m2 = function(a, l2) {
    return t.call(this, a, l2, e);
  }));
  const i = C3.call(p, m2, r2);
  return _ && o ? o(i) : i;
}
function cn2(e, n, t, r2) {
  const o = Xe(e);
  let s = t;
  return o !== e && (H(e) ? t.length > 3 && (s = function(p, _, C3) {
    return t.call(this, p, _, C3, e);
  }) : s = function(p, _, C3) {
    return t.call(this, p, I2(_), C3, e);
  }), o[n](s, ...r2);
}
function Ie2(e, n, t) {
  const r2 = E2(e);
  k2(r2, "iterate", ae2);
  const o = r2[n](...t);
  return (o === -1 || o === false) && $t5(t[0]) ? (t[0] = E2(t[0]), r2[n](...t)) : o;
}
function ne2(e, n, t = []) {
  nt(), qe();
  const r2 = E2(e)[n].apply(e, t);
  return Ze(), tt(), r2;
}
var at2 = /* @__PURE__ */ Bn("__proto__,__v_isRef,__isVue");
var Cn2 = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ue)
);
function it(e) {
  ue(e) || (e = String(e));
  const n = E2(this);
  return k2(n, "has", e), n.hasOwnProperty(e);
}
var $n = class {
  constructor(n = false, t = false) {
    this._isReadonly = n, this._isShallow = t;
  }
  get(n, t, r2) {
    if (t === "__v_skip") return n.__v_skip;
    const o = this._isReadonly, s = this._isShallow;
    if (t === "__v_isReactive")
      return !o;
    if (t === "__v_isReadonly")
      return o;
    if (t === "__v_isShallow")
      return s;
    if (t === "__v_raw")
      return r2 === (o ? s ? yn2 : Nn2 : s ? gt : wn2).get(n) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(n) === Object.getPrototypeOf(r2) ? n : void 0;
    const p = Y(n);
    if (!o) {
      let C3;
      if (p && (C3 = st2[t]))
        return C3;
      if (t === "hasOwnProperty")
        return it;
    }
    const _ = Reflect.get(
      n,
      t,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Z2(n) ? n : r2
    );
    return (ue(t) ? Cn2.has(t) : at2(t)) || (o || k2(n, "get", t), s) ? _ : Z2(_) ? p && Ye(t) ? _ : _.value : je(_) ? o ? ve(_) : jn(_) : _;
  }
};
var ct2 = class extends $n {
  constructor(n = false) {
    super(false, n);
  }
  set(n, t, r2, o) {
    let s = n[t];
    if (!this._isShallow) {
      const C3 = ee2(s);
      if (!H(r2) && !ee2(r2) && (s = E2(s), r2 = E2(r2)), !Y(n) && Z2(s) && !Z2(r2))
        return C3 ? false : (s.value = r2, true);
    }
    const p = Y(n) && Ye(t) ? Number(t) < n.length : Ve2(n, t), _ = Reflect.set(
      n,
      t,
      r2,
      Z2(n) ? n : o
    );
    return n === E2(o) && (p ? q(r2, s) && V2(n, "set", t, r2, s) : V2(n, "add", t, r2)), _;
  }
  deleteProperty(n, t) {
    const r2 = Ve2(n, t), o = n[t], s = Reflect.deleteProperty(n, t);
    return s && r2 && V2(n, "delete", t, void 0, o), s;
  }
  has(n, t) {
    const r2 = Reflect.has(n, t);
    return (!ue(t) || !Cn2.has(t)) && k2(n, "has", t), r2;
  }
  ownKeys(n) {
    return k2(
      n,
      "iterate",
      Y(n) ? "length" : K2
    ), Reflect.ownKeys(n);
  }
};
var bn2 = class extends $n {
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
var ut2 = /* @__PURE__ */ new ct2();
var lt2 = /* @__PURE__ */ new bn2();
var pt2 = /* @__PURE__ */ new bn2(true);
var Le = (e) => e;
var pe2 = (e) => Reflect.getPrototypeOf(e);
function dt2(e, n, t) {
  return function(...r2) {
    const o = this.__v_raw, s = E2(o), p = te(s), _ = e === "entries" || e === Symbol.iterator && p, C3 = e === "keys" && p, m2 = o[e](...r2), i = t ? Le : n ? Me2 : I2;
    return !n && k2(
      s,
      "iterate",
      C3 ? He : K2
    ), {
      // iterator protocol
      next() {
        const { value: a, done: l2 } = m2.next();
        return l2 ? { value: a, done: l2 } : {
          value: _ ? [i(a[0]), i(a[1])] : i(a),
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
function de2(e) {
  return function(...n) {
    if (process.env.NODE_ENV !== "production") {
      const t = n[0] ? `on key "${n[0]}" ` : "";
      X3(
        `${Yn(e)} operation ${t}failed: target is readonly.`,
        E2(this)
      );
    }
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function mt(e, n) {
  const t = {
    get(o) {
      const s = this.__v_raw, p = E2(s), _ = E2(o);
      e || (q(o, _) && k2(p, "get", o), k2(p, "get", _));
      const { has: C3 } = pe2(p), m2 = n ? Le : e ? Me2 : I2;
      if (C3.call(p, o))
        return m2(s.get(o));
      if (C3.call(p, _))
        return m2(s.get(_));
      s !== p && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && k2(E2(o), "iterate", K2), Reflect.get(o, "size", o);
    },
    has(o) {
      const s = this.__v_raw, p = E2(s), _ = E2(o);
      return e || (q(o, _) && k2(p, "has", o), k2(p, "has", _)), o === _ ? s.has(o) : s.has(o) || s.has(_);
    },
    forEach(o, s) {
      const p = this, _ = p.__v_raw, C3 = E2(_), m2 = n ? Le : e ? Me2 : I2;
      return !e && k2(C3, "iterate", K2), _.forEach((i, a) => o.call(s, m2(i), m2(a), p));
    }
  };
  return Fe(
    t,
    e ? {
      add: de2("add"),
      set: de2("set"),
      delete: de2("delete"),
      clear: de2("clear")
    } : {
      add(o) {
        !n && !H(o) && !ee2(o) && (o = E2(o));
        const s = E2(this);
        return pe2(s).has.call(s, o) || (s.add(o), V2(s, "add", o, o)), this;
      },
      set(o, s) {
        !n && !H(s) && !ee2(s) && (s = E2(s));
        const p = E2(this), { has: _, get: C3 } = pe2(p);
        let m2 = _.call(p, o);
        m2 ? process.env.NODE_ENV !== "production" && un2(p, _, o) : (o = E2(o), m2 = _.call(p, o));
        const i = C3.call(p, o);
        return p.set(o, s), m2 ? q(s, i) && V2(p, "set", o, s, i) : V2(p, "add", o, s), this;
      },
      delete(o) {
        const s = E2(this), { has: p, get: _ } = pe2(s);
        let C3 = p.call(s, o);
        C3 ? process.env.NODE_ENV !== "production" && un2(s, p, o) : (o = E2(o), C3 = p.call(s, o));
        const m2 = _ ? _.call(s, o) : void 0, i = s.delete(o);
        return C3 && V2(s, "delete", o, void 0, m2), i;
      },
      clear() {
        const o = E2(this), s = o.size !== 0, p = process.env.NODE_ENV !== "production" ? te(o) ? new Map(o) : new Set(o) : void 0, _ = o.clear();
        return s && V2(
          o,
          "clear",
          void 0,
          void 0,
          p
        ), _;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    t[o] = dt2(o, e, n);
  }), t;
}
function en2(e, n) {
  const t = mt(e, n);
  return (r2, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r2 : Reflect.get(
    Ve2(t, o) && o in r2 ? t : r2,
    o,
    s
  );
}
var ft2 = {
  get: /* @__PURE__ */ en2(false, false)
};
var ht = {
  get: /* @__PURE__ */ en2(true, false)
};
var vt = {
  get: /* @__PURE__ */ en2(true, true)
};
function un2(e, n, t) {
  const r2 = E2(t);
  if (r2 !== t && n.call(e, r2)) {
    const o = mn2(e);
    X3(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
var wn2 = /* @__PURE__ */ new WeakMap();
var gt = /* @__PURE__ */ new WeakMap();
var Nn2 = /* @__PURE__ */ new WeakMap();
var yn2 = /* @__PURE__ */ new WeakMap();
function _t2(e) {
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
function Ct2(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : _t2(mn2(e));
}
function jn(e) {
  return ee2(e) ? e : nn2(
    e,
    false,
    ut2,
    ft2,
    wn2
  );
}
function ve(e) {
  return nn2(
    e,
    true,
    lt2,
    ht,
    Nn2
  );
}
function fe2(e) {
  return nn2(
    e,
    true,
    pt2,
    vt,
    yn2
  );
}
function nn2(e, n, t, r2, o) {
  if (!je(e))
    return process.env.NODE_ENV !== "production" && X3(
      `value cannot be made ${n ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(n && e.__v_isReactive))
    return e;
  const s = Ct2(e);
  if (s === 0)
    return e;
  const p = o.get(e);
  if (p)
    return p;
  const _ = new Proxy(
    e,
    s === 2 ? r2 : t
  );
  return o.set(e, _), _;
}
function ee2(e) {
  return !!(e && e.__v_isReadonly);
}
function H(e) {
  return !!(e && e.__v_isShallow);
}
function $t5(e) {
  return e ? !!e.__v_raw : false;
}
function E2(e) {
  const n = e && e.__v_raw;
  return n ? E2(n) : e;
}
var I2 = (e) => je(e) ? jn(e) : e;
var Me2 = (e) => je(e) ? ve(e) : e;
function Z2(e) {
  return e ? e.__v_isRef === true : false;
}
function ge2(e) {
  return bt(e, false);
}
function bt(e, n) {
  return Z2(e) ? e : new wt2(e, n);
}
var wt2 = class {
  constructor(n, t) {
    this.dep = new Qe(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = t ? n : E2(n), this._value = t ? n : I2(n), this.__v_isShallow = t;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(n) {
    const t = this._rawValue, r2 = this.__v_isShallow || H(n) || ee2(n);
    n = r2 ? n : E2(n), q(n, t) && (this._rawValue = n, this._value = r2 ? n : I2(n), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: n,
      oldValue: t
    }) : this.dep.trigger());
  }
};
var Nt2 = class {
  constructor(n, t, r2) {
    this.fn = n, this.setter = t, this._value = void 0, this.dep = new Qe(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = re2 - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = r2;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    A !== this)
      return qn(this, true), true;
    process.env.NODE_ENV;
  }
  get value() {
    const n = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return hn2(this), n && (n.version = this.dep.version), this._value;
  }
  set value(n) {
    this.setter ? this.setter(n) : process.env.NODE_ENV !== "production" && X3("Write operation failed: computed value is readonly");
  }
};
function Ke(e, n, t = false) {
  let r2, o;
  zn(e) ? r2 = e : (r2 = e.get, o = e.set);
  const s = new Nt2(r2, o, t);
  return process.env.NODE_ENV, s;
}
var yt2 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
var jt = (e = 21) => {
  let n = "", t = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    n += yt2[t[e] & 63];
  return n;
};
function Et2(e, n = true, t = false) {
  const r2 = ge2();
  let o;
  const s = ge2(false);
  let p = () => {
  };
  const _ = new Proxy(e, {
    apply: function(i, a, l2) {
      let f;
      try {
        f = i(...l2);
      } catch (b2) {
        f = b2;
      }
      if (f instanceof Error) {
        if (r2.value = f, o = f, n)
          throw p(), f;
      } else
        s.value = true, r2.value = void 0, o = true, p();
    }
  }), C3 = () => {
  }, m2 = new Proxy(
    (i) => {
      r2.value = i;
    },
    {
      apply: function(i, a, l2) {
        i(...l2), C3(...l2);
      }
    }
  );
  return {
    promise: new Promise((i, a) => {
      if (n && o instanceof Error) {
        a(o);
        return;
      } else if (o === true) {
        i();
        return;
      }
      let l2;
      t && (l2 = setTimeout(() => {
        const f = new Error("timeout!");
        r2.value = f, n && a(f);
      }, t)), p = () => {
        l2 && (clearTimeout(l2), l2 = void 0), i();
      };
    }),
    callback: _,
    onError: m2,
    resolved: Ke(() => s.value),
    error: Ke(() => r2.value)
  };
}
function Be() {
  return jt();
}
function At() {
  const e = {}, n = {}, t = /* @__PURE__ */ new WeakMap(), r2 = {};
  return Object.freeze({
    registerAgg(o) {
      if (o.isInitialized.value)
        throw new Error("Agg must register before initialized");
      if (r2[o.__id])
        throw new Error("Agg already registered");
      o.type === "MultiInstance" && o.api.events.destroyed.watchPublish(() => {
        delete r2[o.__id];
      }), r2[o.__id] = o;
      const s = [];
      for (const p of Object.values(e))
        p.mount({ api: o.api, __aggId: o.__id, isInitialized: o.isInitialized });
      for (const p of Object.values(n))
        p.mount({ api: o.api, __aggId: o.__id }), s.push(p.__id);
      t.set(o, s);
    },
    createSetupPlugin(o) {
      let s;
      return o instanceof Function ? s = o() : s = o, Object.freeze({
        __id: Be(),
        type: "Setup",
        mount(p) {
          if (p.isInitialized.value)
            throw new Error("Can not setup after initialized");
          s.mount({ api: p.api, __aggId: p.__aggId });
        }
      });
    },
    createHotSwapPlugin(o) {
      let s;
      return o instanceof Function ? s = o() : s = o, Object.freeze({
        __id: Be(),
        type: "HotSwap",
        mount: s.mount,
        unmount: s.unmount
      });
    },
    registerPlugin(o) {
      if (o.type === "Setup") {
        if (e[o.__id])
          throw new Error("Plugin already registered");
        e[o.__id] = o;
        for (const s in r2)
          o.mount({
            api: r2[s].api,
            __aggId: r2[s].__id,
            isInitialized: r2[s].isInitialized
          });
      } else if (o.type === "HotSwap") {
        n[o.__id] = o;
        for (const s in r2)
          t.has(r2[s]) && !t.get(r2[s]).includes(o.__id) && (o.mount({ api: r2[s].api, __aggId: r2[s].__id }), t.get(r2[s]).push(o.__id));
      } else
        isNever(o);
    },
    unregisterPlugin(o) {
      if (o.type === "Setup")
        throw new Error("Can not unregister setup plugin");
      if (o.type === "HotSwap") {
        for (const s in r2)
          t.has(r2[s]) && t.get(r2[s]).includes(o.__id) && o.unmount({ api: r2[s].api, __aggId: r2[s].__id });
        delete n[o.__id];
      } else
        isNever(o);
    }
  });
}
function St(e) {
  return At();
}
function Ot2(e) {
  const n = It(e);
  return fe2({
    states: n.states,
    commands: n.commands,
    events: n.events
  });
}
function It(e) {
  const n = e.states;
  for (const p of Object.keys(e.states))
    n[p] = ve(n[p]);
  const t = fe2(e.states), r2 = ve(e.commands), o = {}, s = e.events;
  for (const p in e.events)
    o[p] = s[p].api;
  return fe2({
    states: t,
    commands: r2,
    events: fe2(o),
    destroy: e.destroy
  });
}
function kt(e) {
  const {
    callback: n,
    onError: t,
    promise: r2,
    resolved: o
  } = Et2(() => {
  }, false, 5e3);
  function s(a) {
    if (o.value === true)
      throw new Error("Agg already initialized");
    p.push(a());
  }
  const p = [], _ = e({
    onCreated(a) {
      Promise.resolve().then(a);
    },
    onBeforeInitialize: s,
    isInitialized: Ke(() => o.value),
    untilInitialized: r2
  });
  setTimeout(
    () => Promise.all(p).then(() => {
      n();
    }).catch((a) => {
      t(a);
    }),
    0
  );
  const C3 = _.states || {}, m2 = _.commands || {}, i = _.events || {};
  return {
    __id: Be(),
    type: "Singleton",
    api: Ot2({
      states: C3,
      commands: m2,
      events: i,
      destroy: () => {
      }
    }),
    isInitialized: o,
    async untilInitialized() {
      return await r2.catch((a) => {
        throw new Error(`Failed to initialize Agg: ${a.message}
Stack : ${a.stack || "unkown"}`);
      });
    }
  };
}
var me;
function xt2(e) {
  return kt(() => {
    const n = ge2(e), t = ge2({});
    let r2 = () => [], o = () => [], s = () => [], p = () => [], _ = () => [], C3 = () => [], m2 = () => [];
    return {
      states: {
        designer: n,
        context: t
      },
      commands: {
        genCodeFiles() {
          return m2();
        },
        clearCaches() {
        },
        setContext(i) {
          t.value = i;
        },
        setDomainDesigner(i) {
          this.clearCaches(), n.value = i;
        },
        _genInfoCode(...i) {
          return r2(...i);
        },
        _setInfoCodeProvider(i) {
          r2 = i;
        },
        _genCommandCode(...i) {
          return o(...i);
        },
        _setCommandCodeProvider(i) {
          o = i;
        },
        _genFacadeCommandCode(...i) {
          return s(...i);
        },
        _setFacadeCommandCodeProvider(i) {
          s = i;
        },
        _genAggCode(...i) {
          return p(...i);
        },
        _setAggCodeProvider(i) {
          p = i;
        },
        _genEventCode(...i) {
          return _(...i);
        },
        _setEventCodeProvider(i) {
          _ = i;
        },
        _genReadModelCode(...i) {
          return C3(...i);
        },
        _setReadModelCodeProvider(i) {
          C3 = i;
        },
        _setCodeFileProvider(i) {
          m2 = i;
        }
      }
    };
  });
}
var le2 = St();
function Ao(e) {
  if (!me) {
    if (!e)
      throw new Error("designer is required");
    me = xt2(e), le2.registerAgg(me);
  }
  return me.api;
}
function Ee(e) {
  return e && e._attributes && e._attributes.rule === "Info";
}
function Tt(e) {
  return e && e._attributes && e._attributes.rule === "Agg";
}
function Dt2(e) {
  return e && e._attributes && e._attributes.rule === "Command";
}
function Pt2(e) {
  return e && e._attributes && e._attributes.rule === "FacadeCommand";
}
function Ft(e) {
  return e && e._attributes && e._attributes.rule === "Event";
}
function Vt(e) {
  return e && e._attributes && e._attributes.rule === "ReadModel";
}
var Ue = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
var Rt = () => {
};
var Ht2 = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
var Ae2 = Object.assign;
var T = Array.isArray;
var G = (e) => typeof e == "function";
var L2 = (e) => typeof e == "string";
var Lt2 = (e) => typeof e == "symbol";
var B2 = (e) => e !== null && typeof e == "object";
var ln2;
var Se = () => ln2 || (ln2 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function tn2(e) {
  if (T(e)) {
    const n = {};
    for (let t = 0; t < e.length; t++) {
      const r2 = e[t], o = L2(r2) ? Ut(r2) : tn2(r2);
      if (o)
        for (const s in o)
          n[s] = o[s];
    }
    return n;
  } else if (L2(e) || B2(e))
    return e;
}
var Mt2 = /;(?![^(]*\))/g;
var Kt = /:([^]+)/;
var Bt = /\/\*[^]*?\*\//g;
function Ut(e) {
  const n = {};
  return e.replace(Bt, "").split(Mt2).forEach((t) => {
    if (t) {
      const r2 = t.split(Kt);
      r2.length > 1 && (n[r2[0].trim()] = r2[1].trim());
    }
  }), n;
}
function on2(e) {
  let n = "";
  if (L2(e))
    n = e;
  else if (T(e))
    for (let t = 0; t < e.length; t++) {
      const r2 = on2(e[t]);
      r2 && (n += r2 + " ");
    }
  else if (B2(e))
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
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Lt2)
);
function En2(e) {
  return ze(e) ? En2(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ze(e) {
  return !!(e && e.__v_isReadonly);
}
function ke(e) {
  return !!(e && e.__v_isShallow);
}
function Ge(e) {
  return e ? !!e.__v_raw : false;
}
function U(e) {
  const n = e && e.__v_raw;
  return n ? U(n) : e;
}
function sn2(e) {
  return e ? e.__v_isRef === true : false;
}
var z = [];
function zt(e) {
  z.push(e);
}
function Gt() {
  z.pop();
}
var xe2 = false;
function ie2(e, ...n) {
  if (xe2) return;
  xe2 = true;
  const t = z.length ? z[z.length - 1].component : null, r2 = t && t.appContext.config.warnHandler, o = Jt();
  if (r2)
    rn2(
      r2,
      t,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + n.map((s) => {
          var p, _;
          return (_ = (p = s.toString) == null ? void 0 : p.call(s)) != null ? _ : JSON.stringify(s);
        }).join(""),
        t && t.proxy,
        o.map(
          ({ vnode: s }) => `at <${Ln(t, s.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...n];
    o.length && s.push(`
`, ...Wt(o));
  }
  xe2 = false;
}
function Jt() {
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
    const r2 = e.component && e.component.parent;
    e = r2 && r2.vnode;
  }
  return n;
}
function Wt(e) {
  const n = [];
  return e.forEach((t, r2) => {
    n.push(...r2 === 0 ? [] : [`
`], ...Yt2(t));
  }), n;
}
function Yt2({ vnode: e, recurseCount: n }) {
  const t = n > 0 ? `... (${n} recursive calls)` : "", r2 = e.component ? e.component.parent == null : false, o = ` at <${Ln(
    e.component,
    e.type,
    r2
  )}`, s = ">" + t;
  return e.props ? [o, ...qt2(e.props), s] : [o + s];
}
function qt2(e) {
  const n = [], t = Object.keys(e);
  return t.slice(0, 3).forEach((r2) => {
    n.push(...An2(r2, e[r2]));
  }), t.length > 3 && n.push(" ..."), n;
}
function An2(e, n, t) {
  return L2(n) ? (n = JSON.stringify(n), t ? n : [`${e}=${n}`]) : typeof n == "number" || typeof n == "boolean" || n == null ? t ? n : [`${e}=${n}`] : sn2(n) ? (n = An2(e, U(n.value), true), t ? n : [`${e}=Ref<`, n, ">"]) : G(n) ? [`${e}=fn${n.name ? `<${n.name}>` : ""}`] : (n = U(n), t ? n : [`${e}=`, n]);
}
var Sn2 = {
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
function rn2(e, n, t, r2) {
  try {
    return r2 ? e(...r2) : e();
  } catch (o) {
    On2(o, n, t);
  }
}
function On2(e, n, t, r2 = true) {
  const o = n ? n.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: p } = n && n.appContext.config || Ue;
  if (n) {
    let _ = n.parent;
    const C3 = n.proxy, m2 = process.env.NODE_ENV !== "production" ? Sn2[t] : `https://vuejs.org/error-reference/#runtime-${t}`;
    for (; _; ) {
      const i = _.ec;
      if (i) {
        for (let a = 0; a < i.length; a++)
          if (i[a](e, C3, m2) === false)
            return;
      }
      _ = _.parent;
    }
    if (s) {
      rn2(s, null, 10, [
        e,
        C3,
        m2
      ]);
      return;
    }
  }
  Zt(e, t, o, r2, p);
}
function Zt(e, n, t, r2 = true, o = false) {
  if (process.env.NODE_ENV !== "production") {
    const s = Sn2[n];
    if (t && zt(t), ie2(`Unhandled error${s ? ` during execution of ${s}` : ""}`), t && Gt(), r2)
      throw e;
  } else if (o)
    throw e;
}
var x2 = [];
var P3 = -1;
var Q2 = [];
var F2 = null;
var W2 = 0;
var Qt = /* @__PURE__ */ Promise.resolve();
var Je = null;
var Xt = 100;
function eo(e) {
  let n = P3 + 1, t = x2.length;
  for (; n < t; ) {
    const r2 = n + t >>> 1, o = x2[r2], s = ce2(o);
    s < e || s === e && o.flags & 2 ? n = r2 + 1 : t = r2;
  }
  return n;
}
function no(e) {
  if (!(e.flags & 1)) {
    const n = ce2(e), t = x2[x2.length - 1];
    !t || // fast path when the job id is larger than the tail
    !(e.flags & 2) && n >= ce2(t) ? x2.push(e) : x2.splice(eo(n), 0, e), e.flags |= 1, In2();
  }
}
function In2() {
  Je || (Je = Qt.then(kn));
}
function to(e) {
  T(e) ? Q2.push(...e) : F2 && e.id === -1 ? F2.splice(W2 + 1, 0, e) : e.flags & 1 || (Q2.push(e), e.flags |= 1), In2();
}
function oo(e) {
  if (Q2.length) {
    const n = [...new Set(Q2)].sort(
      (t, r2) => ce2(t) - ce2(r2)
    );
    if (Q2.length = 0, F2) {
      F2.push(...n);
      return;
    }
    for (F2 = n, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), W2 = 0; W2 < F2.length; W2++) {
      const t = F2[W2];
      process.env.NODE_ENV !== "production" && xn2(e, t) || (t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2);
    }
    F2 = null, W2 = 0;
  }
}
var ce2 = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function kn(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const n = process.env.NODE_ENV !== "production" ? (t) => xn2(e, t) : Rt;
  try {
    for (P3 = 0; P3 < x2.length; P3++) {
      const t = x2[P3];
      if (t && !(t.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && n(t))
          continue;
        t.flags & 4 && (t.flags &= -2), rn2(
          t,
          t.i,
          t.i ? 15 : 14
        ), t.flags & 4 || (t.flags &= -2);
      }
    }
  } finally {
    for (; P3 < x2.length; P3++) {
      const t = x2[P3];
      t && (t.flags &= -2);
    }
    P3 = -1, x2.length = 0, oo(e), Je = null, (x2.length || Q2.length) && kn(e);
  }
}
function xn2(e, n) {
  const t = e.get(n) || 0;
  if (t > Xt) {
    const r2 = n.i, o = r2 && Hn(r2.type);
    return On2(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), true;
  }
  return e.set(n, t + 1), false;
}
var Te = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Se().__VUE_HMR_RUNTIME__ = {
  createRecord: De2(so),
  rerender: De2(ro),
  reload: De2(ao)
});
var _e2 = /* @__PURE__ */ new Map();
function so(e, n) {
  return _e2.has(e) ? false : (_e2.set(e, {
    initialDef: Ce(n),
    instances: /* @__PURE__ */ new Set()
  }), true);
}
function Ce(e) {
  return Mn2(e) ? e.__vccOpts : e;
}
function ro(e, n) {
  const t = _e2.get(e);
  t && (t.initialDef.render = n, [...t.instances].forEach((r2) => {
    n && (r2.render = n, Ce(r2.type).render = n), r2.renderCache = [], r2.update();
  }));
}
function ao(e, n) {
  const t = _e2.get(e);
  if (!t) return;
  n = Ce(n), pn2(t.initialDef, n);
  const r2 = [...t.instances];
  for (let o = 0; o < r2.length; o++) {
    const s = r2[o], p = Ce(s.type);
    let _ = Te.get(p);
    _ || (p !== t.initialDef && pn2(p, n), Te.set(p, _ = /* @__PURE__ */ new Set())), _.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (_.add(s), s.ceReload(n.styles), _.delete(s)) : s.parent ? no(() => {
      s.parent.update(), _.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" && window.location.reload(), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(p);
  }
  to(() => {
    Te.clear();
  });
}
function pn2(e, n) {
  Ae2(e, n);
  for (const t in e)
    t !== "__file" && !(t in n) && delete e[t];
}
function De2(e) {
  return (n, t) => {
    try {
      return e(n, t);
    } catch {
    }
  };
}
var $e2 = null;
var io = null;
var co = (e) => e.__isTeleport;
function Tn2(e, n) {
  e.shapeFlag & 6 && e.component ? (e.transition = n, Tn2(e.component.subTree, n)) : e.shapeFlag & 128 ? (e.ssContent.transition = n.clone(e.ssContent), e.ssFallback.transition = n.clone(e.ssFallback)) : e.transition = n;
}
Se().requestIdleCallback;
Se().cancelIdleCallback;
var uo = Symbol.for("v-ndc");
process.env.NODE_ENV;
var lo = {};
var Dn2 = (e) => Object.getPrototypeOf(e) === lo;
var po = (e) => e.__isSuspense;
var Pn = Symbol.for("v-fgt");
var mo = Symbol.for("v-txt");
var fo = Symbol.for("v-cmt");
function ho(e) {
  return e ? e.__v_isVNode === true : false;
}
var vo = (...e) => Vn2(
  ...e
);
var Fn2 = ({ key: e }) => e ?? null;
var he2 = ({
  ref: e,
  ref_key: n,
  ref_for: t
}) => (typeof e == "number" && (e = "" + e), e != null ? L2(e) || sn2(e) || G(e) ? { i: $e2, r: e, k: n, f: !!t } : e : null);
function go(e, n = null, t = null, r2 = 0, o = null, s = e === Pn ? 0 : 1, p = false, _ = false) {
  const C3 = {
    __v_isVNode: true,
    __v_skip: true,
    type: e,
    props: n,
    key: n && Fn2(n),
    ref: n && he2(n),
    scopeId: io,
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
    shapeFlag: s,
    patchFlag: r2,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: $e2
  };
  return _ ? (an2(C3, t), s & 128 && e.normalize(C3)) : t && (C3.shapeFlag |= L2(t) ? 8 : 16), process.env.NODE_ENV !== "production" && C3.key !== C3.key && ie2("VNode created with invalid key (NaN). VNode type:", C3.type), C3;
}
var _o = process.env.NODE_ENV !== "production" ? vo : Vn2;
function Vn2(e, n = null, t = null, r2 = 0, o = null, s = false) {
  if ((!e || e === uo) && (process.env.NODE_ENV !== "production" && !e && ie2(`Invalid vnode type when creating vnode: ${e}.`), e = fo), ho(e)) {
    const _ = be2(
      e,
      n,
      true
      /* mergeRef: true */
    );
    return t && an2(_, t), _.patchFlag = -2, _;
  }
  if (Mn2(e) && (e = e.__vccOpts), n) {
    n = Co(n);
    let { class: _, style: C3 } = n;
    _ && !L2(_) && (n.class = on2(_)), B2(C3) && (Ge(C3) && !T(C3) && (C3 = Ae2({}, C3)), n.style = tn2(C3));
  }
  const p = L2(e) ? 1 : po(e) ? 128 : co(e) ? 64 : B2(e) ? 4 : G(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && p & 4 && Ge(e) && (e = U(e), ie2(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), go(
    e,
    n,
    t,
    r2,
    o,
    p,
    s,
    true
  );
}
function Co(e) {
  return e ? Ge(e) || Dn2(e) ? Ae2({}, e) : e : null;
}
function be2(e, n, t = false, r2 = false) {
  const { props: o, ref: s, patchFlag: p, children: _, transition: C3 } = e, m2 = n ? bo(o || {}, n) : o, i = {
    __v_isVNode: true,
    __v_skip: true,
    type: e.type,
    props: m2,
    key: m2 && Fn2(m2),
    ref: n && n.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      t && s ? T(s) ? s.concat(he2(n)) : [s, he2(n)] : he2(n)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && p === -1 && T(_) ? _.map(Rn2) : _,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: n && e.type !== Pn ? p === -1 ? 16 : p | 16 : p,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: C3,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && be2(e.ssContent),
    ssFallback: e.ssFallback && be2(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return C3 && r2 && Tn2(
    i,
    C3.clone(i)
  ), i;
}
function Rn2(e) {
  const n = be2(e);
  return T(e.children) && (n.children = e.children.map(Rn2)), n;
}
function $o(e = " ", n = 0) {
  return _o(mo, null, e, n);
}
function an2(e, n) {
  let t = 0;
  const { shapeFlag: r2 } = e;
  if (n == null)
    n = null;
  else if (T(n))
    t = 16;
  else if (typeof n == "object")
    if (r2 & 65) {
      const o = n.default;
      o && (o._c && (o._d = false), an2(e, o()), o._c && (o._d = true));
      return;
    } else
      t = 32, !n._ && !Dn2(n) && (n._ctx = $e2);
  else G(n) ? (n = { default: n, _ctx: $e2 }, t = 32) : (n = String(n), r2 & 64 ? (t = 16, n = [$o(n)]) : t = 8);
  e.children = n, e.shapeFlag |= t;
}
function bo(...e) {
  const n = {};
  for (let t = 0; t < e.length; t++) {
    const r2 = e[t];
    for (const o in r2)
      if (o === "class")
        n.class !== r2.class && (n.class = on2([n.class, r2.class]));
      else if (o === "style")
        n.style = tn2([n.style, r2.style]);
      else if (Ht2(o)) {
        const s = n[o], p = r2[o];
        p && s !== p && !(T(s) && s.includes(p)) && (n[o] = s ? [].concat(s, p) : p);
      } else o !== "" && (n[o] = r2[o]);
  }
  return n;
}
{
  const e = Se(), n = (t, r2) => {
    let o;
    return (o = e[t]) || (o = e[t] = []), o.push(r2), (s) => {
      o.length > 1 ? o.forEach((p) => p(s)) : o[0](s);
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
var wo = /(?:^|[-_])(\w)/g;
var No = (e) => e.replace(wo, (n) => n.toUpperCase()).replace(/[-_]/g, "");
function Hn(e, n = true) {
  return G(e) ? e.displayName || e.name : e.name || n && e.__name;
}
function Ln(e, n, t = false) {
  let r2 = Hn(n);
  if (!r2 && n.__file) {
    const o = n.__file.match(/([^/\\]+)\.\w+$/);
    o && (r2 = o[1]);
  }
  if (!r2 && e && e.parent) {
    const o = (s) => {
      for (const p in s)
        if (s[p] === n)
          return p;
    };
    r2 = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return r2 ? No(r2) : t ? "App" : "Anonymous";
}
function Mn2(e) {
  return G(e) && "__vccOpts" in e;
}
function yo() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, n = { style: "color:#1677ff" }, t = { style: "color:#f5222d" }, r2 = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: true,
    header(a) {
      if (!B2(a))
        return null;
      if (a.__isVue)
        return ["div", e, "VueInstance"];
      if (sn2(a)) {
        const l2 = a.value;
        return [
          "div",
          {},
          ["span", e, i(a)],
          "<",
          _(l2),
          ">"
        ];
      } else {
        if (En2(a))
          return [
            "div",
            {},
            ["span", e, ke(a) ? "ShallowReactive" : "Reactive"],
            "<",
            _(a),
            `>${ze(a) ? " (readonly)" : ""}`
          ];
        if (ze(a))
          return [
            "div",
            {},
            ["span", e, ke(a) ? "ShallowReadonly" : "Readonly"],
            "<",
            _(a),
            ">"
          ];
      }
      return null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...s(a.$)
        ];
    }
  };
  function s(a) {
    const l2 = [];
    a.type.props && a.props && l2.push(p("props", U(a.props))), a.setupState !== Ue && l2.push(p("setup", a.setupState)), a.data !== Ue && l2.push(p("data", U(a.data)));
    const f = C3(a, "computed");
    f && l2.push(p("computed", f));
    const b2 = C3(a, "inject");
    return b2 && l2.push(p("injected", b2)), l2.push([
      "div",
      {},
      [
        "span",
        {
          style: r2.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), l2;
  }
  function p(a, l2) {
    return l2 = Ae2({}, l2), Object.keys(l2).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(l2).map((f) => [
          "div",
          {},
          ["span", r2, f + ": "],
          _(l2[f], false)
        ])
      ]
    ] : ["span", {}];
  }
  function _(a, l2 = true) {
    return typeof a == "number" ? ["span", n, a] : typeof a == "string" ? ["span", t, JSON.stringify(a)] : typeof a == "boolean" ? ["span", r2, a] : B2(a) ? ["object", { object: l2 ? U(a) : a }] : ["span", t, String(a)];
  }
  function C3(a, l2) {
    const f = a.type;
    if (G(f))
      return;
    const b2 = {};
    for (const g2 in a.ctx)
      m2(f, g2, l2) && (b2[g2] = a.ctx[g2]);
    return b2;
  }
  function m2(a, l2, f) {
    const b2 = a[f];
    if (T(b2) && b2.includes(l2) || B2(b2) && l2 in b2 || a.extends && m2(a.extends, l2, f) || a.mixins && a.mixins.some((g2) => m2(g2, l2, f)))
      return true;
  }
  function i(a) {
    return ke(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
function jo() {
  yo();
}
process.env.NODE_ENV !== "production" && jo();
function Eo(e) {
  return Dt2(e) || Pt2(e) || Tt(e) || Ft(e) || Vt(e);
}
var Kn = /* @__PURE__ */ ((e) => (e.Java = "java", e.Kotlin = "kotlin", e.CSharp = "csharp", e.Go = "go", e))(Kn || {});
var S2 = class {
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
var we;
((e) => {
  ((n) => {
    n.Lombok = "Lombok", n.LombokBuilder = "LombokBuilder", n.RecordValueObject = "RecordValueObject", n.CommandHandler = "CommandHandler", n.Jpa = "Jpa", n.Timezone = "Timezone", n.SpringFramework = "SpringFramework";
  })(e.JavaGeneratorAddition || (e.JavaGeneratorAddition = {})), ((n) => {
    n.TABLE = "TABLE", n.SEQUENCE = "SEQUENCE", n.IDENTITY = "IDENTITY", n.UUID = "UUID", n.AUTO = "AUTO";
  })(e.IdGenStrategy || (e.IdGenStrategy = {}));
})(we || (we = {}));
var Ne;
((e) => {
  ((n) => {
    n.ValueClass = "ValueClass", n.CommandHandler = "CommandHandler", n.Timezone = "Timezone";
  })(e.KotlinGeneratorAddition || (e.KotlinGeneratorAddition = {}));
})(Ne || (Ne = {}));
var ye;
((e) => {
  ((n) => {
    n.Timezone = "Timezone", n.RecordStruct = "RecordStruct", n.PrimaryConstructor = "PrimaryConstructor", n.CommandHandlerInterface = "CommandHandlerInterface", n.AggInterface = "AggInterface";
  })(e.CSharpGeneratorAddition || (e.CSharpGeneratorAddition = {}));
})(ye || (ye = {}));
var We;
((e) => {
  ((n) => {
    n.SinglePackageEachDesigner = "SinglePackageEachDesigner";
  })(e.GoGeneratorAddition || (e.GoGeneratorAddition = {}));
})(We || (We = {}));
var So = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CodeFile: S2,
  Language: Kn,
  get csharp() {
    return ye;
  },
  get go() {
    return We;
  },
  isStruct: Eo,
  get java() {
    return we;
  },
  get kotlin() {
    return Ne;
  }
}, Symbol.toStringTag, { value: "Module" }));
var N2;
((e) => {
  function n(m2) {
    return m2.trim().split(m2.includes("_") || m2.includes("-") || m2.includes(" ") ? /_|\s|-/ : /(?=[A-Z])/g).map((i) => i.charAt(0).toUpperCase() + i.toLowerCase().slice(1)).join("");
  }
  e.stringToUpperCamel = n;
  function t(m2) {
    let i = true;
    return m2.trim().split(m2.includes("_") || m2.includes("-") || m2.includes(" ") ? /_|\s|-/ : /(?=[A-Z])/g).map((a) => i ? (i = false, a.toLowerCase()) : a.charAt(0).toUpperCase() + a.toLowerCase().slice(1)).join("");
  }
  e.stringToLowerCamel = t;
  function r2(m2) {
    return m2 = m2.trim(), m2.includes("_") ? m2.toLowerCase() : m2.includes(" ") || m2.includes("-") ? m2.split(/\s|-/).join("_").toLowerCase() : s(m2);
  }
  e.stringToLowerSnake = r2;
  function o(m2) {
    return m2.trim().split(/(?=[A-Z])/g).join("_").toUpperCase();
  }
  e.camelToUpperSnake = o;
  function s(m2) {
    return m2.trim().split(/(?=[A-Z])/g).join("_").toLowerCase();
  }
  e.camelToLowerSnake = s;
  function p(m2) {
    return m2.trim().split("_").map((i) => i.charAt(0).toUpperCase() + i.slice(1)).join("");
  }
  e.snakeToUpperCamel = p;
  function _(m2) {
    return m2.trim().charAt(0).toLowerCase() + m2.slice(1);
  }
  e.lowerFirst = _;
  function C3(m2) {
    return m2.trim().charAt(0).toUpperCase() + m2.slice(1);
  }
  e.upperFirst = C3;
})(N2 || (N2 = {}));
var j3 = we.JavaGeneratorAddition;
var Oo = le2.createHotSwapPlugin(() => {
  const e = "value", n = "command", t = "event";
  function r2(o) {
    return N2.stringToUpperCamel(o._attributes.name);
  }
  return {
    unmount({ api: o }) {
      o.commands.clearCaches(), o.commands._setCommandCodeProvider(() => []), o.commands._setFacadeCommandCodeProvider(() => []), o.commands._setAggCodeProvider(() => []), o.commands._setEventCodeProvider(() => []), o.commands._setReadModelCodeProvider(() => []), o.commands._setCodeFileProvider(() => []), o.commands.setContext({});
    },
    mount({ api: o }) {
      const s = o.states.context, p = o.states.designer.value._getContext().getDesignerOptions().ignoreValueObjects.map((a) => N2.stringToLowerCamel(a));
      function _(a) {
        return !p.includes(N2.stringToLowerCamel(a._attributes.name));
      }
      function C3(a, l2) {
        if (_(l2)) {
          const f = r2(l2);
          return a.add(`${s.value.namespace}.${s.value.moduleName}.${e}.${f}`), f;
        }
        return i(a, l2);
      }
      function m2(a, l2) {
        for (const f of l2) {
          if (!_(f)) {
            i(a, f);
            continue;
          }
          a.add(
            `${s.value.namespace}.${s.value.moduleName}.${e}.${r2(f)}`
          );
        }
      }
      function i(a, l2) {
        const f = s.value.additions, b2 = N2.stringToLowerSnake(l2._attributes.name).replace(/_/, " ");
        return /\b(time|timestamp|date|deadline|expire)\b/.test(b2) ? f.has(j3.Timezone) ? (a.add("java.time.OffsetDateTime"), "OffsetDateTime") : (a.add("java.time.LocalDateTime"), "LocalDateTime") : /\b(enum|gender|sex|count|amount|num|number|flag|times)\b/.test(b2) ? "Integer" : /\b(price)$/.test(b2) ? (a.add("java.math.BigDecimal"), "BigDecimal") : /^(if|is)\b/.test(b2) ? "Boolean" : Ee(l2) && (l2._attributes.type === "Id" || l2._attributes.type === "Version" || /\b(id|identifier|ver|version)$/.test(b2)) ? "Long" : "String";
      }
      o.commands._setInfoCodeProvider(
        (a) => {
          const l2 = /* @__PURE__ */ new Set();
          l2.add(s.value.nonNullAnnotation);
          const f = s.value.nonNullAnnotation.split(".").pop(), b2 = r2(a), g2 = s.value.additions, u = [];
          return g2.has(j3.RecordValueObject) ? (g2.has(j3.Jpa) && (l2.add(
            s.value.jdkVersion === "8" ? "javax.persistence.Embeddable" : "jakarta.persistence.Embeddable"
          ), u.push("@Embeddable")), u.push(`public record ${b2}(@${f} ${i(l2, a)} value) {`), u.push(`    public ${b2} {`), u.push("        // HACK check value"), u.push("    }"), u.push("}")) : g2.has(j3.Lombok) ? (u.push("@lombok.Getter"), g2.has(j3.Jpa) && (l2.add(
            s.value.jdkVersion === "8" ? "javax.persistence.Embeddable" : "jakarta.persistence.Embeddable"
          ), u.push("@Embeddable")), u.push(`public class ${b2} {`), u.push(`    private final ${i(l2, a)} value;`), u.push(""), u.push(`    public ${b2} (@${f} ${i(l2, a)} value) {`), u.push("        // HACK check value"), u.push("        this.value = value;"), u.push("    }"), u.push("}")) : (g2.has(j3.Jpa) && (l2.add(
            s.value.jdkVersion === "8" ? "javax.persistence.Embeddable" : "jakarta.persistence.Embeddable"
          ), u.push("@Embeddable")), u.push(`public class ${r2(a)} {`), u.push(`    private final ${i(l2, a)} value;`), u.push(""), u.push(`    public ${b2} (@${f} ${i(l2, a)} value) {`), u.push("        // HACK check value"), u.push("        this.value = value;"), u.push("    }"), u.push(""), u.push(`    public ${i(l2, a)} getValue() {`), u.push("        return this.value;"), u.push("    }"), u.push("}")), [
            {
              type: "Info",
              imports: l2,
              content: u.join(`
`)
            }
          ];
        }
      ), o.commands._setCommandCodeProvider(
        (a) => {
          const l2 = [], f = s.value.additions, b2 = s.value.nonNullAnnotation.split(".").pop();
          {
            const g2 = /* @__PURE__ */ new Set();
            g2.add(s.value.nonNullAnnotation);
            const u = r2(a), $2 = [], v = Object.values(a.inner);
            if (m2(g2, v), f.has(j3.RecordValueObject)) {
              f.has(j3.LombokBuilder) && $2.push("@lombok.Builder(toBuilder = true)"), $2.push(`public record ${u}(`);
              const d = [];
              for (const w2 of v) {
                const c = r2(w2);
                d.push(
                  `        @${b2}
        ${C3(
                    g2,
                    w2
                  )} ${N2.lowerFirst(c)}`
                );
              }
              $2.push(d.join(`,
`)), $2.push(") {"), $2.push(`    public ${u} {`), $2.push("        // HACK check value"), $2.push("    }"), $2.push("}");
            } else if (f.has(j3.Lombok)) {
              $2.push("@lombok.AllArgsConstructor"), $2.push("@lombok.Getter"), f.has(j3.LombokBuilder) && $2.push("@lombok.Builder(toBuilder = true)"), $2.push(`public class ${u} {`);
              for (const d of v) {
                const w2 = r2(d);
                $2.push(`    @${b2}`), $2.push(
                  `    private final ${C3(g2, d)} ${N2.lowerFirst(w2)};`
                );
              }
              $2.push("}");
            } else {
              $2.push(`public class ${u} {`);
              for (const c of v) {
                const h2 = r2(c);
                $2.push(`    @${b2}`), $2.push(
                  `    private final ${C3(g2, c)} ${N2.lowerFirst(h2)};`
                );
              }
              $2.push("");
              const d = [], w2 = [];
              for (const c of v) {
                const h2 = r2(c);
                d.push(
                  `@${b2} ${i(g2, c)} ${N2.lowerFirst(h2)}`
                ), w2.push(`this.${N2.lowerFirst(h2)} = ${N2.lowerFirst(h2)};`);
              }
              $2.push(`    public ${u}(${d.join(", ")}) {`), $2.push(`        ${w2.join(`
        `)}`), $2.push("    }");
              for (const c of v) {
                const h2 = r2(c);
                $2.push(""), $2.push(`    public ${C3(g2, c)} get${h2} () {`), $2.push(`        return this.${N2.lowerFirst(h2)};`), $2.push("    }");
              }
              $2.push("}");
            }
            l2.push({
              type: "Command",
              imports: g2,
              content: $2.join(`
`)
            });
          }
          if (!f.has(j3.CommandHandler))
            return l2;
          {
            const g2 = /* @__PURE__ */ new Set();
            g2.add(s.value.nonNullAnnotation);
            const u = r2(a), $2 = [];
            f.has(j3.SpringFramework) && (g2.add("org.springframework.stereotype.Component"), $2.push("@Component")), f.has(j3.Lombok) && $2.push("@lombok.RequiredArgsConstructor"), $2.push(`public class ${u}Handler {`);
            const v = [...o.states.designer.value._getContext().getAssociationMap()[a._attributes.__id]].filter(
              (d) => d._attributes.rule === "Agg"
            );
            for (const d of v)
              g2.add(`${s.value.namespace}.${s.value.moduleName}.${r2(d)}`), $2.push(`    public ${r2(d)} handle(@${b2} ${u} command) {`), $2.push("        // HACK Implement"), $2.push("    }");
            $2.push("}"), l2.push({
              type: "CommandHandler",
              imports: g2,
              content: $2.join(`
`)
            });
          }
          return l2;
        }
      ), o.commands._setFacadeCommandCodeProvider((a) => {
        const l2 = [], f = s.value.additions, b2 = s.value.nonNullAnnotation.split(".").pop();
        {
          const g2 = /* @__PURE__ */ new Set();
          g2.add(s.value.nonNullAnnotation);
          const u = r2(a), $2 = [], v = Object.values(a.inner);
          if (m2(g2, v), f.has(j3.RecordValueObject)) {
            f.has(j3.LombokBuilder) && $2.push("@lombok.Builder(toBuilder = true)"), $2.push(`public record ${u}(`);
            const d = [];
            for (const w2 of v) {
              const c = r2(w2);
              d.push(
                `        @${b2}
        ${C3(
                  g2,
                  w2
                )} ${N2.lowerFirst(c)}`
              );
            }
            $2.push(d.join(`,
`)), $2.push(") {"), $2.push(`    public ${u} {`), $2.push("        // HACK check value"), $2.push("    }"), $2.push("}");
          } else if (f.has(j3.Lombok)) {
            $2.push("@lombok.AllArgsConstructor"), $2.push("@lombok.Getter"), f.has(j3.LombokBuilder) && $2.push("@lombok.Builder(toBuilder = true)"), $2.push(`public class ${u} {`);
            for (const d of v) {
              const w2 = r2(d);
              $2.push(`    @${b2}`), $2.push(
                `    private final ${C3(g2, d)} ${N2.lowerFirst(w2)};`
              );
            }
            $2.push("}");
          } else {
            $2.push(`public class ${u} {`);
            for (const c of v) {
              const h2 = r2(c);
              $2.push(`    @${b2}`), $2.push(
                `    private final ${C3(g2, c)} ${N2.lowerFirst(h2)};`
              );
            }
            $2.push("");
            const d = [], w2 = [];
            for (const c of v) {
              const h2 = r2(c);
              d.push(
                `@${b2} ${i(g2, c)} ${N2.lowerFirst(h2)}`
              ), w2.push(`this.${N2.lowerFirst(h2)} = ${N2.lowerFirst(h2)};`);
            }
            $2.push(`    public ${u}(${d.join(", ")}) {`), $2.push(`        ${w2.join(`
        `)}`), $2.push("    }");
            for (const c of v) {
              const h2 = r2(c);
              $2.push(""), $2.push(`    public ${C3(g2, c)} get${h2} () {`), $2.push(`        return this.${N2.lowerFirst(h2)};`), $2.push("    }");
            }
            $2.push("}");
          }
          l2.push({
            type: "FacadeCommand",
            imports: g2,
            content: $2.join(`
`)
          });
        }
        if (!f.has(j3.CommandHandler))
          return l2;
        {
          const g2 = /* @__PURE__ */ new Set();
          g2.add(s.value.nonNullAnnotation);
          const u = r2(a), $2 = [];
          f.has(j3.SpringFramework) && (g2.add("org.springframework.stereotype.Component"), $2.push("@Component")), f.has(j3.Lombok) && $2.push("@lombok.RequiredArgsConstructor"), $2.push(`public class ${u}Handler {`);
          const v = [...o.states.designer.value._getContext().getAssociationMap()[a._attributes.__id]].filter(
            (d) => d._attributes.rule === "Agg"
          );
          for (const d of v)
            g2.add(`${s.value.namespace}.${s.value.moduleName}.${r2(d)}`), $2.push(`    public ${r2(d)} handle(@${b2} ${u} command) {`), $2.push("        // HACK Implement"), $2.push("    }");
          $2.push("}"), l2.push({
            type: "FacadeCommandHandler",
            imports: g2,
            content: $2.join(`
`)
          });
        }
        return l2;
      }), o.commands._setAggCodeProvider(
        (a) => {
          const l2 = s.value.additions, f = o.states.designer.value, b2 = s.value.nonNullAnnotation.split(".").pop(), g2 = r2(a), u = [], $2 = Object.values(a.inner);
          {
            const v = /* @__PURE__ */ new Set();
            v.add(s.value.nonNullAnnotation);
            const d = [];
            d.push(`public interface ${g2} {`);
            for (const c of $2) {
              const h2 = r2(c);
              d.push(`    public ${C3(v, c)} get${h2}();`), d.push("");
            }
            const w2 = [...f._getContext().getAssociationMap()[a._attributes.__id]].filter((c) => c._attributes.rule === "Command" || c._attributes.rule === "FacadeCommand");
            for (const c of w2) {
              const h2 = r2(c);
              v.add(`${s.value.namespace}.${s.value.moduleName}.${n}.${h2}`), d.push(`    public void handle${h2}(@${b2} ${h2} command);`), d.push("");
            }
            d.push("}"), u.push({
              type: "Agg",
              imports: v,
              content: d.join(`
`)
            });
          }
          {
            const v = /* @__PURE__ */ new Set();
            v.add(s.value.nonNullAnnotation);
            const d = [];
            if (m2(v, $2), l2.has(j3.Lombok)) {
              d.push(
                l2.has(j3.Jpa) ? "@lombok.NoArgsConstructor" : "@lombok.AllArgsConstructor"
              ), d.push("@lombok.Getter"), l2.has(j3.Jpa) && (v.add(
                s.value.jdkVersion === "8" ? "javax.persistence.Entity" : "jakarta.persistence.Entity"
              ), d.push("@Entity"), v.add(s.value.jdkVersion === "8" ? "javax.persistence.Table" : "jakarta.persistence.Table"), d.push(`@Table(name = "${N2.camelToLowerSnake(g2)}")`)), d.push(`public class ${g2}Impl implements ${g2} {`);
              for (const c of $2) {
                const h2 = r2(c);
                d.push(`    @${b2}`), l2.has(j3.Jpa) && (c._attributes.type === "Id" ? (v.add(
                  s.value.jdkVersion === "8" ? "javax.persistence.EmbeddedId" : "jakarta.persistence.EmbeddedId"
                ), d.push("    @EmbeddedId"), v.add(
                  s.value.jdkVersion === "8" ? "javax.persistence.AttributeOverride" : "jakarta.persistence.AttributeOverride"
                ), v.add(
                  s.value.jdkVersion === "8" ? "javax.persistence.Column" : "jakarta.persistence.Column"
                ), d.push(
                  `    @AttributeOverride(name = "value", column = @Column(name = "${N2.camelToLowerSnake(
                    h2
                  )}", updatable = false))`
                )) : _(c) ? (v.add(
                  s.value.jdkVersion === "8" ? "javax.persistence.Embedded" : "jakarta.persistence.Embedded"
                ), d.push("    @Embedded"), v.add(
                  s.value.jdkVersion === "8" ? "javax.persistence.AttributeOverride" : "jakarta.persistence.AttributeOverride"
                ), v.add(
                  s.value.jdkVersion === "8" ? "javax.persistence.Column" : "jakarta.persistence.Column"
                ), d.push(
                  `    @AttributeOverride(name = "value", column = @Column(name = "${N2.camelToLowerSnake(
                    h2
                  )}"))`
                )) : (v.add(
                  s.value.jdkVersion === "8" ? "javax.persistence.Column" : "jakarta.persistence.Column"
                ), d.push(`    @Column(name = "${N2.camelToLowerSnake(h2)}")`))), d.push(`    private ${C3(v, c)} ${N2.lowerFirst(h2)};`);
              }
              const w2 = [...f._getContext().getAssociationMap()[a._attributes.__id]].filter((c) => c._attributes.rule === "Command" || c._attributes.rule === "FacadeCommand");
              for (const c of w2) {
                const h2 = r2(c);
                v.add(`${s.value.namespace}.${s.value.moduleName}.${n}.${h2}`), d.push(""), d.push(
                  `    public void handle${h2}(@${b2} ${h2} ${N2.lowerFirst(
                    h2
                  )}) {`
                ), d.push("        // HACK need implement"), d.push("    }");
              }
              d.push("}");
            } else {
              l2.has(j3.Jpa) && (v.add(
                s.value.jdkVersion === "8" ? "javax.persistence.Entity" : "jakarta.persistence.Entity"
              ), d.push("@Entity"), v.add(s.value.jdkVersion === "8" ? "javax.persistence.Table" : "jakarta.persistence.Table"), d.push(`@Table(name = "${N2.camelToLowerSnake(g2)}")`)), d.push(`public class ${g2}Impl implements ${g2} {`);
              for (const y3 of $2) {
                const O2 = r2(y3);
                d.push(`    @${b2}`), l2.has(j3.Jpa) && (y3._attributes.type === "Id" ? (v.add(
                  s.value.jdkVersion === "8" ? "javax.persistence.EmbeddedId" : "jakarta.persistence.EmbeddedId"
                ), d.push("    @EmbeddedId"), v.add(
                  s.value.jdkVersion === "8" ? "javax.persistence.AttributeOverride" : "jakarta.persistence.AttributeOverride"
                ), v.add(
                  s.value.jdkVersion === "8" ? "javax.persistence.Column" : "jakarta.persistence.Column"
                ), d.push(
                  `    @AttributeOverride(name = "value", column = @Column(name = "${N2.camelToLowerSnake(
                    O2
                  )}", updatable = false))`
                )) : _(y3) ? (v.add(
                  s.value.jdkVersion === "8" ? "javax.persistence.Embedded" : "jakarta.persistence.Embedded"
                ), d.push("    @Embedded"), v.add(
                  s.value.jdkVersion === "8" ? "javax.persistence.AttributeOverride" : "jakarta.persistence.AttributeOverride"
                ), v.add(
                  s.value.jdkVersion === "8" ? "javax.persistence.Column" : "jakarta.persistence.Column"
                ), d.push(
                  `    @AttributeOverride(name = "value", column = @Column(name = "${N2.camelToLowerSnake(
                    O2
                  )}"))`
                )) : (v.add(
                  s.value.jdkVersion === "8" ? "javax.persistence.Column" : "jakarta.persistence.Column"
                ), d.push(`    @Column(name = "${N2.camelToLowerSnake(O2)}")`))), d.push(`    private ${C3(v, y3)} ${N2.lowerFirst(O2)};`);
              }
              d.push("");
              const w2 = [], c = [];
              for (const y3 of $2) {
                if (l2.has(j3.Jpa))
                  break;
                const O2 = r2(y3);
                w2.push(
                  `@${b2} ${C3(v, y3)} ${N2.lowerFirst(O2)}`
                ), c.push(`this.${N2.lowerFirst(O2)} = ${N2.lowerFirst(O2)};`);
              }
              d.push(`    public ${g2}Impl(${w2.join(", ")}) {`), d.push(`        ${c.join(`
        `)}`), d.push("    }");
              for (const y3 of $2) {
                const O2 = r2(y3);
                d.push(""), d.push(`    @${b2}`), d.push(`    public ${C3(v, y3)} get${O2}() {`), d.push(`        return this.${N2.lowerFirst(O2)};`), d.push("    }");
              }
              const h2 = [...f._getContext().getAssociationMap()[a._attributes.__id]].filter(
                (y3) => y3._attributes.rule === "Command" || y3._attributes.rule === "FacadeCommand"
              );
              for (const y3 of h2) {
                const O2 = r2(y3);
                v.add(`${s.value.namespace}.${s.value.moduleName}.${n}.${O2}`), d.push(""), d.push(
                  `    public void handle${O2}(@${b2} ${O2} ${N2.lowerFirst(
                    O2
                  )}) {`
                ), d.push("        // HACK need implement"), d.push("    }");
              }
              d.push("}");
            }
            u.push({
              type: "AggImpl",
              imports: v,
              content: d.join(`
`)
            });
          }
          return u;
        }
      ), o.commands._setEventCodeProvider(
        (a) => {
          const l2 = /* @__PURE__ */ new Set();
          l2.add(s.value.nonNullAnnotation);
          const f = s.value.nonNullAnnotation.split(".").pop(), b2 = s.value.additions, g2 = r2(a), u = [], $2 = Object.values(a.inner);
          if (m2(l2, $2), b2.has(j3.RecordValueObject)) {
            b2.has(j3.LombokBuilder) && u.push("@lombok.Builder(toBuilder = true)"), u.push(`public record ${g2}(`);
            const v = [];
            for (const d of $2) {
              const w2 = r2(d);
              v.push(
                `        @${f}
        ${C3(
                  l2,
                  d
                )} ${N2.lowerFirst(w2)}`
              );
            }
            u.push(v.join(`,
`)), u.push(") {"), u.push(`    public ${g2} {`), u.push("        // HACK check value"), u.push("    }"), u.push("}");
          } else if (b2.has(j3.Lombok)) {
            u.push("@lombok.AllArgsConstructor"), u.push("@lombok.Getter"), b2.has(j3.LombokBuilder) && u.push("@lombok.Builder(toBuilder = true)"), u.push(`public class ${g2} {`);
            for (const v of $2) {
              const d = r2(v);
              u.push(`    @${f}`), u.push(
                `    private final ${C3(l2, v)} ${N2.lowerFirst(d)};`
              );
            }
            u.push("}");
          } else {
            u.push(`public class ${g2} {`);
            for (const w2 of $2) {
              const c = r2(w2);
              u.push(`    @${f}`), u.push(`    private final ${c} ${N2.lowerFirst(c)};`);
            }
            u.push("");
            const v = [], d = [];
            for (const w2 of $2) {
              const c = r2(w2);
              v.push(
                `@${f} ${i(l2, w2)} ${N2.lowerFirst(c)}`
              ), d.push(`this.${N2.lowerFirst(c)} = ${N2.lowerFirst(c)};`);
            }
            u.push(`    public ${g2}(${v.join(", ")}) {`), u.push(`        ${d.join(`
        `)}`), u.push("    }");
            for (const w2 of $2) {
              const c = r2(w2);
              u.push(""), u.push(`    public ${c} get${c} () {`), u.push(`        return this.${N2.lowerFirst(c)};`), u.push("    }");
            }
            u.push("}");
          }
          return [
            {
              type: "Event",
              imports: l2,
              content: u.join(`
`)
            }
          ];
        }
      ), o.commands._setReadModelCodeProvider(() => []), o.commands._setCodeFileProvider(() => {
        const a = [], l2 = {};
        function f(v) {
          for (const d of Object.values(v)) {
            if (!_(d))
              continue;
            const w2 = [...s.value.namespace.split(/\./), s.value.moduleName, e], c = r2(d) + ".java";
            if (l2[`${w2.join("/")}/${c}`] === true)
              continue;
            const h2 = o.commands._genInfoCode(d);
            if (h2.length === 0)
              continue;
            const y3 = new S2(w2, c);
            y3.appendContentln(`package ${s.value.namespace}.${s.value.moduleName}.${e};`), y3.appendContentln("");
            for (const O2 of h2[0].imports)
              y3.appendContentln(`import ${O2};`);
            y3.appendContentln(""), y3.appendContentln(h2[0].content), a.push(y3), l2[`${w2.join("/")}/${c}`] = true;
          }
        }
        const b2 = o.states.designer.value._getContext().getCommands();
        for (const v of b2) {
          f(v.inner);
          const d = o.commands._genCommandCode(v), w2 = [...s.value.namespace.split(/\./), s.value.moduleName, n];
          d.forEach((c) => {
            if (c.type === "Command") {
              const h2 = new S2(w2, r2(v) + ".java");
              h2.appendContentln(`package ${s.value.namespace}.${s.value.moduleName}.${n};`), h2.appendContentln(""), h2.addImports(c.imports);
              for (const y3 of c.imports)
                h2.appendContentln(`import ${y3};`);
              h2.appendContentln(""), h2.appendContentln(c.content), a.push(h2);
            } else if (c.type === "CommandHandler") {
              const h2 = new S2(w2, r2(v) + "Handler.java");
              h2.appendContentln(`package ${s.value.namespace}.${s.value.moduleName}.${n};`), h2.appendContentln(""), h2.addImports(c.imports);
              for (const y3 of c.imports)
                h2.appendContentln(`import ${y3};`);
              h2.appendContentln(""), h2.appendContentln(c.content), a.push(h2);
            } else
              isNever(c.type);
          });
        }
        const g2 = o.states.designer.value._getContext().getFacadeCommands();
        for (const v of g2) {
          f(v.inner);
          const d = o.commands._genFacadeCommandCode(v), w2 = [...s.value.namespace.split(/\./), s.value.moduleName, n];
          d.forEach((c) => {
            if (c.type === "FacadeCommand") {
              const h2 = new S2(w2, r2(v) + ".java");
              h2.appendContentln(`package ${s.value.namespace}.${s.value.moduleName}.${n};`), h2.appendContentln(""), h2.addImports(c.imports);
              for (const y3 of c.imports)
                h2.appendContentln(`import ${y3};`);
              h2.appendContentln(""), h2.appendContentln(c.content), a.push(h2);
            } else if (c.type === "FacadeCommandHandler") {
              const h2 = new S2(w2, r2(v) + "Handler.java");
              h2.appendContentln(`package ${s.value.namespace}.${s.value.moduleName}.${n};`), h2.appendContentln(""), h2.addImports(c.imports);
              for (const y3 of c.imports)
                h2.appendContentln(`import ${y3};`);
              h2.appendContentln(""), h2.appendContentln(c.content), a.push(h2);
            } else
              isNever(c.type);
          });
        }
        const u = o.states.designer.value._getContext().getAggs();
        for (const v of u) {
          f(v.inner);
          const d = o.commands._genAggCode(v), w2 = [...s.value.namespace.split(/\./), s.value.moduleName];
          d.forEach((c) => {
            if (c.type === "Agg") {
              const h2 = new S2(w2, r2(v) + ".java");
              h2.appendContentln(`package ${s.value.namespace}.${s.value.moduleName};`), h2.appendContentln(""), h2.addImports(c.imports);
              for (const y3 of c.imports)
                h2.appendContentln(`import ${y3};`);
              h2.appendContentln(""), h2.appendContentln(c.content), a.push(h2);
            } else if (c.type === "AggImpl") {
              const h2 = new S2(w2, r2(v) + "Impl.java");
              h2.appendContentln(`package ${s.value.namespace}.${s.value.moduleName};`), h2.appendContentln(""), h2.addImports(c.imports);
              for (const y3 of c.imports)
                h2.appendContentln(`import ${y3};`);
              h2.appendContentln(""), h2.appendContentln(c.content), a.push(h2);
            } else
              isNever(c.type);
          });
        }
        const $2 = o.states.designer.value._getContext().getEvents();
        for (const v of $2) {
          f(v.inner);
          const d = o.commands._genEventCode(v), w2 = [...s.value.namespace.split(/\./), s.value.moduleName, t];
          d.forEach((c) => {
            const h2 = new S2(w2, r2(v) + ".java");
            h2.appendContentln(`package ${s.value.namespace}.${s.value.moduleName}.${t};`), h2.appendContentln(""), h2.addImports(c.imports);
            for (const y3 of c.imports)
              h2.appendContentln(`import ${y3};`);
            h2.appendContentln(""), h2.appendContentln(c.content), a.push(h2);
          });
        }
        return a;
      });
    }
  };
});
var Pe = Ne.KotlinGeneratorAddition;
var Io = le2.createHotSwapPlugin(() => ({
  unmount({ api: e }) {
    e.commands.clearCaches(), e.commands._setCommandCodeProvider(() => []), e.commands._setFacadeCommandCodeProvider(() => []), e.commands._setAggCodeProvider(() => []), e.commands._setEventCodeProvider(() => []), e.commands._setReadModelCodeProvider(() => []), e.commands._setCodeFileProvider(() => []), e.commands.setContext({});
  },
  mount({ api: e }) {
    const n = "value", t = e.states.context, r2 = e.states.designer.value._getContext().getDesignerOptions().ignoreValueObjects.map((m2) => N2.stringToLowerCamel(m2));
    function o(m2) {
      return !r2.includes(N2.stringToLowerCamel(m2._attributes.name));
    }
    function s(m2, i) {
      return o(i) ? N2.stringToUpperCamel(i._attributes.name) : C3(m2, i);
    }
    function p(m2) {
      return N2.stringToUpperCamel(m2._attributes.name);
    }
    function _(m2, i) {
      for (const a of i) {
        if (!o(a)) {
          C3(m2, a);
          continue;
        }
        m2.add(
          `${t.value.namespace}.${t.value.moduleName}.${n}.${p(a)}`
        );
      }
    }
    function C3(m2, i) {
      const a = t.value.additions, l2 = N2.stringToLowerSnake(i._attributes.name).replace(/_/, " ");
      return /\b(time|timestamp|date|deadline|expire)\b/.test(l2) ? a.has(Pe.Timezone) ? (m2.add("java.time.OffsetDateTime"), "OffsetDateTime") : (m2.add("java.time.LocalDateTime"), "LocalDateTime") : /\b(enum|gender|sex|count|amount|num|number|flag|times)\b/.test(l2) ? "Integer" : /\b(price)$/.test(l2) ? (m2.add("java.math.BigDecimal"), "BigDecimal") : /^(if|is)\b/.test(l2) ? "Boolean" : Ee(i) && (i._attributes.type === "Id" || i._attributes.type === "Version") || /\b(id|identifier|ver|version)$/.test(l2) ? "Long" : "String";
    }
    e.commands._setInfoCodeProvider(
      (m2) => {
        const i = /* @__PURE__ */ new Set(), a = p(m2), l2 = t.value.additions, f = [];
        return l2.has(Pe.ValueClass) ? (i.add("kotlin.jvm.JvmInline"), f.push("@JvmInline"), f.push(`value class ${a}(val value: ${C3(i, m2)})`)) : f.push(`data class ${a}(val value: ${C3(i, m2)})`), [
          {
            type: "Info",
            imports: i,
            content: f.join(`
`)
          }
        ];
      }
    ), e.commands._setCommandCodeProvider(
      (m2) => {
        const i = [], a = t.value.additions;
        {
          const l2 = /* @__PURE__ */ new Set(), f = p(m2), b2 = [], g2 = Object.values(m2.inner);
          _(l2, g2);
          const u = [];
          for (const $2 of g2) {
            const v = p($2);
            u.push(`val ${N2.lowerFirst(v)}: ${s(l2, $2)}`);
          }
          b2.push(`data class ${f}(${u.join(", ")})`), i.push({
            type: "Command",
            imports: l2,
            content: b2.join(`
`)
          });
        }
        if (!a.has(Pe.CommandHandler))
          return i;
        {
          const l2 = /* @__PURE__ */ new Set(), f = p(m2), b2 = [];
          b2.push(`class ${f}Handler {`);
          const g2 = [...e.states.designer.value._getContext().getAssociationMap()[m2._attributes.__id]].filter(
            (u) => u._attributes.rule === "Agg"
          );
          for (const u of g2)
            l2.add(`${t.value.namespace}.${t.value.moduleName}.${p(u)}`), b2.push(`    fun handle(command: ${f}): ${p(u)} {`), b2.push("        // HACK Implement"), b2.push("    }");
          b2.push("}"), i.push({
            type: "CommandHandler",
            imports: l2,
            content: b2.join(`
`)
          });
        }
        return i;
      }
    ), e.commands._setFacadeCommandCodeProvider(
      (m2) => {
        const i = /* @__PURE__ */ new Set(), a = p(m2), l2 = [], f = Object.values(m2.inner);
        _(i, f);
        const b2 = [];
        for (const g2 of f) {
          const u = p(g2);
          b2.push(`val ${N2.lowerFirst(u)}: ${s(i, g2)}`);
        }
        return l2.push(`data class ${a}(${b2.join(", ")})`), [
          {
            type: "FacadeCommand",
            imports: i,
            content: l2.join(`
`)
          }
        ];
      }
    ), e.commands._setAggCodeProvider((m2) => {
      const i = /* @__PURE__ */ new Set(), a = e.states.designer.value, l2 = p(m2), f = [], b2 = Object.values(m2.inner);
      _(i, b2);
      const g2 = [], u = [...a._getContext().getAssociationMap()[m2._attributes.__id]].filter((v) => v._attributes.rule === "Command" || v._attributes.rule === "FacadeCommand");
      for (const v of u) {
        const d = p(v);
        g2.push(`fun handle(command: ${d})`);
      }
      f.push(`interface ${l2} {`), f.push(`    ${g2.join(`
    `)}`), f.push("}"), f.push(""), f.push(`class ${l2}Impl(`);
      const $2 = [];
      for (const v of b2) {
        const d = p(v);
        $2.push(`val ${N2.lowerFirst(d)}: ${s(i, v)}`);
      }
      f.push(`    ${$2.join(`,
    `)}`), f.push(`): ${l2} {`);
      for (const v of u) {
        const d = p(v);
        f.push(`    override fun handle(command: ${d}) {`), f.push("        // HACK Implement"), f.push("    }");
      }
      return f.push("}"), [
        {
          type: "Agg",
          imports: i,
          content: f.join(`
`)
        }
      ];
    }), e.commands._setEventCodeProvider(
      (m2) => {
        const i = /* @__PURE__ */ new Set(), a = p(m2), l2 = [], f = Object.values(m2.inner);
        _(i, f);
        const b2 = [];
        for (const g2 of f) {
          const u = p(g2);
          b2.push(`val ${N2.lowerFirst(u)}: ${s(i, g2)}`);
        }
        return l2.push(`data class ${a}(${b2.join(", ")})`), [
          {
            type: "Event",
            imports: i,
            content: l2.join(`
`)
          }
        ];
      }
    ), e.commands._setReadModelCodeProvider(() => []), e.commands._setCodeFileProvider(() => {
      const m2 = [], i = {};
      function a(u) {
        for (const $2 of Object.values(u)) {
          if (!o($2))
            continue;
          const v = [...t.value.namespace.split(/\./), t.value.moduleName, n], d = p($2) + ".kt";
          if (i[`${v.join("/")}/${d}`] === true)
            continue;
          const w2 = e.commands._genInfoCode($2);
          if (w2.length === 0)
            continue;
          const c = new S2(v, d);
          c.appendContentln(`package ${t.value.namespace}.${t.value.moduleName}.${n}`), c.appendContentln("");
          for (const h2 of w2[0].imports)
            c.appendContentln(`import ${h2}`);
          c.appendContentln(""), c.appendContentln(w2[0].content), m2.push(c), i[`${v.join("/")}/${d}`] = true;
        }
      }
      const l2 = e.states.designer.value._getContext().getCommands();
      for (const u of l2) {
        a(u.inner);
        const $2 = e.commands._genCommandCode(u), v = [...t.value.namespace.split(/\./), t.value.moduleName], d = new S2(v, p(u) + ".kt"), w2 = [];
        d.appendContentln(`package ${t.value.namespace}.${t.value.moduleName}`), d.appendContentln(""), $2.forEach((c) => {
          c.type === "Command" || c.type === "CommandHandler" ? (d.addImports(c.imports), w2.push(c.content)) : isNever(c.type);
        });
        for (const c of d.getImports())
          d.appendContentln(`import ${c}`);
        d.appendContentln("");
        for (const c of w2)
          d.appendContentln(c);
        m2.push(d);
      }
      const f = e.states.designer.value._getContext().getFacadeCommands();
      for (const u of f) {
        a(u.inner);
        const $2 = e.commands._genFacadeCommandCode(u), v = [...t.value.namespace.split(/\./), t.value.moduleName], d = new S2(v, p(u) + ".kt"), w2 = [];
        d.appendContentln(`package ${t.value.namespace}.${t.value.moduleName}`), d.appendContentln(""), $2.forEach((c) => {
          c.type === "FacadeCommand" || c.type === "FacadeCommandHandler" ? (d.addImports(c.imports), w2.push(c.content)) : isNever(c.type);
        });
        for (const c of d.getImports())
          d.appendContentln(`import ${c}`);
        d.appendContentln("");
        for (const c of w2)
          d.appendContentln(c);
        m2.push(d);
      }
      const b2 = e.states.designer.value._getContext().getAggs();
      for (const u of b2) {
        a(u.inner);
        const $2 = e.commands._genAggCode(u), v = [...t.value.namespace.split(/\./), t.value.moduleName], d = new S2(v, p(u) + ".kt"), w2 = [];
        d.appendContentln(`package ${t.value.namespace}.${t.value.moduleName}`), d.appendContentln(""), $2.forEach((c) => {
          c.type === "Agg" || c.type === "AggImpl" ? (d.addImports(c.imports), w2.push(c.content)) : isNever(c.type);
        });
        for (const c of d.getImports())
          d.appendContentln(`import ${c}`);
        d.appendContentln("");
        for (const c of w2)
          d.appendContentln(c);
        m2.push(d);
      }
      const g2 = e.states.designer.value._getContext().getEvents();
      for (const u of g2) {
        a(u.inner);
        const $2 = e.commands._genEventCode(u), v = [...t.value.namespace.split(/\./), t.value.moduleName];
        $2.forEach((d) => {
          if (d.type === "Event") {
            const w2 = new S2(v, p(u) + ".kt");
            w2.appendContentln(`package ${t.value.namespace}.${t.value.moduleName}`), w2.appendContentln(""), w2.addImports(d.imports);
            for (const c of d.imports)
              w2.appendContentln(`import ${c}`);
            w2.appendContentln(""), w2.appendContentln(d.content), m2.push(w2);
          } else
            isNever(d.type);
        });
      }
      return m2;
    });
  }
}));
var ko = le2.createHotSwapPlugin(() => ({
  unmount({ api: e }) {
    e.commands.clearCaches(), e.commands._setCommandCodeProvider(() => []), e.commands._setFacadeCommandCodeProvider(() => []), e.commands._setAggCodeProvider(() => []), e.commands._setEventCodeProvider(() => []), e.commands._setReadModelCodeProvider(() => []), e.commands._setCodeFileProvider(() => []), e.commands.setContext({});
  },
  mount({ api: e }) {
    const n = e.states.context, t = e.states.designer.value._getContext().getDesignerOptions().ignoreValueObjects.map((C3) => N2.stringToLowerCamel(C3));
    function r2(C3) {
      return !t.includes(N2.stringToLowerCamel(C3._attributes.name));
    }
    function o(C3, m2) {
      return r2(m2) ? N2.stringToUpperCamel(m2._attributes.name) : _(C3, m2);
    }
    function s(C3) {
      return N2.stringToUpperCamel(C3._attributes.name);
    }
    function p(C3) {
      return N2.stringToLowerCamel(C3._attributes.name);
    }
    function _(C3, m2) {
      const i = N2.stringToLowerSnake(m2._attributes.name).replace(/_/, " ");
      return /\b(time|timestamp|date|deadline|expire)\b/.test(i) ? (C3.add("time"), "time.Time") : /\b(enum|gender|sex|count|amount|num|number|flag|times)\b/.test(i) ? "int" : /\b(price)$/.test(i) ? "string" : /^(if|is)\b/.test(i) ? "bool" : Ee(m2) && (m2._attributes.type === "Id" || m2._attributes.type === "Version" || /\b(id|identifier|ver|version)$/.test(i)) ? "int64" : "string";
    }
    e.commands._setInfoCodeProvider(
      (C3) => {
        const m2 = /* @__PURE__ */ new Set(), i = [];
        return i.push(`type ${s(C3)} struct {`), i.push(`    value ${_(m2, C3)}`), i.push("}"), i.push(""), i.push(
          `func New${s(C3)}(value ${_(
            m2,
            C3
          )}) ${s(C3)} {`
        ), i.push("    // HACK check value"), i.push(`    return ${s(C3)}{value}`), i.push("}"), i.push(
          `func (${p(C3)} ${s(C3)}) GetValue() ${_(
            m2,
            C3
          )} {`
        ), i.push(`    return ${p(C3)}.value`), i.push("}"), [{ type: "Info", imports: m2, content: i.join(`
`) }];
      }
    ), e.commands._setCommandCodeProvider(
      (C3) => {
        const m2 = s(C3), i = p(C3), a = /* @__PURE__ */ new Set(), l2 = [];
        l2.push(`type ${m2} struct {`);
        const f = Object.values(C3.inner);
        for (const u of f)
          l2.push(`    ${p(u)} ${o(a, u)}`);
        l2.push("}");
        for (const u of f)
          l2.push(
            `func (${i} ${m2}) Get${s(u)} () ${o(
              a,
              u
            )} {`
          ), l2.push(`    return ${i}.${p(u)}`), l2.push("}");
        const b2 = [], g2 = [];
        for (const u of f)
          b2.push(`${p(u)} ${o(a, u)}`), g2.push(p(u));
        return l2.push(`func New${m2}(${b2.join(", ")}) ${m2} {`), l2.push("    // HACK check value"), l2.push(`    return ${m2}{`), l2.push(`        ${g2.join(`,
        `)},`), l2.push("    }"), l2.push("}"), [{ type: "Command", imports: a, content: l2.join(`
`) }];
      }
    ), e.commands._setFacadeCommandCodeProvider(
      (C3) => {
        const m2 = s(C3), i = p(C3), a = Object.values(C3.inner), l2 = /* @__PURE__ */ new Set(), f = [];
        f.push(`type ${m2} struct {`);
        for (const u of a)
          f.push(`    ${p(u)} ${o(l2, u)}`);
        f.push("}");
        for (const u of a)
          f.push(
            `func (${i} ${m2}) Get${s(u)} () ${o(
              l2,
              u
            )} {`
          ), f.push(`    return ${i}.${p(u)}`), f.push("}");
        const b2 = [], g2 = [];
        for (const u of a)
          b2.push(`${p(u)} ${o(l2, u)}`), g2.push(p(u));
        return f.push(`func New${m2}(${b2.join(", ")}) ${m2} {`), f.push("    // HACK check value"), f.push(`    return ${m2}{`), f.push(`        ${g2.join(`,
        `)},`), f.push("    }"), f.push("}"), [
          {
            type: "FacadeCommand",
            imports: l2,
            content: f.join(`
`)
          }
        ];
      }
    ), e.commands._setAggCodeProvider((C3) => {
      const m2 = e.states.designer.value, i = s(C3), a = p(C3), l2 = Object.values(C3.inner), f = /* @__PURE__ */ new Set(), b2 = [];
      b2.push(`type ${i} struct {`);
      for (const v of l2)
        b2.push(`    ${p(v)} ${o(f, v)}`);
      b2.push("}");
      for (const v of l2)
        b2.push(
          `func (${a} ${i}) Get${s(v)} () ${o(
            f,
            v
          )} {`
        ), b2.push(`    return ${a}.${p(v)}`), b2.push("}");
      const g2 = [], u = [];
      for (const v of l2)
        g2.push(`${p(v)} ${o(f, v)}`), u.push(p(v));
      b2.push(`func New${i}(${g2.join(", ")}) ${i} {`), b2.push("    // HACK check value"), b2.push(`    return ${i}{`), b2.push(`        ${u.join(`,
        `)},`), b2.push("    }"), b2.push("}"), b2.push("");
      const $2 = [...m2._getContext().getAssociationMap()[C3._attributes.__id]].filter((v) => v._attributes.rule === "Command" || v._attributes.rule === "FacadeCommand");
      for (const v of $2) {
        const d = s(v), w2 = p(v);
        b2.push(`func (${a} ${i}) Handle${d} (${w2} ${d}) {`), b2.push("    // HACK implement"), b2.push("}");
      }
      return [
        {
          type: "Agg",
          imports: f,
          content: b2.join(`
`)
        }
      ];
    }), e.commands._setEventCodeProvider(
      (C3) => {
        const m2 = [], i = /* @__PURE__ */ new Set(), a = Object.values(C3.inner), l2 = s(C3), f = p(C3);
        m2.push(`type ${l2} struct {`);
        for (const u of a)
          m2.push(`    ${p(u)} ${o(i, u)}`);
        m2.push("}");
        for (const u of a)
          m2.push(
            `func (${f} ${l2}) Get${s(u)} () ${o(
              i,
              u
            )} {`
          ), m2.push(`    return ${f}.${p(u)}`), m2.push("}");
        const b2 = [], g2 = [];
        for (const u of a)
          b2.push(`${p(u)} ${o(i, u)}`), g2.push(p(u));
        return m2.push(`func New${l2}(${b2.join(", ")}) ${l2} {`), m2.push("    // HACK check value"), m2.push(`    return ${l2}{`), m2.push(`        ${g2.join(`,
        `)},`), m2.push("    }"), m2.push("}"), [
          {
            type: "Event",
            imports: i,
            content: m2.join(`
`)
          }
        ];
      }
    ), e.commands._setCodeFileProvider(() => {
      const C3 = [], m2 = {}, i = [...n.value.namespace.split(/\./), n.value.moduleName], a = new S2(i, `${n.value.moduleName}.go`), l2 = [], f = new S2(i, `${n.value.moduleName}_value_object.go`), b2 = [];
      function g2(w2) {
        for (const c of Object.values(w2)) {
          if (!r2(c))
            continue;
          const h2 = s(c);
          if (m2[`${i.join("/")}/${h2}`] === true)
            continue;
          const y3 = e.commands._genInfoCode(c);
          y3.length !== 0 && (f.addImports(y3[0].imports), b2.push(y3[0].content), b2.push(""), m2[`${i.join("/")}/${h2}`] = true);
        }
      }
      const u = e.states.designer.value._getContext().getCommands();
      for (const w2 of u) {
        g2(w2.inner);
        const c = e.commands._genCommandCode(w2);
        for (const h2 of c)
          m2[h2.content] !== true && (a.addImports(h2.imports), l2.push(h2.content));
      }
      const $2 = e.states.designer.value._getContext().getFacadeCommands();
      for (const w2 of $2) {
        g2(w2.inner);
        const c = e.commands._genFacadeCommandCode(w2);
        for (const h2 of c)
          m2[h2.content] !== true && (a.addImports(h2.imports), l2.push(h2.content));
      }
      const v = e.states.designer.value._getContext().getAggs();
      for (const w2 of v) {
        g2(w2.inner);
        const c = e.commands._genAggCode(w2);
        for (const h2 of c)
          m2[h2.content] !== true && (a.addImports(h2.imports), l2.push(h2.content));
      }
      const d = e.states.designer.value._getContext().getEvents();
      for (const w2 of d) {
        g2(w2.inner);
        const c = e.commands._genEventCode(w2);
        for (const h2 of c)
          m2[h2.content] !== true && (a.addImports(h2.imports), l2.push(h2.content));
      }
      return a.appendContentln(`package ${n.value.moduleName}`), a.appendContentln(""), a.getImports().length > 0 && (a.appendContentln("import ("), a.appendContentln(`    ${[...a.getImports()].join(`
    `)}`), a.appendContentln(")")), a.appendContentln(l2.join(`
`)), f.appendContentln(`package ${n.value.moduleName}`), f.appendContentln(""), f.getImports().length > 0 && (f.appendContentln("import ("), f.appendContentln(`    ${[...f.getImports()].map((w2) => `"${w2}"`).join(`
    `)}`), f.appendContentln(")"), f.appendContentln("")), f.appendContentln(b2.join(`
`)), C3.push(a), C3.push(f), C3;
    });
  }
}));
var M3 = ye.CSharpGeneratorAddition;
var xo = le2.createHotSwapPlugin(() => {
  const e = "    ";
  function n(t, r2 = 1) {
    return t.split(`
`).map((o) => e.repeat(r2) + o).join(`
`);
  }
  return {
    unmount({ api: t }) {
      t.commands.clearCaches(), t.commands._setCommandCodeProvider(() => []), t.commands._setFacadeCommandCodeProvider(() => []), t.commands._setAggCodeProvider(() => []), t.commands._setEventCodeProvider(() => []), t.commands._setReadModelCodeProvider(() => []), t.commands._setCodeFileProvider(() => []), t.commands.setContext({});
    },
    mount({ api: t }) {
      const r2 = t.states.context, o = t.states.designer.value._getContext().getDesignerOptions().ignoreValueObjects.map((i) => N2.stringToLowerCamel(i));
      function s(i) {
        return !o.includes(N2.stringToLowerCamel(i._attributes.name));
      }
      function p(i, a) {
        return s(a) ? N2.stringToUpperCamel(a._attributes.name) : m2(i, a);
      }
      function _(i) {
        return N2.stringToUpperCamel(i._attributes.name);
      }
      function C3(i) {
        return i.has(M3.RecordStruct) ? " struct" : "";
      }
      function m2(i, a) {
        const l2 = r2.value.additions, f = N2.stringToLowerSnake(a._attributes.name).replace(/_/, " ");
        return /\b(time|timestamp|date|deadline|expire)\b/.test(f) ? l2.has(M3.Timezone) ? "System.DateTimeOffset" : "System.DateTime" : /\b(enum|gender|sex|count|amount|num|number|flag|times)\b/.test(f) ? "int" : /\b(price)$/.test(f) ? "decimal" : /^(if|is)\b/.test(f) ? "bool" : Ee(a) && (a._attributes.type === "Id" || a._attributes.type === "Version" || /\b(id|identifier|ver|version)$/.test(f)) ? "long" : "string";
      }
      t.commands._setInfoCodeProvider(
        (i) => {
          const a = r2.value.additions, l2 = /* @__PURE__ */ new Set(), f = [];
          return f.push(
            `public record${C3(a)} ${_(i)}(${m2(
              l2,
              i
            )} value);`
          ), [
            {
              type: "Info",
              content: f.join(`
`),
              imports: l2
            }
          ];
        }
      ), t.commands._setCommandCodeProvider(
        (i) => {
          const a = [], l2 = r2.value.additions, f = /* @__PURE__ */ new Set(), b2 = _(i);
          {
            const g2 = [], u = Object.values(i.inner);
            g2.push(`public record${C3(l2)} ${b2}`), g2.push("(");
            const $2 = [];
            for (const v of u) {
              const d = _(v);
              $2.push(`${p(f, v)} ${N2.upperFirst(d)}`);
            }
            g2.push(`    ${$2.join(`,
    `)}`), g2.push(")"), g2.push("{"), g2.push("}"), a.push({
              type: "Command",
              content: g2.join(`
`),
              imports: f
            });
          }
          {
            const g2 = l2.has(M3.CommandHandlerInterface) ? ` : ${r2.value.commandHandlerInterface}` : "", u = [];
            u.push(`public class ${b2}Handler${g2}`), u.push("{"), u.push(`    public void Handle(${b2} command)`), u.push("    {"), u.push("        // HACK implement"), u.push("    }"), u.push("}"), a.push({
              type: "CommandHandler",
              content: u.join(`
`),
              imports: f
            });
          }
          return a;
        }
      ), t.commands._setFacadeCommandCodeProvider(
        (i) => {
          const a = [], l2 = r2.value.additions, f = /* @__PURE__ */ new Set(), b2 = _(i);
          {
            const g2 = [], u = Object.values(i.inner);
            g2.push(`public record${C3(l2)} ${b2}`), g2.push("(");
            const $2 = [];
            for (const v of u) {
              const d = _(v);
              $2.push(`${p(f, v)} ${N2.upperFirst(d)}`);
            }
            g2.push(`    ${$2.join(`,
    `)}`), g2.push(")"), g2.push("{"), g2.push("}"), a.push({
              type: "FacadeCommand",
              content: g2.join(`
`),
              imports: f
            });
          }
          {
            const g2 = l2.has(M3.CommandHandlerInterface) ? ` : ${r2.value.commandHandlerInterface}` : "", u = [];
            u.push(`public class ${b2}Handler${g2}`), u.push("{"), u.push(`    public void Handle(${b2} command)`), u.push("    {"), u.push("        // HACK implement"), u.push("    }"), u.push("}"), a.push({
              type: "FacadeCommandHandler",
              content: u.join(`
`),
              imports: f
            });
          }
          return a;
        }
      ), t.commands._setAggCodeProvider(
        (i) => {
          const a = [], l2 = t.states.designer.value, f = r2.value.additions;
          {
            const b2 = /* @__PURE__ */ new Set(), g2 = [], u = f.has(M3.AggInterface) ? ` : ${r2.value.aggInterface}` : "";
            g2.push(`public interface I${_(i)}${u}`), g2.push("{");
            const $2 = [], v = [...l2._getContext().getAssociationMap()[i._attributes.__id]].filter((d) => d._attributes.rule === "Command" || d._attributes.rule === "FacadeCommand");
            for (const d of v) {
              const w2 = _(d);
              $2.push(`void Handle${w2}(${w2} command);`);
            }
            g2.push(`    ${$2.join(`

    `)}`), g2.push("}"), g2.push(""), a.push({
              type: "Agg",
              content: g2.join(`
`),
              imports: b2
            });
          }
          {
            const b2 = /* @__PURE__ */ new Set(), g2 = [], u = _(i), $2 = Object.values(i.inner), v = f.has(M3.AggInterface) ? `, ${r2.value.aggInterface}` : "";
            if (f.has(M3.PrimaryConstructor)) {
              const d = [...l2._getContext().getAssociationMap()[i._attributes.__id]].filter((h2) => h2._attributes.rule === "Command" || h2._attributes.rule === "FacadeCommand"), w2 = [];
              for (const h2 of $2) {
                const y3 = _(h2);
                w2.push(`${p(b2, h2)} ${N2.lowerFirst(y3)}`);
              }
              g2.push(`public class ${u}`), g2.push("("), g2.push(`    ${w2.join(`,
    `)}`), g2.push(`): I${u}${v}`), g2.push("{");
              for (const h2 of $2) {
                const y3 = _(h2);
                g2.push(
                  `    public ${p(b2, h2)} ${N2.upperFirst(
                    y3
                  )} { get; private set; } = ${N2.lowerFirst(y3)};`
                ), g2.push("");
              }
              const c = [];
              for (const h2 of d) {
                const y3 = _(h2);
                c.push(`public void Handle${y3}(${y3} command)`), c.push("{"), c.push("    // HACK implement"), c.push("}"), c.push("");
              }
              g2.push(`    ${c.join(`
    `)}`), g2.push("}");
            } else {
              const d = [...l2._getContext().getAssociationMap()[i._attributes.__id]].filter((h2) => h2._attributes.rule === "Command" || h2._attributes.rule === "FacadeCommand");
              g2.push(`public class ${u} : I${u}${v}`), g2.push("{");
              for (const h2 of $2) {
                const y3 = _(h2);
                g2.push(
                  `    public ${p(b2, h2)} ${N2.lowerFirst(
                    y3
                  )} { get; private set; }`
                );
              }
              g2.push("");
              const w2 = [];
              for (const h2 of $2) {
                const y3 = _(h2);
                w2.push(`${p(b2, h2)} ${y3}`);
              }
              g2.push(`    public ${u}(${w2.join(", ")})`), g2.push("    {");
              for (const h2 of $2) {
                const y3 = _(h2);
                g2.push(`        ${y3} = ${N2.lowerFirst(y3)};`);
              }
              g2.push("    }");
              const c = [];
              for (const h2 of d) {
                const y3 = _(h2);
                c.push(`public void Handle${y3}(${y3} command)`), c.push("{"), c.push("    // HACK implement"), c.push("}"), c.push("");
              }
              g2.push(`    ${c.join(`
    `)}`), g2.push("}");
            }
            a.push({
              type: "AggImpl",
              content: g2.join(`
`),
              imports: b2
            });
          }
          return a;
        }
      ), t.commands._setEventCodeProvider(
        (i) => {
          const a = r2.value.additions, l2 = _(i), f = /* @__PURE__ */ new Set(), b2 = Object.values(i.inner), g2 = [];
          g2.push(`public record${C3(a)} ${l2}`), g2.push("(");
          const u = [];
          for (const $2 of b2) {
            const v = _($2);
            u.push(`${p(f, $2)} ${N2.upperFirst(v)}`);
          }
          return g2.push(`    ${u.join(`,
    `)}`), g2.push(")"), g2.push("{"), g2.push("}"), [
            {
              type: "Event",
              content: g2.join(`
`),
              imports: f
            }
          ];
        }
      ), t.commands._setReadModelCodeProvider(() => []), t.commands._setCodeFileProvider(() => {
        const i = [], a = {}, l2 = [...r2.value.namespace.split(/\./), N2.stringToUpperCamel(r2.value.moduleName)];
        function f(v) {
          for (const d of Object.values(v)) {
            if (!s(d))
              continue;
            const w2 = _(d) + ".cs";
            if (a[`${l2.join("/")}/${w2}`] === true)
              continue;
            const c = t.commands._genInfoCode(d);
            if (c.length === 0)
              continue;
            const h2 = new S2(l2, w2);
            for (const y3 of c[0].imports)
              h2.appendContentln(`using ${y3};`);
            h2.appendContentln(""), h2.appendContentln(
              `namespace ${r2.value.namespace}.${N2.stringToUpperCamel(r2.value.moduleName)}`
            ), h2.appendContentln("{"), h2.appendContentln(n(c[0].content)), h2.appendContentln("}"), i.push(h2), a[`${l2.join("/")}/${w2}`] = true;
          }
        }
        const b2 = t.states.designer.value._getContext().getCommands();
        for (const v of b2) {
          f(v.inner);
          const d = _(v) + ".cs", w2 = t.commands._genCommandCode(v), c = new S2(l2, d);
          for (const h2 of w2)
            if (h2.type === "Command") {
              c.addImports(h2.imports);
              for (const y3 of h2.imports)
                c.appendContentln(`using ${y3};`);
              c.appendContentln(""), c.appendContentln(
                `namespace ${r2.value.namespace}.${N2.stringToUpperCamel(r2.value.moduleName)}`
              ), c.appendContentln("{"), c.appendContentln(n(h2.content)), c.appendContentln("}");
            }
          i.push(c);
        }
        const g2 = t.states.designer.value._getContext().getFacadeCommands();
        for (const v of g2) {
          f(v.inner);
          const d = _(v) + ".cs", w2 = t.commands._genFacadeCommandCode(v), c = new S2(l2, d);
          c.addImports(w2[0].imports);
          for (const h2 of w2[0].imports)
            c.appendContentln(`using ${h2};`);
          c.appendContentln(""), c.appendContentln(
            `namespace ${r2.value.namespace}.${N2.stringToUpperCamel(r2.value.moduleName)}`
          ), c.appendContentln("{"), c.appendContentln(n(w2[0].content)), c.appendContentln("}"), i.push(c);
        }
        const u = t.states.designer.value._getContext().getAggs();
        for (const v of u) {
          f(v.inner);
          const d = t.commands._genAggCode(v), w2 = _(v) + ".cs", c = new S2(l2, w2);
          for (const h2 of d) {
            c.addImports(h2.imports);
            for (const y3 of h2.imports)
              c.appendContentln(`using ${y3};`);
            c.appendContentln("");
          }
          c.appendContentln(
            `namespace ${r2.value.namespace}.${N2.stringToUpperCamel(r2.value.moduleName)}`
          ), c.appendContentln("{");
          for (const h2 of d)
            c.appendContentln(n(h2.content));
          c.appendContentln("}"), i.push(c);
        }
        const $2 = t.states.designer.value._getContext().getEvents();
        for (const v of $2) {
          f(v.inner);
          const d = _(v) + ".cs", w2 = t.commands._genEventCode(v), c = new S2(l2, d);
          c.addImports(w2[0].imports);
          for (const h2 of w2[0].imports)
            c.appendContentln(`using ${h2};`);
          c.appendContentln(""), c.appendContentln(
            `namespace ${r2.value.namespace}.${N2.stringToUpperCamel(r2.value.moduleName)}`
          ), c.appendContentln("{"), c.appendContentln(n(w2[0].content)), c.appendContentln("}"), i.push(c);
        }
        return i;
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
            title: So.java.JavaGeneratorAddition.SpringFramework,
            value: So.java.JavaGeneratorAddition.SpringFramework,
            selected: true,
            description: $t6("question.subcommand.genCode.java.additions.springFramework")
          },
          {
            title: So.java.JavaGeneratorAddition.Jpa,
            value: So.java.JavaGeneratorAddition.Jpa,
            selected: false,
            description: $t6("question.subcommand.genCode.java.additions.jpa")
          },
          {
            title: So.java.JavaGeneratorAddition.Lombok,
            value: So.java.JavaGeneratorAddition.Lombok,
            selected: true,
            description: $t6("question.subcommand.genCode.java.additions.lombok")
          },
          {
            title: So.java.JavaGeneratorAddition.LombokBuilder,
            value: So.java.JavaGeneratorAddition.LombokBuilder,
            description: $t6("question.subcommand.genCode.java.additions.lombokBuilder")
          },
          {
            title: So.java.JavaGeneratorAddition.CommandHandler,
            value: So.java.JavaGeneratorAddition.CommandHandler,
            selected: true,
            description: $t6("question.subcommand.genCode.java.additions.commandHandler")
          },
          {
            title: So.java.JavaGeneratorAddition.RecordValueObject,
            value: So.java.JavaGeneratorAddition.RecordValueObject,
            description: $t6("question.subcommand.genCode.java.additions.recordValueObject")
          },
          {
            title: So.java.JavaGeneratorAddition.Timezone,
            value: So.java.JavaGeneratorAddition.Timezone,
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
    So.java.JavaGeneratorAddition.SpringFramework
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
  if (additions.includes(So.java.JavaGeneratorAddition.Jpa)) {
    const { idGenStrategy } = await (0, import_prompts.default)(
      [
        {
          name: "idGenStrategy",
          type: "select",
          message: $t6("question.subcommand.genCode.java.idGenStrategy"),
          choices: [
            { title: "TABLE", value: So.java.IdGenStrategy.TABLE },
            { title: "SEQUENCE", value: So.java.IdGenStrategy.SEQUENCE },
            { title: "IDENTITY", value: So.java.IdGenStrategy.IDENTITY },
            { title: "UUID", value: So.java.IdGenStrategy.UUID },
            { title: "AUTO", value: So.java.IdGenStrategy.AUTO }
          ]
        }
      ],
      { onCancel }
    );
    context.idGenStrategy = idGenStrategy;
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
            title: So.kotlin.KotlinGeneratorAddition.CommandHandler,
            value: So.kotlin.KotlinGeneratorAddition.CommandHandler,
            selected: true,
            description: $t7("question.subcommand.genCode.kotlin.additions.commandHandler")
          },
          {
            title: So.kotlin.KotlinGeneratorAddition.ValueClass,
            value: So.kotlin.KotlinGeneratorAddition.ValueClass,
            selected: true,
            description: $t7("question.subcommand.genCode.kotlin.additions.valueClass")
          },
          {
            title: So.kotlin.KotlinGeneratorAddition.Timezone,
            value: So.kotlin.KotlinGeneratorAddition.Timezone,
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
            title: So.csharp.CSharpGeneratorAddition.Timezone,
            value: So.csharp.CSharpGeneratorAddition.Timezone,
            selected: true,
            description: $t8("question.subcommand.genCode.csharp.additions.timezone")
          },
          {
            title: So.csharp.CSharpGeneratorAddition.RecordStruct,
            value: So.csharp.CSharpGeneratorAddition.RecordStruct,
            selected: true,
            description: $t8("question.subcommand.genCode.csharp.additions.recordStruct")
          },
          {
            title: So.csharp.CSharpGeneratorAddition.PrimaryConstructor,
            value: So.csharp.CSharpGeneratorAddition.PrimaryConstructor,
            selected: true,
            description: $t8("question.subcommand.genCode.csharp.additions.primaryConstructor")
          },
          {
            title: So.csharp.CSharpGeneratorAddition.CommandHandlerInterface,
            value: So.csharp.CSharpGeneratorAddition.CommandHandlerInterface,
            selected: false,
            description: $t8("question.subcommand.genCode.csharp.additions.commandHandlerInterface")
          },
          {
            title: So.csharp.CSharpGeneratorAddition.AggInterface,
            value: So.csharp.CSharpGeneratorAddition.AggInterface,
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
  if (context.additions.has(So.csharp.CSharpGeneratorAddition.CommandHandlerInterface)) {
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
  if (context.additions.has(So.csharp.CSharpGeneratorAddition.AggInterface)) {
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
            title: So.Language.CSharp,
            value: So.Language.CSharp
          },
          {
            title: So.Language.Go,
            value: So.Language.Go
          },
          {
            title: So.Language.Java,
            value: So.Language.Java
          },
          {
            title: So.Language.Kotlin,
            value: So.Language.Kotlin
          }
        ]
      }
    ],
    { onCancel }
  )).language;
  params.args.language = language;
  if (language === So.Language.Java) {
    params.args.context = await requireGenJavaContext();
  } else if (language === So.Language.Kotlin) {
    params.args.context = await requireGenKotlinContext();
  } else if (language === So.Language.CSharp) {
    params.args.context = await requireGenCsharpContext();
  } else if (language === So.Language.Go) {
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
      if (args.language === So.Language.Java) {
        le2.registerPlugin(Oo);
      } else if (args.language === So.Language.Kotlin) {
        le2.registerPlugin(Io);
      } else if (args.language === So.Language.CSharp) {
        le2.registerPlugin(xo);
      } else if (args.language === So.Language.Go) {
        le2.registerPlugin(ko);
      } else {
        isNever(args.language);
      }
      pluginLoaded = true;
    }
    agg4 = Ao(designer);
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
  log_default.printDebug("argv:", process.argv);
  log_default.print("");
  await cliArgsAgg.commands.init();
  await cliArgsAgg.commands.exec();
}
/*! Bundled license information:

@vue/shared/dist/shared.cjs.prod.js:
  (**
  * @vue/shared v3.5.14
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (*! #__NO_SIDE_EFFECTS__ *)

@vue/shared/dist/shared.cjs.js:
  (**
  * @vue/shared v3.5.14
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (*! #__NO_SIDE_EFFECTS__ *)

@vue/reactivity/dist/reactivity.cjs.prod.js:
  (**
  * @vue/reactivity v3.5.14
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/reactivity/dist/reactivity.cjs.js:
  (**
  * @vue/reactivity v3.5.14
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@ddd-tool/domain-designer-core/index.js:
  (**
  * @vue/shared v3.5.15
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (*! #__NO_SIDE_EFFECTS__ *)

@ddd-tool/domain-designer-core/index.js:
  (**
  * @vue/reactivity v3.5.15
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@ddd-tool/domain-designer-core/index.js:
  (**
  * @vue/runtime-core v3.5.15
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@ddd-tool/domain-designer-core/index.js:
  (**
  * vue v3.5.15
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@ddd-tool/domain-designer-generator/index.js:
  (**
  * @vue/shared v3.5.14
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (*! #__NO_SIDE_EFFECTS__ *)
  (**
  * @vue/reactivity v3.5.14
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (**
  * @vue/runtime-core v3.5.15
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (**
  * vue v3.5.15
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
*/
