(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),l=r(a("VbXa")),o=r(a("8OQS")),s=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),f=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},u=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return h(t||a).src},h=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(u);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),m=function(e){var t=f(e),a=p(t);return g[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,w=new WeakMap;function x(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),c.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function z(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+c+l+o+a+r+t+n+i+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},_=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,o=c.default.createElement(O,(0,s.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?c.default.createElement("picture",null,i(r),o):o})),O=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,d=e.onError,f=e.loading,u=e.draggable,p=e.ariaHidden,h=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},h,{onLoad:l,onError:d,ref:t,loading:f,draggable:u,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),a=p(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,o=void 0===l?{}:l,d=e.placeholderStyle,u=void 0===d?{}:d,p=e.placeholderClassName,g=e.fluid,m=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,w=e.itemProp,S=e.loading,I=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,s.default)({opacity:L?1:0,transition:C?"opacity "+b+"ms":"none"},o),V="boolean"==typeof v?"lightgray":v,H={transitionDelay:b+"ms"},N=(0,s.default)((0,s.default)((0,s.default)({opacity:this.state.imgLoaded?0:1},C&&H),o),u),M={title:t,alt:this.state.isVisible?"":a,style:N,className:p,itemProp:w};if(g){var W=g,j=h(g);return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:j.maxWidth?j.maxWidth+"px":null,maxHeight:j.maxHeight?j.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},c.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),V&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&H)}),j.base64&&c.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:M,imageVariants:W,generateSources:z}),j.tracedSVG&&c.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:M,imageVariants:W,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,x(W),c.default.createElement(O,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,s.default)((0,s.default)({alt:a,title:t,loading:S},j),{},{imageVariants:W}))}}))}if(m){var q=m,P=h(m),T=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete T.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},V&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:V,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},C&&H)}),P.base64&&c.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:M,imageVariants:q,generateSources:z}),P.tracedSVG&&c.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:M,imageVariants:q,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,x(q),c.default.createElement(O,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,s.default)((0,s.default)({alt:a,title:t,loading:S},P),{},{imageVariants:q}))}}))}return null},t}(c.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),V=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});C.propTypes={resolutions:R,sizes:V,fixed:d.default.oneOfType([R,d.default.arrayOf(R)]),fluid:d.default.oneOfType([V,d.default.arrayOf(V)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var H=C;t.default=H},"9koT":function(e,t,a){var r=a("q1tI");function i(e){return r.createElement("svg",e,r.createElement("path",{fill:"currentColor",d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}))}i.defaultProps={"aria-hidden":"true",width:"50px",focusable:"false","data-prefix":"fas","data-icon":"envelope",className:"svg-inline--fa fa-envelope fa-w-16",role:"img",viewBox:"0 0 512 512"},e.exports=i,i.default=i},DmWS:function(e,t,a){var r=a("q1tI");function i(e){return r.createElement("svg",e,r.createElement("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}))}i.defaultProps={"aria-hidden":"true",width:"50px",focusable:"false","data-prefix":"fab","data-icon":"github",className:"svg-inline--fa fa-github fa-w-16",role:"img",viewBox:"0 0 496 512"},e.exports=i,i.default=i},K3xD:function(e){e.exports=JSON.parse('{"data":{"fileName":{"childImageSharp":{"fixed":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'200\'%20height=\'200\'%20viewBox=\'0%200%20200%20200\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M88%2025c0%201-1%202-3%202l-7%205c-6%205-8%2010-8%2026%200%209-1%2013-2%2013-2%201%200%206%204%2015%206%2011%206%2015%202%2022-2%205-3%206-9%209s-14%209-14%2011l3%201c2%200%2011%205%2012%207l1%201h10c0-2%206%204%207%206l2%205c3%203%203%200%200-6-3-4-3-5-1-6h1l2%203v-4l3%202%205%204%202%201-1-2-3-5-1-3-1-2%204%202c4%203%204%203%205%201%202-1%202-3%202-5-1-3%200-4%204-8%204-6%205-7%202-7l-2-2-3-1c-4%201-3-2%200-3%204-2%206-6%203-7l4-2c6-3%206-3%207%201%201%202%201%202%202%201l2-4c2-2%202-7-1-10-2-2-2-3%202-5l-5-1c-8%200-9%200-10-4v-3l2%202c2%202%209%203%207%201-1-2%201-3%205-3%203%200%202-2-1-3-2-1-2-1%201-1l4%201-1%205%201%204%201-1%202-4c1-4%201-6-2-6l-3-1c-2-4-11-5-15-2-3%202-5%201-13-5-3-2-3-2-2-4l3-2c3%200%203-2%200-2-3-2-4-5-2-8%202-2%2013-5%2019-5%204%200%2012%209%2015%2018%201%203%201%203%202%202v-9l-3-6c-2-5-7-11-13-15-5-4-5-4-16-4H88m15%2052l1%206c3%204%203%209%201%209-1%201%202%201%205%201l7-1-4-6c-3-4-6-8-6-10-3-4-4-4-4%201m15%2044l-4%206-2%205-7%2014-1%206-2%209c-2%206-2%208-4%2027l1%2012c1%200%202-3%202-15l1-15%206-19a328%20328%200%200111-31c-1-2-1-2-1%201M0%20134l2%206h1c0-3%201-3%204-2%203%202%203%202%203%200l1-1%201%201h1l8-1c5%200%209-1%2015-6l-18-1H0v4m24%2014c-2%201-3%202-2%203l-1%203-4%2012-2%209H7l-4-2-3-1v15h5c8%200%208%200%208%203%200%202-1%203-4%203-10%200-9%200-9%204v3h28l-1-7-2-8c-2-4%200-29%202-34%201-2%200-4-3-3m15%205l-1%205v4c3%205%206%2018%206%2022%200%202%200%202-2-3l-4-7c-3-2-5-3-3-1v4h-1l1%202c2%201%204%208%205%2014%200%203%200%203-1%202-2-3-2-1-1%202%202%204%2014%204%2014%201a121%20121%200%2000-11-41l-2-4\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","width":200,"height":200,"src":"/static/2b4ff9376a549c1a085228f10b57f567/90971/erwanleboucher.jpg","srcSet":"/static/2b4ff9376a549c1a085228f10b57f567/90971/erwanleboucher.jpg 1x,\\n/static/2b4ff9376a549c1a085228f10b57f567/832bd/erwanleboucher.jpg 1.5x,\\n/static/2b4ff9376a549c1a085228f10b57f567/2f129/erwanleboucher.jpg 2x","srcWebp":"/static/2b4ff9376a549c1a085228f10b57f567/c3df9/erwanleboucher.webp","srcSetWebp":"/static/2b4ff9376a549c1a085228f10b57f567/c3df9/erwanleboucher.webp 1x,\\n/static/2b4ff9376a549c1a085228f10b57f567/f8983/erwanleboucher.webp 1.5x,\\n/static/2b4ff9376a549c1a085228f10b57f567/eb4f4/erwanleboucher.webp 2x"}}}}}')},QeBL:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("vOnD"),l=a("9Dj+"),o=a("cvUp"),s=a("H8eV"),c=a("p54K"),d=a.n(c),f=a("kZUI"),u=a.n(f),p=a("DmWS"),h=a.n(p),g=a("9koT"),m=a.n(g),v=n.a.div.withConfig({displayName:"socials__Social",componentId:"sc-962bcv-0"})(["display:flex;align-items:center;margin:10px;"]),b=n.a.a.withConfig({displayName:"socials__StyledLink",componentId:"sc-962bcv-1"})(["&:not(:first-child){margin-left:20px;}:hover{filter:grayscale(1);}> svg{color:var(--dark);height:","px;transition:opacity 0.2s linear;cursor:pointer;&:hover{opacity:0.7;}}"],(function(e){return e.size})),y=function(e){var t=e.size;return i.a.createElement(v,null,i.a.createElement(b,{href:"https://github.com/genesixx",target:"_blank",rel:"noopener noreferrer","aria-label":"Github",size:t},i.a.createElement(h.a,{alt:"GitHub",loading:"lazy"})),i.a.createElement(b,{href:"https://www.linkedin.com/in/erwan-leboucher/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",size:t},i.a.createElement(d.a,{alt:"LinkedIn",loading:"lazy"})),i.a.createElement(b,{href:"mailto:erwanleboucher@gmail.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Mail",size:t},i.a.createElement(m.a,{alt:"Mail",loading:"lazy"})),i.a.createElement(b,{href:"https://twitter.com/elebouch",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter",size:t},i.a.createElement(u.a,{alt:"Twitter",loading:"lazy"})))},w=(a("3nLz"),a("K3xD")),x=a("9eSz"),S=a.n(x),E=Object(n.a)(S.a).withConfig({displayName:"profilePicture__Me",componentId:"sc-1vy5rhe-0"})(["border-radius:100%;object-fit:contain;"]),z=i.a.memo((function(){var e=w.data;return i.a.createElement(E,{fixed:e.fileName.childImageSharp.fixed})})),I=a("bzHE"),L=a("W35l"),k=a.n(L),_=function(){var e=I.data;return i.a.createElement(b,{href:e.file.publicURL,target:"_blank",rel:"noopener noreferrer","aria-label":"resume",size:50},i.a.createElement(k.a,{alt:"resume",loading:"lazy"}))},O=n.a.div.withConfig({displayName:"pages__Image",componentId:"sc-1tbujy-0"})(["display:flex;justify-content:center;margin-bottom:20px;"]);t.default=function(){return i.a.createElement(l.a,null,i.a.createElement(s.a,{title:"Home"}),i.a.createElement(o.a,{title:"About"},i.a.createElement(O,null,i.a.createElement(z,null)),i.a.createElement("p",null,"I'm a French software developer, currently living in Berlin, Germany. I'm a passionate developer and love writing code in Javascript, Go or Python."),i.a.createElement("p",null,"Enthusiast about anything related to new technologies, science or engineering, I am interested in cars, especially Formula 1 and Sci-fi."),i.a.createElement("p",null,"You can find me there:"),i.a.createElement(y,{size:50}),i.a.createElement("p",null,"You can also find my resume bellow:"),i.a.createElement(_,null)))}},SGlo:function(e,t,a){"use strict";var r=a("rj/q"),i=a("N+BI").getWeak,n=a("1a8y"),l=a("BjK0"),o=a("xa9o"),s=a("yde8"),c=a("Wadk"),d=a("qDzq"),f=a("O1i0"),u=c(5),p=c(6),h=0,g=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},v=function(e,t){return u(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=v(this,e);if(t)return t[1]},has:function(e){return!!v(this,e)},set:function(e,t){var a=v(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var c=e((function(e,r){o(e,c,t,"_i"),e._t=t,e._i=h++,e._l=void 0,null!=r&&s(r,a,e[n],e)}));return r(c.prototype,{delete:function(e){if(!l(e))return!1;var a=i(e);return!0===a?g(f(this,t)).delete(e):a&&d(a,this._i)&&delete a[this._i]},has:function(e){if(!l(e))return!1;var a=i(e);return!0===a?g(f(this,t)).has(e):a&&d(a,this._i)}}),c},def:function(e,t,a){var r=i(n(t),!0);return!0===r?g(e).set(t,a):r[e._i]=a,e},ufstore:g}},W35l:function(e,t,a){var r=a("q1tI");function i(e){return r.createElement("svg",e,r.createElement("path",{fill:"currentColor",d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"}))}i.defaultProps={"aria-hidden":"true",width:"50px",focusable:"false","data-prefix":"fas","data-icon":"file-alt",className:"svg-inline--fa fa-file-alt fa-w-12",role:"img",viewBox:"0 0 384 512"},e.exports=i,i.default=i},bzHE:function(e){e.exports=JSON.parse('{"data":{"file":{"publicURL":"/static/119589312ff2cdc6e808ae5f166ee881/resume.pdf"}}}')},cvUp:function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi");var r=a("q1tI"),i=a.n(r),n=a("vOnD"),l=n.a.div.withConfig({displayName:"divider__Divider",componentId:"sc-1qvadmg-0"})(["width:100%;height:3px;background-color:var(--dark);margin:10px 0;"]);var o=n.a.div.withConfig({displayName:"section__SectionWrapper",componentId:"sc-1r91a-0"})(["display:flex;flex-direction:column;color:var(--dark);"]),s=n.a.span.withConfig({displayName:"section__Title",componentId:"sc-1r91a-1"})(['font-family:"Archivo Black",sans-serif;font-weight:400;font-size:16px;margin-bottom:10px;']);t.a=i.a.memo((function(e){var t=e.children,a=e.title,r=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["children","title"]);return i.a.createElement(o,r,i.a.createElement(l,null),i.a.createElement(s,null,a),t)}))},eMsz:function(e,t,a){"use strict";var r,i=a("emib"),n=a("Wadk")(0),l=a("IYdN"),o=a("N+BI"),s=a("k5Iv"),c=a("SGlo"),d=a("BjK0"),f=a("O1i0"),u=a("O1i0"),p=!i.ActiveXObject&&"ActiveXObject"in i,h=o.getWeak,g=Object.isExtensible,m=c.ufstore,v=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(d(e)){var t=h(e);return!0===t?m(f(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return c.def(f(this,"WeakMap"),e,t)}},y=e.exports=a("94Pd")("WeakMap",v,b,c,!0,!0);u&&p&&(s((r=c.getConstructor(v,"WeakMap")).prototype,b),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=y.prototype,a=t[e];l(t,e,(function(t,i){if(d(t)&&!g(t)){this._f||(this._f=new r);var n=this._f[e](t,i);return"set"==e?this:n}return a.call(this,t,i)}))})))},kZUI:function(e,t,a){var r=a("q1tI");function i(e){return r.createElement("svg",e,r.createElement("path",{fill:"currentColor",d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}))}i.defaultProps={"aria-hidden":"true",width:"50px",focusable:"false","data-prefix":"fab","data-icon":"twitter",className:"svg-inline--fa fa-twitter fa-w-16",role:"img",viewBox:"0 0 512 512"},e.exports=i,i.default=i},p54K:function(e,t,a){var r=a("q1tI");function i(e){return r.createElement("svg",e,r.createElement("path",{fill:"currentColor",d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}))}i.defaultProps={"aria-hidden":"true",width:"50px",focusable:"false","data-prefix":"fab","data-icon":"linkedin-in",className:"svg-inline--fa fa-linkedin-in fa-w-14",role:"img",viewBox:"0 0 448 512"},e.exports=i,i.default=i},"t+fG":function(e,t,a){var r=a("P8UN"),i=a("96qb"),n=a("ap2Z"),l=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(l,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},zTTH:function(e,t,a){"use strict";var r=a("P8UN"),i=a("Wadk")(6),n="findIndex",l=!0;n in[]&&Array(1)[n]((function(){l=!1})),r(r.P+r.F*l,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(n)}}]);
//# sourceMappingURL=component---src-pages-index-tsx-5dbde10b85e88610bd97.js.map