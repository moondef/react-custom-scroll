!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom"),function(){try{return require("prop-types")}catch(e){}}()):"function"==typeof define&&define.amd?define(["react","react-dom","prop-types"],t):"object"==typeof exports?exports.ReactCustomScroll=t(require("react"),require("react-dom"),function(){try{return require("prop-types")}catch(e){}}()):e.ReactCustomScroll=t(e.react,e["react-dom"],e["prop-types"])}(this,function(e,t,o){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(1)},function(e,t,o){"use strict";function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t,o){return t=t||0===t?t:e,o=o||0===o?o:e,t>o?(console.error("min limit is greater than max limit"),e):e<t?t:e>o?o:e}function a(e,t){var o=t.getBoundingClientRect();return e.clientX>o.left&&e.clientX<o.left+o.width&&e.clientY>o.top&&e.clientY<o.top+o.height}function c(e){var t=this.props.minScrollHandleHeight;if(e.height>=t)return e;var o=t-e.height,r=this.state.scrollPos/(this.contentHeight-this.visibleHeight),n=o*r,l=e.top-n;return{height:t,top:l}}var h=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),u=o(2),p=o(3),d=function(e){function t(e){n(this,t);var o=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.scrollbarYWidth=0,o.state={scrollPos:0,onDrag:!1},o.onHandleDrag=o.onHandleDrag.bind(o),o.onHandleDragEnd=o.onHandleDragEnd.bind(o),o.blockOuterScroll=o.blockOuterScroll.bind(o),o.onScroll=o.onScroll.bind(o),o.onMouseDown=o.onMouseDown.bind(o),o.onClick=o.onClick.bind(o),o}return i(t,e),h(t,[{key:"componentDidMount",value:function(){var e=this.getScrolledElement();this.scrollbarYWidth=e.offsetWidth-e.clientWidth,"undefined"!=typeof this.props.scrollTo?this.updateScrollPosition(this.props.scrollTo):this.forceUpdate()}},{key:"componentDidUpdate",value:function(e,t){var o=this.contentHeight,r=this.visibleHeight,n=this.getScrolledElement(),l=t.scrollPos>=o-r;this.contentHeight=n.scrollHeight,this.visibleHeight=n.clientHeight,this.scrollRatio=this.contentHeight?this.visibleHeight/this.contentHeight:1;var i=this.state.scrollPos>=this.contentHeight-this.visibleHeight,s=o!==this.contentHeight;this.toggleScrollIfNeeded(),(this.props.freezePosition||e.freezePosition)&&this.adjustFreezePosition(e),"undefined"!=typeof this.props.scrollTo&&this.props.scrollTo!==e.scrollTo?this.updateScrollPosition(this.props.scrollTo):this.props.keepAtBottom&&s&&l&&!i&&this.updateScrollPosition(this.contentHeight-this.visibleHeight)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousemove",this.onHandleDrag),document.removeEventListener("mouseup",this.onHandleDragEnd)}},{key:"adjustFreezePosition",value:function(e){var t=this.getScrolledElement(),o=this.refs.contentWrapper;this.props.freezePosition&&(o.scrollTop=this.state.scrollPos),e.freezePosition&&(t.scrollTop=this.state.scrollPos)}},{key:"toggleScrollIfNeeded",value:function(){var e=this.contentHeight-this.visibleHeight>1;this.hasScroll!==e&&(this.hasScroll=e,this.forceUpdate())}},{key:"getScrollTop",value:function(){return this.getScrolledElement().scrollTop}},{key:"updateScrollPosition",value:function(e){var t=this.getScrolledElement();t.scrollTop=e,this.setState({scrollPos:e})}},{key:"onClick",value:function(e){if(this.hasScroll&&this.isMouseEventOnCustomScrollbar(e)&&!this.isMouseEventOnScrollHandle(e)){var t=this.calculateNewScrollHandleTop(e),o=this.getScrollValueFromHandlePosition(t);this.updateScrollPosition(o)}}},{key:"isMouseEventOnCustomScrollbar",value:function(e){var t=p.findDOMNode(this.refs.customScrollbar);return a(e,t)}},{key:"isMouseEventOnScrollHandle",value:function(e){var t=p.findDOMNode(this.refs.scrollHandle);return a(e,t)}},{key:"calculateNewScrollHandleTop",value:function(e){var t=p.findDOMNode(this),o=t.getBoundingClientRect(),r=o.top+window.pageYOffset,n=e.pageY-r,l=this.getScrollHandleStyle().top,i=void 0,s=n>l+this.scrollHandleHeight;return i=s?l+Math.min(this.scrollHandleHeight,this.visibleHeight-this.scrollHandleHeight):l-Math.max(this.scrollHandleHeight,0)}},{key:"getScrollValueFromHandlePosition",value:function(e){return e/this.scrollRatio}},{key:"getScrollHandleStyle",value:function(){var e=this.state.scrollPos*this.scrollRatio;return this.scrollHandleHeight=this.visibleHeight*this.scrollRatio,{height:this.scrollHandleHeight,top:e}}},{key:"adjustCustomScrollPosToContentPos",value:function(e){this.setState({scrollPos:e})}},{key:"onScroll",value:function(e){this.props.freezePosition||(this.adjustCustomScrollPosToContentPos(e.currentTarget.scrollTop),this.props.onScroll&&this.props.onScroll(e))}},{key:"getScrolledElement",value:function(){return this.refs.innerContainer}},{key:"onMouseDown",value:function(e){this.hasScroll&&this.isMouseEventOnScrollHandle(e)&&(this.startDragHandlePos=this.getScrollHandleStyle().top,this.startDragMousePos=e.pageY,this.setState({onDrag:!0}),document.addEventListener("mousemove",this.onHandleDrag),document.addEventListener("mouseup",this.onHandleDragEnd))}},{key:"onHandleDrag",value:function(e){e.preventDefault();var t=e.pageY-this.startDragMousePos,o=s(this.startDragHandlePos+t,0,this.visibleHeight-this.scrollHandleHeight),r=this.getScrollValueFromHandlePosition(o);this.updateScrollPosition(r)}},{key:"onHandleDragEnd",value:function(e){this.setState({onDrag:!1}),e.preventDefault(),document.removeEventListener("mousemove",this.onHandleDrag),document.removeEventListener("mouseup",this.onHandleDragEnd)}},{key:"blockOuterScroll",value:function(e){if(!this.props.allowOuterScroll){var t=e.currentTarget,o=e.currentTarget.scrollHeight,r=o-e.currentTarget.offsetHeight,n=e.deltaY%3?e.deltaY:10*e.deltaY;t.scrollTop+n<=0?(t.scrollTop=0,e.preventDefault()):t.scrollTop+n>=r&&(t.scrollTop=r,e.preventDefault()),e.stopPropagation()}}},{key:"getInnerContainerClasses",value:function(){var e="inner-container";return this.state.scrollPos&&this.props.addScrolledClass&&(e+=" content-scrolled"),e}},{key:"getScrollStyles",value:function(){var e,t,o=this.scrollbarYWidth||20,n=this.props.rtl?"marginLeft":"marginRight",l=(e={},r(e,n,-1*o),r(e,"height",this.props.heightRelativeToParent||this.props.flex?"100%":""),e),i=(t={},r(t,n,this.scrollbarYWidth?0:o),r(t,"height",this.props.heightRelativeToParent||this.props.flex?"100%":""),r(t,"overflowY",this.props.freezePosition?"hidden":"visible"),t);return{innerContainer:l,contentWrapper:i}}},{key:"getOuterContainerStyle",value:function(){return{height:this.props.heightRelativeToParent||this.props.flex?"100%":""}}},{key:"getRootStyles",value:function(){var e={};return this.props.heightRelativeToParent?e.height=this.props.heightRelativeToParent:this.props.flex&&(e.flex=this.props.flex),e}},{key:"render",value:function(){var e=this.getScrollStyles(),t=this.getRootStyles(),o=c.call(this,this.getScrollHandleStyle());return u.createElement("div",{className:"custom-scroll "+(this.state.onDrag?"scroll-handle-dragged":""),style:t},u.createElement("div",{className:"outer-container",style:this.getOuterContainerStyle(),onMouseDown:this.onMouseDown,onClick:this.onClick},this.hasScroll?u.createElement("div",{ref:"customScrollbar",className:"custom-scrollbar"+(this.props.rtl?" custom-scrollbar-rtl":""),key:"scrollbar"},u.createElement("div",{ref:"scrollHandle",className:"custom-scroll-handle",style:o},u.createElement("div",{className:this.props.handleClass}))):null,u.createElement("div",{ref:"innerContainer",className:this.getInnerContainerClasses(),style:e.innerContainer,onScroll:this.onScroll,onWheel:this.blockOuterScroll},u.createElement("div",{className:"content-wrapper",ref:"contentWrapper",style:e.contentWrapper},this.props.children))))}}]),t}(u.Component);try{var f=o(4);d.propTypes={children:f.any,allowOuterScroll:f.bool,heightRelativeToParent:f.string,onScroll:f.func,addScrolledClass:f.bool,freezePosition:f.bool,handleClass:f.string,minScrollHandleHeight:f.number,flex:f.string,rtl:f.bool,scrollTo:f.number,keepAtBottom:f.bool}}catch(g){}d.defaultProps={handleClass:"inner-handle",minScrollHandleHeight:38},e.exports=d},function(t,o){t.exports=e},function(e,o){e.exports=t},function(e,t){if("undefined"==typeof o){var r=new Error('Cannot find module "prop-types"');throw r.code="MODULE_NOT_FOUND",r}e.exports=o}])});