(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(t,e,r){"use strict";var n=r(8);e.__esModule=!0,e.withPrefix=T,e.navigateTo=e.replace=e.push=e.navigate=e.default=void 0;var o=n(r(158)),i=n(r(159)),a=n(r(7)),u=n(r(52)),c=n(r(53)),l=n(r(4)),s=n(r(0)),f=r(22),p=r(143);function T(t){return function(t){return t.replace(/\/+/g,"/")}("/"+t)}var d={activeClassName:l.default.string,activeStyle:l.default.object},h=function(t){function e(e){var r;r=t.call(this)||this,(0,c.default)((0,u.default)((0,u.default)(r)),"defaultGetProps",function(t){return t.isCurrent?{className:[r.props.className,r.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},r.props.style,r.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),r.state={IOSupported:n},r.handleRef=r.handleRef.bind((0,u.default)((0,u.default)(r))),r}(0,a.default)(e,t);var r=e.prototype;return r.componentDidUpdate=function(t,e){this.props.to===t.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},r.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},r.handleRef=function(t){var e,r,n,o=this;this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&(e=t,r=function(){___loader.enqueue((0,p.parsePath)(o.props.to).pathname)},(n=new window.IntersectionObserver(function(t){t.forEach(function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(n.unobserve(e),n.disconnect(),r())})})).observe(e))},r.render=function(){var t=this,e=this.props,r=e.to,n=e.getProps,a=void 0===n?this.defaultGetProps:n,u=e.onClick,c=e.onMouseEnter,l=(e.activeClassName,e.activeStyle,e.ref,e.innerRef,e.state),d=e.replace,h=(0,o.default)(e,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),E=T(r);return s.default.createElement(f.Link,(0,i.default)({to:E,state:l,getProps:a,innerRef:this.handleRef,onMouseEnter:function(t){c&&c(t),___loader.hovering((0,p.parsePath)(r).pathname)},onClick:function(e){return u&&u(e),0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(e.preventDefault(),y(r,{state:l,replace:d})),!0}},h))},e}(s.default.Component);h.propTypes=(0,i.default)({},d,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var E=h;e.default=E;var y=function(t,e){window.___navigate(T(t),e)};e.navigate=y;var v=function(t){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(T(t))};e.push=v;e.replace=function(t){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(T(t))};e.navigateTo=function(t){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),v(t)}},145:function(t,e){e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},n=(e.VALID_TAG_NAMES=Object.keys(r).map(function(t){return r[t]}),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(n).reduce(function(t,e){return t[n[e]]=e,t},{}),e.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},158:function(t,e){t.exports=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}},159:function(t,e){function r(){return t.exports=r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},r.apply(this,arguments)}t.exports=r},161:function(t,e,r){e.__esModule=!0,e.Helmet=void 0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=f(r(0)),a=f(r(4)),u=f(r(162)),c=f(r(165)),l=r(168),s=r(145);function f(t){return t&&t.__esModule?t:{default:t}}function p(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}var T,d,h,E=(0,u.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)(function(){return null}),y=(T=E,h=d=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!(0,c.default)(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case s.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,r=t.child,o=t.arrayTypeChildren,i=t.newChildProps,a=t.nestedChildren;return n({},o,((e={})[r.type]=[].concat(o[r.type]||[],[n({},i,this.mapNestedChildrenToProps(r,a))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,r,o=t.child,i=t.newProps,a=t.newChildProps,u=t.nestedChildren;switch(o.type){case s.TAG_NAMES.TITLE:return n({},i,((e={})[o.type]=u,e.titleAttributes=n({},a),e));case s.TAG_NAMES.BODY:return n({},i,{bodyAttributes:n({},a)});case s.TAG_NAMES.HTML:return n({},i,{htmlAttributes:n({},a)})}return n({},i,((r={})[o.type]=n({},a),r))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var r=n({},e);return Object.keys(t).forEach(function(e){var o;r=n({},r,((o={})[e]=t[e],o))}),r},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var r=this,n={};return i.default.Children.forEach(t,function(t){if(t&&t.props){var o=t.props,i=o.children,a=p(o,["children"]),u=(0,l.convertReactPropstoHtmlAttributes)(a);switch(r.warnOnInvalidChildren(t,i),t.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:t,arrayTypeChildren:n,newChildProps:u,nestedChildren:i});break;default:e=r.mapObjectTypeChildren({child:t,newProps:e,newChildProps:u,nestedChildren:i})}}}),e=this.mapArrayTypeChildrenToProps(n,e)},e.prototype.render=function(){var t=this.props,e=t.children,r=p(t,["children"]),o=n({},r);return e&&(o=this.mapChildrenToProps(e,o)),i.default.createElement(T,o)},o(e,null,[{key:"canUseDOM",set:function(t){T.canUseDOM=t}}]),e}(i.default.Component),d.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},d.defaultProps={defer:!0,encodeSpecialCharacters:!0},d.peek=T.peek,d.rewind=function(){var t=T.rewind();return t||(t=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},h);y.renderStatic=y.rewind,e.Helmet=y,e.default=y},162:function(t,e,r){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var o=r(0),i=n(o),a=n(r(163)),u=n(r(164));t.exports=function(t,e,r){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c=[],l=void 0;function s(){l=t(c.map(function(t){return t.props})),f.canUseDOM?e(l):r&&(l=r(l))}var f=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.peek=function(){return l},e.rewind=function(){if(e.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=l;return l=void 0,c=[],t},e.prototype.shouldComponentUpdate=function(t){return!u(t,this.props)},e.prototype.componentWillMount=function(){c.push(this),s()},e.prototype.componentDidUpdate=function(){s()},e.prototype.componentWillUnmount=function(){var t=c.indexOf(this);c.splice(t,1),s()},e.prototype.render=function(){return i.createElement(n,this.props)},e}(o.Component);return f.displayName="SideEffect("+function(t){return t.displayName||t.name||"Component"}(n)+")",f.canUseDOM=a.canUseDOM,f}}},163:function(t,e,r){var n;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(n=function(){return i}.call(e,r,e,t))||(t.exports=n)}()},164:function(t,e){t.exports=function(t,e,r,n){var o=r?r.call(n,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(e),c=0;c<i.length;c++){var l=i[c];if(!u(l))return!1;var s=t[l],f=e[l];if(!1===(o=r?r.call(n,s,f,l):void 0)||void 0===o&&s!==f)return!1}return!0}},165:function(t,e,r){var n=Array.prototype.slice,o=r(166),i=r(167),a=t.exports=function(t,e,r){return r||(r={}),t===e||(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():!t||!e||"object"!=typeof t&&"object"!=typeof e?r.strict?t===e:t==e:function(t,e,r){var l,s;if(u(t)||u(e))return!1;if(t.prototype!==e.prototype)return!1;if(i(t))return!!i(e)&&(t=n.call(t),e=n.call(e),a(t,e,r));if(c(t)){if(!c(e))return!1;if(t.length!==e.length)return!1;for(l=0;l<t.length;l++)if(t[l]!==e[l])return!1;return!0}try{var f=o(t),p=o(e)}catch(T){return!1}if(f.length!=p.length)return!1;for(f.sort(),p.sort(),l=f.length-1;l>=0;l--)if(f[l]!=p[l])return!1;for(l=f.length-1;l>=0;l--)if(s=f[l],!a(t[s],e[s],r))return!1;return typeof t==typeof e}(t,e,r))};function u(t){return null==t}function c(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}},166:function(t,e){function r(t){var e=[];for(var r in t)e.push(r);return e}(t.exports="function"==typeof Object.keys?Object.keys:r).shim=r},167:function(t,e){var r="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();function n(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function o(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}(e=t.exports=r?n:o).supported=n,e.unsupported=o},168:function(t,e,r){(function(t){e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i=c(r(0)),a=c(r(51)),u=r(145);function c(t){return t&&t.__esModule?t:{default:t}}var l,s=function(t){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(t){var e=E(t,u.TAG_NAMES.TITLE),r=E(t,u.HELMET_PROPS.TITLE_TEMPLATE);if(r&&e)return r.replace(/%s/g,function(){return e});var n=E(t,u.HELMET_PROPS.DEFAULT_TITLE);return e||n||void 0},p=function(t){return E(t,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(t,e){return e.filter(function(e){return void 0!==e[t]}).map(function(e){return e[t]}).reduce(function(t,e){return o({},t,e)},{})},d=function(t,e){return e.filter(function(t){return void 0!==t[u.TAG_NAMES.BASE]}).map(function(t){return t[u.TAG_NAMES.BASE]}).reverse().reduce(function(e,r){if(!e.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==t.indexOf(i)&&r[i])return e.concat(r)}return e},[])},h=function(t,e,r){var o={};return r.filter(function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&_("Helmet: "+t+' should be of type "Array". Instead found type "'+n(e[t])+'"'),!1)}).map(function(e){return e[t]}).reverse().reduce(function(t,r){var n={};r.filter(function(t){for(var r=void 0,i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===e.indexOf(l)||r===u.TAG_PROPERTIES.REL&&"canonical"===t[r].toLowerCase()||l===u.TAG_PROPERTIES.REL&&"stylesheet"===t[l].toLowerCase()||(r=l),-1===e.indexOf(c)||c!==u.TAG_PROPERTIES.INNER_HTML&&c!==u.TAG_PROPERTIES.CSS_TEXT&&c!==u.TAG_PROPERTIES.ITEM_PROP||(r=c)}if(!r||!t[r])return!1;var s=t[r].toLowerCase();return o[r]||(o[r]={}),n[r]||(n[r]={}),!o[r][s]&&(n[r][s]=!0,!0)}).reverse().forEach(function(e){return t.push(e)});for(var i=Object.keys(n),c=0;c<i.length;c++){var l=i[c],s=(0,a.default)({},o[l],n[l]);o[l]=s}return t},[]).reverse()},E=function(t,e){for(var r=t.length-1;r>=0;r--){var n=t[r];if(n.hasOwnProperty(e))return n[e]}return null},y=(l=Date.now(),function(t){var e=Date.now();e-l>16?(l=e,t(e)):setTimeout(function(){y(t)},0)}),v=function(t){return clearTimeout(t)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||y:t.requestAnimationFrame||y,b="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||v:t.cancelAnimationFrame||v,_=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},S=null,m=function(t,e){var r=t.baseTag,n=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,l=t.onChangeClientState,s=t.scriptTags,f=t.styleTags,p=t.title,T=t.titleAttributes;P(u.TAG_NAMES.BODY,n),P(u.TAG_NAMES.HTML,o),g(p,T);var d={baseTag:w(u.TAG_NAMES.BASE,r),linkTags:w(u.TAG_NAMES.LINK,i),metaTags:w(u.TAG_NAMES.META,a),noscriptTags:w(u.TAG_NAMES.NOSCRIPT,c),scriptTags:w(u.TAG_NAMES.SCRIPT,s),styleTags:w(u.TAG_NAMES.STYLE,f)},h={},E={};Object.keys(d).forEach(function(t){var e=d[t],r=e.newTags,n=e.oldTags;r.length&&(h[t]=r),n.length&&(E[t]=d[t].oldTags)}),e&&e(),l(t,h,E)},O=function(t){return Array.isArray(t)?t.join(""):t},g=function(t,e){void 0!==t&&document.title!==t&&(document.title=O(t)),P(u.TAG_NAMES.TITLE,e)},P=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute(u.HELMET_ATTRIBUTE),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(e),c=0;c<a.length;c++){var l=a[c],s=e[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var f=i.indexOf(l);-1!==f&&i.splice(f,1)}for(var p=i.length-1;p>=0;p--)r.removeAttribute(i[p]);o.length===i.length?r.removeAttribute(u.HELMET_ATTRIBUTE):r.getAttribute(u.HELMET_ATTRIBUTE)!==a.join(",")&&r.setAttribute(u.HELMET_ATTRIBUTE,a.join(","))}},w=function(t,e){var r=document.head||document.querySelector(u.TAG_NAMES.HEAD),n=r.querySelectorAll(t+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return e&&e.length&&e.forEach(function(e){var r=document.createElement(t);for(var n in e)if(e.hasOwnProperty(n))if(n===u.TAG_PROPERTIES.INNER_HTML)r.innerHTML=e.innerHTML;else if(n===u.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=e.cssText:r.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[n]?"":e[n];r.setAttribute(n,c)}r.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some(function(t,e){return a=e,r.isEqualNode(t)})?o.splice(a,1):i.push(r)}),o.forEach(function(t){return t.parentNode.removeChild(t)}),i.forEach(function(t){return r.appendChild(t)}),{oldTags:o,newTags:i}},M=function(t){return Object.keys(t).reduce(function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n},"")},R=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,r){return e[u.REACT_TAG_MAP[r]||r]=t[r],e},e)},C=function(t,e,r){switch(t){case u.TAG_NAMES.TITLE:return{toComponent:function(){return t=e.title,r=e.titleAttributes,(n={key:t})[u.HELMET_ATTRIBUTE]=!0,o=R(r,n),[i.default.createElement(u.TAG_NAMES.TITLE,o,t)];var t,r,n,o},toString:function(){return function(t,e,r,n){var o=M(r),i=O(e);return o?"<"+t+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+s(i,n)+"</"+t+">":"<"+t+" "+u.HELMET_ATTRIBUTE+'="true">'+s(i,n)+"</"+t+">"}(t,e.title,e.titleAttributes,r)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return R(e)},toString:function(){return M(e)}};default:return{toComponent:function(){return function(t,e){return e.map(function(e,r){var n,o=((n={key:r})[u.HELMET_ATTRIBUTE]=!0,n);return Object.keys(e).forEach(function(t){var r=u.REACT_TAG_MAP[t]||t;if(r===u.TAG_PROPERTIES.INNER_HTML||r===u.TAG_PROPERTIES.CSS_TEXT){var n=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=e[t]}),i.default.createElement(t,o)})}(t,e)},toString:function(){return function(t,e,r){return e.reduce(function(e,n){var o=Object.keys(n).filter(function(t){return!(t===u.TAG_PROPERTIES.INNER_HTML||t===u.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(t,e){var o=void 0===n[e]?e:e+'="'+s(n[e],r)+'"';return t?t+" "+o:o},""),i=n.innerHTML||n.cssText||"",a=-1===u.SELF_CLOSING_TAGS.indexOf(t);return e+"<"+t+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+t+">")},"")}(t,e,r)}}}};e.convertReactPropstoHtmlAttributes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,r){return e[u.HTML_TAG_MAP[r]||r]=t[r],e},e)},e.handleClientStateChange=function(t){S&&b(S),t.defer?S=A(function(){m(t,function(){S=null})}):(m(t),S=null)},e.mapStateOnServer=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,l=t.scriptTags,s=t.styleTags,f=t.title,p=void 0===f?"":f,T=t.titleAttributes;return{base:C(u.TAG_NAMES.BASE,e,n),bodyAttributes:C(u.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:C(u.ATTRIBUTE_NAMES.HTML,o,n),link:C(u.TAG_NAMES.LINK,i,n),meta:C(u.TAG_NAMES.META,a,n),noscript:C(u.TAG_NAMES.NOSCRIPT,c,n),script:C(u.TAG_NAMES.SCRIPT,l,n),style:C(u.TAG_NAMES.STYLE,s,n),title:C(u.TAG_NAMES.TITLE,{title:p,titleAttributes:T},n)}},e.reducePropsToState=function(t){return{baseTag:d([u.TAG_PROPERTIES.HREF],t),bodyAttributes:T(u.ATTRIBUTE_NAMES.BODY,t),defer:E(t,u.HELMET_PROPS.DEFER),encode:E(t,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(u.ATTRIBUTE_NAMES.HTML,t),linkTags:h(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],t),metaTags:h(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:h(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:p(t),scriptTags:h(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],t),styleTags:h(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],t),title:f(t),titleAttributes:T(u.ATTRIBUTE_NAMES.TITLE,t)}},e.requestAnimationFrame=A,e.warn=_}).call(this,r(73))},169:function(t,e,r){var n;n=function(t){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=r(1),i=(n=o)&&n.__esModule?n:{default:n};e.default=i.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=r(2),u=(n=a)&&n.__esModule?n:{default:n};var c=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.smoothScroll=r.smoothScroll.bind(r),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.Component),i(e,[{key:"componentDidMount",value:function(){r(3).polyfill()}},{key:"smoothScroll",value:function(t){var e=this;t.preventDefault();var r=function(){return 0};void 0!==this.props.offset&&(r=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(e.props.offset)});var n=t.currentTarget.getAttribute("href").slice(1);window.scroll({top:document.getElementById(n).offsetTop-r(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(t)}},{key:"render",value:function(){var t=this.props,e=(t.offset,function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}(t,["offset"]));return u.default.createElement("a",o({},e,{onClick:this.smoothScroll}))}}]),e}();e.default=c},function(e,r){e.exports=t},function(t,e,r){!function(){"use strict";var e=window,r=document;t.exports={polyfill:function(){if(!("scrollBehavior"in r.documentElement.style&&!0!==e.__forceSmoothScrollPolyfill__)){var t,n=e.HTMLElement||e.Element,o=468,i=(t=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(t)?1:0),a={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||c,scrollIntoView:n.prototype.scrollIntoView},u=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now;e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?d.call(e,r.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):a.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(l(arguments[0])?a.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):d.call(e,r.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==l(arguments[0])){var t=arguments[0].left,e=arguments[0].top;d.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value couldn't be converted");a.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):a.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==l(arguments[0])){var t=function(t){var e;do{e=(t=t.parentNode)===r.body}while(!1===e&&!1===p(t));return e=null,t}(this),n=t.getBoundingClientRect(),o=this.getBoundingClientRect();t!==r.body?(d.call(this,t,t.scrollLeft+o.left-n.left,t.scrollTop+o.top-n.top),"fixed"!==e.getComputedStyle(t).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else a.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(t,e){this.scrollLeft=t,this.scrollTop=e}function l(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(t,e){return"Y"===e?t.clientHeight+i<t.scrollHeight:"X"===e?t.clientWidth+i<t.scrollWidth:void 0}function f(t,r){var n=e.getComputedStyle(t,null)["overflow"+r];return"auto"===n||"scroll"===n}function p(t){var e=s(t,"Y")&&f(t,"Y"),r=s(t,"X")&&f(t,"X");return e||r}function T(t){var r,n,i,a,c=(u()-t.startTime)/o;a=c=c>1?1:c,r=.5*(1-Math.cos(Math.PI*a)),n=t.startX+(t.x-t.startX)*r,i=t.startY+(t.y-t.startY)*r,t.method.call(t.scrollable,n,i),n===t.x&&i===t.y||e.requestAnimationFrame(T.bind(e,t))}function d(t,n,o){var i,l,s,f,p=u();t===r.body?(i=e,l=e.scrollX||e.pageXOffset,s=e.scrollY||e.pageYOffset,f=a.scroll):(i=t,l=t.scrollLeft,s=t.scrollTop,f=c),T({scrollable:i,method:f,startTime:p,startX:l,startY:s,x:n,y:o})}}}}()}])},t.exports=n(r(0))}}]);
//# sourceMappingURL=0-74bc8beee40445b723b9.js.map