(()=>{var K=(t,e)=>()=>(e||(e={exports:{}},t(e.exports,e)),e.exports),B=K(x=>{var v,de,O,ve,ye,X,me,T={},Y=[],Ke=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function A(t,e){for(var n in e)t[n]=e[n];return t}function ge(t){var e=t.parentNode;e&&e.removeChild(t)}function Z(t,e,n){var o,i,r,a=arguments,l={};for(r in e)r=="key"?o=e[r]:r=="ref"?i=e[r]:l[r]=e[r];if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(a[r]);if(n!=null&&(l.children=n),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)l[r]===void 0&&(l[r]=t.defaultProps[r]);return U(t,l,o,i,null)}function U(t,e,n,o,i){var r={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++v.__v};return v.vnode!=null&&v.vnode(r),r}function q(t){return t.children}function W(t,e){this.props=t,this.context=e}function D(t,e){if(e==null)return t.__?D(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?D(t):null}function be(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return be(t)}}function $(t){(!t.__d&&(t.__d=!0)&&O.push(t)&&!I.__r++||ye!==v.debounceRendering)&&((ye=v.debounceRendering)||ve)(I)}function I(){for(var t;I.__r=O.length;)t=O.sort(function(e,n){return e.__v.__b-n.__v.__b}),O=[],t.some(function(e){var n,o,i,r,a,l;e.__d&&(a=(r=(n=e).__v).__e,(l=n.__P)&&(o=[],(i=A({},r)).__v=r.__v+1,ee(l,r,i,n.__n,l.ownerSVGElement!==void 0,r.__h!=null?[a]:null,o,a??D(r),r.__h),ke(o,r),r.__e!=a&&be(r)))})}function Ce(t,e,n,o,i,r,a,l,c,s){var _,d,f,u,y,w,h,g=o&&o.__k||Y,k=g.length;for(c==T&&(c=a!=null?a[0]:k?D(o,0):null),n.__k=[],_=0;_<e.length;_++)if((u=n.__k[_]=(u=e[_])==null||typeof u=="boolean"?null:typeof u=="string"||typeof u=="number"?U(null,u,null,null,u):Array.isArray(u)?U(q,{children:u},null,null,null):u.__b>0?U(u.type,u.props,u.key,null,u.__v):u)!=null){if(u.__=n,u.__b=n.__b+1,(f=g[_])===null||f&&u.key==f.key&&u.type===f.type)g[_]=void 0;else for(d=0;d<k;d++){if((f=g[d])&&u.key==f.key&&u.type===f.type){g[d]=void 0;break}f=null}ee(t,u,f=f||T,i,r,a,l,c,s),y=u.__e,(d=u.ref)&&f.ref!=d&&(h||(h=[]),f.ref&&h.push(f.ref,null,u),h.push(d,u.__c||y,u)),y!=null?(w==null&&(w=y),typeof u.type=="function"&&u.__k!=null&&u.__k===f.__k?u.__d=c=Se(u,c,t):c=xe(t,u,f,g,a,y,c),s||n.type!=="option"?typeof n.type=="function"&&(n.__d=c):t.value=""):c&&f.__e==c&&c.parentNode!=t&&(c=D(f))}if(n.__e=w,a!=null&&typeof n.type!="function")for(_=a.length;_--;)a[_]!=null&&ge(a[_]);for(_=k;_--;)g[_]!=null&&(typeof n.type=="function"&&g[_].__e!=null&&g[_].__e==n.__d&&(n.__d=D(o,_+1)),we(g[_],g[_]));if(h)for(_=0;_<h.length;_++)Ee(h[_],h[++_],h[++_])}function Se(t,e,n){var o,i;for(o=0;o<t.__k.length;o++)(i=t.__k[o])&&(i.__=t,e=typeof i.type=="function"?Se(i,e,n):xe(n,i,i,t.__k,null,i.__e,e));return e}function xe(t,e,n,o,i,r,a){var l,c,s;if(e.__d!==void 0)l=e.__d,e.__d=void 0;else if(i==n||r!=a||r.parentNode==null)e:if(a==null||a.parentNode!==t)t.appendChild(r),l=null;else{for(c=a,s=0;(c=c.nextSibling)&&s<o.length;s+=2)if(c==r)break e;t.insertBefore(r,a),l=a}return l!==void 0?l:r.nextSibling}function Xe(t,e,n,o,i){var r;for(r in n)r==="children"||r==="key"||r in e||R(t,r,null,n[r],o);for(r in e)i&&typeof e[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===e[r]||R(t,r,e[r],n[r],o)}function Ae(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||Ke.test(e)?n:n+"px"}function R(t,e,n,o,i){var r,a,l;if(i&&e=="className"&&(e="class"),e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(e in o)n&&e in n||Ae(t.style,e,"");if(n)for(e in n)o&&n[e]===o[e]||Ae(t.style,e,n[e])}else e[0]==="o"&&e[1]==="n"?(r=e!==(e=e.replace(/Capture$/,"")),(a=e.toLowerCase())in t&&(e=a),e=e.slice(2),t.l||(t.l={}),t.l[e+r]=n,l=r?Ze:Ye,n?o||t.addEventListener(e,l,r):t.removeEventListener(e,l,r)):e!=="list"&&e!=="tagName"&&e!=="form"&&e!=="type"&&e!=="size"&&e!=="download"&&e!=="href"&&!i&&e in t?t[e]=n??"":typeof n!="function"&&e!=="dangerouslySetInnerHTML"&&(e!==(e=e.replace(/xlink:?/,""))?n==null||n===!1?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):n==null||n===!1&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function Ye(t){this.l[t.type+!1](v.event?v.event(t):t)}function Ze(t){this.l[t.type+!0](v.event?v.event(t):t)}function ee(t,e,n,o,i,r,a,l,c){var s,_,d,f,u,y,w,h,g,k,M,S=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,l=e.__e=n.__e,e.__h=null,r=[l]),(s=v.__b)&&s(e);try{e:if(typeof S=="function"){if(h=e.props,g=(s=S.contextType)&&o[s.__c],k=s?g?g.props.value:s.__:o,n.__c?w=(_=e.__c=n.__c).__=_.__E:("prototype"in S&&S.prototype.render?e.__c=_=new S(h,k):(e.__c=_=new W(h,k),_.constructor=S,_.render=et),g&&g.sub(_),_.props=h,_.state||(_.state={}),_.context=k,_.__n=o,d=_.__d=!0,_.__h=[]),_.__s==null&&(_.__s=_.state),S.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=A({},_.__s)),A(_.__s,S.getDerivedStateFromProps(h,_.__s))),f=_.props,u=_.state,d)S.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(S.getDerivedStateFromProps==null&&h!==f&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(h,k),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(h,_.__s,k)===!1||e.__v===n.__v){_.props=h,_.state=_.__s,e.__v!==n.__v&&(_.__d=!1),_.__v=e,e.__e=n.__e,e.__k=n.__k,_.__h.length&&a.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(h,_.__s,k),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(f,u,y)})}_.context=k,_.props=h,_.state=_.__s,(s=v.__r)&&s(e),_.__d=!1,_.__v=e,_.__P=t,s=_.render(_.props,_.state,_.context),_.state=_.__s,_.getChildContext!=null&&(o=A(A({},o),_.getChildContext())),d||_.getSnapshotBeforeUpdate==null||(y=_.getSnapshotBeforeUpdate(f,u)),M=s!=null&&s.type===q&&s.key==null?s.props.children:s,Ce(t,Array.isArray(M)?M:[M],e,n,o,i,r,a,l,c),_.base=e.__e,e.__h=null,_.__h.length&&a.push(_),w&&(_.__E=_.__=null),_.__e=!1}else r==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=$e(n.__e,e,n,o,i,r,a,c);(s=v.diffed)&&s(e)}catch(_e){e.__v=null,(c||r!=null)&&(e.__e=l,e.__h=!!c,r[r.indexOf(l)]=null),v.__e(_e,e,n)}}function ke(t,e){v.__c&&v.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(o){o.call(n)})}catch(o){v.__e(o,n.__v)}})}function $e(t,e,n,o,i,r,a,l){var c,s,_,d,f,u=n.props,y=e.props;if(i=e.type==="svg"||i,r!=null){for(c=0;c<r.length;c++)if((s=r[c])!=null&&((e.type===null?s.nodeType===3:s.localName===e.type)||t==s)){t=s,r[c]=null;break}}if(t==null){if(e.type===null)return document.createTextNode(y);t=i?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,y.is&&{is:y.is}),r=null,l=!1}if(e.type===null)u===y||l&&t.data===y||(t.data=y);else{if(r!=null&&(r=Y.slice.call(t.childNodes)),_=(u=n.props||T).dangerouslySetInnerHTML,d=y.dangerouslySetInnerHTML,!l){if(r!=null)for(u={},f=0;f<t.attributes.length;f++)u[t.attributes[f].name]=t.attributes[f].value;(d||_)&&(d&&(_&&d.__html==_.__html||d.__html===t.innerHTML)||(t.innerHTML=d&&d.__html||""))}Xe(t,y,u,i,l),d?e.__k=[]:(c=e.props.children,Ce(t,Array.isArray(c)?c:[c],e,n,o,e.type!=="foreignObject"&&i,r,a,T,l)),l||("value"in y&&(c=y.value)!==void 0&&(c!==t.value||e.type==="progress"&&!c)&&R(t,"value",c,u.value,!1),"checked"in y&&(c=y.checked)!==void 0&&c!==t.checked&&R(t,"checked",c,u.checked,!1))}return t}function Ee(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(o){v.__e(o,n)}}function we(t,e,n){var o,i,r;if(v.unmount&&v.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||Ee(o,null,e)),n||typeof t.type=="function"||(n=(i=t.__e)!=null),t.__e=t.__d=void 0,(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(a){v.__e(a,e)}o.base=o.__P=null}if(o=t.__k)for(r=0;r<o.length;r++)o[r]&&we(o[r],e,n);i!=null&&ge(i)}function et(t,e,n){return this.constructor(t,n)}function Te(t,e,n){var o,i,r;v.__&&v.__(t,e),i=(o=n===X)?null:n&&n.__k||e.__k,t=Z(q,null,[t]),r=[],ee(e,(o?e:n||e).__k=t,i||T,T,e.ownerSVGElement!==void 0,n&&!o?[n]:i?null:e.childNodes.length?Y.slice.call(e.childNodes):null,r,n||T,o),ke(r,t)}v={__e:function(t,e){for(var n,o,i,r=e.__h;e=e.__;)if((n=e.__c)&&!n.__)try{if((o=n.constructor)&&o.getDerivedStateFromError!=null&&(n.setState(o.getDerivedStateFromError(t)),i=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t),i=n.__d),i)return e.__h=r,n.__E=n}catch(a){t=a}throw t},__v:0},de=function(t){return t!=null&&t.constructor===void 0},W.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=A({},this.state),typeof t=="function"&&(t=t(A({},n),this.props)),t&&A(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),$(this))},W.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),$(this))},W.prototype.render=q,O=[],ve=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,I.__r=0,X=T,me=0,x.render=Te,x.hydrate=function(t,e){Te(t,e,X)},x.createElement=Z,x.h=Z,x.Fragment=q,x.createRef=function(){return{current:null}},x.isValidElement=de,x.Component=W,x.cloneElement=function(t,e,n){var o,i,r,a=arguments,l=A({},t.props);for(r in e)r=="key"?o=e[r]:r=="ref"?i=e[r]:l[r]=e[r];if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(a[r]);return n!=null&&(l.children=n),U(t.type,l,o||t.key,i||t.ref,null)},x.createContext=function(t,e){var n={__c:e="__cC"+me++,__:t,Consumer:function(o,i){return o.children(i)},Provider:function(o){var i,r;return this.getChildContext||(i=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(a){this.props.value!==a.value&&i.some($)},this.sub=function(a){i.push(a);var l=a.componentWillUnmount;a.componentWillUnmount=function(){i.splice(i.indexOf(a),1),l&&l.call(a)}}),o.children}};return n.Provider.__=n.Consumer.contextType=n},x.toChildArray=function t(e,n){return n=n||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(o){t(o,n)}):n.push(e)),n},x.options=v}),De=K((gt,He)=>{var Me=B(),tt=function(t){return t.replace(/-([a-z])/gi,function(e,n){return n.toUpperCase()})},nt=function(){return document.currentScript||function(){var t=document.getElementsByTagName("script");return t[t.length-1]}()},rt=function(t,e){e===void 0&&(e={});var n=t.attributes,o=Object.assign({},e);return Object.keys(n).forEach(function(i){if(n.hasOwnProperty(i)){var r=n[i].name;if(!r||typeof r!="string")return!1;var a=r.split(/(data-props?-)/).pop()||"";if(a=tt(a),r!==a){var l=n[i].nodeValue;o[a]=l}}}),[].forEach.call(t.getElementsByTagName("script"),function(i){var r={};if(i.hasAttribute("type")){if(i.getAttribute("type")!=="text/props"&&i.getAttribute("type")!=="application/json")return;try{r=JSON.parse(i.innerHTML)}catch(a){throw new Error(a)}Object.assign(o,r)}}),o},ot=function(t){var e=t.attributes,n=null;return Object.keys(e).forEach(function(o){e.hasOwnProperty(o)&&(e[o].name==="data-mount-in"&&(n=e[o].nodeValue))}),n},Pe=function(t){var e=t.selector,n=t.inline,o=t.clientSpecified,i=[],r=nt();if(n===!0){var a=r.parentNode;i.push(a)}return o!==!0||e||(e=ot(r)),e&&[].forEach.call(document.querySelectorAll(e),function(l){i.push(l)}),i},_t=function(t,e,n,o,i){e.forEach(function(r){var a=r;if(!a._habitat){a._habitat=!0;var l=rt(r,i)||i;return o&&(a.innerHTML=""),Me.render(Me.h(t,l),a,n)}})},it=function(t){var e=t;return{render:function(n){n===void 0&&(n={});var o=n.selector;o===void 0&&(o=null);var i=n.inline;i===void 0&&(i=!1);var r=n.clean;r===void 0&&(r=!1);var a=n.clientSpecified;a===void 0&&(a=!1);var l=n.defaultProps;l===void 0&&(l={});var c=Pe({selector:o,inline:i,clientSpecified:a}),s=function(){if(c.length>0){var _=Pe({selector:o,inline:i,clientSpecified:a});return _t(e,_,null,r,l)}};s(),document.addEventListener("DOMContentLoaded",s),document.addEventListener("load",s)}}};He.exports=it}),Be=K(E=>{var P,b,Ne,m=B(),N=0,te=[],Fe=m.options.__b,Le=m.options.__r,Oe=m.options.diffed,Ue=m.options.__c,qe=m.options.unmount;function F(t,e){m.options.__h&&m.options.__h(b,t,N||e),N=0;var n=b.__H||(b.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function Ve(t){return N=1,We(je,t)}function We(t,e,n){var o=F(P++,2);return o.t=t,o.__c||(o.__=[n?n(e):je(void 0,e),function(i){var r=o.t(o.__[0],i);o.__[0]!==r&&(o.__=[r,o.__[1]],o.__c.setState({}))}],o.__c=b),o.__}function Ie(t,e){var n=F(P++,4);!m.options.__s&&ne(n.__H,e)&&(n.__=t,n.__H=e,b.__h.push(n))}function re(t,e){var n=F(P++,7);return ne(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function at(){te.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(z),t.__H.__h.forEach(oe),t.__H.__h=[]}catch(e){t.__H.__h=[],m.options.__e(e,t.__v)}}),te=[]}m.options.__b=function(t){b=null,Fe&&Fe(t)},m.options.__r=function(t){Le&&Le(t),P=0;var e=(b=t.__c).__H;e&&(e.__h.forEach(z),e.__h.forEach(oe),e.__h=[])},m.options.diffed=function(t){Oe&&Oe(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(te.push(e)!==1&&Ne===m.options.requestAnimationFrame||((Ne=m.options.requestAnimationFrame)||function(n){var o,i=function(){clearTimeout(r),Re&&cancelAnimationFrame(o),setTimeout(n)},r=setTimeout(i,100);Re&&(o=requestAnimationFrame(i))})(at)),b=void 0},m.options.__c=function(t,e){e.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(o){return!o.__||oe(o)})}catch(o){e.some(function(i){i.__h&&(i.__h=[])}),e=[],m.options.__e(o,n.__v)}}),Ue&&Ue(t,e)},m.options.unmount=function(t){qe&&qe(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(z)}catch(n){m.options.__e(n,e.__v)}};var Re=typeof requestAnimationFrame=="function";function z(t){var e=b;typeof t.__c=="function"&&t.__c(),b=e}function oe(t){var e=b;t.__c=t.__(),b=e}function ne(t,e){return!t||t.length!==e.length||e.some(function(n,o){return n!==t[o]})}function je(t,e){return typeof e=="function"?e(t):e}E.useState=Ve,E.useReducer=We,E.useEffect=function(t,e){var n=F(P++,3);!m.options.__s&&ne(n.__H,e)&&(n.__=t,n.__H=e,b.__H.__h.push(n))},E.useLayoutEffect=Ie,E.useRef=function(t){return N=5,re(function(){return{current:t}},[])},E.useImperativeHandle=function(t,e,n){N=6,Ie(function(){typeof t=="function"?t(e()):t&&(t.current=e())},n==null?n:n.concat(t))},E.useMemo=re,E.useCallback=function(t,e){return N=8,re(function(){return t},e)},E.useContext=function(t){var e=b.context[t.__c],n=F(P++,9);return n.__c=t,e?(n.__==null&&(n.__=!0,e.sub(b)),e.props.value):t.__},E.useDebugValue=function(t,e){m.options.useDebugValue&&m.options.useDebugValue(e?e(t):t)},E.useErrorBoundary=function(t){var e=F(P++,10),n=Ve();return e.__=t,b.componentDidCatch||(b.componentDidCatch=function(o){e.__&&e.__(o),n[1](o)}),[n[0],function(){n[1](void 0)}]}});"use strict";var p=B(),ct=lt(De()),L=Be();function lt(t){return t&&t.__esModule?t:{default:t}}function H(t,e){return pt(t)||ft(t,e)||st(t,e)||ut()}function ut(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function st(t,e){if(!t)return;if(typeof t=="string")return ze(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ze(t,e)}function ze(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function ft(t,e){if(typeof Symbol=="undefined"||!(Symbol.iterator in Object(t)))return;var n=[],o=!0,i=!1,r=void 0;try{for(var a=t[Symbol.iterator](),l;!(o=(l=a.next()).done)&&!(n.push(l.value),e&&n.length===e);o=!0);}catch(c){i=!0,r=c}finally{try{!o&&a.return!=null&&a.return()}finally{if(i)throw r}}return n}function pt(t){if(Array.isArray(t))return t}var ht=function(e){var n=(0,L.useState)({pilsner:80,base:76,pale:81,biscuit:75,vienna:75,munich:75,brown:70,cara:70,"light-crystal":75,"pale-crystal":74,"medium-crystal":74,"dark-crystal":72,"special-b":68,chocolate:60,"roasted-barley":55,"black-malt":55,"wheat-malt":79,"rye-malt":63,oatmeal:70,corn:84,barley:70,wheat:77,rice:82,sugar:100}),o=H(n,2),i=o[0],r=o[1],a=(0,L.useState)(!1),l=H(a,2),c=l[0],s=l[1],_=(0,L.useState)(e.density||1.06),d=H(_,2),f=d[0],u=d[1],y=(0,L.useState)(e.volume||20),w=H(y,2),h=w[0],g=w[1],k=(0,L.useState)(e.quantity||Object.keys(e.malts).reduce(function(V,C){return V+parseFloat(e.malts[C]||0)},0)||5),M=H(k,2),S=M[0],_e=M[1],Je=(0,L.useState)(e.malts||{}),ie=H(Je,2),j=ie[0],vt=ie[1],Qe=function(C){return console.log("Calculate mash dentisity with density = ".concat(C," and volume = ").concat(h)),(259-259/C)*C*h/(S/1e3)},ae=function(){console.log("Malts "+JSON.stringify(j));for(var C=null,J=0,Q=0,le=Object.entries(j);Q<le.length;Q++){var ce=H(le[Q],2),Ge=ce[0],ue=ce[1];J+=ue,console.log(Ge+" -> "+ue)}for(var G=0,se=Object.entries(j);G<se.length;G++){var fe=H(se[G],2),pe=fe[0],he=fe[1];C+=he/J*(i[pe]||75),console.log(pe+" -> "+he)}return console.log("Total mash quantity: ".concat(J,"g - Best theoric ").concat(C)),C};return(0,p.h)("div",{class:"mash-efficiency container p-3"},(0,p.h)("h1",null,(0,p.h)("span",{class:"tf-ion-ios-pint",onClick:function(){return s(!c)}})," Calcul de rendements"),(0,p.h)("p",null,(0,p.h)("blockquote",null,(0,p.h)("span",{class:"tf-ion-calculator"})," Formule >>",(0,p.h)("code",null,"(259 - 259 / densit\xE9 mesur\xE9e) * densit\xE9 mesur\xE9e * volume de mo\xFBt / masse totale de malt"))),(0,p.h)("hr",null),c?(0,p.h)("div",null,(0,p.h)("ul",{class:"d-flex flex-row justify-content-around"},(0,p.h)("ul",{class:"d-flex flex-column justify-content-around"},(0,p.h)("li",{class:"display-4 p-5"},(0,p.h)("span",{class:"tf-ion-ios-flask-outline"})," Densit\xE9 ",f),(0,p.h)("li",{class:"display-4 p-5"},(0,p.h)("span",{class:"tf-ion-beaker"})," Volume ",h," L")),(0,p.h)("ul",{class:"d-flex flex-column justify-content-around"},(0,p.h)("li",{class:"display-4 p-5"},(0,p.h)("span",{class:"tf-ion-funnel"})," Quantit\xE9 de Malt ",(S/1e3).toFixed(2)," kg"),(0,p.h)("li",null,JSON.stringify(j)))),(0,p.h)("hr",null),(0,p.h)("ul",{class:"d-flex flex-row justify-content-center"},(0,p.h)("li",{class:"display-3 p-5"},(0,p.h)("span",{class:"tf-ion-stats-bars"})," Rendement: ",Qe(f).toFixed(2),"%"),(0,p.h)("li",{class:"display-4 p-5"},(0,p.h)("small",{class:"text-muted"},(0,p.h)("span",{class:"tf-ion-information-circled"}),"  Theorique: ",(ae()-10).toFixed(2)," ",(0,p.h)("span",{class:" tf-ion-android-arrow-forward"})," ",ae().toFixed(2))))):(0,p.h)("p",null))},dt=(0,ct.default)(ht);dt.render({inline:!0});})();
