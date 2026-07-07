#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __copyProps = (to3, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to3, key) && key !== except)
        __defProp(to3, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to3;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/@vue/shared/dist/shared.cjs.prod.js
var require_shared_cjs_prod = __commonJS({
  "../../node_modules/@vue/shared/dist/shared.cjs.prod.js"(exports2) {
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
      return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn3(str));
      });
    };
    var camelizeRE = /-\w/g;
    var camelize = cacheStringFunction(
      (str) => {
        return str.replace(camelizeRE, (c) => c.slice(1).toUpperCase());
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
      const n2 = parseFloat(val);
      return isNaN(n2) ? val : n2;
    };
    var toNumber = (val) => {
      const n2 = isString(val) ? Number(val) : NaN;
      return isNaN(n2) ? val : n2;
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
      [-1]: `CACHED`,
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
          [`Set(${val.size})`]: [...val.values()].map((v3) => stringifySymbol(v3))
        };
      } else if (isSymbol(val)) {
        return stringifySymbol(val);
      } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
      }
      return val;
    };
    var stringifySymbol = (v3, i = "") => {
      var _a;
      return (
        // Symbol.description in es2019+ so we need to cast here to pass
        // the lib: es2016 check
        isSymbol(v3) ? `Symbol(${(_a = v3.description) != null ? _a : i})` : v3
      );
    };
    function normalizeCssVarValue(value) {
      if (value == null) {
        return "initial";
      }
      if (typeof value === "string") {
        return value === "" ? " " : value;
      }
      return String(value);
    }
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
    exports2.normalizeCssVarValue = normalizeCssVarValue;
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

// ../../node_modules/@vue/shared/dist/shared.cjs.js
var require_shared_cjs = __commonJS({
  "../../node_modules/@vue/shared/dist/shared.cjs.js"(exports2) {
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
      return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn3(str));
      });
    };
    var camelizeRE = /-\w/g;
    var camelize = cacheStringFunction(
      (str) => {
        return str.replace(camelizeRE, (c) => c.slice(1).toUpperCase());
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
      const n2 = parseFloat(val);
      return isNaN(n2) ? val : n2;
    };
    var toNumber = (val) => {
      const n2 = isString(val) ? Number(val) : NaN;
      return isNaN(n2) ? val : n2;
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
      [-1]: `CACHED`,
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
          [`Set(${val.size})`]: [...val.values()].map((v3) => stringifySymbol(v3))
        };
      } else if (isSymbol(val)) {
        return stringifySymbol(val);
      } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
      }
      return val;
    };
    var stringifySymbol = (v3, i = "") => {
      var _a;
      return (
        // Symbol.description in es2019+ so we need to cast here to pass
        // the lib: es2016 check
        isSymbol(v3) ? `Symbol(${(_a = v3.description) != null ? _a : i})` : v3
      );
    };
    function normalizeCssVarValue(value) {
      if (value == null) {
        return "initial";
      }
      if (typeof value === "string") {
        return value === "" ? " " : value;
      }
      if (typeof value !== "number" || !Number.isFinite(value)) {
        {
          console.warn(
            "[Vue warn] Invalid value used for CSS binding. Expected a string or a finite number but received:",
            value
          );
        }
      }
      return String(value);
    }
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
    exports2.normalizeCssVarValue = normalizeCssVarValue;
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

// ../../node_modules/@vue/shared/index.js
var require_shared = __commonJS({
  "../../node_modules/@vue/shared/index.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_shared_cjs_prod();
    } else {
      module2.exports = require_shared_cjs();
    }
  }
});

// ../../node_modules/@vue/reactivity/dist/reactivity.cjs.prod.js
var require_reactivity_cjs_prod = __commonJS({
  "../../node_modules/@vue/reactivity/dist/reactivity.cjs.prod.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var shared = require_shared();
    var activeEffectScope;
    var EffectScope = class {
      // TODO isolatedDeclarations "__v_skip"
      constructor(detached = false) {
        this.detached = detached;
        this._active = true;
        this._on = 0;
        this.effects = [];
        this.cleanups = [];
        this._isPaused = false;
        this._warnOnRun = true;
        this.__v_skip = true;
        if (!detached && activeEffectScope) {
          if (activeEffectScope.active) {
            this.parent = activeEffectScope;
            this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
              this
            ) - 1;
          } else {
            this._active = false;
            this._warnOnRun = false;
          }
        }
      }
      get active() {
        return this._active;
      }
      pause() {
        if (this._active) {
          this._isPaused = true;
          let i, l;
          if (this.scopes) {
            for (i = 0, l = this.scopes.length; i < l; i++) {
              this.scopes[i].pause();
            }
          }
          for (i = 0, l = this.effects.length; i < l; i++) {
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
            let i, l;
            if (this.scopes) {
              for (i = 0, l = this.scopes.length; i < l; i++) {
                this.scopes[i].resume();
              }
            }
            for (i = 0, l = this.effects.length; i < l; i++) {
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
          if (activeEffectScope === this) {
            activeEffectScope = this.prevScope;
          } else {
            let current = activeEffectScope;
            while (current) {
              if (current.prevScope === this) {
                current.prevScope = this.prevScope;
                break;
              }
              current = current.prevScope;
            }
          }
          this.prevScope = void 0;
        }
      }
      stop(fromParent) {
        if (this._active) {
          this._active = false;
          let i, l;
          for (i = 0, l = this.effects.length; i < l; i++) {
            this.effects[i].stop();
          }
          this.effects.length = 0;
          for (i = 0, l = this.cleanups.length; i < l; i++) {
            this.cleanups[i]();
          }
          this.cleanups.length = 0;
          if (this.scopes) {
            for (i = 0, l = this.scopes.length; i < l; i++) {
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
        if (activeEffectScope) {
          if (activeEffectScope.active) {
            activeEffectScope.effects.push(this);
          } else {
            this.flags &= -2;
          }
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
          for (let l = dep.computed.deps; l; l = l.nextDep) {
            removeSub(l, true);
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
      // TODO isolatedDeclarations "__v_skip"
      constructor(computed2) {
        this.computed = computed2;
        this.version = 0;
        this.activeLink = void 0;
        this.subs = void 0;
        this.map = void 0;
        this.key = void 0;
        this.sc = 0;
        this.__v_skip = true;
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
          for (let l = computed2.deps; l; l = l.nextDep) {
            addSub(l);
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
    var ITERATE_KEY = /* @__PURE__ */ Symbol(
      ""
    );
    var MAP_KEY_ITERATE_KEY = /* @__PURE__ */ Symbol(
      ""
    );
    var ARRAY_ITERATE_KEY = /* @__PURE__ */ Symbol(
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
      const raw = /* @__PURE__ */ toRaw(array);
      if (raw === array) return raw;
      track(raw, "iterate", ARRAY_ITERATE_KEY);
      return /* @__PURE__ */ isShallow(array) ? raw : raw.map(toReactive);
    }
    function shallowReadArray(arr) {
      track(arr = /* @__PURE__ */ toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
      return arr;
    }
    function toWrapped(target, item) {
      if (/* @__PURE__ */ isReadonly(target)) {
        return /* @__PURE__ */ isReactive(target) ? toReadonly(toReactive(item)) : toReadonly(item);
      }
      return toReactive(item);
    }
    var arrayInstrumentations = {
      __proto__: null,
      [Symbol.iterator]() {
        return iterator(this, Symbol.iterator, (item) => toWrapped(this, item));
      },
      concat(...args) {
        return reactiveReadArray(this).concat(
          ...args.map((x2) => shared.isArray(x2) ? reactiveReadArray(x2) : x2)
        );
      },
      entries() {
        return iterator(this, "entries", (value) => {
          value[1] = toWrapped(this, value[1]);
          return value;
        });
      },
      every(fn3, thisArg) {
        return apply(this, "every", fn3, thisArg, void 0, arguments);
      },
      filter(fn3, thisArg) {
        return apply(
          this,
          "filter",
          fn3,
          thisArg,
          (v3) => v3.map((item) => toWrapped(this, item)),
          arguments
        );
      },
      find(fn3, thisArg) {
        return apply(
          this,
          "find",
          fn3,
          thisArg,
          (item) => toWrapped(this, item),
          arguments
        );
      },
      findIndex(fn3, thisArg) {
        return apply(this, "findIndex", fn3, thisArg, void 0, arguments);
      },
      findLast(fn3, thisArg) {
        return apply(
          this,
          "findLast",
          fn3,
          thisArg,
          (item) => toWrapped(this, item),
          arguments
        );
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
      // keys() iterator only reads `length`, no optimization required
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
        return iterator(this, "values", (item) => toWrapped(this, item));
      }
    };
    function iterator(self2, method, wrapValue) {
      const arr = shallowReadArray(self2);
      const iter = arr[method]();
      if (arr !== self2 && !/* @__PURE__ */ isShallow(self2)) {
        iter._next = iter.next;
        iter.next = () => {
          const result = iter._next();
          if (!result.done) {
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
      const needsWrap = arr !== self2 && !/* @__PURE__ */ isShallow(self2);
      const methodFn = arr[method];
      if (methodFn !== arrayProto[method]) {
        const result2 = methodFn.apply(self2, args);
        return needsWrap ? toReactive(result2) : result2;
      }
      let wrappedFn = fn3;
      if (arr !== self2) {
        if (needsWrap) {
          wrappedFn = function(item, index) {
            return fn3.call(this, toWrapped(self2, item), index, self2);
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
      const needsWrap = arr !== self2 && !/* @__PURE__ */ isShallow(self2);
      let wrappedFn = fn3;
      let wrapInitialAccumulator = false;
      if (arr !== self2) {
        if (needsWrap) {
          wrapInitialAccumulator = args.length === 0;
          wrappedFn = function(acc, item, index) {
            if (wrapInitialAccumulator) {
              wrapInitialAccumulator = false;
              acc = toWrapped(self2, acc);
            }
            return fn3.call(this, acc, toWrapped(self2, item), index, self2);
          };
        } else if (fn3.length > 3) {
          wrappedFn = function(acc, item, index) {
            return fn3.call(this, acc, item, index, self2);
          };
        }
      }
      const result = arr[method](wrappedFn, ...args);
      return wrapInitialAccumulator ? toWrapped(self2, result) : result;
    }
    function searchProxy(self2, method, args) {
      const arr = /* @__PURE__ */ toRaw(self2);
      track(arr, "iterate", ARRAY_ITERATE_KEY);
      const res = arr[method](...args);
      if ((res === -1 || res === false) && /* @__PURE__ */ isProxy(args[0])) {
        args[0] = /* @__PURE__ */ toRaw(args[0]);
        return arr[method](...args);
      }
      return res;
    }
    function noTracking(self2, method, args = []) {
      pauseTracking();
      startBatch();
      const res = (/* @__PURE__ */ toRaw(self2))[method].apply(self2, args);
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
      const obj = /* @__PURE__ */ toRaw(this);
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
          /* @__PURE__ */ isRef(target) ? target : receiver
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
        if (/* @__PURE__ */ isRef(res)) {
          const value = targetIsArray && shared.isIntegerKey(key) ? res : res.value;
          return isReadonly2 && shared.isObject(value) ? /* @__PURE__ */ readonly(value) : value;
        }
        if (shared.isObject(res)) {
          return isReadonly2 ? /* @__PURE__ */ readonly(res) : /* @__PURE__ */ reactive2(res);
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
        const isArrayWithIntegerKey = shared.isArray(target) && shared.isIntegerKey(key);
        if (!this._isShallow) {
          const isOldValueReadonly = /* @__PURE__ */ isReadonly(oldValue);
          if (!/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) {
            oldValue = /* @__PURE__ */ toRaw(oldValue);
            value = /* @__PURE__ */ toRaw(value);
          }
          if (!isArrayWithIntegerKey && /* @__PURE__ */ isRef(oldValue) && !/* @__PURE__ */ isRef(value)) {
            if (isOldValueReadonly) {
              return true;
            } else {
              oldValue.value = value;
              return true;
            }
          }
        }
        const hadKey = isArrayWithIntegerKey ? Number(key) < target.length : shared.hasOwn(target, key);
        const result = Reflect.set(
          target,
          key,
          value,
          /* @__PURE__ */ isRef(target) ? target : receiver
        );
        if (target === /* @__PURE__ */ toRaw(receiver) && result) {
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
    var getProto = (v3) => Reflect.getPrototypeOf(v3);
    function createIterableMethod(method, isReadonly2, isShallow2) {
      return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = /* @__PURE__ */ toRaw(target);
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
        return shared.extend(
          // inheriting all iterator properties
          Object.create(innerIterator),
          {
            // iterator protocol
            next() {
              const { value, done } = innerIterator.next();
              return done ? { value, done } : {
                value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                done
              };
            }
          }
        );
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
          const rawTarget = /* @__PURE__ */ toRaw(target);
          const rawKey = /* @__PURE__ */ toRaw(key);
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
          !readonly2 && track(/* @__PURE__ */ toRaw(target), "iterate", ITERATE_KEY);
          return target.size;
        },
        has(key) {
          const target = this["__v_raw"];
          const rawTarget = /* @__PURE__ */ toRaw(target);
          const rawKey = /* @__PURE__ */ toRaw(key);
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
          const rawTarget = /* @__PURE__ */ toRaw(target);
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
            const target = /* @__PURE__ */ toRaw(this);
            const proto2 = getProto(target);
            const rawValue = /* @__PURE__ */ toRaw(value);
            const valueToAdd = !shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value) ? rawValue : value;
            const hadKey = proto2.has.call(target, valueToAdd) || shared.hasChanged(value, valueToAdd) && proto2.has.call(target, value) || shared.hasChanged(rawValue, valueToAdd) && proto2.has.call(target, rawValue);
            if (!hadKey) {
              target.add(valueToAdd);
              trigger(target, "add", valueToAdd, valueToAdd);
            }
            return this;
          },
          set(key, value) {
            if (!shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) {
              value = /* @__PURE__ */ toRaw(value);
            }
            const target = /* @__PURE__ */ toRaw(this);
            const { has, get } = getProto(target);
            let hadKey = has.call(target, key);
            if (!hadKey) {
              key = /* @__PURE__ */ toRaw(key);
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
            const target = /* @__PURE__ */ toRaw(this);
            const { has, get } = getProto(target);
            let hadKey = has.call(target, key);
            if (!hadKey) {
              key = /* @__PURE__ */ toRaw(key);
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
            const target = /* @__PURE__ */ toRaw(this);
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
    // @__NO_SIDE_EFFECTS__
    function reactive2(target) {
      if (/* @__PURE__ */ isReadonly(target)) {
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
    // @__NO_SIDE_EFFECTS__
    function shallowReactive(target) {
      return createReactiveObject(
        target,
        false,
        shallowReactiveHandlers,
        shallowCollectionHandlers,
        shallowReactiveMap
      );
    }
    // @__NO_SIDE_EFFECTS__
    function readonly(target) {
      return createReactiveObject(
        target,
        true,
        readonlyHandlers,
        readonlyCollectionHandlers,
        readonlyMap
      );
    }
    // @__NO_SIDE_EFFECTS__
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
      if (target["__v_skip"] || !Object.isExtensible(target)) {
        return target;
      }
      const existingProxy = proxyMap.get(target);
      if (existingProxy) {
        return existingProxy;
      }
      const targetType = targetTypeMap(shared.toRawType(target));
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
    // @__NO_SIDE_EFFECTS__
    function isReactive(value) {
      if (/* @__PURE__ */ isReadonly(value)) {
        return /* @__PURE__ */ isReactive(value["__v_raw"]);
      }
      return !!(value && value["__v_isReactive"]);
    }
    // @__NO_SIDE_EFFECTS__
    function isReadonly(value) {
      return !!(value && value["__v_isReadonly"]);
    }
    // @__NO_SIDE_EFFECTS__
    function isShallow(value) {
      return !!(value && value["__v_isShallow"]);
    }
    // @__NO_SIDE_EFFECTS__
    function isProxy(value) {
      return value ? !!value["__v_raw"] : false;
    }
    // @__NO_SIDE_EFFECTS__
    function toRaw(observed) {
      const raw = observed && observed["__v_raw"];
      return raw ? /* @__PURE__ */ toRaw(raw) : observed;
    }
    function markRaw(value) {
      if (!shared.hasOwn(value, "__v_skip") && Object.isExtensible(value)) {
        shared.def(value, "__v_skip", true);
      }
      return value;
    }
    var toReactive = (value) => shared.isObject(value) ? /* @__PURE__ */ reactive2(value) : value;
    var toReadonly = (value) => shared.isObject(value) ? /* @__PURE__ */ readonly(value) : value;
    // @__NO_SIDE_EFFECTS__
    function isRef(r) {
      return r ? r["__v_isRef"] === true : false;
    }
    // @__NO_SIDE_EFFECTS__
    function ref4(value) {
      return createRef(value, false);
    }
    // @__NO_SIDE_EFFECTS__
    function shallowRef(value) {
      return createRef(value, true);
    }
    function createRef(rawValue, shallow) {
      if (/* @__PURE__ */ isRef(rawValue)) {
        return rawValue;
      }
      return new RefImpl(rawValue, shallow);
    }
    var RefImpl = class {
      constructor(value, isShallow2) {
        this.dep = new Dep();
        this["__v_isRef"] = true;
        this["__v_isShallow"] = false;
        this._rawValue = isShallow2 ? value : /* @__PURE__ */ toRaw(value);
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
        const useDirectValue = this["__v_isShallow"] || /* @__PURE__ */ isShallow(newValue) || /* @__PURE__ */ isReadonly(newValue);
        newValue = useDirectValue ? newValue : /* @__PURE__ */ toRaw(newValue);
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
      return /* @__PURE__ */ isRef(ref22) ? ref22.value : ref22;
    }
    function toValue(source) {
      return shared.isFunction(source) ? source() : unref(source);
    }
    var shallowUnwrapHandlers = {
      get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
      set: (target, key, value, receiver) => {
        const oldValue = target[key];
        if (/* @__PURE__ */ isRef(oldValue) && !/* @__PURE__ */ isRef(value)) {
          oldValue.value = value;
          return true;
        } else {
          return Reflect.set(target, key, value, receiver);
        }
      }
    };
    function proxyRefs(objectWithRefs) {
      return /* @__PURE__ */ isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
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
    // @__NO_SIDE_EFFECTS__
    function toRefs(object) {
      const ret = shared.isArray(object) ? new Array(object.length) : {};
      for (const key in object) {
        ret[key] = propertyToRef(object, key);
      }
      return ret;
    }
    var ObjectRefImpl = class {
      constructor(_object, key, _defaultValue) {
        this._object = _object;
        this._defaultValue = _defaultValue;
        this["__v_isRef"] = true;
        this._value = void 0;
        this._key = shared.isSymbol(key) ? key : String(key);
        this._raw = /* @__PURE__ */ toRaw(_object);
        let shallow = true;
        let obj = _object;
        if (!shared.isArray(_object) || shared.isSymbol(this._key) || !shared.isIntegerKey(this._key)) {
          do {
            shallow = !/* @__PURE__ */ isProxy(obj) || /* @__PURE__ */ isShallow(obj);
          } while (shallow && (obj = obj["__v_raw"]));
        }
        this._shallow = shallow;
      }
      get value() {
        let val = this._object[this._key];
        if (this._shallow) {
          val = unref(val);
        }
        return this._value = val === void 0 ? this._defaultValue : val;
      }
      set value(newVal) {
        if (this._shallow && /* @__PURE__ */ isRef(this._raw[this._key])) {
          const nestedRef = this._object[this._key];
          if (/* @__PURE__ */ isRef(nestedRef)) {
            nestedRef.value = newVal;
            return;
          }
        }
        this._object[this._key] = newVal;
      }
      get dep() {
        return getDepFromReactive(this._raw, this._key);
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
    // @__NO_SIDE_EFFECTS__
    function toRef(source, key, defaultValue) {
      if (/* @__PURE__ */ isRef(source)) {
        return source;
      } else if (shared.isFunction(source)) {
        return new GetterRefImpl(source);
      } else if (shared.isObject(source) && arguments.length > 1) {
        return propertyToRef(source, key, defaultValue);
      } else {
        return /* @__PURE__ */ ref4(source);
      }
    }
    function propertyToRef(source, key, defaultValue) {
      return new ObjectRefImpl(source, key, defaultValue);
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
    // @__NO_SIDE_EFFECTS__
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
        if (/* @__PURE__ */ isShallow(source2) || deep === false || deep === 0)
          return traverse(source2, 1);
        return traverse(source2);
      };
      let effect2;
      let getter;
      let cleanup;
      let boundCleanup;
      let forceTrigger = false;
      let isMultiSource = false;
      if (/* @__PURE__ */ isRef(source)) {
        getter = () => source.value;
        forceTrigger = /* @__PURE__ */ isShallow(source);
      } else if (/* @__PURE__ */ isReactive(source)) {
        getter = () => reactiveGetter(source);
        forceTrigger = true;
      } else if (shared.isArray(source)) {
        isMultiSource = true;
        forceTrigger = source.some((s) => /* @__PURE__ */ isReactive(s) || /* @__PURE__ */ isShallow(s));
        getter = () => source.map((s) => {
          if (/* @__PURE__ */ isRef(s)) {
            return s.value;
          } else if (/* @__PURE__ */ isReactive(s)) {
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
          const res = _cb(...args);
          watchHandle();
          return res;
        };
      }
      let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
      const job = (immediateFirstRun) => {
        if (!(effect2.flags & 1) || !effect2.dirty && !immediateFirstRun) {
          return;
        }
        if (cb) {
          const newValue = effect2.run();
          if (immediateFirstRun || deep || forceTrigger || (isMultiSource ? newValue.some((v3, i) => shared.hasChanged(v3, oldValue[i])) : shared.hasChanged(newValue, oldValue))) {
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
              oldValue = newValue;
              call ? call(cb, 3, args) : (
                // @ts-expect-error
                cb(...args)
              );
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
      seen = seen || /* @__PURE__ */ new Map();
      if ((seen.get(value) || 0) >= depth) {
        return value;
      }
      seen.set(value, depth);
      depth--;
      if (/* @__PURE__ */ isRef(value)) {
        traverse(value.value, depth, seen);
      } else if (shared.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          traverse(value[i], depth, seen);
        }
      } else if (shared.isSet(value) || shared.isMap(value)) {
        value.forEach((v3) => {
          traverse(v3, depth, seen);
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

// ../../node_modules/@vue/reactivity/dist/reactivity.cjs.js
var require_reactivity_cjs = __commonJS({
  "../../node_modules/@vue/reactivity/dist/reactivity.cjs.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var shared = require_shared();
    function warn(msg, ...args) {
      console.warn(`[Vue warn] ${msg}`, ...args);
    }
    var activeEffectScope;
    var EffectScope = class {
      // TODO isolatedDeclarations "__v_skip"
      constructor(detached = false) {
        this.detached = detached;
        this._active = true;
        this._on = 0;
        this.effects = [];
        this.cleanups = [];
        this._isPaused = false;
        this._warnOnRun = true;
        this.__v_skip = true;
        if (!detached && activeEffectScope) {
          if (activeEffectScope.active) {
            this.parent = activeEffectScope;
            this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
              this
            ) - 1;
          } else {
            this._active = false;
            this._warnOnRun = false;
          }
        }
      }
      get active() {
        return this._active;
      }
      pause() {
        if (this._active) {
          this._isPaused = true;
          let i, l;
          if (this.scopes) {
            for (i = 0, l = this.scopes.length; i < l; i++) {
              this.scopes[i].pause();
            }
          }
          for (i = 0, l = this.effects.length; i < l; i++) {
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
            let i, l;
            if (this.scopes) {
              for (i = 0, l = this.scopes.length; i < l; i++) {
                this.scopes[i].resume();
              }
            }
            for (i = 0, l = this.effects.length; i < l; i++) {
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
        } else if (this._warnOnRun) {
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
          if (activeEffectScope === this) {
            activeEffectScope = this.prevScope;
          } else {
            let current = activeEffectScope;
            while (current) {
              if (current.prevScope === this) {
                current.prevScope = this.prevScope;
                break;
              }
              current = current.prevScope;
            }
          }
          this.prevScope = void 0;
        }
      }
      stop(fromParent) {
        if (this._active) {
          this._active = false;
          let i, l;
          for (i = 0, l = this.effects.length; i < l; i++) {
            this.effects[i].stop();
          }
          this.effects.length = 0;
          for (i = 0, l = this.cleanups.length; i < l; i++) {
            this.cleanups[i]();
          }
          this.cleanups.length = 0;
          if (this.scopes) {
            for (i = 0, l = this.scopes.length; i < l; i++) {
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
        if (activeEffectScope) {
          if (activeEffectScope.active) {
            activeEffectScope.effects.push(this);
          } else {
            this.flags &= -2;
          }
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
          for (let l = dep.computed.deps; l; l = l.nextDep) {
            removeSub(l, true);
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
      // TODO isolatedDeclarations "__v_skip"
      constructor(computed2) {
        this.computed = computed2;
        this.version = 0;
        this.activeLink = void 0;
        this.subs = void 0;
        this.map = void 0;
        this.key = void 0;
        this.sc = 0;
        this.__v_skip = true;
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
          for (let l = computed2.deps; l; l = l.nextDep) {
            addSub(l);
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
    var ITERATE_KEY = /* @__PURE__ */ Symbol(
      "Object iterate"
    );
    var MAP_KEY_ITERATE_KEY = /* @__PURE__ */ Symbol(
      "Map keys iterate"
    );
    var ARRAY_ITERATE_KEY = /* @__PURE__ */ Symbol(
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
      const raw = /* @__PURE__ */ toRaw(array);
      if (raw === array) return raw;
      track(raw, "iterate", ARRAY_ITERATE_KEY);
      return /* @__PURE__ */ isShallow(array) ? raw : raw.map(toReactive);
    }
    function shallowReadArray(arr) {
      track(arr = /* @__PURE__ */ toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
      return arr;
    }
    function toWrapped(target, item) {
      if (/* @__PURE__ */ isReadonly(target)) {
        return /* @__PURE__ */ isReactive(target) ? toReadonly(toReactive(item)) : toReadonly(item);
      }
      return toReactive(item);
    }
    var arrayInstrumentations = {
      __proto__: null,
      [Symbol.iterator]() {
        return iterator(this, Symbol.iterator, (item) => toWrapped(this, item));
      },
      concat(...args) {
        return reactiveReadArray(this).concat(
          ...args.map((x2) => shared.isArray(x2) ? reactiveReadArray(x2) : x2)
        );
      },
      entries() {
        return iterator(this, "entries", (value) => {
          value[1] = toWrapped(this, value[1]);
          return value;
        });
      },
      every(fn3, thisArg) {
        return apply(this, "every", fn3, thisArg, void 0, arguments);
      },
      filter(fn3, thisArg) {
        return apply(
          this,
          "filter",
          fn3,
          thisArg,
          (v3) => v3.map((item) => toWrapped(this, item)),
          arguments
        );
      },
      find(fn3, thisArg) {
        return apply(
          this,
          "find",
          fn3,
          thisArg,
          (item) => toWrapped(this, item),
          arguments
        );
      },
      findIndex(fn3, thisArg) {
        return apply(this, "findIndex", fn3, thisArg, void 0, arguments);
      },
      findLast(fn3, thisArg) {
        return apply(
          this,
          "findLast",
          fn3,
          thisArg,
          (item) => toWrapped(this, item),
          arguments
        );
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
      // keys() iterator only reads `length`, no optimization required
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
        return iterator(this, "values", (item) => toWrapped(this, item));
      }
    };
    function iterator(self2, method, wrapValue) {
      const arr = shallowReadArray(self2);
      const iter = arr[method]();
      if (arr !== self2 && !/* @__PURE__ */ isShallow(self2)) {
        iter._next = iter.next;
        iter.next = () => {
          const result = iter._next();
          if (!result.done) {
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
      const needsWrap = arr !== self2 && !/* @__PURE__ */ isShallow(self2);
      const methodFn = arr[method];
      if (methodFn !== arrayProto[method]) {
        const result2 = methodFn.apply(self2, args);
        return needsWrap ? toReactive(result2) : result2;
      }
      let wrappedFn = fn3;
      if (arr !== self2) {
        if (needsWrap) {
          wrappedFn = function(item, index) {
            return fn3.call(this, toWrapped(self2, item), index, self2);
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
      const needsWrap = arr !== self2 && !/* @__PURE__ */ isShallow(self2);
      let wrappedFn = fn3;
      let wrapInitialAccumulator = false;
      if (arr !== self2) {
        if (needsWrap) {
          wrapInitialAccumulator = args.length === 0;
          wrappedFn = function(acc, item, index) {
            if (wrapInitialAccumulator) {
              wrapInitialAccumulator = false;
              acc = toWrapped(self2, acc);
            }
            return fn3.call(this, acc, toWrapped(self2, item), index, self2);
          };
        } else if (fn3.length > 3) {
          wrappedFn = function(acc, item, index) {
            return fn3.call(this, acc, item, index, self2);
          };
        }
      }
      const result = arr[method](wrappedFn, ...args);
      return wrapInitialAccumulator ? toWrapped(self2, result) : result;
    }
    function searchProxy(self2, method, args) {
      const arr = /* @__PURE__ */ toRaw(self2);
      track(arr, "iterate", ARRAY_ITERATE_KEY);
      const res = arr[method](...args);
      if ((res === -1 || res === false) && /* @__PURE__ */ isProxy(args[0])) {
        args[0] = /* @__PURE__ */ toRaw(args[0]);
        return arr[method](...args);
      }
      return res;
    }
    function noTracking(self2, method, args = []) {
      pauseTracking();
      startBatch();
      const res = (/* @__PURE__ */ toRaw(self2))[method].apply(self2, args);
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
      const obj = /* @__PURE__ */ toRaw(this);
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
          /* @__PURE__ */ isRef(target) ? target : receiver
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
        if (/* @__PURE__ */ isRef(res)) {
          const value = targetIsArray && shared.isIntegerKey(key) ? res : res.value;
          return isReadonly2 && shared.isObject(value) ? /* @__PURE__ */ readonly(value) : value;
        }
        if (shared.isObject(res)) {
          return isReadonly2 ? /* @__PURE__ */ readonly(res) : /* @__PURE__ */ reactive2(res);
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
        const isArrayWithIntegerKey = shared.isArray(target) && shared.isIntegerKey(key);
        if (!this._isShallow) {
          const isOldValueReadonly = /* @__PURE__ */ isReadonly(oldValue);
          if (!/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) {
            oldValue = /* @__PURE__ */ toRaw(oldValue);
            value = /* @__PURE__ */ toRaw(value);
          }
          if (!isArrayWithIntegerKey && /* @__PURE__ */ isRef(oldValue) && !/* @__PURE__ */ isRef(value)) {
            if (isOldValueReadonly) {
              {
                warn(
                  `Set operation on key "${String(key)}" failed: target is readonly.`,
                  target[key]
                );
              }
              return true;
            } else {
              oldValue.value = value;
              return true;
            }
          }
        }
        const hadKey = isArrayWithIntegerKey ? Number(key) < target.length : shared.hasOwn(target, key);
        const result = Reflect.set(
          target,
          key,
          value,
          /* @__PURE__ */ isRef(target) ? target : receiver
        );
        if (target === /* @__PURE__ */ toRaw(receiver) && result) {
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
    var getProto = (v3) => Reflect.getPrototypeOf(v3);
    function createIterableMethod(method, isReadonly2, isShallow2) {
      return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = /* @__PURE__ */ toRaw(target);
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
        return shared.extend(
          // inheriting all iterator properties
          Object.create(innerIterator),
          {
            // iterator protocol
            next() {
              const { value, done } = innerIterator.next();
              return done ? { value, done } : {
                value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                done
              };
            }
          }
        );
      };
    }
    function createReadonlyMethod(type) {
      return function(...args) {
        {
          const key = args[0] ? `on key "${args[0]}" ` : ``;
          warn(
            `${shared.capitalize(type)} operation ${key}failed: target is readonly.`,
            /* @__PURE__ */ toRaw(this)
          );
        }
        return type === "delete" ? false : type === "clear" ? void 0 : this;
      };
    }
    function createInstrumentations(readonly2, shallow) {
      const instrumentations = {
        get(key) {
          const target = this["__v_raw"];
          const rawTarget = /* @__PURE__ */ toRaw(target);
          const rawKey = /* @__PURE__ */ toRaw(key);
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
          !readonly2 && track(/* @__PURE__ */ toRaw(target), "iterate", ITERATE_KEY);
          return target.size;
        },
        has(key) {
          const target = this["__v_raw"];
          const rawTarget = /* @__PURE__ */ toRaw(target);
          const rawKey = /* @__PURE__ */ toRaw(key);
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
          const rawTarget = /* @__PURE__ */ toRaw(target);
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
            const target = /* @__PURE__ */ toRaw(this);
            const proto2 = getProto(target);
            const rawValue = /* @__PURE__ */ toRaw(value);
            const valueToAdd = !shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value) ? rawValue : value;
            const hadKey = proto2.has.call(target, valueToAdd) || shared.hasChanged(value, valueToAdd) && proto2.has.call(target, value) || shared.hasChanged(rawValue, valueToAdd) && proto2.has.call(target, rawValue);
            if (!hadKey) {
              target.add(valueToAdd);
              trigger(target, "add", valueToAdd, valueToAdd);
            }
            return this;
          },
          set(key, value) {
            if (!shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) {
              value = /* @__PURE__ */ toRaw(value);
            }
            const target = /* @__PURE__ */ toRaw(this);
            const { has, get } = getProto(target);
            let hadKey = has.call(target, key);
            if (!hadKey) {
              key = /* @__PURE__ */ toRaw(key);
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
            const target = /* @__PURE__ */ toRaw(this);
            const { has, get } = getProto(target);
            let hadKey = has.call(target, key);
            if (!hadKey) {
              key = /* @__PURE__ */ toRaw(key);
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
            const target = /* @__PURE__ */ toRaw(this);
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
      const rawKey = /* @__PURE__ */ toRaw(key);
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
    // @__NO_SIDE_EFFECTS__
    function reactive2(target) {
      if (/* @__PURE__ */ isReadonly(target)) {
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
    // @__NO_SIDE_EFFECTS__
    function shallowReactive(target) {
      return createReactiveObject(
        target,
        false,
        shallowReactiveHandlers,
        shallowCollectionHandlers,
        shallowReactiveMap
      );
    }
    // @__NO_SIDE_EFFECTS__
    function readonly(target) {
      return createReactiveObject(
        target,
        true,
        readonlyHandlers,
        readonlyCollectionHandlers,
        readonlyMap
      );
    }
    // @__NO_SIDE_EFFECTS__
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
      if (target["__v_skip"] || !Object.isExtensible(target)) {
        return target;
      }
      const existingProxy = proxyMap.get(target);
      if (existingProxy) {
        return existingProxy;
      }
      const targetType = targetTypeMap(shared.toRawType(target));
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
    // @__NO_SIDE_EFFECTS__
    function isReactive(value) {
      if (/* @__PURE__ */ isReadonly(value)) {
        return /* @__PURE__ */ isReactive(value["__v_raw"]);
      }
      return !!(value && value["__v_isReactive"]);
    }
    // @__NO_SIDE_EFFECTS__
    function isReadonly(value) {
      return !!(value && value["__v_isReadonly"]);
    }
    // @__NO_SIDE_EFFECTS__
    function isShallow(value) {
      return !!(value && value["__v_isShallow"]);
    }
    // @__NO_SIDE_EFFECTS__
    function isProxy(value) {
      return value ? !!value["__v_raw"] : false;
    }
    // @__NO_SIDE_EFFECTS__
    function toRaw(observed) {
      const raw = observed && observed["__v_raw"];
      return raw ? /* @__PURE__ */ toRaw(raw) : observed;
    }
    function markRaw(value) {
      if (!shared.hasOwn(value, "__v_skip") && Object.isExtensible(value)) {
        shared.def(value, "__v_skip", true);
      }
      return value;
    }
    var toReactive = (value) => shared.isObject(value) ? /* @__PURE__ */ reactive2(value) : value;
    var toReadonly = (value) => shared.isObject(value) ? /* @__PURE__ */ readonly(value) : value;
    // @__NO_SIDE_EFFECTS__
    function isRef(r) {
      return r ? r["__v_isRef"] === true : false;
    }
    // @__NO_SIDE_EFFECTS__
    function ref4(value) {
      return createRef(value, false);
    }
    // @__NO_SIDE_EFFECTS__
    function shallowRef(value) {
      return createRef(value, true);
    }
    function createRef(rawValue, shallow) {
      if (/* @__PURE__ */ isRef(rawValue)) {
        return rawValue;
      }
      return new RefImpl(rawValue, shallow);
    }
    var RefImpl = class {
      constructor(value, isShallow2) {
        this.dep = new Dep();
        this["__v_isRef"] = true;
        this["__v_isShallow"] = false;
        this._rawValue = isShallow2 ? value : /* @__PURE__ */ toRaw(value);
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
        const useDirectValue = this["__v_isShallow"] || /* @__PURE__ */ isShallow(newValue) || /* @__PURE__ */ isReadonly(newValue);
        newValue = useDirectValue ? newValue : /* @__PURE__ */ toRaw(newValue);
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
      return /* @__PURE__ */ isRef(ref22) ? ref22.value : ref22;
    }
    function toValue(source) {
      return shared.isFunction(source) ? source() : unref(source);
    }
    var shallowUnwrapHandlers = {
      get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
      set: (target, key, value, receiver) => {
        const oldValue = target[key];
        if (/* @__PURE__ */ isRef(oldValue) && !/* @__PURE__ */ isRef(value)) {
          oldValue.value = value;
          return true;
        } else {
          return Reflect.set(target, key, value, receiver);
        }
      }
    };
    function proxyRefs(objectWithRefs) {
      return /* @__PURE__ */ isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
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
    // @__NO_SIDE_EFFECTS__
    function toRefs(object) {
      if (!/* @__PURE__ */ isProxy(object)) {
        warn(`toRefs() expects a reactive object but received a plain one.`);
      }
      const ret = shared.isArray(object) ? new Array(object.length) : {};
      for (const key in object) {
        ret[key] = propertyToRef(object, key);
      }
      return ret;
    }
    var ObjectRefImpl = class {
      constructor(_object, key, _defaultValue) {
        this._object = _object;
        this._defaultValue = _defaultValue;
        this["__v_isRef"] = true;
        this._value = void 0;
        this._key = shared.isSymbol(key) ? key : String(key);
        this._raw = /* @__PURE__ */ toRaw(_object);
        let shallow = true;
        let obj = _object;
        if (!shared.isArray(_object) || shared.isSymbol(this._key) || !shared.isIntegerKey(this._key)) {
          do {
            shallow = !/* @__PURE__ */ isProxy(obj) || /* @__PURE__ */ isShallow(obj);
          } while (shallow && (obj = obj["__v_raw"]));
        }
        this._shallow = shallow;
      }
      get value() {
        let val = this._object[this._key];
        if (this._shallow) {
          val = unref(val);
        }
        return this._value = val === void 0 ? this._defaultValue : val;
      }
      set value(newVal) {
        if (this._shallow && /* @__PURE__ */ isRef(this._raw[this._key])) {
          const nestedRef = this._object[this._key];
          if (/* @__PURE__ */ isRef(nestedRef)) {
            nestedRef.value = newVal;
            return;
          }
        }
        this._object[this._key] = newVal;
      }
      get dep() {
        return getDepFromReactive(this._raw, this._key);
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
    // @__NO_SIDE_EFFECTS__
    function toRef(source, key, defaultValue) {
      if (/* @__PURE__ */ isRef(source)) {
        return source;
      } else if (shared.isFunction(source)) {
        return new GetterRefImpl(source);
      } else if (shared.isObject(source) && arguments.length > 1) {
        return propertyToRef(source, key, defaultValue);
      } else {
        return /* @__PURE__ */ ref4(source);
      }
    }
    function propertyToRef(source, key, defaultValue) {
      return new ObjectRefImpl(source, key, defaultValue);
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
    // @__NO_SIDE_EFFECTS__
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
        if (/* @__PURE__ */ isShallow(source2) || deep === false || deep === 0)
          return traverse(source2, 1);
        return traverse(source2);
      };
      let effect2;
      let getter;
      let cleanup;
      let boundCleanup;
      let forceTrigger = false;
      let isMultiSource = false;
      if (/* @__PURE__ */ isRef(source)) {
        getter = () => source.value;
        forceTrigger = /* @__PURE__ */ isShallow(source);
      } else if (/* @__PURE__ */ isReactive(source)) {
        getter = () => reactiveGetter(source);
        forceTrigger = true;
      } else if (shared.isArray(source)) {
        isMultiSource = true;
        forceTrigger = source.some((s) => /* @__PURE__ */ isReactive(s) || /* @__PURE__ */ isShallow(s));
        getter = () => source.map((s) => {
          if (/* @__PURE__ */ isRef(s)) {
            return s.value;
          } else if (/* @__PURE__ */ isReactive(s)) {
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
          const res = _cb(...args);
          watchHandle();
          return res;
        };
      }
      let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
      const job = (immediateFirstRun) => {
        if (!(effect2.flags & 1) || !effect2.dirty && !immediateFirstRun) {
          return;
        }
        if (cb) {
          const newValue = effect2.run();
          if (immediateFirstRun || deep || forceTrigger || (isMultiSource ? newValue.some((v3, i) => shared.hasChanged(v3, oldValue[i])) : shared.hasChanged(newValue, oldValue))) {
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
              oldValue = newValue;
              call ? call(cb, 3, args) : (
                // @ts-expect-error
                cb(...args)
              );
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
      seen = seen || /* @__PURE__ */ new Map();
      if ((seen.get(value) || 0) >= depth) {
        return value;
      }
      seen.set(value, depth);
      depth--;
      if (/* @__PURE__ */ isRef(value)) {
        traverse(value.value, depth, seen);
      } else if (shared.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          traverse(value[i], depth, seen);
        }
      } else if (shared.isSet(value) || shared.isMap(value)) {
        value.forEach((v3) => {
          traverse(v3, depth, seen);
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

// ../../node_modules/@vue/reactivity/index.js
var require_reactivity = __commonJS({
  "../../node_modules/@vue/reactivity/index.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_reactivity_cjs_prod();
    } else {
      module2.exports = require_reactivity_cjs();
    }
  }
});

// node_modules/commander/lib/error.js
var require_error = __commonJS({
  "node_modules/commander/lib/error.js"(exports2) {
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

// node_modules/commander/lib/argument.js
var require_argument = __commonJS({
  "node_modules/commander/lib/argument.js"(exports2) {
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

// node_modules/commander/lib/help.js
var require_help = __commonJS({
  "node_modules/commander/lib/help.js"(exports2) {
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

// node_modules/commander/lib/option.js
var require_option = __commonJS({
  "node_modules/commander/lib/option.js"(exports2) {
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

// node_modules/commander/lib/suggestSimilar.js
var require_suggestSimilar = __commonJS({
  "node_modules/commander/lib/suggestSimilar.js"(exports2) {
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

// node_modules/commander/lib/command.js
var require_command = __commonJS({
  "node_modules/commander/lib/command.js"(exports2) {
    "use strict";
    var EventEmitter = require("node:events").EventEmitter;
    var childProcess = require("node:child_process");
    var path8 = require("node:path");
    var fs8 = require("node:fs");
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
            const m = regex.exec(val);
            return m ? m[0] : def;
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
          if (fs8.existsSync(localBin)) return localBin;
          if (sourceExt.includes(path8.extname(baseName))) return void 0;
          const foundExt = sourceExt.find(
            (ext) => fs8.existsSync(`${localBin}${ext}`)
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
            resolvedScriptPath = fs8.realpathSync(this._scriptPath);
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
                value = value.reduce((processed, v3) => {
                  return myParseArg(declaredArg, v3, processed);
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

// node_modules/commander/index.js
var require_commander = __commonJS({
  "node_modules/commander/index.js"(exports2) {
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

// ../../node_modules/kleur/index.js
var require_kleur = __commonJS({
  "../../node_modules/kleur/index.js"(exports2, module2) {
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

// ../../node_modules/prompts/dist/util/action.js
var require_action = __commonJS({
  "../../node_modules/prompts/dist/util/action.js"(exports2, module2) {
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

// ../../node_modules/prompts/dist/util/strip.js
var require_strip = __commonJS({
  "../../node_modules/prompts/dist/util/strip.js"(exports2, module2) {
    "use strict";
    module2.exports = (str) => {
      const pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))"].join("|");
      const RGX = new RegExp(pattern, "g");
      return typeof str === "string" ? str.replace(RGX, "") : str;
    };
  }
});

// ../../node_modules/sisteransi/src/index.js
var require_src = __commonJS({
  "../../node_modules/sisteransi/src/index.js"(exports2, module2) {
    "use strict";
    var ESC = "\x1B";
    var CSI = `${ESC}[`;
    var beep = "\x07";
    var cursor = {
      to(x2, y2) {
        if (!y2) return `${CSI}${x2 + 1}G`;
        return `${CSI}${y2 + 1};${x2 + 1}H`;
      },
      move(x2, y2) {
        let ret = "";
        if (x2 < 0) ret += `${CSI}${-x2}D`;
        else if (x2 > 0) ret += `${CSI}${x2}C`;
        if (y2 < 0) ret += `${CSI}${-y2}A`;
        else if (y2 > 0) ret += `${CSI}${y2}B`;
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

// ../../node_modules/prompts/dist/util/clear.js
var require_clear = __commonJS({
  "../../node_modules/prompts/dist/util/clear.js"(exports2, module2) {
    "use strict";
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it3 = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it3) {
        if (Array.isArray(o) || (it3 = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it3) o = it3;
          var i = 0;
          var F2 = function F3() {
          };
          return { s: F2, n: function n2() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          }, e: function e(_e2) {
            throw _e2;
          }, f: F2 };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return { s: function s() {
        it3 = it3.call(o);
      }, n: function n2() {
        var step = it3.next();
        normalCompletion = step.done;
        return step;
      }, e: function e(_e2) {
        didErr = true;
        err = _e2;
      }, f: function f2() {
        try {
          if (!normalCompletion && it3.return != null) it3.return();
        } finally {
          if (didErr) throw err;
        }
      } };
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n2 = Object.prototype.toString.call(o).slice(8, -1);
      if (n2 === "Object" && o.constructor) n2 = o.constructor.name;
      if (n2 === "Map" || n2 === "Set") return Array.from(o);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray(o, minLen);
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

// ../../node_modules/prompts/dist/util/figures.js
var require_figures = __commonJS({
  "../../node_modules/prompts/dist/util/figures.js"(exports2, module2) {
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

// ../../node_modules/prompts/dist/util/style.js
var require_style = __commonJS({
  "../../node_modules/prompts/dist/util/style.js"(exports2, module2) {
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

// ../../node_modules/prompts/dist/util/lines.js
var require_lines = __commonJS({
  "../../node_modules/prompts/dist/util/lines.js"(exports2, module2) {
    "use strict";
    var strip = require_strip();
    module2.exports = function(msg, perLine) {
      let lines = String(strip(msg) || "").split(/\r?\n/);
      if (!perLine) return lines.length;
      return lines.map((l) => Math.ceil(l.length / perLine)).reduce((a, b2) => a + b2);
    };
  }
});

// ../../node_modules/prompts/dist/util/wrap.js
var require_wrap = __commonJS({
  "../../node_modules/prompts/dist/util/wrap.js"(exports2, module2) {
    "use strict";
    module2.exports = (msg, opts = {}) => {
      const tab = Number.isSafeInteger(parseInt(opts.margin)) ? new Array(parseInt(opts.margin)).fill(" ").join("") : opts.margin || "";
      const width = opts.width;
      return (msg || "").split(/\r?\n/g).map((line) => line.split(/\s+/g).reduce((arr, w) => {
        if (w.length + tab.length >= width || arr[arr.length - 1].length + w.length + 1 < width) arr[arr.length - 1] += ` ${w}`;
        else arr.push(`${tab}${w}`);
        return arr;
      }, [tab]).join("\n")).join("\n");
    };
  }
});

// ../../node_modules/prompts/dist/util/entriesToDisplay.js
var require_entriesToDisplay = __commonJS({
  "../../node_modules/prompts/dist/util/entriesToDisplay.js"(exports2, module2) {
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

// ../../node_modules/prompts/dist/util/index.js
var require_util = __commonJS({
  "../../node_modules/prompts/dist/util/index.js"(exports2, module2) {
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

// ../../node_modules/prompts/dist/elements/prompt.js
var require_prompt = __commonJS({
  "../../node_modules/prompts/dist/elements/prompt.js"(exports2, module2) {
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

// ../../node_modules/prompts/dist/elements/text.js
var require_text = __commonJS({
  "../../node_modules/prompts/dist/elements/text.js"(exports2, module2) {
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
      set value(v3) {
        if (!v3 && this.initial) {
          this.placeholder = true;
          this.rendered = color.gray(this.transform.render(this.initial));
        } else {
          this.placeholder = false;
          this.rendered = this.transform.render(v3);
        }
        this._value = v3;
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
      moveCursor(n2) {
        if (this.placeholder) return;
        this.cursor = this.cursor + n2;
        this.cursorOffset += n2;
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
`).reduce((a, l, i) => a + `
${i ? " " : figures.pointerSmall} ${color.red().italic(l)}`, ``);
        }
        this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore + cursor.move(this.cursorOffset, 0));
      }
    };
    module2.exports = TextPrompt;
  }
});

// ../../node_modules/prompts/dist/elements/select.js
var require_select = __commonJS({
  "../../node_modules/prompts/dist/elements/select.js"(exports2, module2) {
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
      moveCursor(n2) {
        this.cursor = n2;
        this.value = this.choices[n2].value;
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
            let title, prefix, desc = "", v3 = this.choices[i];
            if (i === startIndex && startIndex > 0) {
              prefix = figures.arrowUp;
            } else if (i === endIndex - 1 && endIndex < this.choices.length) {
              prefix = figures.arrowDown;
            } else {
              prefix = " ";
            }
            if (v3.disabled) {
              title = this.cursor === i ? color.gray().underline(v3.title) : color.strikethrough().gray(v3.title);
              prefix = (this.cursor === i ? color.bold().gray(figures.pointer) + " " : "  ") + prefix;
            } else {
              title = this.cursor === i ? color.cyan().underline(v3.title) : v3.title;
              prefix = (this.cursor === i ? color.cyan(figures.pointer) + " " : "  ") + prefix;
              if (v3.description && this.cursor === i) {
                desc = ` - ${v3.description}`;
                if (prefix.length + title.length + desc.length >= this.out.columns || v3.description.split(/\r?\n/).length > 1) {
                  desc = "\n" + wrap(v3.description, {
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

// ../../node_modules/prompts/dist/elements/toggle.js
var require_toggle = __commonJS({
  "../../node_modules/prompts/dist/elements/toggle.js"(exports2, module2) {
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

// ../../node_modules/prompts/dist/dateparts/datepart.js
var require_datepart = __commonJS({
  "../../node_modules/prompts/dist/dateparts/datepart.js"(exports2, module2) {
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

// ../../node_modules/prompts/dist/dateparts/meridiem.js
var require_meridiem = __commonJS({
  "../../node_modules/prompts/dist/dateparts/meridiem.js"(exports2, module2) {
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

// ../../node_modules/prompts/dist/dateparts/day.js
var require_day = __commonJS({
  "../../node_modules/prompts/dist/dateparts/day.js"(exports2, module2) {
    "use strict";
    var DatePart = require_datepart();
    var pos = (n2) => {
      n2 = n2 % 10;
      return n2 === 1 ? "st" : n2 === 2 ? "nd" : n2 === 3 ? "rd" : "th";
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

// ../../node_modules/prompts/dist/dateparts/hours.js
var require_hours = __commonJS({
  "../../node_modules/prompts/dist/dateparts/hours.js"(exports2, module2) {
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

// ../../node_modules/prompts/dist/dateparts/milliseconds.js
var require_milliseconds = __commonJS({
  "../../node_modules/prompts/dist/dateparts/milliseconds.js"(exports2, module2) {
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

// ../../node_modules/prompts/dist/dateparts/minutes.js
var require_minutes = __commonJS({
  "../../node_modules/prompts/dist/dateparts/minutes.js"(exports2, module2) {
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
        let m = this.date.getMinutes();
        return this.token.length > 1 ? String(m).padStart(2, "0") : m;
      }
    };
    module2.exports = Minutes;
  }
});

// ../../node_modules/prompts/dist/dateparts/month.js
var require_month = __commonJS({
  "../../node_modules/prompts/dist/dateparts/month.js"(exports2, module2) {
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

// ../../node_modules/prompts/dist/dateparts/seconds.js
var require_seconds = __commonJS({
  "../../node_modules/prompts/dist/dateparts/seconds.js"(exports2, module2) {
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

// ../../node_modules/prompts/dist/dateparts/year.js
var require_year = __commonJS({
  "../../node_modules/prompts/dist/dateparts/year.js"(exports2, module2) {
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

// ../../node_modules/prompts/dist/dateparts/index.js
var require_dateparts = __commonJS({
  "../../node_modules/prompts/dist/dateparts/index.js"(exports2, module2) {
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

// ../../node_modules/prompts/dist/elements/date.js
var require_date = __commonJS({
  "../../node_modules/prompts/dist/elements/date.js"(exports2, module2) {
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
          let idx = result.findIndex((gr2) => gr2 != null);
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
      moveCursor(n2) {
        this.typed = "";
        this.cursor = n2;
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
          this.outputText += this.errorMsg.split("\n").reduce((a, l, i) => a + `
${i ? ` ` : figures.pointerSmall} ${color.red().italic(l)}`, ``);
        }
        this.out.write(erase.line + cursor.to(0) + this.outputText);
      }
    };
    module2.exports = DatePrompt;
  }
});

// ../../node_modules/prompts/dist/elements/number.js
var require_number = __commonJS({
  "../../node_modules/prompts/dist/elements/number.js"(exports2, module2) {
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
      set value(v3) {
        if (!v3 && v3 !== 0) {
          this.placeholder = true;
          this.rendered = color.gray(this.transform.render(`${this.initial}`));
          this._value = ``;
        } else {
          this.placeholder = false;
          this.rendered = this.transform.render(`${round(v3, this.round)}`);
          this._value = round(v3, this.round);
        }
        this.fire();
      }
      get value() {
        return this._value;
      }
      parse(x2) {
        return this.float ? parseFloat(x2) : parseInt(x2);
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
        let x2 = this.value;
        this.value = x2 !== `` ? x2 : this.initial;
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
          let x2 = _this2.value;
          _this2.value = x2 !== `` ? x2 : _this2.initial;
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
`).reduce((a, l, i) => a + `
${i ? ` ` : figures.pointerSmall} ${color.red().italic(l)}`, ``);
        }
        this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore);
      }
    };
    module2.exports = NumberPrompt;
  }
});

// ../../node_modules/prompts/dist/elements/multiselect.js
var require_multiselect = __commonJS({
  "../../node_modules/prompts/dist/elements/multiselect.js"(exports2, module2) {
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
        this.value.map((v3) => !v3.selected);
        this.cursor = 0;
        this.fire();
        this.render();
      }
      selected() {
        return this.value.filter((v3) => v3.selected);
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
        const v3 = this.value[this.cursor];
        if (v3.selected) {
          v3.selected = false;
          this.render();
        } else if (v3.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
          return this.bell();
        } else {
          v3.selected = true;
          this.render();
        }
      }
      toggleAll() {
        if (this.maxChoices !== void 0 || this.value[this.cursor].disabled) {
          return this.bell();
        }
        const newSelected = !this.value[this.cursor].selected;
        this.value.filter((v3) => !v3.disabled).forEach((v3) => v3.selected = newSelected);
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
      renderOption(cursor2, v3, i, arrowIndicator) {
        const prefix = (v3.selected ? color.green(figures.radioOn) : figures.radioOff) + " " + arrowIndicator + " ";
        let title, desc;
        if (v3.disabled) {
          title = cursor2 === i ? color.gray().underline(v3.title) : color.strikethrough().gray(v3.title);
        } else {
          title = cursor2 === i ? color.cyan().underline(v3.title) : v3.title;
          if (cursor2 === i && v3.description) {
            desc = ` - ${v3.description}`;
            if (prefix.length + title.length + desc.length >= this.out.columns || v3.description.split(/\r?\n/).length > 1) {
              desc = "\n" + wrap(v3.description, {
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
          return this.value.filter((e) => e.selected).map((v3) => v3.title).join(", ");
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

// ../../node_modules/prompts/dist/elements/autocomplete.js
var require_autocomplete = __commonJS({
  "../../node_modules/prompts/dist/elements/autocomplete.js"(exports2, module2) {
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
          const l = Math.max(suggestions.length - 1, 0);
          _this.moveSelect(Math.min(l, _this.select));
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
      renderOption(v3, hovered, isStart, isEnd) {
        let desc;
        let prefix = isStart ? figures.arrowUp : isEnd ? figures.arrowDown : " ";
        let title = hovered ? color.cyan().underline(v3.title) : v3.title;
        prefix = (hovered ? color.cyan(figures.pointer) + " " : "  ") + prefix;
        if (v3.description) {
          desc = ` - ${v3.description}`;
          if (prefix.length + title.length + desc.length >= this.out.columns || v3.description.split(/\r?\n/).length > 1) {
            desc = "\n" + wrap(v3.description, {
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

// ../../node_modules/prompts/dist/elements/autocompleteMultiselect.js
var require_autocompleteMultiselect = __commonJS({
  "../../node_modules/prompts/dist/elements/autocompleteMultiselect.js"(exports2, module2) {
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
        this.filteredOptions = this.value.filter((v3) => {
          if (this.inputValue) {
            if (typeof v3.title === "string") {
              if (v3.title.toLowerCase().includes(this.inputValue.toLowerCase())) {
                return true;
              }
            }
            if (typeof v3.value === "string") {
              if (v3.value.toLowerCase().includes(this.inputValue.toLowerCase())) {
                return true;
              }
            }
            return false;
          }
          return true;
        });
        const newHighlightIndex = this.filteredOptions.findIndex((v3) => v3 === currentHighlight);
        this.cursor = newHighlightIndex < 0 ? 0 : newHighlightIndex;
        this.render();
      }
      handleSpaceToggle() {
        const v3 = this.filteredOptions[this.cursor];
        if (v3.selected) {
          v3.selected = false;
          this.render();
        } else if (v3.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
          return this.bell();
        } else {
          v3.selected = true;
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
      renderOption(cursor2, v3, i) {
        let title;
        if (v3.disabled) title = cursor2 === i ? color.gray().underline(v3.title) : color.strikethrough().gray(v3.title);
        else title = cursor2 === i ? color.cyan().underline(v3.title) : v3.title;
        return (v3.selected ? color.green(figures.radioOn) : figures.radioOff) + "  " + title;
      }
      renderDoneOrInstructions() {
        if (this.done) {
          return this.value.filter((e) => e.selected).map((v3) => v3.title).join(", ");
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

// ../../node_modules/prompts/dist/elements/confirm.js
var require_confirm = __commonJS({
  "../../node_modules/prompts/dist/elements/confirm.js"(exports2, module2) {
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

// ../../node_modules/prompts/dist/elements/index.js
var require_elements = __commonJS({
  "../../node_modules/prompts/dist/elements/index.js"(exports2, module2) {
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

// ../../node_modules/prompts/dist/prompts.js
var require_prompts = __commonJS({
  "../../node_modules/prompts/dist/prompts.js"(exports2) {
    "use strict";
    var $2 = exports2;
    var el = require_elements();
    var noop = (v3) => v3;
    function toPrompt(type, args, opts = {}) {
      return new Promise((res, rej) => {
        const p = new el[type](args);
        const onAbort = opts.onAbort || noop;
        const onSubmit = opts.onSubmit || noop;
        const onExit = opts.onExit || noop;
        p.on("state", args.onState || noop);
        p.on("submit", (x2) => res(onSubmit(x2)));
        p.on("exit", (x2) => res(onExit(x2)));
        p.on("abort", (x2) => rej(onAbort(x2)));
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

// ../../node_modules/prompts/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/prompts/dist/index.js"(exports2, module2) {
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
      var it3 = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it3) {
        if (Array.isArray(o) || (it3 = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it3) o = it3;
          var i = 0;
          var F2 = function F3() {
          };
          return { s: F2, n: function n2() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          }, e: function e(_e2) {
            throw _e2;
          }, f: F2 };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return { s: function s() {
        it3 = it3.call(o);
      }, n: function n2() {
        var step = it3.next();
        normalCompletion = step.done;
        return step;
      }, e: function e(_e2) {
        didErr = true;
        err = _e2;
      }, f: function f2() {
        try {
          if (!normalCompletion && it3.return != null) it3.return();
        } finally {
          if (didErr) throw err;
        }
      } };
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n2 = Object.prototype.toString.call(o).slice(8, -1);
      if (n2 === "Object" && o.constructor) n2 = o.constructor.name;
      if (n2 === "Map" || n2 === "Set") return Array.from(o);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray(o, minLen);
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
        const getFormattedAnswer = /* @__PURE__ */ (function() {
          var _ref = _asyncToGenerator(function* (question2, answer2, skipValidation = false) {
            if (!skipValidation && question2.validate && question2.validate(answer2) !== true) {
              return;
            }
            return question2.format ? yield question2.format(answer2, answers) : answer2;
          });
          return function getFormattedAnswer2(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        })();
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

// ../../node_modules/prompts/lib/util/action.js
var require_action2 = __commonJS({
  "../../node_modules/prompts/lib/util/action.js"(exports2, module2) {
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

// ../../node_modules/prompts/lib/util/strip.js
var require_strip2 = __commonJS({
  "../../node_modules/prompts/lib/util/strip.js"(exports2, module2) {
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

// ../../node_modules/prompts/lib/util/clear.js
var require_clear2 = __commonJS({
  "../../node_modules/prompts/lib/util/clear.js"(exports2, module2) {
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

// ../../node_modules/prompts/lib/util/figures.js
var require_figures2 = __commonJS({
  "../../node_modules/prompts/lib/util/figures.js"(exports2, module2) {
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

// ../../node_modules/prompts/lib/util/style.js
var require_style2 = __commonJS({
  "../../node_modules/prompts/lib/util/style.js"(exports2, module2) {
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

// ../../node_modules/prompts/lib/util/lines.js
var require_lines2 = __commonJS({
  "../../node_modules/prompts/lib/util/lines.js"(exports2, module2) {
    "use strict";
    var strip = require_strip2();
    module2.exports = function(msg, perLine) {
      let lines = String(strip(msg) || "").split(/\r?\n/);
      if (!perLine) return lines.length;
      return lines.map((l) => Math.ceil(l.length / perLine)).reduce((a, b2) => a + b2);
    };
  }
});

// ../../node_modules/prompts/lib/util/wrap.js
var require_wrap2 = __commonJS({
  "../../node_modules/prompts/lib/util/wrap.js"(exports2, module2) {
    "use strict";
    module2.exports = (msg, opts = {}) => {
      const tab = Number.isSafeInteger(parseInt(opts.margin)) ? new Array(parseInt(opts.margin)).fill(" ").join("") : opts.margin || "";
      const width = opts.width;
      return (msg || "").split(/\r?\n/g).map((line) => line.split(/\s+/g).reduce((arr, w) => {
        if (w.length + tab.length >= width || arr[arr.length - 1].length + w.length + 1 < width)
          arr[arr.length - 1] += ` ${w}`;
        else arr.push(`${tab}${w}`);
        return arr;
      }, [tab]).join("\n")).join("\n");
    };
  }
});

// ../../node_modules/prompts/lib/util/entriesToDisplay.js
var require_entriesToDisplay2 = __commonJS({
  "../../node_modules/prompts/lib/util/entriesToDisplay.js"(exports2, module2) {
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

// ../../node_modules/prompts/lib/util/index.js
var require_util2 = __commonJS({
  "../../node_modules/prompts/lib/util/index.js"(exports2, module2) {
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

// ../../node_modules/prompts/lib/elements/prompt.js
var require_prompt2 = __commonJS({
  "../../node_modules/prompts/lib/elements/prompt.js"(exports2, module2) {
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

// ../../node_modules/prompts/lib/elements/text.js
var require_text2 = __commonJS({
  "../../node_modules/prompts/lib/elements/text.js"(exports2, module2) {
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
      set value(v3) {
        if (!v3 && this.initial) {
          this.placeholder = true;
          this.rendered = color.gray(this.transform.render(this.initial));
        } else {
          this.placeholder = false;
          this.rendered = this.transform.render(v3);
        }
        this._value = v3;
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
      moveCursor(n2) {
        if (this.placeholder) return;
        this.cursor = this.cursor + n2;
        this.cursorOffset += n2;
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
`).reduce((a, l, i) => a + `
${i ? " " : figures.pointerSmall} ${color.red().italic(l)}`, ``);
        }
        this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore + cursor.move(this.cursorOffset, 0));
      }
    };
    module2.exports = TextPrompt;
  }
});

// ../../node_modules/prompts/lib/elements/select.js
var require_select2 = __commonJS({
  "../../node_modules/prompts/lib/elements/select.js"(exports2, module2) {
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
      moveCursor(n2) {
        this.cursor = n2;
        this.value = this.choices[n2].value;
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
            let title, prefix, desc = "", v3 = this.choices[i];
            if (i === startIndex && startIndex > 0) {
              prefix = figures.arrowUp;
            } else if (i === endIndex - 1 && endIndex < this.choices.length) {
              prefix = figures.arrowDown;
            } else {
              prefix = " ";
            }
            if (v3.disabled) {
              title = this.cursor === i ? color.gray().underline(v3.title) : color.strikethrough().gray(v3.title);
              prefix = (this.cursor === i ? color.bold().gray(figures.pointer) + " " : "  ") + prefix;
            } else {
              title = this.cursor === i ? color.cyan().underline(v3.title) : v3.title;
              prefix = (this.cursor === i ? color.cyan(figures.pointer) + " " : "  ") + prefix;
              if (v3.description && this.cursor === i) {
                desc = ` - ${v3.description}`;
                if (prefix.length + title.length + desc.length >= this.out.columns || v3.description.split(/\r?\n/).length > 1) {
                  desc = "\n" + wrap(v3.description, { margin: 3, width: this.out.columns });
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

// ../../node_modules/prompts/lib/elements/toggle.js
var require_toggle2 = __commonJS({
  "../../node_modules/prompts/lib/elements/toggle.js"(exports2, module2) {
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

// ../../node_modules/prompts/lib/dateparts/datepart.js
var require_datepart2 = __commonJS({
  "../../node_modules/prompts/lib/dateparts/datepart.js"(exports2, module2) {
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

// ../../node_modules/prompts/lib/dateparts/meridiem.js
var require_meridiem2 = __commonJS({
  "../../node_modules/prompts/lib/dateparts/meridiem.js"(exports2, module2) {
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

// ../../node_modules/prompts/lib/dateparts/day.js
var require_day2 = __commonJS({
  "../../node_modules/prompts/lib/dateparts/day.js"(exports2, module2) {
    "use strict";
    var DatePart = require_datepart2();
    var pos = (n2) => {
      n2 = n2 % 10;
      return n2 === 1 ? "st" : n2 === 2 ? "nd" : n2 === 3 ? "rd" : "th";
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

// ../../node_modules/prompts/lib/dateparts/hours.js
var require_hours2 = __commonJS({
  "../../node_modules/prompts/lib/dateparts/hours.js"(exports2, module2) {
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

// ../../node_modules/prompts/lib/dateparts/milliseconds.js
var require_milliseconds2 = __commonJS({
  "../../node_modules/prompts/lib/dateparts/milliseconds.js"(exports2, module2) {
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

// ../../node_modules/prompts/lib/dateparts/minutes.js
var require_minutes2 = __commonJS({
  "../../node_modules/prompts/lib/dateparts/minutes.js"(exports2, module2) {
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
        let m = this.date.getMinutes();
        return this.token.length > 1 ? String(m).padStart(2, "0") : m;
      }
    };
    module2.exports = Minutes;
  }
});

// ../../node_modules/prompts/lib/dateparts/month.js
var require_month2 = __commonJS({
  "../../node_modules/prompts/lib/dateparts/month.js"(exports2, module2) {
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

// ../../node_modules/prompts/lib/dateparts/seconds.js
var require_seconds2 = __commonJS({
  "../../node_modules/prompts/lib/dateparts/seconds.js"(exports2, module2) {
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

// ../../node_modules/prompts/lib/dateparts/year.js
var require_year2 = __commonJS({
  "../../node_modules/prompts/lib/dateparts/year.js"(exports2, module2) {
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

// ../../node_modules/prompts/lib/dateparts/index.js
var require_dateparts2 = __commonJS({
  "../../node_modules/prompts/lib/dateparts/index.js"(exports2, module2) {
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

// ../../node_modules/prompts/lib/elements/date.js
var require_date2 = __commonJS({
  "../../node_modules/prompts/lib/elements/date.js"(exports2, module2) {
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
          let idx = result.findIndex((gr2) => gr2 != null);
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
      moveCursor(n2) {
        this.typed = "";
        this.cursor = n2;
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
            (a, l, i) => a + `
${i ? ` ` : figures.pointerSmall} ${color.red().italic(l)}`,
            ``
          );
        }
        this.out.write(erase.line + cursor.to(0) + this.outputText);
      }
    };
    module2.exports = DatePrompt;
  }
});

// ../../node_modules/prompts/lib/elements/number.js
var require_number2 = __commonJS({
  "../../node_modules/prompts/lib/elements/number.js"(exports2, module2) {
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
      set value(v3) {
        if (!v3 && v3 !== 0) {
          this.placeholder = true;
          this.rendered = color.gray(this.transform.render(`${this.initial}`));
          this._value = ``;
        } else {
          this.placeholder = false;
          this.rendered = this.transform.render(`${round(v3, this.round)}`);
          this._value = round(v3, this.round);
        }
        this.fire();
      }
      get value() {
        return this._value;
      }
      parse(x2) {
        return this.float ? parseFloat(x2) : parseInt(x2);
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
        let x2 = this.value;
        this.value = x2 !== `` ? x2 : this.initial;
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
        let x2 = this.value;
        this.value = x2 !== `` ? x2 : this.initial;
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
`).reduce((a, l, i) => a + `
${i ? ` ` : figures.pointerSmall} ${color.red().italic(l)}`, ``);
        }
        this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore);
      }
    };
    module2.exports = NumberPrompt;
  }
});

// ../../node_modules/prompts/lib/elements/multiselect.js
var require_multiselect2 = __commonJS({
  "../../node_modules/prompts/lib/elements/multiselect.js"(exports2, module2) {
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
        this.value.map((v3) => !v3.selected);
        this.cursor = 0;
        this.fire();
        this.render();
      }
      selected() {
        return this.value.filter((v3) => v3.selected);
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
        const v3 = this.value[this.cursor];
        if (v3.selected) {
          v3.selected = false;
          this.render();
        } else if (v3.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
          return this.bell();
        } else {
          v3.selected = true;
          this.render();
        }
      }
      toggleAll() {
        if (this.maxChoices !== void 0 || this.value[this.cursor].disabled) {
          return this.bell();
        }
        const newSelected = !this.value[this.cursor].selected;
        this.value.filter((v3) => !v3.disabled).forEach((v3) => v3.selected = newSelected);
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
      renderOption(cursor2, v3, i, arrowIndicator) {
        const prefix = (v3.selected ? color.green(figures.radioOn) : figures.radioOff) + " " + arrowIndicator + " ";
        let title, desc;
        if (v3.disabled) {
          title = cursor2 === i ? color.gray().underline(v3.title) : color.strikethrough().gray(v3.title);
        } else {
          title = cursor2 === i ? color.cyan().underline(v3.title) : v3.title;
          if (cursor2 === i && v3.description) {
            desc = ` - ${v3.description}`;
            if (prefix.length + title.length + desc.length >= this.out.columns || v3.description.split(/\r?\n/).length > 1) {
              desc = "\n" + wrap(v3.description, { margin: prefix.length, width: this.out.columns });
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
          return this.value.filter((e) => e.selected).map((v3) => v3.title).join(", ");
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

// ../../node_modules/prompts/lib/elements/autocomplete.js
var require_autocomplete2 = __commonJS({
  "../../node_modules/prompts/lib/elements/autocomplete.js"(exports2, module2) {
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
        const l = Math.max(suggestions.length - 1, 0);
        this.moveSelect(Math.min(l, this.select));
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
      renderOption(v3, hovered, isStart, isEnd) {
        let desc;
        let prefix = isStart ? figures.arrowUp : isEnd ? figures.arrowDown : " ";
        let title = hovered ? color.cyan().underline(v3.title) : v3.title;
        prefix = (hovered ? color.cyan(figures.pointer) + " " : "  ") + prefix;
        if (v3.description) {
          desc = ` - ${v3.description}`;
          if (prefix.length + title.length + desc.length >= this.out.columns || v3.description.split(/\r?\n/).length > 1) {
            desc = "\n" + wrap(v3.description, { margin: 3, width: this.out.columns });
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

// ../../node_modules/prompts/lib/elements/autocompleteMultiselect.js
var require_autocompleteMultiselect2 = __commonJS({
  "../../node_modules/prompts/lib/elements/autocompleteMultiselect.js"(exports2, module2) {
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
        this.filteredOptions = this.value.filter((v3) => {
          if (this.inputValue) {
            if (typeof v3.title === "string") {
              if (v3.title.toLowerCase().includes(this.inputValue.toLowerCase())) {
                return true;
              }
            }
            if (typeof v3.value === "string") {
              if (v3.value.toLowerCase().includes(this.inputValue.toLowerCase())) {
                return true;
              }
            }
            return false;
          }
          return true;
        });
        const newHighlightIndex = this.filteredOptions.findIndex((v3) => v3 === currentHighlight);
        this.cursor = newHighlightIndex < 0 ? 0 : newHighlightIndex;
        this.render();
      }
      handleSpaceToggle() {
        const v3 = this.filteredOptions[this.cursor];
        if (v3.selected) {
          v3.selected = false;
          this.render();
        } else if (v3.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
          return this.bell();
        } else {
          v3.selected = true;
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
      renderOption(cursor2, v3, i) {
        let title;
        if (v3.disabled) title = cursor2 === i ? color.gray().underline(v3.title) : color.strikethrough().gray(v3.title);
        else title = cursor2 === i ? color.cyan().underline(v3.title) : v3.title;
        return (v3.selected ? color.green(figures.radioOn) : figures.radioOff) + "  " + title;
      }
      renderDoneOrInstructions() {
        if (this.done) {
          return this.value.filter((e) => e.selected).map((v3) => v3.title).join(", ");
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

// ../../node_modules/prompts/lib/elements/confirm.js
var require_confirm2 = __commonJS({
  "../../node_modules/prompts/lib/elements/confirm.js"(exports2, module2) {
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

// ../../node_modules/prompts/lib/elements/index.js
var require_elements2 = __commonJS({
  "../../node_modules/prompts/lib/elements/index.js"(exports2, module2) {
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

// ../../node_modules/prompts/lib/prompts.js
var require_prompts2 = __commonJS({
  "../../node_modules/prompts/lib/prompts.js"(exports2) {
    "use strict";
    var $2 = exports2;
    var el = require_elements2();
    var noop = (v3) => v3;
    function toPrompt(type, args, opts = {}) {
      return new Promise((res, rej) => {
        const p = new el[type](args);
        const onAbort = opts.onAbort || noop;
        const onSubmit = opts.onSubmit || noop;
        const onExit = opts.onExit || noop;
        p.on("state", args.onState || noop);
        p.on("submit", (x2) => res(onSubmit(x2)));
        p.on("exit", (x2) => res(onExit(x2)));
        p.on("abort", (x2) => rej(onAbort(x2)));
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

// ../../node_modules/prompts/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/prompts/lib/index.js"(exports2, module2) {
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

// ../../node_modules/prompts/index.js
var require_prompts3 = __commonJS({
  "../../node_modules/prompts/index.js"(exports2, module2) {
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

// node_modules/commander/esm.mjs
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

// node_modules/chalk/source/vendor/ansi-styles/index.js
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

// node_modules/chalk/source/vendor/supports-color/index.js
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

// node_modules/chalk/source/utilities.js
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

// node_modules/chalk/source/index.js
var { stdout: stdoutColor, stderr: stderrColor } = supports_color_default;
var GENERATOR = /* @__PURE__ */ Symbol("GENERATOR");
var STYLER = /* @__PURE__ */ Symbol("STYLER");
var IS_EMPTY = /* @__PURE__ */ Symbol("IS_EMPTY");
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

// ../../node_modules/vue-fn/index-BcykEFlB.js
var t = {};
var n;
function f() {
  if (n) return t;
  n = 1;
  var o = (function() {
    function i() {
      var r = this;
      this.resolve = function(e) {
        r._resolve(e);
      }, this.reject = function(e) {
        r._reject(e);
      }, this._promise = new Promise(function(e, s) {
        r._resolve = e, r._reject = s;
      });
    }
    return Object.defineProperty(i.prototype, "promise", {
      get: function() {
        return this._promise;
      },
      enumerable: true,
      configurable: true
    }), i;
  })();
  return t.Deferred = o, t;
}
var u = f();

// ../../node_modules/vue-fn/domain-server/index.mjs
var import_reactivity = __toESM(require_reactivity(), 1);
function g(e = "") {
  const t2 = Date.now().toString(36), o = Math.random().toString(36).substring(2, 10);
  return `${e}${t2}${o}`;
}
function V(e) {
  const t2 = j(e);
  return (0, import_reactivity.shallowReadonly)({
    states: t2.states,
    commands: t2.commands,
    events: t2.events
  });
}
function j(e) {
  const t2 = e.states;
  for (const n2 of Object.keys(e.states))
    t2[n2] = (0, import_reactivity.readonly)(t2[n2]);
  const o = (0, import_reactivity.shallowReadonly)(e.states), i = (0, import_reactivity.readonly)(e.commands), r = {}, c = e.events;
  for (const n2 in e.events)
    r[n2] = c[n2].api;
  return (0, import_reactivity.shallowReadonly)({
    states: o,
    commands: i,
    events: (0, import_reactivity.shallowReadonly)(r),
    destroy: e.destroy
  });
}
function G(e) {
  const {
    resolve: t2,
    reject: o,
    promise: i
  } = new u.Deferred();
  let r = (0, import_reactivity.ref)(false);
  function c(a) {
    if (r.value === true)
      throw new Error("Agg already initialized");
    n2.push(a());
  }
  const n2 = [], s = e({
    onCreated(a) {
      Promise.resolve().then(a);
    },
    onBeforeInitialize: c,
    isInitialized: (0, import_reactivity.computed)(() => r.value),
    untilInitialized: i
  });
  setTimeout(
    () => Promise.all(n2).then(() => {
      t2(), r.value = true;
    }).catch((a) => {
      o(a);
    }),
    0
  );
  const u2 = s.states || {}, f2 = s.commands || {}, p = s.events || {};
  return {
    __id: g(),
    type: "Singleton",
    api: V({
      states: u2,
      commands: f2,
      events: p,
      destroy: () => {
      }
    }),
    isInitialized: (0, import_reactivity.computed)(() => r.value),
    async untilInitialized() {
      return await i.catch((a) => {
        throw new Error(`Failed to initialize Agg: ${a.message}
Stack : ${a.stack || "unkown"}`);
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
  "warning.needUpdate{workspaceVer}{scriptVer}": "Script version not compared.\nCurrent workspace version: {workspaceVer}\nCurrent script version:    {scriptVer}\nIf you want to use the local script version, please execute the update command in the workspace"
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
  "warning.needUpdate{workspaceVer}{scriptVer}": "\u811A\u672C\u7248\u672C\u4E0D\u5339\u914D\n\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u7248\u672C\uFF1A {workspaceVer}\n\u811A\u624B\u67B6\u7248\u672C\uFF1A       {scriptVer}\n\u5982\u679C\u8981\u4EE5\u672C\u5730\u811A\u624B\u67B6\u7248\u672C\u4E3A\u51C6\uFF0C\u8BF7\u6267\u884C\u5728\u5DE5\u4F5C\u76EE\u5F55\u6267\u884Cupdate\u547D\u4EE4\u8FDB\u884C\u66F4\u65B0"
};
var zh_CN_default = zhDict;

// src/domain/i18n-agg/index.ts
var agg = G(() => {
  const currentLang = (0, import_reactivity2.ref)("zh");
  const locale = (0, import_reactivity2.ref)(en_US_default);
  function t2(key, attr1, attr2) {
    let v3 = locale.value[key];
    if (!v3) {
      if (typeof attr1 === "string") {
        v3 = attr1;
      } else if (typeof attr2 === "string") {
        v3 = attr2;
      }
    }
    if (!v3) {
      log_default.printWarn(`i18n not found: ${key}`);
      return "";
    }
    if (typeof attr1 === "object") {
      v3 = v3.replace(/\{\s*([a-zA-z_]+)\s*\}/g, (_, name) => {
        return String(attr1[name]);
      });
    }
    return v3;
  }
  return {
    states: {
      currentLang
    },
    commands: {
      t: t2,
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
  "version": "0.3.3",
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
  "_id": "cli@0.3.3"
};

// src/domain/environment-agg/index.ts
var import_child_process2 = require("child_process");
var import_os = __toESM(require("os"), 1);
var import_path2 = __toESM(require("path"), 1);
var import_reactivity3 = __toESM(require_reactivity(), 1);

// src/domain/environment-agg/types.ts
var PackageManager = Object.freeze({
  PNPM: "pnpm",
  NPM: "npm",
  // YARN = 'yarn',
  BUN: "bun"
});
var OsType = Object.freeze({
  Windows: "windows",
  Linux: "linux",
  Mac: "mac",
  Undefined: "undefined"
});

// src/domain/environment-agg/web-root.ts
var import_child_process = require("child_process");
var import_fs = __toESM(require("fs"), 1);
var import_path = __toESM(require("path"), 1);
function findWebRoot(osType, packageManager) {
  let webRoot = import_path.default.resolve(import_path.default.dirname(process.argv[1]), "..").replace(/\\/g, "/");
  if (!verifyWebRoot(webRoot)) {
    if (packageManager === PackageManager.BUN) {
      webRoot = import_path.default.resolve(
        import_path.default.dirname(process.argv[1]),
        "..",
        "install",
        "global",
        "node_modules",
        "@ddd-tool",
        "domain-designer-cli"
      ).replace(/\\/g, "/");
    } else if (packageManager === PackageManager.PNPM || packageManager === PackageManager.NPM) {
      if (osType === "windows") {
        const result = (0, import_child_process.spawnSync)("where.exe domain-designer-cli", {
          encoding: "utf-8",
          shell: true
        });
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
        const result = (0, import_child_process.spawnSync)("whereis domain-designer-cli", {
          encoding: "utf-8",
          shell: true
        });
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
var agg2 = G(() => {
  const debugMode = (0, import_reactivity3.ref)(false);
  const osType = (0, import_reactivity3.ref)(
    (function() {
      const osType2 = import_os.default.type();
      if (osType2 === "Windows_NT") {
        return OsType.Windows;
      } else if (osType2 === "Linux") {
        return OsType.Linux;
      } else if (osType2 === "Darwin") {
        return OsType.Mac;
      }
      return OsType.Undefined;
    })()
  );
  const executable = import_path2.default.basename(process.argv[0]);
  const packageManager = (0, import_reactivity3.ref)(PackageManager.NPM);
  const execPath = process.execPath.toLowerCase();
  const execDir = import_path2.default.dirname(process.execPath).toLowerCase();
  const isBun = executable.includes("bun") || execPath.includes("bun") || execDir.includes(".bun") || process.argv[1] && process.argv[1].replace(/\\/g, "/").includes("/.bun/");
  if (isBun) {
    packageManager.value = PackageManager.BUN;
  } else if (executable.includes("node")) {
    if (checkPnpm()) {
      packageManager.value = PackageManager.PNPM;
    } else {
      packageManager.value = PackageManager.NPM;
    }
  } else {
    throw new Error("unknown package manager");
  }
  const osLanguage = (0, import_reactivity3.ref)(
    (function() {
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
    })()
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
      setDebugMode(v3) {
        debugMode.value = v3;
      }
    }
  };
});
function useEnvironmentAgg() {
  return agg2.api;
}

// src/domain/cli-args-agg/types.ts
var Subcommand = Object.freeze({
  Init: "init",
  UpdateWorkspace: "updateWorkspace",
  RunWeb: "runWeb",
  Info: "info",
  GenCode: "GenCode",
  None: "none"
});
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
    params.currentCommand.value = Subcommand.Init;
    if (options.source) {
      params.args.source = import_path4.default.resolve(options.source);
    }
  }).addHelpText("before", "Initialize the workspace.\n").addHelpText("before", "\u521D\u59CB\u5316\u4E00\u4E2A\u5DE5\u4F5C\u7A7A\u95F4\n");
}
async function requireInitCommandArgs(params) {
  params.currentCommand.value = Subcommand.Init;
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
  copyFolderRecursive(import_path4.default.join(environmentAgg.states.webRoot.value, "templates"), distDir, {
    ignore: copyIgnores
  });
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
    params.currentCommand.value = Subcommand.Info;
  }).addHelpText("before", "Print info.\n").addHelpText("before", "\u6253\u5370\u4FE1\u606F\n");
}
async function requireInfoCommandArgs(params) {
  params.currentCommand.value = Subcommand.Info;
}
async function execute2() {
  log_default.printInfo("================ Print info: Starting... ================");
  (0, import_child_process3.spawnSync)('echo "print domain-designer info"', {
    encoding: "utf-8",
    stdio: "inherit",
    shell: true
  });
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
    params.currentCommand.value = Subcommand.UpdateWorkspace;
    if (options.source) {
      params.args.source = import_path5.default.resolve(options.source);
    }
  }).addHelpText("before", "Update the workspace.\n").addHelpText("before", "\u66F4\u65B0\u5DE5\u4F5C\u7A7A\u95F4\n");
}
async function requireUpdateWorkspaceCommandArgs(params) {
  params.currentCommand.value = Subcommand.UpdateWorkspace;
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
    params.currentCommand.value = Subcommand.RunWeb;
    if (options.source) {
      params.args.source = options.source;
    }
  }).addHelpText("before", "Run web server.\n").addHelpText("before", "\u8FD0\u884C web \u670D\u52A1\n");
}
async function requireRunWebCommandArgs(params) {
  params.currentCommand.value = Subcommand.RunWeb;
}
async function execute4(args) {
  const webRoot = environmentAgg4.states.webRoot.value;
  log_default.printDebug("webRoot\u8DEF\u5F84", webRoot);
  const packageManager = environmentAgg4.states.packageManager.value;
  log_default.printInfo("================ \u5B89\u88C5\u8FD0\u884C\u4F9D\u8D56: Starting... ================");
  if (packageManager === PackageManager.BUN) {
    const cmd = `bun i --cwd "${webRoot}"`;
    log_default.printDebug(cmd);
    (0, import_child_process4.spawnSync)(cmd, { encoding: "utf-8", stdio: "inherit", shell: true });
  } else if (packageManager === PackageManager.PNPM) {
    const cmd = `pnpm i --prefix "${webRoot}"`;
    log_default.printDebug(cmd);
    (0, import_child_process4.spawnSync)(cmd, { encoding: "utf-8", stdio: "inherit", shell: true });
  } else if (packageManager === PackageManager.NPM) {
    const cmd = `npm i --prefix "${webRoot}"`;
    log_default.printDebug(cmd);
    (0, import_child_process4.spawnSync)(cmd);
  } else {
    isNever(packageManager);
  }
  log_default.printSuccess("================ \u5B89\u88C5\u8FD0\u884C\u4F9D\u8D56: Succeeded ================");
  log_default.printInfo("================ \u88C5\u914D\u4EE3\u7801\u4E0E\u73AF\u5883\u53D8\u91CF: Starting... ================");
  configSource(webRoot, args.source);
  configEnvironment(webRoot, args.source);
  log_default.printSuccess("================ \u88C5\u914D\u4EE3\u7801\u4E0E\u73AF\u5883\u53D8\u91CF: Succeeded ================");
  log_default.printInfo("================ \u8FD0\u884CWeb\u670D\u52A1: Starting... ================");
  if (environmentAgg4.states.osType.value === "windows") {
    process.stdin.on("data", () => {
    });
  }
  const worker = new import_worker_threads.Worker(`${webRoot}/scripts/ai-assist-worker.cjs`);
  worker.on("online", () => {
    log_default.printDebug("worker online");
  });
  async function onExit() {
    await worker.terminate();
  }
  process.on("SIGINT", onExit);
  process.on("SIGTERM", onExit);
  process.on("SIGQUIT", onExit);
  console.debug("worker threadId", worker.threadId);
  process.nextTick(() => {
    if (packageManager === PackageManager.BUN) {
      const cmd = `bun --cwd "${webRoot}" dev`;
      log_default.printDebug(cmd);
      (0, import_child_process4.spawnSync)(cmd, {
        encoding: "utf-8",
        stdio: "inherit",
        shell: true
      });
    } else if (packageManager === PackageManager.PNPM) {
      const cmd = `pnpm --prefix "${webRoot}" dev`;
      log_default.printDebug(cmd);
      (0, import_child_process4.spawnSync)(cmd, {
        encoding: "utf-8",
        stdio: "inherit",
        shell: true
      });
    } else if (packageManager === PackageManager.NPM) {
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
var tsSuffixMatcher = new RegExp(/(.+)\.ts$/);
var detailSuffix = "-detail";
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
      source_default.bgYellow(
        `${environmentAgg4.states.packageManager.value === "bun" ? "bunx " : ""}domain-designer-cli update`
      )
    );
  }
  const designs = [];
  let i = 0;
  import_fs5.default.readdirSync(source).forEach((file) => {
    if (tsSuffixMatcher.test(file)) {
      const name = tsSuffixMatcher.exec(file)[1];
      console.debug(`Detected design: ${file}`);
      designs.push({
        name,
        identifier: `__d${++i}`,
        importCode: `(await import('${import_path6.default.resolve(source, name).replace(/\\/g, "/")}')).default`
      });
    }
  });
  const mergedTsCode = `import { type DomainDesigner, isDomainDesigner } from '@ddd-tool/domain-designer-core'

${designs.map((d) => {
    return `const ${d.identifier} = ${d.importCode}`;
  }).join("\n")}

const data: Record<string, DomainDesigner> = {}

${designs.map((d) => {
    return `if (isDomainDesigner(${d.identifier})) {
  data['${d.name}'] = ${d.identifier}
}`;
  }).join("\n")}

export default data
`;
  import_fs5.default.writeFileSync(
    import_path6.default.join(webRoot, "packages", "playground", "src", "views", "index.ts"),
    mergedTsCode,
    {
      encoding: "utf-8"
    }
  );
}
function configEnvironment(webRoot, workspacePath) {
  const result = {};
  import_fs5.default.readdirSync(workspacePath).forEach((file) => {
    if (tsSuffixMatcher.test(file)) {
      const name = tsSuffixMatcher.exec(file)[1];
      const paths = [import_path6.default.resolve(workspacePath, file)];
      const detailDir = import_path6.default.join(workspacePath, name + detailSuffix);
      if (import_fs5.default.existsSync(detailDir) && import_fs5.default.statSync(detailDir).isDirectory()) {
        findFilesRecursive(detailDir, tsSuffixMatcher, paths);
      }
      result[name] = paths;
    }
  });
  const envFilePath = import_path6.default.join(webRoot, "packages", "playground", ".env");
  import_fs5.default.writeFileSync(envFilePath, `VITE_DESIGNER_PATHS=${JSON.stringify(result)}`, {
    encoding: "utf-8"
  });
}
function findFilesRecursive(dir, filter, result = []) {
  import_fs5.default.readdirSync(dir).forEach((file) => {
    const filePath = import_path6.default.join(dir, file);
    if (import_fs5.default.statSync(filePath).isDirectory()) {
      findFilesRecursive(filePath, filter, result);
    } else if (filter.test(filePath)) {
      result.push(filePath);
    }
  });
  return result;
}

// src/domain/cli-args-agg/cmd-gen-code/index.ts
var import_fs6 = __toESM(require("fs"), 1);
var import_path7 = __toESM(require("path"), 1);
var import_child_process5 = require("child_process");

// ../core/dist/index.js
var No = Object.freeze({
  Note: "Note",
  Info: "Info",
  Actor: "Actor",
  Command: "Command",
  FacadeCommand: "FacadeCommand",
  Event: "Event",
  Agg: "Agg",
  System: "System",
  Policy: "Policy",
  Service: "Service",
  ReadModel: "ReadModel"
});
function Po(e) {
  const t2 = e;
  return t2 && typeof t2.actor == "function" && typeof t2.startWorkflow == "function" && typeof t2.defineUserStory == "function" && typeof t2._getContext == "function" && typeof t2.note == "function" && typeof t2.info == "object" && typeof t2.command == "function" && typeof t2.facadeCmd == "function" && typeof t2.agg == "function" && typeof t2.event == "function" && typeof t2.system == "function" && typeof t2.policy == "function" && typeof t2.service == "function" && typeof t2.readModel == "function";
}
// @__NO_SIDE_EFFECTS__
function Pt(e) {
  const t2 = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t2[r] = 1;
  return (r) => r in t2;
}
var M = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
var Fo = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [];
var X = () => {
};
var yr = () => false;
var Nr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
var wr = (e) => e.startsWith("onUpdate:");
var I2 = Object.assign;
var Sr = (e, t2) => {
  const r = e.indexOf(t2);
  r > -1 && e.splice(r, 1);
};
var Or = Object.prototype.hasOwnProperty;
var S2 = (e, t2) => Or.call(e, t2);
var N2 = Array.isArray;
var ae = (e) => ke(e) === "[object Map]";
var xr = (e) => ke(e) === "[object Set]";
var x = (e) => typeof e == "function";
var U = (e) => typeof e == "string";
var we = (e) => typeof e == "symbol";
var A = (e) => e !== null && typeof e == "object";
var Dr = (e) => (A(e) || x(e)) && x(e.then) && x(e.catch);
var Tr = Object.prototype.toString;
var ke = (e) => Tr.call(e);
var Ft = (e) => ke(e).slice(8, -1);
var Cr = (e) => ke(e) === "[object Object]";
var at = (e) => U(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
var Be = (e) => {
  const t2 = /* @__PURE__ */ Object.create(null);
  return ((r) => t2[r] || (t2[r] = e(r)));
};
var Rr = /-\w/g;
var Mo = Be((e) => e.replace(Rr, (t2) => t2.slice(1).toUpperCase()));
var Ar = /\B([A-Z])/g;
var jo = Be((e) => e.replace(Ar, "-$1").toLowerCase());
var Mt = Be((e) => e.charAt(0).toUpperCase() + e.slice(1));
var Vr = Be((e) => e ? `on${Mt(e)}` : "");
var k = (e, t2) => !Object.is(e, t2);
var Ir = (e, t2, r, o = false) => {
  Object.defineProperty(e, t2, {
    configurable: true,
    enumerable: false,
    writable: o,
    value: r
  });
};
var Nt;
var Je = () => Nt || (Nt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ut(e) {
  if (N2(e)) {
    const t2 = {};
    for (let r = 0; r < e.length; r++) {
      const o = e[r], n2 = U(o) ? jr(o) : ut(o);
      if (n2) for (const s in n2) t2[s] = n2[s];
    }
    return t2;
  } else if (U(e) || A(e)) return e;
}
var Pr = /;(?![^(]*\))/g;
var Fr = /:([^]+)/;
var Mr = /\/\*[^]*?\*\//g;
function jr(e) {
  const t2 = {};
  return e.replace(Mr, "").split(Pr).forEach((r) => {
    if (r) {
      const o = r.split(Fr);
      o.length > 1 && (t2[o[0].trim()] = o[1].trim());
    }
  }), t2;
}
function lt(e) {
  let t2 = "";
  if (U(e)) t2 = e;
  else if (N2(e)) for (let r = 0; r < e.length; r++) {
    const o = lt(e[r]);
    o && (t2 += o + " ");
  }
  else if (A(e))
    for (const r in e) e[r] && (t2 += r + " ");
  return t2.trim();
}
var $r = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
var $o = /* @__PURE__ */ Pt($r + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
function B(e, ...t2) {
}
var Re;
function Ur() {
  return Re;
}
var b;
var ze = /* @__PURE__ */ new WeakSet();
var Hr = class {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Re && (Re.active ? Re.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ze.has(this) && (ze.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Lr(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, wt(this), $t4(this);
    const e = b, t2 = $;
    b = this, $ = true;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && b !== this && B("Active effect was not restored correctly - this is likely a Vue internal bug."), Ut(this), b = e, $ = t2, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep) pt(e);
      this.deps = this.depsTail = void 0, wt(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ze.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    rt(this) && this.run();
  }
  get dirty() {
    return rt(this);
  }
};
var jt = 0;
var ve;
var be;
function Lr(e, t2 = false) {
  if (e.flags |= 8, t2) {
    e.next = be, be = e;
    return;
  }
  e.next = ve, ve = e;
}
function ft() {
  jt++;
}
function dt() {
  if (--jt > 0) return;
  if (be) {
    let t2 = be;
    for (be = void 0; t2; ) {
      const r = t2.next;
      t2.next = void 0, t2.flags &= -9, t2 = r;
    }
  }
  let e;
  for (; ve; ) {
    let t2 = ve;
    for (ve = void 0; t2; ) {
      const r = t2.next;
      if (t2.next = void 0, t2.flags &= -9, t2.flags & 1) try {
        t2.trigger();
      } catch (o) {
        e || (e = o);
      }
      t2 = r;
    }
  }
  if (e) throw e;
}
function $t4(e) {
  for (let t2 = e.deps; t2; t2 = t2.nextDep)
    t2.version = -1, t2.prevActiveLink = t2.dep.activeLink, t2.dep.activeLink = t2;
}
function Ut(e) {
  let t2, r = e.depsTail, o = r;
  for (; o; ) {
    const n2 = o.prevDep;
    o.version === -1 ? (o === r && (r = n2), pt(o), Kr(o)) : t2 = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = n2;
  }
  e.deps = t2, e.depsTail = r;
}
function rt(e) {
  for (let t2 = e.deps; t2; t2 = t2.nextDep) if (t2.dep.version !== t2.version || t2.dep.computed && (Wr(t2.dep.computed) || t2.dep.version !== t2.version)) return true;
  return !!e._dirty;
}
function Wr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ve) || (e.globalVersion = Ve, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !rt(e)))) return;
  e.flags |= 2;
  const t2 = e.dep, r = b, o = $;
  b = e, $ = true;
  try {
    $t4(e);
    const n2 = e.fn(e._value);
    (t2.version === 0 || k(n2, e._value)) && (e.flags |= 128, e._value = n2, t2.version++);
  } catch (n2) {
    throw t2.version++, n2;
  } finally {
    b = r, $ = o, Ut(e), e.flags &= -3;
  }
}
function pt(e, t2 = false) {
  const { dep: r, prevSub: o, nextSub: n2 } = e;
  if (o && (o.nextSub = n2, e.prevSub = void 0), n2 && (n2.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && r.subsHead === e && (r.subsHead = n2), r.subs === e && (r.subs = o, !o && r.computed)) {
    r.computed.flags &= -5;
    for (let s = r.computed.deps; s; s = s.nextDep) pt(s, true);
  }
  !t2 && !--r.sc && r.map && r.map.delete(r.key);
}
function Kr(e) {
  const { prevDep: t2, nextDep: r } = e;
  t2 && (t2.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t2, e.nextDep = void 0);
}
var $ = true;
var Ht = [];
function le() {
  Ht.push($), $ = false;
}
function fe() {
  const e = Ht.pop();
  $ = e === void 0 ? true : e;
}
function wt(e) {
  const { cleanup: t2 } = e;
  if (e.cleanup = void 0, t2) {
    const r = b;
    b = void 0;
    try {
      t2();
    } finally {
      b = r;
    }
  }
}
var Ve = 0;
var kr = class {
  constructor(e, t2) {
    this.sub = e, this.dep = t2, this.version = t2.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
};
var Br = class {
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(e) {
    if (!b || !$ || b === this.computed) return;
    let t2 = this.activeLink;
    if (t2 === void 0 || t2.sub !== b)
      t2 = this.activeLink = new kr(b, this), b.deps ? (t2.prevDep = b.depsTail, b.depsTail.nextDep = t2, b.depsTail = t2) : b.deps = b.depsTail = t2, Lt(t2);
    else if (t2.version === -1 && (t2.version = this.version, t2.nextDep)) {
      const r = t2.nextDep;
      r.prevDep = t2.prevDep, t2.prevDep && (t2.prevDep.nextDep = r), t2.prevDep = b.depsTail, t2.nextDep = void 0, b.depsTail.nextDep = t2, b.depsTail = t2, b.deps === t2 && (b.deps = r);
    }
    return process.env.NODE_ENV !== "production" && b.onTrack && b.onTrack(I2({ effect: b }, e)), t2;
  }
  trigger(e) {
    this.version++, Ve++, this.notify(e);
  }
  notify(e) {
    ft();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let t2 = this.subsHead; t2; t2 = t2.nextSub) t2.sub.onTrigger && !(t2.sub.flags & 8) && t2.sub.onTrigger(I2({ effect: t2.sub }, e));
      for (let t2 = this.subs; t2; t2 = t2.prevSub) t2.sub.notify() && t2.sub.dep.notify();
    } finally {
      dt();
    }
  }
};
function Lt(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t2 = e.dep.computed;
    if (t2 && !e.dep.subs) {
      t2.flags |= 20;
      for (let o = t2.deps; o; o = o.nextDep) Lt(o);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
var nt = /* @__PURE__ */ new WeakMap();
var ee = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "Object iterate" : "");
var ot = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "Map keys iterate" : "");
var Ee = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "Array iterate" : "");
function O(e, t2, r) {
  if ($ && b) {
    let o = nt.get(e);
    o || nt.set(e, o = /* @__PURE__ */ new Map());
    let n2 = o.get(r);
    n2 || (o.set(r, n2 = new Br()), n2.map = o, n2.key = r), process.env.NODE_ENV !== "production" ? n2.track({
      target: e,
      type: t2,
      key: r
    }) : n2.track();
  }
}
function G2(e, t2, r, o, n2, s) {
  const i = nt.get(e);
  if (!i) {
    Ve++;
    return;
  }
  const c = (l) => {
    l && (process.env.NODE_ENV !== "production" ? l.trigger({
      target: e,
      type: t2,
      key: r,
      newValue: o,
      oldValue: n2,
      oldTarget: s
    }) : l.trigger());
  };
  if (ft(), t2 === "clear") i.forEach(c);
  else {
    const l = N2(e), p = l && at(r);
    if (l && r === "length") {
      const u2 = Number(o);
      i.forEach((a, f2) => {
        (f2 === "length" || f2 === Ee || !we(f2) && f2 >= u2) && c(a);
      });
    } else
      switch ((r !== void 0 || i.has(void 0)) && c(i.get(r)), p && c(i.get(Ee)), t2) {
        case "add":
          l ? p && c(i.get("length")) : (c(i.get(ee)), ae(e) && c(i.get(ot)));
          break;
        case "delete":
          l || (c(i.get(ee)), ae(e) && c(i.get(ot)));
          break;
        case "set":
          ae(e) && c(i.get(ee));
          break;
      }
  }
  dt();
}
function oe(e) {
  const t2 = /* @__PURE__ */ v2(e);
  return t2 === e ? t2 : (O(t2, "iterate", Ee), /* @__PURE__ */ P2(e) ? t2 : t2.map(ne));
}
function _t(e) {
  return O(e = /* @__PURE__ */ v2(e), "iterate", Ee), e;
}
function H(e, t2) {
  return /* @__PURE__ */ J(e) ? ye(/* @__PURE__ */ te(e) ? ne(t2) : t2) : ne(t2);
}
var Jr = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ye(this, Symbol.iterator, (e) => H(this, e));
  },
  concat(...e) {
    return oe(this).concat(...e.map((t2) => N2(t2) ? oe(t2) : t2));
  },
  entries() {
    return Ye(this, "entries", (e) => (e[1] = H(this, e[1]), e));
  },
  every(e, t2) {
    return W(this, "every", e, t2, void 0, arguments);
  },
  filter(e, t2) {
    return W(this, "filter", e, t2, (r) => r.map((o) => H(this, o)), arguments);
  },
  find(e, t2) {
    return W(this, "find", e, t2, (r) => H(this, r), arguments);
  },
  findIndex(e, t2) {
    return W(this, "findIndex", e, t2, void 0, arguments);
  },
  findLast(e, t2) {
    return W(this, "findLast", e, t2, (r) => H(this, r), arguments);
  },
  findLastIndex(e, t2) {
    return W(this, "findLastIndex", e, t2, void 0, arguments);
  },
  forEach(e, t2) {
    return W(this, "forEach", e, t2, void 0, arguments);
  },
  includes(...e) {
    return Ge(this, "includes", e);
  },
  indexOf(...e) {
    return Ge(this, "indexOf", e);
  },
  join(e) {
    return oe(this).join(e);
  },
  lastIndexOf(...e) {
    return Ge(this, "lastIndexOf", e);
  },
  map(e, t2) {
    return W(this, "map", e, t2, void 0, arguments);
  },
  pop() {
    return he(this, "pop");
  },
  push(...e) {
    return he(this, "push", e);
  },
  reduce(e, ...t2) {
    return St(this, "reduce", e, t2);
  },
  reduceRight(e, ...t2) {
    return St(this, "reduceRight", e, t2);
  },
  shift() {
    return he(this, "shift");
  },
  some(e, t2) {
    return W(this, "some", e, t2, void 0, arguments);
  },
  splice(...e) {
    return he(this, "splice", e);
  },
  toReversed() {
    return oe(this).toReversed();
  },
  toSorted(e) {
    return oe(this).toSorted(e);
  },
  toSpliced(...e) {
    return oe(this).toSpliced(...e);
  },
  unshift(...e) {
    return he(this, "unshift", e);
  },
  values() {
    return Ye(this, "values", (e) => H(this, e));
  }
};
function Ye(e, t2, r) {
  const o = _t(e), n2 = o[t2]();
  return o !== e && !/* @__PURE__ */ P2(e) && (n2._next = n2.next, n2.next = () => {
    const s = n2._next();
    return s.done || (s.value = r(s.value)), s;
  }), n2;
}
var qr = Array.prototype;
function W(e, t2, r, o, n2, s) {
  const i = _t(e), c = i !== e && !/* @__PURE__ */ P2(e), l = i[t2];
  if (l !== qr[t2]) {
    const a = l.apply(e, s);
    return c ? ne(a) : a;
  }
  let p = r;
  i !== e && (c ? p = function(a, f2) {
    return r.call(this, H(e, a), f2, e);
  } : r.length > 2 && (p = function(a, f2) {
    return r.call(this, a, f2, e);
  }));
  const u2 = l.call(i, p, o);
  return c && n2 ? n2(u2) : u2;
}
function St(e, t2, r, o) {
  const n2 = _t(e), s = n2 !== e && !/* @__PURE__ */ P2(e);
  let i = r, c = false;
  n2 !== e && (s ? (c = o.length === 0, i = function(p, u2, a) {
    return c && (c = false, p = H(e, p)), r.call(this, p, H(e, u2), a, e);
  }) : r.length > 3 && (i = function(p, u2, a) {
    return r.call(this, p, u2, a, e);
  }));
  const l = n2[t2](i, ...o);
  return c ? H(e, l) : l;
}
function Ge(e, t2, r) {
  const o = /* @__PURE__ */ v2(e);
  O(o, "iterate", Ee);
  const n2 = o[t2](...r);
  return (n2 === -1 || n2 === false) && /* @__PURE__ */ Pe(r[0]) ? (r[0] = /* @__PURE__ */ v2(r[0]), o[t2](...r)) : n2;
}
function he(e, t2, r = []) {
  le(), ft();
  const o = (/* @__PURE__ */ v2(e))[t2].apply(e, r);
  return dt(), fe(), o;
}
var zr = /* @__PURE__ */ Pt("__proto__,__v_isRef,__isVue");
var Wt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(we));
function Yr(e) {
  we(e) || (e = String(e));
  const t2 = /* @__PURE__ */ v2(this);
  return O(t2, "has", e), t2.hasOwnProperty(e);
}
var Kt = class {
  constructor(e = false, t2 = false) {
    this._isReadonly = e, this._isShallow = t2;
  }
  get(e, t2, r) {
    if (t2 === "__v_skip") return e.__v_skip;
    const o = this._isReadonly, n2 = this._isShallow;
    if (t2 === "__v_isReactive") return !o;
    if (t2 === "__v_isReadonly") return o;
    if (t2 === "__v_isShallow") return n2;
    if (t2 === "__v_raw")
      return r === (o ? n2 ? qt : Jt : n2 ? sn : Bt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const s = N2(e);
    if (!o) {
      let c;
      if (s && (c = Jr[t2])) return c;
      if (t2 === "hasOwnProperty") return Yr;
    }
    const i = Reflect.get(e, t2, /* @__PURE__ */ V2(e) ? e : r);
    if ((we(t2) ? Wt.has(t2) : zr(t2)) || (o || O(e, "get", t2), n2)) return i;
    if (/* @__PURE__ */ V2(i)) {
      const c = s && at(t2) ? i : i.value;
      return o && A(c) ? /* @__PURE__ */ Ie(c) : c;
    }
    return A(i) ? o ? /* @__PURE__ */ Ie(i) : /* @__PURE__ */ zt(i) : i;
  }
};
var Gr = class extends Kt {
  constructor(e = false) {
    super(false, e);
  }
  set(e, t2, r, o) {
    let n2 = e[t2];
    const s = N2(e) && at(t2);
    if (!this._isShallow) {
      const l = /* @__PURE__ */ J(n2);
      if (!/* @__PURE__ */ P2(r) && !/* @__PURE__ */ J(r) && (n2 = /* @__PURE__ */ v2(n2), r = /* @__PURE__ */ v2(r)), !s && /* @__PURE__ */ V2(n2) && !/* @__PURE__ */ V2(r)) return l ? (process.env.NODE_ENV !== "production" && B(`Set operation on key "${String(t2)}" failed: target is readonly.`, e[t2]), true) : (n2.value = r, true);
    }
    const i = s ? Number(t2) < e.length : S2(e, t2), c = Reflect.set(e, t2, r, /* @__PURE__ */ V2(e) ? e : o);
    return e === /* @__PURE__ */ v2(o) && c && (i ? k(r, n2) && G2(e, "set", t2, r, n2) : G2(e, "add", t2, r)), c;
  }
  deleteProperty(e, t2) {
    const r = S2(e, t2), o = e[t2], n2 = Reflect.deleteProperty(e, t2);
    return n2 && r && G2(e, "delete", t2, void 0, o), n2;
  }
  has(e, t2) {
    const r = Reflect.has(e, t2);
    return (!we(t2) || !Wt.has(t2)) && O(e, "has", t2), r;
  }
  ownKeys(e) {
    return O(e, "iterate", N2(e) ? "length" : ee), Reflect.ownKeys(e);
  }
};
var kt = class extends Kt {
  constructor(e = false) {
    super(true, e);
  }
  set(e, t2) {
    return process.env.NODE_ENV !== "production" && B(`Set operation on key "${String(t2)}" failed: target is readonly.`, e), true;
  }
  deleteProperty(e, t2) {
    return process.env.NODE_ENV !== "production" && B(`Delete operation on key "${String(t2)}" failed: target is readonly.`, e), true;
  }
};
var Qr = /* @__PURE__ */ new Gr();
var Zr = /* @__PURE__ */ new kt();
var Xr = /* @__PURE__ */ new kt(true);
var st = (e) => e;
var Oe = (e) => Reflect.getPrototypeOf(e);
function en(e, t2, r) {
  return function(...o) {
    const n2 = this.__v_raw, s = /* @__PURE__ */ v2(n2), i = ae(s), c = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, p = n2[e](...o), u2 = r ? st : t2 ? ye : ne;
    return !t2 && O(s, "iterate", l ? ot : ee), I2(Object.create(p), { next() {
      const { value: a, done: f2 } = p.next();
      return f2 ? {
        value: a,
        done: f2
      } : {
        value: c ? [u2(a[0]), u2(a[1])] : u2(a),
        done: f2
      };
    } });
  };
}
function xe(e) {
  return function(...t2) {
    if (process.env.NODE_ENV !== "production") {
      const r = t2[0] ? `on key "${t2[0]}" ` : "";
      B(`${Mt(e)} operation ${r}failed: target is readonly.`, /* @__PURE__ */ v2(this));
    }
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function tn(e, t2) {
  const r = {
    get(o) {
      const n2 = this.__v_raw, s = /* @__PURE__ */ v2(n2), i = /* @__PURE__ */ v2(o);
      e || (k(o, i) && O(s, "get", o), O(s, "get", i));
      const { has: c } = Oe(s), l = t2 ? st : e ? ye : ne;
      if (c.call(s, o)) return l(n2.get(o));
      if (c.call(s, i)) return l(n2.get(i));
      n2 !== s && n2.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && O(/* @__PURE__ */ v2(o), "iterate", ee), o.size;
    },
    has(o) {
      const n2 = this.__v_raw, s = /* @__PURE__ */ v2(n2), i = /* @__PURE__ */ v2(o);
      return e || (k(o, i) && O(s, "has", o), O(s, "has", i)), o === i ? n2.has(o) : n2.has(o) || n2.has(i);
    },
    forEach(o, n2) {
      const s = this, i = s.__v_raw, c = /* @__PURE__ */ v2(i), l = t2 ? st : e ? ye : ne;
      return !e && O(c, "iterate", ee), i.forEach((p, u2) => o.call(n2, l(p), l(u2), s));
    }
  };
  return I2(r, e ? {
    add: xe("add"),
    set: xe("set"),
    delete: xe("delete"),
    clear: xe("clear")
  } : {
    add(o) {
      const n2 = /* @__PURE__ */ v2(this), s = Oe(n2), i = /* @__PURE__ */ v2(o), c = !t2 && !/* @__PURE__ */ P2(o) && !/* @__PURE__ */ J(o) ? i : o;
      return s.has.call(n2, c) || k(o, c) && s.has.call(n2, o) || k(i, c) && s.has.call(n2, i) || (n2.add(c), G2(n2, "add", c, c)), this;
    },
    set(o, n2) {
      !t2 && !/* @__PURE__ */ P2(n2) && !/* @__PURE__ */ J(n2) && (n2 = /* @__PURE__ */ v2(n2));
      const s = /* @__PURE__ */ v2(this), { has: i, get: c } = Oe(s);
      let l = i.call(s, o);
      l ? process.env.NODE_ENV !== "production" && Ot(s, i, o) : (o = /* @__PURE__ */ v2(o), l = i.call(s, o));
      const p = c.call(s, o);
      return s.set(o, n2), l ? k(n2, p) && G2(s, "set", o, n2, p) : G2(s, "add", o, n2), this;
    },
    delete(o) {
      const n2 = /* @__PURE__ */ v2(this), { has: s, get: i } = Oe(n2);
      let c = s.call(n2, o);
      c ? process.env.NODE_ENV !== "production" && Ot(n2, s, o) : (o = /* @__PURE__ */ v2(o), c = s.call(n2, o));
      const l = i ? i.call(n2, o) : void 0, p = n2.delete(o);
      return c && G2(n2, "delete", o, void 0, l), p;
    },
    clear() {
      const o = /* @__PURE__ */ v2(this), n2 = o.size !== 0, s = process.env.NODE_ENV !== "production" ? ae(o) ? new Map(o) : new Set(o) : void 0, i = o.clear();
      return n2 && G2(o, "clear", void 0, void 0, s), i;
    }
  }), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    r[o] = en(o, e, t2);
  }), r;
}
function ht(e, t2) {
  const r = tn(e, t2);
  return (o, n2, s) => n2 === "__v_isReactive" ? !e : n2 === "__v_isReadonly" ? e : n2 === "__v_raw" ? o : Reflect.get(S2(r, n2) && n2 in o ? r : o, n2, s);
}
var rn = { get: /* @__PURE__ */ ht(false, false) };
var nn = { get: /* @__PURE__ */ ht(true, false) };
var on = { get: /* @__PURE__ */ ht(true, true) };
function Ot(e, t2, r) {
  const o = /* @__PURE__ */ v2(r);
  if (o !== r && t2.call(e, o)) {
    const n2 = Ft(e);
    B(`Reactive ${n2} contains both the raw and reactive versions of the same object${n2 === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
var Bt = /* @__PURE__ */ new WeakMap();
var sn = /* @__PURE__ */ new WeakMap();
var Jt = /* @__PURE__ */ new WeakMap();
var qt = /* @__PURE__ */ new WeakMap();
function cn(e) {
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
// @__NO_SIDE_EFFECTS__
function zt(e) {
  return /* @__PURE__ */ J(e) ? e : gt(e, false, Qr, rn, Bt);
}
// @__NO_SIDE_EFFECTS__
function Ie(e) {
  return gt(e, true, Zr, nn, Jt);
}
// @__NO_SIDE_EFFECTS__
function De(e) {
  return gt(e, true, Xr, on, qt);
}
function gt(e, t2, r, o, n2) {
  if (!A(e))
    return process.env.NODE_ENV !== "production" && B(`value cannot be made ${t2 ? "readonly" : "reactive"}: ${String(e)}`), e;
  if (e.__v_raw && !(t2 && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
  const s = n2.get(e);
  if (s) return s;
  const i = cn(Ft(e));
  if (i === 0) return e;
  const c = new Proxy(e, i === 2 ? o : r);
  return n2.set(e, c), c;
}
// @__NO_SIDE_EFFECTS__
function te(e) {
  return /* @__PURE__ */ J(e) ? /* @__PURE__ */ te(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function J(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function P2(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  return e ? !!e.__v_raw : false;
}
// @__NO_SIDE_EFFECTS__
function v2(e) {
  const t2 = e && e.__v_raw;
  return t2 ? /* @__PURE__ */ v2(t2) : e;
}
function an(e) {
  return !S2(e, "__v_skip") && Object.isExtensible(e) && Ir(e, "__v_skip", true), e;
}
var ne = (e) => A(e) ? /* @__PURE__ */ zt(e) : e;
var ye = (e) => A(e) ? /* @__PURE__ */ Ie(e) : e;
// @__NO_SIDE_EFFECTS__
function V2(e) {
  return e ? e.__v_isRef === true : false;
}
function un(e) {
  return /* @__PURE__ */ V2(e) ? e.value : e;
}
var ln = {
  get: (e, t2, r) => t2 === "__v_raw" ? e : un(Reflect.get(e, t2, r)),
  set: (e, t2, r, o) => {
    const n2 = e[t2];
    return /* @__PURE__ */ V2(n2) && !/* @__PURE__ */ V2(r) ? (n2.value = r, true) : Reflect.set(e, t2, r, o);
  }
};
function fn(e) {
  return /* @__PURE__ */ te(e) ? e : new Proxy(e, ln);
}
var Te = {};
var Fe = /* @__PURE__ */ new WeakMap();
var Z = void 0;
function dn(e, t2 = false, r = Z) {
  if (r) {
    let o = Fe.get(r);
    o || Fe.set(r, o = []), o.push(e);
  } else process.env.NODE_ENV !== "production" && !t2 && B("onWatcherCleanup() was called when there was no active watcher to associate with.");
}
function pn(e, t2, r = M) {
  const { immediate: o, deep: n2, once: s, scheduler: i, augmentJob: c, call: l } = r, p = (h2) => {
    (r.onWarn || B)("Invalid watch source: ", h2, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, u2 = (h2) => n2 ? h2 : /* @__PURE__ */ P2(h2) || n2 === false || n2 === 0 ? Q(h2, 1) : Q(h2);
  let a, f2, d, g2, E3 = false, z2 = false;
  if (/* @__PURE__ */ V2(e) ? (f2 = () => e.value, E3 = /* @__PURE__ */ P2(e)) : /* @__PURE__ */ te(e) ? (f2 = () => u2(e), E3 = true) : N2(e) ? (z2 = true, E3 = e.some((h2) => /* @__PURE__ */ te(h2) || /* @__PURE__ */ P2(h2)), f2 = () => e.map((h2) => {
    if (/* @__PURE__ */ V2(h2)) return h2.value;
    if (/* @__PURE__ */ te(h2)) return u2(h2);
    if (x(h2)) return l ? l(h2, 2) : h2();
    process.env.NODE_ENV !== "production" && p(h2);
  })) : x(e) ? t2 ? f2 = l ? () => l(e, 2) : e : f2 = () => {
    if (d) {
      le();
      try {
        d();
      } finally {
        fe();
      }
    }
    const h2 = Z;
    Z = a;
    try {
      return l ? l(e, 3, [g2]) : e(g2);
    } finally {
      Z = h2;
    }
  } : (f2 = X, process.env.NODE_ENV !== "production" && p(e)), t2 && n2) {
    const h2 = f2, D3 = n2 === true ? 1 / 0 : n2;
    f2 = () => Q(h2(), D3);
  }
  const F2 = Ur(), _ = () => {
    a.stop(), F2 && F2.active && Sr(F2.effects, a);
  };
  if (s && t2) {
    const h2 = t2;
    t2 = (...D3) => {
      const pe2 = h2(...D3);
      return _(), pe2;
    };
  }
  let m = z2 ? new Array(e.length).fill(Te) : Te;
  const w = (h2) => {
    if (!(!(a.flags & 1) || !a.dirty && !h2))
      if (t2) {
        const D3 = a.run();
        if (h2 || n2 || E3 || (z2 ? D3.some((pe2, Se2) => k(pe2, m[Se2])) : k(D3, m))) {
          d && d();
          const pe2 = Z;
          Z = a;
          try {
            const Se2 = [
              D3,
              m === Te ? void 0 : z2 && m[0] === Te ? [] : m,
              g2
            ];
            m = D3, l ? l(t2, 3, Se2) : t2(...Se2);
          } finally {
            Z = pe2;
          }
        }
      } else a.run();
  };
  return c && c(w), a = new Hr(f2), a.scheduler = i ? () => i(w, false) : w, g2 = (h2) => dn(h2, false, a), d = a.onStop = () => {
    const h2 = Fe.get(a);
    if (h2) {
      if (l) l(h2, 4);
      else for (const D3 of h2) D3();
      Fe.delete(a);
    }
  }, process.env.NODE_ENV !== "production" && (a.onTrack = r.onTrack, a.onTrigger = r.onTrigger), t2 ? o ? w(true) : m = a.run() : i ? i(w.bind(null, true), true) : a.run(), _.pause = a.pause.bind(a), _.resume = a.resume.bind(a), _.stop = _, _;
}
function Q(e, t2 = 1 / 0, r) {
  if (t2 <= 0 || !A(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t2)) return e;
  if (r.set(e, t2), t2--, /* @__PURE__ */ V2(e)) Q(e.value, t2, r);
  else if (N2(e)) for (let o = 0; o < e.length; o++) Q(e[o], t2, r);
  else if (xr(e) || ae(e)) e.forEach((o) => {
    Q(o, t2, r);
  });
  else if (Cr(e)) {
    for (const o in e) Q(e[o], t2, r);
    for (const o of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, o) && Q(e[o], t2, r);
  }
  return e;
}
var re = [];
function _n(e) {
  re.push(e);
}
function hn() {
  re.pop();
}
var Qe = false;
function y(e, ...t2) {
  if (Qe) return;
  Qe = true, le();
  const r = re.length ? re[re.length - 1].component : null, o = r && r.appContext.config.warnHandler, n2 = gn();
  if (o) qe(o, r, 11, [
    e + t2.map((s) => {
      var i, c;
      return (c = (i = s.toString) == null ? void 0 : i.call(s)) != null ? c : JSON.stringify(s);
    }).join(""),
    r && r.proxy,
    n2.map(({ vnode: s }) => `at <${dr(r, s.type)}>`).join(`
`),
    n2
  ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t2];
    n2.length && s.push(`
`, ...vn(n2));
  }
  fe(), Qe = false;
}
function gn() {
  let e = re[re.length - 1];
  if (!e) return [];
  const t2 = [];
  for (; e; ) {
    const r = t2[0];
    r && r.vnode === e ? r.recurseCount++ : t2.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t2;
}
function vn(e) {
  const t2 = [];
  return e.forEach((r, o) => {
    t2.push(...o === 0 ? [] : [`
`], ...bn(r));
  }), t2;
}
function bn({ vnode: e, recurseCount: t2 }) {
  const r = t2 > 0 ? `... (${t2} recursive calls)` : "", o = e.component ? e.component.parent == null : false, n2 = ` at <${dr(e.component, e.type, o)}`, s = ">" + r;
  return e.props ? [
    n2,
    ...mn(e.props),
    s
  ] : [n2 + s];
}
function mn(e) {
  const t2 = [], r = Object.keys(e);
  return r.slice(0, 3).forEach((o) => {
    t2.push(...Yt(o, e[o]));
  }), r.length > 3 && t2.push(" ..."), t2;
}
function Yt(e, t2, r) {
  return U(t2) ? (t2 = JSON.stringify(t2), r ? t2 : [`${e}=${t2}`]) : typeof t2 == "number" || typeof t2 == "boolean" || t2 == null ? r ? t2 : [`${e}=${t2}`] : /* @__PURE__ */ V2(t2) ? (t2 = Yt(e, /* @__PURE__ */ v2(t2.value), true), r ? t2 : [
    `${e}=Ref<`,
    t2,
    ">"
  ]) : x(t2) ? [`${e}=fn${t2.name ? `<${t2.name}>` : ""}`] : (t2 = /* @__PURE__ */ v2(t2), r ? t2 : [`${e}=`, t2]);
}
var vt = {
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
function qe(e, t2, r, o) {
  try {
    return o ? e(...o) : e();
  } catch (n2) {
    mt(n2, t2, r);
  }
}
function bt(e, t2, r, o) {
  if (x(e)) {
    const n2 = qe(e, t2, r, o);
    return n2 && Dr(n2) && n2.catch((s) => {
      mt(s, t2, r);
    }), n2;
  }
  if (N2(e)) {
    const n2 = [];
    for (let s = 0; s < e.length; s++) n2.push(bt(e[s], t2, r, o));
    return n2;
  } else process.env.NODE_ENV !== "production" && y(`Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`);
}
function mt(e, t2, r, o = true) {
  const n2 = t2 ? t2.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t2 && t2.appContext.config || M;
  if (t2) {
    let c = t2.parent;
    const l = t2.proxy, p = process.env.NODE_ENV !== "production" ? vt[r] : `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; c; ) {
      const u2 = c.ec;
      if (u2) {
        for (let a = 0; a < u2.length; a++) if (u2[a](e, l, p) === false) return;
      }
      c = c.parent;
    }
    if (s) {
      le(), qe(s, null, 10, [
        e,
        l,
        p
      ]), fe();
      return;
    }
  }
  En(e, r, n2, o, i);
}
function En(e, t2, r, o = true, n2 = false) {
  if (process.env.NODE_ENV !== "production") {
    const s = vt[t2];
    if (r && _n(r), y(`Unhandled error${s ? ` during execution of ${s}` : ""}`), r && hn(), o) throw e;
  } else if (n2) throw e;
}
var j2 = [];
var K = -1;
var ue = [];
var Y = null;
var se = 0;
var Gt = /* @__PURE__ */ Promise.resolve();
var Me = null;
var yn = 100;
function Nn(e) {
  const t2 = Me || Gt;
  return e ? t2.then(this ? e.bind(this) : e) : t2;
}
function wn(e) {
  let t2 = K + 1, r = j2.length;
  for (; t2 < r; ) {
    const o = t2 + r >>> 1, n2 = j2[o], s = Ne(n2);
    s < e || s === e && n2.flags & 2 ? t2 = o + 1 : r = o;
  }
  return t2;
}
function Et(e) {
  if (!(e.flags & 1)) {
    const t2 = Ne(e), r = j2[j2.length - 1];
    !r || !(e.flags & 2) && t2 >= Ne(r) ? j2.push(e) : j2.splice(wn(t2), 0, e), e.flags |= 1, Qt();
  }
}
function Qt() {
  Me || (Me = Gt.then(Xt));
}
function Zt(e) {
  N2(e) ? ue.push(...e) : Y && e.id === -1 ? Y.splice(se + 1, 0, e) : e.flags & 1 || (ue.push(e), e.flags |= 1), Qt();
}
function Sn(e) {
  if (ue.length) {
    const t2 = [...new Set(ue)].sort((r, o) => Ne(r) - Ne(o));
    if (ue.length = 0, Y) {
      Y.push(...t2);
      return;
    }
    for (Y = t2, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), se = 0; se < Y.length; se++) {
      const r = Y[se];
      process.env.NODE_ENV !== "production" && er(e, r) || (r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2);
    }
    Y = null, se = 0;
  }
}
var Ne = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Xt(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t2 = process.env.NODE_ENV !== "production" ? (r) => er(e, r) : X;
  try {
    for (K = 0; K < j2.length; K++) {
      const r = j2[K];
      if (r && !(r.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t2(r)) continue;
        r.flags & 4 && (r.flags &= -2), qe(r, r.i, r.i ? 15 : 14), r.flags & 4 || (r.flags &= -2);
      }
    }
  } finally {
    for (; K < j2.length; K++) {
      const r = j2[K];
      r && (r.flags &= -2);
    }
    K = -1, j2.length = 0, Sn(e), Me = null, (j2.length || ue.length) && Xt(e);
  }
}
function er(e, t2) {
  const r = e.get(t2) || 0;
  if (r > yn) {
    const o = t2.i, n2 = o && fr(o.type);
    return mt(`Maximum recursive updates exceeded${n2 ? ` in component <${n2}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`, null, 10), true;
  }
  return e.set(t2, r + 1), false;
}
var je = false;
var Ze = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Je().__VUE_HMR_RUNTIME__ = {
  createRecord: Xe(On),
  rerender: Xe(xn),
  reload: Xe(Dn)
});
var $e = /* @__PURE__ */ new Map();
function On(e, t2) {
  return $e.has(e) ? false : ($e.set(e, {
    initialDef: Ue(t2),
    instances: /* @__PURE__ */ new Set()
  }), true);
}
function Ue(e) {
  return pr(e) ? e.__vccOpts : e;
}
function xn(e, t2) {
  const r = $e.get(e);
  r && (r.initialDef.render = t2, [...r.instances].forEach((o) => {
    t2 && (o.render = t2, Ue(o.type).render = t2), o.renderCache = [], je = true, o.job.flags & 8 || o.update(), je = false;
  }));
}
function Dn(e, t2) {
  const r = $e.get(e);
  if (!r) return;
  t2 = Ue(t2), xt(r.initialDef, t2);
  const o = [...r.instances];
  for (let n2 = 0; n2 < o.length; n2++) {
    const s = o[n2], i = Ue(s.type);
    let c = Ze.get(i);
    c || (i !== r.initialDef && xt(i, t2), Ze.set(i, c = /* @__PURE__ */ new Set())), c.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (c.add(s), s.ceReload(t2.styles), c.delete(s)) : s.parent ? Et(() => {
      s.job.flags & 8 || (je = true, s.parent.update(), je = false, c.delete(s));
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" && window.location.reload(), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(i);
  }
  Zt(() => {
    Ze.clear();
  });
}
function xt(e, t2) {
  I2(e, t2);
  for (const r in e) r !== "__file" && !(r in t2) && delete e[r];
}
function Xe(e) {
  return (t2, r) => {
    try {
      return e(t2, r);
    } catch {
    }
  };
}
var ie;
var Ce = [];
var Dt = false;
function tr(e, t2) {
  var r, o;
  ie = e, ie ? (ie.enabled = true, Ce.forEach(({ event: n2, args: s }) => ie.emit(n2, ...s)), Ce = []) : typeof window < "u" && window.HTMLElement && !((o = (r = window.navigator) == null ? void 0 : r.userAgent) != null && o.includes("jsdom")) ? ((t2.__VUE_DEVTOOLS_HOOK_REPLAY__ = t2.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((n2) => {
    tr(n2, t2);
  }), setTimeout(() => {
    ie || (t2.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Dt = true, Ce = []);
  }, 3e3)) : (Dt = true, Ce = []);
}
var L = null;
var Tn = null;
function Cn(e, t2, r = false) {
  const o = io();
  if (o || tt) {
    let n2 = tt ? tt._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (n2 && e in n2) return n2[e];
    if (arguments.length > 1) return r && x(t2) ? t2.call(o && o.proxy) : t2;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
var Rn = /* @__PURE__ */ Symbol.for("v-scx");
var An = () => {
  {
    const e = Cn(Rn);
    return e || process.env.NODE_ENV !== "production" && y("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function Vn(e, t2, r = M) {
  const { immediate: o, deep: n2, flush: s, once: i } = r;
  process.env.NODE_ENV !== "production" && !t2 && (o !== void 0 && y('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), n2 !== void 0 && y('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'), i !== void 0 && y('watch() "once" option is only respected when using the watch(source, callback, options?) signature.'));
  const c = I2({}, r);
  process.env.NODE_ENV !== "production" && (c.onWarn = y);
  const l = t2 && o || !t2 && s !== "post";
  let p;
  if (Ke) {
    if (s === "sync") {
      const d = An();
      p = d.__watcherHandles || (d.__watcherHandles = []);
    } else if (!l) {
      const d = () => {
      };
      return d.stop = X, d.resume = X, d.pause = X, d;
    }
  }
  const u2 = de;
  c.call = (d, g2, E3) => bt(d, u2, g2, E3);
  let a = false;
  s === "post" ? c.scheduler = (d) => {
    zn(d, u2 && u2.suspense);
  } : s !== "sync" && (a = true, c.scheduler = (d, g2) => {
    g2 ? d() : Et(d);
  }), c.augmentJob = (d) => {
    t2 && (d.flags |= 4), a && (d.flags |= 2, u2 && (d.id = u2.uid, d.i = u2));
  };
  const f2 = pn(e, t2, c);
  return Ke && (p ? p.push(f2) : l && f2()), f2;
}
function In(e, t2, r) {
  const o = this.proxy, n2 = U(e) ? e.includes(".") ? Pn(o, e) : () => o[e] : e.bind(o, o);
  let s;
  x(t2) ? s = t2 : (s = t2.handler, r = t2);
  const i = lr(this), c = Vn(n2, s.bind(o), r);
  return i(), c;
}
function Pn(e, t2) {
  const r = t2.split(".");
  return () => {
    let o = e;
    for (let n2 = 0; n2 < r.length && o; n2++) o = o[r[n2]];
    return o;
  };
}
var Fn = (e) => e.__isTeleport;
function rr(e, t2) {
  e.shapeFlag & 6 && e.component ? (e.transition = t2, rr(e.component.subTree, t2)) : e.shapeFlag & 128 ? (e.ssContent.transition = t2.clone(e.ssContent), e.ssFallback.transition = t2.clone(e.ssFallback)) : e.transition = t2;
}
var Uo = Je().requestIdleCallback || ((e) => setTimeout(e, 1));
var Ho = Je().cancelIdleCallback || ((e) => clearTimeout(e));
function Mn(e, t2, r = de, o = false) {
  if (r) {
    const n2 = r[e] || (r[e] = []), s = t2.__weh || (t2.__weh = (...i) => {
      le();
      const c = lr(r), l = bt(t2, r, e, i);
      return c(), fe(), l;
    });
    return o ? n2.unshift(s) : n2.push(s), s;
  } else process.env.NODE_ENV !== "production" && y(`${Vr(vt[e].replace(/ hook$/, ""))} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
}
var q = (e) => (t2, r = de) => {
  (!Ke || e === "sp") && Mn(e, (...o) => t2(...o), r);
};
var Lo = q("bm");
var Wo = q("m");
var Ko = q("bu");
var ko = q("u");
var Bo = q("bum");
var Jo = q("um");
var qo = q("sp");
var zo = q("rtg");
var Yo = q("rtc");
var jn = /* @__PURE__ */ Symbol.for("v-ndc");
var it = (e) => e ? ao(e) ? uo(e) : it(e.parent) : null;
var me = /* @__PURE__ */ I2(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ De(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ De(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ De(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ De(e.refs) : e.refs,
  $parent: (e) => it(e.parent),
  $root: (e) => it(e.root),
  $host: (e) => e.ce,
  $emit: (e) => e.emit,
  $options: (e) => __VUE_OPTIONS_API__ ? Ln(e) : e.type,
  $forceUpdate: (e) => e.f || (e.f = () => {
    Et(e.update);
  }),
  $nextTick: (e) => e.n || (e.n = Nn.bind(e.proxy)),
  $watch: (e) => __VUE_OPTIONS_API__ ? In.bind(e) : X
});
var $n = (e) => e === "_" || e === "$";
var et = (e, t2) => e !== M && !e.__isScriptSetup && S2(e, t2);
var Un = {
  get({ _: e }, t2) {
    if (t2 === "__v_skip") return true;
    const { ctx: r, setupState: o, data: n2, props: s, accessCache: i, type: c, appContext: l } = e;
    if (process.env.NODE_ENV !== "production" && t2 === "__isVue") return true;
    if (t2[0] !== "$") {
      const f2 = i[t2];
      if (f2 !== void 0) switch (f2) {
        case 1:
          return o[t2];
        case 2:
          return n2[t2];
        case 4:
          return r[t2];
        case 3:
          return s[t2];
      }
      else {
        if (et(o, t2))
          return i[t2] = 1, o[t2];
        if (__VUE_OPTIONS_API__ && n2 !== M && S2(n2, t2))
          return i[t2] = 2, n2[t2];
        if (S2(s, t2))
          return i[t2] = 3, s[t2];
        if (r !== M && S2(r, t2))
          return i[t2] = 4, r[t2];
        (!__VUE_OPTIONS_API__ || Hn) && (i[t2] = 0);
      }
    }
    const p = me[t2];
    let u2, a;
    if (p)
      return t2 === "$attrs" ? (O(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && nr()) : process.env.NODE_ENV !== "production" && t2 === "$slots" && O(e, "get", t2), p(e);
    if ((u2 = c.__cssModules) && (u2 = u2[t2])) return u2;
    if (r !== M && S2(r, t2))
      return i[t2] = 4, r[t2];
    if (a = l.config.globalProperties, S2(a, t2)) return a[t2];
    process.env.NODE_ENV !== "production" && L && (!U(t2) || t2.indexOf("__v") !== 0) && (n2 !== M && $n(t2[0]) && S2(n2, t2) ? y(`Property ${JSON.stringify(t2)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === L && y(`Property ${JSON.stringify(t2)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t2, r) {
    const { data: o, setupState: n2, ctx: s } = e;
    return et(n2, t2) ? (n2[t2] = r, true) : process.env.NODE_ENV !== "production" && n2.__isScriptSetup && S2(n2, t2) ? (y(`Cannot mutate <script setup> binding "${t2}" from Options API.`), false) : __VUE_OPTIONS_API__ && o !== M && S2(o, t2) ? (o[t2] = r, true) : S2(e.props, t2) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t2}". Props are readonly.`), false) : t2[0] === "$" && t2.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate public property "${t2}". Properties starting with $ are reserved and readonly.`), false) : (process.env.NODE_ENV !== "production" && t2 in e.appContext.config.globalProperties ? Object.defineProperty(s, t2, {
      enumerable: true,
      configurable: true,
      value: r
    }) : s[t2] = r, true);
  },
  has({ _: { data: e, setupState: t2, accessCache: r, ctx: o, appContext: n2, props: s, type: i } }, c) {
    let l;
    return !!(r[c] || __VUE_OPTIONS_API__ && e !== M && c[0] !== "$" && S2(e, c) || et(t2, c) || S2(s, c) || S2(o, c) || S2(me, c) || S2(n2.config.globalProperties, c) || (l = i.__cssModules) && l[c]);
  },
  defineProperty(e, t2, r) {
    return r.get != null ? e._.accessCache[t2] = 0 : S2(r, "value") && this.set(e, t2, r.value, null), Reflect.defineProperty(e, t2, r);
  }
};
process.env.NODE_ENV !== "production" && (Un.ownKeys = (e) => (y("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function Tt(e) {
  return N2(e) ? e.reduce((t2, r) => (t2[r] = null, t2), {}) : e;
}
var Hn = true;
function Ln(e) {
  const t2 = e.type, { mixins: r, extends: o } = t2, { mixins: n2, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, c = s.get(t2);
  let l;
  return c ? l = c : !n2.length && !r && !o ? l = t2 : (l = {}, n2.length && n2.forEach((p) => He(l, p, i, true)), He(l, t2, i)), A(t2) && s.set(t2, l), l;
}
function He(e, t2, r, o = false) {
  const { mixins: n2, extends: s } = t2;
  s && He(e, s, r, true), n2 && n2.forEach((i) => He(e, i, r, true));
  for (const i in t2) if (o && i === "expose") process.env.NODE_ENV !== "production" && y('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
  else {
    const c = Wn[i] || r && r[i];
    e[i] = c ? c(e[i], t2[i]) : t2[i];
  }
  return e;
}
var Wn = {
  data: Ct,
  props: At,
  emits: At,
  methods: ge,
  computed: ge,
  beforeCreate: T2,
  created: T2,
  beforeMount: T2,
  mounted: T2,
  beforeUpdate: T2,
  updated: T2,
  beforeDestroy: T2,
  beforeUnmount: T2,
  destroyed: T2,
  unmounted: T2,
  activated: T2,
  deactivated: T2,
  errorCaptured: T2,
  serverPrefetch: T2,
  components: ge,
  directives: ge,
  watch: kn,
  provide: Ct,
  inject: Kn
};
function Ct(e, t2) {
  return t2 ? e ? function() {
    return I2(x(e) ? e.call(this, this) : e, x(t2) ? t2.call(this, this) : t2);
  } : t2 : e;
}
function Kn(e, t2) {
  return ge(Rt(e), Rt(t2));
}
function Rt(e) {
  if (N2(e)) {
    const t2 = {};
    for (let r = 0; r < e.length; r++) t2[e[r]] = e[r];
    return t2;
  }
  return e;
}
function T2(e, t2) {
  return e ? [...new Set([].concat(e, t2))] : t2;
}
function ge(e, t2) {
  return e ? I2(/* @__PURE__ */ Object.create(null), e, t2) : t2;
}
function At(e, t2) {
  return e ? N2(e) && N2(t2) ? [.../* @__PURE__ */ new Set([...e, ...t2])] : I2(/* @__PURE__ */ Object.create(null), Tt(e), Tt(t2 ?? {})) : t2;
}
function kn(e, t2) {
  if (!e) return t2;
  if (!t2) return e;
  const r = I2(/* @__PURE__ */ Object.create(null), e);
  for (const o in t2) r[o] = T2(e[o], t2[o]);
  return r;
}
function Bn() {
  return {
    app: null,
    config: {
      isNativeTag: yr,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
var tt = null;
var Jn = false;
function nr() {
  Jn = true;
}
var qn = {};
var or = (e) => Object.getPrototypeOf(e) === qn;
var zn = Gn;
var Yn = (e) => e.__isSuspense;
function Gn(e, t2) {
  t2 && t2.pendingBranch ? N2(e) ? t2.effects.push(...e) : t2.effects.push(e) : Zt(e);
}
var sr = /* @__PURE__ */ Symbol.for("v-fgt");
var Qn = /* @__PURE__ */ Symbol.for("v-txt");
var Zn = /* @__PURE__ */ Symbol.for("v-cmt");
var ce = null;
var ir = 1;
function Xn(e) {
  return e ? e.__v_isVNode === true : false;
}
var Vt;
var eo = (...e) => ar(...Vt ? Vt(e, L) : e);
var cr = ({ key: e }) => e ?? null;
var Ae = ({ ref: e, ref_key: t2, ref_for: r }) => (typeof e == "number" && (e = "" + e), e != null ? U(e) || /* @__PURE__ */ V2(e) || x(e) ? {
  i: L,
  r: e,
  k: t2,
  f: !!r
} : e : null);
function to(e, t2 = null, r = null, o = 0, n2 = null, s = e === sr ? 0 : 1, i = false, c = false) {
  const l = {
    __v_isVNode: true,
    __v_skip: true,
    type: e,
    props: t2,
    key: t2 && cr(t2),
    ref: t2 && Ae(t2),
    scopeId: Tn,
    slotScopeIds: null,
    children: r,
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
    patchFlag: o,
    dynamicProps: n2,
    dynamicChildren: null,
    appContext: null,
    ctx: L
  };
  return c ? (We(l, r), s & 128 && e.normalize(l)) : r && (l.shapeFlag |= U(r) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && y("VNode created with invalid key (NaN). VNode type:", l.type), ir > 0 && !i && ce && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && ce.push(l), l;
}
var ro = process.env.NODE_ENV !== "production" ? eo : ar;
function ar(e, t2 = null, r = null, o = 0, n2 = null, s = false) {
  if ((!e || e === jn) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = Zn), Xn(e)) {
    const c = Le(e, t2, true);
    return r && We(c, r), ir > 0 && !s && ce && (c.shapeFlag & 6 ? ce[ce.indexOf(e)] = c : ce.push(c)), c.patchFlag = -2, c;
  }
  if (pr(e) && (e = e.__vccOpts), t2) {
    t2 = no(t2);
    let { class: c, style: l } = t2;
    c && !U(c) && (t2.class = lt(c)), A(l) && (/* @__PURE__ */ Pe(l) && !N2(l) && (l = I2({}, l)), t2.style = ut(l));
  }
  const i = U(e) ? 1 : Yn(e) ? 128 : Fn(e) ? 64 : A(e) ? 4 : x(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && /* @__PURE__ */ Pe(e) && (e = /* @__PURE__ */ v2(e), y("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), to(e, t2, r, o, n2, i, s, true);
}
function no(e) {
  return e ? /* @__PURE__ */ Pe(e) || or(e) ? I2({}, e) : e : null;
}
function Le(e, t2, r = false, o = false) {
  const { props: n2, ref: s, patchFlag: i, children: c, transition: l } = e, p = t2 ? so(n2 || {}, t2) : n2, u2 = {
    __v_isVNode: true,
    __v_skip: true,
    type: e.type,
    props: p,
    key: p && cr(p),
    ref: t2 && t2.ref ? r && s ? N2(s) ? s.concat(Ae(t2)) : [s, Ae(t2)] : Ae(t2) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && N2(c) ? c.map(ur) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t2 && e.type !== sr ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Le(e.ssContent),
    ssFallback: e.ssFallback && Le(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && o && rr(u2, l.clone(u2)), u2;
}
function ur(e) {
  const t2 = Le(e);
  return N2(e.children) && (t2.children = e.children.map(ur)), t2;
}
function oo(e = " ", t2 = 0) {
  return ro(Qn, null, e, t2);
}
function We(e, t2) {
  let r = 0;
  const { shapeFlag: o } = e;
  if (t2 == null) t2 = null;
  else if (N2(t2)) r = 16;
  else if (typeof t2 == "object") if (o & 65) {
    const n2 = t2.default;
    n2 && (n2._c && (n2._d = false), We(e, n2()), n2._c && (n2._d = true));
    return;
  } else {
    r = 32;
    const n2 = t2._;
    !n2 && !or(t2) ? t2._ctx = L : n2 === 3 && L && (L.slots._ === 1 ? t2._ = 1 : (t2._ = 2, e.patchFlag |= 1024));
  }
  else if (x(t2)) {
    if (o & 65) {
      We(e, { default: t2 });
      return;
    }
    t2 = {
      default: t2,
      _ctx: L
    }, r = 32;
  } else
    t2 = String(t2), o & 64 ? (r = 16, t2 = [oo(t2)]) : r = 8;
  e.children = t2, e.shapeFlag |= r;
}
function so(...e) {
  const t2 = {};
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (const n2 in o) if (n2 === "class")
      t2.class !== o.class && (t2.class = lt([t2.class, o.class]));
    else if (n2 === "style") t2.style = ut([t2.style, o.style]);
    else if (Nr(n2)) {
      const s = t2[n2], i = o[n2];
      i && s !== i && !(N2(s) && s.includes(i)) ? t2[n2] = s ? [].concat(s, i) : i : i == null && s == null && !wr(n2) && (t2[n2] = i);
    } else n2 !== "" && (t2[n2] = o[n2]);
  }
  return t2;
}
var Go = Bn();
var de = null;
var io = () => de || L;
var ct;
var co;
{
  const e = Je(), t2 = (r, o) => {
    let n2;
    return (n2 = e[r]) || (n2 = e[r] = []), n2.push(o), (s) => {
      n2.length > 1 ? n2.forEach((i) => i(s)) : n2[0](s);
    };
  };
  ct = t2("__VUE_INSTANCE_SETTERS__", (r) => de = r), co = t2("__VUE_SSR_SETTERS__", (r) => Ke = r);
}
var lr = (e) => {
  const t2 = de;
  return ct(e), e.scope.on(), () => {
    e.scope.off(), ct(t2);
  };
};
function ao(e) {
  return e.vnode.shapeFlag & 4;
}
var Ke = false;
var Qo = process.env.NODE_ENV !== "production" ? {
  get(e, t2) {
    return nr(), O(e, "get", ""), e[t2];
  },
  set() {
    return y("setupContext.attrs is readonly."), false;
  },
  deleteProperty() {
    return y("setupContext.attrs is readonly."), false;
  }
} : { get(e, t2) {
  return O(e, "get", ""), e[t2];
} };
function uo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(fn(an(e.exposed)), {
    get(t2, r) {
      if (r in t2) return t2[r];
      if (r in me) return me[r](e);
    },
    has(t2, r) {
      return r in t2 || r in me;
    }
  })) : e.proxy;
}
var lo = /(?:^|[-_])\w/g;
var fo = (e) => e.replace(lo, (t2) => t2.toUpperCase()).replace(/[-_]/g, "");
function fr(e, t2 = true) {
  return x(e) ? e.displayName || e.name : e.name || t2 && e.__name;
}
function dr(e, t2, r = false) {
  let o = fr(t2);
  if (!o && t2.__file) {
    const n2 = t2.__file.match(/([^/\\]+)\.\w+$/);
    n2 && (o = n2[1]);
  }
  if (!o && e) {
    const n2 = (s) => {
      for (const i in s) if (s[i] === t2) return i;
    };
    o = n2(e.components) || e.parent && n2(e.parent.type.components) || n2(e.appContext.components);
  }
  return o ? fo(o) : r ? "App" : "Anonymous";
}
function pr(e) {
  return x(e) && "__vccOpts" in e;
}
function po() {
  if (process.env.NODE_ENV === "production" || typeof window > "u") return;
  const e = { style: "color:#3ba776" }, t2 = { style: "color:#1677ff" }, r = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, n2 = {
    __vue_custom_formatter: true,
    header(a) {
      if (!A(a)) return null;
      if (a.__isVue) return [
        "div",
        e,
        "VueInstance"
      ];
      if (/* @__PURE__ */ V2(a)) {
        le();
        const f2 = a.value;
        return fe(), [
          "div",
          {},
          [
            "span",
            e,
            u2(a)
          ],
          "<",
          c(f2),
          ">"
        ];
      } else {
        if (/* @__PURE__ */ te(a)) return [
          "div",
          {},
          [
            "span",
            e,
            /* @__PURE__ */ P2(a) ? "ShallowReactive" : "Reactive"
          ],
          "<",
          c(a),
          `>${/* @__PURE__ */ J(a) ? " (readonly)" : ""}`
        ];
        if (/* @__PURE__ */ J(a)) return [
          "div",
          {},
          [
            "span",
            e,
            /* @__PURE__ */ P2(a) ? "ShallowReadonly" : "Readonly"
          ],
          "<",
          c(a),
          ">"
        ];
      }
      return null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue) return [
        "div",
        {},
        ...s(a.$)
      ];
    }
  };
  function s(a) {
    const f2 = [];
    a.type.props && a.props && f2.push(i("props", /* @__PURE__ */ v2(a.props))), a.setupState !== M && f2.push(i("setup", a.setupState)), a.data !== M && f2.push(i("data", /* @__PURE__ */ v2(a.data)));
    const d = l(a, "computed");
    d && f2.push(i("computed", d));
    const g2 = l(a, "inject");
    return g2 && f2.push(i("injected", g2)), f2.push([
      "div",
      {},
      [
        "span",
        { style: o.style + ";opacity:0.66" },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), f2;
  }
  function i(a, f2) {
    return f2 = I2({}, f2), Object.keys(f2).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        { style: "color:#476582" },
        a
      ],
      [
        "div",
        { style: "padding-left:1.25em" },
        ...Object.keys(f2).map((d) => [
          "div",
          {},
          [
            "span",
            o,
            d + ": "
          ],
          c(f2[d], false)
        ])
      ]
    ] : ["span", {}];
  }
  function c(a, f2 = true) {
    return typeof a == "number" ? [
      "span",
      t2,
      a
    ] : typeof a == "string" ? [
      "span",
      r,
      JSON.stringify(a)
    ] : typeof a == "boolean" ? [
      "span",
      o,
      a
    ] : A(a) ? ["object", { object: f2 ? /* @__PURE__ */ v2(a) : a }] : [
      "span",
      r,
      String(a)
    ];
  }
  function l(a, f2) {
    const d = a.type;
    if (x(d)) return;
    const g2 = {};
    for (const E3 in a.ctx) p(d, E3, f2) && (g2[E3] = a.ctx[E3]);
    return g2;
  }
  function p(a, f2, d) {
    const g2 = a[d];
    if (N2(g2) && g2.includes(f2) || A(g2) && f2 in g2 || a.extends && p(a.extends, f2, d) || a.mixins && a.mixins.some((E3) => p(E3, f2, d))) return true;
  }
  function u2(a) {
    return /* @__PURE__ */ P2(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(n2) : window.devtoolsFormatters = [n2];
}
var Zo = process.env.NODE_ENV !== "production" ? y : X;
var Xo = (process.env.NODE_ENV, ie);
var es = (process.env.NODE_ENV, tr);
function _o() {
  po();
}
process.env.NODE_ENV !== "production" && _o();

// ../generator/dist/index.js
var hn2 = Object.defineProperty;
var Eo = (e, t2) => {
  let n2 = {};
  for (var o in e)
    hn2(n2, o, {
      get: e[o],
      enumerable: true
    });
  return t2 || hn2(n2, Symbol.toStringTag, { value: "Module" }), n2;
};
var Nt2 = {};
var vn2;
function jo2() {
  return vn2 ? Nt2 : (vn2 = 1, Nt2.Deferred = (function() {
    function e() {
      var t2 = this;
      this.resolve = function(n2) {
        t2._resolve(n2);
      }, this.reject = function(n2) {
        t2._reject(n2);
      }, this._promise = new Promise(function(n2, o) {
        t2._resolve = n2, t2._reject = o;
      });
    }
    return Object.defineProperty(e.prototype, "promise", {
      get: function() {
        return this._promise;
      },
      enumerable: true,
      configurable: true
    }), e;
  })(), Nt2);
}
var Oo = jo2();
// @__NO_SIDE_EFFECTS__
function An2(e) {
  const t2 = /* @__PURE__ */ Object.create(null);
  for (const n2 of e.split(",")) t2[n2] = 1;
  return (n2) => n2 in t2;
}
var ci = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
var ui = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [];
var ot2 = Object.assign;
var So = Object.prototype.hasOwnProperty;
var Vt2 = (e, t2) => So.call(e, t2);
var Te2 = Array.isArray;
var Se = (e) => kn2(e) === "[object Map]";
var xo = (e) => typeof e == "function";
var Ao = (e) => typeof e == "string";
var Ke2 = (e) => typeof e == "symbol";
var Ve2 = (e) => e !== null && typeof e == "object";
var ko2 = Object.prototype.toString;
var kn2 = (e) => ko2.call(e);
var In2 = (e) => kn2(e).slice(8, -1);
var qt2 = (e) => Ao(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
var gt2 = (e) => {
  const t2 = /* @__PURE__ */ Object.create(null);
  return ((n2) => t2[n2] || (t2[n2] = e(n2)));
};
var Io = /-\w/g;
var li = gt2((e) => e.replace(Io, (t2) => t2.slice(1).toUpperCase()));
var Do = /\B([A-Z])/g;
var pi = gt2((e) => e.replace(Do, "-$1").toLowerCase());
var Dn2 = gt2((e) => e.charAt(0).toUpperCase() + e.slice(1));
var di = gt2((e) => e ? `on${Dn2(e)}` : "");
var ne2 = (e, t2) => !Object.is(e, t2);
var To = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
var fi = /* @__PURE__ */ An2(To + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
function he2(e, ...t2) {
}
var A2;
var Tn2 = 0;
var xe2;
var Ae2;
function Vo(e, t2 = false) {
  if (e.flags |= 8, t2) {
    e.next = Ae2, Ae2 = e;
    return;
  }
  e.next = xe2, xe2 = e;
}
function Zt2() {
  Tn2++;
}
function Qt2() {
  if (--Tn2 > 0) return;
  if (Ae2) {
    let t2 = Ae2;
    for (Ae2 = void 0; t2; ) {
      const n2 = t2.next;
      t2.next = void 0, t2.flags &= -9, t2 = n2;
    }
  }
  let e;
  for (; xe2; ) {
    let t2 = xe2;
    for (xe2 = void 0; t2; ) {
      const n2 = t2.next;
      if (t2.next = void 0, t2.flags &= -9, t2.flags & 1) try {
        t2.trigger();
      } catch (o) {
        e || (e = o);
      }
      t2 = n2;
    }
  }
  if (e) throw e;
}
function Po2(e) {
  for (let t2 = e.deps; t2; t2 = t2.nextDep)
    t2.version = -1, t2.prevActiveLink = t2.dep.activeLink, t2.dep.activeLink = t2;
}
function Fo2(e) {
  let t2, n2 = e.depsTail, o = n2;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === n2 && (n2 = s), Pn2(o), Lo2(o)) : t2 = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = t2, e.depsTail = n2;
}
function Ro(e) {
  for (let t2 = e.deps; t2; t2 = t2.nextDep) if (t2.dep.version !== t2.version || t2.dep.computed && (Vn2(t2.dep.computed) || t2.dep.version !== t2.version)) return true;
  return !!e._dirty;
}
function Vn2(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Pe2) || (e.globalVersion = Pe2, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ro(e)))) return;
  e.flags |= 2;
  const t2 = e.dep, n2 = A2, o = ie2;
  A2 = e, ie2 = true;
  try {
    Po2(e);
    const s = e.fn(e._value);
    (t2.version === 0 || ne2(s, e._value)) && (e.flags |= 128, e._value = s, t2.version++);
  } catch (s) {
    throw t2.version++, s;
  } finally {
    A2 = n2, ie2 = o, Fo2(e), e.flags &= -3;
  }
}
function Pn2(e, t2 = false) {
  const { dep: n2, prevSub: o, nextSub: s } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n2.subsHead === e && (n2.subsHead = s), n2.subs === e && (n2.subs = o, !o && n2.computed)) {
    n2.computed.flags &= -5;
    for (let r = n2.computed.deps; r; r = r.nextDep) Pn2(r, true);
  }
  !t2 && !--n2.sc && n2.map && n2.map.delete(n2.key);
}
function Lo2(e) {
  const { prevDep: t2, nextDep: n2 } = e;
  t2 && (t2.nextDep = n2, e.prevDep = void 0), n2 && (n2.prevDep = t2, e.nextDep = void 0);
}
var ie2 = true;
var Fn2 = [];
function Ho2() {
  Fn2.push(ie2), ie2 = false;
}
function Mo2() {
  const e = Fn2.pop();
  ie2 = e === void 0 ? true : e;
}
var Pe2 = 0;
var Ko2 = class {
  constructor(e, t2) {
    this.sub = e, this.dep = t2, this.version = t2.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
};
var Xt2 = class {
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(e) {
    if (!A2 || !ie2 || A2 === this.computed) return;
    let t2 = this.activeLink;
    if (t2 === void 0 || t2.sub !== A2)
      t2 = this.activeLink = new Ko2(A2, this), A2.deps ? (t2.prevDep = A2.depsTail, A2.depsTail.nextDep = t2, A2.depsTail = t2) : A2.deps = A2.depsTail = t2, Rn2(t2);
    else if (t2.version === -1 && (t2.version = this.version, t2.nextDep)) {
      const n2 = t2.nextDep;
      n2.prevDep = t2.prevDep, t2.prevDep && (t2.prevDep.nextDep = n2), t2.prevDep = A2.depsTail, t2.nextDep = void 0, A2.depsTail.nextDep = t2, A2.depsTail = t2, A2.deps === t2 && (A2.deps = n2);
    }
    return process.env.NODE_ENV !== "production" && A2.onTrack && A2.onTrack(ot2({ effect: A2 }, e)), t2;
  }
  trigger(e) {
    this.version++, Pe2++, this.notify(e);
  }
  notify(e) {
    Zt2();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let t2 = this.subsHead; t2; t2 = t2.nextSub) t2.sub.onTrigger && !(t2.sub.flags & 8) && t2.sub.onTrigger(ot2({ effect: t2.sub }, e));
      for (let t2 = this.subs; t2; t2 = t2.prevSub) t2.sub.notify() && t2.sub.dep.notify();
    } finally {
      Qt2();
    }
  }
};
function Rn2(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t2 = e.dep.computed;
    if (t2 && !e.dep.subs) {
      t2.flags |= 20;
      for (let o = t2.deps; o; o = o.nextDep) Rn2(o);
    }
    const n2 = e.dep.subs;
    n2 !== e && (e.prevSub = n2, n2 && (n2.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
var Pt2 = /* @__PURE__ */ new WeakMap();
var pe = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "Object iterate" : "");
var Ft2 = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "Map keys iterate" : "");
var Fe2 = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "Array iterate" : "");
function L2(e, t2, n2) {
  if (ie2 && A2) {
    let o = Pt2.get(e);
    o || Pt2.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n2);
    s || (o.set(n2, s = new Xt2()), s.map = o, s.key = n2), process.env.NODE_ENV !== "production" ? s.track({
      target: e,
      type: t2,
      key: n2
    }) : s.track();
  }
}
function oe2(e, t2, n2, o, s, r) {
  const i = Pt2.get(e);
  if (!i) {
    Pe2++;
    return;
  }
  const c = (d) => {
    d && (process.env.NODE_ENV !== "production" ? d.trigger({
      target: e,
      type: t2,
      key: n2,
      newValue: o,
      oldValue: s,
      oldTarget: r
    }) : d.trigger());
  };
  if (Zt2(), t2 === "clear") i.forEach(c);
  else {
    const d = Te2(e), p = d && qt2(n2);
    if (d && n2 === "length") {
      const u2 = Number(o);
      i.forEach((a, l) => {
        (l === "length" || l === Fe2 || !Ke2(l) && l >= u2) && c(a);
      });
    } else
      switch ((n2 !== void 0 || i.has(void 0)) && c(i.get(n2)), p && c(i.get(Fe2)), t2) {
        case "add":
          d ? p && c(i.get("length")) : (c(i.get(pe)), Se(e) && c(i.get(Ft2)));
          break;
        case "delete":
          d || (c(i.get(pe)), Se(e) && c(i.get(Ft2)));
          break;
        case "set":
          Se(e) && c(i.get(pe));
          break;
      }
  }
  Qt2();
}
function ge2(e) {
  const t2 = /* @__PURE__ */ O2(e);
  return t2 === e ? t2 : (L2(t2, "iterate", Fe2), /* @__PURE__ */ ce2(e) ? t2 : t2.map(X2));
}
function en2(e) {
  return L2(e = /* @__PURE__ */ O2(e), "iterate", Fe2), e;
}
function G3(e, t2) {
  return /* @__PURE__ */ ae2(e) ? Le2(/* @__PURE__ */ Gn2(e) ? X2(t2) : t2) : X2(t2);
}
var Uo2 = {
  __proto__: null,
  [Symbol.iterator]() {
    return wt2(this, Symbol.iterator, (e) => G3(this, e));
  },
  concat(...e) {
    return ge2(this).concat(...e.map((t2) => Te2(t2) ? ge2(t2) : t2));
  },
  entries() {
    return wt2(this, "entries", (e) => (e[1] = G3(this, e[1]), e));
  },
  every(e, t2) {
    return Y2(this, "every", e, t2, void 0, arguments);
  },
  filter(e, t2) {
    return Y2(this, "filter", e, t2, (n2) => n2.map((o) => G3(this, o)), arguments);
  },
  find(e, t2) {
    return Y2(this, "find", e, t2, (n2) => G3(this, n2), arguments);
  },
  findIndex(e, t2) {
    return Y2(this, "findIndex", e, t2, void 0, arguments);
  },
  findLast(e, t2) {
    return Y2(this, "findLast", e, t2, (n2) => G3(this, n2), arguments);
  },
  findLastIndex(e, t2) {
    return Y2(this, "findLastIndex", e, t2, void 0, arguments);
  },
  forEach(e, t2) {
    return Y2(this, "forEach", e, t2, void 0, arguments);
  },
  includes(...e) {
    return Et2(this, "includes", e);
  },
  indexOf(...e) {
    return Et2(this, "indexOf", e);
  },
  join(e) {
    return ge2(this).join(e);
  },
  lastIndexOf(...e) {
    return Et2(this, "lastIndexOf", e);
  },
  map(e, t2) {
    return Y2(this, "map", e, t2, void 0, arguments);
  },
  pop() {
    return Ee2(this, "pop");
  },
  push(...e) {
    return Ee2(this, "push", e);
  },
  reduce(e, ...t2) {
    return gn2(this, "reduce", e, t2);
  },
  reduceRight(e, ...t2) {
    return gn2(this, "reduceRight", e, t2);
  },
  shift() {
    return Ee2(this, "shift");
  },
  some(e, t2) {
    return Y2(this, "some", e, t2, void 0, arguments);
  },
  splice(...e) {
    return Ee2(this, "splice", e);
  },
  toReversed() {
    return ge2(this).toReversed();
  },
  toSorted(e) {
    return ge2(this).toSorted(e);
  },
  toSpliced(...e) {
    return ge2(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ee2(this, "unshift", e);
  },
  values() {
    return wt2(this, "values", (e) => G3(this, e));
  }
};
function wt2(e, t2, n2) {
  const o = en2(e), s = o[t2]();
  return o !== e && !/* @__PURE__ */ ce2(e) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.done || (r.value = n2(r.value)), r;
  }), s;
}
var Bo2 = Array.prototype;
function Y2(e, t2, n2, o, s, r) {
  const i = en2(e), c = i !== e && !/* @__PURE__ */ ce2(e), d = i[t2];
  if (d !== Bo2[t2]) {
    const a = d.apply(e, r);
    return c ? X2(a) : a;
  }
  let p = n2;
  i !== e && (c ? p = function(a, l) {
    return n2.call(this, G3(e, a), l, e);
  } : n2.length > 2 && (p = function(a, l) {
    return n2.call(this, a, l, e);
  }));
  const u2 = d.call(i, p, o);
  return c && s ? s(u2) : u2;
}
function gn2(e, t2, n2, o) {
  const s = en2(e), r = s !== e && !/* @__PURE__ */ ce2(e);
  let i = n2, c = false;
  s !== e && (r ? (c = o.length === 0, i = function(p, u2, a) {
    return c && (c = false, p = G3(e, p)), n2.call(this, p, G3(e, u2), a, e);
  }) : n2.length > 3 && (i = function(p, u2, a) {
    return n2.call(this, p, u2, a, e);
  }));
  const d = s[t2](i, ...o);
  return c ? G3(e, d) : d;
}
function Et2(e, t2, n2) {
  const o = /* @__PURE__ */ O2(e);
  L2(o, "iterate", Fe2);
  const s = o[t2](...n2);
  return (s === -1 || s === false) && /* @__PURE__ */ ss(n2[0]) ? (n2[0] = /* @__PURE__ */ O2(n2[0]), o[t2](...n2)) : s;
}
function Ee2(e, t2, n2 = []) {
  Ho2(), Zt2();
  const o = (/* @__PURE__ */ O2(e))[t2].apply(e, n2);
  return Qt2(), Mo2(), o;
}
var zo2 = /* @__PURE__ */ An2("__proto__,__v_isRef,__isVue");
var Ln2 = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ke2));
function Go2(e) {
  Ke2(e) || (e = String(e));
  const t2 = /* @__PURE__ */ O2(this);
  return L2(t2, "has", e), t2.hasOwnProperty(e);
}
var Hn2 = class {
  constructor(e = false, t2 = false) {
    this._isReadonly = e, this._isShallow = t2;
  }
  get(e, t2, n2) {
    if (t2 === "__v_skip") return e.__v_skip;
    const o = this._isReadonly, s = this._isShallow;
    if (t2 === "__v_isReactive") return !o;
    if (t2 === "__v_isReadonly") return o;
    if (t2 === "__v_isShallow") return s;
    if (t2 === "__v_raw")
      return n2 === (o ? s ? Bn2 : Un2 : s ? ns : Kn2).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n2) ? e : void 0;
    const r = Te2(e);
    if (!o) {
      let c;
      if (r && (c = Uo2[t2])) return c;
      if (t2 === "hasOwnProperty") return Go2;
    }
    const i = Reflect.get(e, t2, /* @__PURE__ */ Ce2(e) ? e : n2);
    if ((Ke2(t2) ? Ln2.has(t2) : zo2(t2)) || (o || L2(e, "get", t2), s)) return i;
    if (/* @__PURE__ */ Ce2(i)) {
      const c = r && qt2(t2) ? i : i.value;
      return o && Ve2(c) ? /* @__PURE__ */ Re2(c) : c;
    }
    return Ve2(i) ? o ? /* @__PURE__ */ Re2(i) : /* @__PURE__ */ zn2(i) : i;
  }
};
var Wo2 = class extends Hn2 {
  constructor(e = false) {
    super(false, e);
  }
  set(e, t2, n2, o) {
    let s = e[t2];
    const r = Te2(e) && qt2(t2);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ ae2(s);
      if (!/* @__PURE__ */ ce2(n2) && !/* @__PURE__ */ ae2(n2) && (s = /* @__PURE__ */ O2(s), n2 = /* @__PURE__ */ O2(n2)), !r && /* @__PURE__ */ Ce2(s) && !/* @__PURE__ */ Ce2(n2)) return d ? (process.env.NODE_ENV !== "production" && he2(`Set operation on key "${String(t2)}" failed: target is readonly.`, e[t2]), true) : (s.value = n2, true);
    }
    const i = r ? Number(t2) < e.length : Vt2(e, t2), c = Reflect.set(e, t2, n2, /* @__PURE__ */ Ce2(e) ? e : o);
    return e === /* @__PURE__ */ O2(o) && c && (i ? ne2(n2, s) && oe2(e, "set", t2, n2, s) : oe2(e, "add", t2, n2)), c;
  }
  deleteProperty(e, t2) {
    const n2 = Vt2(e, t2), o = e[t2], s = Reflect.deleteProperty(e, t2);
    return s && n2 && oe2(e, "delete", t2, void 0, o), s;
  }
  has(e, t2) {
    const n2 = Reflect.has(e, t2);
    return (!Ke2(t2) || !Ln2.has(t2)) && L2(e, "has", t2), n2;
  }
  ownKeys(e) {
    return L2(e, "iterate", Te2(e) ? "length" : pe), Reflect.ownKeys(e);
  }
};
var Mn2 = class extends Hn2 {
  constructor(e = false) {
    super(true, e);
  }
  set(e, t2) {
    return process.env.NODE_ENV !== "production" && he2(`Set operation on key "${String(t2)}" failed: target is readonly.`, e), true;
  }
  deleteProperty(e, t2) {
    return process.env.NODE_ENV !== "production" && he2(`Delete operation on key "${String(t2)}" failed: target is readonly.`, e), true;
  }
};
var Jo2 = /* @__PURE__ */ new Wo2();
var Yo2 = /* @__PURE__ */ new Mn2();
var qo2 = /* @__PURE__ */ new Mn2(true);
var Rt2 = (e) => e;
var We2 = (e) => Reflect.getPrototypeOf(e);
function Zo2(e, t2, n2) {
  return function(...o) {
    const s = this.__v_raw, r = /* @__PURE__ */ O2(s), i = Se(r), c = e === "entries" || e === Symbol.iterator && i, d = e === "keys" && i, p = s[e](...o), u2 = n2 ? Rt2 : t2 ? Le2 : X2;
    return !t2 && L2(r, "iterate", d ? Ft2 : pe), ot2(Object.create(p), { next() {
      const { value: a, done: l } = p.next();
      return l ? {
        value: a,
        done: l
      } : {
        value: c ? [u2(a[0]), u2(a[1])] : u2(a),
        done: l
      };
    } });
  };
}
function Je2(e) {
  return function(...t2) {
    if (process.env.NODE_ENV !== "production") {
      const n2 = t2[0] ? `on key "${t2[0]}" ` : "";
      he2(`${Dn2(e)} operation ${n2}failed: target is readonly.`, /* @__PURE__ */ O2(this));
    }
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function Qo2(e, t2) {
  const n2 = {
    get(o) {
      const s = this.__v_raw, r = /* @__PURE__ */ O2(s), i = /* @__PURE__ */ O2(o);
      e || (ne2(o, i) && L2(r, "get", o), L2(r, "get", i));
      const { has: c } = We2(r), d = t2 ? Rt2 : e ? Le2 : X2;
      if (c.call(r, o)) return d(s.get(o));
      if (c.call(r, i)) return d(s.get(i));
      s !== r && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && L2(/* @__PURE__ */ O2(o), "iterate", pe), o.size;
    },
    has(o) {
      const s = this.__v_raw, r = /* @__PURE__ */ O2(s), i = /* @__PURE__ */ O2(o);
      return e || (ne2(o, i) && L2(r, "has", o), L2(r, "has", i)), o === i ? s.has(o) : s.has(o) || s.has(i);
    },
    forEach(o, s) {
      const r = this, i = r.__v_raw, c = /* @__PURE__ */ O2(i), d = t2 ? Rt2 : e ? Le2 : X2;
      return !e && L2(c, "iterate", pe), i.forEach((p, u2) => o.call(s, d(p), d(u2), r));
    }
  };
  return ot2(n2, e ? {
    add: Je2("add"),
    set: Je2("set"),
    delete: Je2("delete"),
    clear: Je2("clear")
  } : {
    add(o) {
      const s = /* @__PURE__ */ O2(this), r = We2(s), i = /* @__PURE__ */ O2(o), c = !t2 && !/* @__PURE__ */ ce2(o) && !/* @__PURE__ */ ae2(o) ? i : o;
      return r.has.call(s, c) || ne2(o, c) && r.has.call(s, o) || ne2(i, c) && r.has.call(s, i) || (s.add(c), oe2(s, "add", c, c)), this;
    },
    set(o, s) {
      !t2 && !/* @__PURE__ */ ce2(s) && !/* @__PURE__ */ ae2(s) && (s = /* @__PURE__ */ O2(s));
      const r = /* @__PURE__ */ O2(this), { has: i, get: c } = We2(r);
      let d = i.call(r, o);
      d ? process.env.NODE_ENV !== "production" && _n2(r, i, o) : (o = /* @__PURE__ */ O2(o), d = i.call(r, o));
      const p = c.call(r, o);
      return r.set(o, s), d ? ne2(s, p) && oe2(r, "set", o, s, p) : oe2(r, "add", o, s), this;
    },
    delete(o) {
      const s = /* @__PURE__ */ O2(this), { has: r, get: i } = We2(s);
      let c = r.call(s, o);
      c ? process.env.NODE_ENV !== "production" && _n2(s, r, o) : (o = /* @__PURE__ */ O2(o), c = r.call(s, o));
      const d = i ? i.call(s, o) : void 0, p = s.delete(o);
      return c && oe2(s, "delete", o, void 0, d), p;
    },
    clear() {
      const o = /* @__PURE__ */ O2(this), s = o.size !== 0, r = process.env.NODE_ENV !== "production" ? Se(o) ? new Map(o) : new Set(o) : void 0, i = o.clear();
      return s && oe2(o, "clear", void 0, void 0, r), i;
    }
  }), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n2[o] = Zo2(o, e, t2);
  }), n2;
}
function tn2(e, t2) {
  const n2 = Qo2(e, t2);
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(Vt2(n2, s) && s in o ? n2 : o, s, r);
}
var Xo2 = { get: /* @__PURE__ */ tn2(false, false) };
var es2 = { get: /* @__PURE__ */ tn2(true, false) };
var ts = { get: /* @__PURE__ */ tn2(true, true) };
function _n2(e, t2, n2) {
  const o = /* @__PURE__ */ O2(n2);
  if (o !== n2 && t2.call(e, o)) {
    const s = In2(e);
    he2(`Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
var Kn2 = /* @__PURE__ */ new WeakMap();
var ns = /* @__PURE__ */ new WeakMap();
var Un2 = /* @__PURE__ */ new WeakMap();
var Bn2 = /* @__PURE__ */ new WeakMap();
function os3(e) {
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
// @__NO_SIDE_EFFECTS__
function zn2(e) {
  return /* @__PURE__ */ ae2(e) ? e : nn2(e, false, Jo2, Xo2, Kn2);
}
// @__NO_SIDE_EFFECTS__
function Re2(e) {
  return nn2(e, true, Yo2, es2, Un2);
}
// @__NO_SIDE_EFFECTS__
function et2(e) {
  return nn2(e, true, qo2, ts, Bn2);
}
function nn2(e, t2, n2, o, s) {
  if (!Ve2(e))
    return process.env.NODE_ENV !== "production" && he2(`value cannot be made ${t2 ? "readonly" : "reactive"}: ${String(e)}`), e;
  if (e.__v_raw && !(t2 && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
  const r = s.get(e);
  if (r) return r;
  const i = os3(In2(e));
  if (i === 0) return e;
  const c = new Proxy(e, i === 2 ? o : n2);
  return s.set(e, c), c;
}
// @__NO_SIDE_EFFECTS__
function Gn2(e) {
  return /* @__PURE__ */ ae2(e) ? /* @__PURE__ */ Gn2(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ae2(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ce2(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ss(e) {
  return e ? !!e.__v_raw : false;
}
// @__NO_SIDE_EFFECTS__
function O2(e) {
  const t2 = e && e.__v_raw;
  return t2 ? /* @__PURE__ */ O2(t2) : e;
}
var X2 = (e) => Ve2(e) ? /* @__PURE__ */ zn2(e) : e;
var Le2 = (e) => Ve2(e) ? /* @__PURE__ */ Re2(e) : e;
// @__NO_SIDE_EFFECTS__
function Ce2(e) {
  return e ? e.__v_isRef === true : false;
}
// @__NO_SIDE_EFFECTS__
function Lt2(e) {
  return rs(e, false);
}
function rs(e, t2) {
  return /* @__PURE__ */ Ce2(e) ? e : new is(e, t2);
}
var is = class {
  constructor(e, t2) {
    this.dep = new Xt2(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = t2 ? e : /* @__PURE__ */ O2(e), this._value = t2 ? e : X2(e), this.__v_isShallow = t2;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(e) {
    const t2 = this._rawValue, n2 = this.__v_isShallow || /* @__PURE__ */ ce2(e) || /* @__PURE__ */ ae2(e);
    e = n2 ? e : /* @__PURE__ */ O2(e), ne2(e, t2) && (this._rawValue = e, this._value = n2 ? e : X2(e), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: e,
      oldValue: t2
    }) : this.dep.trigger());
  }
};
var as = class {
  constructor(e, t2, n2) {
    this.fn = e, this.setter = t2, this._value = void 0, this.dep = new Xt2(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Pe2 - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t2, this.isSSR = n2;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && A2 !== this)
      return Vo(this, true), true;
    process.env.NODE_ENV;
  }
  get value() {
    const e = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Vn2(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter ? this.setter(e) : process.env.NODE_ENV !== "production" && he2("Write operation failed: computed value is readonly");
  }
};
// @__NO_SIDE_EFFECTS__
function bn2(e, t2, n2 = false) {
  let o, s;
  xo(e) ? o = e : (o = e.get, s = e.set);
  const r = new as(o, s, n2);
  return process.env.NODE_ENV !== "production" && t2 && !n2 && (r.onTrack = t2.onTrack, r.onTrigger = t2.onTrigger), r;
}
function Ht2(e = "") {
  return `${e}${Date.now().toString(36)}${Math.random().toString(36).substring(2, 10)}`;
}
function cs(e) {
  const t2 = {}, n2 = {}, o = /* @__PURE__ */ new WeakMap(), s = {}, r = [];
  return Object.freeze({
    registerAgg(i) {
      if (i.isInitialized.value) throw new Error("Agg must register before initialized");
      if (s[i.__id]) throw new Error("Agg already registered");
      i.type === "MultiInstance" && i.api.events.destroyed.listen(() => {
        delete s[i.__id];
      }), s[i.__id] = i;
      const c = [];
      for (const d of Object.values(t2)) d.mount({
        api: i.api,
        __aggId: i.__id,
        isInitialized: i.isInitialized
      });
      for (const d of Object.values(n2)) d.mount({
        api: i.api,
        __aggId: i.__id
      }), c.push(d.__id);
      if (o.set(i, c), ls(i)) {
        const d = i.api.events.destroyed.listen(() => {
          delete s[i.__id], e?.(i);
          for (const p of r) p(i);
          d?.();
        });
      }
    },
    onDestroy(i) {
      r.push(i);
    },
    createSetupPlugin(i) {
      let c;
      return i instanceof Function ? c = i() : c = i, Object.freeze({
        __id: Ht2(),
        type: "Setup",
        mount(d) {
          if (d.isInitialized.value) throw new Error("Can not setup after initialized");
          c.mount({
            api: d.api,
            __aggId: d.__aggId
          });
        }
      });
    },
    createHotSwapPlugin(i) {
      let c;
      return i instanceof Function ? c = i() : c = i, Object.freeze({
        __id: Ht2(),
        type: "HotSwap",
        mount: c.mount,
        unmount: c.unmount
      });
    },
    registerPlugin(i) {
      if (i.type === "Setup") {
        if (t2[i.__id]) throw new Error("Plugin already registered");
        t2[i.__id] = i;
        for (const c in s) i.mount({
          api: s[c].api,
          __aggId: s[c].__id,
          isInitialized: s[c].isInitialized
        });
      } else if (i.type === "HotSwap") {
        n2[i.__id] = i;
        for (const c in s) o.has(s[c]) && !o.get(s[c]).includes(i.__id) && (i.mount({
          api: s[c].api,
          __aggId: s[c].__id
        }), o.get(s[c]).push(i.__id));
      } else isNever(i);
    },
    unregisterPlugin(i) {
      if (i.type === "Setup") throw new Error("Can not unregister setup plugin");
      if (i.type === "HotSwap") {
        for (const c in s) o.has(s[c]) && o.get(s[c]).includes(i.__id) && i.unmount({
          api: s[c].api,
          __aggId: s[c].__id
        });
        delete n2[i.__id];
      } else isNever(i);
    }
  });
}
function us(e, t2) {
  return cs(t2);
}
function ls(e) {
  return e.type === "MultiInstance";
}
function ps(e) {
  const t2 = ds(e);
  return /* @__PURE__ */ et2({
    states: t2.states,
    commands: t2.commands,
    events: t2.events
  });
}
function ds(e) {
  const t2 = e.states;
  for (const i of Object.keys(e.states)) t2[i] = /* @__PURE__ */ Re2(t2[i]);
  const n2 = /* @__PURE__ */ et2(e.states), o = /* @__PURE__ */ Re2(e.commands), s = {}, r = e.events;
  for (const i in e.events) s[i] = r[i].api;
  return /* @__PURE__ */ et2({
    states: n2,
    commands: o,
    events: /* @__PURE__ */ et2(s),
    destroy: e.destroy
  });
}
function fs6(e) {
  const { resolve: t2, reject: n2, promise: o } = new Oo.Deferred();
  let s = /* @__PURE__ */ Lt2(false);
  function r(a) {
    if (s.value === true) throw new Error("Agg already initialized");
    i.push(a());
  }
  const i = [], c = e({
    onCreated(a) {
      Promise.resolve().then(a);
    },
    onBeforeInitialize: r,
    isInitialized: /* @__PURE__ */ bn2(() => s.value),
    untilInitialized: o
  });
  setTimeout(() => Promise.all(i).then(() => {
    t2(), s.value = true;
  }).catch((a) => {
    n2(a);
  }), 0);
  const d = c.states || {}, p = c.commands || {}, u2 = c.events || {};
  return {
    __id: Ht2(),
    type: "Singleton",
    api: ps({
      states: d,
      commands: p,
      events: u2,
      destroy: () => {
      }
    }),
    isInitialized: /* @__PURE__ */ bn2(() => s.value),
    async untilInitialized() {
      return await o.catch((a) => {
        throw new Error(`Failed to initialize Agg: ${a.message}
Stack : ${a.stack || "unkown"}`);
      });
    }
  };
}
var Ye2;
function Wn2(e) {
  return fs6(() => {
    const t2 = /* @__PURE__ */ Lt2(e), n2 = /* @__PURE__ */ Lt2({});
    let o = () => [], s = () => [], r = () => [], i = () => [], c = () => [], d = () => [], p = () => [];
    return {
      states: {
        designer: t2,
        context: n2
      },
      commands: {
        genCodeFiles() {
          return p();
        },
        clearCaches() {
        },
        setContext(u2) {
          n2.value = u2;
        },
        setDomainDesigner(u2) {
          this.clearCaches(), t2.value = u2;
        },
        _genInfoCode(...u2) {
          return o(...u2);
        },
        _setInfoCodeProvider(u2) {
          o = u2;
        },
        _genCommandCode(...u2) {
          return s(...u2);
        },
        _setCommandCodeProvider(u2) {
          s = u2;
        },
        _genFacadeCommandCode(...u2) {
          return r(...u2);
        },
        _setFacadeCommandCodeProvider(u2) {
          r = u2;
        },
        _genAggCode(...u2) {
          return i(...u2);
        },
        _setAggCodeProvider(u2) {
          i = u2;
        },
        _genEventCode(...u2) {
          return c(...u2);
        },
        _setEventCodeProvider(u2) {
          c = u2;
        },
        _genReadModelCode(...u2) {
          return d(...u2);
        },
        _setReadModelCodeProvider(u2) {
          d = u2;
        },
        _setCodeFileProvider(u2) {
          p = u2;
        }
      }
    };
  });
}
var Ue2 = us(Wn2);
function mi(e) {
  if (!Ye2) {
    if (!e) throw new Error("designer is required");
    Ye2 = Wn2(e), Ue2.registerAgg(Ye2);
  }
  return Ye2.api;
}
var hi = Object.freeze({
  Note: "Note",
  Info: "Info",
  Actor: "Actor",
  Command: "Command",
  FacadeCommand: "FacadeCommand",
  Event: "Event",
  Agg: "Agg",
  System: "System",
  Policy: "Policy",
  Service: "Service",
  ReadModel: "ReadModel"
});
function _t2(e) {
  return e && e._attributes && e._attributes.rule === "Info";
}
function ms(e) {
  return e && e._attributes && e._attributes.rule === "Agg";
}
function hs(e) {
  return e && e._attributes && e._attributes.rule === "Command";
}
function vs(e) {
  return e && e._attributes && e._attributes.rule === "FacadeCommand";
}
function gs(e) {
  return e && e._attributes && e._attributes.rule === "Event";
}
function _s(e) {
  return e && e._attributes && e._attributes.rule === "ReadModel";
}
// @__NO_SIDE_EFFECTS__
function bs(e) {
  const t2 = /* @__PURE__ */ Object.create(null);
  for (const n2 of e.split(",")) t2[n2] = 1;
  return (n2) => n2 in t2;
}
var B2 = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
var $e2 = () => {
};
var Cs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
var $s = (e) => e.startsWith("onUpdate:");
var M2 = Object.assign;
var ys = (e, t2) => {
  const n2 = e.indexOf(t2);
  n2 > -1 && e.splice(n2, 1);
};
var Ns = Object.prototype.hasOwnProperty;
var D2 = (e, t2) => Ns.call(e, t2);
var k2 = Array.isArray;
var ye2 = (e) => bt2(e) === "[object Map]";
var ws = (e) => bt2(e) === "[object Set]";
var V3 = (e) => typeof e == "function";
var J2 = (e) => typeof e == "string";
var Be2 = (e) => typeof e == "symbol";
var R2 = (e) => e !== null && typeof e == "object";
var Es = (e) => (R2(e) || V3(e)) && V3(e.then) && V3(e.catch);
var js = Object.prototype.toString;
var bt2 = (e) => js.call(e);
var Jn2 = (e) => bt2(e).slice(8, -1);
var Os = (e) => bt2(e) === "[object Object]";
var on2 = (e) => J2(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
var Ss = (e) => {
  const t2 = /* @__PURE__ */ Object.create(null);
  return ((n2) => t2[n2] || (t2[n2] = e(n2)));
};
var xs = Ss((e) => e.charAt(0).toUpperCase() + e.slice(1));
var Q2 = (e, t2) => !Object.is(e, t2);
var As = (e, t2, n2, o = false) => {
  Object.defineProperty(e, t2, {
    configurable: true,
    enumerable: false,
    writable: o,
    value: n2
  });
};
var Cn2;
var Ct2 = () => Cn2 || (Cn2 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function sn2(e) {
  if (k2(e)) {
    const t2 = {};
    for (let n2 = 0; n2 < e.length; n2++) {
      const o = e[n2], s = J2(o) ? Ts(o) : sn2(o);
      if (s) for (const r in s) t2[r] = s[r];
    }
    return t2;
  } else if (J2(e) || R2(e)) return e;
}
var ks = /;(?![^(]*\))/g;
var Is = /:([^]+)/;
var Ds = /\/\*[^]*?\*\//g;
function Ts(e) {
  const t2 = {};
  return e.replace(Ds, "").split(ks).forEach((n2) => {
    if (n2) {
      const o = n2.split(Is);
      o.length > 1 && (t2[o[0].trim()] = o[1].trim());
    }
  }), t2;
}
function rn2(e) {
  let t2 = "";
  if (J2(e)) t2 = e;
  else if (k2(e)) for (let n2 = 0; n2 < e.length; n2++) {
    const o = rn2(e[n2]);
    o && (t2 += o + " ");
  }
  else if (R2(e)) for (const n2 in e) e[n2] && (t2 += n2 + " ");
  return t2.trim();
}
function Vs(e, ...t2) {
}
var tt2;
function Ps() {
  return tt2;
}
var S3;
var jt2 = /* @__PURE__ */ new WeakSet();
var Fs = class {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, tt2 && (tt2.active ? tt2.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, jt2.has(this) && (jt2.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Rs(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, $n2(this), qn2(this);
    const e = S3, t2 = z;
    S3 = this, z = true;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV, Zn2(this), S3 = e, z = t2, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep) un2(e);
      this.deps = this.depsTail = void 0, $n2(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? jt2.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    Mt2(this) && this.run();
  }
  get dirty() {
    return Mt2(this);
  }
};
var Yn2 = 0;
var ke2;
var Ie2;
function Rs(e, t2 = false) {
  if (e.flags |= 8, t2) {
    e.next = Ie2, Ie2 = e;
    return;
  }
  e.next = ke2, ke2 = e;
}
function an2() {
  Yn2++;
}
function cn2() {
  if (--Yn2 > 0) return;
  if (Ie2) {
    let t2 = Ie2;
    for (Ie2 = void 0; t2; ) {
      const n2 = t2.next;
      t2.next = void 0, t2.flags &= -9, t2 = n2;
    }
  }
  let e;
  for (; ke2; ) {
    let t2 = ke2;
    for (ke2 = void 0; t2; ) {
      const n2 = t2.next;
      if (t2.next = void 0, t2.flags &= -9, t2.flags & 1) try {
        t2.trigger();
      } catch (o) {
        e || (e = o);
      }
      t2 = n2;
    }
  }
  if (e) throw e;
}
function qn2(e) {
  for (let t2 = e.deps; t2; t2 = t2.nextDep) t2.version = -1, t2.prevActiveLink = t2.dep.activeLink, t2.dep.activeLink = t2;
}
function Zn2(e) {
  let t2, n2 = e.depsTail, o = n2;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === n2 && (n2 = s), un2(o), Hs(o)) : t2 = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = t2, e.depsTail = n2;
}
function Mt2(e) {
  for (let t2 = e.deps; t2; t2 = t2.nextDep) if (t2.dep.version !== t2.version || t2.dep.computed && (Ls(t2.dep.computed) || t2.dep.version !== t2.version)) return true;
  return !!e._dirty;
}
function Ls(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === st2) || (e.globalVersion = st2, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Mt2(e)))) return;
  e.flags |= 2;
  const t2 = e.dep, n2 = S3, o = z;
  S3 = e, z = true;
  try {
    qn2(e);
    const s = e.fn(e._value);
    (t2.version === 0 || Q2(s, e._value)) && (e.flags |= 128, e._value = s, t2.version++);
  } catch (s) {
    throw t2.version++, s;
  } finally {
    S3 = n2, z = o, Zn2(e), e.flags &= -3;
  }
}
function un2(e, t2 = false) {
  const { dep: n2, prevSub: o, nextSub: s } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n2.subsHead === e && (n2.subsHead = s), n2.subs === e && (n2.subs = o, !o && n2.computed)) {
    n2.computed.flags &= -5;
    for (let r = n2.computed.deps; r; r = r.nextDep) un2(r, true);
  }
  !t2 && !--n2.sc && n2.map && n2.map.delete(n2.key);
}
function Hs(e) {
  const { prevDep: t2, nextDep: n2 } = e;
  t2 && (t2.nextDep = n2, e.prevDep = void 0), n2 && (n2.prevDep = t2, e.nextDep = void 0);
}
var z = true;
var Qn2 = [];
function ze2() {
  Qn2.push(z), z = false;
}
function Ge2() {
  const e = Qn2.pop();
  z = e === void 0 ? true : e;
}
function $n2(e) {
  const { cleanup: t2 } = e;
  if (e.cleanup = void 0, t2) {
    const n2 = S3;
    S3 = void 0;
    try {
      t2();
    } finally {
      S3 = n2;
    }
  }
}
var st2 = 0;
var Ms = class {
  constructor(e, t2) {
    this.sub = e, this.dep = t2, this.version = t2.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
};
var Ks = class {
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(e) {
    if (!S3 || !z || S3 === this.computed) return;
    let t2 = this.activeLink;
    if (t2 === void 0 || t2.sub !== S3) t2 = this.activeLink = new Ms(S3, this), S3.deps ? (t2.prevDep = S3.depsTail, S3.depsTail.nextDep = t2, S3.depsTail = t2) : S3.deps = S3.depsTail = t2, Xn2(t2);
    else if (t2.version === -1 && (t2.version = this.version, t2.nextDep)) {
      const n2 = t2.nextDep;
      n2.prevDep = t2.prevDep, t2.prevDep && (t2.prevDep.nextDep = n2), t2.prevDep = S3.depsTail, t2.nextDep = void 0, S3.depsTail.nextDep = t2, S3.depsTail = t2, S3.deps === t2 && (S3.deps = n2);
    }
    return process.env.NODE_ENV !== "production" && S3.onTrack && S3.onTrack(M2({ effect: S3 }, e)), t2;
  }
  trigger(e) {
    this.version++, st2++, this.notify(e);
  }
  notify(e) {
    an2();
    try {
      if (process.env.NODE_ENV !== "production") for (let t2 = this.subsHead; t2; t2 = t2.nextSub) t2.sub.onTrigger && !(t2.sub.flags & 8) && t2.sub.onTrigger(M2({ effect: t2.sub }, e));
      for (let t2 = this.subs; t2; t2 = t2.prevSub) t2.sub.notify() && t2.sub.dep.notify();
    } finally {
      cn2();
    }
  }
};
function Xn2(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t2 = e.dep.computed;
    if (t2 && !e.dep.subs) {
      t2.flags |= 20;
      for (let o = t2.deps; o; o = o.nextDep) Xn2(o);
    }
    const n2 = e.dep.subs;
    n2 !== e && (e.prevSub = n2, n2 && (n2.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
var Kt2 = /* @__PURE__ */ new WeakMap();
var de2 = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "Object iterate" : "");
var Ut2 = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "Map keys iterate" : "");
var He2 = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "Array iterate" : "");
function P3(e, t2, n2) {
  if (z && S3) {
    let o = Kt2.get(e);
    o || Kt2.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n2);
    s || (o.set(n2, s = new Ks()), s.map = o, s.key = n2), process.env.NODE_ENV !== "production" ? s.track({
      target: e,
      type: t2,
      key: n2
    }) : s.track();
  }
}
function se2(e, t2, n2, o, s, r) {
  const i = Kt2.get(e);
  if (!i) {
    st2++;
    return;
  }
  const c = (d) => {
    d && (process.env.NODE_ENV !== "production" ? d.trigger({
      target: e,
      type: t2,
      key: n2,
      newValue: o,
      oldValue: s,
      oldTarget: r
    }) : d.trigger());
  };
  if (an2(), t2 === "clear") i.forEach(c);
  else {
    const d = k2(e), p = d && on2(n2);
    if (d && n2 === "length") {
      const u2 = Number(o);
      i.forEach((a, l) => {
        (l === "length" || l === He2 || !Be2(l) && l >= u2) && c(a);
      });
    } else switch ((n2 !== void 0 || i.has(void 0)) && c(i.get(n2)), p && c(i.get(He2)), t2) {
      case "add":
        d ? p && c(i.get("length")) : (c(i.get(de2)), ye2(e) && c(i.get(Ut2)));
        break;
      case "delete":
        d || (c(i.get(de2)), ye2(e) && c(i.get(Ut2)));
        break;
      case "set":
        ye2(e) && c(i.get(de2));
        break;
    }
  }
  cn2();
}
function _e(e) {
  const t2 = /* @__PURE__ */ E2(e);
  return t2 === e ? t2 : (P3(t2, "iterate", He2), /* @__PURE__ */ K2(e) ? t2 : t2.map(ve2));
}
function ln2(e) {
  return P3(e = /* @__PURE__ */ E2(e), "iterate", He2), e;
}
function W2(e, t2) {
  return /* @__PURE__ */ ee2(e) ? it2(/* @__PURE__ */ fe2(e) ? ve2(t2) : t2) : ve2(t2);
}
var Us = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ot2(this, Symbol.iterator, (e) => W2(this, e));
  },
  concat(...e) {
    return _e(this).concat(...e.map((t2) => k2(t2) ? _e(t2) : t2));
  },
  entries() {
    return Ot2(this, "entries", (e) => (e[1] = W2(this, e[1]), e));
  },
  every(e, t2) {
    return q2(this, "every", e, t2, void 0, arguments);
  },
  filter(e, t2) {
    return q2(this, "filter", e, t2, (n2) => n2.map((o) => W2(this, o)), arguments);
  },
  find(e, t2) {
    return q2(this, "find", e, t2, (n2) => W2(this, n2), arguments);
  },
  findIndex(e, t2) {
    return q2(this, "findIndex", e, t2, void 0, arguments);
  },
  findLast(e, t2) {
    return q2(this, "findLast", e, t2, (n2) => W2(this, n2), arguments);
  },
  findLastIndex(e, t2) {
    return q2(this, "findLastIndex", e, t2, void 0, arguments);
  },
  forEach(e, t2) {
    return q2(this, "forEach", e, t2, void 0, arguments);
  },
  includes(...e) {
    return St2(this, "includes", e);
  },
  indexOf(...e) {
    return St2(this, "indexOf", e);
  },
  join(e) {
    return _e(this).join(e);
  },
  lastIndexOf(...e) {
    return St2(this, "lastIndexOf", e);
  },
  map(e, t2) {
    return q2(this, "map", e, t2, void 0, arguments);
  },
  pop() {
    return je2(this, "pop");
  },
  push(...e) {
    return je2(this, "push", e);
  },
  reduce(e, ...t2) {
    return yn2(this, "reduce", e, t2);
  },
  reduceRight(e, ...t2) {
    return yn2(this, "reduceRight", e, t2);
  },
  shift() {
    return je2(this, "shift");
  },
  some(e, t2) {
    return q2(this, "some", e, t2, void 0, arguments);
  },
  splice(...e) {
    return je2(this, "splice", e);
  },
  toReversed() {
    return _e(this).toReversed();
  },
  toSorted(e) {
    return _e(this).toSorted(e);
  },
  toSpliced(...e) {
    return _e(this).toSpliced(...e);
  },
  unshift(...e) {
    return je2(this, "unshift", e);
  },
  values() {
    return Ot2(this, "values", (e) => W2(this, e));
  }
};
function Ot2(e, t2, n2) {
  const o = ln2(e), s = o[t2]();
  return o !== e && !/* @__PURE__ */ K2(e) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.done || (r.value = n2(r.value)), r;
  }), s;
}
var Bs = Array.prototype;
function q2(e, t2, n2, o, s, r) {
  const i = ln2(e), c = i !== e && !/* @__PURE__ */ K2(e), d = i[t2];
  if (d !== Bs[t2]) {
    const a = d.apply(e, r);
    return c ? ve2(a) : a;
  }
  let p = n2;
  i !== e && (c ? p = function(a, l) {
    return n2.call(this, W2(e, a), l, e);
  } : n2.length > 2 && (p = function(a, l) {
    return n2.call(this, a, l, e);
  }));
  const u2 = d.call(i, p, o);
  return c && s ? s(u2) : u2;
}
function yn2(e, t2, n2, o) {
  const s = ln2(e), r = s !== e && !/* @__PURE__ */ K2(e);
  let i = n2, c = false;
  s !== e && (r ? (c = o.length === 0, i = function(p, u2, a) {
    return c && (c = false, p = W2(e, p)), n2.call(this, p, W2(e, u2), a, e);
  }) : n2.length > 3 && (i = function(p, u2, a) {
    return n2.call(this, p, u2, a, e);
  }));
  const d = s[t2](i, ...o);
  return c ? W2(e, d) : d;
}
function St2(e, t2, n2) {
  const o = /* @__PURE__ */ E2(e);
  P3(o, "iterate", He2);
  const s = o[t2](...n2);
  return (s === -1 || s === false) && /* @__PURE__ */ rt2(n2[0]) ? (n2[0] = /* @__PURE__ */ E2(n2[0]), o[t2](...n2)) : s;
}
function je2(e, t2, n2 = []) {
  ze2(), an2();
  const o = (/* @__PURE__ */ E2(e))[t2].apply(e, n2);
  return cn2(), Ge2(), o;
}
var zs = /* @__PURE__ */ bs("__proto__,__v_isRef,__isVue");
var eo2 = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Be2));
function Gs(e) {
  Be2(e) || (e = String(e));
  const t2 = /* @__PURE__ */ E2(this);
  return P3(t2, "has", e), t2.hasOwnProperty(e);
}
var to2 = class {
  constructor(e = false, t2 = false) {
    this._isReadonly = e, this._isShallow = t2;
  }
  get(e, t2, n2) {
    if (t2 === "__v_skip") return e.__v_skip;
    const o = this._isReadonly, s = this._isShallow;
    if (t2 === "__v_isReactive") return !o;
    if (t2 === "__v_isReadonly") return o;
    if (t2 === "__v_isShallow") return s;
    if (t2 === "__v_raw") return n2 === (o ? s ? ro2 : so2 : s ? nr2 : oo2).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n2) ? e : void 0;
    const r = k2(e);
    if (!o) {
      let c;
      if (r && (c = Us[t2])) return c;
      if (t2 === "hasOwnProperty") return Gs;
    }
    const i = Reflect.get(e, t2, /* @__PURE__ */ H2(e) ? e : n2);
    if ((Be2(t2) ? eo2.has(t2) : zs(t2)) || (o || P3(e, "get", t2), s)) return i;
    if (/* @__PURE__ */ H2(i)) {
      const c = r && on2(t2) ? i : i.value;
      return o && R2(c) ? /* @__PURE__ */ zt2(c) : c;
    }
    return R2(i) ? o ? /* @__PURE__ */ zt2(i) : /* @__PURE__ */ io2(i) : i;
  }
};
var Ws = class extends to2 {
  constructor(e = false) {
    super(false, e);
  }
  set(e, t2, n2, o) {
    let s = e[t2];
    const r = k2(e) && on2(t2);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ ee2(s);
      if (!/* @__PURE__ */ K2(n2) && !/* @__PURE__ */ ee2(n2) && (s = /* @__PURE__ */ E2(s), n2 = /* @__PURE__ */ E2(n2)), !r && /* @__PURE__ */ H2(s) && !/* @__PURE__ */ H2(n2)) return d ? (process.env.NODE_ENV !== "production" && (`${String(t2)}`, e[t2]), true) : (s.value = n2, true);
    }
    const i = r ? Number(t2) < e.length : D2(e, t2), c = Reflect.set(e, t2, n2, /* @__PURE__ */ H2(e) ? e : o);
    return e === /* @__PURE__ */ E2(o) && c && (i ? Q2(n2, s) && se2(e, "set", t2, n2, s) : se2(e, "add", t2, n2)), c;
  }
  deleteProperty(e, t2) {
    const n2 = D2(e, t2), o = e[t2], s = Reflect.deleteProperty(e, t2);
    return s && n2 && se2(e, "delete", t2, void 0, o), s;
  }
  has(e, t2) {
    const n2 = Reflect.has(e, t2);
    return (!Be2(t2) || !eo2.has(t2)) && P3(e, "has", t2), n2;
  }
  ownKeys(e) {
    return P3(e, "iterate", k2(e) ? "length" : de2), Reflect.ownKeys(e);
  }
};
var no2 = class extends to2 {
  constructor(e = false) {
    super(true, e);
  }
  set(e, t2) {
    return process.env.NODE_ENV !== "production" && `${String(t2)}`, true;
  }
  deleteProperty(e, t2) {
    return process.env.NODE_ENV !== "production" && `${String(t2)}`, true;
  }
};
var Js = /* @__PURE__ */ new Ws();
var Ys = /* @__PURE__ */ new no2();
var qs = /* @__PURE__ */ new no2(true);
var Bt2 = (e) => e;
var qe2 = (e) => Reflect.getPrototypeOf(e);
function Zs(e, t2, n2) {
  return function(...o) {
    const s = this.__v_raw, r = /* @__PURE__ */ E2(s), i = ye2(r), c = e === "entries" || e === Symbol.iterator && i, d = e === "keys" && i, p = s[e](...o), u2 = n2 ? Bt2 : t2 ? it2 : ve2;
    return !t2 && P3(r, "iterate", d ? Ut2 : de2), M2(Object.create(p), { next() {
      const { value: a, done: l } = p.next();
      return l ? {
        value: a,
        done: l
      } : {
        value: c ? [u2(a[0]), u2(a[1])] : u2(a),
        done: l
      };
    } });
  };
}
function Ze2(e) {
  return function(...t2) {
    if (process.env.NODE_ENV !== "production") {
      const n2 = t2[0] ? `on key "${t2[0]}" ` : "";
      `${xs(e)}${n2}`;
    }
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function Qs(e, t2) {
  const n2 = {
    get(o) {
      const s = this.__v_raw, r = /* @__PURE__ */ E2(s), i = /* @__PURE__ */ E2(o);
      e || (Q2(o, i) && P3(r, "get", o), P3(r, "get", i));
      const { has: c } = qe2(r), d = t2 ? Bt2 : e ? it2 : ve2;
      if (c.call(r, o)) return d(s.get(o));
      if (c.call(r, i)) return d(s.get(i));
      s !== r && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && P3(/* @__PURE__ */ E2(o), "iterate", de2), o.size;
    },
    has(o) {
      const s = this.__v_raw, r = /* @__PURE__ */ E2(s), i = /* @__PURE__ */ E2(o);
      return e || (Q2(o, i) && P3(r, "has", o), P3(r, "has", i)), o === i ? s.has(o) : s.has(o) || s.has(i);
    },
    forEach(o, s) {
      const r = this, i = r.__v_raw, c = /* @__PURE__ */ E2(i), d = t2 ? Bt2 : e ? it2 : ve2;
      return !e && P3(c, "iterate", de2), i.forEach((p, u2) => o.call(s, d(p), d(u2), r));
    }
  };
  return M2(n2, e ? {
    add: Ze2("add"),
    set: Ze2("set"),
    delete: Ze2("delete"),
    clear: Ze2("clear")
  } : {
    add(o) {
      const s = /* @__PURE__ */ E2(this), r = qe2(s), i = /* @__PURE__ */ E2(o), c = !t2 && !/* @__PURE__ */ K2(o) && !/* @__PURE__ */ ee2(o) ? i : o;
      return r.has.call(s, c) || Q2(o, c) && r.has.call(s, o) || Q2(i, c) && r.has.call(s, i) || (s.add(c), se2(s, "add", c, c)), this;
    },
    set(o, s) {
      !t2 && !/* @__PURE__ */ K2(s) && !/* @__PURE__ */ ee2(s) && (s = /* @__PURE__ */ E2(s));
      const r = /* @__PURE__ */ E2(this), { has: i, get: c } = qe2(r);
      let d = i.call(r, o);
      d ? process.env.NODE_ENV !== "production" && Nn2(r, i, o) : (o = /* @__PURE__ */ E2(o), d = i.call(r, o));
      const p = c.call(r, o);
      return r.set(o, s), d ? Q2(s, p) && se2(r, "set", o, s, p) : se2(r, "add", o, s), this;
    },
    delete(o) {
      const s = /* @__PURE__ */ E2(this), { has: r, get: i } = qe2(s);
      let c = r.call(s, o);
      c ? process.env.NODE_ENV !== "production" && Nn2(s, r, o) : (o = /* @__PURE__ */ E2(o), c = r.call(s, o));
      const d = i ? i.call(s, o) : void 0, p = s.delete(o);
      return c && se2(s, "delete", o, void 0, d), p;
    },
    clear() {
      const o = /* @__PURE__ */ E2(this), s = o.size !== 0, r = process.env.NODE_ENV !== "production" ? ye2(o) ? new Map(o) : new Set(o) : void 0, i = o.clear();
      return s && se2(o, "clear", void 0, void 0, r), i;
    }
  }), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n2[o] = Zs(o, e, t2);
  }), n2;
}
function pn2(e, t2) {
  const n2 = Qs(e, t2);
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(D2(n2, s) && s in o ? n2 : o, s, r);
}
var Xs = { get: /* @__PURE__ */ pn2(false, false) };
var er2 = { get: /* @__PURE__ */ pn2(true, false) };
var tr2 = { get: /* @__PURE__ */ pn2(true, true) };
function Nn2(e, t2, n2) {
  const o = /* @__PURE__ */ E2(n2);
  o !== n2 && t2.call(e, o) && `${Jn2(e)}`;
}
var oo2 = /* @__PURE__ */ new WeakMap();
var nr2 = /* @__PURE__ */ new WeakMap();
var so2 = /* @__PURE__ */ new WeakMap();
var ro2 = /* @__PURE__ */ new WeakMap();
function or2(e) {
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
// @__NO_SIDE_EFFECTS__
function io2(e) {
  return /* @__PURE__ */ ee2(e) ? e : dn2(e, false, Js, Xs, oo2);
}
// @__NO_SIDE_EFFECTS__
function zt2(e) {
  return dn2(e, true, Ys, er2, so2);
}
// @__NO_SIDE_EFFECTS__
function Qe2(e) {
  return dn2(e, true, qs, tr2, ro2);
}
function dn2(e, t2, n2, o, s) {
  if (!R2(e)) return process.env.NODE_ENV !== "production" && `${String(e)}`, e;
  if (e.__v_raw && !(t2 && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
  const r = s.get(e);
  if (r) return r;
  const i = or2(Jn2(e));
  if (i === 0) return e;
  const c = new Proxy(e, i === 2 ? o : n2);
  return s.set(e, c), c;
}
// @__NO_SIDE_EFFECTS__
function fe2(e) {
  return /* @__PURE__ */ ee2(e) ? /* @__PURE__ */ fe2(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ee2(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function K2(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function rt2(e) {
  return e ? !!e.__v_raw : false;
}
// @__NO_SIDE_EFFECTS__
function E2(e) {
  const t2 = e && e.__v_raw;
  return t2 ? /* @__PURE__ */ E2(t2) : e;
}
function sr2(e) {
  return !D2(e, "__v_skip") && Object.isExtensible(e) && As(e, "__v_skip", true), e;
}
var ve2 = (e) => R2(e) ? /* @__PURE__ */ io2(e) : e;
var it2 = (e) => R2(e) ? /* @__PURE__ */ zt2(e) : e;
// @__NO_SIDE_EFFECTS__
function H2(e) {
  return e ? e.__v_isRef === true : false;
}
function rr2(e) {
  return /* @__PURE__ */ H2(e) ? e.value : e;
}
var ir2 = {
  get: (e, t2, n2) => t2 === "__v_raw" ? e : rr2(Reflect.get(e, t2, n2)),
  set: (e, t2, n2, o) => {
    const s = e[t2];
    return /* @__PURE__ */ H2(s) && !/* @__PURE__ */ H2(n2) ? (s.value = n2, true) : Reflect.set(e, t2, n2, o);
  }
};
function ar2(e) {
  return /* @__PURE__ */ fe2(e) ? e : new Proxy(e, ir2);
}
var Xe2 = {};
var at2 = /* @__PURE__ */ new WeakMap();
var le2 = void 0;
function cr2(e, t2 = false, n2 = le2) {
  if (n2) {
    let o = at2.get(n2);
    o || at2.set(n2, o = []), o.push(e);
  } else process.env.NODE_ENV;
}
function ur2(e, t2, n2 = B2) {
  const { immediate: o, deep: s, once: r, scheduler: i, augmentJob: c, call: d } = n2, p = (f2) => {
    (n2.onWarn || Vs)("Invalid watch source: ", f2, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, u2 = (f2) => s ? f2 : /* @__PURE__ */ K2(f2) || s === false || s === 0 ? re2(f2, 1) : re2(f2);
  let a, l, v3, y2, b2 = false, m = false;
  if (/* @__PURE__ */ H2(e) ? (l = () => e.value, b2 = /* @__PURE__ */ K2(e)) : /* @__PURE__ */ fe2(e) ? (l = () => u2(e), b2 = true) : k2(e) ? (m = true, b2 = e.some((f2) => /* @__PURE__ */ fe2(f2) || /* @__PURE__ */ K2(f2)), l = () => e.map((f2) => {
    if (/* @__PURE__ */ H2(f2)) return f2.value;
    if (/* @__PURE__ */ fe2(f2)) return u2(f2);
    if (V3(f2)) return d ? d(f2, 2) : f2();
    process.env.NODE_ENV !== "production" && p(f2);
  })) : V3(e) ? t2 ? l = d ? () => d(e, 2) : e : l = () => {
    if (v3) {
      ze2();
      try {
        v3();
      } finally {
        Ge2();
      }
    }
    const f2 = le2;
    le2 = a;
    try {
      return d ? d(e, 3, [y2]) : e(y2);
    } finally {
      le2 = f2;
    }
  } : (l = $e2, process.env.NODE_ENV !== "production" && p(e)), t2 && s) {
    const f2 = l, g2 = s === true ? 1 / 0 : s;
    l = () => re2(f2(), g2);
  }
  const $2 = Ps(), h2 = () => {
    a.stop(), $2 && $2.active && ys($2.effects, a);
  };
  if (r && t2) {
    const f2 = t2;
    t2 = (...g2) => {
      const w = f2(...g2);
      return h2(), w;
    };
  }
  let _ = m ? new Array(e.length).fill(Xe2) : Xe2;
  const C2 = (f2) => {
    if (!(!(a.flags & 1) || !a.dirty && !f2)) if (t2) {
      const g2 = a.run();
      if (f2 || s || b2 || (m ? g2.some((w, x2) => Q2(w, _[x2])) : Q2(g2, _))) {
        v3 && v3();
        const w = le2;
        le2 = a;
        try {
          const x2 = [
            g2,
            _ === Xe2 ? void 0 : m && _[0] === Xe2 ? [] : _,
            y2
          ];
          _ = g2, d ? d(t2, 3, x2) : t2(...x2);
        } finally {
          le2 = w;
        }
      }
    } else a.run();
  };
  return c && c(C2), a = new Fs(l), a.scheduler = i ? () => i(C2, false) : C2, y2 = (f2) => cr2(f2, false, a), v3 = a.onStop = () => {
    const f2 = at2.get(a);
    if (f2) {
      if (d) d(f2, 4);
      else for (const g2 of f2) g2();
      at2.delete(a);
    }
  }, process.env.NODE_ENV !== "production" && (a.onTrack = n2.onTrack, a.onTrigger = n2.onTrigger), t2 ? o ? C2(true) : _ = a.run() : i ? i(C2.bind(null, true), true) : a.run(), h2.pause = a.pause.bind(a), h2.resume = a.resume.bind(a), h2.stop = h2, h2;
}
function re2(e, t2 = 1 / 0, n2) {
  if (t2 <= 0 || !R2(e) || e.__v_skip || (n2 = n2 || /* @__PURE__ */ new Map(), (n2.get(e) || 0) >= t2)) return e;
  if (n2.set(e, t2), t2--, /* @__PURE__ */ H2(e)) re2(e.value, t2, n2);
  else if (k2(e)) for (let o = 0; o < e.length; o++) re2(e[o], t2, n2);
  else if (ws(e) || ye2(e)) e.forEach((o) => {
    re2(o, t2, n2);
  });
  else if (Os(e)) {
    for (const o in e) re2(e[o], t2, n2);
    for (const o of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, o) && re2(e[o], t2, n2);
  }
  return e;
}
var me2 = [];
function lr2(e) {
  me2.push(e);
}
function pr2() {
  me2.pop();
}
var xt2 = false;
function T3(e, ...t2) {
  if (xt2) return;
  xt2 = true, ze2();
  const n2 = me2.length ? me2[me2.length - 1].component : null, o = n2 && n2.appContext.config.warnHandler, s = dr2();
  if (o) $t5(o, n2, 11, [
    e + t2.map((r) => {
      var i, c;
      return (c = (i = r.toString) == null ? void 0 : i.call(r)) != null ? c : JSON.stringify(r);
    }).join(""),
    n2 && n2.proxy,
    s.map(({ vnode: r }) => `at <${No2(n2, r.type)}>`).join(`
`),
    s
  ]);
  else {
    const r = [`[Vue warn]: ${e}`, ...t2];
    s.length && r.push(`
`, ...fr2(s));
  }
  Ge2(), xt2 = false;
}
function dr2() {
  let e = me2[me2.length - 1];
  if (!e) return [];
  const t2 = [];
  for (; e; ) {
    const n2 = t2[0];
    n2 && n2.vnode === e ? n2.recurseCount++ : t2.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t2;
}
function fr2(e) {
  const t2 = [];
  return e.forEach((n2, o) => {
    t2.push(...o === 0 ? [] : [`
`], ...mr(n2));
  }), t2;
}
function mr({ vnode: e, recurseCount: t2 }) {
  const n2 = t2 > 0 ? `... (${t2} recursive calls)` : "", o = e.component ? e.component.parent == null : false, s = ` at <${No2(e.component, e.type, o)}`, r = ">" + n2;
  return e.props ? [
    s,
    ...hr(e.props),
    r
  ] : [s + r];
}
function hr(e) {
  const t2 = [], n2 = Object.keys(e);
  return n2.slice(0, 3).forEach((o) => {
    t2.push(...ao2(o, e[o]));
  }), n2.length > 3 && t2.push(" ..."), t2;
}
function ao2(e, t2, n2) {
  return J2(t2) ? (t2 = JSON.stringify(t2), n2 ? t2 : [`${e}=${t2}`]) : typeof t2 == "number" || typeof t2 == "boolean" || t2 == null ? n2 ? t2 : [`${e}=${t2}`] : /* @__PURE__ */ H2(t2) ? (t2 = ao2(e, /* @__PURE__ */ E2(t2.value), true), n2 ? t2 : [
    `${e}=Ref<`,
    t2,
    ">"
  ]) : V3(t2) ? [`${e}=fn${t2.name ? `<${t2.name}>` : ""}`] : (t2 = /* @__PURE__ */ E2(t2), n2 ? t2 : [`${e}=`, t2]);
}
var co2 = {
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
function $t5(e, t2, n2, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    fn2(s, t2, n2);
  }
}
function uo2(e, t2, n2, o) {
  if (V3(e)) {
    const s = $t5(e, t2, n2, o);
    return s && Es(s) && s.catch((r) => {
      fn2(r, t2, n2);
    }), s;
  }
  if (k2(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++) s.push(uo2(e[r], t2, n2, o));
    return s;
  } else process.env.NODE_ENV !== "production" && T3(`Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`);
}
function fn2(e, t2, n2, o = true) {
  const s = t2 ? t2.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t2 && t2.appContext.config || B2;
  if (t2) {
    let c = t2.parent;
    const d = t2.proxy, p = process.env.NODE_ENV !== "production" ? co2[n2] : `https://vuejs.org/error-reference/#runtime-${n2}`;
    for (; c; ) {
      const u2 = c.ec;
      if (u2) {
        for (let a = 0; a < u2.length; a++) if (u2[a](e, d, p) === false) return;
      }
      c = c.parent;
    }
    if (r) {
      ze2(), $t5(r, null, 10, [
        e,
        d,
        p
      ]), Ge2();
      return;
    }
  }
  vr(e, n2, s, o, i);
}
function vr(e, t2, n2, o = true, s = false) {
  if (process.env.NODE_ENV !== "production") {
    const r = co2[t2];
    if (n2 && lr2(n2), T3(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n2 && pr2(), o) throw e;
  } else if (s) throw e;
}
var U2 = [];
var Z2 = -1;
var Ne2 = [];
var te2 = null;
var be2 = 0;
var lo2 = /* @__PURE__ */ Promise.resolve();
var ct2 = null;
var gr = 100;
function _r(e) {
  const t2 = ct2 || lo2;
  return e ? t2.then(this ? e.bind(this) : e) : t2;
}
function br(e) {
  let t2 = Z2 + 1, n2 = U2.length;
  for (; t2 < n2; ) {
    const o = t2 + n2 >>> 1, s = U2[o], r = Me2(s);
    r < e || r === e && s.flags & 2 ? t2 = o + 1 : n2 = o;
  }
  return t2;
}
function mn2(e) {
  if (!(e.flags & 1)) {
    const t2 = Me2(e), n2 = U2[U2.length - 1];
    !n2 || !(e.flags & 2) && t2 >= Me2(n2) ? U2.push(e) : U2.splice(br(t2), 0, e), e.flags |= 1, po2();
  }
}
function po2() {
  ct2 || (ct2 = lo2.then(mo));
}
function fo2(e) {
  k2(e) ? Ne2.push(...e) : te2 && e.id === -1 ? te2.splice(be2 + 1, 0, e) : e.flags & 1 || (Ne2.push(e), e.flags |= 1), po2();
}
function Cr2(e) {
  if (Ne2.length) {
    const t2 = [...new Set(Ne2)].sort((n2, o) => Me2(n2) - Me2(o));
    if (Ne2.length = 0, te2) {
      te2.push(...t2);
      return;
    }
    for (te2 = t2, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), be2 = 0; be2 < te2.length; be2++) {
      const n2 = te2[be2];
      process.env.NODE_ENV !== "production" && ho(e, n2) || (n2.flags & 4 && (n2.flags &= -2), n2.flags & 8 || n2(), n2.flags &= -2);
    }
    te2 = null, be2 = 0;
  }
}
var Me2 = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function mo(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t2 = process.env.NODE_ENV !== "production" ? (n2) => ho(e, n2) : $e2;
  try {
    for (Z2 = 0; Z2 < U2.length; Z2++) {
      const n2 = U2[Z2];
      if (n2 && !(n2.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t2(n2)) continue;
        n2.flags & 4 && (n2.flags &= -2), $t5(n2, n2.i, n2.i ? 15 : 14), n2.flags & 4 || (n2.flags &= -2);
      }
    }
  } finally {
    for (; Z2 < U2.length; Z2++) {
      const n2 = U2[Z2];
      n2 && (n2.flags &= -2);
    }
    Z2 = -1, U2.length = 0, Cr2(e), ct2 = null, (U2.length || Ne2.length) && mo(e);
  }
}
function ho(e, t2) {
  const n2 = e.get(t2) || 0;
  if (n2 > gr) {
    const o = t2.i, s = o && yo(o.type);
    return fn2(`Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`, null, 10), true;
  }
  return e.set(t2, n2 + 1), false;
}
var At2 = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Ct2().__VUE_HMR_RUNTIME__ = {
  createRecord: kt2($r2),
  rerender: kt2(yr2),
  reload: kt2(Nr2)
});
var ut2 = /* @__PURE__ */ new Map();
function $r2(e, t2) {
  return ut2.has(e) ? false : (ut2.set(e, {
    initialDef: lt2(t2),
    instances: /* @__PURE__ */ new Set()
  }), true);
}
function lt2(e) {
  return wo(e) ? e.__vccOpts : e;
}
function yr2(e, t2) {
  const n2 = ut2.get(e);
  n2 && (n2.initialDef.render = t2, [...n2.instances].forEach((o) => {
    t2 && (o.render = t2, lt2(o.type).render = t2), o.renderCache = [], o.job.flags & 8 || o.update();
  }));
}
function Nr2(e, t2) {
  const n2 = ut2.get(e);
  if (!n2) return;
  t2 = lt2(t2), wn2(n2.initialDef, t2);
  const o = [...n2.instances];
  for (let s = 0; s < o.length; s++) {
    const r = o[s], i = lt2(r.type);
    let c = At2.get(i);
    c || (i !== n2.initialDef && wn2(i, t2), At2.set(i, c = /* @__PURE__ */ new Set())), c.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (c.add(r), r.ceReload(t2.styles), c.delete(r)) : r.parent ? mn2(() => {
      r.job.flags & 8 || (r.parent.update(), c.delete(r));
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" && window.location.reload(), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  fo2(() => {
    At2.clear();
  });
}
function wn2(e, t2) {
  M2(e, t2);
  for (const n2 in e) n2 !== "__file" && !(n2 in t2) && delete e[n2];
}
function kt2(e) {
  return (t2, n2) => {
    try {
      return e(t2, n2);
    } catch {
    }
  };
}
var we2 = null;
var wr2 = null;
function Er(e, t2, n2 = false) {
  const o = Qr2();
  if (o || Dt2) {
    let s = Dt2 ? Dt2._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n2 && V3(t2) ? t2.call(o && o.proxy) : t2;
    process.env.NODE_ENV !== "production" && T3(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && T3("inject() can only be used inside setup() or functional components.");
}
var jr2 = /* @__PURE__ */ Symbol.for("v-scx");
var Or2 = () => {
  {
    const e = Er(jr2);
    return e || process.env.NODE_ENV !== "production" && T3("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function Sr2(e, t2, n2 = B2) {
  const { immediate: o, deep: s, flush: r, once: i } = n2;
  process.env.NODE_ENV !== "production" && !t2 && (o !== void 0 && T3('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), s !== void 0 && T3('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'), i !== void 0 && T3('watch() "once" option is only respected when using the watch(source, callback, options?) signature.'));
  const c = M2({}, n2);
  process.env.NODE_ENV !== "production" && (c.onWarn = T3);
  const d = t2 && o || !t2 && r !== "post";
  let p;
  if (Jt2) {
    if (r === "sync") {
      const v3 = Or2();
      p = v3.__watcherHandles || (v3.__watcherHandles = []);
    } else if (!d) {
      const v3 = () => {
      };
      return v3.stop = $e2, v3.resume = $e2, v3.pause = $e2, v3;
    }
  }
  const u2 = yt;
  c.call = (v3, y2, b2) => uo2(v3, u2, y2, b2);
  let a = false;
  r === "post" ? c.scheduler = (v3) => {
    Hr2(v3, u2 && u2.suspense);
  } : r !== "sync" && (a = true, c.scheduler = (v3, y2) => {
    y2 ? v3() : mn2(v3);
  }), c.augmentJob = (v3) => {
    t2 && (v3.flags |= 4), a && (v3.flags |= 2, u2 && (v3.id = u2.uid, v3.i = u2));
  };
  const l = ur2(e, t2, c);
  return Jt2 && (p ? p.push(l) : d && l()), l;
}
function xr2(e, t2, n2) {
  const o = this.proxy, s = J2(e) ? e.includes(".") ? Ar2(o, e) : () => o[e] : e.bind(o, o);
  let r;
  V3(t2) ? r = t2 : (r = t2.handler, n2 = t2);
  const i = Xr2(this), c = Sr2(s, r.bind(o), n2);
  return i(), c;
}
function Ar2(e, t2) {
  const n2 = t2.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n2.length && o; s++) o = o[n2[s]];
    return o;
  };
}
var kr2 = (e) => e.__isTeleport;
function vo(e, t2) {
  e.shapeFlag & 6 && e.component ? (e.transition = t2, vo(e.component.subTree, t2)) : e.shapeFlag & 128 ? (e.ssContent.transition = t2.clone(e.ssContent), e.ssFallback.transition = t2.clone(e.ssFallback)) : e.transition = t2;
}
Ct2().requestIdleCallback;
Ct2().cancelIdleCallback;
var Ir2 = /* @__PURE__ */ Symbol.for("v-ndc");
var Gt2 = (e) => e ? ei(e) ? ti(e) : Gt2(e.parent) : null;
var De2 = /* @__PURE__ */ M2(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Qe2(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Qe2(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Qe2(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Qe2(e.refs) : e.refs,
  $parent: (e) => Gt2(e.parent),
  $root: (e) => Gt2(e.root),
  $host: (e) => e.ce,
  $emit: (e) => e.emit,
  $options: (e) => __VUE_OPTIONS_API__ ? Vr2(e) : e.type,
  $forceUpdate: (e) => e.f || (e.f = () => {
    mn2(e.update);
  }),
  $nextTick: (e) => e.n || (e.n = _r.bind(e.proxy)),
  $watch: (e) => __VUE_OPTIONS_API__ ? xr2.bind(e) : $e2
});
var It = (e, t2) => e !== B2 && !e.__isScriptSetup && D2(e, t2);
var Dr2 = {
  get({ _: e }, t2) {
    if (t2 === "__v_skip") return true;
    const { ctx: n2, setupState: o, data: s, props: r, accessCache: i, type: c, appContext: d } = e;
    if (process.env.NODE_ENV !== "production" && t2 === "__isVue") return true;
    if (t2[0] !== "$") {
      const l = i[t2];
      if (l !== void 0) switch (l) {
        case 1:
          return o[t2];
        case 2:
          return s[t2];
        case 4:
          return n2[t2];
        case 3:
          return r[t2];
      }
      else {
        if (It(o, t2)) return i[t2] = 1, o[t2];
        if (__VUE_OPTIONS_API__ && s !== B2 && D2(s, t2)) return i[t2] = 2, s[t2];
        if (D2(r, t2)) return i[t2] = 3, r[t2];
        if (n2 !== B2 && D2(n2, t2)) return i[t2] = 4, n2[t2];
        (!__VUE_OPTIONS_API__ || Tr2) && (i[t2] = 0);
      }
    }
    const p = De2[t2];
    let u2, a;
    if (p) return t2 === "$attrs" ? (P3(e.attrs, "get", ""), process.env.NODE_ENV) : process.env.NODE_ENV !== "production" && t2 === "$slots" && P3(e, "get", t2), p(e);
    if ((u2 = c.__cssModules) && (u2 = u2[t2])) return u2;
    if (n2 !== B2 && D2(n2, t2)) return i[t2] = 4, n2[t2];
    if (a = d.config.globalProperties, D2(a, t2)) return a[t2];
    process.env.NODE_ENV;
  },
  set({ _: e }, t2, n2) {
    const { data: o, setupState: s, ctx: r } = e;
    return It(s, t2) ? (s[t2] = n2, true) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && D2(s, t2) ? (T3(`Cannot mutate <script setup> binding "${t2}" from Options API.`), false) : __VUE_OPTIONS_API__ && o !== B2 && D2(o, t2) ? (o[t2] = n2, true) : D2(e.props, t2) ? (process.env.NODE_ENV !== "production" && T3(`Attempting to mutate prop "${t2}". Props are readonly.`), false) : t2[0] === "$" && t2.slice(1) in e ? (process.env.NODE_ENV !== "production" && T3(`Attempting to mutate public property "${t2}". Properties starting with $ are reserved and readonly.`), false) : (process.env.NODE_ENV !== "production" && t2 in e.appContext.config.globalProperties ? Object.defineProperty(r, t2, {
      enumerable: true,
      configurable: true,
      value: n2
    }) : r[t2] = n2, true);
  },
  has({ _: { data: e, setupState: t2, accessCache: n2, ctx: o, appContext: s, props: r, type: i } }, c) {
    let d;
    return !!(n2[c] || __VUE_OPTIONS_API__ && e !== B2 && c[0] !== "$" && D2(e, c) || It(t2, c) || D2(r, c) || D2(o, c) || D2(De2, c) || D2(s.config.globalProperties, c) || (d = i.__cssModules) && d[c]);
  },
  defineProperty(e, t2, n2) {
    return n2.get != null ? e._.accessCache[t2] = 0 : D2(n2, "value") && this.set(e, t2, n2.value, null), Reflect.defineProperty(e, t2, n2);
  }
};
process.env.NODE_ENV !== "production" && (Dr2.ownKeys = (e) => (T3("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function En2(e) {
  return k2(e) ? e.reduce((t2, n2) => (t2[n2] = null, t2), {}) : e;
}
var Tr2 = true;
function Vr2(e) {
  const t2 = e.type, { mixins: n2, extends: o } = t2, { mixins: s, optionsCache: r, config: { optionMergeStrategies: i } } = e.appContext, c = r.get(t2);
  let d;
  return c ? d = c : !s.length && !n2 && !o ? d = t2 : (d = {}, s.length && s.forEach((p) => pt2(d, p, i, true)), pt2(d, t2, i)), R2(t2) && r.set(t2, d), d;
}
function pt2(e, t2, n2, o = false) {
  const { mixins: s, extends: r } = t2;
  r && pt2(e, r, n2, true), s && s.forEach((i) => pt2(e, i, n2, true));
  for (const i in t2) if (o && i === "expose") process.env.NODE_ENV !== "production" && T3('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
  else {
    const c = Pr2[i] || n2 && n2[i];
    e[i] = c ? c(e[i], t2[i]) : t2[i];
  }
  return e;
}
var Pr2 = {
  data: jn2,
  props: Sn2,
  emits: Sn2,
  methods: Oe2,
  computed: Oe2,
  beforeCreate: F,
  created: F,
  beforeMount: F,
  mounted: F,
  beforeUpdate: F,
  updated: F,
  beforeDestroy: F,
  beforeUnmount: F,
  destroyed: F,
  unmounted: F,
  activated: F,
  deactivated: F,
  errorCaptured: F,
  serverPrefetch: F,
  components: Oe2,
  directives: Oe2,
  watch: Rr2,
  provide: jn2,
  inject: Fr2
};
function jn2(e, t2) {
  return t2 ? e ? function() {
    return M2(V3(e) ? e.call(this, this) : e, V3(t2) ? t2.call(this, this) : t2);
  } : t2 : e;
}
function Fr2(e, t2) {
  return Oe2(On2(e), On2(t2));
}
function On2(e) {
  if (k2(e)) {
    const t2 = {};
    for (let n2 = 0; n2 < e.length; n2++) t2[e[n2]] = e[n2];
    return t2;
  }
  return e;
}
function F(e, t2) {
  return e ? [...new Set([].concat(e, t2))] : t2;
}
function Oe2(e, t2) {
  return e ? M2(/* @__PURE__ */ Object.create(null), e, t2) : t2;
}
function Sn2(e, t2) {
  return e ? k2(e) && k2(t2) ? [.../* @__PURE__ */ new Set([...e, ...t2])] : M2(/* @__PURE__ */ Object.create(null), En2(e), En2(t2 ?? {})) : t2;
}
function Rr2(e, t2) {
  if (!e) return t2;
  if (!t2) return e;
  const n2 = M2(/* @__PURE__ */ Object.create(null), e);
  for (const o in t2) n2[o] = F(e[o], t2[o]);
  return n2;
}
var Dt2 = null;
var Lr2 = {};
var go = (e) => Object.getPrototypeOf(e) === Lr2;
var Hr2 = Kr2;
var Mr2 = (e) => e.__isSuspense;
function Kr2(e, t2) {
  t2 && t2.pendingBranch ? k2(e) ? t2.effects.push(...e) : t2.effects.push(e) : fo2(e);
}
var _o2 = /* @__PURE__ */ Symbol.for("v-fgt");
var Ur2 = /* @__PURE__ */ Symbol.for("v-txt");
var Br2 = /* @__PURE__ */ Symbol.for("v-cmt");
function zr2(e) {
  return e ? e.__v_isVNode === true : false;
}
var xn2;
var Gr2 = (...e) => Co(...xn2 ? xn2(e, we2) : e);
var bo = ({ key: e }) => e ?? null;
var nt2 = ({ ref: e, ref_key: t2, ref_for: n2 }) => (typeof e == "number" && (e = "" + e), e != null ? J2(e) || /* @__PURE__ */ H2(e) || V3(e) ? {
  i: we2,
  r: e,
  k: t2,
  f: !!n2
} : e : null);
function Wr2(e, t2 = null, n2 = null, o = 0, s = null, r = e === _o2 ? 0 : 1, i = false, c = false) {
  const d = {
    __v_isVNode: true,
    __v_skip: true,
    type: e,
    props: t2,
    key: t2 && bo(t2),
    ref: t2 && nt2(t2),
    scopeId: wr2,
    slotScopeIds: null,
    children: n2,
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
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: we2
  };
  return c ? (ft2(d, n2), r & 128 && e.normalize(d)) : n2 && (d.shapeFlag |= J2(n2) ? 8 : 16), process.env.NODE_ENV !== "production" && d.key !== d.key && T3("VNode created with invalid key (NaN). VNode type:", d.type), d;
}
var Jr2 = process.env.NODE_ENV !== "production" ? Gr2 : Co;
function Co(e, t2 = null, n2 = null, o = 0, s = null, r = false) {
  if ((!e || e === Ir2) && (process.env.NODE_ENV !== "production" && !e && T3(`Invalid vnode type when creating vnode: ${e}.`), e = Br2), zr2(e)) {
    const c = dt2(e, t2, true);
    return n2 && ft2(c, n2), c.patchFlag = -2, c;
  }
  if (wo(e) && (e = e.__vccOpts), t2) {
    t2 = Yr2(t2);
    let { class: c, style: d } = t2;
    c && !J2(c) && (t2.class = rn2(c)), R2(d) && (/* @__PURE__ */ rt2(d) && !k2(d) && (d = M2({}, d)), t2.style = sn2(d));
  }
  const i = J2(e) ? 1 : Mr2(e) ? 128 : kr2(e) ? 64 : R2(e) ? 4 : V3(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && /* @__PURE__ */ rt2(e) && (e = /* @__PURE__ */ E2(e), T3("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), Wr2(e, t2, n2, o, s, i, r, true);
}
function Yr2(e) {
  return e ? /* @__PURE__ */ rt2(e) || go(e) ? M2({}, e) : e : null;
}
function dt2(e, t2, n2 = false, o = false) {
  const { props: s, ref: r, patchFlag: i, children: c, transition: d } = e, p = t2 ? Zr2(s || {}, t2) : s, u2 = {
    __v_isVNode: true,
    __v_skip: true,
    type: e.type,
    props: p,
    key: p && bo(p),
    ref: t2 && t2.ref ? n2 && r ? k2(r) ? r.concat(nt2(t2)) : [r, nt2(t2)] : nt2(t2) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && k2(c) ? c.map($o2) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t2 && e.type !== _o2 ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: d,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && dt2(e.ssContent),
    ssFallback: e.ssFallback && dt2(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && o && vo(u2, d.clone(u2)), u2;
}
function $o2(e) {
  const t2 = dt2(e);
  return k2(e.children) && (t2.children = e.children.map($o2)), t2;
}
function qr2(e = " ", t2 = 0) {
  return Jr2(Ur2, null, e, t2);
}
function ft2(e, t2) {
  let n2 = 0;
  const { shapeFlag: o } = e;
  if (t2 == null) t2 = null;
  else if (k2(t2)) n2 = 16;
  else if (typeof t2 == "object") if (o & 65) {
    const s = t2.default;
    s && (s._c && (s._d = false), ft2(e, s()), s._c && (s._d = true));
    return;
  } else
    n2 = 32, !t2._ && !go(t2) && (t2._ctx = we2);
  else if (V3(t2)) {
    if (o & 65) {
      ft2(e, { default: t2 });
      return;
    }
    t2 = {
      default: t2,
      _ctx: we2
    }, n2 = 32;
  } else t2 = String(t2), o & 64 ? (n2 = 16, t2 = [qr2(t2)]) : n2 = 8;
  e.children = t2, e.shapeFlag |= n2;
}
function Zr2(...e) {
  const t2 = {};
  for (let n2 = 0; n2 < e.length; n2++) {
    const o = e[n2];
    for (const s in o) if (s === "class") t2.class !== o.class && (t2.class = rn2([t2.class, o.class]));
    else if (s === "style") t2.style = sn2([t2.style, o.style]);
    else if (Cs(s)) {
      const r = t2[s], i = o[s];
      i && r !== i && !(k2(r) && r.includes(i)) ? t2[s] = r ? [].concat(r, i) : i : i == null && r == null && !$s(s) && (t2[s] = i);
    } else s !== "" && (t2[s] = o[s]);
  }
  return t2;
}
var yt = null;
var Qr2 = () => yt || we2;
var Wt2;
{
  const e = Ct2(), t2 = (n2, o) => {
    let s;
    return (s = e[n2]) || (s = e[n2] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((i) => i(r)) : s[0](r);
    };
  };
  Wt2 = t2("__VUE_INSTANCE_SETTERS__", (n2) => yt = n2), t2("__VUE_SSR_SETTERS__", (n2) => Jt2 = n2);
}
var Xr2 = (e) => {
  const t2 = yt;
  return Wt2(e), e.scope.on(), () => {
    e.scope.off(), Wt2(t2);
  };
};
function ei(e) {
  return e.vnode.shapeFlag & 4;
}
var Jt2 = false;
process.env.NODE_ENV;
function ti(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ar2(sr2(e.exposed)), {
    get(t2, n2) {
      if (n2 in t2) return t2[n2];
      if (n2 in De2) return De2[n2](e);
    },
    has(t2, n2) {
      return n2 in t2 || n2 in De2;
    }
  })) : e.proxy;
}
var ni = /(?:^|[-_])\w/g;
var oi = (e) => e.replace(ni, (t2) => t2.toUpperCase()).replace(/[-_]/g, "");
function yo(e, t2 = true) {
  return V3(e) ? e.displayName || e.name : e.name || t2 && e.__name;
}
function No2(e, t2, n2 = false) {
  let o = yo(t2);
  if (!o && t2.__file) {
    const s = t2.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e) {
    const s = (r) => {
      for (const i in r) if (r[i] === t2) return i;
    };
    o = s(e.components) || e.parent && s(e.parent.type.components) || s(e.appContext.components);
  }
  return o ? oi(o) : n2 ? "App" : "Anonymous";
}
function wo(e) {
  return V3(e) && "__vccOpts" in e;
}
function si() {
  if (process.env.NODE_ENV === "production" || typeof window > "u") return;
  const e = { style: "color:#3ba776" }, t2 = { style: "color:#1677ff" }, n2 = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: true,
    header(a) {
      if (!R2(a)) return null;
      if (a.__isVue) return [
        "div",
        e,
        "VueInstance"
      ];
      if (/* @__PURE__ */ H2(a)) {
        ze2();
        const l = a.value;
        return Ge2(), [
          "div",
          {},
          [
            "span",
            e,
            u2(a)
          ],
          "<",
          c(l),
          ">"
        ];
      } else {
        if (/* @__PURE__ */ fe2(a)) return [
          "div",
          {},
          [
            "span",
            e,
            /* @__PURE__ */ K2(a) ? "ShallowReactive" : "Reactive"
          ],
          "<",
          c(a),
          `>${/* @__PURE__ */ ee2(a) ? " (readonly)" : ""}`
        ];
        if (/* @__PURE__ */ ee2(a)) return [
          "div",
          {},
          [
            "span",
            e,
            /* @__PURE__ */ K2(a) ? "ShallowReadonly" : "Readonly"
          ],
          "<",
          c(a),
          ">"
        ];
      }
      return null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue) return [
        "div",
        {},
        ...r(a.$)
      ];
    }
  };
  function r(a) {
    const l = [];
    a.type.props && a.props && l.push(i("props", /* @__PURE__ */ E2(a.props))), a.setupState !== B2 && l.push(i("setup", a.setupState)), a.data !== B2 && l.push(i("data", /* @__PURE__ */ E2(a.data)));
    const v3 = d(a, "computed");
    v3 && l.push(i("computed", v3));
    const y2 = d(a, "inject");
    return y2 && l.push(i("injected", y2)), l.push([
      "div",
      {},
      [
        "span",
        { style: o.style + ";opacity:0.66" },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), l;
  }
  function i(a, l) {
    return l = M2({}, l), Object.keys(l).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        { style: "color:#476582" },
        a
      ],
      [
        "div",
        { style: "padding-left:1.25em" },
        ...Object.keys(l).map((v3) => [
          "div",
          {},
          [
            "span",
            o,
            v3 + ": "
          ],
          c(l[v3], false)
        ])
      ]
    ] : ["span", {}];
  }
  function c(a, l = true) {
    return typeof a == "number" ? [
      "span",
      t2,
      a
    ] : typeof a == "string" ? [
      "span",
      n2,
      JSON.stringify(a)
    ] : typeof a == "boolean" ? [
      "span",
      o,
      a
    ] : R2(a) ? ["object", { object: l ? /* @__PURE__ */ E2(a) : a }] : [
      "span",
      n2,
      String(a)
    ];
  }
  function d(a, l) {
    const v3 = a.type;
    if (V3(v3)) return;
    const y2 = {};
    for (const b2 in a.ctx) p(v3, b2, l) && (y2[b2] = a.ctx[b2]);
    return y2;
  }
  function p(a, l, v3) {
    const y2 = a[v3];
    if (k2(y2) && y2.includes(l) || R2(y2) && l in y2 || a.extends && p(a.extends, l, v3) || a.mixins && a.mixins.some((b2) => p(b2, l, v3))) return true;
  }
  function u2(a) {
    return /* @__PURE__ */ K2(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
function ri() {
  si();
}
process.env.NODE_ENV !== "production" && ri();
var vi = /* @__PURE__ */ Eo({
  CodeFile: () => I3,
  Language: () => ai,
  csharp: () => vt2,
  go: () => Yt2,
  isStruct: () => ii,
  java: () => mt2,
  kotlin: () => ht2
});
function ii(e) {
  return hs(e) || vs(e) || ms(e) || gs(e) || _s(e);
}
var ai = Object.freeze({
  Java: "java",
  Kotlin: "kotlin",
  CSharp: "csharp",
  Go: "go"
});
var I3 = class {
  imports = /* @__PURE__ */ new Set();
  parentDir;
  name;
  content = "";
  constructor(e, t2) {
    this.parentDir = e, this.name = t2;
  }
  addImport(e) {
    this.imports.add(e);
  }
  addImports(e) {
    for (const t2 of e) this.imports.add(t2);
  }
  getImports() {
    return Array.from(this.imports);
  }
  appendContent(e) {
    this.content += e;
  }
  appendContentln(e) {
    this.content += e + `
`;
  }
  getContent() {
    return this.content;
  }
  getName() {
    return this.name;
  }
  setName(e) {
    this.name = e;
  }
  getParentDir() {
    return this.parentDir;
  }
  setParentDir(e) {
    this.parentDir = e;
  }
};
var mt2;
(function(e) {
  e.JavaGeneratorAddition = Object.freeze({
    Lombok: "Lombok",
    LombokBuilder: "LombokBuilder",
    RecordValueObject: "RecordValueObject",
    CommandHandler: "CommandHandler",
    Jpa: "Jpa",
    Timezone: "Timezone",
    SpringFramework: "SpringFramework"
  }), e.IdGenStrategy = Object.freeze({
    TABLE: "TABLE",
    SEQUENCE: "SEQUENCE",
    IDENTITY: "IDENTITY",
    UUID: "UUID",
    AUTO: "AUTO"
  });
})(mt2 || (mt2 = {}));
var ht2;
(function(e) {
  e.KotlinGeneratorAddition = Object.freeze({
    ValueClass: "ValueClass",
    CommandHandler: "CommandHandler",
    Timezone: "Timezone"
  });
})(ht2 || (ht2 = {}));
var vt2;
(function(e) {
  e.CSharpGeneratorAddition = Object.freeze({
    Timezone: "Timezone",
    RecordStruct: "RecordStruct",
    PrimaryConstructor: "PrimaryConstructor",
    CommandHandlerInterface: "CommandHandlerInterface",
    AggInterface: "AggInterface"
  });
})(vt2 || (vt2 = {}));
var Yt2;
(function(e) {
  e.GoGeneratorAddition = Object.freeze({ SinglePackageEachDesigner: "SinglePackageEachDesigner" });
})(Yt2 || (Yt2 = {}));
var N3;
(function(e) {
  function t2(p) {
    return p.trim().split(p.includes("_") || p.includes("-") || p.includes(" ") ? /_|\s|-/ : /(?=[A-Z])/g).map((u2) => u2.charAt(0).toUpperCase() + u2.toLowerCase().slice(1)).join("");
  }
  e.stringToUpperCamel = t2;
  function n2(p) {
    let u2 = true;
    return p.trim().split(p.includes("_") || p.includes("-") || p.includes(" ") ? /_|\s|-/ : /(?=[A-Z])/g).map((a) => u2 ? (u2 = false, a.toLowerCase()) : a.charAt(0).toUpperCase() + a.toLowerCase().slice(1)).join("");
  }
  e.stringToLowerCamel = n2;
  function o(p) {
    return p = p.trim(), p.includes("_") ? p.toLowerCase() : p.includes(" ") || p.includes("-") ? p.split(/\s|-/).join("_").toLowerCase() : r(p);
  }
  e.stringToLowerSnake = o;
  function s(p) {
    return p.trim().split(/(?=[A-Z])/g).join("_").toUpperCase();
  }
  e.camelToUpperSnake = s;
  function r(p) {
    return p.trim().split(/(?=[A-Z])/g).join("_").toLowerCase();
  }
  e.camelToLowerSnake = r;
  function i(p) {
    return p.trim().split("_").map((u2) => u2.charAt(0).toUpperCase() + u2.slice(1)).join("");
  }
  e.snakeToUpperCamel = i;
  function c(p) {
    return p.trim().charAt(0).toLowerCase() + p.slice(1);
  }
  e.lowerFirst = c;
  function d(p) {
    return p.trim().charAt(0).toUpperCase() + p.slice(1);
  }
  e.upperFirst = d;
})(N3 || (N3 = {}));
var j3 = mt2.JavaGeneratorAddition;
var gi = Ue2.createHotSwapPlugin(() => {
  const e = "value", t2 = "command", n2 = "event";
  function o(s) {
    return N3.stringToUpperCamel(s._attributes.name);
  }
  return {
    unmount({ api: s }) {
      s.commands.clearCaches(), s.commands._setCommandCodeProvider(() => []), s.commands._setFacadeCommandCodeProvider(() => []), s.commands._setAggCodeProvider(() => []), s.commands._setEventCodeProvider(() => []), s.commands._setReadModelCodeProvider(() => []), s.commands._setCodeFileProvider(() => []), s.commands.setContext({});
    },
    mount({ api: s }) {
      const r = s.states.context, i = s.states.designer.value._getContext().getDesignerOptions().ignoreValueObjects.map((a) => N3.stringToLowerCamel(a));
      function c(a) {
        return !i.includes(N3.stringToLowerCamel(a._attributes.name));
      }
      function d(a, l) {
        if (c(l)) {
          const v3 = o(l);
          return a.add(`${r.value.namespace}.${r.value.moduleName}.${e}.${v3}`), v3;
        }
        return u2(a, l);
      }
      function p(a, l) {
        for (const v3 of l) {
          if (!c(v3)) {
            u2(a, v3);
            continue;
          }
          a.add(`${r.value.namespace}.${r.value.moduleName}.${e}.${o(v3)}`);
        }
      }
      function u2(a, l) {
        const v3 = r.value.additions, y2 = N3.stringToLowerSnake(l._attributes.name).replace(/_/, " ");
        return /\b(time|timestamp|date|deadline|expire)\b/.test(y2) ? v3.has(j3.Timezone) ? (a.add("java.time.OffsetDateTime"), "OffsetDateTime") : (a.add("java.time.LocalDateTime"), "LocalDateTime") : /\b(enum|gender|sex|count|amount|num|number|flag|times)\b/.test(y2) ? "Integer" : /\b(price)$/.test(y2) ? (a.add("java.math.BigDecimal"), "BigDecimal") : /^(if|is)\b/.test(y2) ? "Boolean" : _t2(l) && (l._attributes.type === "Id" || l._attributes.type === "Version" || /\b(id|identifier|ver|version)$/.test(y2)) ? "Long" : "String";
      }
      s.commands._setInfoCodeProvider((a) => {
        const l = /* @__PURE__ */ new Set();
        l.add(r.value.nonNullAnnotation);
        const v3 = r.value.nonNullAnnotation.split(".").pop(), y2 = o(a), b2 = r.value.additions, m = [];
        return b2.has(j3.RecordValueObject) ? (b2.has(j3.Jpa) && (l.add(r.value.jdkVersion === "8" ? "javax.persistence.Embeddable" : "jakarta.persistence.Embeddable"), m.push("@Embeddable")), m.push(`public record ${y2}(@${v3} ${u2(l, a)} value) {`), m.push(`    public ${y2} {`), m.push("        // HACK check value"), m.push("    }"), m.push("}")) : b2.has(j3.Lombok) ? (m.push("@lombok.Getter"), b2.has(j3.Jpa) && (l.add(r.value.jdkVersion === "8" ? "javax.persistence.Embeddable" : "jakarta.persistence.Embeddable"), m.push("@Embeddable")), m.push(`public class ${y2} {`), m.push(`    private final ${u2(l, a)} value;`), m.push(""), m.push(`    public ${y2} (@${v3} ${u2(l, a)} value) {`), m.push("        // HACK check value"), m.push("        this.value = value;"), m.push("    }"), m.push("}")) : (b2.has(j3.Jpa) && (l.add(r.value.jdkVersion === "8" ? "javax.persistence.Embeddable" : "jakarta.persistence.Embeddable"), m.push("@Embeddable")), m.push(`public class ${o(a)} {`), m.push(`    private final ${u2(l, a)} value;`), m.push(""), m.push(`    public ${y2} (@${v3} ${u2(l, a)} value) {`), m.push("        // HACK check value"), m.push("        this.value = value;"), m.push("    }"), m.push(""), m.push(`    public ${u2(l, a)} getValue() {`), m.push("        return this.value;"), m.push("    }"), m.push("}")), [{
          type: "Info",
          imports: l,
          content: m.join(`
`)
        }];
      }), s.commands._setCommandCodeProvider((a) => {
        const l = [], v3 = r.value.additions, y2 = r.value.nonNullAnnotation.split(".").pop();
        {
          const b2 = /* @__PURE__ */ new Set();
          b2.add(r.value.nonNullAnnotation);
          const m = o(a), $2 = [], h2 = Object.values(a.inner);
          if (p(b2, h2), v3.has(j3.RecordValueObject)) {
            v3.has(j3.LombokBuilder) && $2.push("@lombok.Builder(toBuilder = true)"), $2.push(`public record ${m}(`);
            const _ = [];
            for (const C2 of h2) {
              const f2 = o(C2);
              _.push(`        @${y2}
        ${d(b2, C2)} ${N3.lowerFirst(f2)}`);
            }
            $2.push(_.join(`,
`)), $2.push(") {"), $2.push(`    public ${m} {`), $2.push("        // HACK check value"), $2.push("    }"), $2.push("}");
          } else if (v3.has(j3.Lombok)) {
            $2.push("@lombok.AllArgsConstructor"), $2.push("@lombok.Getter"), v3.has(j3.LombokBuilder) && $2.push("@lombok.Builder(toBuilder = true)"), $2.push(`public class ${m} {`);
            for (const _ of h2) {
              const C2 = o(_);
              $2.push(`    @${y2}`), $2.push(`    private final ${d(b2, _)} ${N3.lowerFirst(C2)};`);
            }
            $2.push("}");
          } else {
            $2.push(`public class ${m} {`);
            for (const f2 of h2) {
              const g2 = o(f2);
              $2.push(`    @${y2}`), $2.push(`    private final ${d(b2, f2)} ${N3.lowerFirst(g2)};`);
            }
            $2.push("");
            const _ = [], C2 = [];
            for (const f2 of h2) {
              const g2 = o(f2);
              _.push(`@${y2} ${u2(b2, f2)} ${N3.lowerFirst(g2)}`), C2.push(`this.${N3.lowerFirst(g2)} = ${N3.lowerFirst(g2)};`);
            }
            $2.push(`    public ${m}(${_.join(", ")}) {`), $2.push(`        ${C2.join(`
        `)}`), $2.push("    }");
            for (const f2 of h2) {
              const g2 = o(f2);
              $2.push(""), $2.push(`    public ${d(b2, f2)} get${g2} () {`), $2.push(`        return this.${N3.lowerFirst(g2)};`), $2.push("    }");
            }
            $2.push("}");
          }
          l.push({
            type: "Command",
            imports: b2,
            content: $2.join(`
`)
          });
        }
        if (!v3.has(j3.CommandHandler)) return l;
        {
          const b2 = /* @__PURE__ */ new Set();
          b2.add(r.value.nonNullAnnotation);
          const m = o(a), $2 = [];
          v3.has(j3.SpringFramework) && (b2.add("org.springframework.stereotype.Component"), $2.push("@Component")), v3.has(j3.Lombok) && $2.push("@lombok.RequiredArgsConstructor"), $2.push(`public class ${m}Handler {`);
          const h2 = [...s.states.designer.value._getContext().getAssociationMap()[a._attributes.__id]].filter((_) => _._attributes.rule === "Agg");
          for (const _ of h2)
            b2.add(`${r.value.namespace}.${r.value.moduleName}.${o(_)}`), $2.push(`    public ${o(_)} handle(@${y2} ${m} command) {`), $2.push("        // HACK Implement"), $2.push("    }");
          $2.push("}"), l.push({
            type: "CommandHandler",
            imports: b2,
            content: $2.join(`
`)
          });
        }
        return l;
      }), s.commands._setFacadeCommandCodeProvider((a) => {
        const l = [], v3 = r.value.additions, y2 = r.value.nonNullAnnotation.split(".").pop();
        {
          const b2 = /* @__PURE__ */ new Set();
          b2.add(r.value.nonNullAnnotation);
          const m = o(a), $2 = [], h2 = Object.values(a.inner);
          if (p(b2, h2), v3.has(j3.RecordValueObject)) {
            v3.has(j3.LombokBuilder) && $2.push("@lombok.Builder(toBuilder = true)"), $2.push(`public record ${m}(`);
            const _ = [];
            for (const C2 of h2) {
              const f2 = o(C2);
              _.push(`        @${y2}
        ${d(b2, C2)} ${N3.lowerFirst(f2)}`);
            }
            $2.push(_.join(`,
`)), $2.push(") {"), $2.push(`    public ${m} {`), $2.push("        // HACK check value"), $2.push("    }"), $2.push("}");
          } else if (v3.has(j3.Lombok)) {
            $2.push("@lombok.AllArgsConstructor"), $2.push("@lombok.Getter"), v3.has(j3.LombokBuilder) && $2.push("@lombok.Builder(toBuilder = true)"), $2.push(`public class ${m} {`);
            for (const _ of h2) {
              const C2 = o(_);
              $2.push(`    @${y2}`), $2.push(`    private final ${d(b2, _)} ${N3.lowerFirst(C2)};`);
            }
            $2.push("}");
          } else {
            $2.push(`public class ${m} {`);
            for (const f2 of h2) {
              const g2 = o(f2);
              $2.push(`    @${y2}`), $2.push(`    private final ${d(b2, f2)} ${N3.lowerFirst(g2)};`);
            }
            $2.push("");
            const _ = [], C2 = [];
            for (const f2 of h2) {
              const g2 = o(f2);
              _.push(`@${y2} ${u2(b2, f2)} ${N3.lowerFirst(g2)}`), C2.push(`this.${N3.lowerFirst(g2)} = ${N3.lowerFirst(g2)};`);
            }
            $2.push(`    public ${m}(${_.join(", ")}) {`), $2.push(`        ${C2.join(`
        `)}`), $2.push("    }");
            for (const f2 of h2) {
              const g2 = o(f2);
              $2.push(""), $2.push(`    public ${d(b2, f2)} get${g2} () {`), $2.push(`        return this.${N3.lowerFirst(g2)};`), $2.push("    }");
            }
            $2.push("}");
          }
          l.push({
            type: "FacadeCommand",
            imports: b2,
            content: $2.join(`
`)
          });
        }
        if (!v3.has(j3.CommandHandler)) return l;
        {
          const b2 = /* @__PURE__ */ new Set();
          b2.add(r.value.nonNullAnnotation);
          const m = o(a), $2 = [];
          v3.has(j3.SpringFramework) && (b2.add("org.springframework.stereotype.Component"), $2.push("@Component")), v3.has(j3.Lombok) && $2.push("@lombok.RequiredArgsConstructor"), $2.push(`public class ${m}Handler {`);
          const h2 = [...s.states.designer.value._getContext().getAssociationMap()[a._attributes.__id]].filter((_) => _._attributes.rule === "Agg");
          for (const _ of h2)
            b2.add(`${r.value.namespace}.${r.value.moduleName}.${o(_)}`), $2.push(`    public ${o(_)} handle(@${y2} ${m} command) {`), $2.push("        // HACK Implement"), $2.push("    }");
          $2.push("}"), l.push({
            type: "FacadeCommandHandler",
            imports: b2,
            content: $2.join(`
`)
          });
        }
        return l;
      }), s.commands._setAggCodeProvider((a) => {
        const l = r.value.additions, v3 = s.states.designer.value, y2 = r.value.nonNullAnnotation.split(".").pop(), b2 = o(a), m = [], $2 = Object.values(a.inner);
        {
          const h2 = /* @__PURE__ */ new Set();
          h2.add(r.value.nonNullAnnotation);
          const _ = [];
          _.push(`public interface ${b2} {`);
          for (const f2 of $2) {
            const g2 = o(f2);
            _.push(`    public ${d(h2, f2)} get${g2}();`), _.push("");
          }
          const C2 = [...v3._getContext().getAssociationMap()[a._attributes.__id]].filter((f2) => f2._attributes.rule === "Command" || f2._attributes.rule === "FacadeCommand");
          for (const f2 of C2) {
            const g2 = o(f2);
            h2.add(`${r.value.namespace}.${r.value.moduleName}.${t2}.${g2}`), _.push(`    public void handle${g2}(@${y2} ${g2} command);`), _.push("");
          }
          _.push("}"), m.push({
            type: "Agg",
            imports: h2,
            content: _.join(`
`)
          });
        }
        {
          const h2 = /* @__PURE__ */ new Set();
          h2.add(r.value.nonNullAnnotation);
          const _ = [];
          if (p(h2, $2), l.has(j3.Lombok)) {
            _.push(l.has(j3.Jpa) ? "@lombok.NoArgsConstructor" : "@lombok.AllArgsConstructor"), _.push("@lombok.Getter"), l.has(j3.Jpa) && (h2.add(r.value.jdkVersion === "8" ? "javax.persistence.Entity" : "jakarta.persistence.Entity"), _.push("@Entity"), h2.add(r.value.jdkVersion === "8" ? "javax.persistence.Table" : "jakarta.persistence.Table"), _.push(`@Table(name = "${N3.camelToLowerSnake(b2)}")`)), _.push(`public class ${b2}Impl implements ${b2} {`);
            for (const f2 of $2) {
              const g2 = o(f2);
              _.push(`    @${y2}`), l.has(j3.Jpa) && (f2._attributes.type === "Id" ? (h2.add(r.value.jdkVersion === "8" ? "javax.persistence.EmbeddedId" : "jakarta.persistence.EmbeddedId"), _.push("    @EmbeddedId"), h2.add(r.value.jdkVersion === "8" ? "javax.persistence.AttributeOverride" : "jakarta.persistence.AttributeOverride"), h2.add(r.value.jdkVersion === "8" ? "javax.persistence.Column" : "jakarta.persistence.Column"), _.push(`    @AttributeOverride(name = "value", column = @Column(name = "${N3.camelToLowerSnake(g2)}", updatable = false))`)) : c(f2) ? (h2.add(r.value.jdkVersion === "8" ? "javax.persistence.Embedded" : "jakarta.persistence.Embedded"), _.push("    @Embedded"), h2.add(r.value.jdkVersion === "8" ? "javax.persistence.AttributeOverride" : "jakarta.persistence.AttributeOverride"), h2.add(r.value.jdkVersion === "8" ? "javax.persistence.Column" : "jakarta.persistence.Column"), _.push(`    @AttributeOverride(name = "value", column = @Column(name = "${N3.camelToLowerSnake(g2)}"))`)) : (h2.add(r.value.jdkVersion === "8" ? "javax.persistence.Column" : "jakarta.persistence.Column"), _.push(`    @Column(name = "${N3.camelToLowerSnake(g2)}")`))), _.push(`    private ${d(h2, f2)} ${N3.lowerFirst(g2)};`);
            }
            const C2 = [...v3._getContext().getAssociationMap()[a._attributes.__id]].filter((f2) => f2._attributes.rule === "Command" || f2._attributes.rule === "FacadeCommand");
            for (const f2 of C2) {
              const g2 = o(f2);
              h2.add(`${r.value.namespace}.${r.value.moduleName}.${t2}.${g2}`), _.push(""), _.push(`    public void handle${g2}(@${y2} ${g2} ${N3.lowerFirst(g2)}) {`), _.push("        // HACK need implement"), _.push("    }");
            }
            _.push("}");
          } else {
            l.has(j3.Jpa) && (h2.add(r.value.jdkVersion === "8" ? "javax.persistence.Entity" : "jakarta.persistence.Entity"), _.push("@Entity"), h2.add(r.value.jdkVersion === "8" ? "javax.persistence.Table" : "jakarta.persistence.Table"), _.push(`@Table(name = "${N3.camelToLowerSnake(b2)}")`)), _.push(`public class ${b2}Impl implements ${b2} {`);
            for (const w of $2) {
              const x2 = o(w);
              _.push(`    @${y2}`), l.has(j3.Jpa) && (w._attributes.type === "Id" ? (h2.add(r.value.jdkVersion === "8" ? "javax.persistence.EmbeddedId" : "jakarta.persistence.EmbeddedId"), _.push("    @EmbeddedId"), h2.add(r.value.jdkVersion === "8" ? "javax.persistence.AttributeOverride" : "jakarta.persistence.AttributeOverride"), h2.add(r.value.jdkVersion === "8" ? "javax.persistence.Column" : "jakarta.persistence.Column"), _.push(`    @AttributeOverride(name = "value", column = @Column(name = "${N3.camelToLowerSnake(x2)}", updatable = false))`)) : c(w) ? (h2.add(r.value.jdkVersion === "8" ? "javax.persistence.Embedded" : "jakarta.persistence.Embedded"), _.push("    @Embedded"), h2.add(r.value.jdkVersion === "8" ? "javax.persistence.AttributeOverride" : "jakarta.persistence.AttributeOverride"), h2.add(r.value.jdkVersion === "8" ? "javax.persistence.Column" : "jakarta.persistence.Column"), _.push(`    @AttributeOverride(name = "value", column = @Column(name = "${N3.camelToLowerSnake(x2)}"))`)) : (h2.add(r.value.jdkVersion === "8" ? "javax.persistence.Column" : "jakarta.persistence.Column"), _.push(`    @Column(name = "${N3.camelToLowerSnake(x2)}")`))), _.push(`    private ${d(h2, w)} ${N3.lowerFirst(x2)};`);
            }
            _.push("");
            const C2 = [], f2 = [];
            for (const w of $2) {
              if (l.has(j3.Jpa)) break;
              const x2 = o(w);
              C2.push(`@${y2} ${d(h2, w)} ${N3.lowerFirst(x2)}`), f2.push(`this.${N3.lowerFirst(x2)} = ${N3.lowerFirst(x2)};`);
            }
            _.push(`    public ${b2}Impl(${C2.join(", ")}) {`), _.push(`        ${f2.join(`
        `)}`), _.push("    }");
            for (const w of $2) {
              const x2 = o(w);
              _.push(""), _.push(`    @${y2}`), _.push(`    public ${d(h2, w)} get${x2}() {`), _.push(`        return this.${N3.lowerFirst(x2)};`), _.push("    }");
            }
            const g2 = [...v3._getContext().getAssociationMap()[a._attributes.__id]].filter((w) => w._attributes.rule === "Command" || w._attributes.rule === "FacadeCommand");
            for (const w of g2) {
              const x2 = o(w);
              h2.add(`${r.value.namespace}.${r.value.moduleName}.${t2}.${x2}`), _.push(""), _.push(`    public void handle${x2}(@${y2} ${x2} ${N3.lowerFirst(x2)}) {`), _.push("        // HACK need implement"), _.push("    }");
            }
            _.push("}");
          }
          m.push({
            type: "AggImpl",
            imports: h2,
            content: _.join(`
`)
          });
        }
        return m;
      }), s.commands._setEventCodeProvider((a) => {
        const l = /* @__PURE__ */ new Set();
        l.add(r.value.nonNullAnnotation);
        const v3 = r.value.nonNullAnnotation.split(".").pop(), y2 = r.value.additions, b2 = o(a), m = [], $2 = Object.values(a.inner);
        if (p(l, $2), y2.has(j3.RecordValueObject)) {
          y2.has(j3.LombokBuilder) && m.push("@lombok.Builder(toBuilder = true)"), m.push(`public record ${b2}(`);
          const h2 = [];
          for (const _ of $2) {
            const C2 = o(_);
            h2.push(`        @${v3}
        ${d(l, _)} ${N3.lowerFirst(C2)}`);
          }
          m.push(h2.join(`,
`)), m.push(") {"), m.push(`    public ${b2} {`), m.push("        // HACK check value"), m.push("    }"), m.push("}");
        } else if (y2.has(j3.Lombok)) {
          m.push("@lombok.AllArgsConstructor"), m.push("@lombok.Getter"), y2.has(j3.LombokBuilder) && m.push("@lombok.Builder(toBuilder = true)"), m.push(`public class ${b2} {`);
          for (const h2 of $2) {
            const _ = o(h2);
            m.push(`    @${v3}`), m.push(`    private final ${d(l, h2)} ${N3.lowerFirst(_)};`);
          }
          m.push("}");
        } else {
          m.push(`public class ${b2} {`);
          for (const C2 of $2) {
            const f2 = o(C2);
            m.push(`    @${v3}`), m.push(`    private final ${f2} ${N3.lowerFirst(f2)};`);
          }
          m.push("");
          const h2 = [], _ = [];
          for (const C2 of $2) {
            const f2 = o(C2);
            h2.push(`@${v3} ${u2(l, C2)} ${N3.lowerFirst(f2)}`), _.push(`this.${N3.lowerFirst(f2)} = ${N3.lowerFirst(f2)};`);
          }
          m.push(`    public ${b2}(${h2.join(", ")}) {`), m.push(`        ${_.join(`
        `)}`), m.push("    }");
          for (const C2 of $2) {
            const f2 = o(C2);
            m.push(""), m.push(`    public ${f2} get${f2} () {`), m.push(`        return this.${N3.lowerFirst(f2)};`), m.push("    }");
          }
          m.push("}");
        }
        return [{
          type: "Event",
          imports: l,
          content: m.join(`
`)
        }];
      }), s.commands._setReadModelCodeProvider(() => []), s.commands._setCodeFileProvider(() => {
        const a = [], l = {};
        function v3(h2) {
          for (const _ of Object.values(h2)) {
            if (!c(_)) continue;
            const C2 = [
              ...r.value.namespace.split(/\./),
              r.value.moduleName,
              e
            ], f2 = o(_) + ".java";
            if (l[`${C2.join("/")}/${f2}`] === true) continue;
            const g2 = s.commands._genInfoCode(_);
            if (g2.length === 0) continue;
            const w = new I3(C2, f2);
            w.appendContentln(`package ${r.value.namespace}.${r.value.moduleName}.${e};`), w.appendContentln("");
            for (const x2 of g2[0].imports) w.appendContentln(`import ${x2};`);
            w.appendContentln(""), w.appendContentln(g2[0].content), a.push(w), l[`${C2.join("/")}/${f2}`] = true;
          }
        }
        const y2 = s.states.designer.value._getContext().getCommands();
        for (const h2 of y2) {
          v3(h2.inner);
          const _ = s.commands._genCommandCode(h2), C2 = [
            ...r.value.namespace.split(/\./),
            r.value.moduleName,
            t2
          ];
          _.forEach((f2) => {
            if (f2.type === "Command") {
              const g2 = new I3(C2, o(h2) + ".java");
              g2.appendContentln(`package ${r.value.namespace}.${r.value.moduleName}.${t2};`), g2.appendContentln(""), g2.addImports(f2.imports);
              for (const w of f2.imports) g2.appendContentln(`import ${w};`);
              g2.appendContentln(""), g2.appendContentln(f2.content), a.push(g2);
            } else if (f2.type === "CommandHandler") {
              const g2 = new I3(C2, o(h2) + "Handler.java");
              g2.appendContentln(`package ${r.value.namespace}.${r.value.moduleName}.${t2};`), g2.appendContentln(""), g2.addImports(f2.imports);
              for (const w of f2.imports) g2.appendContentln(`import ${w};`);
              g2.appendContentln(""), g2.appendContentln(f2.content), a.push(g2);
            } else isNever(f2.type);
          });
        }
        const b2 = s.states.designer.value._getContext().getFacadeCommands();
        for (const h2 of b2) {
          v3(h2.inner);
          const _ = s.commands._genFacadeCommandCode(h2), C2 = [
            ...r.value.namespace.split(/\./),
            r.value.moduleName,
            t2
          ];
          _.forEach((f2) => {
            if (f2.type === "FacadeCommand") {
              const g2 = new I3(C2, o(h2) + ".java");
              g2.appendContentln(`package ${r.value.namespace}.${r.value.moduleName}.${t2};`), g2.appendContentln(""), g2.addImports(f2.imports);
              for (const w of f2.imports) g2.appendContentln(`import ${w};`);
              g2.appendContentln(""), g2.appendContentln(f2.content), a.push(g2);
            } else if (f2.type === "FacadeCommandHandler") {
              const g2 = new I3(C2, o(h2) + "Handler.java");
              g2.appendContentln(`package ${r.value.namespace}.${r.value.moduleName}.${t2};`), g2.appendContentln(""), g2.addImports(f2.imports);
              for (const w of f2.imports) g2.appendContentln(`import ${w};`);
              g2.appendContentln(""), g2.appendContentln(f2.content), a.push(g2);
            } else isNever(f2.type);
          });
        }
        const m = s.states.designer.value._getContext().getAggs();
        for (const h2 of m) {
          v3(h2.inner);
          const _ = s.commands._genAggCode(h2), C2 = [...r.value.namespace.split(/\./), r.value.moduleName];
          _.forEach((f2) => {
            if (f2.type === "Agg") {
              const g2 = new I3(C2, o(h2) + ".java");
              g2.appendContentln(`package ${r.value.namespace}.${r.value.moduleName};`), g2.appendContentln(""), g2.addImports(f2.imports);
              for (const w of f2.imports) g2.appendContentln(`import ${w};`);
              g2.appendContentln(""), g2.appendContentln(f2.content), a.push(g2);
            } else if (f2.type === "AggImpl") {
              const g2 = new I3(C2, o(h2) + "Impl.java");
              g2.appendContentln(`package ${r.value.namespace}.${r.value.moduleName};`), g2.appendContentln(""), g2.addImports(f2.imports);
              for (const w of f2.imports) g2.appendContentln(`import ${w};`);
              g2.appendContentln(""), g2.appendContentln(f2.content), a.push(g2);
            } else isNever(f2.type);
          });
        }
        const $2 = s.states.designer.value._getContext().getEvents();
        for (const h2 of $2) {
          v3(h2.inner);
          const _ = s.commands._genEventCode(h2), C2 = [
            ...r.value.namespace.split(/\./),
            r.value.moduleName,
            n2
          ];
          _.forEach((f2) => {
            const g2 = new I3(C2, o(h2) + ".java");
            g2.appendContentln(`package ${r.value.namespace}.${r.value.moduleName}.${n2};`), g2.appendContentln(""), g2.addImports(f2.imports);
            for (const w of f2.imports) g2.appendContentln(`import ${w};`);
            g2.appendContentln(""), g2.appendContentln(f2.content), a.push(g2);
          });
        }
        return a;
      });
    }
  };
});
var Tt2 = ht2.KotlinGeneratorAddition;
var _i = Ue2.createHotSwapPlugin(() => ({
  unmount({ api: e }) {
    e.commands.clearCaches(), e.commands._setCommandCodeProvider(() => []), e.commands._setFacadeCommandCodeProvider(() => []), e.commands._setAggCodeProvider(() => []), e.commands._setEventCodeProvider(() => []), e.commands._setReadModelCodeProvider(() => []), e.commands._setCodeFileProvider(() => []), e.commands.setContext({});
  },
  mount({ api: e }) {
    const t2 = "value", n2 = e.states.context, o = e.states.designer.value._getContext().getDesignerOptions().ignoreValueObjects.map((p) => N3.stringToLowerCamel(p));
    function s(p) {
      return !o.includes(N3.stringToLowerCamel(p._attributes.name));
    }
    function r(p, u2) {
      return s(u2) ? N3.stringToUpperCamel(u2._attributes.name) : d(p, u2);
    }
    function i(p) {
      return N3.stringToUpperCamel(p._attributes.name);
    }
    function c(p, u2) {
      for (const a of u2) {
        if (!s(a)) {
          d(p, a);
          continue;
        }
        p.add(`${n2.value.namespace}.${n2.value.moduleName}.${t2}.${i(a)}`);
      }
    }
    function d(p, u2) {
      const a = n2.value.additions, l = N3.stringToLowerSnake(u2._attributes.name).replace(/_/, " ");
      return /\b(time|timestamp|date|deadline|expire)\b/.test(l) ? a.has(Tt2.Timezone) ? (p.add("java.time.OffsetDateTime"), "OffsetDateTime") : (p.add("java.time.LocalDateTime"), "LocalDateTime") : /\b(enum|gender|sex|count|amount|num|number|flag|times)\b/.test(l) ? "Integer" : /\b(price)$/.test(l) ? (p.add("java.math.BigDecimal"), "BigDecimal") : /^(if|is)\b/.test(l) ? "Boolean" : _t2(u2) && (u2._attributes.type === "Id" || u2._attributes.type === "Version") || /\b(id|identifier|ver|version)$/.test(l) ? "Long" : "String";
    }
    e.commands._setInfoCodeProvider((p) => {
      const u2 = /* @__PURE__ */ new Set(), a = i(p), l = n2.value.additions, v3 = [];
      return l.has(Tt2.ValueClass) ? (u2.add("kotlin.jvm.JvmInline"), v3.push("@JvmInline"), v3.push(`value class ${a}(val value: ${d(u2, p)})`)) : v3.push(`data class ${a}(val value: ${d(u2, p)})`), [{
        type: "Info",
        imports: u2,
        content: v3.join(`
`)
      }];
    }), e.commands._setCommandCodeProvider((p) => {
      const u2 = [], a = n2.value.additions;
      {
        const l = /* @__PURE__ */ new Set(), v3 = i(p), y2 = [], b2 = Object.values(p.inner);
        c(l, b2);
        const m = [];
        for (const $2 of b2) {
          const h2 = i($2);
          m.push(`val ${N3.lowerFirst(h2)}: ${r(l, $2)}`);
        }
        y2.push(`data class ${v3}(${m.join(", ")})`), u2.push({
          type: "Command",
          imports: l,
          content: y2.join(`
`)
        });
      }
      if (!a.has(Tt2.CommandHandler)) return u2;
      {
        const l = /* @__PURE__ */ new Set(), v3 = i(p), y2 = [];
        y2.push(`class ${v3}Handler {`);
        const b2 = [...e.states.designer.value._getContext().getAssociationMap()[p._attributes.__id]].filter((m) => m._attributes.rule === "Agg");
        for (const m of b2)
          l.add(`${n2.value.namespace}.${n2.value.moduleName}.${i(m)}`), y2.push(`    fun handle(command: ${v3}): ${i(m)} {`), y2.push("        // HACK Implement"), y2.push("    }");
        y2.push("}"), u2.push({
          type: "CommandHandler",
          imports: l,
          content: y2.join(`
`)
        });
      }
      return u2;
    }), e.commands._setFacadeCommandCodeProvider((p) => {
      const u2 = /* @__PURE__ */ new Set(), a = i(p), l = [], v3 = Object.values(p.inner);
      c(u2, v3);
      const y2 = [];
      for (const b2 of v3) {
        const m = i(b2);
        y2.push(`val ${N3.lowerFirst(m)}: ${r(u2, b2)}`);
      }
      return l.push(`data class ${a}(${y2.join(", ")})`), [{
        type: "FacadeCommand",
        imports: u2,
        content: l.join(`
`)
      }];
    }), e.commands._setAggCodeProvider((p) => {
      const u2 = /* @__PURE__ */ new Set(), a = e.states.designer.value, l = i(p), v3 = [], y2 = Object.values(p.inner);
      c(u2, y2);
      const b2 = [], m = [...a._getContext().getAssociationMap()[p._attributes.__id]].filter((h2) => h2._attributes.rule === "Command" || h2._attributes.rule === "FacadeCommand");
      for (const h2 of m) {
        const _ = i(h2);
        b2.push(`fun handle(command: ${_})`);
      }
      v3.push(`interface ${l} {`), v3.push(`    ${b2.join(`
    `)}`), v3.push("}"), v3.push(""), v3.push(`class ${l}Impl(`);
      const $2 = [];
      for (const h2 of y2) {
        const _ = i(h2);
        $2.push(`val ${N3.lowerFirst(_)}: ${r(u2, h2)}`);
      }
      v3.push(`    ${$2.join(`,
    `)}`), v3.push(`): ${l} {`);
      for (const h2 of m) {
        const _ = i(h2);
        v3.push(`    override fun handle(command: ${_}) {`), v3.push("        // HACK Implement"), v3.push("    }");
      }
      return v3.push("}"), [{
        type: "Agg",
        imports: u2,
        content: v3.join(`
`)
      }];
    }), e.commands._setEventCodeProvider((p) => {
      const u2 = /* @__PURE__ */ new Set(), a = i(p), l = [], v3 = Object.values(p.inner);
      c(u2, v3);
      const y2 = [];
      for (const b2 of v3) {
        const m = i(b2);
        y2.push(`val ${N3.lowerFirst(m)}: ${r(u2, b2)}`);
      }
      return l.push(`data class ${a}(${y2.join(", ")})`), [{
        type: "Event",
        imports: u2,
        content: l.join(`
`)
      }];
    }), e.commands._setReadModelCodeProvider(() => []), e.commands._setCodeFileProvider(() => {
      const p = [], u2 = {};
      function a(m) {
        for (const $2 of Object.values(m)) {
          if (!s($2)) continue;
          const h2 = [
            ...n2.value.namespace.split(/\./),
            n2.value.moduleName,
            t2
          ], _ = i($2) + ".kt";
          if (u2[`${h2.join("/")}/${_}`] === true) continue;
          const C2 = e.commands._genInfoCode($2);
          if (C2.length === 0) continue;
          const f2 = new I3(h2, _);
          f2.appendContentln(`package ${n2.value.namespace}.${n2.value.moduleName}.${t2}`), f2.appendContentln("");
          for (const g2 of C2[0].imports) f2.appendContentln(`import ${g2}`);
          f2.appendContentln(""), f2.appendContentln(C2[0].content), p.push(f2), u2[`${h2.join("/")}/${_}`] = true;
        }
      }
      const l = e.states.designer.value._getContext().getCommands();
      for (const m of l) {
        a(m.inner);
        const $2 = e.commands._genCommandCode(m), h2 = new I3([...n2.value.namespace.split(/\./), n2.value.moduleName], i(m) + ".kt"), _ = [];
        h2.appendContentln(`package ${n2.value.namespace}.${n2.value.moduleName}`), h2.appendContentln(""), $2.forEach((C2) => {
          C2.type === "Command" || C2.type === "CommandHandler" ? (h2.addImports(C2.imports), _.push(C2.content)) : isNever(C2.type);
        });
        for (const C2 of h2.getImports()) h2.appendContentln(`import ${C2}`);
        h2.appendContentln("");
        for (const C2 of _) h2.appendContentln(C2);
        p.push(h2);
      }
      const v3 = e.states.designer.value._getContext().getFacadeCommands();
      for (const m of v3) {
        a(m.inner);
        const $2 = e.commands._genFacadeCommandCode(m), h2 = new I3([...n2.value.namespace.split(/\./), n2.value.moduleName], i(m) + ".kt"), _ = [];
        h2.appendContentln(`package ${n2.value.namespace}.${n2.value.moduleName}`), h2.appendContentln(""), $2.forEach((C2) => {
          C2.type === "FacadeCommand" || C2.type === "FacadeCommandHandler" ? (h2.addImports(C2.imports), _.push(C2.content)) : isNever(C2.type);
        });
        for (const C2 of h2.getImports()) h2.appendContentln(`import ${C2}`);
        h2.appendContentln("");
        for (const C2 of _) h2.appendContentln(C2);
        p.push(h2);
      }
      const y2 = e.states.designer.value._getContext().getAggs();
      for (const m of y2) {
        a(m.inner);
        const $2 = e.commands._genAggCode(m), h2 = new I3([...n2.value.namespace.split(/\./), n2.value.moduleName], i(m) + ".kt"), _ = [];
        h2.appendContentln(`package ${n2.value.namespace}.${n2.value.moduleName}`), h2.appendContentln(""), $2.forEach((C2) => {
          C2.type === "Agg" || C2.type === "AggImpl" ? (h2.addImports(C2.imports), _.push(C2.content)) : isNever(C2.type);
        });
        for (const C2 of h2.getImports()) h2.appendContentln(`import ${C2}`);
        h2.appendContentln("");
        for (const C2 of _) h2.appendContentln(C2);
        p.push(h2);
      }
      const b2 = e.states.designer.value._getContext().getEvents();
      for (const m of b2) {
        a(m.inner);
        const $2 = e.commands._genEventCode(m), h2 = [...n2.value.namespace.split(/\./), n2.value.moduleName];
        $2.forEach((_) => {
          if (_.type === "Event") {
            const C2 = new I3(h2, i(m) + ".kt");
            C2.appendContentln(`package ${n2.value.namespace}.${n2.value.moduleName}`), C2.appendContentln(""), C2.addImports(_.imports);
            for (const f2 of _.imports) C2.appendContentln(`import ${f2}`);
            C2.appendContentln(""), C2.appendContentln(_.content), p.push(C2);
          } else isNever(_.type);
        });
      }
      return p;
    });
  }
}));
var bi = Ue2.createHotSwapPlugin(() => ({
  unmount({ api: e }) {
    e.commands.clearCaches(), e.commands._setCommandCodeProvider(() => []), e.commands._setFacadeCommandCodeProvider(() => []), e.commands._setAggCodeProvider(() => []), e.commands._setEventCodeProvider(() => []), e.commands._setReadModelCodeProvider(() => []), e.commands._setCodeFileProvider(() => []), e.commands.setContext({});
  },
  mount({ api: e }) {
    const t2 = e.states.context, n2 = e.states.designer.value._getContext().getDesignerOptions().ignoreValueObjects.map((d) => N3.stringToLowerCamel(d));
    function o(d) {
      return !n2.includes(N3.stringToLowerCamel(d._attributes.name));
    }
    function s(d, p) {
      return o(p) ? N3.stringToUpperCamel(p._attributes.name) : c(d, p);
    }
    function r(d) {
      return N3.stringToUpperCamel(d._attributes.name);
    }
    function i(d) {
      return N3.stringToLowerCamel(d._attributes.name);
    }
    function c(d, p) {
      const u2 = N3.stringToLowerSnake(p._attributes.name).replace(/_/, " ");
      return /\b(time|timestamp|date|deadline|expire)\b/.test(u2) ? (d.add("time"), "time.Time") : /\b(enum|gender|sex|count|amount|num|number|flag|times)\b/.test(u2) ? "int" : /\b(price)$/.test(u2) ? "string" : /^(if|is)\b/.test(u2) ? "bool" : _t2(p) && (p._attributes.type === "Id" || p._attributes.type === "Version" || /\b(id|identifier|ver|version)$/.test(u2)) ? "int64" : "string";
    }
    e.commands._setInfoCodeProvider((d) => {
      const p = /* @__PURE__ */ new Set(), u2 = [];
      return u2.push(`type ${r(d)} struct {`), u2.push(`    value ${c(p, d)}`), u2.push("}"), u2.push(""), u2.push(`func New${r(d)}(value ${c(p, d)}) ${r(d)} {`), u2.push("    // HACK check value"), u2.push(`    return ${r(d)}{value}`), u2.push("}"), u2.push(`func (${i(d)} ${r(d)}) GetValue() ${c(p, d)} {`), u2.push(`    return ${i(d)}.value`), u2.push("}"), [{
        type: "Info",
        imports: p,
        content: u2.join(`
`)
      }];
    }), e.commands._setCommandCodeProvider((d) => {
      const p = r(d), u2 = i(d), a = /* @__PURE__ */ new Set(), l = [];
      l.push(`type ${p} struct {`);
      const v3 = Object.values(d.inner);
      for (const m of v3) l.push(`    ${i(m)} ${s(a, m)}`);
      l.push("}");
      for (const m of v3)
        l.push(`func (${u2} ${p}) Get${r(m)} () ${s(a, m)} {`), l.push(`    return ${u2}.${i(m)}`), l.push("}");
      const y2 = [], b2 = [];
      for (const m of v3)
        y2.push(`${i(m)} ${s(a, m)}`), b2.push(i(m));
      return l.push(`func New${p}(${y2.join(", ")}) ${p} {`), l.push("    // HACK check value"), l.push(`    return ${p}{`), l.push(`        ${b2.join(`,
        `)},`), l.push("    }"), l.push("}"), [{
        type: "Command",
        imports: a,
        content: l.join(`
`)
      }];
    }), e.commands._setFacadeCommandCodeProvider((d) => {
      const p = r(d), u2 = i(d), a = Object.values(d.inner), l = /* @__PURE__ */ new Set(), v3 = [];
      v3.push(`type ${p} struct {`);
      for (const m of a) v3.push(`    ${i(m)} ${s(l, m)}`);
      v3.push("}");
      for (const m of a)
        v3.push(`func (${u2} ${p}) Get${r(m)} () ${s(l, m)} {`), v3.push(`    return ${u2}.${i(m)}`), v3.push("}");
      const y2 = [], b2 = [];
      for (const m of a)
        y2.push(`${i(m)} ${s(l, m)}`), b2.push(i(m));
      return v3.push(`func New${p}(${y2.join(", ")}) ${p} {`), v3.push("    // HACK check value"), v3.push(`    return ${p}{`), v3.push(`        ${b2.join(`,
        `)},`), v3.push("    }"), v3.push("}"), [{
        type: "FacadeCommand",
        imports: l,
        content: v3.join(`
`)
      }];
    }), e.commands._setAggCodeProvider((d) => {
      const p = e.states.designer.value, u2 = r(d), a = i(d), l = Object.values(d.inner), v3 = /* @__PURE__ */ new Set(), y2 = [];
      y2.push(`type ${u2} struct {`);
      for (const h2 of l) y2.push(`    ${i(h2)} ${s(v3, h2)}`);
      y2.push("}");
      for (const h2 of l)
        y2.push(`func (${a} ${u2}) Get${r(h2)} () ${s(v3, h2)} {`), y2.push(`    return ${a}.${i(h2)}`), y2.push("}");
      const b2 = [], m = [];
      for (const h2 of l)
        b2.push(`${i(h2)} ${s(v3, h2)}`), m.push(i(h2));
      y2.push(`func New${u2}(${b2.join(", ")}) ${u2} {`), y2.push("    // HACK check value"), y2.push(`    return ${u2}{`), y2.push(`        ${m.join(`,
        `)},`), y2.push("    }"), y2.push("}"), y2.push("");
      const $2 = [...p._getContext().getAssociationMap()[d._attributes.__id]].filter((h2) => h2._attributes.rule === "Command" || h2._attributes.rule === "FacadeCommand");
      for (const h2 of $2) {
        const _ = r(h2), C2 = i(h2);
        y2.push(`func (${a} ${u2}) Handle${_} (${C2} ${_}) {`), y2.push("    // HACK implement"), y2.push("}");
      }
      return [{
        type: "Agg",
        imports: v3,
        content: y2.join(`
`)
      }];
    }), e.commands._setEventCodeProvider((d) => {
      const p = [], u2 = /* @__PURE__ */ new Set(), a = Object.values(d.inner), l = r(d), v3 = i(d);
      p.push(`type ${l} struct {`);
      for (const m of a) p.push(`    ${i(m)} ${s(u2, m)}`);
      p.push("}");
      for (const m of a)
        p.push(`func (${v3} ${l}) Get${r(m)} () ${s(u2, m)} {`), p.push(`    return ${v3}.${i(m)}`), p.push("}");
      const y2 = [], b2 = [];
      for (const m of a)
        y2.push(`${i(m)} ${s(u2, m)}`), b2.push(i(m));
      return p.push(`func New${l}(${y2.join(", ")}) ${l} {`), p.push("    // HACK check value"), p.push(`    return ${l}{`), p.push(`        ${b2.join(`,
        `)},`), p.push("    }"), p.push("}"), [{
        type: "Event",
        imports: u2,
        content: p.join(`
`)
      }];
    }), e.commands._setCodeFileProvider(() => {
      const d = [], p = {}, u2 = [...t2.value.namespace.split(/\./), t2.value.moduleName], a = new I3(u2, `${t2.value.moduleName}.go`), l = [], v3 = new I3(u2, `${t2.value.moduleName}_value_object.go`), y2 = [];
      function b2(C2) {
        for (const f2 of Object.values(C2)) {
          if (!o(f2)) continue;
          const g2 = r(f2);
          if (p[`${u2.join("/")}/${g2}`] === true) continue;
          const w = e.commands._genInfoCode(f2);
          w.length !== 0 && (v3.addImports(w[0].imports), y2.push(w[0].content), y2.push(""), p[`${u2.join("/")}/${g2}`] = true);
        }
      }
      const m = e.states.designer.value._getContext().getCommands();
      for (const C2 of m) {
        b2(C2.inner);
        const f2 = e.commands._genCommandCode(C2);
        for (const g2 of f2)
          p[g2.content] !== true && (a.addImports(g2.imports), l.push(g2.content));
      }
      const $2 = e.states.designer.value._getContext().getFacadeCommands();
      for (const C2 of $2) {
        b2(C2.inner);
        const f2 = e.commands._genFacadeCommandCode(C2);
        for (const g2 of f2)
          p[g2.content] !== true && (a.addImports(g2.imports), l.push(g2.content));
      }
      const h2 = e.states.designer.value._getContext().getAggs();
      for (const C2 of h2) {
        b2(C2.inner);
        const f2 = e.commands._genAggCode(C2);
        for (const g2 of f2)
          p[g2.content] !== true && (a.addImports(g2.imports), l.push(g2.content));
      }
      const _ = e.states.designer.value._getContext().getEvents();
      for (const C2 of _) {
        b2(C2.inner);
        const f2 = e.commands._genEventCode(C2);
        for (const g2 of f2)
          p[g2.content] !== true && (a.addImports(g2.imports), l.push(g2.content));
      }
      return a.appendContentln(`package ${t2.value.moduleName}`), a.appendContentln(""), a.getImports().length > 0 && (a.appendContentln("import ("), a.appendContentln(`    ${[...a.getImports()].join(`
    `)}`), a.appendContentln(")")), a.appendContentln(l.join(`
`)), v3.appendContentln(`package ${t2.value.moduleName}`), v3.appendContentln(""), v3.getImports().length > 0 && (v3.appendContentln("import ("), v3.appendContentln(`    ${[...v3.getImports()].map((C2) => `"${C2}"`).join(`
    `)}`), v3.appendContentln(")"), v3.appendContentln("")), v3.appendContentln(y2.join(`
`)), d.push(a), d.push(v3), d;
    });
  }
}));
var ue2 = vt2.CSharpGeneratorAddition;
var Ci = Ue2.createHotSwapPlugin(() => {
  const e = "    ";
  function t2(n2, o = 1) {
    return n2.split(`
`).map((s) => e.repeat(o) + s).join(`
`);
  }
  return {
    unmount({ api: n2 }) {
      n2.commands.clearCaches(), n2.commands._setCommandCodeProvider(() => []), n2.commands._setFacadeCommandCodeProvider(() => []), n2.commands._setAggCodeProvider(() => []), n2.commands._setEventCodeProvider(() => []), n2.commands._setReadModelCodeProvider(() => []), n2.commands._setCodeFileProvider(() => []), n2.commands.setContext({});
    },
    mount({ api: n2 }) {
      const o = n2.states.context, s = n2.states.designer.value._getContext().getDesignerOptions().ignoreValueObjects.map((u2) => N3.stringToLowerCamel(u2));
      function r(u2) {
        return !s.includes(N3.stringToLowerCamel(u2._attributes.name));
      }
      function i(u2, a) {
        return r(a) ? N3.stringToUpperCamel(a._attributes.name) : p(u2, a);
      }
      function c(u2) {
        return N3.stringToUpperCamel(u2._attributes.name);
      }
      function d(u2) {
        return u2.has(ue2.RecordStruct) ? " struct" : "";
      }
      function p(u2, a) {
        const l = o.value.additions, v3 = N3.stringToLowerSnake(a._attributes.name).replace(/_/, " ");
        return /\b(time|timestamp|date|deadline|expire)\b/.test(v3) ? l.has(ue2.Timezone) ? "System.DateTimeOffset" : "System.DateTime" : /\b(enum|gender|sex|count|amount|num|number|flag|times)\b/.test(v3) ? "int" : /\b(price)$/.test(v3) ? "decimal" : /^(if|is)\b/.test(v3) ? "bool" : _t2(a) && (a._attributes.type === "Id" || a._attributes.type === "Version" || /\b(id|identifier|ver|version)$/.test(v3)) ? "long" : "string";
      }
      n2.commands._setInfoCodeProvider((u2) => {
        const a = o.value.additions, l = /* @__PURE__ */ new Set(), v3 = [];
        return v3.push(`public record${d(a)} ${c(u2)}(${p(l, u2)} value);`), [{
          type: "Info",
          content: v3.join(`
`),
          imports: l
        }];
      }), n2.commands._setCommandCodeProvider((u2) => {
        const a = [], l = o.value.additions, v3 = /* @__PURE__ */ new Set(), y2 = c(u2);
        {
          const b2 = [], m = Object.values(u2.inner);
          b2.push(`public record${d(l)} ${y2}`), b2.push("(");
          const $2 = [];
          for (const h2 of m) {
            const _ = c(h2);
            $2.push(`${i(v3, h2)} ${N3.upperFirst(_)}`);
          }
          b2.push(`    ${$2.join(`,
    `)}`), b2.push(")"), b2.push("{"), b2.push("}"), a.push({
            type: "Command",
            content: b2.join(`
`),
            imports: v3
          });
        }
        {
          const b2 = l.has(ue2.CommandHandlerInterface) ? ` : ${o.value.commandHandlerInterface}` : "", m = [];
          m.push(`public class ${y2}Handler${b2}`), m.push("{"), m.push(`    public void Handle(${y2} command)`), m.push("    {"), m.push("        // HACK implement"), m.push("    }"), m.push("}"), a.push({
            type: "CommandHandler",
            content: m.join(`
`),
            imports: v3
          });
        }
        return a;
      }), n2.commands._setFacadeCommandCodeProvider((u2) => {
        const a = [], l = o.value.additions, v3 = /* @__PURE__ */ new Set(), y2 = c(u2);
        {
          const b2 = [], m = Object.values(u2.inner);
          b2.push(`public record${d(l)} ${y2}`), b2.push("(");
          const $2 = [];
          for (const h2 of m) {
            const _ = c(h2);
            $2.push(`${i(v3, h2)} ${N3.upperFirst(_)}`);
          }
          b2.push(`    ${$2.join(`,
    `)}`), b2.push(")"), b2.push("{"), b2.push("}"), a.push({
            type: "FacadeCommand",
            content: b2.join(`
`),
            imports: v3
          });
        }
        {
          const b2 = l.has(ue2.CommandHandlerInterface) ? ` : ${o.value.commandHandlerInterface}` : "", m = [];
          m.push(`public class ${y2}Handler${b2}`), m.push("{"), m.push(`    public void Handle(${y2} command)`), m.push("    {"), m.push("        // HACK implement"), m.push("    }"), m.push("}"), a.push({
            type: "FacadeCommandHandler",
            content: m.join(`
`),
            imports: v3
          });
        }
        return a;
      }), n2.commands._setAggCodeProvider((u2) => {
        const a = [], l = n2.states.designer.value, v3 = o.value.additions;
        {
          const y2 = /* @__PURE__ */ new Set(), b2 = [], m = v3.has(ue2.AggInterface) ? ` : ${o.value.aggInterface}` : "";
          b2.push(`public interface I${c(u2)}${m}`), b2.push("{");
          const $2 = [], h2 = [...l._getContext().getAssociationMap()[u2._attributes.__id]].filter((_) => _._attributes.rule === "Command" || _._attributes.rule === "FacadeCommand");
          for (const _ of h2) {
            const C2 = c(_);
            $2.push(`void Handle${C2}(${C2} command);`);
          }
          b2.push(`    ${$2.join(`

    `)}`), b2.push("}"), b2.push(""), a.push({
            type: "Agg",
            content: b2.join(`
`),
            imports: y2
          });
        }
        {
          const y2 = /* @__PURE__ */ new Set(), b2 = [], m = c(u2), $2 = Object.values(u2.inner), h2 = v3.has(ue2.AggInterface) ? `, ${o.value.aggInterface}` : "";
          if (v3.has(ue2.PrimaryConstructor)) {
            const _ = [...l._getContext().getAssociationMap()[u2._attributes.__id]].filter((g2) => g2._attributes.rule === "Command" || g2._attributes.rule === "FacadeCommand"), C2 = [];
            for (const g2 of $2) {
              const w = c(g2);
              C2.push(`${i(y2, g2)} ${N3.lowerFirst(w)}`);
            }
            b2.push(`public class ${m}`), b2.push("("), b2.push(`    ${C2.join(`,
    `)}`), b2.push(`): I${m}${h2}`), b2.push("{");
            for (const g2 of $2) {
              const w = c(g2);
              b2.push(`    public ${i(y2, g2)} ${N3.upperFirst(w)} { get; private set; } = ${N3.lowerFirst(w)};`), b2.push("");
            }
            const f2 = [];
            for (const g2 of _) {
              const w = c(g2);
              f2.push(`public void Handle${w}(${w} command)`), f2.push("{"), f2.push("    // HACK implement"), f2.push("}"), f2.push("");
            }
            b2.push(`    ${f2.join(`
    `)}`), b2.push("}");
          } else {
            const _ = [...l._getContext().getAssociationMap()[u2._attributes.__id]].filter((g2) => g2._attributes.rule === "Command" || g2._attributes.rule === "FacadeCommand");
            b2.push(`public class ${m} : I${m}${h2}`), b2.push("{");
            for (const g2 of $2) {
              const w = c(g2);
              b2.push(`    public ${i(y2, g2)} ${N3.lowerFirst(w)} { get; private set; }`);
            }
            b2.push("");
            const C2 = [];
            for (const g2 of $2) {
              const w = c(g2);
              C2.push(`${i(y2, g2)} ${w}`);
            }
            b2.push(`    public ${m}(${C2.join(", ")})`), b2.push("    {");
            for (const g2 of $2) {
              const w = c(g2);
              b2.push(`        ${w} = ${N3.lowerFirst(w)};`);
            }
            b2.push("    }");
            const f2 = [];
            for (const g2 of _) {
              const w = c(g2);
              f2.push(`public void Handle${w}(${w} command)`), f2.push("{"), f2.push("    // HACK implement"), f2.push("}"), f2.push("");
            }
            b2.push(`    ${f2.join(`
    `)}`), b2.push("}");
          }
          a.push({
            type: "AggImpl",
            content: b2.join(`
`),
            imports: y2
          });
        }
        return a;
      }), n2.commands._setEventCodeProvider((u2) => {
        const a = o.value.additions, l = c(u2), v3 = /* @__PURE__ */ new Set(), y2 = Object.values(u2.inner), b2 = [];
        b2.push(`public record${d(a)} ${l}`), b2.push("(");
        const m = [];
        for (const $2 of y2) {
          const h2 = c($2);
          m.push(`${i(v3, $2)} ${N3.upperFirst(h2)}`);
        }
        return b2.push(`    ${m.join(`,
    `)}`), b2.push(")"), b2.push("{"), b2.push("}"), [{
          type: "Event",
          content: b2.join(`
`),
          imports: v3
        }];
      }), n2.commands._setReadModelCodeProvider(() => []), n2.commands._setCodeFileProvider(() => {
        const u2 = [], a = {}, l = [...o.value.namespace.split(/\./), N3.stringToUpperCamel(o.value.moduleName)];
        function v3(h2) {
          for (const _ of Object.values(h2)) {
            if (!r(_)) continue;
            const C2 = c(_) + ".cs";
            if (a[`${l.join("/")}/${C2}`] === true) continue;
            const f2 = n2.commands._genInfoCode(_);
            if (f2.length === 0) continue;
            const g2 = new I3(l, C2);
            for (const w of f2[0].imports) g2.appendContentln(`using ${w};`);
            g2.appendContentln(""), g2.appendContentln(`namespace ${o.value.namespace}.${N3.stringToUpperCamel(o.value.moduleName)}`), g2.appendContentln("{"), g2.appendContentln(t2(f2[0].content)), g2.appendContentln("}"), u2.push(g2), a[`${l.join("/")}/${C2}`] = true;
          }
        }
        const y2 = n2.states.designer.value._getContext().getCommands();
        for (const h2 of y2) {
          v3(h2.inner);
          const _ = c(h2) + ".cs", C2 = n2.commands._genCommandCode(h2), f2 = new I3(l, _);
          for (const g2 of C2) if (g2.type === "Command") {
            f2.addImports(g2.imports);
            for (const w of g2.imports) f2.appendContentln(`using ${w};`);
            f2.appendContentln(""), f2.appendContentln(`namespace ${o.value.namespace}.${N3.stringToUpperCamel(o.value.moduleName)}`), f2.appendContentln("{"), f2.appendContentln(t2(g2.content)), f2.appendContentln("}");
          }
          u2.push(f2);
        }
        const b2 = n2.states.designer.value._getContext().getFacadeCommands();
        for (const h2 of b2) {
          v3(h2.inner);
          const _ = c(h2) + ".cs", C2 = n2.commands._genFacadeCommandCode(h2), f2 = new I3(l, _);
          f2.addImports(C2[0].imports);
          for (const g2 of C2[0].imports) f2.appendContentln(`using ${g2};`);
          f2.appendContentln(""), f2.appendContentln(`namespace ${o.value.namespace}.${N3.stringToUpperCamel(o.value.moduleName)}`), f2.appendContentln("{"), f2.appendContentln(t2(C2[0].content)), f2.appendContentln("}"), u2.push(f2);
        }
        const m = n2.states.designer.value._getContext().getAggs();
        for (const h2 of m) {
          v3(h2.inner);
          const _ = n2.commands._genAggCode(h2), C2 = new I3(l, c(h2) + ".cs");
          for (const f2 of _) {
            C2.addImports(f2.imports);
            for (const g2 of f2.imports) C2.appendContentln(`using ${g2};`);
            C2.appendContentln("");
          }
          C2.appendContentln(`namespace ${o.value.namespace}.${N3.stringToUpperCamel(o.value.moduleName)}`), C2.appendContentln("{");
          for (const f2 of _) C2.appendContentln(t2(f2.content));
          C2.appendContentln("}"), u2.push(C2);
        }
        const $2 = n2.states.designer.value._getContext().getEvents();
        for (const h2 of $2) {
          v3(h2.inner);
          const _ = c(h2) + ".cs", C2 = n2.commands._genEventCode(h2), f2 = new I3(l, _);
          f2.addImports(C2[0].imports);
          for (const g2 of C2[0].imports) f2.appendContentln(`using ${g2};`);
          f2.appendContentln(""), f2.appendContentln(`namespace ${o.value.namespace}.${N3.stringToUpperCamel(o.value.moduleName)}`), f2.appendContentln("{"), f2.appendContentln(t2(C2[0].content)), f2.appendContentln("}"), u2.push(f2);
        }
        return u2;
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
            title: vi.java.JavaGeneratorAddition.SpringFramework,
            value: vi.java.JavaGeneratorAddition.SpringFramework,
            selected: true,
            description: $t6("question.subcommand.genCode.java.additions.springFramework")
          },
          {
            title: vi.java.JavaGeneratorAddition.Jpa,
            value: vi.java.JavaGeneratorAddition.Jpa,
            selected: false,
            description: $t6("question.subcommand.genCode.java.additions.jpa")
          },
          {
            title: vi.java.JavaGeneratorAddition.Lombok,
            value: vi.java.JavaGeneratorAddition.Lombok,
            selected: true,
            description: $t6("question.subcommand.genCode.java.additions.lombok")
          },
          {
            title: vi.java.JavaGeneratorAddition.LombokBuilder,
            value: vi.java.JavaGeneratorAddition.LombokBuilder,
            description: $t6("question.subcommand.genCode.java.additions.lombokBuilder")
          },
          {
            title: vi.java.JavaGeneratorAddition.CommandHandler,
            value: vi.java.JavaGeneratorAddition.CommandHandler,
            selected: true,
            description: $t6("question.subcommand.genCode.java.additions.commandHandler")
          },
          {
            title: vi.java.JavaGeneratorAddition.RecordValueObject,
            value: vi.java.JavaGeneratorAddition.RecordValueObject,
            description: $t6("question.subcommand.genCode.java.additions.recordValueObject")
          },
          {
            title: vi.java.JavaGeneratorAddition.Timezone,
            value: vi.java.JavaGeneratorAddition.Timezone,
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
    vi.java.JavaGeneratorAddition.SpringFramework
  ) ? "org.springframework.lang.NonNull" : void 0;
  if (nonNullAnnotation === void 0) {
    nonNullAnnotation = (await (0, import_prompts.default)(
      [
        {
          name: "nonNullAnnotation",
          type: "select",
          message: $t6("question.subcommand.genCode.java.nonNullAnnotation"),
          choices: [
            {
              title: "org.springframework.lang.NonNull",
              value: "org.springframework.lang.NonNull"
            },
            {
              title: "org.jetbrains.annotations.NotNull",
              value: "org.jetbrains.annotations.NotNull"
            },
            {
              title: "javax.annotation.Nonnull",
              value: "javax.annotation.Nonnull"
            }
          ]
        }
      ],
      { onCancel }
    )).nonNullAnnotation;
  }
  if (additions.includes(vi.java.JavaGeneratorAddition.Jpa)) {
    const { idGenStrategy } = await (0, import_prompts.default)(
      [
        {
          name: "idGenStrategy",
          type: "select",
          message: $t6("question.subcommand.genCode.java.idGenStrategy"),
          choices: [
            { title: "TABLE", value: vi.java.IdGenStrategy.TABLE },
            { title: "SEQUENCE", value: vi.java.IdGenStrategy.SEQUENCE },
            { title: "IDENTITY", value: vi.java.IdGenStrategy.IDENTITY },
            { title: "UUID", value: vi.java.IdGenStrategy.UUID },
            { title: "AUTO", value: vi.java.IdGenStrategy.AUTO }
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
            title: vi.kotlin.KotlinGeneratorAddition.CommandHandler,
            value: vi.kotlin.KotlinGeneratorAddition.CommandHandler,
            selected: true,
            description: $t7("question.subcommand.genCode.kotlin.additions.commandHandler")
          },
          {
            title: vi.kotlin.KotlinGeneratorAddition.ValueClass,
            value: vi.kotlin.KotlinGeneratorAddition.ValueClass,
            selected: true,
            description: $t7("question.subcommand.genCode.kotlin.additions.valueClass")
          },
          {
            title: vi.kotlin.KotlinGeneratorAddition.Timezone,
            value: vi.kotlin.KotlinGeneratorAddition.Timezone,
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
            title: vi.csharp.CSharpGeneratorAddition.Timezone,
            value: vi.csharp.CSharpGeneratorAddition.Timezone,
            selected: true,
            description: $t8("question.subcommand.genCode.csharp.additions.timezone")
          },
          {
            title: vi.csharp.CSharpGeneratorAddition.RecordStruct,
            value: vi.csharp.CSharpGeneratorAddition.RecordStruct,
            selected: true,
            description: $t8("question.subcommand.genCode.csharp.additions.recordStruct")
          },
          {
            title: vi.csharp.CSharpGeneratorAddition.PrimaryConstructor,
            value: vi.csharp.CSharpGeneratorAddition.PrimaryConstructor,
            selected: true,
            description: $t8("question.subcommand.genCode.csharp.additions.primaryConstructor")
          },
          {
            title: vi.csharp.CSharpGeneratorAddition.CommandHandlerInterface,
            value: vi.csharp.CSharpGeneratorAddition.CommandHandlerInterface,
            selected: false,
            description: $t8("question.subcommand.genCode.csharp.additions.commandHandlerInterface")
          },
          {
            title: vi.csharp.CSharpGeneratorAddition.AggInterface,
            value: vi.csharp.CSharpGeneratorAddition.AggInterface,
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
  if (context.additions.has(vi.csharp.CSharpGeneratorAddition.CommandHandlerInterface)) {
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
  if (context.additions.has(vi.csharp.CSharpGeneratorAddition.AggInterface)) {
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
    params.currentCommand.value = Subcommand.GenCode;
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
            title: vi.Language.CSharp,
            value: vi.Language.CSharp
          },
          {
            title: vi.Language.Go,
            value: vi.Language.Go
          },
          {
            title: vi.Language.Java,
            value: vi.Language.Java
          },
          {
            title: vi.Language.Kotlin,
            value: vi.Language.Kotlin
          }
        ]
      }
    ],
    { onCancel }
  )).language;
  params.args.language = language;
  if (language === vi.Language.Java) {
    params.args.context = await requireGenJavaContext();
  } else if (language === vi.Language.Kotlin) {
    params.args.context = await requireGenKotlinContext();
  } else if (language === vi.Language.CSharp) {
    params.args.context = await requireGenCsharpContext();
  } else if (language === vi.Language.Go) {
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
    log_default.print(
      source_default.bgYellow(`${packageManager === "bun" ? "bunx " : ""}domain-designer-cli update`)
    );
  }
  log_default.printInfo("================ Install dependencies: Starting... ================");
  if (packageManager === "bun") {
    (0, import_child_process5.spawnSync)(`bun i --cwd "${webRoot}"`, {
      encoding: "utf-8",
      stdio: "inherit",
      shell: true
    });
  } else if (packageManager === "pnpm") {
    (0, import_child_process5.spawnSync)(`pnpm i --prefix "${webRoot}"`, {
      encoding: "utf-8",
      stdio: "inherit",
      shell: true
    });
  } else if (packageManager === "npm") {
    (0, import_child_process5.spawnSync)(`npm i --prefix "${webRoot}"`, {
      encoding: "utf-8",
      stdio: "inherit",
      shell: true
    });
  } else {
    isNever(packageManager);
  }
  log_default.printSuccess("================ Install dependencies: Succeeded ================");
  log_default.printInfo("================ Compliling ts code: Starting... ================");
  const exeCmd = packageManager === "bun" ? "bunx" : "pnpx";
  (0, import_child_process5.spawnSync)(
    `${exeCmd} zx ${webRoot.replace(/\\/g, "/")}/scripts/build-ts.mjs --source=${sourcePath}`,
    {
      encoding: "utf-8",
      stdio: "inherit",
      shell: true
    }
  );
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
    const m = await import(`file://${sourcePath.replace(/\\/g, "/")}/.output/esm/${file}`);
    if (!m || !Po(m.default)) {
      continue;
    }
    const designer = m.default;
    if (!pluginLoaded) {
      if (args.language === vi.Language.Java) {
        Ue2.registerPlugin(gi);
      } else if (args.language === vi.Language.Kotlin) {
        Ue2.registerPlugin(_i);
      } else if (args.language === vi.Language.CSharp) {
        Ue2.registerPlugin(Ci);
      } else if (args.language === vi.Language.Go) {
        Ue2.registerPlugin(bi);
      } else {
        isNever(args.language);
      }
      pluginLoaded = true;
    }
    agg4 = mi(designer);
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
var agg3 = G(() => {
  const isReady = (0, import_reactivity4.ref)(false);
  const currentCommand = (0, import_reactivity4.ref)(Subcommand.None);
  const source = process.cwd();
  const initCommandArgs = (0, import_reactivity4.reactive)({ source });
  const updateWorkspaceCommandArgs = (0, import_reactivity4.reactive)({
    source
  });
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
    }).addCommand(requireInitCommand({ currentCommand, args: initCommandArgs })).addCommand(requireInfoCommand({ currentCommand })).addCommand(
      requireUpdateWorkspaceCommand({
        currentCommand,
        args: updateWorkspaceCommandArgs
      })
    ).addCommand(requireRunWebCommand({ currentCommand, args: runWebCommandArgs })).addCommand(requireGenCodeCommand({ currentCommand, args: genCodeCommandArgs }));
    program2.parse(process.argv);
    if (environmentAgg6.states.debugMode.value === true) {
      log_default.printDebug("- DEBUG: args\u4FE1\u606F\uFF1A", `[
	${process.argv.join("\n	")}
]`);
      log_default.printDebug("- DEBUG: packageManager", environmentAgg6.states.packageManager.value);
    }
    if (Subcommand.GenCode !== currentCommand.value && Subcommand.None !== currentCommand.value) {
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
    if (currentCommand.value === Subcommand.None) {
      const result = await (0, import_prompts6.default)(
        [
          {
            name: "subcommand",
            type: "select",
            message: $t11("question.subcommand"),
            choices: [
              {
                title: $t11("question.subcommand.genCode"),
                value: Subcommand.GenCode
              },
              {
                title: $t11("question.subcommand.init"),
                value: Subcommand.Init
              },
              {
                title: $t11("question.subcommand.updateWorkspace"),
                value: Subcommand.UpdateWorkspace
              },
              {
                title: $t11("question.subcommand.runWeb"),
                value: Subcommand.RunWeb
              },
              {
                title: $t11("question.subcommand.info"),
                value: Subcommand.Info
              }
            ]
          }
        ],
        { onCancel }
      );
      currentCommand.value = result.subcommand;
    }
    const subcommand = currentCommand.value;
    if (subcommand === Subcommand.Init) {
      await requireInitCommandArgs({ currentCommand, args: initCommandArgs });
    } else if (subcommand === Subcommand.UpdateWorkspace) {
      await requireUpdateWorkspaceCommandArgs({
        currentCommand,
        args: updateWorkspaceCommandArgs
      });
    } else if (subcommand === Subcommand.RunWeb) {
      await requireRunWebCommandArgs({
        currentCommand,
        args: runWebCommandArgs
      });
    } else if (subcommand === Subcommand.Info) {
      await requireInfoCommandArgs({ currentCommand });
    } else if (subcommand === Subcommand.GenCode) {
      await requireGenCodeCommandArgs({
        currentCommand,
        args: genCodeCommandArgs
      });
    } else if (subcommand === Subcommand.None) {
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
        if (c === Subcommand.Info) {
          await execute2();
        } else if (c === Subcommand.Init) {
          await execute(initCommandArgs);
        } else if (c === Subcommand.RunWeb) {
          await execute4(runWebCommandArgs);
        } else if (c === Subcommand.UpdateWorkspace) {
          await execute3(updateWorkspaceCommandArgs);
        } else if (c === Subcommand.GenCode) {
          await execute5(genCodeCommandArgs);
        } else if (c === Subcommand.None) {
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
@vue/shared/dist/shared.cjs.js:
  (**
  * @vue/shared v3.5.39
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/reactivity/dist/reactivity.cjs.prod.js:
@vue/reactivity/dist/reactivity.cjs.js:
  (**
  * @vue/reactivity v3.5.39
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
*/
