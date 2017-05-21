!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["prop-types","react"],t):"object"==typeof exports?exports["react-basic-ui"]=t(require("prop-types"),require("react")):e["react-basic-ui"]=t(e.PropTypes,e.React)}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),s=n(0),f=r(s),p={display:"flex",flexDirection:"row",alignItems:"center"},y={width:600},d=function(e){function t(e,n){o(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.state={parentStyle:{},containerStyle:{}},r}return u(t,e),a(t,[{key:"componentWillMount",value:function(){"center"===this.props.align&&(this.state.parentStyle=Object.assign({},p,{justifyContent:"center"})),"right"===this.props.align&&(this.state.parentStyle=Object.assign({},p,{flexDirection:"row-reverse"})),"left"===this.props.align&&(this.state.parentStyle=Object.assign({},p,{flexDirection:"row"})),this.state.containerStyle=Object.assign({},y,{width:this.props.containerWidth||600},this.props.containerStyle)}},{key:"getClassName",value:function(){var e="";return this.props.stretchHorizontal&&(e+=" flex-stretch-horizontal"),this.props.stretchVertical&&(e+=" flex-stretch-vertical"),e}},{key:"render",value:function(){return c.default.createElement("div",{className:this.getClassName(),style:this.state.parentStyle},c.default.createElement("div",{className:"flex-align-container"+this.getClassName(),style:this.state.containerStyle},this.props.children))}}]),t}(l.Component);d.propTypes={containerWidth:f.default.number,align:f.default.string.isRequired,stretchHorizontal:f.default.bool,stretchVertical:f.default.bool,containerStyle:f.default.object},t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),s=n(0),f=r(s),p={flexWrap:"wrap",justifyContent:"space-around",display:"flex",textDecoration:"none",listStyleType:"none",padding:0},y={display:"inline-block",height:83,width:"100%",lineHeight:"80px",margin:"auto",textTransform:"uppercase",textAlign:"center",fontWeight:600,textDecoration:"none"},d=function(e){function t(e,n){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))}return u(t,e),a(t,[{key:"render",value:function(){return c.default.createElement("ul",{className:"flex-list",style:p},this.props.elements.map(function(e){return c.default.createElement("li",{className:"flex-list-element",key:Math.random(),style:y},e)}))}}]),t}(l.Component);d.propTypes={elements:f.default.array.isRequired},t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),s=n(0),f=(r(s),{display:"grid",gridTemplateColumns:"repeat(11, 1fr)",gridTemplateRows:"auto",width:"100%",height:"100%"}),p=function(e){function t(e,n){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))}return u(t,e),a(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return c.default.createElement("div",{style:f},this.props.children)}}]),t}(l.Component);p.propTypes={},t.default=p},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=r(c),f=n(0),p=r(f),y=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={rowStyle:{}},n}return u(t,e),l(t,[{key:"componentWillMount",value:function(){this.state.rowStyle={gridColumn:void 0===a(this.props.to)?""+this.props.from:this.props.from+" / "+this.props.to}}},{key:"render",value:function(){return s.default.createElement("div",{style:this.state.rowStyle},this.props.children)}}]),t}(c.Component);y.propTypes={from:p.default.number.isRequired,to:p.default.number},t.default=y},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(2),i=r(o),u=n(3),a=r(u),l=n(4),c=r(l),s=n(5),f=r(s);e.exports={FlexAlignUI:i.default,FlexListUI:a.default,GridUI:c.default,RowUI:f.default}}])});