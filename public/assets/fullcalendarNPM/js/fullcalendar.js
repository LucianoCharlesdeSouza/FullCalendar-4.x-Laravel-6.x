/*!
FullCalendar Core Package v4.4.2
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).FullCalendar={})}(this,(function(e){"use strict";var t={className:!0,colSpan:!0,rowSpan:!0},n={"<tr":"tbody","<td":"tr"};function r(e,n,r){var i=document.createElement(e);if(n)for(var o in n)"style"===o?y(i,n[o]):t[o]?i[o]=n[o]:i.setAttribute(o,n[o]);return"string"==typeof r?i.innerHTML=r:null!=r&&s(i,r),i}function i(e){e=e.trim();var t=document.createElement(a(e));return t.innerHTML=e,t.firstChild}function o(e){return Array.prototype.slice.call(function(e){e=e.trim();var t=document.createElement(a(e));return t.innerHTML=e,t.childNodes}(e))}function a(e){return n[e.substr(0,3)]||"div"}function s(e,t){for(var n=l(t),r=0;r<n.length;r++)e.appendChild(n[r])}function u(e,t){for(var n=l(t),r=e.firstChild||null,i=0;i<n.length;i++)e.insertBefore(n[i],r)}function l(e){return"string"==typeof e?o(e):e instanceof Node?[e]:Array.prototype.slice.call(e)}function c(e){e.parentNode&&e.parentNode.removeChild(e)}var d=Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.msMatchesSelector,f=Element.prototype.closest||function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(h(t,e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null};function p(e,t){return f.call(e,t)}function h(e,t){return d.call(e,t)}function v(e,t){for(var n=e instanceof HTMLElement?[e]:e,r=[],i=0;i<n.length;i++)for(var o=n[i].querySelectorAll(t),a=0;a<o.length;a++)r.push(o[a]);return r}var g=/(top|left|right|bottom|width|height)$/i;function y(e,t){for(var n in t)m(e,n,t[n])}function m(e,t,n){null==n?e.style[t]="":"number"==typeof n&&g.test(t)?e.style[t]=n+"px":e.style[t]=n}function E(e,t){var n={left:Math.max(e.left,t.left),right:Math.min(e.right,t.right),top:Math.max(e.top,t.top),bottom:Math.min(e.bottom,t.bottom)};return n.left<n.right&&n.top<n.bottom&&n}var S=null;function b(){return null===S&&(S=function(){var e=r("div",{style:{position:"absolute",top:-1e3,left:0,border:0,padding:0,overflow:"scroll",direction:"rtl"}},"<div></div>");document.body.appendChild(e);var t=e.firstChild.getBoundingClientRect().left>e.getBoundingClientRect().left;return c(e),t}()),S}function D(e){return e=Math.max(0,e),e=Math.round(e)}function T(e,t){void 0===t&&(t=!1);var n=window.getComputedStyle(e),r=parseInt(n.borderLeftWidth,10)||0,i=parseInt(n.borderRightWidth,10)||0,o=parseInt(n.borderTopWidth,10)||0,a=parseInt(n.borderBottomWidth,10)||0,s=D(e.offsetWidth-e.clientWidth-r-i),u={borderLeft:r,borderRight:i,borderTop:o,borderBottom:a,scrollbarBottom:D(e.offsetHeight-e.clientHeight-o-a),scrollbarLeft:0,scrollbarRight:0};return b()&&"rtl"===n.direction?u.scrollbarLeft=s:u.scrollbarRight=s,t&&(u.paddingLeft=parseInt(n.paddingLeft,10)||0,u.paddingRight=parseInt(n.paddingRight,10)||0,u.paddingTop=parseInt(n.paddingTop,10)||0,u.paddingBottom=parseInt(n.paddingBottom,10)||0),u}function w(e,t){void 0===t&&(t=!1);var n=R(e),r=T(e,t),i={left:n.left+r.borderLeft+r.scrollbarLeft,right:n.right-r.borderRight-r.scrollbarRight,top:n.top+r.borderTop,bottom:n.bottom-r.borderBottom-r.scrollbarBottom};return t&&(i.left+=r.paddingLeft,i.right-=r.paddingRight,i.top+=r.paddingTop,i.bottom-=r.paddingBottom),i}function R(e){var t=e.getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,right:t.right+window.pageXOffset,bottom:t.bottom+window.pageYOffset}}function C(e){return e.getBoundingClientRect().height+I(e)}function I(e){var t=window.getComputedStyle(e);return parseInt(t.marginTop,10)+parseInt(t.marginBottom,10)}function M(e){for(var t=[];e instanceof HTMLElement;){var n=window.getComputedStyle(e);if("fixed"===n.position)break;/(auto|scroll)/.test(n.overflow+n.overflowY+n.overflowX)&&t.push(e),e=e.parentNode}return t}function k(e){e.preventDefault()}function _(e,t,n,r){function i(e){var t=p(e.target,n);t&&r.call(t,e,t)}return e.addEventListener(t,i),function(){e.removeEventListener(t,i)}}var O=["webkitTransitionEnd","otransitionend","oTransitionEnd","msTransitionEnd","transitionend"];var P=["sun","mon","tue","wed","thu","fri","sat"];function x(e,t){var n=Z(e);return n[2]+=t,j(n)}function N(e,t){var n=Z(e);return n[6]+=t,j(n)}function H(e,t){return(t.valueOf()-e.valueOf())/864e5}function U(e,t){var n=B(e),r=B(t);return{years:0,months:0,days:Math.round(H(n,r)),milliseconds:t.valueOf()-r.valueOf()-(e.valueOf()-n.valueOf())}}function z(e,t){var n=L(e,t);return null!==n&&n%7==0?n/7:null}function L(e,t){return q(e)===q(t)?Math.round(H(e,t)):null}function B(e){return j([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()])}function V(e,t,n,r){var i=j([t,0,1+A(t,n,r)]),o=B(e),a=Math.round(H(i,o));return Math.floor(a/7)+1}function A(e,t,n){var r=7+t-n;return-((7+j([e,0,r]).getUTCDay()-t)%7)+r-1}function F(e){return[e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()]}function W(e){return new Date(e[0],e[1]||0,null==e[2]?1:e[2],e[3]||0,e[4]||0,e[5]||0)}function Z(e){return[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()]}function j(e){return 1===e.length&&(e=e.concat([0])),new Date(Date.UTC.apply(Date,e))}function Y(e){return!isNaN(e.valueOf())}function q(e){return 1e3*e.getUTCHours()*60*60+1e3*e.getUTCMinutes()*60+1e3*e.getUTCSeconds()+e.getUTCMilliseconds()}var G=["years","months","days","milliseconds"],X=/^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;function J(e,t){var n;return"string"==typeof e?function(e){var t=X.exec(e);if(t){var n=t[1]?-1:1;return{years:0,months:0,days:n*(t[2]?parseInt(t[2],10):0),milliseconds:n*(60*(t[3]?parseInt(t[3],10):0)*60*1e3+60*(t[4]?parseInt(t[4],10):0)*1e3+1e3*(t[5]?parseInt(t[5],10):0)+(t[6]?parseInt(t[6],10):0))}}return null}(e):"object"==typeof e&&e?K(e):"number"==typeof e?K(((n={})[t||"milliseconds"]=e,n)):null}function K(e){return{years:e.years||e.year||0,months:e.months||e.month||0,days:(e.days||e.day||0)+7*Q(e),milliseconds:60*(e.hours||e.hour||0)*60*1e3+60*(e.minutes||e.minute||0)*1e3+1e3*(e.seconds||e.second||0)+(e.milliseconds||e.millisecond||e.ms||0)}}function Q(e){return e.weeks||e.week||0}function $(e,t){return e.years===t.years&&e.months===t.months&&e.days===t.days&&e.milliseconds===t.milliseconds}function ee(e){return te(e)/864e5}function te(e){return 31536e6*e.years+2592e6*e.months+864e5*e.days+e.milliseconds}function ne(e,t){var n=e.milliseconds;if(n){if(n%1e3!=0)return{unit:"millisecond",value:n};if(n%6e4!=0)return{unit:"second",value:n/1e3};if(n%36e5!=0)return{unit:"minute",value:n/6e4};if(n)return{unit:"hour",value:n/36e5}}return e.days?t||e.days%7!=0?{unit:"day",value:e.days}:{unit:"week",value:e.days/7}:e.months?{unit:"month",value:e.months}:e.years?{unit:"year",value:e.years}:{unit:"millisecond",value:0}}function re(e){e.forEach((function(e){e.style.height=""}))}function ie(e){var t,n,r=[],i=[];for("string"==typeof e?i=e.split(/\s*,\s*/):"function"==typeof e?i=[e]:Array.isArray(e)&&(i=e),t=0;t<i.length;t++)"string"==typeof(n=i[t])?r.push("-"===n.charAt(0)?{field:n.substring(1),order:-1}:{field:n,order:1}):"function"==typeof n&&r.push({func:n});return r}function oe(e,t,n){var r,i;for(r=0;r<n.length;r++)if(i=ae(e,t,n[r]))return i;return 0}function ae(e,t,n){return n.func?n.func(e,t):se(e[n.field],t[n.field])*(n.order||1)}function se(e,t){return e||t?null==t?-1:null==e?1:"string"==typeof e||"string"==typeof t?String(e).localeCompare(String(t)):e-t:0}function ue(e){return e.charAt(0).toUpperCase()+e.slice(1)}function le(e,t){var n=String(e);return"000".substr(0,t-n.length)+n}function ce(e){return e%1==0}function de(e,t,n){if("function"==typeof e&&(e=[e]),e){var r=void 0,i=void 0;for(r=0;r<e.length;r++)i=e[r].apply(t,n)||i;return i}}function fe(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0;n<e.length;n++)if(void 0!==e[n])return e[n]}function pe(e,t){var n,r,i,o,a,s=function(){var u=(new Date).valueOf()-o;u<t?n=setTimeout(s,t-u):(n=null,a=e.apply(i,r),i=r=null)};return function(){return i=this,r=arguments,o=(new Date).valueOf(),n||(n=setTimeout(s,t)),a}}function he(e,t,n,r){void 0===n&&(n={});var i={};for(var o in t){var a=t[o];void 0!==e[o]?i[o]=a===Function?"function"==typeof e[o]?e[o]:null:a?a(e[o]):e[o]:void 0!==n[o]?i[o]=n[o]:a===String?i[o]="":a&&a!==Number&&a!==Boolean&&a!==Function?i[o]=a(null):i[o]=null}if(r)for(var o in e)void 0===t[o]&&(r[o]=e[o]);return i}function ve(e){var t=Math.floor(H(e.start,e.end))||1,n=B(e.start);return{start:n,end:x(n,t)}}function ge(e,t){void 0===t&&(t=J(0));var n=null,r=null;if(e.end){r=B(e.end);var i=e.end.valueOf()-r.valueOf();i&&i>=te(t)&&(r=x(r,1))}return e.start&&(n=B(e.start),r&&r<=n&&(r=x(n,1))),{start:n,end:r}}function ye(e,t,n,r){return"year"===r?J(n.diffWholeYears(e,t),"year"):"month"===r?J(n.diffWholeMonths(e,t),"month"):U(e,t)}var me=function(e,t){return(me=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function Ee(e,t){function n(){this.constructor=e}me(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var Se=function(){return(Se=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function be(e,t,n,r,i){var o=i[e.recurringDef.typeId].expand(e.recurringDef.typeData,{start:r.subtract(n.start,t),end:n.end},r);return e.allDay&&(o=o.map(B)),o}var De=Object.prototype.hasOwnProperty;function Te(e,t){var n,r,i,o,a,s,u={};if(t)for(n=0;n<t.length;n++){for(r=t[n],i=[],o=e.length-1;o>=0;o--)if("object"==typeof(a=e[o][r])&&a)i.unshift(a);else if(void 0!==a){u[r]=a;break}i.length&&(u[r]=Te(i))}for(n=e.length-1;n>=0;n--)for(r in s=e[n])r in u||(u[r]=s[r]);return u}function we(e,t){var n={};for(var r in e)t(e[r],r)&&(n[r]=e[r]);return n}function Re(e,t){var n={};for(var r in e)n[r]=t(e[r],r);return n}function Ce(e){for(var t={},n=0,r=e;n<r.length;n++){t[r[n]]=!0}return t}function Ie(e){var t=[];for(var n in e)t.push(e[n]);return t}function Me(e,t){for(var n in e)if(De.call(e,n)&&!(n in t))return!1;for(var n in t)if(De.call(t,n)&&e[n]!==t[n])return!1;return!0}function ke(e,t,n,r){for(var i={defs:{},instances:{}},o=0,a=e;o<a.length;o++){var s=Zt(a[o],t,n,r);s&&_e(s,i)}return i}function _e(e,t){return void 0===t&&(t={defs:{},instances:{}}),t.defs[e.def.defId]=e.def,e.instance&&(t.instances[e.instance.instanceId]=e.instance),t}function Oe(e,t,n){var r=n.dateEnv,i=e.defs,o=e.instances;for(var a in o=we(o,(function(e){return!i[e.defId].recurringDef})),i){var s=i[a];if(s.recurringDef){var u=s.recurringDef.duration;u||(u=s.allDay?n.defaultAllDayEventDuration:n.defaultTimedEventDuration);for(var l=0,c=be(s,u,t,n.dateEnv,n.pluginSystem.hooks.recurringTypes);l<c.length;l++){var d=c[l],f=Yt(a,{start:d,end:r.add(d,u)});o[f.instanceId]=f}}}return{defs:i,instances:o}}function Pe(e,t){var n=e.instances[t];if(n){var r=e.defs[n.defId],i=Ue(e,(function(e){return t=r,n=e,Boolean(t.groupId&&t.groupId===n.groupId);var t,n}));return i.defs[r.defId]=r,i.instances[n.instanceId]=n,i}return{defs:{},instances:{}}}function xe(e,t){var n;if(t){n=[];for(var r=0,i=e;r<i.length;r++){var o=i[r],a=t(o);a?n.push(a):null==a&&n.push(o)}}else n=e;return n}function Ne(){return{defs:{},instances:{}}}function He(e,t){return{defs:Se({},e.defs,t.defs),instances:Se({},e.instances,t.instances)}}function Ue(e,t){var n=we(e.defs,t),r=we(e.instances,(function(e){return n[e.defId]}));return{defs:n,instances:r}}function ze(e,t){var n=null,r=null;return e.start&&(n=t.createMarker(e.start)),e.end&&(r=t.createMarker(e.end)),n||r?n&&r&&r<n?null:{start:n,end:r}:null}function Le(e,t){var n,r,i=[],o=t.start;for(e.sort(Be),n=0;n<e.length;n++)(r=e[n]).start>o&&i.push({start:o,end:r.start}),r.end>o&&(o=r.end);return o<t.end&&i.push({start:o,end:t.end}),i}function Be(e,t){return e.start.valueOf()-t.start.valueOf()}function Ve(e,t){var n=e.start,r=e.end,i=null;return null!==t.start&&(n=null===n?t.start:new Date(Math.max(n.valueOf(),t.start.valueOf()))),null!=t.end&&(r=null===r?t.end:new Date(Math.min(r.valueOf(),t.end.valueOf()))),(null===n||null===r||n<r)&&(i={start:n,end:r}),i}function Ae(e,t){return(null===e.start?null:e.start.valueOf())===(null===t.start?null:t.start.valueOf())&&(null===e.end?null:e.end.valueOf())===(null===t.end?null:t.end.valueOf())}function Fe(e,t){return(null===e.end||null===t.start||e.end>t.start)&&(null===e.start||null===t.end||e.start<t.end)}function We(e,t){return(null===e.start||null!==t.start&&t.start>=e.start)&&(null===e.end||null!==t.end&&t.end<=e.end)}function Ze(e,t){return(null===e.start||t>=e.start)&&(null===e.end||t<e.end)}function je(e,t){var n,r=e.length;if(r!==t.length)return!1;for(n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ye(e){var t,n;return function(){return t&&je(t,arguments)||(t=arguments,n=e.apply(this,arguments)),n}}function qe(e,t){var n=null;return function(){var r=e.apply(this,arguments);return(null===n||n!==r&&!t(n,r))&&(n=r),n}}var Ge={week:3,separator:0,omitZeroMinute:0,meridiem:0,omitCommas:0},Xe={timeZoneName:7,era:6,year:5,month:4,day:2,weekday:2,hour:1,minute:1,second:1},Je=/\s*([ap])\.?m\.?/i,Ke=/,/g,Qe=/\s+/g,$e=/\u200e/g,et=/UTC|GMT/,tt=function(){function e(e){var t={},n={},r=0;for(var i in e)i in Ge?(n[i]=e[i],r=Math.max(Ge[i],r)):(t[i]=e[i],i in Xe&&(r=Math.max(Xe[i],r)));this.standardDateProps=t,this.extendedSettings=n,this.severity=r,this.buildFormattingFunc=Ye(nt)}return e.prototype.format=function(e,t){return this.buildFormattingFunc(this.standardDateProps,this.extendedSettings,t)(e)},e.prototype.formatRange=function(e,t,n){var r=this.standardDateProps,i=this.extendedSettings,o=function(e,t,n){if(n.getMarkerYear(e)!==n.getMarkerYear(t))return 5;if(n.getMarkerMonth(e)!==n.getMarkerMonth(t))return 4;if(n.getMarkerDay(e)!==n.getMarkerDay(t))return 2;if(q(e)!==q(t))return 1;return 0}(e.marker,t.marker,n.calendarSystem);if(!o)return this.format(e,n);var a=o;!(a>1)||"numeric"!==r.year&&"2-digit"!==r.year||"numeric"!==r.month&&"2-digit"!==r.month||"numeric"!==r.day&&"2-digit"!==r.day||(a=1);var s=this.format(e,n),u=this.format(t,n);if(s===u)return s;var l=nt(function(e,t){var n={};for(var r in e)(!(r in Xe)||Xe[r]<=t)&&(n[r]=e[r]);return n}(r,a),i,n),c=l(e),d=l(t),f=function(e,t,n,r){var i=0;for(;i<e.length;){var o=e.indexOf(t,i);if(-1===o)break;var a=e.substr(0,o);i=o+t.length;for(var s=e.substr(i),u=0;u<n.length;){var l=n.indexOf(r,u);if(-1===l)break;var c=n.substr(0,l);u=l+r.length;var d=n.substr(u);if(a===c&&s===d)return{before:a,after:s}}}return null}(s,c,u,d),p=i.separator||"";return f?f.before+c+p+d+f.after:s+p+u},e.prototype.getLargestUnit=function(){switch(this.severity){case 7:case 6:case 5:return"year";case 4:return"month";case 3:return"week";default:return"day"}},e}();function nt(e,t,n){var r=Object.keys(e).length;return 1===r&&"short"===e.timeZoneName?function(e){return at(e.timeZoneOffset)}:0===r&&t.week?function(e){return function(e,t,n,r){var i=[];"narrow"===r?i.push(t):"short"===r&&i.push(t," ");i.push(n.simpleNumberFormat.format(e)),n.options.isRtl&&i.reverse();return i.join("")}(n.computeWeekNumber(e.marker),n.weekLabel,n.locale,t.week)}:function(e,t,n){e=Se({},e),t=Se({},t),function(e,t){e.timeZoneName&&(e.hour||(e.hour="2-digit"),e.minute||(e.minute="2-digit"));"long"===e.timeZoneName&&(e.timeZoneName="short");t.omitZeroMinute&&(e.second||e.millisecond)&&delete t.omitZeroMinute}(e,t),e.timeZone="UTC";var r,i=new Intl.DateTimeFormat(n.locale.codes,e);if(t.omitZeroMinute){var o=Se({},e);delete o.minute,r=new Intl.DateTimeFormat(n.locale.codes,o)}return function(o){var a=o.marker;return function(e,t,n,r,i){e=e.replace($e,""),"short"===n.timeZoneName&&(e=function(e,t){var n=!1;e=e.replace(et,(function(){return n=!0,t})),n||(e+=" "+t);return e}(e,"UTC"===i.timeZone||null==t.timeZoneOffset?"UTC":at(t.timeZoneOffset)));r.omitCommas&&(e=e.replace(Ke,"").trim());r.omitZeroMinute&&(e=e.replace(":00",""));!1===r.meridiem?e=e.replace(Je,"").trim():"narrow"===r.meridiem?e=e.replace(Je,(function(e,t){return t.toLocaleLowerCase()})):"short"===r.meridiem?e=e.replace(Je,(function(e,t){return t.toLocaleLowerCase()+"m"})):"lowercase"===r.meridiem&&(e=e.replace(Je,(function(e){return e.toLocaleLowerCase()})));return e=(e=e.replace(Qe," ")).trim()}((r&&!a.getUTCMinutes()?r:i).format(a),o,e,t,n)}}(e,t,n)}var rt=function(){function e(e,t){this.cmdStr=e,this.separator=t}return e.prototype.format=function(e,t){return t.cmdFormatter(this.cmdStr,st(e,null,t,this.separator))},e.prototype.formatRange=function(e,t,n){return n.cmdFormatter(this.cmdStr,st(e,t,n,this.separator))},e}(),it=function(){function e(e){this.func=e}return e.prototype.format=function(e,t){return this.func(st(e,null,t))},e.prototype.formatRange=function(e,t,n){return this.func(st(e,t,n))},e}();function ot(e,t){return"object"==typeof e&&e?("string"==typeof t&&(e=Se({separator:t},e)),new tt(e)):"string"==typeof e?new rt(e,t):"function"==typeof e?new it(e):void 0}function at(e,t){void 0===t&&(t=!1);var n=e<0?"-":"+",r=Math.abs(e),i=Math.floor(r/60),o=Math.round(r%60);return t?n+le(i,2)+":"+le(o,2):"GMT"+n+i+(o?":"+le(o,2):"")}function st(e,t,n,r){var i=ut(e,n.calendarSystem);return{date:i,start:i,end:t?ut(t,n.calendarSystem):null,timeZone:n.timeZone,localeCodes:n.locale.codes,separator:r}}function ut(e,t){var n=t.markerToArray(e.marker);return{marker:e.marker,timeZoneOffset:e.timeZoneOffset,array:n,year:n[0],month:n[1],day:n[2],hour:n[3],minute:n[4],second:n[5],millisecond:n[6]}}var lt=function(){function e(e,t){this.calendar=e,this.internalEventSource=t}return e.prototype.remove=function(){this.calendar.dispatch({type:"REMOVE_EVENT_SOURCE",sourceId:this.internalEventSource.sourceId})},e.prototype.refetch=function(){this.calendar.dispatch({type:"FETCH_EVENT_SOURCES",sourceIds:[this.internalEventSource.sourceId]})},Object.defineProperty(e.prototype,"id",{get:function(){return this.internalEventSource.publicId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this.internalEventSource.meta.url},enumerable:!0,configurable:!0}),e}(),ct=function(){function e(e,t,n){this._calendar=e,this._def=t,this._instance=n||null}return e.prototype.setProp=function(e,t){var n,r;if(e in Ft);else if(e in At)"function"==typeof At[e]&&(t=At[e](t)),this.mutate({standardProps:(n={},n[e]=t,n)});else if(e in Ht){var i=void 0;"function"==typeof Ht[e]&&(t=Ht[e](t)),"color"===e?i={backgroundColor:t,borderColor:t}:"editable"===e?i={startEditable:t,durationEditable:t}:((r={})[e]=t,i=r),this.mutate({standardProps:{ui:i}})}},e.prototype.setExtendedProp=function(e,t){var n;this.mutate({extendedProps:(n={},n[e]=t,n)})},e.prototype.setStart=function(e,t){void 0===t&&(t={});var n=this._calendar.dateEnv,r=n.createMarker(e);if(r&&this._instance){var i=ye(this._instance.range.start,r,n,t.granularity);t.maintainDuration?this.mutate({datesDelta:i}):this.mutate({startDelta:i})}},e.prototype.setEnd=function(e,t){void 0===t&&(t={});var n,r=this._calendar.dateEnv;if((null==e||(n=r.createMarker(e)))&&this._instance)if(n){var i=ye(this._instance.range.end,n,r,t.granularity);this.mutate({endDelta:i})}else this.mutate({standardProps:{hasEnd:!1}})},e.prototype.setDates=function(e,t,n){void 0===n&&(n={});var r,i=this._calendar.dateEnv,o={allDay:n.allDay},a=i.createMarker(e);if(a&&(null==t||(r=i.createMarker(t)))&&this._instance){var s=this._instance.range;!0===n.allDay&&(s=ve(s));var u=ye(s.start,a,i,n.granularity);if(r){var l=ye(s.end,r,i,n.granularity);$(u,l)?this.mutate({datesDelta:u,standardProps:o}):this.mutate({startDelta:u,endDelta:l,standardProps:o})}else o.hasEnd=!1,this.mutate({datesDelta:u,standardProps:o})}},e.prototype.moveStart=function(e){var t=J(e);t&&this.mutate({startDelta:t})},e.prototype.moveEnd=function(e){var t=J(e);t&&this.mutate({endDelta:t})},e.prototype.moveDates=function(e){var t=J(e);t&&this.mutate({datesDelta:t})},e.prototype.setAllDay=function(e,t){void 0===t&&(t={});var n={allDay:e},r=t.maintainDuration;null==r&&(r=this._calendar.opt("allDayMaintainDuration")),this._def.allDay!==e&&(n.hasEnd=r),this.mutate({standardProps:n})},e.prototype.formatRange=function(e){var t=this._calendar.dateEnv,n=this._instance,r=ot(e,this._calendar.opt("defaultRangeSeparator"));return this._def.hasEnd?t.formatRange(n.range.start,n.range.end,r,{forcedStartTzo:n.forcedStartTzo,forcedEndTzo:n.forcedEndTzo}):t.format(n.range.start,r,{forcedTzo:n.forcedStartTzo})},e.prototype.mutate=function(e){var t=this._def,n=this._instance;if(n){this._calendar.dispatch({type:"MUTATE_EVENTS",instanceId:n.instanceId,mutation:e,fromApi:!0});var r=this._calendar.state.eventStore;this._def=r.defs[t.defId],this._instance=r.instances[n.instanceId]}},e.prototype.remove=function(){this._calendar.dispatch({type:"REMOVE_EVENT_DEF",defId:this._def.defId})},Object.defineProperty(e.prototype,"source",{get:function(){var e=this._def.sourceId;return e?new lt(this._calendar,this._calendar.state.eventSources[e]):null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"start",{get:function(){return this._instance?this._calendar.dateEnv.toDate(this._instance.range.start):null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this._instance&&this._def.hasEnd?this._calendar.dateEnv.toDate(this._instance.range.end):null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this._def.publicId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"groupId",{get:function(){return this._def.groupId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allDay",{get:function(){return this._def.allDay},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this._def.title},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this._def.url},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rendering",{get:function(){return this._def.rendering},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"startEditable",{get:function(){return this._def.ui.startEditable},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"durationEditable",{get:function(){return this._def.ui.durationEditable},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"constraint",{get:function(){return this._def.ui.constraints[0]||null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"overlap",{get:function(){return this._def.ui.overlap},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allow",{get:function(){return this._def.ui.allows[0]||null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"backgroundColor",{get:function(){return this._def.ui.backgroundColor},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"borderColor",{get:function(){return this._def.ui.borderColor},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textColor",{get:function(){return this._def.ui.textColor},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"classNames",{get:function(){return this._def.ui.classNames},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"extendedProps",{get:function(){return this._def.extendedProps},enumerable:!0,configurable:!0}),e}();function dt(e,t,n,r){var i={},o={},a={},s=[],u=[],l=vt(e.defs,t);for(var c in e.defs){"inverse-background"===(S=e.defs[c]).rendering&&(S.groupId?(i[S.groupId]=[],a[S.groupId]||(a[S.groupId]=S)):o[c]=[])}for(var d in e.instances){var f=e.instances[d],p=l[(S=e.defs[f.defId]).defId],h=f.range,v=!S.allDay&&r?ge(h,r):h,g=Ve(v,n);g&&("inverse-background"===S.rendering?S.groupId?i[S.groupId].push(g):o[f.defId].push(g):("background"===S.rendering?s:u).push({def:S,ui:p,instance:f,range:g,isStart:v.start&&v.start.valueOf()===g.start.valueOf(),isEnd:v.end&&v.end.valueOf()===g.end.valueOf()}))}for(var y in i)for(var m=0,E=Le(i[y],n);m<E.length;m++){var S,b=E[m];p=l[(S=a[y]).defId];s.push({def:S,ui:p,instance:null,range:b,isStart:!1,isEnd:!1})}for(var c in o)for(var D=0,T=Le(o[c],n);D<T.length;D++){b=T[D];s.push({def:e.defs[c],ui:l[c],instance:null,range:b,isStart:!1,isEnd:!1})}return{bg:s,fg:u}}function ft(e,t,n){var r=e.calendar,i=e.view;r.hasPublicHandlers("eventRender")&&(t=t.filter((function(e){var t=r.publiclyTrigger("eventRender",[{event:new ct(r,e.eventRange.def,e.eventRange.instance),isMirror:n,isStart:e.isStart,isEnd:e.isEnd,el:e.el,view:i}]);return!1!==t&&(t&&!0!==t&&(e.el=t),!0)})));for(var o=0,a=t;o<a.length;o++){var s=a[o];pt(s.el,s)}return t}function pt(e,t){e.fcSeg=t}function ht(e){return e.fcSeg||null}function vt(e,t){return Re(e,(function(e){return gt(e,t)}))}function gt(e,t){var n=[];return t[""]&&n.push(t[""]),t[e.defId]&&n.push(t[e.defId]),n.push(e.ui),Bt(n)}function yt(e,t,n){var r=e.calendar,i=e.view;if(r.hasPublicHandlers("eventPositioned"))for(var o=0,a=t;o<a.length;o++){var s=a[o];r.publiclyTriggerAfterSizing("eventPositioned",[{event:new ct(r,s.eventRange.def,s.eventRange.instance),isMirror:n,isStart:s.isStart,isEnd:s.isEnd,el:s.el,view:i}])}r.state.eventSourceLoadingLevel||(r.afterSizingTriggers._eventsPositioned=[null])}function mt(e,t,n){for(var r=e.calendar,i=e.view,o=0,a=t;o<a.length;o++){var s=a[o];r.trigger("eventElRemove",s.el)}if(r.hasPublicHandlers("eventDestroy"))for(var u=0,l=t;u<l.length;u++){s=l[u];r.publiclyTrigger("eventDestroy",[{event:new ct(r,s.eventRange.def,s.eventRange.instance),isMirror:n,el:s.el,view:i}])}}function Et(e,t,n,r){var i=vt(e.defs,t),o={defs:{},instances:{}};for(var a in e.defs){var s=e.defs[a];o.defs[a]=St(s,i[a],n,r.pluginSystem.hooks.eventDefMutationAppliers,r)}for(var u in e.instances){var l=e.instances[u];s=o.defs[l.defId];o.instances[u]=bt(l,s,i[l.defId],n,r)}return o}function St(e,t,n,r,i){var o=n.standardProps||{};null==o.hasEnd&&t.durationEditable&&(n.startDelta||n.endDelta)&&(o.hasEnd=!0);var a=Se({},e,o,{ui:Se({},e.ui,o.ui)});n.extendedProps&&(a.extendedProps=Se({},a.extendedProps,n.extendedProps));for(var s=0,u=r;s<u.length;s++){(0,u[s])(a,n,i)}return!a.hasEnd&&i.opt("forceEventDuration")&&(a.hasEnd=!0),a}function bt(e,t,n,r,i){var o=i.dateEnv,a=r.standardProps&&!0===r.standardProps.allDay,s=r.standardProps&&!1===r.standardProps.hasEnd,u=Se({},e);return a&&(u.range=ve(u.range)),r.datesDelta&&n.startEditable&&(u.range={start:o.add(u.range.start,r.datesDelta),end:o.add(u.range.end,r.datesDelta)}),r.startDelta&&n.durationEditable&&(u.range={start:o.add(u.range.start,r.startDelta),end:u.range.end}),r.endDelta&&n.durationEditable&&(u.range={start:u.range.start,end:o.add(u.range.end,r.endDelta)}),s&&(u.range={start:u.range.start,end:i.getDefaultEventEnd(t.allDay,u.range.start)}),t.allDay&&(u.range={start:B(u.range.start),end:B(u.range.end)}),u.range.end<u.range.start&&(u.range.end=i.getDefaultEventEnd(t.allDay,u.range.start)),u}function Dt(e,t,n,r,i){switch(t.type){case"RECEIVE_EVENTS":return function(e,t,n,r,i,o){if(t&&n===t.latestFetchId){var a=ke(function(e,t,n){var r=n.opt("eventDataTransform"),i=t?t.eventDataTransform:null;return i&&(e=xe(e,i)),r&&(e=xe(e,r)),e}(i,t,o),t.sourceId,o);return r&&(a=Oe(a,r,o)),He(Tt(e,t.sourceId),a)}return e}(e,n[t.sourceId],t.fetchId,t.fetchRange,t.rawEvents,i);case"ADD_EVENTS":return function(e,t,n,r){n&&(t=Oe(t,n,r));return He(e,t)}(e,t.eventStore,r?r.activeRange:null,i);case"MERGE_EVENTS":return He(e,t.eventStore);case"PREV":case"NEXT":case"SET_DATE":case"SET_VIEW_TYPE":return r?Oe(e,r.activeRange,i):e;case"CHANGE_TIMEZONE":return function(e,t,n){var r=e.defs,i=Re(e.instances,(function(e){var i=r[e.defId];return i.allDay||i.recurringDef?e:Se({},e,{range:{start:n.createMarker(t.toDate(e.range.start,e.forcedStartTzo)),end:n.createMarker(t.toDate(e.range.end,e.forcedEndTzo))},forcedStartTzo:n.canComputeOffset?null:e.forcedStartTzo,forcedEndTzo:n.canComputeOffset?null:e.forcedEndTzo})}));return{defs:r,instances:i}}(e,t.oldDateEnv,i.dateEnv);case"MUTATE_EVENTS":return function(e,t,n,r,i){var o=Pe(e,t),a=r?{"":{startEditable:!0,durationEditable:!0,constraints:[],overlap:null,allows:[],backgroundColor:"",borderColor:"",textColor:"",classNames:[]}}:i.eventUiBases;return o=Et(o,a,n,i),He(e,o)}(e,t.instanceId,t.mutation,t.fromApi,i);case"REMOVE_EVENT_INSTANCES":return wt(e,t.instances);case"REMOVE_EVENT_DEF":return Ue(e,(function(e){return e.defId!==t.defId}));case"REMOVE_EVENT_SOURCE":return Tt(e,t.sourceId);case"REMOVE_ALL_EVENT_SOURCES":return Ue(e,(function(e){return!e.sourceId}));case"REMOVE_ALL_EVENTS":return{defs:{},instances:{}};case"RESET_EVENTS":return{defs:e.defs,instances:e.instances};default:return e}}function Tt(e,t){return Ue(e,(function(e){return e.sourceId!==t}))}function wt(e,t){return{defs:e.defs,instances:we(e.instances,(function(e){return!t[e.instanceId]}))}}function Rt(e,t){return Ct({eventDrag:e},t)}function Ct(e,t){var n=t.view,r=Se({businessHours:n?n.props.businessHours:{defs:{},instances:{}},dateSelection:"",eventStore:t.state.eventStore,eventUiBases:t.eventUiBases,eventSelection:"",eventDrag:null,eventResize:null},e);return(t.pluginSystem.hooks.isPropsValid||It)(r,t)}function It(e,t,n,r){return void 0===n&&(n={}),!(e.eventDrag&&!function(e,t,n,r){var i=e.eventDrag,o=i.mutatedEvents,a=o.defs,s=o.instances,u=vt(a,i.isEvent?e.eventUiBases:{"":t.selectionConfig});r&&(u=Re(u,r));var l=wt(e.eventStore,i.affectedEvents.instances),c=l.defs,d=l.instances,f=vt(c,e.eventUiBases);for(var p in s){var h=s[p],v=h.range,g=u[h.defId],y=a[h.defId];if(!Mt(g.constraints,v,l,e.businessHours,t))return!1;var m=t.opt("eventOverlap");for(var E in"function"!=typeof m&&(m=null),d){var S=d[E];if(Fe(v,S.range)){if(!1===f[S.defId].overlap&&i.isEvent)return!1;if(!1===g.overlap)return!1;if(m&&!m(new ct(t,c[S.defId],S),new ct(t,y,h)))return!1}}for(var b=t.state.eventStore,D=0,T=g.allows;D<T.length;D++){var w=T[D],R=Se({},n,{range:h.range,allDay:y.allDay}),C=b.defs[y.defId],I=b.instances[p],M=void 0;if(M=C?new ct(t,C,I):new ct(t,y),!w(t.buildDateSpanApi(R),M))return!1}}return!0}(e,t,n,r))&&!(e.dateSelection&&!function(e,t,n,r){var i=e.eventStore,o=i.defs,a=i.instances,s=e.dateSelection,u=s.range,l=t.selectionConfig;r&&(l=r(l));if(!Mt(l.constraints,u,i,e.businessHours,t))return!1;var c=t.opt("selectOverlap");"function"!=typeof c&&(c=null);for(var d in a){var f=a[d];if(Fe(u,f.range)){if(!1===l.overlap)return!1;if(c&&!c(new ct(t,o[f.defId],f)))return!1}}for(var p=0,h=l.allows;p<h.length;p++){var v=h[p],g=Se({},n,s);if(!v(t.buildDateSpanApi(g),null))return!1}return!0}(e,t,n,r))}function Mt(e,t,n,r,i){for(var o=0,a=e;o<a.length;o++){if(!Ot(kt(a[o],t,n,r,i),t))return!1}return!0}function kt(e,t,n,r,i){return"businessHours"===e?_t(Oe(r,t,i)):"string"==typeof e?_t(Ue(n,(function(t){return t.groupId===e}))):"object"==typeof e&&e?_t(Oe(e,t,i)):[]}function _t(e){var t=e.instances,n=[];for(var r in t)n.push(t[r].range);return n}function Ot(e,t){for(var n=0,r=e;n<r.length;n++){if(We(r[n],t))return!0}return!1}function Pt(e){return(e+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function xt(e){var t=[];for(var n in e){var r=e[n];null!=r&&""!==r&&t.push(n+":"+r)}return t.join(";")}function Nt(e){return Array.isArray(e)?e:"string"==typeof e?e.split(/\s+/):[]}var Ht={editable:Boolean,startEditable:Boolean,durationEditable:Boolean,constraint:null,overlap:null,allow:null,className:Nt,classNames:Nt,color:String,backgroundColor:String,borderColor:String,textColor:String};function Ut(e,t,n){var r=he(e,Ht,{},n),i=function(e,t){return Array.isArray(e)?ke(e,"",t,!0):"object"==typeof e&&e?ke([e],"",t,!0):null!=e?String(e):null}(r.constraint,t);return{startEditable:null!=r.startEditable?r.startEditable:r.editable,durationEditable:null!=r.durationEditable?r.durationEditable:r.editable,constraints:null!=i?[i]:[],overlap:r.overlap,allows:null!=r.allow?[r.allow]:[],backgroundColor:r.backgroundColor||r.color,borderColor:r.borderColor||r.color,textColor:r.textColor,classNames:r.classNames.concat(r.className)}}function zt(e,t,n,r){var i={},o={};for(var a in Ht){var s=e+ue(a);i[a]=t[s],o[s]=!0}if("event"===e&&(i.editable=t.editable),r)for(var a in t)o[a]||(r[a]=t[a]);return Ut(i,n)}var Lt={startEditable:null,durationEditable:null,constraints:[],overlap:null,allows:[],backgroundColor:"",borderColor:"",textColor:"",classNames:[]};function Bt(e){return e.reduce(Vt,Lt)}function Vt(e,t){return{startEditable:null!=t.startEditable?t.startEditable:e.startEditable,durationEditable:null!=t.durationEditable?t.durationEditable:e.durationEditable,constraints:e.constraints.concat(t.constraints),overlap:"boolean"==typeof t.overlap?t.overlap:e.overlap,allows:e.allows.concat(t.allows),backgroundColor:t.backgroundColor||e.backgroundColor,borderColor:t.borderColor||e.borderColor,textColor:t.textColor||e.textColor,classNames:e.classNames.concat(t.classNames)}}var At={id:String,groupId:String,title:String,url:String,rendering:String,extendedProps:null},Ft={start:null,date:null,end:null,allDay:null},Wt=0;function Zt(e,t,n,r){var i=function(e,t){var n=null;if(e){var r=t.state.eventSources[e];n=r.allDayDefault}null==n&&(n=t.opt("allDayDefault"));return n}(t,n),o={},a=function(e,t,n,r,i){for(var o=0;o<r.length;o++){var a={},s=r[o].parse(e,a,n);if(s){var u=a.allDay;return delete a.allDay,null==u&&null==(u=t)&&null==(u=s.allDayGuess)&&(u=!1),Se(i,a),{allDay:u,duration:s.duration,typeData:s.typeData,typeId:o}}}return null}(e,i,n.dateEnv,n.pluginSystem.hooks.recurringTypes,o);if(a)return(s=jt(o,t,a.allDay,Boolean(a.duration),n)).recurringDef={typeId:a.typeId,typeData:a.typeData,duration:a.duration},{def:s,instance:null};var s,u={},l=function(e,t,n,r,i){var o,a,s=function(e,t){var n=he(e,Ft,{},t);return n.start=null!==n.start?n.start:n.date,delete n.date,n}(e,r),u=s.allDay,l=null,c=!1,d=null;if(o=n.dateEnv.createMarkerMeta(s.start))l=o.marker;else if(!i)return null;null!=s.end&&(a=n.dateEnv.createMarkerMeta(s.end));null==u&&(u=null!=t?t:(!o||o.isTimeUnspecified)&&(!a||a.isTimeUnspecified));u&&l&&(l=B(l));a&&(d=a.marker,u&&(d=B(d)),l&&d<=l&&(d=null));d?c=!0:i||(c=n.opt("forceEventDuration")||!1,d=n.dateEnv.add(l,u?n.defaultAllDayEventDuration:n.defaultTimedEventDuration));return{allDay:u,hasEnd:c,range:{start:l,end:d},forcedStartTzo:o?o.forcedTzo:null,forcedEndTzo:a?a.forcedTzo:null}}(e,i,n,u,r);return l?{def:s=jt(u,t,l.allDay,l.hasEnd,n),instance:Yt(s.defId,l.range,l.forcedStartTzo,l.forcedEndTzo)}:null}function jt(e,t,n,r,i){var o={},a=function(e,t,n){var r={},i=he(e,At,{},r),o=Ut(r,t,n);return i.publicId=i.id,delete i.id,i.ui=o,i}(e,i,o);a.defId=String(Wt++),a.sourceId=t,a.allDay=n,a.hasEnd=r;for(var s=0,u=i.pluginSystem.hooks.eventDefParsers;s<u.length;s++){var l={};(0,u[s])(a,o,l),o=l}return a.extendedProps=Se(o,a.extendedProps||{}),Object.freeze(a.ui.classNames),Object.freeze(a.extendedProps),a}function Yt(e,t,n,r){return{instanceId:String(Wt++),defId:e,range:t,forcedStartTzo:null==n?null:n,forcedEndTzo:null==r?null:r}}var qt={startTime:"09:00",endTime:"17:00",daysOfWeek:[1,2,3,4,5],rendering:"inverse-background",classNames:"fc-nonbusiness",groupId:"_businessHours"};function Gt(e,t){return ke(function(e){var t;t=!0===e?[{}]:Array.isArray(e)?e.filter((function(e){return e.daysOfWeek})):"object"==typeof e&&e?[e]:[];return t=t.map((function(e){return Se({},qt,e)}))}(e),"",t)}function Xt(e,t,n){void 0===n&&(n=[]);var r,i,o=[];function a(){if(i){for(var e=0,n=o;e<n.length;e++){n[e].unrender()}t&&t.apply(r,i),i=null}}function s(){i&&je(i,arguments)||(a(),r=this,i=arguments,e.apply(this,arguments))}s.dependents=o,s.unrender=a;for(var u=0,l=n;u<l.length;u++){l[u].dependents.push(s)}return s}var Jt={defs:{},instances:{}},Kt=function(){function e(){this.getKeysForEventDefs=Ye(this._getKeysForEventDefs),this.splitDateSelection=Ye(this._splitDateSpan),this.splitEventStore=Ye(this._splitEventStore),this.splitIndividualUi=Ye(this._splitIndividualUi),this.splitEventDrag=Ye(this._splitInteraction),this.splitEventResize=Ye(this._splitInteraction),this.eventUiBuilders={}}return e.prototype.splitProps=function(e){var t=this,n=this.getKeyInfo(e),r=this.getKeysForEventDefs(e.eventStore),i=this.splitDateSelection(e.dateSelection),o=this.splitIndividualUi(e.eventUiBases,r),a=this.splitEventStore(e.eventStore,r),s=this.splitEventDrag(e.eventDrag),u=this.splitEventResize(e.eventResize),l={};for(var c in this.eventUiBuilders=Re(n,(function(e,n){return t.eventUiBuilders[n]||Ye(Qt)})),n){var d=n[c],f=a[c]||Jt,p=this.eventUiBuilders[c];l[c]={businessHours:d.businessHours||e.businessHours,dateSelection:i[c]||null,eventStore:f,eventUiBases:p(e.eventUiBases[""],d.ui,o[c]),eventSelection:f.instances[e.eventSelection]?e.eventSelection:"",eventDrag:s[c]||null,eventResize:u[c]||null}}return l},e.prototype._splitDateSpan=function(e){var t={};if(e)for(var n=0,r=this.getKeysForDateSpan(e);n<r.length;n++){t[r[n]]=e}return t},e.prototype._getKeysForEventDefs=function(e){var t=this;return Re(e.defs,(function(e){return t.getKeysForEventDef(e)}))},e.prototype._splitEventStore=function(e,t){var n=e.defs,r=e.instances,i={};for(var o in n)for(var a=0,s=t[o];a<s.length;a++){i[f=s[a]]||(i[f]={defs:{},instances:{}}),i[f].defs[o]=n[o]}for(var u in r)for(var l=r[u],c=0,d=t[l.defId];c<d.length;c++){var f;i[f=d[c]]&&(i[f].instances[u]=l)}return i},e.prototype._splitIndividualUi=function(e,t){var n={};for(var r in e)if(r)for(var i=0,o=t[r];i<o.length;i++){var a=o[i];n[a]||(n[a]={}),n[a][r]=e[r]}return n},e.prototype._splitInteraction=function(e){var t={};if(e){var n=this._splitEventStore(e.affectedEvents,this._getKeysForEventDefs(e.affectedEvents)),r=this._getKeysForEventDefs(e.mutatedEvents),i=this._splitEventStore(e.mutatedEvents,r),o=function(r){t[r]||(t[r]={affectedEvents:n[r]||Jt,mutatedEvents:i[r]||Jt,isEvent:e.isEvent,origSeg:e.origSeg})};for(var a in n)o(a);for(var a in i)o(a)}return t},e}();function Qt(e,t,n){var r=[];e&&r.push(e),t&&r.push(t);var i={"":Bt(r)};return n&&Se(i,n),i}function $t(e,t,n,r,i){var o,a,s,u;return n instanceof Date?o=n:(o=n.date,a=n.type,s=n.forceOff),u={date:t.formatIso(o,{omitTime:!0}),type:a||"day"},"string"==typeof r&&(i=r,r=null),r=r?" "+function(e){var t=[];for(var n in e){var r=e[n];null!=r&&t.push(n+'="'+Pt(r)+'"')}return t.join(" ")}(r):"",i=i||"",!s&&e.navLinks?"<a"+r+' data-goto="'+Pt(JSON.stringify(u))+'">'+i+"</a>":"<span"+r+">"+i+"</span>"}function en(e,t,n,r){var i,o,a=n.calendar,s=n.options,u=n.theme,l=n.dateEnv,c=[];return Ze(t.activeRange,e)?(c.push("fc-"+P[e.getUTCDay()]),s.monthMode&&l.getMonth(e)!==l.getMonth(t.currentRange.start)&&c.push("fc-other-month"),o=x(i=B(a.getNow()),1),e<i?c.push("fc-past"):e>=o?c.push("fc-future"):(c.push("fc-today"),!0!==r&&c.push(u.getClass("today")))):c.push("fc-disabled-day"),c}function tn(e,t,n){var r=!1,i=function(){r||(r=!0,t.apply(this,arguments))},o=function(){r||(r=!0,n&&n.apply(this,arguments))},a=e(i,o);a&&"function"==typeof a.then&&a.then(i,o)}var nn=function(){function e(){}return e.mixInto=function(e){this.mixIntoObj(e.prototype)},e.mixIntoObj=function(e){var t=this;Object.getOwnPropertyNames(this.prototype).forEach((function(n){e[n]||(e[n]=t.prototype[n])}))},e.mixOver=function(e){var t=this;Object.getOwnPropertyNames(this.prototype).forEach((function(n){e.prototype[n]=t.prototype[n]}))},e}(),rn=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Ee(t,e),t.prototype.on=function(e,t){return on(this._handlers||(this._handlers={}),e,t),this},t.prototype.one=function(e,t){return on(this._oneHandlers||(this._oneHandlers={}),e,t),this},t.prototype.off=function(e,t){return this._handlers&&an(this._handlers,e,t),this._oneHandlers&&an(this._oneHandlers,e,t),this},t.prototype.trigger=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return this.triggerWith(e,this,t),this},t.prototype.triggerWith=function(e,t,n){return this._handlers&&de(this._handlers[e],t,n),this._oneHandlers&&(de(this._oneHandlers[e],t,n),delete this._oneHandlers[e]),this},t.prototype.hasHandlers=function(e){return this._handlers&&this._handlers[e]&&this._handlers[e].length||this._oneHandlers&&this._oneHandlers[e]&&this._oneHandlers[e].length},t}(nn);function on(e,t,n){(e[t]||(e[t]=[])).push(n)}function an(e,t,n){n?e[t]&&(e[t]=e[t].filter((function(e){return e!==n}))):delete e[t]}var sn=function(){function e(e,t,n,r){this.originEl=e,this.els=t,this.isHorizontal=n,this.isVertical=r}return e.prototype.build=function(){var e=this.originEl,t=this.originClientRect=e.getBoundingClientRect();this.isHorizontal&&this.buildElHorizontals(t.left),this.isVertical&&this.buildElVerticals(t.top)},e.prototype.buildElHorizontals=function(e){for(var t=[],n=[],r=0,i=this.els;r<i.length;r++){var o=i[r].getBoundingClientRect();t.push(o.left-e),n.push(o.right-e)}this.lefts=t,this.rights=n},e.prototype.buildElVerticals=function(e){for(var t=[],n=[],r=0,i=this.els;r<i.length;r++){var o=i[r].getBoundingClientRect();t.push(o.top-e),n.push(o.bottom-e)}this.tops=t,this.bottoms=n},e.prototype.leftToIndex=function(e){var t,n=this.lefts,r=this.rights,i=n.length;for(t=0;t<i;t++)if(e>=n[t]&&e<r[t])return t},e.prototype.topToIndex=function(e){var t,n=this.tops,r=this.bottoms,i=n.length;for(t=0;t<i;t++)if(e>=n[t]&&e<r[t])return t},e.prototype.getWidth=function(e){return this.rights[e]-this.lefts[e]},e.prototype.getHeight=function(e){return this.bottoms[e]-this.tops[e]},e}(),un=function(){function e(){}return e.prototype.getMaxScrollTop=function(){return this.getScrollHeight()-this.getClientHeight()},e.prototype.getMaxScrollLeft=function(){return this.getScrollWidth()-this.getClientWidth()},e.prototype.canScrollVertically=function(){return this.getMaxScrollTop()>0},e.prototype.canScrollHorizontally=function(){return this.getMaxScrollLeft()>0},e.prototype.canScrollUp=function(){return this.getScrollTop()>0},e.prototype.canScrollDown=function(){return this.getScrollTop()<this.getMaxScrollTop()},e.prototype.canScrollLeft=function(){return this.getScrollLeft()>0},e.prototype.canScrollRight=function(){return this.getScrollLeft()<this.getMaxScrollLeft()},e}(),ln=function(e){function t(t){var n=e.call(this)||this;return n.el=t,n}return Ee(t,e),t.prototype.getScrollTop=function(){return this.el.scrollTop},t.prototype.getScrollLeft=function(){return this.el.scrollLeft},t.prototype.setScrollTop=function(e){this.el.scrollTop=e},t.prototype.setScrollLeft=function(e){this.el.scrollLeft=e},t.prototype.getScrollWidth=function(){return this.el.scrollWidth},t.prototype.getScrollHeight=function(){return this.el.scrollHeight},t.prototype.getClientHeight=function(){return this.el.clientHeight},t.prototype.getClientWidth=function(){return this.el.clientWidth},t}(un),cn=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Ee(t,e),t.prototype.getScrollTop=function(){return window.pageYOffset},t.prototype.getScrollLeft=function(){return window.pageXOffset},t.prototype.setScrollTop=function(e){window.scroll(window.pageXOffset,e)},t.prototype.setScrollLeft=function(e){window.scroll(e,window.pageYOffset)},t.prototype.getScrollWidth=function(){return document.documentElement.scrollWidth},t.prototype.getScrollHeight=function(){return document.documentElement.scrollHeight},t.prototype.getClientHeight=function(){return document.documentElement.clientHeight},t.prototype.getClientWidth=function(){return document.documentElement.clientWidth},t}(un),dn=function(e){function t(t,n){var i=e.call(this,r("div",{className:"fc-scroller"}))||this;return i.overflowX=t,i.overflowY=n,i.applyOverflow(),i}return Ee(t,e),t.prototype.clear=function(){this.setHeight("auto"),this.applyOverflow()},t.prototype.destroy=function(){c(this.el)},t.prototype.applyOverflow=function(){y(this.el,{overflowX:this.overflowX,overflowY:this.overflowY})},t.prototype.lockOverflow=function(e){var t=this.overflowX,n=this.overflowY;e=e||this.getScrollbarWidths(),"auto"===t&&(t=e.bottom||this.canScrollHorizontally()?"scroll":"hidden"),"auto"===n&&(n=e.left||e.right||this.canScrollVertically()?"scroll":"hidden"),y(this.el,{overflowX:t,overflowY:n})},t.prototype.setHeight=function(e){m(this.el,"height",e)},t.prototype.getScrollbarWidths=function(){var e=T(this.el);return{left:e.scrollbarLeft,right:e.scrollbarRight,bottom:e.scrollbarBottom}},t}(ln),fn=function(){function e(e){this.calendarOptions=e,this.processIconOverride()}return e.prototype.processIconOverride=function(){this.iconOverrideOption&&this.setIconOverride(this.calendarOptions[this.iconOverrideOption])},e.prototype.setIconOverride=function(e){var t,n;if("object"==typeof e&&e){for(n in t=Se({},this.iconClasses),e)t[n]=this.applyIconOverridePrefix(e[n]);this.iconClasses=t}else!1===e&&(this.iconClasses={})},e.prototype.applyIconOverridePrefix=function(e){var t=this.iconOverridePrefix;return t&&0!==e.indexOf(t)&&(e=t+e),e},e.prototype.getClass=function(e){return this.classes[e]||""},e.prototype.getIconClass=function(e){var t=this.iconClasses[e];return t?this.baseIconClass+" "+t:""},e.prototype.getCustomButtonIconClass=function(e){var t;return this.iconOverrideCustomButtonOption&&(t=e[this.iconOverrideCustomButtonOption])?this.baseIconClass+" "+this.applyIconOverridePrefix(t):""},e}();fn.prototype.classes={},fn.prototype.iconClasses={},fn.prototype.baseIconClass="",fn.prototype.iconOverridePrefix="";var pn=0,hn=function(){function e(e,t,n,r,i){this.calendar=e,this.theme=t,this.dateEnv=n,this.options=r,this.view=i,this.isRtl="rtl"===r.dir,this.eventOrderSpecs=ie(r.eventOrder),this.nextDayThreshold=J(r.nextDayThreshold)}return e.prototype.extend=function(t,n){return new e(this.calendar,this.theme,this.dateEnv,t||this.options,n||this.view)},e}(),vn=function(){function e(){this.everRendered=!1,this.uid=String(pn++)}return e.addEqualityFuncs=function(e){this.prototype.equalityFuncs=Se({},this.prototype.equalityFuncs,e)},e.prototype.receiveProps=function(e,t){this.receiveContext(t);var n=function(e,t,n){var r={},i=!1;for(var o in t)o in e&&(e[o]===t[o]||n[o]&&n[o](e[o],t[o]))?r[o]=e[o]:(r[o]=t[o],i=!0);for(var o in e)if(!(o in t)){i=!0;break}return{anyChanges:i,comboProps:r}}(this.props||{},e,this.equalityFuncs),r=n.anyChanges,i=n.comboProps;this.props=i,r&&(this.everRendered&&this.beforeUpdate(),this.render(i,t),this.everRendered&&this.afterUpdate()),this.everRendered=!0},e.prototype.receiveContext=function(e){var t=this.context;this.context=e,t||this.firstContext(e)},e.prototype.render=function(e,t){},e.prototype.firstContext=function(e){},e.prototype.beforeUpdate=function(){},e.prototype.afterUpdate=function(){},e.prototype.destroy=function(){},e}();vn.prototype.equalityFuncs={};var gn=function(e){function t(t){var n=e.call(this)||this;return n.el=t,n}return Ee(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),c(this.el)},t.prototype.buildPositionCaches=function(){},t.prototype.queryHit=function(e,t,n,r){return null},t.prototype.isInteractionValid=function(e){var t=this.context.calendar,n=this.props.dateProfile,r=e.mutatedEvents.instances;if(n)for(var i in r)if(!We(n.validRange,r[i].range))return!1;return Rt(e,t)},t.prototype.isDateSelectionValid=function(e){var t=this.context.calendar,n=this.props.dateProfile;return!(n&&!We(n.validRange,e.range))&&function(e,t){return Ct({dateSelection:e},t)}(e,t)},t.prototype.isValidSegDownEl=function(e){return!this.props.eventDrag&&!this.props.eventResize&&!p(e,".fc-mirror")&&(this.isPopover()||!this.isInPopover(e))},t.prototype.isValidDateDownEl=function(e){var t=p(e,this.fgSegSelector);return(!t||t.classList.contains("fc-mirror"))&&!p(e,".fc-more")&&!p(e,"a[data-goto]")&&!this.isInPopover(e)},t.prototype.isPopover=function(){return this.el.classList.contains("fc-popover")},t.prototype.isInPopover=function(e){return Boolean(p(e,".fc-popover"))},t}(vn);gn.prototype.fgSegSelector=".fc-event-container > *",gn.prototype.bgSegSelector=".fc-bgevent:not(.fc-nonbusiness)";var yn=0;function mn(e){return{id:String(yn++),deps:e.deps||[],reducers:e.reducers||[],eventDefParsers:e.eventDefParsers||[],isDraggableTransformers:e.isDraggableTransformers||[],eventDragMutationMassagers:e.eventDragMutationMassagers||[],eventDefMutationAppliers:e.eventDefMutationAppliers||[],dateSelectionTransformers:e.dateSelectionTransformers||[],datePointTransforms:e.datePointTransforms||[],dateSpanTransforms:e.dateSpanTransforms||[],views:e.views||{},viewPropsTransformers:e.viewPropsTransformers||[],isPropsValid:e.isPropsValid||null,externalDefTransforms:e.externalDefTransforms||[],eventResizeJoinTransforms:e.eventResizeJoinTransforms||[],viewContainerModifiers:e.viewContainerModifiers||[],eventDropTransformers:e.eventDropTransformers||[],componentInteractions:e.componentInteractions||[],calendarInteractions:e.calendarInteractions||[],themeClasses:e.themeClasses||{},eventSourceDefs:e.eventSourceDefs||[],cmdFormatter:e.cmdFormatter,recurringTypes:e.recurringTypes||[],namedTimeZonedImpl:e.namedTimeZonedImpl,defaultView:e.defaultView||"",elementDraggingImpl:e.elementDraggingImpl,optionChangeHandlers:e.optionChangeHandlers||{}}}var En=function(){function e(){this.hooks={reducers:[],eventDefParsers:[],isDraggableTransformers:[],eventDragMutationMassagers:[],eventDefMutationAppliers:[],dateSelectionTransformers:[],datePointTransforms:[],dateSpanTransforms:[],views:{},viewPropsTransformers:[],isPropsValid:null,externalDefTransforms:[],eventResizeJoinTransforms:[],viewContainerModifiers:[],eventDropTransformers:[],componentInteractions:[],calendarInteractions:[],themeClasses:{},eventSourceDefs:[],cmdFormatter:null,recurringTypes:[],namedTimeZonedImpl:null,defaultView:"",elementDraggingImpl:null,optionChangeHandlers:{}},this.addedHash={}}return e.prototype.add=function(e){if(!this.addedHash[e.id]){this.addedHash[e.id]=!0;for(var t=0,n=e.deps;t<n.length;t++){var r=n[t];this.add(r)}this.hooks=(i=this.hooks,o=e,{reducers:i.reducers.concat(o.reducers),eventDefParsers:i.eventDefParsers.concat(o.eventDefParsers),isDraggableTransformers:i.isDraggableTransformers.concat(o.isDraggableTransformers),eventDragMutationMassagers:i.eventDragMutationMassagers.concat(o.eventDragMutationMassagers),eventDefMutationAppliers:i.eventDefMutationAppliers.concat(o.eventDefMutationAppliers),dateSelectionTransformers:i.dateSelectionTransformers.concat(o.dateSelectionTransformers),datePointTransforms:i.datePointTransforms.concat(o.datePointTransforms),dateSpanTransforms:i.dateSpanTransforms.concat(o.dateSpanTransforms),views:Se({},i.views,o.views),viewPropsTransformers:i.viewPropsTransformers.concat(o.viewPropsTransformers),isPropsValid:o.isPropsValid||i.isPropsValid,externalDefTransforms:i.externalDefTransforms.concat(o.externalDefTransforms),eventResizeJoinTransforms:i.eventResizeJoinTransforms.concat(o.eventResizeJoinTransforms),viewContainerModifiers:i.viewContainerModifiers.concat(o.viewContainerModifiers),eventDropTransformers:i.eventDropTransformers.concat(o.eventDropTransformers),calendarInteractions:i.calendarInteractions.concat(o.calendarInteractions),componentInteractions:i.componentInteractions.concat(o.componentInteractions),themeClasses:Se({},i.themeClasses,o.themeClasses),eventSourceDefs:i.eventSourceDefs.concat(o.eventSourceDefs),cmdFormatter:o.cmdFormatter||i.cmdFormatter,recurringTypes:i.recurringTypes.concat(o.recurringTypes),namedTimeZonedImpl:o.namedTimeZonedImpl||i.namedTimeZonedImpl,defaultView:i.defaultView||o.defaultView,elementDraggingImpl:i.elementDraggingImpl||o.elementDraggingImpl,optionChangeHandlers:Se({},i.optionChangeHandlers,o.optionChangeHandlers)})}var i,o},e}();var Sn=mn({eventSourceDefs:[{ignoreRange:!0,parseMeta:function(e){return Array.isArray(e)?e:Array.isArray(e.events)?e.events:null},fetch:function(e,t){t({rawEvents:e.eventSource.meta})}}]}),bn=mn({eventSourceDefs:[{parseMeta:function(e){return"function"==typeof e?e:"function"==typeof e.events?e.events:null},fetch:function(e,t,n){var r=e.calendar.dateEnv;tn(e.eventSource.meta.bind(null,{start:r.toDate(e.range.start),end:r.toDate(e.range.end),startStr:r.formatIso(e.range.start),endStr:r.formatIso(e.range.end),timeZone:r.timeZone}),(function(e){t({rawEvents:e})}),n)}}]});function Dn(e,t,n,r,i){var o=null;"GET"===(e=e.toUpperCase())?t=function(e,t){return e+(-1===e.indexOf("?")?"?":"&")+Tn(t)}(t,n):o=Tn(n);var a=new XMLHttpRequest;a.open(e,t,!0),"GET"!==e&&a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.onload=function(){if(a.status>=200&&a.status<400)try{var e=JSON.parse(a.responseText);r(e,a)}catch(e){i("Failure parsing JSON",a)}else i("Request failed",a)},a.onerror=function(){i("Request failed",a)},a.send(o)}function Tn(e){var t=[];for(var n in e)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}var wn=mn({eventSourceDefs:[{parseMeta:function(e){if("string"==typeof e)e={url:e};else if(!e||"object"!=typeof e||!e.url)return null;return{url:e.url,method:(e.method||"GET").toUpperCase(),extraParams:e.extraParams,startParam:e.startParam,endParam:e.endParam,timeZoneParam:e.timeZoneParam}},fetch:function(e,t,n){var r=e.eventSource.meta,i=function(e,t,n){var r,i,o,a,s=n.dateEnv,u={};null==(r=e.startParam)&&(r=n.opt("startParam"));null==(i=e.endParam)&&(i=n.opt("endParam"));null==(o=e.timeZoneParam)&&(o=n.opt("timeZoneParam"));a="function"==typeof e.extraParams?e.extraParams():e.extraParams||{};Se(u,a),u[r]=s.formatIso(t.start),u[i]=s.formatIso(t.end),"local"!==s.timeZone&&(u[o]=s.timeZone);return u}(r,e.range,e.calendar);Dn(r.method,r.url,i,(function(e,n){t({rawEvents:e,xhr:n})}),(function(e,t){n({message:e,xhr:t})}))}}]});var Rn=mn({recurringTypes:[{parse:function(e,t,n){var r,i,o=n.createMarker.bind(n),a=he(e,{daysOfWeek:null,startTime:J,endTime:J,startRecur:o,endRecur:o},{},t),s=!1;for(var u in a)if(null!=a[u]){s=!0;break}if(s){var l=null;return"duration"in t&&(l=J(t.duration),delete t.duration),!l&&a.startTime&&a.endTime&&(r=a.endTime,i=a.startTime,l={years:r.years-i.years,months:r.months-i.months,days:r.days-i.days,milliseconds:r.milliseconds-i.milliseconds}),{allDayGuess:Boolean(!a.startTime&&!a.endTime),duration:l,typeData:a}}return null},expand:function(e,t,n){var r=Ve(t,{start:e.startRecur,end:e.endRecur});return r?function(e,t,n,r){var i=e?Ce(e):null,o=B(n.start),a=n.end,s=[];for(;o<a;){var u=void 0;i&&!i[o.getUTCDay()]||(u=t?r.add(o,t):o,s.push(u)),o=x(o,1)}return s}(e.daysOfWeek,e.startTime,r,n):[]}}]});var Cn=mn({optionChangeHandlers:{events:function(e,t,n){In([e],t,n)},eventSources:In,plugins:function(e,t){t.addPluginInputs(e)}}});function In(e,t,n){for(var r=Ie(t.state.eventSources),i=[],o=0,a=e;o<a.length;o++){for(var s=a[o],u=!1,l=0;l<r.length;l++)if(n(r[l]._raw,s)){r.splice(l,1),u=!0;break}u||i.push(s)}for(var c=0,d=r;c<d.length;c++){var f=d[c];t.dispatch({type:"REMOVE_EVENT_SOURCE",sourceId:f.sourceId})}for(var p=0,h=i;p<h.length;p++){var v=h[p];t.addEventSource(v)}}var Mn={defaultRangeSeparator:" - ",titleRangeSeparator:" – ",defaultTimedEventDuration:"01:00:00",defaultAllDayEventDuration:{day:1},forceEventDuration:!1,nextDayThreshold:"00:00:00",columnHeader:!0,defaultView:"",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberCalculation:"local",editable:!1,scrollTime:"06:00:00",minTime:"00:00:00",maxTime:"24:00:00",showNonCurrentDates:!0,lazyFetching:!0,startParam:"start",endParam:"end",timeZoneParam:"timeZone",timeZone:"local",locales:[],locale:"",timeGridEventMinHeight:0,themeSystem:"standard",dragRevertDuration:500,dragScroll:!0,allDayMaintainDuration:!1,unselectAuto:!0,dropAccept:"*",eventOrder:"start,-duration,allDay,title",eventLimit:!1,eventLimitClick:"popover",dayPopoverFormat:{month:"long",day:"numeric",year:"numeric"},handleWindowResize:!0,windowResizeDelay:100,longPressDelay:1e3,eventDragMinDistance:5},kn={header:{left:"next,prev today",center:"",right:"title"},buttonIcons:{prev:"fc-icon-chevron-right",next:"fc-icon-chevron-left",prevYear:"fc-icon-chevrons-right",nextYear:"fc-icon-chevrons-left"}},_n=["header","footer","buttonText","buttonIcons"];var On=[Sn,bn,wn,Rn,Cn];var Pn={code:"en",week:{dow:0,doy:4},dir:"ltr",buttonText:{prev:"prev",next:"next",prevYear:"prev year",nextYear:"next year",year:"year",today:"today",month:"month",week:"week",day:"day",list:"list"},weekLabel:"W",allDayText:"all-day",eventLimitText:"more",noEventsMessage:"No events to display"};function xn(e){for(var t=e.length>0?e[0].code:"en",n=window.FullCalendarLocalesAll||[],r=window.FullCalendarLocales||{},i=n.concat(Ie(r),e),o={en:Pn},a=0,s=i;a<s.length;a++){var u=s[a];o[u.code]=u}return{map:o,defaultCode:t}}function Nn(e,t){return"object"!=typeof e||Array.isArray(e)?function(e,t){var n=[].concat(e||[]),r=function(e,t){for(var n=0;n<e.length;n++)for(var r=e[n].toLocaleLowerCase().split("-"),i=r.length;i>0;i--){var o=r.slice(0,i).join("-");if(t[o])return t[o]}return null}(n,t)||Pn;return Hn(e,n,r)}(e,t):Hn(e.code,[e.code],e)}function Hn(e,t,n){var r=Te([Pn,n],["buttonText"]);delete r.code;var i=r.week;return delete r.week,{codeArg:e,codes:t,week:i,simpleNumberFormat:new Intl.NumberFormat(e),options:r}}var Un=function(){function e(e){this.overrides=Se({},e),this.dynamicOverrides={},this.compute()}return e.prototype.mutate=function(e,t,n){if(Object.keys(e).length||t.length){var r=n?this.dynamicOverrides:this.overrides;Se(r,e);for(var i=0,o=t;i<o.length;i++){delete r[o[i]]}this.compute()}},e.prototype.compute=function(){var e=fe(this.dynamicOverrides.locales,this.overrides.locales,Mn.locales),t=fe(this.dynamicOverrides.locale,this.overrides.locale,Mn.locale),n=xn(e),r=Nn(t||n.defaultCode,n.map).options,i="rtl"===fe(this.dynamicOverrides.dir,this.overrides.dir,r.dir)?kn:{};this.dirDefaults=i,this.localeDefaults=r,this.computed=Te([Mn,i,r,this.overrides,this.dynamicOverrides],_n)},e}(),zn={};var Ln,Bn=function(){function e(){}return e.prototype.getMarkerYear=function(e){return e.getUTCFullYear()},e.prototype.getMarkerMonth=function(e){return e.getUTCMonth()},e.prototype.getMarkerDay=function(e){return e.getUTCDate()},e.prototype.arrayToMarker=function(e){return j(e)},e.prototype.markerToArray=function(e){return Z(e)},e}();Ln=Bn,zn["gregory"]=Ln;var Vn=/^\s*(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;function An(e){var t=Vn.exec(e);if(t){var n=new Date(Date.UTC(Number(t[1]),t[3]?Number(t[3])-1:0,Number(t[5]||1),Number(t[7]||0),Number(t[8]||0),Number(t[10]||0),t[12]?1e3*Number("0."+t[12]):0));if(Y(n)){var r=null;return t[13]&&(r=("-"===t[15]?-1:1)*(60*Number(t[16]||0)+Number(t[18]||0))),{marker:n,isTimeUnspecified:!t[6],timeZoneOffset:r}}}return null}var Fn=function(){function e(e){var t=this.timeZone=e.timeZone,n="local"!==t&&"UTC"!==t;e.namedTimeZoneImpl&&n&&(this.namedTimeZoneImpl=new e.namedTimeZoneImpl(t)),this.canComputeOffset=Boolean(!n||this.namedTimeZoneImpl),this.calendarSystem=function(e){return new zn[e]}(e.calendarSystem),this.locale=e.locale,this.weekDow=e.locale.week.dow,this.weekDoy=e.locale.week.doy,"ISO"===e.weekNumberCalculation&&(this.weekDow=1,this.weekDoy=4),"number"==typeof e.firstDay&&(this.weekDow=e.firstDay),"function"==typeof e.weekNumberCalculation&&(this.weekNumberFunc=e.weekNumberCalculation),this.weekLabel=null!=e.weekLabel?e.weekLabel:e.locale.options.weekLabel,this.cmdFormatter=e.cmdFormatter}return e.prototype.createMarker=function(e){var t=this.createMarkerMeta(e);return null===t?null:t.marker},e.prototype.createNowMarker=function(){return this.canComputeOffset?this.timestampToMarker((new Date).valueOf()):j(F(new Date))},e.prototype.createMarkerMeta=function(e){if("string"==typeof e)return this.parse(e);var t=null;return"number"==typeof e?t=this.timestampToMarker(e):e instanceof Date?(e=e.valueOf(),isNaN(e)||(t=this.timestampToMarker(e))):Array.isArray(e)&&(t=j(e)),null!==t&&Y(t)?{marker:t,isTimeUnspecified:!1,forcedTzo:null}:null},e.prototype.parse=function(e){var t=An(e);if(null===t)return null;var n=t.marker,r=null;return null!==t.timeZoneOffset&&(this.canComputeOffset?n=this.timestampToMarker(n.valueOf()-60*t.timeZoneOffset*1e3):r=t.timeZoneOffset),{marker:n,isTimeUnspecified:t.isTimeUnspecified,forcedTzo:r}},e.prototype.getYear=function(e){return this.calendarSystem.getMarkerYear(e)},e.prototype.getMonth=function(e){return this.calendarSystem.getMarkerMonth(e)},e.prototype.add=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[0]+=t.years,n[1]+=t.months,n[2]+=t.days,n[6]+=t.milliseconds,this.calendarSystem.arrayToMarker(n)},e.prototype.subtract=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[0]-=t.years,n[1]-=t.months,n[2]-=t.days,n[6]-=t.milliseconds,this.calendarSystem.arrayToMarker(n)},e.prototype.addYears=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[0]+=t,this.calendarSystem.arrayToMarker(n)},e.prototype.addMonths=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[1]+=t,this.calendarSystem.arrayToMarker(n)},e.prototype.diffWholeYears=function(e,t){var n=this.calendarSystem;return q(e)===q(t)&&n.getMarkerDay(e)===n.getMarkerDay(t)&&n.getMarkerMonth(e)===n.getMarkerMonth(t)?n.getMarkerYear(t)-n.getMarkerYear(e):null},e.prototype.diffWholeMonths=function(e,t){var n=this.calendarSystem;return q(e)===q(t)&&n.getMarkerDay(e)===n.getMarkerDay(t)?n.getMarkerMonth(t)-n.getMarkerMonth(e)+12*(n.getMarkerYear(t)-n.getMarkerYear(e)):null},e.prototype.greatestWholeUnit=function(e,t){var n=this.diffWholeYears(e,t);return null!==n?{unit:"year",value:n}:null!==(n=this.diffWholeMonths(e,t))?{unit:"month",value:n}:null!==(n=z(e,t))?{unit:"week",value:n}:null!==(n=L(e,t))?{unit:"day",value:n}:ce(n=function(e,t){return(t.valueOf()-e.valueOf())/36e5}(e,t))?{unit:"hour",value:n}:ce(n=function(e,t){return(t.valueOf()-e.valueOf())/6e4}(e,t))?{unit:"minute",value:n}:ce(n=function(e,t){return(t.valueOf()-e.valueOf())/1e3}(e,t))?{unit:"second",value:n}:{unit:"millisecond",value:t.valueOf()-e.valueOf()}},e.prototype.countDurationsBetween=function(e,t,n){var r;return n.years&&null!==(r=this.diffWholeYears(e,t))?r/(ee(n)/365):n.months&&null!==(r=this.diffWholeMonths(e,t))?r/function(e){return ee(e)/30}(n):n.days&&null!==(r=L(e,t))?r/ee(n):(t.valueOf()-e.valueOf())/te(n)},e.prototype.startOf=function(e,t){return"year"===t?this.startOfYear(e):"month"===t?this.startOfMonth(e):"week"===t?this.startOfWeek(e):"day"===t?B(e):"hour"===t?function(e){return j([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours()])}(e):"minute"===t?function(e){return j([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes()])}(e):"second"===t?function(e){return j([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()])}(e):void 0},e.prototype.startOfYear=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)])},e.prototype.startOfMonth=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e),this.calendarSystem.getMarkerMonth(e)])},e.prototype.startOfWeek=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e),this.calendarSystem.getMarkerMonth(e),e.getUTCDate()-(e.getUTCDay()-this.weekDow+7)%7])},e.prototype.computeWeekNumber=function(e){return this.weekNumberFunc?this.weekNumberFunc(this.toDate(e)):function(e,t,n){var r=e.getUTCFullYear(),i=V(e,r,t,n);if(i<1)return V(e,r-1,t,n);var o=V(e,r+1,t,n);return o>=1?Math.min(i,o):i}(e,this.weekDow,this.weekDoy)},e.prototype.format=function(e,t,n){return void 0===n&&(n={}),t.format({marker:e,timeZoneOffset:null!=n.forcedTzo?n.forcedTzo:this.offsetForMarker(e)},this)},e.prototype.formatRange=function(e,t,n,r){return void 0===r&&(r={}),r.isEndExclusive&&(t=N(t,-1)),n.formatRange({marker:e,timeZoneOffset:null!=r.forcedStartTzo?r.forcedStartTzo:this.offsetForMarker(e)},{marker:t,timeZoneOffset:null!=r.forcedEndTzo?r.forcedEndTzo:this.offsetForMarker(t)},this)},e.prototype.formatIso=function(e,t){void 0===t&&(t={});var n=null;return t.omitTimeZoneOffset||(n=null!=t.forcedTzo?t.forcedTzo:this.offsetForMarker(e)),function(e,t,n){void 0===n&&(n=!1);var r=e.toISOString();return r=r.replace(".000",""),n&&(r=r.replace("T00:00:00Z","")),r.length>10&&(null==t?r=r.replace("Z",""):0!==t&&(r=r.replace("Z",at(t,!0)))),r}(e,n,t.omitTime)},e.prototype.timestampToMarker=function(e){return"local"===this.timeZone?j(F(new Date(e))):"UTC"!==this.timeZone&&this.namedTimeZoneImpl?j(this.namedTimeZoneImpl.timestampToArray(e)):new Date(e)},e.prototype.offsetForMarker=function(e){return"local"===this.timeZone?-W(Z(e)).getTimezoneOffset():"UTC"===this.timeZone?0:this.namedTimeZoneImpl?this.namedTimeZoneImpl.offsetForArray(Z(e)):null},e.prototype.toDate=function(e,t){return"local"===this.timeZone?W(Z(e)):"UTC"===this.timeZone?new Date(e.valueOf()):this.namedTimeZoneImpl?new Date(e.valueOf()-1e3*this.namedTimeZoneImpl.offsetForArray(Z(e))*60):new Date(e.valueOf()-(t||0))},e}(),Wn={id:String,allDayDefault:Boolean,eventDataTransform:Function,success:Function,failure:Function},Zn=0;function jn(e,t){return!t.pluginSystem.hooks.eventSourceDefs[e.sourceDefId].ignoreRange}function Yn(e,t){for(var n=t.pluginSystem.hooks.eventSourceDefs,r=n.length-1;r>=0;r--){var i=n[r].parseMeta(e);if(i){var o=qn("object"==typeof e?e:{},i,r,t);return o._raw=e,o}}return null}function qn(e,t,n,r){var i={},o=he(e,Wn,{},i),a={},s=Ut(i,r,a);return o.isFetching=!1,o.latestFetchId="",o.fetchRange=null,o.publicId=String(e.id||""),o.sourceId=String(Zn++),o.sourceDefId=n,o.meta=t,o.ui=s,o.extendedProps=a,o}function Gn(e,t,n,r){switch(t.type){case"ADD_EVENT_SOURCES":return function(e,t,n,r){for(var i={},o=0,a=t;o<a.length;o++){var s=a[o];i[s.sourceId]=s}n&&(i=Jn(i,n,r));return Se({},e,i)}(e,t.sources,n?n.activeRange:null,r);case"REMOVE_EVENT_SOURCE":return i=e,o=t.sourceId,we(i,(function(e){return e.sourceId!==o}));case"PREV":case"NEXT":case"SET_DATE":case"SET_VIEW_TYPE":return n?Jn(e,n.activeRange,r):e;case"FETCH_EVENT_SOURCES":case"CHANGE_TIMEZONE":return Kn(e,t.sourceIds?Ce(t.sourceIds):function(e,t){return we(e,(function(e){return jn(e,t)}))}(e,r),n?n.activeRange:null,r);case"RECEIVE_EVENTS":case"RECEIVE_EVENT_ERROR":return function(e,t,n,r){var i,o=e[t];if(o&&n===o.latestFetchId)return Se({},e,((i={})[t]=Se({},o,{isFetching:!1,fetchRange:r}),i));return e}(e,t.sourceId,t.fetchId,t.fetchRange);case"REMOVE_ALL_EVENT_SOURCES":return{};default:return e}var i,o}var Xn=0;function Jn(e,t,n){return Kn(e,we(e,(function(e){return function(e,t,n){return jn(e,n)?!n.opt("lazyFetching")||!e.fetchRange||e.isFetching||t.start<e.fetchRange.start||t.end>e.fetchRange.end:!e.latestFetchId}(e,t,n)})),t,n)}function Kn(e,t,n,r){var i={};for(var o in e){var a=e[o];t[o]?i[o]=Qn(a,n,r):i[o]=a}return i}function Qn(e,t,n){var r=n.pluginSystem.hooks.eventSourceDefs[e.sourceDefId],i=String(Xn++);return r.fetch({eventSource:e,calendar:n,range:t},(function(r){var o,a,s=r.rawEvents,u=n.opt("eventSourceSuccess");e.success&&(a=e.success(s,r.xhr)),u&&(o=u(s,r.xhr)),s=a||o||s,n.dispatch({type:"RECEIVE_EVENTS",sourceId:e.sourceId,fetchId:i,fetchRange:t,rawEvents:s})}),(function(r){var o=n.opt("eventSourceFailure");console.warn(r.message,r),e.failure&&e.failure(r),o&&o(r),n.dispatch({type:"RECEIVE_EVENT_ERROR",sourceId:e.sourceId,fetchId:i,fetchRange:t,error:r})})),Se({},e,{isFetching:!0,latestFetchId:i})}var $n=function(){function e(e,t){this.viewSpec=e,this.options=e.options,this.dateEnv=t.dateEnv,this.calendar=t,this.initHiddenDays()}return e.prototype.buildPrev=function(e,t){var n=this.dateEnv,r=n.subtract(n.startOf(t,e.currentRangeUnit),e.dateIncrement);return this.build(r,-1)},e.prototype.buildNext=function(e,t){var n=this.dateEnv,r=n.add(n.startOf(t,e.currentRangeUnit),e.dateIncrement);return this.build(r,1)},e.prototype.build=function(e,t,n){var r;void 0===n&&(n=!1);var i,o,a,s,u,l,c,d,f;return r=this.buildValidRange(),r=this.trimHiddenDays(r),n&&(d=e,e=null!=(f=r).start&&d<f.start?f.start:null!=f.end&&d>=f.end?new Date(f.end.valueOf()-1):d),a=this.buildCurrentRangeInfo(e,t),s=/^(year|month|week|day)$/.test(a.unit),u=this.buildRenderRange(this.trimHiddenDays(a.range),a.unit,s),l=u=this.trimHiddenDays(u),this.options.showNonCurrentDates||(l=Ve(l,a.range)),i=J(this.options.minTime),o=J(this.options.maxTime),l=Ve(l=this.adjustActiveRange(l,i,o),r),c=Fe(a.range,r),{validRange:r,currentRange:a.range,currentRangeUnit:a.unit,isRangeAllDay:s,activeRange:l,renderRange:u,minTime:i,maxTime:o,isValid:c,dateIncrement:this.buildDateIncrement(a.duration)}},e.prototype.buildValidRange=function(){return this.getRangeOption("validRange",this.calendar.getNow())||{start:null,end:null}},e.prototype.buildCurrentRangeInfo=function(e,t){var n,r=this.viewSpec,i=this.dateEnv,o=null,a=null,s=null;return r.duration?(o=r.duration,a=r.durationUnit,s=this.buildRangeFromDuration(e,t,o,a)):(n=this.options.dayCount)?(a="day",s=this.buildRangeFromDayCount(e,t,n)):(s=this.buildCustomVisibleRange(e))?a=i.greatestWholeUnit(s.start,s.end).unit:(a=ne(o=this.getFallbackDuration()).unit,s=this.buildRangeFromDuration(e,t,o,a)),{duration:o,unit:a,range:s}},e.prototype.getFallbackDuration=function(){return J({day:1})},e.prototype.adjustActiveRange=function(e,t,n){var r=this.dateEnv,i=e.start,o=e.end;return this.viewSpec.class.prototype.usesMinMaxTime&&(ee(t)<0&&(i=B(i),i=r.add(i,t)),ee(n)>1&&(o=x(o=B(o),-1),o=r.add(o,n))),{start:i,end:o}},e.prototype.buildRangeFromDuration=function(e,t,n,r){var i,o,a,s,u,l=this.dateEnv,c=this.options.dateAlignment;function d(){a=l.startOf(e,c),s=l.add(a,n),u={start:a,end:s}}return c||((i=this.options.dateIncrement)?(o=J(i),c=te(o)<te(n)?ne(o,!Q(i)).unit:r):c=r),ee(n)<=1&&this.isHiddenDay(a)&&(a=B(a=this.skipHiddenDays(a,t))),d(),this.trimHiddenDays(u)||(e=this.skipHiddenDays(e,t),d()),u},e.prototype.buildRangeFromDayCount=function(e,t,n){var r,i=this.dateEnv,o=this.options.dateAlignment,a=0,s=e;o&&(s=i.startOf(s,o)),s=B(s),r=s=this.skipHiddenDays(s,t);do{r=x(r,1),this.isHiddenDay(r)||a++}while(a<n);return{start:s,end:r}},e.prototype.buildCustomVisibleRange=function(e){var t=this.dateEnv,n=this.getRangeOption("visibleRange",t.toDate(e));return!n||null!=n.start&&null!=n.end?n:null},e.prototype.buildRenderRange=function(e,t,n){return e},e.prototype.buildDateIncrement=function(e){var t,n=this.options.dateIncrement;return n?J(n):(t=this.options.dateAlignment)?J(1,t):e||J({days:1})},e.prototype.getRangeOption=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=this.options[e];return"function"==typeof r&&(r=r.apply(null,t)),r&&(r=ze(r,this.dateEnv)),r&&(r=ge(r)),r},e.prototype.initHiddenDays=function(){var e,t=this.options.hiddenDays||[],n=[],r=0;for(!1===this.options.weekends&&t.push(0,6),e=0;e<7;e++)(n[e]=-1!==t.indexOf(e))||r++;if(!r)throw new Error("invalid hiddenDays");this.isHiddenDayHash=n},e.prototype.trimHiddenDays=function(e){var t=e.start,n=e.end;return t&&(t=this.skipHiddenDays(t)),n&&(n=this.skipHiddenDays(n,-1,!0)),null==t||null==n||t<n?{start:t,end:n}:null},e.prototype.isHiddenDay=function(e){return e instanceof Date&&(e=e.getUTCDay()),this.isHiddenDayHash[e]},e.prototype.skipHiddenDays=function(e,t,n){for(void 0===t&&(t=1),void 0===n&&(n=!1);this.isHiddenDayHash[(e.getUTCDay()+(n?t:0)+7)%7];)e=x(e,t);return e},e}();function er(e,t,n){for(var r=function(e,t){switch(t.type){case"SET_VIEW_TYPE":return t.viewType;default:return e}}(e.viewType,t),i=function(e,t,n,r,i){var o;switch(t.type){case"PREV":o=i.dateProfileGenerators[r].buildPrev(e,n);break;case"NEXT":o=i.dateProfileGenerators[r].buildNext(e,n);break;case"SET_DATE":e.activeRange&&Ze(e.currentRange,t.dateMarker)||(o=i.dateProfileGenerators[r].build(t.dateMarker,void 0,!0));break;case"SET_VIEW_TYPE":var a=i.dateProfileGenerators[r];if(!a)throw new Error(r?'The FullCalendar view "'+r+'" does not exist. Make sure your plugins are loaded correctly.':"No available FullCalendar view plugins.");o=a.build(t.dateMarker||n,void 0,!0)}return!o||!o.isValid||e&&(s=e,u=o,Ae(s.validRange,u.validRange)&&Ae(s.activeRange,u.activeRange)&&Ae(s.renderRange,u.renderRange)&&$(s.minTime,u.minTime)&&$(s.maxTime,u.maxTime))?e:o;var s,u}(e.dateProfile,t,e.currentDate,r,n),o=Gn(e.eventSources,t,i,n),a=Se({},e,{viewType:r,dateProfile:i,currentDate:tr(e.currentDate,t,i),eventSources:o,eventStore:Dt(e.eventStore,t,o,i,n),dateSelection:nr(e.dateSelection,t,n),eventSelection:rr(e.eventSelection,t),eventDrag:ir(e.eventDrag,t,o,n),eventResize:or(e.eventResize,t,o,n),eventSourceLoadingLevel:ar(o),loadingLevel:ar(o)}),s=0,u=n.pluginSystem.hooks.reducers;s<u.length;s++){a=(0,u[s])(a,t,n)}return a}function tr(e,t,n){switch(t.type){case"PREV":case"NEXT":return Ze(n.currentRange,e)?e:n.currentRange.start;case"SET_DATE":case"SET_VIEW_TYPE":var r=t.dateMarker||e;return n.activeRange&&!Ze(n.activeRange,r)?n.currentRange.start:r;default:return e}}function nr(e,t,n){switch(t.type){case"SELECT_DATES":return t.selection;case"UNSELECT_DATES":return null;default:return e}}function rr(e,t){switch(t.type){case"SELECT_EVENT":return t.eventInstanceId;case"UNSELECT_EVENT":return"";default:return e}}function ir(e,t,n,r){switch(t.type){case"SET_EVENT_DRAG":var i=t.state;return{affectedEvents:i.affectedEvents,mutatedEvents:i.mutatedEvents,isEvent:i.isEvent,origSeg:i.origSeg};case"UNSET_EVENT_DRAG":return null;default:return e}}function or(e,t,n,r){switch(t.type){case"SET_EVENT_RESIZE":var i=t.state;return{affectedEvents:i.affectedEvents,mutatedEvents:i.mutatedEvents,isEvent:i.isEvent,origSeg:i.origSeg};case"UNSET_EVENT_RESIZE":return null;default:return e}}function ar(e){var t=0;for(var n in e)e[n].isFetching&&t++;return t}var sr={start:null,end:null,allDay:Boolean};function ur(e,t,n){var r=function(e,t){var n={},r=he(e,sr,{},n),i=r.start?t.createMarkerMeta(r.start):null,o=r.end?t.createMarkerMeta(r.end):null,a=r.allDay;null==a&&(a=i&&i.isTimeUnspecified&&(!o||o.isTimeUnspecified));return n.range={start:i?i.marker:null,end:o?o.marker:null},n.allDay=a,n}(e,t),i=r.range;if(!i.start)return null;if(!i.end){if(null==n)return null;i.end=t.add(i.start,n)}return r}function lr(e,t,n){var r=jt({editable:!1},"",e.allDay,!0,n);return{def:r,ui:gt(r,t),instance:Yt(r.defId,e.range),range:e.range,isStart:!0,isEnd:!0}}function cr(e,t,n,r){if(t[e])return t[e];var i=function(e,t,n,r){var i=n[e],o=r[e],a=function(e){return i&&null!==i[e]?i[e]:o&&null!==o[e]?o[e]:null},s=a("class"),u=a("superType");!u&&s&&(u=dr(s,r)||dr(s,n));var l=null;if(u){if(u===e)throw new Error("Can't have a custom view type that references itself");l=cr(u,t,n,r)}!s&&l&&(s=l.class);if(!s)return null;return{type:e,class:s,defaults:Se({},l?l.defaults:{},i?i.options:{}),overrides:Se({},l?l.overrides:{},o?o.options:{})}}(e,t,n,r);return i&&(t[e]=i),i}function dr(e,t){var n=Object.getPrototypeOf(e.prototype);for(var r in t){var i=t[r];if(i.class&&i.class.prototype===n)return r}return""}function fr(e){return Re(e,hr)}var pr={type:String,class:null};function hr(e){"function"==typeof e&&(e={class:e});var t={},n=he(e,pr,{},t);return{superType:n.type,class:n.class,options:t}}function vr(e,t){var n=fr(e),r=fr(t.overrides.views);return Re(function(e,t){var n,r={};for(n in e)cr(n,r,e,t);for(n in t)cr(n,r,e,t);return r}(n,r),(function(e){return function(e,t,n){var r=e.overrides.duration||e.defaults.duration||n.dynamicOverrides.duration||n.overrides.duration,i=null,o="",a="",s={};if(r&&(i=J(r))){var u=ne(i,!Q(r));o=u.unit,1===u.value&&(a=o,s=t[o]?t[o].options:{})}var l=function(t){var n=t.buttonText||{},r=e.defaults.buttonTextKey;return null!=r&&null!=n[r]?n[r]:null!=n[e.type]?n[e.type]:null!=n[a]?n[a]:void 0};return{type:e.type,class:e.class,duration:i,durationUnit:o,singleUnit:a,options:Se({},Mn,e.defaults,n.dirDefaults,n.localeDefaults,n.overrides,s,e.overrides,n.dynamicOverrides),buttonTextOverride:l(n.dynamicOverrides)||l(n.overrides)||e.overrides.buttonText,buttonTextDefault:l(n.localeDefaults)||l(n.dirDefaults)||e.defaults.buttonText||l(Mn)||e.type}}(e,r,t)}))}var gr=function(e){function t(t){var n=e.call(this)||this;return n._renderLayout=Xt(n.renderLayout,n.unrenderLayout),n._updateTitle=Xt(n.updateTitle,null,[n._renderLayout]),n._updateActiveButton=Xt(n.updateActiveButton,null,[n._renderLayout]),n._updateToday=Xt(n.updateToday,null,[n._renderLayout]),n._updatePrev=Xt(n.updatePrev,null,[n._renderLayout]),n._updateNext=Xt(n.updateNext,null,[n._renderLayout]),n.el=r("div",{className:"fc-toolbar "+t}),n}return Ee(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),this._renderLayout.unrender(),c(this.el)},t.prototype.render=function(e){this._renderLayout(e.layout),this._updateTitle(e.title),this._updateActiveButton(e.activeButton),this._updateToday(e.isTodayEnabled),this._updatePrev(e.isPrevEnabled),this._updateNext(e.isNextEnabled)},t.prototype.renderLayout=function(e){var t=this.el;this.viewsWithButtons=[],s(t,this.renderSection("left",e.left)),s(t,this.renderSection("center",e.center)),s(t,this.renderSection("right",e.right))},t.prototype.unrenderLayout=function(){this.el.innerHTML=""},t.prototype.renderSection=function(e,t){var n=this,o=this.context,a=o.theme,u=o.calendar,l=u.optionsManager,c=u.viewSpecs,d=r("div",{className:"fc-"+e}),f=l.computed.customButtons||{},p=l.overrides.buttonText||{},h=l.computed.buttonText||{};return t&&t.split(" ").forEach((function(e,t){var r,o=[],l=!0;if(e.split(",").forEach((function(e,t){var r,s,d,v,g,y,m,E,S;"title"===e?(o.push(i("<h2>&nbsp;</h2>")),l=!1):((r=f[e])?(d=function(e){r.click&&r.click.call(E,e)},(v=a.getCustomButtonIconClass(r))||(v=a.getIconClass(e))||(g=r.text)):(s=c[e])?(n.viewsWithButtons.push(e),d=function(){u.changeView(e)},(g=s.buttonTextOverride)||(v=a.getIconClass(e))||(g=s.buttonTextDefault)):u[e]&&(d=function(){u[e]()},(g=p[e])||(v=a.getIconClass(e))||(g=h[e])),d&&(m=["fc-"+e+"-button",a.getClass("button")],g?(y=Pt(g),S=""):v&&(y="<span class='"+v+"'></span>",S=' aria-label="'+e+'"'),(E=i('<button type="button" class="'+m.join(" ")+'"'+S+">"+y+"</button>")).addEventListener("click",d),o.push(E)))})),o.length>1){r=document.createElement("div");var v=a.getClass("buttonGroup");l&&v&&r.classList.add(v),s(r,o),d.appendChild(r)}else s(d,o)})),d},t.prototype.updateToday=function(e){this.toggleButtonEnabled("today",e)},t.prototype.updatePrev=function(e){this.toggleButtonEnabled("prev",e)},t.prototype.updateNext=function(e){this.toggleButtonEnabled("next",e)},t.prototype.updateTitle=function(e){v(this.el,"h2").forEach((function(t){t.innerText=e}))},t.prototype.updateActiveButton=function(e){var t=this.context.theme.getClass("buttonActive");v(this.el,"button").forEach((function(n){e&&n.classList.contains("fc-"+e+"-button")?n.classList.add(t):n.classList.remove(t)}))},t.prototype.toggleButtonEnabled=function(e,t){v(this.el,".fc-"+e+"-button").forEach((function(e){e.disabled=!t}))},t}(vn),yr=function(e){function t(t){var n=e.call(this)||this;return n.elClassNames=[],n.renderSkeleton=Xt(n._renderSkeleton,n._unrenderSkeleton),n.renderToolbars=Xt(n._renderToolbars,n._unrenderToolbars,[n.renderSkeleton]),n.buildComponentContext=Ye(Er),n.buildViewPropTransformers=Ye(Sr),n.el=t,n.computeTitle=Ye(mr),n.parseBusinessHours=Ye((function(e){return Gt(e,n.context.calendar)})),n}return Ee(t,e),t.prototype.render=function(e,t){this.freezeHeight();var n=this.computeTitle(e.dateProfile,e.viewSpec.options);this.renderSkeleton(t),this.renderToolbars(e.viewSpec,e.dateProfile,e.currentDate,n),this.renderView(e,n),this.updateSize(),this.thawHeight()},t.prototype.destroy=function(){this.header&&this.header.destroy(),this.footer&&this.footer.destroy(),this.renderSkeleton.unrender(),e.prototype.destroy.call(this)},t.prototype._renderSkeleton=function(e){this.updateElClassNames(e),u(this.el,this.contentEl=r("div",{className:"fc-view-container"}));for(var t=e.calendar,n=0,i=t.pluginSystem.hooks.viewContainerModifiers;n<i.length;n++){(0,i[n])(this.contentEl,t)}},t.prototype._unrenderSkeleton=function(){this.view&&(this.savedScroll=this.view.queryScroll(),this.view.destroy(),this.view=null),c(this.contentEl),this.removeElClassNames()},t.prototype.removeElClassNames=function(){for(var e=this.el.classList,t=0,n=this.elClassNames;t<n.length;t++){var r=n[t];e.remove(r)}this.elClassNames=[]},t.prototype.updateElClassNames=function(e){this.removeElClassNames();var t=e.theme,n=e.options;this.elClassNames=["fc","fc-"+n.dir,t.getClass("widget")];for(var r=this.el.classList,i=0,o=this.elClassNames;i<o.length;i++){var a=o[i];r.add(a)}},t.prototype._renderToolbars=function(e,t,n,r){var i=this.context,o=this.header,a=this.footer,l=i.options,c=i.calendar,d=l.header,f=l.footer,p=this.props.dateProfileGenerator,h=c.getNow(),v=p.build(h),g=p.buildPrev(t,n),y=p.buildNext(t,n),m={title:r,activeButton:e.type,isTodayEnabled:v.isValid&&!Ze(t.currentRange,h),isPrevEnabled:g.isValid,isNextEnabled:y.isValid};d?(o||(o=this.header=new gr("fc-header-toolbar"),u(this.el,o.el)),o.receiveProps(Se({layout:d},m),i)):o&&(o.destroy(),o=this.header=null),f?(a||(a=this.footer=new gr("fc-footer-toolbar"),s(this.el,a.el)),a.receiveProps(Se({layout:f},m),i)):a&&(a.destroy(),a=this.footer=null)},t.prototype._unrenderToolbars=function(){this.header&&(this.header.destroy(),this.header=null),this.footer&&(this.footer.destroy(),this.footer=null)},t.prototype.renderView=function(e,t){var n=this.view,r=this.context,i=r.calendar,o=r.options,a=e.viewSpec,s=e.dateProfileGenerator;n&&n.viewSpec===a||(n&&n.destroy(),n=this.view=new a.class(a,this.contentEl),this.savedScroll&&(n.addScroll(this.savedScroll,!0),this.savedScroll=null)),n.title=t;for(var u={dateProfileGenerator:s,dateProfile:e.dateProfile,businessHours:this.parseBusinessHours(a.options.businessHours),eventStore:e.eventStore,eventUiBases:e.eventUiBases,dateSelection:e.dateSelection,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize},l=0,c=this.buildViewPropTransformers(i.pluginSystem.hooks.viewPropsTransformers);l<c.length;l++){var d=c[l];Se(u,d.transform(u,a,e,o))}n.receiveProps(u,this.buildComponentContext(this.context,a,n))},t.prototype.updateSize=function(e){void 0===e&&(e=!1);var t=this.view;t&&((e||null==this.isHeightAuto)&&this.computeHeightVars(),t.updateSize(e,this.viewHeight,this.isHeightAuto),t.updateNowIndicator(),t.popScroll(e))},t.prototype.computeHeightVars=function(){var e=this.context.calendar,t=e.opt("height"),n=e.opt("contentHeight");if(this.isHeightAuto="auto"===t||"auto"===n,"number"==typeof n)this.viewHeight=n;else if("function"==typeof n)this.viewHeight=n();else if("number"==typeof t)this.viewHeight=t-this.queryToolbarsHeight();else if("function"==typeof t)this.viewHeight=t()-this.queryToolbarsHeight();else if("parent"===t){var r=this.el.parentNode;this.viewHeight=r.getBoundingClientRect().height-this.queryToolbarsHeight()}else this.viewHeight=Math.round(this.contentEl.getBoundingClientRect().width/Math.max(e.opt("aspectRatio"),.5))},t.prototype.queryToolbarsHeight=function(){var e=0;return this.header&&(e+=C(this.header.el)),this.footer&&(e+=C(this.footer.el)),e},t.prototype.freezeHeight=function(){y(this.el,{height:this.el.getBoundingClientRect().height,overflow:"hidden"})},t.prototype.thawHeight=function(){y(this.el,{height:"",overflow:""})},t}(vn);function mr(e,t){var n;return n=/^(year|month)$/.test(e.currentRangeUnit)?e.currentRange:e.activeRange,this.context.dateEnv.formatRange(n.start,n.end,ot(t.titleFormat||function(e){var t=e.currentRangeUnit;if("year"===t)return{year:"numeric"};if("month"===t)return{year:"numeric",month:"long"};var n=L(e.currentRange.start,e.currentRange.end);return null!==n&&n>1?{year:"numeric",month:"short",day:"numeric"}:{year:"numeric",month:"long",day:"numeric"}}(e),t.titleRangeSeparator),{isEndExclusive:e.isRangeAllDay})}function Er(e,t,n){return e.extend(t.options,n)}function Sr(e){return e.map((function(e){return new e}))}var br=function(){function e(e){this.component=e.component}return e.prototype.destroy=function(){},e}();var Dr={},Tr=function(e){function t(t){var n=e.call(this,t)||this;n.handleSegClick=function(e,t){var r=n.component,i=r.context,o=i.calendar,a=i.view,s=ht(t);if(s&&r.isValidSegDownEl(e.target)){var u=p(e.target,".fc-has-url"),l=u?u.querySelector("a[href]").href:"";o.publiclyTrigger("eventClick",[{el:t,event:new ct(r.context.calendar,s.eventRange.def,s.eventRange.instance),jsEvent:e,view:a}]),l&&!e.defaultPrevented&&(window.location.href=l)}};var r=t.component;return n.destroy=_(r.el,"click",r.fgSegSelector+","+r.bgSegSelector,n.handleSegClick),n}return Ee(t,e),t}(br),wr=function(e){function t(t){var n=e.call(this,t)||this;n.handleEventElRemove=function(e){e===n.currentSegEl&&n.handleSegLeave(null,n.currentSegEl)},n.handleSegEnter=function(e,t){ht(t)&&(t.classList.add("fc-allow-mouse-resize"),n.currentSegEl=t,n.triggerEvent("eventMouseEnter",e,t))},n.handleSegLeave=function(e,t){n.currentSegEl&&(t.classList.remove("fc-allow-mouse-resize"),n.currentSegEl=null,n.triggerEvent("eventMouseLeave",e,t))};var r,i,o,a,s,u=t.component;return n.removeHoverListeners=(r=u.el,i=u.fgSegSelector+","+u.bgSegSelector,o=n.handleSegEnter,a=n.handleSegLeave,_(r,"mouseover",i,(function(e,t){if(t!==s){s=t,o(e,t);var n=function(e){s=null,a(e,t),t.removeEventListener("mouseleave",n)};t.addEventListener("mouseleave",n)}}))),u.context.calendar.on("eventElRemove",n.handleEventElRemove),n}return Ee(t,e),t.prototype.destroy=function(){this.removeHoverListeners(),this.component.context.calendar.off("eventElRemove",this.handleEventElRemove)},t.prototype.triggerEvent=function(e,t,n){var r=this.component,i=r.context,o=i.calendar,a=i.view,s=ht(n);t&&!r.isValidSegDownEl(t.target)||o.publiclyTrigger(e,[{el:n,event:new ct(o,s.eventRange.def,s.eventRange.instance),jsEvent:t,view:a}])},t}(br),Rr=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Ee(t,e),t}(fn);Rr.prototype.classes={widget:"fc-unthemed",widgetHeader:"fc-widget-header",widgetContent:"fc-widget-content",buttonGroup:"fc-button-group",button:"fc-button fc-button-primary",buttonActive:"fc-button-active",popoverHeader:"fc-widget-header",popoverContent:"fc-widget-content",headerRow:"fc-widget-header",dayRow:"fc-widget-content",listView:"fc-widget-content"},Rr.prototype.baseIconClass="fc-icon",Rr.prototype.iconClasses={close:"fc-icon-x",prev:"fc-icon-chevron-left",next:"fc-icon-chevron-right",prevYear:"fc-icon-chevrons-left",nextYear:"fc-icon-chevrons-right"},Rr.prototype.iconOverrideOption="buttonIcons",Rr.prototype.iconOverrideCustomButtonOption="icon",Rr.prototype.iconOverridePrefix="fc-icon-";var Cr=function(){function e(e,t){var n=this;this.buildComponentContext=Ye(Ir),this.parseRawLocales=Ye(xn),this.buildLocale=Ye(Nn),this.buildDateEnv=Ye(Mr),this.buildTheme=Ye(kr),this.buildEventUiSingleBase=Ye(this._buildEventUiSingleBase),this.buildSelectionConfig=Ye(this._buildSelectionConfig),this.buildEventUiBySource=qe(Or,Me),this.buildEventUiBases=Ye(Pr),this.interactionsStore={},this.actionQueue=[],this.isReducing=!1,this.needsRerender=!1,this.isRendering=!1,this.renderingPauseDepth=0,this.buildDelayedRerender=Ye(_r),this.afterSizingTriggers={},this.isViewUpdated=!1,this.isDatesUpdated=!1,this.isEventsUpdated=!1,this.el=e,this.optionsManager=new Un(t||{}),this.pluginSystem=new En,this.addPluginInputs(this.optionsManager.computed.plugins||[]),this.handleOptions(this.optionsManager.computed),this.publiclyTrigger("_init"),this.hydrate(),this.calendarInteractions=this.pluginSystem.hooks.calendarInteractions.map((function(e){return new e(n)}))}return e.prototype.addPluginInputs=function(e){for(var t=function(e){for(var t=[],n=0,r=e;n<r.length;n++){var i=r[n];if("string"==typeof i){var o="FullCalendar"+ue(i);window[o]?t.push(window[o].default):console.warn("Plugin file not loaded for "+i)}else t.push(i)}return On.concat(t)}(e),n=0,r=t;n<r.length;n++){var i=r[n];this.pluginSystem.add(i)}},Object.defineProperty(e.prototype,"view",{get:function(){return this.component?this.component.view:null},enumerable:!0,configurable:!0}),e.prototype.render=function(){this.component?this.requestRerender():(this.component=new yr(this.el),this.renderableEventStore={defs:{},instances:{}},this.bindHandlers(),this.executeRender())},e.prototype.destroy=function(){if(this.component){this.unbindHandlers(),this.component.destroy(),this.component=null;for(var e=0,t=this.calendarInteractions;e<t.length;e++){t[e].destroy()}this.publiclyTrigger("_destroyed")}},e.prototype.bindHandlers=function(){var e=this;this.removeNavLinkListener=_(this.el,"click","a[data-goto]",(function(t,n){var r=n.getAttribute("data-goto");r=r?JSON.parse(r):{};var i=e.dateEnv,o=i.createMarker(r.date),a=r.type,s=e.viewOpt("navLink"+ue(a)+"Click");"function"==typeof s?s(i.toDate(o),t):("string"==typeof s&&(a=s),e.zoomTo(o,a))})),this.opt("handleWindowResize")&&window.addEventListener("resize",this.windowResizeProxy=pe(this.windowResize.bind(this),this.opt("windowResizeDelay")))},e.prototype.unbindHandlers=function(){this.removeNavLinkListener(),this.windowResizeProxy&&(window.removeEventListener("resize",this.windowResizeProxy),this.windowResizeProxy=null)},e.prototype.hydrate=function(){var e=this;this.state=this.buildInitialState();var t=this.opt("eventSources")||[],n=this.opt("events"),r=[];n&&t.unshift(n);for(var i=0,o=t;i<o.length;i++){var a=Yn(o[i],this);a&&r.push(a)}this.batchRendering((function(){e.dispatch({type:"INIT"}),e.dispatch({type:"ADD_EVENT_SOURCES",sources:r}),e.dispatch({type:"SET_VIEW_TYPE",viewType:e.opt("defaultView")||e.pluginSystem.hooks.defaultView})}))},e.prototype.buildInitialState=function(){return{viewType:null,loadingLevel:0,eventSourceLoadingLevel:0,currentDate:this.getInitialDate(),dateProfile:null,eventSources:{},eventStore:{defs:{},instances:{}},dateSelection:null,eventSelection:"",eventDrag:null,eventResize:null}},e.prototype.dispatch=function(e){if(this.actionQueue.push(e),!this.isReducing){this.isReducing=!0;for(var t=this.state;this.actionQueue.length;)this.state=this.reduce(this.state,this.actionQueue.shift(),this);var n=this.state;this.isReducing=!1,!t.loadingLevel&&n.loadingLevel?this.publiclyTrigger("loading",[!0]):t.loadingLevel&&!n.loadingLevel&&this.publiclyTrigger("loading",[!1]);var r=this.component&&this.component.view;t.eventStore!==n.eventStore&&t.eventStore&&(this.isEventsUpdated=!0),t.dateProfile!==n.dateProfile&&(t.dateProfile&&r&&this.publiclyTrigger("datesDestroy",[{view:r,el:r.el}]),this.isDatesUpdated=!0),t.viewType!==n.viewType&&(t.viewType&&r&&this.publiclyTrigger("viewSkeletonDestroy",[{view:r,el:r.el}]),this.isViewUpdated=!0),this.requestRerender()}},e.prototype.reduce=function(e,t,n){return er(e,t,n)},e.prototype.requestRerender=function(){this.needsRerender=!0,this.delayedRerender()},e.prototype.tryRerender=function(){this.component&&this.needsRerender&&!this.renderingPauseDepth&&!this.isRendering&&this.executeRender()},e.prototype.batchRendering=function(e){this.renderingPauseDepth++,e(),this.renderingPauseDepth--,this.needsRerender&&this.requestRerender()},e.prototype.executeRender=function(){this.needsRerender=!1,this.isRendering=!0,this.renderComponent(),this.isRendering=!1,this.needsRerender&&this.delayedRerender()},e.prototype.renderComponent=function(){var e=this.state,t=this.component,n=e.viewType,r=this.viewSpecs[n];if(!r)throw new Error('View type "'+n+'" is not valid');var i=this.renderableEventStore=e.eventSourceLoadingLevel&&!this.opt("progressiveEventRendering")?this.renderableEventStore:e.eventStore,o=this.buildEventUiSingleBase(r.options),a=this.buildEventUiBySource(e.eventSources),s=this.eventUiBases=this.buildEventUiBases(i.defs,o,a);t.receiveProps(Se({},e,{viewSpec:r,dateProfileGenerator:this.dateProfileGenerators[n],dateProfile:e.dateProfile,eventStore:i,eventUiBases:s,dateSelection:e.dateSelection,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize}),this.buildComponentContext(this.theme,this.dateEnv,this.optionsManager.computed)),this.isViewUpdated&&(this.isViewUpdated=!1,this.publiclyTrigger("viewSkeletonRender",[{view:t.view,el:t.view.el}])),this.isDatesUpdated&&(this.isDatesUpdated=!1,this.publiclyTrigger("datesRender",[{view:t.view,el:t.view.el}])),this.isEventsUpdated&&(this.isEventsUpdated=!1),this.releaseAfterSizingTriggers()},e.prototype.setOption=function(e,t){var n;this.mutateOptions(((n={})[e]=t,n),[],!0)},e.prototype.getOption=function(e){return this.optionsManager.computed[e]},e.prototype.opt=function(e){return this.optionsManager.computed[e]},e.prototype.viewOpt=function(e){return this.viewOpts()[e]},e.prototype.viewOpts=function(){return this.viewSpecs[this.state.viewType].options},e.prototype.mutateOptions=function(e,t,n,r){var i=this,o=this.pluginSystem.hooks.optionChangeHandlers,a={},s={},u=this.dateEnv,l=!1,c=!1,d=Boolean(t.length);for(var f in e)o[f]?s[f]=e[f]:a[f]=e[f];for(var p in a)/^(height|contentHeight|aspectRatio)$/.test(p)?c=!0:/^(defaultDate|defaultView)$/.test(p)||(d=!0,"timeZone"===p&&(l=!0));this.optionsManager.mutate(a,t,n),d&&this.handleOptions(this.optionsManager.computed),this.batchRendering((function(){if(d?(l&&i.dispatch({type:"CHANGE_TIMEZONE",oldDateEnv:u}),i.dispatch({type:"SET_VIEW_TYPE",viewType:i.state.viewType})):c&&i.updateSize(),r)for(var e in s)o[e](s[e],i,r)}))},e.prototype.handleOptions=function(e){var t=this,n=this.pluginSystem.hooks;this.defaultAllDayEventDuration=J(e.defaultAllDayEventDuration),this.defaultTimedEventDuration=J(e.defaultTimedEventDuration),this.delayedRerender=this.buildDelayedRerender(e.rerenderDelay),this.theme=this.buildTheme(e);var r=this.parseRawLocales(e.locales);this.availableRawLocales=r.map;var i=this.buildLocale(e.locale||r.defaultCode,r.map);this.dateEnv=this.buildDateEnv(i,e.timeZone,n.namedTimeZonedImpl,e.firstDay,e.weekNumberCalculation,e.weekLabel,n.cmdFormatter),this.selectionConfig=this.buildSelectionConfig(e),this.viewSpecs=vr(n.views,this.optionsManager),this.dateProfileGenerators=Re(this.viewSpecs,(function(e){return new e.class.prototype.dateProfileGeneratorClass(e,t)}))},e.prototype.getAvailableLocaleCodes=function(){return Object.keys(this.availableRawLocales)},e.prototype._buildSelectionConfig=function(e){return zt("select",e,this)},e.prototype._buildEventUiSingleBase=function(e){return e.editable&&(e=Se({},e,{eventEditable:!0})),zt("event",e,this)},e.prototype.hasPublicHandlers=function(e){return this.hasHandlers(e)||this.opt(e)},e.prototype.publiclyTrigger=function(e,t){var n=this.opt(e);if(this.triggerWith(e,this,t),n)return n.apply(this,t)},e.prototype.publiclyTriggerAfterSizing=function(e,t){var n=this.afterSizingTriggers;(n[e]||(n[e]=[])).push(t)},e.prototype.releaseAfterSizingTriggers=function(){var e=this.afterSizingTriggers;for(var t in e)for(var n=0,r=e[t];n<r.length;n++){var i=r[n];this.publiclyTrigger(t,i)}this.afterSizingTriggers={}},e.prototype.isValidViewType=function(e){return Boolean(this.viewSpecs[e])},e.prototype.changeView=function(e,t){var n=null;t&&(t.start&&t.end?(this.optionsManager.mutate({visibleRange:t},[]),this.handleOptions(this.optionsManager.computed)):n=this.dateEnv.createMarker(t)),this.unselect(),this.dispatch({type:"SET_VIEW_TYPE",viewType:e,dateMarker:n})},e.prototype.zoomTo=function(e,t){var n;t=t||"day",n=this.viewSpecs[t]||this.getUnitViewSpec(t),this.unselect(),n?this.dispatch({type:"SET_VIEW_TYPE",viewType:n.type,dateMarker:e}):this.dispatch({type:"SET_DATE",dateMarker:e})},e.prototype.getUnitViewSpec=function(e){var t,n,r=this.component,i=[];for(var o in r.header&&i.push.apply(i,r.header.viewsWithButtons),r.footer&&i.push.apply(i,r.footer.viewsWithButtons),this.viewSpecs)i.push(o);for(t=0;t<i.length;t++)if((n=this.viewSpecs[i[t]])&&n.singleUnit===e)return n},e.prototype.getInitialDate=function(){var e=this.opt("defaultDate");return null!=e?this.dateEnv.createMarker(e):this.getNow()},e.prototype.prev=function(){this.unselect(),this.dispatch({type:"PREV"})},e.prototype.next=function(){this.unselect(),this.dispatch({type:"NEXT"})},e.prototype.prevYear=function(){this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.dateEnv.addYears(this.state.currentDate,-1)})},e.prototype.nextYear=function(){this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.dateEnv.addYears(this.state.currentDate,1)})},e.prototype.today=function(){this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.getNow()})},e.prototype.gotoDate=function(e){this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.dateEnv.createMarker(e)})},e.prototype.incrementDate=function(e){var t=J(e);t&&(this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.dateEnv.add(this.state.currentDate,t)}))},e.prototype.getDate=function(){return this.dateEnv.toDate(this.state.currentDate)},e.prototype.formatDate=function(e,t){var n=this.dateEnv;return n.format(n.createMarker(e),ot(t))},e.prototype.formatRange=function(e,t,n){var r=this.dateEnv;return r.formatRange(r.createMarker(e),r.createMarker(t),ot(n,this.opt("defaultRangeSeparator")),n)},e.prototype.formatIso=function(e,t){var n=this.dateEnv;return n.formatIso(n.createMarker(e),{omitTime:t})},e.prototype.windowResize=function(e){!this.isHandlingWindowResize&&this.component&&e.target===window&&(this.isHandlingWindowResize=!0,this.updateSize(),this.publiclyTrigger("windowResize",[this.view]),this.isHandlingWindowResize=!1)},e.prototype.updateSize=function(){this.component&&this.component.updateSize(!0)},e.prototype.registerInteractiveComponent=function(e,t){var n=function(e,t){return{component:e,el:t.el,useEventCenter:null==t.useEventCenter||t.useEventCenter}}(e,t),r=[Tr,wr].concat(this.pluginSystem.hooks.componentInteractions).map((function(e){return new e(n)}));this.interactionsStore[e.uid]=r,Dr[e.uid]=n},e.prototype.unregisterInteractiveComponent=function(e){for(var t=0,n=this.interactionsStore[e.uid];t<n.length;t++){n[t].destroy()}delete this.interactionsStore[e.uid],delete Dr[e.uid]},e.prototype.select=function(e,t){var n=ur(null==t?null!=e.start?e:{start:e,end:null}:{start:e,end:t},this.dateEnv,J({days:1}));n&&(this.dispatch({type:"SELECT_DATES",selection:n}),this.triggerDateSelect(n))},e.prototype.unselect=function(e){this.state.dateSelection&&(this.dispatch({type:"UNSELECT_DATES"}),this.triggerDateUnselect(e))},e.prototype.triggerDateSelect=function(e,t){var n=Se({},this.buildDateSpanApi(e),{jsEvent:t?t.origEvent:null,view:this.view});this.publiclyTrigger("select",[n])},e.prototype.triggerDateUnselect=function(e){this.publiclyTrigger("unselect",[{jsEvent:e?e.origEvent:null,view:this.view}])},e.prototype.triggerDateClick=function(e,t,n,r){var i=Se({},this.buildDatePointApi(e),{dayEl:t,jsEvent:r,view:n});this.publiclyTrigger("dateClick",[i])},e.prototype.buildDatePointApi=function(e){for(var t,n,r={},i=0,o=this.pluginSystem.hooks.datePointTransforms;i<o.length;i++){var a=o[i];Se(r,a(e,this))}return Se(r,(t=e,{date:(n=this.dateEnv).toDate(t.range.start),dateStr:n.formatIso(t.range.start,{omitTime:t.allDay}),allDay:t.allDay})),r},e.prototype.buildDateSpanApi=function(e){for(var t,n,r={},i=0,o=this.pluginSystem.hooks.dateSpanTransforms;i<o.length;i++){var a=o[i];Se(r,a(e,this))}return Se(r,(t=e,{start:(n=this.dateEnv).toDate(t.range.start),end:n.toDate(t.range.end),startStr:n.formatIso(t.range.start,{omitTime:t.allDay}),endStr:n.formatIso(t.range.end,{omitTime:t.allDay}),allDay:t.allDay})),r},e.prototype.getNow=function(){var e=this.opt("now");return"function"==typeof e&&(e=e()),null==e?this.dateEnv.createNowMarker():this.dateEnv.createMarker(e)},e.prototype.getDefaultEventEnd=function(e,t){var n=t;return e?(n=B(n),n=this.dateEnv.add(n,this.defaultAllDayEventDuration)):n=this.dateEnv.add(n,this.defaultTimedEventDuration),n},e.prototype.addEvent=function(e,t){if(e instanceof ct){var n=e._def,r=e._instance;return this.state.eventStore.defs[n.defId]||this.dispatch({type:"ADD_EVENTS",eventStore:_e({def:n,instance:r})}),e}var i;if(t instanceof lt)i=t.internalEventSource.sourceId;else if(null!=t){var o=this.getEventSourceById(t);if(!o)return console.warn('Could not find an event source with ID "'+t+'"'),null;i=o.internalEventSource.sourceId}var a=Zt(e,i,this);return a?(this.dispatch({type:"ADD_EVENTS",eventStore:_e(a)}),new ct(this,a.def,a.def.recurringDef?null:a.instance)):null},e.prototype.getEventById=function(e){var t=this.state.eventStore,n=t.defs,r=t.instances;for(var i in e=String(e),n){var o=n[i];if(o.publicId===e){if(o.recurringDef)return new ct(this,o,null);for(var a in r){var s=r[a];if(s.defId===o.defId)return new ct(this,o,s)}}}return null},e.prototype.getEvents=function(){var e=this.state.eventStore,t=e.defs,n=e.instances,r=[];for(var i in n){var o=n[i],a=t[o.defId];r.push(new ct(this,a,o))}return r},e.prototype.removeAllEvents=function(){this.dispatch({type:"REMOVE_ALL_EVENTS"})},e.prototype.rerenderEvents=function(){this.dispatch({type:"RESET_EVENTS"})},e.prototype.getEventSources=function(){var e=this.state.eventSources,t=[];for(var n in e)t.push(new lt(this,e[n]));return t},e.prototype.getEventSourceById=function(e){var t=this.state.eventSources;for(var n in e=String(e),t)if(t[n].publicId===e)return new lt(this,t[n]);return null},e.prototype.addEventSource=function(e){if(e instanceof lt)return this.state.eventSources[e.internalEventSource.sourceId]||this.dispatch({type:"ADD_EVENT_SOURCES",sources:[e.internalEventSource]}),e;var t=Yn(e,this);return t?(this.dispatch({type:"ADD_EVENT_SOURCES",sources:[t]}),new lt(this,t)):null},e.prototype.removeAllEventSources=function(){this.dispatch({type:"REMOVE_ALL_EVENT_SOURCES"})},e.prototype.refetchEvents=function(){this.dispatch({type:"FETCH_EVENT_SOURCES"})},e.prototype.scrollToTime=function(e){var t=J(e);t&&this.component.view.scrollToDuration(t)},e}();function Ir(e,t,n){return new hn(this,e,t,n,null)}function Mr(e,t,n,r,i,o,a){return new Fn({calendarSystem:"gregory",timeZone:t,namedTimeZoneImpl:n,locale:e,weekNumberCalculation:i,firstDay:r,weekLabel:o,cmdFormatter:a})}function kr(e){return new(this.pluginSystem.hooks.themeClasses[e.themeSystem]||Rr)(e)}function _r(e){var t=this.tryRerender.bind(this);return null!=e&&(t=pe(t,e)),t}function Or(e){return Re(e,(function(e){return e.ui}))}function Pr(e,t,n){var r={"":t};for(var i in e){var o=e[i];o.sourceId&&n[o.sourceId]&&(r[i]=n[o.sourceId])}return r}rn.mixInto(Cr);var xr=function(e){function t(t,n){var i=e.call(this,r("div",{className:"fc-view fc-"+t.type+"-view"}))||this;return i.renderDatesMem=Xt(i.renderDatesWrap,i.unrenderDatesWrap),i.renderBusinessHoursMem=Xt(i.renderBusinessHours,i.unrenderBusinessHours,[i.renderDatesMem]),i.renderDateSelectionMem=Xt(i.renderDateSelectionWrap,i.unrenderDateSelectionWrap,[i.renderDatesMem]),i.renderEventsMem=Xt(i.renderEvents,i.unrenderEvents,[i.renderDatesMem]),i.renderEventSelectionMem=Xt(i.renderEventSelectionWrap,i.unrenderEventSelectionWrap,[i.renderEventsMem]),i.renderEventDragMem=Xt(i.renderEventDragWrap,i.unrenderEventDragWrap,[i.renderDatesMem]),i.renderEventResizeMem=Xt(i.renderEventResizeWrap,i.unrenderEventResizeWrap,[i.renderDatesMem]),i.viewSpec=t,i.type=t.type,n.appendChild(i.el),i.initialize(),i}return Ee(t,e),t.prototype.initialize=function(){},Object.defineProperty(t.prototype,"activeStart",{get:function(){return this.context.dateEnv.toDate(this.props.dateProfile.activeRange.start)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"activeEnd",{get:function(){return this.context.dateEnv.toDate(this.props.dateProfile.activeRange.end)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"currentStart",{get:function(){return this.context.dateEnv.toDate(this.props.dateProfile.currentRange.start)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"currentEnd",{get:function(){return this.context.dateEnv.toDate(this.props.dateProfile.currentRange.end)},enumerable:!0,configurable:!0}),t.prototype.render=function(e,t){this.renderDatesMem(e.dateProfile),this.renderBusinessHoursMem(e.businessHours),this.renderDateSelectionMem(e.dateSelection),this.renderEventsMem(e.eventStore),this.renderEventSelectionMem(e.eventSelection),this.renderEventDragMem(e.eventDrag),this.renderEventResizeMem(e.eventResize)},t.prototype.beforeUpdate=function(){this.addScroll(this.queryScroll())},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderDatesMem.unrender()},t.prototype.updateSize=function(e,t,n){var r=this.context.calendar;e&&this.addScroll(this.queryScroll()),(e||r.isViewUpdated||r.isDatesUpdated||r.isEventsUpdated)&&this.updateBaseSize(e,t,n)},t.prototype.updateBaseSize=function(e,t,n){},t.prototype.renderDatesWrap=function(e){this.renderDates(e),this.addScroll({duration:J(this.context.options.scrollTime)})},t.prototype.unrenderDatesWrap=function(){this.stopNowIndicator(),this.unrenderDates()},t.prototype.renderDates=function(e){},t.prototype.unrenderDates=function(){},t.prototype.renderBusinessHours=function(e){},t.prototype.unrenderBusinessHours=function(){},t.prototype.renderDateSelectionWrap=function(e){e&&this.renderDateSelection(e)},t.prototype.unrenderDateSelectionWrap=function(e){e&&this.unrenderDateSelection(e)},t.prototype.renderDateSelection=function(e){},t.prototype.unrenderDateSelection=function(e){},t.prototype.renderEvents=function(e){},t.prototype.unrenderEvents=function(){},t.prototype.sliceEvents=function(e,t){var n=this.props;return dt(e,n.eventUiBases,n.dateProfile.activeRange,t?this.context.nextDayThreshold:null).fg},t.prototype.renderEventSelectionWrap=function(e){e&&this.renderEventSelection(e)},t.prototype.unrenderEventSelectionWrap=function(e){e&&this.unrenderEventSelection(e)},t.prototype.renderEventSelection=function(e){},t.prototype.unrenderEventSelection=function(e){},t.prototype.renderEventDragWrap=function(e){e&&this.renderEventDrag(e)},t.prototype.unrenderEventDragWrap=function(e){e&&this.unrenderEventDrag(e)},t.prototype.renderEventDrag=function(e){},t.prototype.unrenderEventDrag=function(e){},t.prototype.renderEventResizeWrap=function(e){e&&this.renderEventResize(e)},t.prototype.unrenderEventResizeWrap=function(e){e&&this.unrenderEventResize(e)},t.prototype.renderEventResize=function(e){},t.prototype.unrenderEventResize=function(e){},t.prototype.startNowIndicator=function(e,t){var n,r,i,o=this,a=this.context,s=a.calendar,u=a.dateEnv;a.options.nowIndicator&&!this.initialNowDate&&(n=this.getNowIndicatorUnit(e,t))&&(r=this.updateNowIndicator.bind(this),this.initialNowDate=s.getNow(),this.initialNowQueriedMs=(new Date).valueOf(),i=u.add(u.startOf(this.initialNowDate,n),J(1,n)).valueOf()-this.initialNowDate.valueOf(),this.nowIndicatorTimeoutID=setTimeout((function(){o.nowIndicatorTimeoutID=null,r(),i="second"===n?1e3:6e4,o.nowIndicatorIntervalID=setInterval(r,i)}),i))},t.prototype.updateNowIndicator=function(){this.props.dateProfile&&this.initialNowDate&&(this.unrenderNowIndicator(),this.renderNowIndicator(N(this.initialNowDate,(new Date).valueOf()-this.initialNowQueriedMs)),this.isNowIndicatorRendered=!0)},t.prototype.stopNowIndicator=function(){this.nowIndicatorTimeoutID&&(clearTimeout(this.nowIndicatorTimeoutID),this.nowIndicatorTimeoutID=null),this.nowIndicatorIntervalID&&(clearInterval(this.nowIndicatorIntervalID),this.nowIndicatorIntervalID=null),this.isNowIndicatorRendered&&(this.unrenderNowIndicator(),this.isNowIndicatorRendered=!1)},t.prototype.getNowIndicatorUnit=function(e,t){},t.prototype.renderNowIndicator=function(e){},t.prototype.unrenderNowIndicator=function(){},t.prototype.addScroll=function(e,t){t&&(e.isForced=t),Se(this.queuedScroll||(this.queuedScroll={}),e)},t.prototype.popScroll=function(e){this.applyQueuedScroll(e),this.queuedScroll=null},t.prototype.applyQueuedScroll=function(e){this.queuedScroll&&this.applyScroll(this.queuedScroll,e)},t.prototype.queryScroll=function(){var e={};return this.props.dateProfile&&Se(e,this.queryDateScroll()),e},t.prototype.applyScroll=function(e,t){var n=e.duration,r=e.isForced;null==n||r||(delete e.duration,this.props.dateProfile&&Se(e,this.computeDateScroll(n))),this.props.dateProfile&&this.applyDateScroll(e)},t.prototype.computeDateScroll=function(e){return{}},t.prototype.queryDateScroll=function(){return{}},t.prototype.applyDateScroll=function(e){},t.prototype.scrollToDuration=function(e){this.applyScroll({duration:e},!1)},t}(gn);rn.mixInto(xr),xr.prototype.usesMinMaxTime=!1,xr.prototype.dateProfileGeneratorClass=$n;var Nr=function(){function e(){this.segs=[],this.isSizeDirty=!1}return e.prototype.renderSegs=function(e,t,n){this.context=e,this.rangeUpdated(),t=this.renderSegEls(t,n),this.segs=t,this.attachSegs(t,n),this.isSizeDirty=!0,yt(this.context,this.segs,Boolean(n))},e.prototype.unrender=function(e,t,n){mt(this.context,this.segs,Boolean(n)),this.detachSegs(this.segs),this.segs=[]},e.prototype.rangeUpdated=function(){var e,t,n=this.context.options;this.eventTimeFormat=ot(n.eventTimeFormat||this.computeEventTimeFormat(),n.defaultRangeSeparator),null==(e=n.displayEventTime)&&(e=this.computeDisplayEventTime()),null==(t=n.displayEventEnd)&&(t=this.computeDisplayEventEnd()),this.displayEventTime=e,this.displayEventEnd=t},e.prototype.renderSegEls=function(e,t){var n,r="";if(e.length){for(n=0;n<e.length;n++)r+=this.renderSegHtml(e[n],t);o(r).forEach((function(t,n){var r=e[n];t&&(r.el=t)})),e=ft(this.context,e,Boolean(t))}return e},e.prototype.getSegClasses=function(e,t,n,r){var i=["fc-event",e.isStart?"fc-start":"fc-not-start",e.isEnd?"fc-end":"fc-not-end"].concat(e.eventRange.ui.classNames);return t&&i.push("fc-draggable"),n&&i.push("fc-resizable"),r&&(i.push("fc-mirror"),r.isDragging&&i.push("fc-dragging"),r.isResizing&&i.push("fc-resizing")),i},e.prototype.getTimeText=function(e,t,n){var r=e.def,i=e.instance;return this._getTimeText(i.range.start,r.hasEnd?i.range.end:null,r.allDay,t,n,i.forcedStartTzo,i.forcedEndTzo)},e.prototype._getTimeText=function(e,t,n,r,i,o,a){var s=this.context.dateEnv;return null==r&&(r=this.eventTimeFormat),null==i&&(i=this.displayEventEnd),this.displayEventTime&&!n?i&&t?s.formatRange(e,t,r,{forcedStartTzo:o,forcedEndTzo:a}):s.format(e,r,{forcedTzo:o}):""},e.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",omitZeroMinute:!0}},e.prototype.computeDisplayEventTime=function(){return!0},e.prototype.computeDisplayEventEnd=function(){return!0},e.prototype.getSkinCss=function(e){return{"background-color":e.backgroundColor,"border-color":e.borderColor,color:e.textColor}},e.prototype.sortEventSegs=function(e){var t=this.context.eventOrderSpecs,n=e.map(Hr);return n.sort((function(e,n){return oe(e,n,t)})),n.map((function(e){return e._seg}))},e.prototype.computeSizes=function(e){(e||this.isSizeDirty)&&this.computeSegSizes(this.segs)},e.prototype.assignSizes=function(e){(e||this.isSizeDirty)&&(this.assignSegSizes(this.segs),this.isSizeDirty=!1)},e.prototype.computeSegSizes=function(e){},e.prototype.assignSegSizes=function(e){},e.prototype.hideByHash=function(e){if(e)for(var t=0,n=this.segs;t<n.length;t++){var r=n[t];e[r.eventRange.instance.instanceId]&&(r.el.style.visibility="hidden")}},e.prototype.showByHash=function(e){if(e)for(var t=0,n=this.segs;t<n.length;t++){var r=n[t];e[r.eventRange.instance.instanceId]&&(r.el.style.visibility="")}},e.prototype.selectByInstanceId=function(e){if(e)for(var t=0,n=this.segs;t<n.length;t++){var r=n[t],i=r.eventRange.instance;i&&i.instanceId===e&&r.el&&r.el.classList.add("fc-selected")}},e.prototype.unselectByInstanceId=function(e){if(e)for(var t=0,n=this.segs;t<n.length;t++){var r=n[t];r.el&&r.el.classList.remove("fc-selected")}},e}();function Hr(e){var t=e.eventRange.def,n=e.eventRange.instance.range,r=n.start?n.start.valueOf():0,i=n.end?n.end.valueOf():0;return Se({},t.extendedProps,t,{id:t.publicId,start:r,end:i,duration:i-r,allDay:Number(t.allDay),_seg:e})}var Ur=function(){function e(){this.fillSegTag="div",this.dirtySizeFlags={},this.containerElsByType={},this.segsByType={}}return e.prototype.getSegsByType=function(e){return this.segsByType[e]||[]},e.prototype.renderSegs=function(e,t,n){var r;this.context=t;var i=this.renderSegEls(e,n),o=this.attachSegs(e,i);o&&(r=this.containerElsByType[e]||(this.containerElsByType[e]=[])).push.apply(r,o),this.segsByType[e]=i,"bgEvent"===e&&yt(t,i,!1),this.dirtySizeFlags[e]=!0},e.prototype.unrender=function(e,t){var n=this.segsByType[e];n&&("bgEvent"===e&&mt(t,n,!1),this.detachSegs(e,n))},e.prototype.renderSegEls=function(e,t){var n,r=this,i="";if(t.length){for(n=0;n<t.length;n++)i+=this.renderSegHtml(e,t[n]);o(i).forEach((function(e,n){var r=t[n];e&&(r.el=e)})),"bgEvent"===e&&(t=ft(this.context,t,!1)),t=t.filter((function(e){return h(e.el,r.fillSegTag)}))}return t},e.prototype.renderSegHtml=function(e,t){var n=null,r=[];return"highlight"!==e&&"businessHours"!==e&&(n={"background-color":t.eventRange.ui.backgroundColor}),"highlight"!==e&&(r=r.concat(t.eventRange.ui.classNames)),"businessHours"===e?r.push("fc-bgevent"):r.push("fc-"+e.toLowerCase()),"<"+this.fillSegTag+(r.length?' class="'+r.join(" ")+'"':"")+(n?' style="'+xt(n)+'"':"")+"></"+this.fillSegTag+">"},e.prototype.detachSegs=function(e,t){var n=this.containerElsByType[e];n&&(n.forEach(c),delete this.containerElsByType[e])},e.prototype.computeSizes=function(e){for(var t in this.segsByType)(e||this.dirtySizeFlags[t])&&this.computeSegSizes(this.segsByType[t])},e.prototype.assignSizes=function(e){for(var t in this.segsByType)(e||this.dirtySizeFlags[t])&&this.assignSegSizes(this.segsByType[t]);this.dirtySizeFlags={}},e.prototype.computeSegSizes=function(e){},e.prototype.assignSegSizes=function(e){},e}(),zr=function(e){this.timeZoneName=e},Lr=function(){function e(e){this.emitter=new rn}return e.prototype.destroy=function(){},e.prototype.setMirrorIsVisible=function(e){},e.prototype.setMirrorNeedsRevert=function(e){},e.prototype.setAutoScrollEnabled=function(e){},e}();function Br(e){var t=Nn(e.locale||"en",xn([]).map);return e=Se({timeZone:Mn.timeZone,calendarSystem:"gregory"},e,{locale:t}),new Fn(e)}var Vr={startTime:J,duration:J,create:Boolean,sourceId:String},Ar={create:!0};function Fr(e,t){return!e||t>10?{weekday:"short"}:t>1?{weekday:"short",month:"numeric",day:"numeric",omitCommas:!0}:{weekday:"long"}}function Wr(e,t,n,r,i,o,a,s){var u,l=o.dateEnv,c=o.theme,d=o.options,f=Ze(t.activeRange,e),p=["fc-day-header",c.getClass("widgetHeader")];return u="function"==typeof d.columnHeaderHtml?d.columnHeaderHtml(l.toDate(e)):"function"==typeof d.columnHeaderText?Pt(d.columnHeaderText(l.toDate(e))):Pt(l.format(e,i)),n?p=p.concat(en(e,t,o,!0)):p.push("fc-"+P[e.getUTCDay()]),'<th class="'+p.join(" ")+'"'+(f&&n?' data-date="'+l.formatIso(e,{omitTime:!0})+'"':"")+(a>1?' colspan="'+a+'"':"")+(s?" "+s:"")+">"+(f?$t(d,l,{date:e,forceOff:!n||1===r},u):u)+"</th>"}var Zr=function(e){function t(t){var n=e.call(this)||this;return n.renderSkeleton=Xt(n._renderSkeleton,n._unrenderSkeleton),n.parentEl=t,n}return Ee(t,e),t.prototype.render=function(e,t){var n=e.dates,r=e.datesRepDistinctDays,i=[];this.renderSkeleton(t),e.renderIntroHtml&&i.push(e.renderIntroHtml());for(var o=ot(t.options.columnHeaderFormat||Fr(r,n.length)),a=0,s=n;a<s.length;a++){var u=s[a];i.push(Wr(u,e.dateProfile,r,n.length,o,t))}t.isRtl&&i.reverse(),this.thead.innerHTML="<tr>"+i.join("")+"</tr>"},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderSkeleton.unrender()},t.prototype._renderSkeleton=function(e){var t=e.theme,n=this.parentEl;n.innerHTML="",n.appendChild(this.el=i('<div class="fc-row '+t.getClass("headerRow")+'"><table class="'+t.getClass("tableGrid")+'"><thead></thead></table></div>')),this.thead=this.el.querySelector("thead")},t.prototype._unrenderSkeleton=function(){c(this.el)},t}(vn),jr=function(){function e(e,t){for(var n=e.start,r=e.end,i=[],o=[],a=-1;n<r;)t.isHiddenDay(n)?i.push(a+.5):(a++,i.push(a),o.push(n)),n=x(n,1);this.dates=o,this.indices=i,this.cnt=o.length}return e.prototype.sliceRange=function(e){var t=this.getDateDayIndex(e.start),n=this.getDateDayIndex(x(e.end,-1)),r=Math.max(0,t),i=Math.min(this.cnt-1,n);return(r=Math.ceil(r))<=(i=Math.floor(i))?{firstIndex:r,lastIndex:i,isStart:t===r,isEnd:n===i}:null},e.prototype.getDateDayIndex=function(e){var t=this.indices,n=Math.floor(H(this.dates[0],e));return n<0?t[0]-1:n>=t.length?t[t.length-1]+1:t[n]},e}(),Yr=function(){function e(e,t){var n,r,i,o=e.dates;if(t){for(r=o[0].getUTCDay(),n=1;n<o.length&&o[n].getUTCDay()!==r;n++);i=Math.ceil(o.length/n)}else i=1,n=o.length;this.rowCnt=i,this.colCnt=n,this.daySeries=e,this.cells=this.buildCells(),this.headerDates=this.buildHeaderDates()}return e.prototype.buildCells=function(){for(var e=[],t=0;t<this.rowCnt;t++){for(var n=[],r=0;r<this.colCnt;r++)n.push(this.buildCell(t,r));e.push(n)}return e},e.prototype.buildCell=function(e,t){return{date:this.daySeries.dates[e*this.colCnt+t]}},e.prototype.buildHeaderDates=function(){for(var e=[],t=0;t<this.colCnt;t++)e.push(this.cells[0][t].date);return e},e.prototype.sliceRange=function(e){var t=this.colCnt,n=this.daySeries.sliceRange(e),r=[];if(n)for(var i=n.firstIndex,o=n.lastIndex,a=i;a<=o;){var s=Math.floor(a/t),u=Math.min((s+1)*t,o+1);r.push({row:s,firstCol:a%t,lastCol:(u-1)%t,isStart:n.isStart&&a===i,isEnd:n.isEnd&&u-1===o}),a=u}return r},e}(),qr=function(){function e(){this.sliceBusinessHours=Ye(this._sliceBusinessHours),this.sliceDateSelection=Ye(this._sliceDateSpan),this.sliceEventStore=Ye(this._sliceEventStore),this.sliceEventDrag=Ye(this._sliceInteraction),this.sliceEventResize=Ye(this._sliceInteraction)}return e.prototype.sliceProps=function(e,t,n,r,i){for(var o=[],a=5;a<arguments.length;a++)o[a-5]=arguments[a];var s=e.eventUiBases,u=this.sliceEventStore.apply(this,[e.eventStore,s,t,n,i].concat(o));return{dateSelectionSegs:this.sliceDateSelection.apply(this,[e.dateSelection,s,i].concat(o)),businessHourSegs:this.sliceBusinessHours.apply(this,[e.businessHours,t,n,r,i].concat(o)),fgEventSegs:u.fg,bgEventSegs:u.bg,eventDrag:this.sliceEventDrag.apply(this,[e.eventDrag,s,t,n,i].concat(o)),eventResize:this.sliceEventResize.apply(this,[e.eventResize,s,t,n,i].concat(o)),eventSelection:e.eventSelection}},e.prototype.sliceNowDate=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return this._sliceDateSpan.apply(this,[{range:{start:e,end:N(e,1)},allDay:!1},{},t].concat(n))},e.prototype._sliceBusinessHours=function(e,t,n,r,i){for(var o=[],a=5;a<arguments.length;a++)o[a-5]=arguments[a];return e?this._sliceEventStore.apply(this,[Oe(e,Gr(t,Boolean(n)),r),{},t,n,i].concat(o)).bg:[]},e.prototype._sliceEventStore=function(e,t,n,r,i){for(var o=[],a=5;a<arguments.length;a++)o[a-5]=arguments[a];if(e){var s=dt(e,t,Gr(n,Boolean(r)),r);return{bg:this.sliceEventRanges(s.bg,i,o),fg:this.sliceEventRanges(s.fg,i,o)}}return{bg:[],fg:[]}},e.prototype._sliceInteraction=function(e,t,n,r,i){for(var o=[],a=5;a<arguments.length;a++)o[a-5]=arguments[a];if(!e)return null;var s=dt(e.mutatedEvents,t,Gr(n,Boolean(r)),r);return{segs:this.sliceEventRanges(s.fg,i,o),affectedInstances:e.affectedEvents.instances,isEvent:e.isEvent,sourceSeg:e.origSeg}},e.prototype._sliceDateSpan=function(e,t,n){for(var r=[],i=3;i<arguments.length;i++)r[i-3]=arguments[i];if(!e)return[];for(var o=lr(e,t,n.context.calendar),a=this.sliceRange.apply(this,[e.range].concat(r)),s=0,u=a;s<u.length;s++){var l=u[s];l.component=n,l.eventRange=o}return a},e.prototype.sliceEventRanges=function(e,t,n){for(var r=[],i=0,o=e;i<o.length;i++){var a=o[i];r.push.apply(r,this.sliceEventRange(a,t,n))}return r},e.prototype.sliceEventRange=function(e,t,n){for(var r=this.sliceRange.apply(this,[e.range].concat(n)),i=0,o=r;i<o.length;i++){var a=o[i];a.component=t,a.eventRange=e,a.isStart=e.isStart&&a.isStart,a.isEnd=e.isEnd&&a.isEnd}return r},e}();function Gr(e,t){var n=e.activeRange;return t?n:{start:N(n.start,e.minTime.milliseconds),end:N(n.end,e.maxTime.milliseconds-864e5)}}e.Calendar=Cr,e.Component=vn,e.ComponentContext=hn,e.DateComponent=gn,e.DateEnv=Fn,e.DateProfileGenerator=$n,e.DayHeader=Zr,e.DaySeries=jr,e.DayTable=Yr,e.ElementDragging=Lr,e.ElementScrollController=ln,e.EmitterMixin=rn,e.EventApi=ct,e.FgEventRenderer=Nr,e.FillRenderer=Ur,e.Interaction=br,e.Mixin=nn,e.NamedTimeZoneImpl=zr,e.PositionCache=sn,e.ScrollComponent=dn,e.ScrollController=un,e.Slicer=qr,e.Splitter=Kt,e.Theme=fn,e.View=xr,e.WindowScrollController=cn,e.addDays=x,e.addDurations=function(e,t){return{years:e.years+t.years,months:e.months+t.months,days:e.days+t.days,milliseconds:e.milliseconds+t.milliseconds}},e.addMs=N,e.addWeeks=function(e,t){var n=Z(e);return n[2]+=7*t,j(n)},e.allowContextMenu=function(e){e.removeEventListener("contextmenu",k)},e.allowSelection=function(e){e.classList.remove("fc-unselectable"),e.removeEventListener("selectstart",k)},e.appendToElement=s,e.applyAll=de,e.applyMutationToEventStore=Et,e.applyStyle=y,e.applyStyleProp=m,e.asRoughMinutes=function(e){return te(e)/6e4},e.asRoughMs=te,e.asRoughSeconds=function(e){return te(e)/1e3},e.buildGotoAnchorHtml=$t,e.buildSegCompareObj=Hr,e.capitaliseFirstLetter=ue,e.combineEventUis=Bt,e.compareByFieldSpec=ae,e.compareByFieldSpecs=oe,e.compareNumbers=function(e,t){return e-t},e.compensateScroll=function(e,t){t.left&&y(e,{borderLeftWidth:1,marginLeft:t.left-1}),t.right&&y(e,{borderRightWidth:1,marginRight:t.right-1})},e.computeClippingRect=function(e){return M(e).map((function(e){return w(e)})).concat({left:window.pageXOffset,right:window.pageXOffset+document.documentElement.clientWidth,top:window.pageYOffset,bottom:window.pageYOffset+document.documentElement.clientHeight}).reduce((function(e,t){return E(e,t)||t}))},e.computeEdges=T,e.computeEventDraggable=function(e,t,n){for(var r=e.calendar,i=e.view,o=r.pluginSystem.hooks.isDraggableTransformers,a=n.startEditable,s=0,u=o;s<u.length;s++){a=(0,u[s])(a,t,n,i)}return a},e.computeEventEndResizable=function(e,t,n){return n.durationEditable},e.computeEventStartResizable=function(e,t,n){return n.durationEditable&&e.options.eventResizableFromStart},e.computeFallbackHeaderFormat=Fr,e.computeHeightAndMargins=C,e.computeInnerRect=w,e.computeRect=R,e.computeVisibleDayRange=ge,e.config={},e.constrainPoint=function(e,t){return{left:Math.min(Math.max(e.left,t.left),t.right),top:Math.min(Math.max(e.top,t.top),t.bottom)}},e.createDuration=J,e.createElement=r,e.createEmptyEventStore=Ne,e.createEventInstance=Yt,e.createFormatter=ot,e.createPlugin=mn,e.cssToStr=xt,e.debounce=pe,e.diffDates=ye,e.diffDayAndTime=U,e.diffDays=H,e.diffPoints=function(e,t){return{left:e.left-t.left,top:e.top-t.top}},e.diffWeeks=function(e,t){return H(e,t)/7},e.diffWholeDays=L,e.diffWholeWeeks=z,e.disableCursor=function(){document.body.classList.add("fc-not-allowed")},e.distributeHeight=function(e,t,n){var r=Math.floor(t/e.length),i=Math.floor(t-r*(e.length-1)),o=[],a=[],s=[],u=0;re(e),e.forEach((function(t,n){var l=n===e.length-1?i:r,c=t.getBoundingClientRect().height,d=c+I(t);d<l?(o.push(t),a.push(d),s.push(c)):u+=d})),n&&(t-=u,r=Math.floor(t/o.length),i=Math.floor(t-r*(o.length-1))),o.forEach((function(e,t){var n=t===o.length-1?i:r,u=a[t],l=n-(u-s[t]);u<n&&(e.style.height=l+"px")}))},e.elementClosest=p,e.elementMatches=h,e.enableCursor=function(){document.body.classList.remove("fc-not-allowed")},e.eventTupleToStore=_e,e.filterEventStoreDefs=Ue,e.filterHash=we,e.findChildren=function(e,t){for(var n=e instanceof HTMLElement?[e]:e,r=[],i=0;i<n.length;i++)for(var o=n[i].children,a=0;a<o.length;a++){var s=o[a];t&&!h(s,t)||r.push(s)}return r},e.findElements=v,e.flexibleCompare=se,e.forceClassName=function(e,t,n){n?e.classList.add(t):e.classList.remove(t)},e.formatDate=function(e,t){void 0===t&&(t={});var n=Br(t),r=ot(t),i=n.createMarkerMeta(e);return i?n.format(i.marker,r,{forcedTzo:i.forcedTzo}):""},e.formatIsoTimeString=function(e){return le(e.getUTCHours(),2)+":"+le(e.getUTCMinutes(),2)+":"+le(e.getUTCSeconds(),2)},e.formatRange=function(e,t,n){var r=Br("object"==typeof n&&n?n:{}),i=ot(n,Mn.defaultRangeSeparator),o=r.createMarkerMeta(e),a=r.createMarkerMeta(t);return o&&a?r.formatRange(o.marker,a.marker,i,{forcedStartTzo:o.forcedTzo,forcedEndTzo:a.forcedTzo,isEndExclusive:n.isEndExclusive}):""},e.getAllDayHtml=function(e){return e.allDayHtml||Pt(e.allDayText)},e.getClippingParents=M,e.getDayClasses=en,e.getElSeg=ht,e.getRectCenter=function(e){return{left:(e.left+e.right)/2,top:(e.top+e.bottom)/2}},e.getRelevantEvents=Pe,e.globalDefaults=Mn,e.greatestDurationDenominator=ne,e.hasBgRendering=function(e){return"background"===e.rendering||"inverse-background"===e.rendering},e.htmlEscape=Pt,e.htmlToElement=i,e.insertAfterElement=function(e,t){for(var n=l(t),r=e.nextSibling||null,i=0;i<n.length;i++)e.parentNode.insertBefore(n[i],r)},e.interactionSettingsStore=Dr,e.interactionSettingsToStore=function(e){var t;return(t={})[e.component.uid]=e,t},e.intersectRanges=Ve,e.intersectRects=E,e.isArraysEqual=je,e.isDateSpansEqual=function(e,t){return Ae(e.range,t.range)&&e.allDay===t.allDay&&function(e,t){for(var n in t)if("range"!==n&&"allDay"!==n&&e[n]!==t[n])return!1;for(var n in e)if(!(n in t))return!1;return!0}(e,t)},e.isInt=ce,e.isInteractionValid=Rt,e.isMultiDayRange=function(e){var t=ge(e);return H(t.start,t.end)>1},e.isPropsEqual=Me,e.isPropsValid=It,e.isSingleDay=function(e){return 0===e.years&&0===e.months&&1===e.days&&0===e.milliseconds},e.isValidDate=Y,e.listenBySelector=_,e.mapHash=Re,e.matchCellWidths=function(e){var t=0;return e.forEach((function(e){var n=e.firstChild;if(n instanceof HTMLElement){var r=n.getBoundingClientRect().width;r>t&&(t=r)}})),t++,e.forEach((function(e){e.style.width=t+"px"})),t},e.memoize=Ye,e.memoizeOutput=qe,e.memoizeRendering=Xt,e.mergeEventStores=He,e.multiplyDuration=function(e,t){return{years:e.years*t,months:e.months*t,days:e.days*t,milliseconds:e.milliseconds*t}},e.padStart=le,e.parseBusinessHours=Gt,e.parseDragMeta=function(e){var t={},n=he(e,Vr,Ar,t);return n.leftoverProps=t,n},e.parseEventDef=jt,e.parseFieldSpecs=ie,e.parseMarker=An,e.pointInsideRect=function(e,t){return e.left>=t.left&&e.left<t.right&&e.top>=t.top&&e.top<t.bottom},e.prependToElement=u,e.preventContextMenu=function(e){e.addEventListener("contextmenu",k)},e.preventDefault=k,e.preventSelection=function(e){e.classList.add("fc-unselectable"),e.addEventListener("selectstart",k)},e.processScopedUiProps=zt,e.rangeContainsMarker=Ze,e.rangeContainsRange=We,e.rangesEqual=Ae,e.rangesIntersect=Fe,e.refineProps=he,e.removeElement=c,e.removeExact=function(e,t){for(var n=0,r=0;r<e.length;)e[r]===t?(e.splice(r,1),n++):r++;return n},e.renderDateCell=Wr,e.requestJson=Dn,e.sliceEventStore=dt,e.startOfDay=B,e.subtractInnerElHeight=function(e,t){var n={position:"relative",left:-1};y(e,n),y(t,n);var r=e.getBoundingClientRect().height-t.getBoundingClientRect().height,i={position:"",left:""};return y(e,i),y(t,i),r},e.translateRect=function(e,t,n){return{left:e.left+t,right:e.right+t,top:e.top+n,bottom:e.bottom+n}},e.uncompensateScroll=function(e){y(e,{marginLeft:"",marginRight:"",borderLeftWidth:"",borderRightWidth:""})},e.undistributeHeight=re,e.unpromisify=tn,e.version="4.4.2",e.whenTransitionDone=function(e,t){var n=function(r){t(r),O.forEach((function(t){e.removeEventListener(t,n)}))};O.forEach((function(t){e.addEventListener(t,n)}))},e.wholeDivideDurations=function(e,t){for(var n=null,r=0;r<G.length;r++){var i=G[r];if(t[i]){var o=e[i]/t[i];if(!ce(o)||null!==n&&n!==o)return null;n=o}else if(e[i])return null}return n},Object.defineProperty(e,"__esModule",{value:!0})}));
/*!
FullCalendar Interaction Plugin v4.4.2
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@fullcalendar/core")):"function"==typeof define&&define.amd?define(["exports","@fullcalendar/core"],t):t((e=e||self).FullCalendarInteraction={},e.FullCalendar)}(this,(function(e,t){"use strict";var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function r(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};t.config.touchMouseIgnoreWait=500;var o=0,a=0,l=!1,s=function(){function e(e){var n=this;this.subjectEl=null,this.downEl=null,this.selector="",this.handleSelector="",this.shouldIgnoreMove=!1,this.shouldWatchScroll=!0,this.isDragging=!1,this.isTouchDragging=!1,this.wasTouchScroll=!1,this.handleMouseDown=function(e){if(!n.shouldIgnoreMouse()&&function(e){return 0===e.button&&!e.ctrlKey}(e)&&n.tryStart(e)){var t=n.createEventFromMouse(e,!0);n.emitter.trigger("pointerdown",t),n.initScrollWatch(t),n.shouldIgnoreMove||document.addEventListener("mousemove",n.handleMouseMove),document.addEventListener("mouseup",n.handleMouseUp)}},this.handleMouseMove=function(e){var t=n.createEventFromMouse(e);n.recordCoords(t),n.emitter.trigger("pointermove",t)},this.handleMouseUp=function(e){document.removeEventListener("mousemove",n.handleMouseMove),document.removeEventListener("mouseup",n.handleMouseUp),n.emitter.trigger("pointerup",n.createEventFromMouse(e)),n.cleanup()},this.handleTouchStart=function(e){if(n.tryStart(e)){n.isTouchDragging=!0;var t=n.createEventFromTouch(e,!0);n.emitter.trigger("pointerdown",t),n.initScrollWatch(t);var r=e.target;n.shouldIgnoreMove||r.addEventListener("touchmove",n.handleTouchMove),r.addEventListener("touchend",n.handleTouchEnd),r.addEventListener("touchcancel",n.handleTouchEnd),window.addEventListener("scroll",n.handleTouchScroll,!0)}},this.handleTouchMove=function(e){var t=n.createEventFromTouch(e);n.recordCoords(t),n.emitter.trigger("pointermove",t)},this.handleTouchEnd=function(e){if(n.isDragging){var r=e.target;r.removeEventListener("touchmove",n.handleTouchMove),r.removeEventListener("touchend",n.handleTouchEnd),r.removeEventListener("touchcancel",n.handleTouchEnd),window.removeEventListener("scroll",n.handleTouchScroll,!0),n.emitter.trigger("pointerup",n.createEventFromTouch(e)),n.cleanup(),n.isTouchDragging=!1,o++,setTimeout((function(){o--}),t.config.touchMouseIgnoreWait)}},this.handleTouchScroll=function(){n.wasTouchScroll=!0},this.handleScroll=function(e){if(!n.shouldIgnoreMove){var t=window.pageXOffset-n.prevScrollX+n.prevPageX,r=window.pageYOffset-n.prevScrollY+n.prevPageY;n.emitter.trigger("pointermove",{origEvent:e,isTouch:n.isTouchDragging,subjectEl:n.subjectEl,pageX:t,pageY:r,deltaX:t-n.origPageX,deltaY:r-n.origPageY})}},this.containerEl=e,this.emitter=new t.EmitterMixin,e.addEventListener("mousedown",this.handleMouseDown),e.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),a++||window.addEventListener("touchmove",c,{passive:!1})}return e.prototype.destroy=function(){this.containerEl.removeEventListener("mousedown",this.handleMouseDown),this.containerEl.removeEventListener("touchstart",this.handleTouchStart,{passive:!0}),--a||window.removeEventListener("touchmove",c,{passive:!1})},e.prototype.tryStart=function(e){var n=this.querySubjectEl(e),r=e.target;return!(!n||this.handleSelector&&!t.elementClosest(r,this.handleSelector))&&(this.subjectEl=n,this.downEl=r,this.isDragging=!0,this.wasTouchScroll=!1,!0)},e.prototype.cleanup=function(){l=!1,this.isDragging=!1,this.subjectEl=null,this.downEl=null,this.destroyScrollWatch()},e.prototype.querySubjectEl=function(e){return this.selector?t.elementClosest(e.target,this.selector):this.containerEl},e.prototype.shouldIgnoreMouse=function(){return o||this.isTouchDragging},e.prototype.cancelTouchScroll=function(){this.isDragging&&(l=!0)},e.prototype.initScrollWatch=function(e){this.shouldWatchScroll&&(this.recordCoords(e),window.addEventListener("scroll",this.handleScroll,!0))},e.prototype.recordCoords=function(e){this.shouldWatchScroll&&(this.prevPageX=e.pageX,this.prevPageY=e.pageY,this.prevScrollX=window.pageXOffset,this.prevScrollY=window.pageYOffset)},e.prototype.destroyScrollWatch=function(){this.shouldWatchScroll&&window.removeEventListener("scroll",this.handleScroll,!0)},e.prototype.createEventFromMouse=function(e,t){var n=0,r=0;return t?(this.origPageX=e.pageX,this.origPageY=e.pageY):(n=e.pageX-this.origPageX,r=e.pageY-this.origPageY),{origEvent:e,isTouch:!1,subjectEl:this.subjectEl,pageX:e.pageX,pageY:e.pageY,deltaX:n,deltaY:r}},e.prototype.createEventFromTouch=function(e,t){var n,r,i=e.touches,o=0,a=0;return i&&i.length?(n=i[0].pageX,r=i[0].pageY):(n=e.pageX,r=e.pageY),t?(this.origPageX=n,this.origPageY=r):(o=n-this.origPageX,a=r-this.origPageY),{origEvent:e,isTouch:!0,subjectEl:this.subjectEl,pageX:n,pageY:r,deltaX:o,deltaY:a}},e}();function c(e){l&&e.preventDefault()}var d=function(){function e(){this.isVisible=!1,this.sourceEl=null,this.mirrorEl=null,this.sourceElRect=null,this.parentNode=document.body,this.zIndex=9999,this.revertDuration=0}return e.prototype.start=function(e,t,n){this.sourceEl=e,this.sourceElRect=this.sourceEl.getBoundingClientRect(),this.origScreenX=t-window.pageXOffset,this.origScreenY=n-window.pageYOffset,this.deltaX=0,this.deltaY=0,this.updateElPosition()},e.prototype.handleMove=function(e,t){this.deltaX=e-window.pageXOffset-this.origScreenX,this.deltaY=t-window.pageYOffset-this.origScreenY,this.updateElPosition()},e.prototype.setIsVisible=function(e){e?this.isVisible||(this.mirrorEl&&(this.mirrorEl.style.display=""),this.isVisible=e,this.updateElPosition()):this.isVisible&&(this.mirrorEl&&(this.mirrorEl.style.display="none"),this.isVisible=e)},e.prototype.stop=function(e,t){var n=this,r=function(){n.cleanup(),t()};e&&this.mirrorEl&&this.isVisible&&this.revertDuration&&(this.deltaX||this.deltaY)?this.doRevertAnimation(r,this.revertDuration):setTimeout(r,0)},e.prototype.doRevertAnimation=function(e,n){var r=this.mirrorEl,i=this.sourceEl.getBoundingClientRect();r.style.transition="top "+n+"ms,left "+n+"ms",t.applyStyle(r,{left:i.left,top:i.top}),t.whenTransitionDone(r,(function(){r.style.transition="",e()}))},e.prototype.cleanup=function(){this.mirrorEl&&(t.removeElement(this.mirrorEl),this.mirrorEl=null),this.sourceEl=null},e.prototype.updateElPosition=function(){this.sourceEl&&this.isVisible&&t.applyStyle(this.getMirrorEl(),{left:this.sourceElRect.left+this.deltaX,top:this.sourceElRect.top+this.deltaY})},e.prototype.getMirrorEl=function(){var e=this.sourceElRect,n=this.mirrorEl;return n||((n=this.mirrorEl=this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"),n.classList.add("fc-dragging"),t.applyStyle(n,{position:"fixed",zIndex:this.zIndex,visibility:"",boxSizing:"border-box",width:e.right-e.left,height:e.bottom-e.top,right:"auto",bottom:"auto",margin:0}),this.parentNode.appendChild(n)),n},e}(),g=function(e){function t(t,n){var r=e.call(this)||this;return r.handleScroll=function(){r.scrollTop=r.scrollController.getScrollTop(),r.scrollLeft=r.scrollController.getScrollLeft(),r.handleScrollChange()},r.scrollController=t,r.doesListening=n,r.scrollTop=r.origScrollTop=t.getScrollTop(),r.scrollLeft=r.origScrollLeft=t.getScrollLeft(),r.scrollWidth=t.getScrollWidth(),r.scrollHeight=t.getScrollHeight(),r.clientWidth=t.getClientWidth(),r.clientHeight=t.getClientHeight(),r.clientRect=r.computeClientRect(),r.doesListening&&r.getEventTarget().addEventListener("scroll",r.handleScroll),r}return r(t,e),t.prototype.destroy=function(){this.doesListening&&this.getEventTarget().removeEventListener("scroll",this.handleScroll)},t.prototype.getScrollTop=function(){return this.scrollTop},t.prototype.getScrollLeft=function(){return this.scrollLeft},t.prototype.setScrollTop=function(e){this.scrollController.setScrollTop(e),this.doesListening||(this.scrollTop=Math.max(Math.min(e,this.getMaxScrollTop()),0),this.handleScrollChange())},t.prototype.setScrollLeft=function(e){this.scrollController.setScrollLeft(e),this.doesListening||(this.scrollLeft=Math.max(Math.min(e,this.getMaxScrollLeft()),0),this.handleScrollChange())},t.prototype.getClientWidth=function(){return this.clientWidth},t.prototype.getClientHeight=function(){return this.clientHeight},t.prototype.getScrollWidth=function(){return this.scrollWidth},t.prototype.getScrollHeight=function(){return this.scrollHeight},t.prototype.handleScrollChange=function(){},t}(t.ScrollController),u=function(e){function n(n,r){return e.call(this,new t.ElementScrollController(n),r)||this}return r(n,e),n.prototype.getEventTarget=function(){return this.scrollController.el},n.prototype.computeClientRect=function(){return t.computeInnerRect(this.scrollController.el)},n}(g),h=function(e){function n(n){return e.call(this,new t.WindowScrollController,n)||this}return r(n,e),n.prototype.getEventTarget=function(){return window},n.prototype.computeClientRect=function(){return{left:this.scrollLeft,right:this.scrollLeft+this.clientWidth,top:this.scrollTop,bottom:this.scrollTop+this.clientHeight}},n.prototype.handleScrollChange=function(){this.clientRect=this.computeClientRect()},n}(g),p="function"==typeof performance?performance.now:Date.now,v=function(){function e(){var e=this;this.isEnabled=!0,this.scrollQuery=[window,".fc-scroller"],this.edgeThreshold=50,this.maxVelocity=300,this.pointerScreenX=null,this.pointerScreenY=null,this.isAnimating=!1,this.scrollCaches=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.animate=function(){if(e.isAnimating){var t=e.computeBestEdge(e.pointerScreenX+window.pageXOffset,e.pointerScreenY+window.pageYOffset);if(t){var n=p();e.handleSide(t,(n-e.msSinceRequest)/1e3),e.requestAnimation(n)}else e.isAnimating=!1}}}return e.prototype.start=function(e,t){this.isEnabled&&(this.scrollCaches=this.buildCaches(),this.pointerScreenX=null,this.pointerScreenY=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.handleMove(e,t))},e.prototype.handleMove=function(e,t){if(this.isEnabled){var n=e-window.pageXOffset,r=t-window.pageYOffset,i=null===this.pointerScreenY?0:r-this.pointerScreenY,o=null===this.pointerScreenX?0:n-this.pointerScreenX;i<0?this.everMovedUp=!0:i>0&&(this.everMovedDown=!0),o<0?this.everMovedLeft=!0:o>0&&(this.everMovedRight=!0),this.pointerScreenX=n,this.pointerScreenY=r,this.isAnimating||(this.isAnimating=!0,this.requestAnimation(p()))}},e.prototype.stop=function(){if(this.isEnabled){this.isAnimating=!1;for(var e=0,t=this.scrollCaches;e<t.length;e++){t[e].destroy()}this.scrollCaches=null}},e.prototype.requestAnimation=function(e){this.msSinceRequest=e,requestAnimationFrame(this.animate)},e.prototype.handleSide=function(e,t){var n=e.scrollCache,r=this.edgeThreshold,i=r-e.distance,o=i*i/(r*r)*this.maxVelocity*t,a=1;switch(e.name){case"left":a=-1;case"right":n.setScrollLeft(n.getScrollLeft()+o*a);break;case"top":a=-1;case"bottom":n.setScrollTop(n.getScrollTop()+o*a)}},e.prototype.computeBestEdge=function(e,t){for(var n=this.edgeThreshold,r=null,i=0,o=this.scrollCaches;i<o.length;i++){var a=o[i],l=a.clientRect,s=e-l.left,c=l.right-e,d=t-l.top,g=l.bottom-t;s>=0&&c>=0&&d>=0&&g>=0&&(d<=n&&this.everMovedUp&&a.canScrollUp()&&(!r||r.distance>d)&&(r={scrollCache:a,name:"top",distance:d}),g<=n&&this.everMovedDown&&a.canScrollDown()&&(!r||r.distance>g)&&(r={scrollCache:a,name:"bottom",distance:g}),s<=n&&this.everMovedLeft&&a.canScrollLeft()&&(!r||r.distance>s)&&(r={scrollCache:a,name:"left",distance:s}),c<=n&&this.everMovedRight&&a.canScrollRight()&&(!r||r.distance>c)&&(r={scrollCache:a,name:"right",distance:c}))}return r},e.prototype.buildCaches=function(){return this.queryScrollEls().map((function(e){return e===window?new h(!1):new u(e,!1)}))},e.prototype.queryScrollEls=function(){for(var e=[],t=0,n=this.scrollQuery;t<n.length;t++){var r=n[t];"object"==typeof r?e.push(r):e.push.apply(e,Array.prototype.slice.call(document.querySelectorAll(r)))}return e},e}(),f=function(e){function n(n){var r=e.call(this,n)||this;r.delay=null,r.minDistance=0,r.touchScrollAllowed=!0,r.mirrorNeedsRevert=!1,r.isInteracting=!1,r.isDragging=!1,r.isDelayEnded=!1,r.isDistanceSurpassed=!1,r.delayTimeoutId=null,r.onPointerDown=function(e){r.isDragging||(r.isInteracting=!0,r.isDelayEnded=!1,r.isDistanceSurpassed=!1,t.preventSelection(document.body),t.preventContextMenu(document.body),e.isTouch||e.origEvent.preventDefault(),r.emitter.trigger("pointerdown",e),r.pointer.shouldIgnoreMove||(r.mirror.setIsVisible(!1),r.mirror.start(e.subjectEl,e.pageX,e.pageY),r.startDelay(e),r.minDistance||r.handleDistanceSurpassed(e)))},r.onPointerMove=function(e){if(r.isInteracting){if(r.emitter.trigger("pointermove",e),!r.isDistanceSurpassed){var t=r.minDistance,n=e.deltaX,i=e.deltaY;n*n+i*i>=t*t&&r.handleDistanceSurpassed(e)}r.isDragging&&("scroll"!==e.origEvent.type&&(r.mirror.handleMove(e.pageX,e.pageY),r.autoScroller.handleMove(e.pageX,e.pageY)),r.emitter.trigger("dragmove",e))}},r.onPointerUp=function(e){r.isInteracting&&(r.isInteracting=!1,t.allowSelection(document.body),t.allowContextMenu(document.body),r.emitter.trigger("pointerup",e),r.isDragging&&(r.autoScroller.stop(),r.tryStopDrag(e)),r.delayTimeoutId&&(clearTimeout(r.delayTimeoutId),r.delayTimeoutId=null))};var i=r.pointer=new s(n);return i.emitter.on("pointerdown",r.onPointerDown),i.emitter.on("pointermove",r.onPointerMove),i.emitter.on("pointerup",r.onPointerUp),r.mirror=new d,r.autoScroller=new v,r}return r(n,e),n.prototype.destroy=function(){this.pointer.destroy()},n.prototype.startDelay=function(e){var t=this;"number"==typeof this.delay?this.delayTimeoutId=setTimeout((function(){t.delayTimeoutId=null,t.handleDelayEnd(e)}),this.delay):this.handleDelayEnd(e)},n.prototype.handleDelayEnd=function(e){this.isDelayEnded=!0,this.tryStartDrag(e)},n.prototype.handleDistanceSurpassed=function(e){this.isDistanceSurpassed=!0,this.tryStartDrag(e)},n.prototype.tryStartDrag=function(e){this.isDelayEnded&&this.isDistanceSurpassed&&(this.pointer.wasTouchScroll&&!this.touchScrollAllowed||(this.isDragging=!0,this.mirrorNeedsRevert=!1,this.autoScroller.start(e.pageX,e.pageY),this.emitter.trigger("dragstart",e),!1===this.touchScrollAllowed&&this.pointer.cancelTouchScroll()))},n.prototype.tryStopDrag=function(e){this.mirror.stop(this.mirrorNeedsRevert,this.stopDrag.bind(this,e))},n.prototype.stopDrag=function(e){this.isDragging=!1,this.emitter.trigger("dragend",e)},n.prototype.setIgnoreMove=function(e){this.pointer.shouldIgnoreMove=e},n.prototype.setMirrorIsVisible=function(e){this.mirror.setIsVisible(e)},n.prototype.setMirrorNeedsRevert=function(e){this.mirrorNeedsRevert=e},n.prototype.setAutoScrollEnabled=function(e){this.autoScroller.isEnabled=e},n}(t.ElementDragging),E=function(){function e(e){this.origRect=t.computeRect(e),this.scrollCaches=t.getClippingParents(e).map((function(e){return new u(e,!0)}))}return e.prototype.destroy=function(){for(var e=0,t=this.scrollCaches;e<t.length;e++){t[e].destroy()}},e.prototype.computeLeft=function(){for(var e=this.origRect.left,t=0,n=this.scrollCaches;t<n.length;t++){var r=n[t];e+=r.origScrollLeft-r.getScrollLeft()}return e},e.prototype.computeTop=function(){for(var e=this.origRect.top,t=0,n=this.scrollCaches;t<n.length;t++){var r=n[t];e+=r.origScrollTop-r.getScrollTop()}return e},e.prototype.isWithinClipping=function(e,n){for(var r,i,o={left:e,top:n},a=0,l=this.scrollCaches;a<l.length;a++){var s=l[a];if(r=s.getEventTarget(),i=void 0,"HTML"!==(i=r.tagName)&&"BODY"!==i&&!t.pointInsideRect(o,s.clientRect))return!1}return!0},e}();var m=function(){function e(e,n){var r=this;this.useSubjectCenter=!1,this.requireInitial=!0,this.initialHit=null,this.movingHit=null,this.finalHit=null,this.handlePointerDown=function(e){var t=r.dragging;r.initialHit=null,r.movingHit=null,r.finalHit=null,r.prepareHits(),r.processFirstCoord(e),r.initialHit||!r.requireInitial?(t.setIgnoreMove(!1),r.emitter.trigger("pointerdown",e)):t.setIgnoreMove(!0)},this.handleDragStart=function(e){r.emitter.trigger("dragstart",e),r.handleMove(e,!0)},this.handleDragMove=function(e){r.emitter.trigger("dragmove",e),r.handleMove(e)},this.handlePointerUp=function(e){r.releaseHits(),r.emitter.trigger("pointerup",e)},this.handleDragEnd=function(e){r.movingHit&&r.emitter.trigger("hitupdate",null,!0,e),r.finalHit=r.movingHit,r.movingHit=null,r.emitter.trigger("dragend",e)},this.droppableStore=n,e.emitter.on("pointerdown",this.handlePointerDown),e.emitter.on("dragstart",this.handleDragStart),e.emitter.on("dragmove",this.handleDragMove),e.emitter.on("pointerup",this.handlePointerUp),e.emitter.on("dragend",this.handleDragEnd),this.dragging=e,this.emitter=new t.EmitterMixin}return e.prototype.processFirstCoord=function(e){var n,r={left:e.pageX,top:e.pageY},i=r,o=e.subjectEl;o!==document&&(n=t.computeRect(o),i=t.constrainPoint(i,n));var a=this.initialHit=this.queryHitForOffset(i.left,i.top);if(a){if(this.useSubjectCenter&&n){var l=t.intersectRects(n,a.rect);l&&(i=t.getRectCenter(l))}this.coordAdjust=t.diffPoints(i,r)}else this.coordAdjust={left:0,top:0}},e.prototype.handleMove=function(e,t){var n=this.queryHitForOffset(e.pageX+this.coordAdjust.left,e.pageY+this.coordAdjust.top);!t&&S(this.movingHit,n)||(this.movingHit=n,this.emitter.trigger("hitupdate",n,!1,e))},e.prototype.prepareHits=function(){this.offsetTrackers=t.mapHash(this.droppableStore,(function(e){return e.component.buildPositionCaches(),new E(e.el)}))},e.prototype.releaseHits=function(){var e=this.offsetTrackers;for(var t in e)e[t].destroy();this.offsetTrackers={}},e.prototype.queryHitForOffset=function(e,n){var r=this.droppableStore,i=this.offsetTrackers,o=null;for(var a in r){var l=r[a].component,s=i[a];if(s.isWithinClipping(e,n)){var c=s.computeLeft(),d=s.computeTop(),g=e-c,u=n-d,h=s.origRect,p=h.right-h.left,v=h.bottom-h.top;if(g>=0&&g<p&&u>=0&&u<v){var f=l.queryHit(g,u,p,v);!f||l.props.dateProfile&&!t.rangeContainsRange(l.props.dateProfile.activeRange,f.dateSpan.range)||o&&!(f.layer>o.layer)||(f.rect.left+=c,f.rect.right+=c,f.rect.top+=d,f.rect.bottom+=d,o=f)}}}return o},e}();function S(e,n){return!e&&!n||Boolean(e)===Boolean(n)&&t.isDateSpansEqual(e.dateSpan,n.dateSpan)}var y=function(e){function n(n){var r=e.call(this,n)||this;r.handlePointerDown=function(e){var t=r.dragging;t.setIgnoreMove(!r.component.isValidDateDownEl(t.pointer.downEl))},r.handleDragEnd=function(e){var t=r.component.context,n=t.calendar,i=t.view;if(!r.dragging.pointer.wasTouchScroll){var o=r.hitDragging,a=o.initialHit,l=o.finalHit;a&&l&&S(a,l)&&n.triggerDateClick(a.dateSpan,a.dayEl,i,e.origEvent)}};var i=n.component;r.dragging=new f(i.el),r.dragging.autoScroller.isEnabled=!1;var o=r.hitDragging=new m(r.dragging,t.interactionSettingsToStore(n));return o.emitter.on("pointerdown",r.handlePointerDown),o.emitter.on("dragend",r.handleDragEnd),r}return r(n,e),n.prototype.destroy=function(){this.dragging.destroy()},n}(t.Interaction),D=function(e){function n(n){var r=e.call(this,n)||this;r.dragSelection=null,r.handlePointerDown=function(e){var t=r,n=t.component,i=t.dragging,o=n.context.options.selectable&&n.isValidDateDownEl(e.origEvent.target);i.setIgnoreMove(!o),i.delay=e.isTouch?function(e){var t=e.context.options,n=t.selectLongPressDelay;null==n&&(n=t.longPressDelay);return n}(n):null},r.handleDragStart=function(e){r.component.context.calendar.unselect(e)},r.handleHitUpdate=function(e,n){var o=r.component.context.calendar,a=null,l=!1;e&&((a=function(e,n,r){var o=e.dateSpan,a=n.dateSpan,l=[o.range.start,o.range.end,a.range.start,a.range.end];l.sort(t.compareNumbers);for(var s={},c=0,d=r;c<d.length;c++){var g=(0,d[c])(e,n);if(!1===g)return null;g&&i(s,g)}return s.range={start:l[0],end:l[3]},s.allDay=o.allDay,s}(r.hitDragging.initialHit,e,o.pluginSystem.hooks.dateSelectionTransformers))&&r.component.isDateSelectionValid(a)||(l=!0,a=null)),a?o.dispatch({type:"SELECT_DATES",selection:a}):n||o.dispatch({type:"UNSELECT_DATES"}),l?t.disableCursor():t.enableCursor(),n||(r.dragSelection=a)},r.handlePointerUp=function(e){r.dragSelection&&(r.component.context.calendar.triggerDateSelect(r.dragSelection,e),r.dragSelection=null)};var o=n.component,a=o.context.options,l=r.dragging=new f(o.el);l.touchScrollAllowed=!1,l.minDistance=a.selectMinDistance||0,l.autoScroller.isEnabled=a.dragScroll;var s=r.hitDragging=new m(r.dragging,t.interactionSettingsToStore(n));return s.emitter.on("pointerdown",r.handlePointerDown),s.emitter.on("dragstart",r.handleDragStart),s.emitter.on("hitupdate",r.handleHitUpdate),s.emitter.on("pointerup",r.handlePointerUp),r}return r(n,e),n.prototype.destroy=function(){this.dragging.destroy()},n}(t.Interaction);var w=function(e){function n(r){var o=e.call(this,r)||this;o.subjectSeg=null,o.isDragging=!1,o.eventRange=null,o.relevantEvents=null,o.receivingCalendar=null,o.validMutation=null,o.mutatedRelevantEvents=null,o.handlePointerDown=function(e){var n=e.origEvent.target,r=o,i=r.component,a=r.dragging,l=a.mirror,s=i.context.options,c=i.context.calendar,d=o.subjectSeg=t.getElSeg(e.subjectEl),g=(o.eventRange=d.eventRange).instance.instanceId;o.relevantEvents=t.getRelevantEvents(c.state.eventStore,g),a.minDistance=e.isTouch?0:s.eventDragMinDistance,a.delay=e.isTouch&&g!==i.props.eventSelection?function(e){var t=e.context.options,n=t.eventLongPressDelay;null==n&&(n=t.longPressDelay);return n}(i):null,l.parentNode=c.el,l.revertDuration=s.dragRevertDuration;var u=i.isValidSegDownEl(n)&&!t.elementClosest(n,".fc-resizer");a.setIgnoreMove(!u),o.isDragging=u&&e.subjectEl.classList.contains("fc-draggable")},o.handleDragStart=function(e){var n=o.component.context,r=n.calendar,i=o.eventRange,a=i.instance.instanceId;e.isTouch?a!==o.component.props.eventSelection&&r.dispatch({type:"SELECT_EVENT",eventInstanceId:a}):r.dispatch({type:"UNSELECT_EVENT"}),o.isDragging&&(r.unselect(e),r.publiclyTrigger("eventDragStart",[{el:o.subjectSeg.el,event:new t.EventApi(r,i.def,i.instance),jsEvent:e.origEvent,view:n.view}]))},o.handleHitUpdate=function(e,n){if(o.isDragging){var r=o.relevantEvents,i=o.hitDragging.initialHit,a=o.component.context.calendar,l=null,s=null,c=null,d=!1,g={affectedEvents:r,mutatedEvents:t.createEmptyEventStore(),isEvent:!0,origSeg:o.subjectSeg};if(e){var u=e.component;l=u.context.calendar;var h=u.context.options;a===l||h.editable&&h.droppable?(s=function(e,n,r){var i=e.dateSpan,o=n.dateSpan,a=i.range.start,l=o.range.start,s={};i.allDay!==o.allDay&&(s.allDay=o.allDay,s.hasEnd=n.component.context.options.allDayMaintainDuration,o.allDay&&(a=t.startOfDay(a)));var c=t.diffDates(a,l,e.component.context.dateEnv,e.component===n.component?e.component.largeUnit:null);c.milliseconds&&(s.allDay=!1);for(var d={datesDelta:c,standardProps:s},g=0,u=r;g<u.length;g++){(0,u[g])(d,e,n)}return d}(i,e,l.pluginSystem.hooks.eventDragMutationMassagers))&&(c=t.applyMutationToEventStore(r,l.eventUiBases,s,l),g.mutatedEvents=c,u.isInteractionValid(g)||(d=!0,s=null,c=null,g.mutatedEvents=t.createEmptyEventStore())):l=null}o.displayDrag(l,g),d?t.disableCursor():t.enableCursor(),n||(a===l&&S(i,e)&&(s=null),o.dragging.setMirrorNeedsRevert(!s),o.dragging.setMirrorIsVisible(!e||!document.querySelector(".fc-mirror")),o.receivingCalendar=l,o.validMutation=s,o.mutatedRelevantEvents=c)}},o.handlePointerUp=function(){o.isDragging||o.cleanup()},o.handleDragEnd=function(e){if(o.isDragging){var n=o.component.context,r=n.calendar,a=n.view,l=o,s=l.receivingCalendar,c=l.validMutation,d=o.eventRange.def,g=o.eventRange.instance,u=new t.EventApi(r,d,g),h=o.relevantEvents,p=o.mutatedRelevantEvents,v=o.hitDragging.finalHit;if(o.clearDrag(),r.publiclyTrigger("eventDragStop",[{el:o.subjectSeg.el,event:u,jsEvent:e.origEvent,view:a}]),c){if(s===r){r.dispatch({type:"MERGE_EVENTS",eventStore:p});for(var f={},E=0,m=r.pluginSystem.hooks.eventDropTransformers;E<m.length;E++){var S=m[E];i(f,S(c,r))}var y=i({},f,{el:e.subjectEl,delta:c.datesDelta,oldEvent:u,event:new t.EventApi(r,p.defs[d.defId],g?p.instances[g.instanceId]:null),revert:function(){r.dispatch({type:"MERGE_EVENTS",eventStore:h})},jsEvent:e.origEvent,view:a});r.publiclyTrigger("eventDrop",[y])}else if(s){r.publiclyTrigger("eventLeave",[{draggedEl:e.subjectEl,event:u,view:a}]),r.dispatch({type:"REMOVE_EVENT_INSTANCES",instances:o.mutatedRelevantEvents.instances}),s.dispatch({type:"MERGE_EVENTS",eventStore:o.mutatedRelevantEvents}),e.isTouch&&s.dispatch({type:"SELECT_EVENT",eventInstanceId:g.instanceId});var D=i({},s.buildDatePointApi(v.dateSpan),{draggedEl:e.subjectEl,jsEvent:e.origEvent,view:v.component});s.publiclyTrigger("drop",[D]),s.publiclyTrigger("eventReceive",[{draggedEl:e.subjectEl,event:new t.EventApi(s,p.defs[d.defId],p.instances[g.instanceId]),view:v.component}])}}else r.publiclyTrigger("_noEventDrop")}o.cleanup()};var a=o.component,l=a.context.options,s=o.dragging=new f(a.el);s.pointer.selector=n.SELECTOR,s.touchScrollAllowed=!1,s.autoScroller.isEnabled=l.dragScroll;var c=o.hitDragging=new m(o.dragging,t.interactionSettingsStore);return c.useSubjectCenter=r.useEventCenter,c.emitter.on("pointerdown",o.handlePointerDown),c.emitter.on("dragstart",o.handleDragStart),c.emitter.on("hitupdate",o.handleHitUpdate),c.emitter.on("pointerup",o.handlePointerUp),c.emitter.on("dragend",o.handleDragEnd),o}return r(n,e),n.prototype.destroy=function(){this.dragging.destroy()},n.prototype.displayDrag=function(e,n){var r=this.component.context.calendar,i=this.receivingCalendar;i&&i!==e&&(i===r?i.dispatch({type:"SET_EVENT_DRAG",state:{affectedEvents:n.affectedEvents,mutatedEvents:t.createEmptyEventStore(),isEvent:!0,origSeg:n.origSeg}}):i.dispatch({type:"UNSET_EVENT_DRAG"})),e&&e.dispatch({type:"SET_EVENT_DRAG",state:n})},n.prototype.clearDrag=function(){var e=this.component.context.calendar,t=this.receivingCalendar;t&&t.dispatch({type:"UNSET_EVENT_DRAG"}),e!==t&&e.dispatch({type:"UNSET_EVENT_DRAG"})},n.prototype.cleanup=function(){this.subjectSeg=null,this.isDragging=!1,this.eventRange=null,this.relevantEvents=null,this.receivingCalendar=null,this.validMutation=null,this.mutatedRelevantEvents=null},n.SELECTOR=".fc-draggable, .fc-resizable",n}(t.Interaction);var T=function(e){function n(n){var r=e.call(this,n)||this;r.draggingSeg=null,r.eventRange=null,r.relevantEvents=null,r.validMutation=null,r.mutatedRelevantEvents=null,r.handlePointerDown=function(e){var t=r.component,n=r.querySeg(e),i=r.eventRange=n.eventRange;r.dragging.minDistance=t.context.options.eventDragMinDistance,r.dragging.setIgnoreMove(!r.component.isValidSegDownEl(e.origEvent.target)||e.isTouch&&r.component.props.eventSelection!==i.instance.instanceId)},r.handleDragStart=function(e){var n=r.component.context,i=n.calendar,o=n.view,a=r.eventRange;r.relevantEvents=t.getRelevantEvents(i.state.eventStore,r.eventRange.instance.instanceId),r.draggingSeg=r.querySeg(e),i.unselect(),i.publiclyTrigger("eventResizeStart",[{el:r.draggingSeg.el,event:new t.EventApi(i,a.def,a.instance),jsEvent:e.origEvent,view:o}])},r.handleHitUpdate=function(e,n,o){var a=r.component.context.calendar,l=r.relevantEvents,s=r.hitDragging.initialHit,c=r.eventRange.instance,d=null,g=null,u=!1,h={affectedEvents:l,mutatedEvents:t.createEmptyEventStore(),isEvent:!0,origSeg:r.draggingSeg};e&&(d=function(e,n,r,o,a){for(var l=e.component.context.dateEnv,s=e.dateSpan.range.start,c=n.dateSpan.range.start,d=t.diffDates(s,c,l,e.component.largeUnit),g={},u=0,h=a;u<h.length;u++){var p=(0,h[u])(e,n);if(!1===p)return null;p&&i(g,p)}if(r){if(l.add(o.start,d)<o.end)return g.startDelta=d,g}else if(l.add(o.end,d)>o.start)return g.endDelta=d,g;return null}(s,e,o.subjectEl.classList.contains("fc-start-resizer"),c.range,a.pluginSystem.hooks.eventResizeJoinTransforms)),d&&(g=t.applyMutationToEventStore(l,a.eventUiBases,d,a),h.mutatedEvents=g,r.component.isInteractionValid(h)||(u=!0,d=null,g=null,h.mutatedEvents=null)),g?a.dispatch({type:"SET_EVENT_RESIZE",state:h}):a.dispatch({type:"UNSET_EVENT_RESIZE"}),u?t.disableCursor():t.enableCursor(),n||(d&&S(s,e)&&(d=null),r.validMutation=d,r.mutatedRelevantEvents=g)},r.handleDragEnd=function(e){var n=r.component.context,i=n.calendar,o=n.view,a=r.eventRange.def,l=r.eventRange.instance,s=new t.EventApi(i,a,l),c=r.relevantEvents,d=r.mutatedRelevantEvents;i.publiclyTrigger("eventResizeStop",[{el:r.draggingSeg.el,event:s,jsEvent:e.origEvent,view:o}]),r.validMutation?(i.dispatch({type:"MERGE_EVENTS",eventStore:d}),i.publiclyTrigger("eventResize",[{el:r.draggingSeg.el,startDelta:r.validMutation.startDelta||t.createDuration(0),endDelta:r.validMutation.endDelta||t.createDuration(0),prevEvent:s,event:new t.EventApi(i,d.defs[a.defId],l?d.instances[l.instanceId]:null),revert:function(){i.dispatch({type:"MERGE_EVENTS",eventStore:c})},jsEvent:e.origEvent,view:o}])):i.publiclyTrigger("_noEventResize"),r.draggingSeg=null,r.relevantEvents=null,r.validMutation=null};var o=n.component,a=r.dragging=new f(o.el);a.pointer.selector=".fc-resizer",a.touchScrollAllowed=!1,a.autoScroller.isEnabled=o.context.options.dragScroll;var l=r.hitDragging=new m(r.dragging,t.interactionSettingsToStore(n));return l.emitter.on("pointerdown",r.handlePointerDown),l.emitter.on("dragstart",r.handleDragStart),l.emitter.on("hitupdate",r.handleHitUpdate),l.emitter.on("dragend",r.handleDragEnd),r}return r(n,e),n.prototype.destroy=function(){this.dragging.destroy()},n.prototype.querySeg=function(e){return t.getElSeg(t.elementClosest(e.subjectEl,this.component.fgSegSelector))},n}(t.Interaction);var M=function(){function e(e){var n=this;this.isRecentPointerDateSelect=!1,this.onSelect=function(e){e.jsEvent&&(n.isRecentPointerDateSelect=!0)},this.onDocumentPointerUp=function(e){var r=n,i=r.calendar,o=r.documentPointer,a=i.state;if(!o.wasTouchScroll){if(a.dateSelection&&!n.isRecentPointerDateSelect){var l=i.viewOpt("unselectAuto"),s=i.viewOpt("unselectCancel");!l||l&&t.elementClosest(o.downEl,s)||i.unselect(e)}a.eventSelection&&!t.elementClosest(o.downEl,w.SELECTOR)&&i.dispatch({type:"UNSELECT_EVENT"})}n.isRecentPointerDateSelect=!1},this.calendar=e;var r=this.documentPointer=new s(document);r.shouldIgnoreMove=!0,r.shouldWatchScroll=!1,r.emitter.on("pointerup",this.onDocumentPointerUp),e.on("select",this.onSelect)}return e.prototype.destroy=function(){this.calendar.off("select",this.onSelect),this.documentPointer.destroy()},e}(),b=function(){function e(e,n){var r=this;this.receivingCalendar=null,this.droppableEvent=null,this.suppliedDragMeta=null,this.dragMeta=null,this.handleDragStart=function(e){r.dragMeta=r.buildDragMeta(e.subjectEl)},this.handleHitUpdate=function(e,n,o){var a=r.hitDragging.dragging,l=null,s=null,c=!1,d={affectedEvents:t.createEmptyEventStore(),mutatedEvents:t.createEmptyEventStore(),isEvent:r.dragMeta.create,origSeg:null};e&&(l=e.component.context.calendar,r.canDropElOnCalendar(o.subjectEl,l)&&(s=function(e,n,r){for(var o=i({},n.leftoverProps),a=0,l=r.pluginSystem.hooks.externalDefTransforms;a<l.length;a++){var s=l[a];i(o,s(e,n))}var c=t.parseEventDef(o,n.sourceId,e.allDay,r.opt("forceEventDuration")||Boolean(n.duration),r),d=e.range.start;e.allDay&&n.startTime&&(d=r.dateEnv.add(d,n.startTime));var g=n.duration?r.dateEnv.add(d,n.duration):r.getDefaultEventEnd(e.allDay,d),u=t.createEventInstance(c.defId,{start:d,end:g});return{def:c,instance:u}}(e.dateSpan,r.dragMeta,l),d.mutatedEvents=t.eventTupleToStore(s),(c=!t.isInteractionValid(d,l))&&(d.mutatedEvents=t.createEmptyEventStore(),s=null))),r.displayDrag(l,d),a.setMirrorIsVisible(n||!s||!document.querySelector(".fc-mirror")),c?t.disableCursor():t.enableCursor(),n||(a.setMirrorNeedsRevert(!s),r.receivingCalendar=l,r.droppableEvent=s)},this.handleDragEnd=function(e){var n=r,o=n.receivingCalendar,a=n.droppableEvent;if(r.clearDrag(),o&&a){var l=r.hitDragging.finalHit,s=l.component.context.view,c=r.dragMeta,d=i({},o.buildDatePointApi(l.dateSpan),{draggedEl:e.subjectEl,jsEvent:e.origEvent,view:s});o.publiclyTrigger("drop",[d]),c.create&&(o.dispatch({type:"MERGE_EVENTS",eventStore:t.eventTupleToStore(a)}),e.isTouch&&o.dispatch({type:"SELECT_EVENT",eventInstanceId:a.instance.instanceId}),o.publiclyTrigger("eventReceive",[{draggedEl:e.subjectEl,event:new t.EventApi(o,a.def,a.instance),view:s}]))}r.receivingCalendar=null,r.droppableEvent=null};var o=this.hitDragging=new m(e,t.interactionSettingsStore);o.requireInitial=!1,o.emitter.on("dragstart",this.handleDragStart),o.emitter.on("hitupdate",this.handleHitUpdate),o.emitter.on("dragend",this.handleDragEnd),this.suppliedDragMeta=n}return e.prototype.buildDragMeta=function(e){return"object"==typeof this.suppliedDragMeta?t.parseDragMeta(this.suppliedDragMeta):"function"==typeof this.suppliedDragMeta?t.parseDragMeta(this.suppliedDragMeta(e)):(n=function(e,n){var r=t.config.dataAttrPrefix,i=(r?r+"-":"")+n;return e.getAttribute("data-"+i)||""}(e,"event"),r=n?JSON.parse(n):{create:!1},t.parseDragMeta(r));var n,r},e.prototype.displayDrag=function(e,t){var n=this.receivingCalendar;n&&n!==e&&n.dispatch({type:"UNSET_EVENT_DRAG"}),e&&e.dispatch({type:"SET_EVENT_DRAG",state:t})},e.prototype.clearDrag=function(){this.receivingCalendar&&this.receivingCalendar.dispatch({type:"UNSET_EVENT_DRAG"})},e.prototype.canDropElOnCalendar=function(e,n){var r=n.opt("dropAccept");return"function"==typeof r?r(e):"string"!=typeof r||!r||Boolean(t.elementMatches(e,r))},e}();t.config.dataAttrPrefix="";var C=function(){function e(e,n){var r=this;void 0===n&&(n={}),this.handlePointerDown=function(e){var n=r.dragging,i=r.settings,o=i.minDistance,a=i.longPressDelay;n.minDistance=null!=o?o:e.isTouch?0:t.globalDefaults.eventDragMinDistance,n.delay=e.isTouch?null!=a?a:t.globalDefaults.longPressDelay:0},this.handleDragStart=function(e){e.isTouch&&r.dragging.delay&&e.subjectEl.classList.contains("fc-event")&&r.dragging.mirror.getMirrorEl().classList.add("fc-selected")},this.settings=n;var i=this.dragging=new f(e);i.touchScrollAllowed=!1,null!=n.itemSelector&&(i.pointer.selector=n.itemSelector),null!=n.appendTo&&(i.mirror.parentNode=n.appendTo),i.emitter.on("pointerdown",this.handlePointerDown),i.emitter.on("dragstart",this.handleDragStart),new b(i,n.eventData)}return e.prototype.destroy=function(){this.dragging.destroy()},e}(),R=function(e){function t(t){var n=e.call(this,t)||this;n.shouldIgnoreMove=!1,n.mirrorSelector="",n.currentMirrorEl=null,n.handlePointerDown=function(e){n.emitter.trigger("pointerdown",e),n.shouldIgnoreMove||n.emitter.trigger("dragstart",e)},n.handlePointerMove=function(e){n.shouldIgnoreMove||n.emitter.trigger("dragmove",e)},n.handlePointerUp=function(e){n.emitter.trigger("pointerup",e),n.shouldIgnoreMove||n.emitter.trigger("dragend",e)};var r=n.pointer=new s(t);return r.emitter.on("pointerdown",n.handlePointerDown),r.emitter.on("pointermove",n.handlePointerMove),r.emitter.on("pointerup",n.handlePointerUp),n}return r(t,e),t.prototype.destroy=function(){this.pointer.destroy()},t.prototype.setIgnoreMove=function(e){this.shouldIgnoreMove=e},t.prototype.setMirrorIsVisible=function(e){if(e)this.currentMirrorEl&&(this.currentMirrorEl.style.visibility="",this.currentMirrorEl=null);else{var t=this.mirrorSelector?document.querySelector(this.mirrorSelector):null;t&&(this.currentMirrorEl=t,t.style.visibility="hidden")}},t}(t.ElementDragging),I=function(){function e(e,t){var n=document;e===document||e instanceof Element?(n=e,t=t||{}):t=e||{};var r=this.dragging=new R(n);"string"==typeof t.itemSelector?r.pointer.selector=t.itemSelector:n===document&&(r.pointer.selector="[data-event]"),"string"==typeof t.mirrorSelector&&(r.mirrorSelector=t.mirrorSelector),new b(r,t.eventData)}return e.prototype.destroy=function(){this.dragging.destroy()},e}(),P=t.createPlugin({componentInteractions:[y,D,w,T],calendarInteractions:[M],elementDraggingImpl:f});e.Draggable=C,e.FeaturefulElementDragging=f,e.PointerDragging=s,e.ThirdPartyDraggable=I,e.default=P,Object.defineProperty(e,"__esModule",{value:!0})}));
/*!
FullCalendar Day Grid Plugin v4.4.2
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@fullcalendar/core")):"function"==typeof define&&define.amd?define(["exports","@fullcalendar/core"],t):t((e=e||self).FullCalendarDayGrid={},e.FullCalendar)}(this,(function(e,t){"use strict";var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function n(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},o=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.buildRenderRange=function(r,n,i){var o,s=this.dateEnv,l=e.prototype.buildRenderRange.call(this,r,n,i),a=l.start,d=l.end;if(/^(year|month)$/.test(n)&&(a=s.startOfWeek(a),(o=s.startOfWeek(d)).valueOf()!==d.valueOf()&&(d=t.addWeeks(o,1))),this.options.monthMode&&this.options.fixedWeekCount){var c=Math.ceil(t.diffWeeks(a,d));d=t.addWeeks(d,6-c)}return{start:a,end:d}},r}(t.DateProfileGenerator),s=function(){function e(e){var t=this;this.isHidden=!0,this.margin=10,this.documentMousedown=function(e){t.el&&!t.el.contains(e.target)&&t.hide()},this.options=e}return e.prototype.show=function(){this.isHidden&&(this.el||this.render(),this.el.style.display="",this.position(),this.isHidden=!1,this.trigger("show"))},e.prototype.hide=function(){this.isHidden||(this.el.style.display="none",this.isHidden=!0,this.trigger("hide"))},e.prototype.render=function(){var e=this,r=this.options,n=this.el=t.createElement("div",{className:"fc-popover "+(r.className||""),style:{top:"0",left:"0"}});"function"==typeof r.content&&r.content(n),r.parentEl.appendChild(n),t.listenBySelector(n,"click",".fc-close",(function(t){e.hide()})),r.autoHide&&document.addEventListener("mousedown",this.documentMousedown)},e.prototype.destroy=function(){this.hide(),this.el&&(t.removeElement(this.el),this.el=null),document.removeEventListener("mousedown",this.documentMousedown)},e.prototype.position=function(){var e,r,n=this.options,i=this.el,o=i.getBoundingClientRect(),s=t.computeRect(i.offsetParent),l=t.computeClippingRect(n.parentEl);e=n.top||0,r=void 0!==n.left?n.left:void 0!==n.right?n.right-o.width:0,e=Math.min(e,l.bottom-o.height-this.margin),e=Math.max(e,l.top+this.margin),r=Math.min(r,l.right-o.width-this.margin),r=Math.max(r,l.left+this.margin),t.applyStyle(i,{top:e-s.top,left:r-s.left})},e.prototype.trigger=function(e){this.options[e]&&this.options[e].apply(this,Array.prototype.slice.call(arguments,1))},e}(),l=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.renderSegHtml=function(e,r){var n,i,o=this.context,s=e.eventRange,l=s.def,a=s.ui,d=l.allDay,c=t.computeEventDraggable(o,l,a),h=d&&e.isStart&&t.computeEventStartResizable(o,l,a),p=d&&e.isEnd&&t.computeEventEndResizable(o,l,a),u=this.getSegClasses(e,c,h||p,r),f=t.cssToStr(this.getSkinCss(a)),m="";return u.unshift("fc-day-grid-event","fc-h-event"),e.isStart&&(n=this.getTimeText(s))&&(m='<span class="fc-time">'+t.htmlEscape(n)+"</span>"),i='<span class="fc-title">'+(t.htmlEscape(l.title||"")||"&nbsp;")+"</span>",'<a class="'+u.join(" ")+'"'+(l.url?' href="'+t.htmlEscape(l.url)+'"':"")+(f?' style="'+f+'"':"")+'><div class="fc-content">'+("rtl"===o.options.dir?i+" "+m:m+" "+i)+"</div>"+(h?'<div class="fc-resizer fc-start-resizer"></div>':"")+(p?'<div class="fc-resizer fc-end-resizer"></div>':"")+"</a>"},r.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"}},r.prototype.computeDisplayEventEnd=function(){return!1},r}(t.FgEventRenderer),a=function(e){function r(t){var r=e.call(this)||this;return r.dayGrid=t,r}return n(r,e),r.prototype.attachSegs=function(e,t){var r=this.rowStructs=this.renderSegRows(e);this.dayGrid.rowEls.forEach((function(e,t){e.querySelector(".fc-content-skeleton > table").appendChild(r[t].tbodyEl)})),t||this.dayGrid.removeSegPopover()},r.prototype.detachSegs=function(){for(var e,r=this.rowStructs||[];e=r.pop();)t.removeElement(e.tbodyEl);this.rowStructs=null},r.prototype.renderSegRows=function(e){var t,r,n=[];for(t=this.groupSegRows(e),r=0;r<t.length;r++)n.push(this.renderSegRow(r,t[r]));return n},r.prototype.renderSegRow=function(e,r){var n,i,o,s,l,a,d,c=this.context.isRtl,h=this.dayGrid,p=h.colCnt,u=this.buildSegLevels(r),f=Math.max(1,u.length),m=document.createElement("tbody"),g=[],y=[],v=[];function b(e){for(;o<e;)(d=(v[n-1]||[])[o])?d.rowSpan=(d.rowSpan||1)+1:(d=document.createElement("td"),s.appendChild(d)),y[n][o]=d,v[n][o]=d,o++}for(n=0;n<f;n++){if(i=u[n],o=0,s=document.createElement("tr"),g.push([]),y.push([]),v.push([]),i)for(l=0;l<i.length;l++){a=i[l];var S=c?p-1-a.lastCol:a.firstCol,w=c?p-1-a.firstCol:a.lastCol;for(b(S),d=t.createElement("td",{className:"fc-event-container"},a.el),S!==w?d.colSpan=w-S+1:v[n][o]=d;o<=w;)y[n][o]=d,g[n][o]=a,o++;s.appendChild(d)}b(p);var C=h.renderProps.renderIntroHtml();C&&(c?t.appendToElement(s,C):t.prependToElement(s,C)),m.appendChild(s)}return{row:e,tbodyEl:m,cellMatrix:y,segMatrix:g,segLevels:u,segs:r}},r.prototype.buildSegLevels=function(e){var t,r,n,i=this.context.isRtl,o=this.dayGrid.colCnt,s=[];for(e=this.sortEventSegs(e),t=0;t<e.length;t++){for(r=e[t],n=0;n<s.length&&d(r,s[n]);n++);r.level=n,r.leftCol=i?o-1-r.lastCol:r.firstCol,r.rightCol=i?o-1-r.firstCol:r.lastCol,(s[n]||(s[n]=[])).push(r)}for(n=0;n<s.length;n++)s[n].sort(c);return s},r.prototype.groupSegRows=function(e){var t,r=[];for(t=0;t<this.dayGrid.rowCnt;t++)r.push([]);for(t=0;t<e.length;t++)r[e[t].row].push(e[t]);return r},r.prototype.computeDisplayEventEnd=function(){return 1===this.dayGrid.colCnt},r}(l);function d(e,t){var r,n;for(r=0;r<t.length;r++)if((n=t[r]).firstCol<=e.lastCol&&n.lastCol>=e.firstCol)return!0;return!1}function c(e,t){return e.leftCol-t.leftCol}var h=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.attachSegs=function(e,r){var n=r.sourceSeg,i=this.rowStructs=this.renderSegRows(e);this.dayGrid.rowEls.forEach((function(e,r){var o,s,l=t.htmlToElement('<div class="fc-mirror-skeleton"><table></table></div>');n&&n.row===r?o=n.el:(o=e.querySelector(".fc-content-skeleton tbody"))||(o=e.querySelector(".fc-content-skeleton table")),s=o.getBoundingClientRect().top-e.getBoundingClientRect().top,l.style.top=s+"px",l.querySelector("table").appendChild(i[r].tbodyEl),e.appendChild(l)}))},r}(a),p=function(e){function r(t){var r=e.call(this)||this;return r.fillSegTag="td",r.dayGrid=t,r}return n(r,e),r.prototype.renderSegs=function(t,r,n){"bgEvent"===t&&(n=n.filter((function(e){return e.eventRange.def.allDay}))),e.prototype.renderSegs.call(this,t,r,n)},r.prototype.attachSegs=function(e,t){var r,n,i,o=[];for(r=0;r<t.length;r++)n=t[r],i=this.renderFillRow(e,n),this.dayGrid.rowEls[n.row].appendChild(i),o.push(i);return o},r.prototype.renderFillRow=function(e,r){var n,i,o,s=this.dayGrid,l=this.context.isRtl,a=s.colCnt,d=l?a-1-r.lastCol:r.firstCol,c=(l?a-1-r.firstCol:r.lastCol)+1;n="businessHours"===e?"bgevent":e.toLowerCase(),o=(i=t.htmlToElement('<div class="fc-'+n+'-skeleton"><table><tr></tr></table></div>')).getElementsByTagName("tr")[0],d>0&&t.appendToElement(o,new Array(d+1).join('<td style="pointer-events:none"></td>')),r.el.colSpan=c-d,o.appendChild(r.el),c<a&&t.appendToElement(o,new Array(a-c+1).join('<td style="pointer-events:none"></td>'));var h=s.renderProps.renderIntroHtml();return h&&(l?t.appendToElement(o,h):t.prependToElement(o,h)),i},r}(t.FillRenderer),u=function(e){function r(r){var n=e.call(this,r)||this,i=n.eventRenderer=new f(n),o=n.renderFrame=t.memoizeRendering(n._renderFrame);return n.renderFgEvents=t.memoizeRendering(i.renderSegs.bind(i),i.unrender.bind(i),[o]),n.renderEventSelection=t.memoizeRendering(i.selectByInstanceId.bind(i),i.unselectByInstanceId.bind(i),[n.renderFgEvents]),n.renderEventDrag=t.memoizeRendering(i.hideByHash.bind(i),i.showByHash.bind(i),[o]),n.renderEventResize=t.memoizeRendering(i.hideByHash.bind(i),i.showByHash.bind(i),[o]),n}return n(r,e),r.prototype.firstContext=function(e){e.calendar.registerInteractiveComponent(this,{el:this.el,useEventCenter:!1})},r.prototype.render=function(e,t){this.renderFrame(e.date),this.renderFgEvents(t,e.fgSegs),this.renderEventSelection(e.eventSelection),this.renderEventDrag(e.eventDragInstances),this.renderEventResize(e.eventResizeInstances)},r.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderFrame.unrender(),this.context.calendar.unregisterInteractiveComponent(this)},r.prototype._renderFrame=function(e){var r=this.context,n=r.theme,i=r.dateEnv,o=r.options,s=i.format(e,t.createFormatter(o.dayPopoverFormat));this.el.innerHTML='<div class="fc-header '+n.getClass("popoverHeader")+'"><span class="fc-title">'+t.htmlEscape(s)+'</span><span class="fc-close '+n.getIconClass("close")+'"></span></div><div class="fc-body '+n.getClass("popoverContent")+'"><div class="fc-event-container"></div></div>',this.segContainerEl=this.el.querySelector(".fc-event-container")},r.prototype.queryHit=function(e,r,n,i){var o=this.props.date;if(e<n&&r<i)return{component:this,dateSpan:{allDay:!0,range:{start:o,end:t.addDays(o,1)}},dayEl:this.el,rect:{left:0,top:0,right:n,bottom:i},layer:1}},r}(t.DateComponent),f=function(e){function r(t){var r=e.call(this)||this;return r.dayTile=t,r}return n(r,e),r.prototype.attachSegs=function(e){for(var t=0,r=e;t<r.length;t++){var n=r[t];this.dayTile.segContainerEl.appendChild(n.el)}},r.prototype.detachSegs=function(e){for(var r=0,n=e;r<n.length;r++){var i=n[r];t.removeElement(i.el)}},r}(l),m=function(){function e(e){this.context=e}return e.prototype.renderHtml=function(e){var t=[];e.renderIntroHtml&&t.push(e.renderIntroHtml());for(var r=0,n=e.cells;r<n.length;r++){var i=n[r];t.push(g(i.date,e.dateProfile,this.context,i.htmlAttrs))}return e.cells.length||t.push('<td class="fc-day '+this.context.theme.getClass("widgetContent")+'"></td>'),"rtl"===this.context.options.dir&&t.reverse(),"<tr>"+t.join("")+"</tr>"},e}();function g(e,r,n,i){var o=n.dateEnv,s=n.theme,l=t.rangeContainsMarker(r.activeRange,e),a=t.getDayClasses(e,r,n);return a.unshift("fc-day",s.getClass("widgetContent")),'<td class="'+a.join(" ")+'"'+(l?' data-date="'+o.formatIso(e,{omitTime:!0})+'"':"")+(i?" "+i:"")+"></td>"}var y=t.createFormatter({day:"numeric"}),v=t.createFormatter({week:"numeric"}),b=function(e){function r(r,n){var i=e.call(this,r)||this;i.bottomCoordPadding=0,i.isCellSizesDirty=!1,i.renderProps=n;var o=i.eventRenderer=new a(i),s=i.fillRenderer=new p(i);i.mirrorRenderer=new h(i);var l=i.renderCells=t.memoizeRendering(i._renderCells,i._unrenderCells);return i.renderBusinessHours=t.memoizeRendering(s.renderSegs.bind(s,"businessHours"),s.unrender.bind(s,"businessHours"),[l]),i.renderDateSelection=t.memoizeRendering(s.renderSegs.bind(s,"highlight"),s.unrender.bind(s,"highlight"),[l]),i.renderBgEvents=t.memoizeRendering(s.renderSegs.bind(s,"bgEvent"),s.unrender.bind(s,"bgEvent"),[l]),i.renderFgEvents=t.memoizeRendering(o.renderSegs.bind(o),o.unrender.bind(o),[l]),i.renderEventSelection=t.memoizeRendering(o.selectByInstanceId.bind(o),o.unselectByInstanceId.bind(o),[i.renderFgEvents]),i.renderEventDrag=t.memoizeRendering(i._renderEventDrag,i._unrenderEventDrag,[l]),i.renderEventResize=t.memoizeRendering(i._renderEventResize,i._unrenderEventResize,[l]),i}return n(r,e),r.prototype.render=function(e,t){var r=e.cells;this.rowCnt=r.length,this.colCnt=r[0].length,this.renderCells(r,e.isRigid),this.renderBusinessHours(t,e.businessHourSegs),this.renderDateSelection(t,e.dateSelectionSegs),this.renderBgEvents(t,e.bgEventSegs),this.renderFgEvents(t,e.fgEventSegs),this.renderEventSelection(e.eventSelection),this.renderEventDrag(e.eventDrag),this.renderEventResize(e.eventResize),this.segPopoverTile&&this.updateSegPopoverTile()},r.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderCells.unrender()},r.prototype.getCellRange=function(e,r){var n=this.props.cells[e][r].date;return{start:n,end:t.addDays(n,1)}},r.prototype.updateSegPopoverTile=function(e,t){var r=this.props;this.segPopoverTile.receiveProps({date:e||this.segPopoverTile.props.date,fgSegs:t||this.segPopoverTile.props.fgSegs,eventSelection:r.eventSelection,eventDragInstances:r.eventDrag?r.eventDrag.affectedInstances:null,eventResizeInstances:r.eventResize?r.eventResize.affectedInstances:null},this.context)},r.prototype._renderCells=function(e,r){var n,i,o=this.context,s=o.calendar,l=o.view,a=o.isRtl,d=o.dateEnv,c=this.rowCnt,h=this.colCnt,p="";for(n=0;n<c;n++)p+=this.renderDayRowHtml(n,r);for(this.el.innerHTML=p,this.rowEls=t.findElements(this.el,".fc-row"),this.cellEls=t.findElements(this.el,".fc-day, .fc-disabled-day"),a&&this.cellEls.reverse(),this.rowPositions=new t.PositionCache(this.el,this.rowEls,!1,!0),this.colPositions=new t.PositionCache(this.el,this.cellEls.slice(0,h),!0,!1),n=0;n<c;n++)for(i=0;i<h;i++)s.publiclyTrigger("dayRender",[{date:d.toDate(e[n][i].date),el:this.getCellEl(n,i),view:l}]);this.isCellSizesDirty=!0},r.prototype._unrenderCells=function(){this.removeSegPopover()},r.prototype.renderDayRowHtml=function(e,t){var r=this.context.theme,n=["fc-row","fc-week",r.getClass("dayRow")];t&&n.push("fc-rigid");var i=new m(this.context);return'<div class="'+n.join(" ")+'"><div class="fc-bg"><table class="'+r.getClass("tableGrid")+'">'+i.renderHtml({cells:this.props.cells[e],dateProfile:this.props.dateProfile,renderIntroHtml:this.renderProps.renderBgIntroHtml})+'</table></div><div class="fc-content-skeleton"><table>'+(this.getIsNumbersVisible()?"<thead>"+this.renderNumberTrHtml(e)+"</thead>":"")+"</table></div></div>"},r.prototype.getIsNumbersVisible=function(){return this.getIsDayNumbersVisible()||this.renderProps.cellWeekNumbersVisible||this.renderProps.colWeekNumbersVisible},r.prototype.getIsDayNumbersVisible=function(){return this.rowCnt>1},r.prototype.renderNumberTrHtml=function(e){var t=this.context.isRtl,r=this.renderProps.renderNumberIntroHtml(e,this);return"<tr>"+(t?"":r)+this.renderNumberCellsHtml(e)+(t?r:"")+"</tr>"},r.prototype.renderNumberCellsHtml=function(e){var t,r,n=[];for(t=0;t<this.colCnt;t++)r=this.props.cells[e][t].date,n.push(this.renderNumberCellHtml(r));return this.context.isRtl&&n.reverse(),n.join("")},r.prototype.renderNumberCellHtml=function(e){var r,n,i=this.context,o=i.dateEnv,s=i.options,l="",a=t.rangeContainsMarker(this.props.dateProfile.activeRange,e),d=this.getIsDayNumbersVisible()&&a;return d||this.renderProps.cellWeekNumbersVisible?((r=t.getDayClasses(e,this.props.dateProfile,this.context)).unshift("fc-day-top"),this.renderProps.cellWeekNumbersVisible&&(n=o.weekDow),l+='<td class="'+r.join(" ")+'"'+(a?' data-date="'+o.formatIso(e,{omitTime:!0})+'"':"")+">",this.renderProps.cellWeekNumbersVisible&&e.getUTCDay()===n&&(l+=t.buildGotoAnchorHtml(s,o,{date:e,type:"week"},{class:"fc-week-number"},o.format(e,v))),d&&(l+=t.buildGotoAnchorHtml(s,o,e,{class:"fc-day-number"},o.format(e,y))),l+="</td>"):"<td></td>"},r.prototype.updateSize=function(e){var t=this.context.calendar,r=this.fillRenderer,n=this.eventRenderer,i=this.mirrorRenderer;(e||this.isCellSizesDirty||t.isEventsUpdated)&&(this.buildPositionCaches(),this.isCellSizesDirty=!1),r.computeSizes(e),n.computeSizes(e),i.computeSizes(e),r.assignSizes(e),n.assignSizes(e),i.assignSizes(e)},r.prototype.buildPositionCaches=function(){this.buildColPositions(),this.buildRowPositions()},r.prototype.buildColPositions=function(){this.colPositions.build()},r.prototype.buildRowPositions=function(){this.rowPositions.build(),this.rowPositions.bottoms[this.rowCnt-1]+=this.bottomCoordPadding},r.prototype.positionToHit=function(e,t){var r=this.colPositions,n=this.rowPositions,i=r.leftToIndex(e),o=n.topToIndex(t);if(null!=o&&null!=i)return{row:o,col:i,dateSpan:{range:this.getCellRange(o,i),allDay:!0},dayEl:this.getCellEl(o,i),relativeRect:{left:r.lefts[i],right:r.rights[i],top:n.tops[o],bottom:n.bottoms[o]}}},r.prototype.getCellEl=function(e,t){return this.cellEls[e*this.colCnt+t]},r.prototype._renderEventDrag=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),this.fillRenderer.renderSegs("highlight",this.context,e.segs))},r.prototype._unrenderEventDrag=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.fillRenderer.unrender("highlight",this.context))},r.prototype._renderEventResize=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),this.fillRenderer.renderSegs("highlight",this.context,e.segs),this.mirrorRenderer.renderSegs(this.context,e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},r.prototype._unrenderEventResize=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.fillRenderer.unrender("highlight",this.context),this.mirrorRenderer.unrender(this.context,e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},r.prototype.removeSegPopover=function(){this.segPopover&&this.segPopover.hide()},r.prototype.limitRows=function(e){var t,r,n=this.eventRenderer.rowStructs||[];for(t=0;t<n.length;t++)this.unlimitRow(t),!1!==(r=!!e&&("number"==typeof e?e:this.computeRowLevelLimit(t)))&&this.limitRow(t,r)},r.prototype.computeRowLevelLimit=function(e){var r,n,i=this.rowEls[e].getBoundingClientRect().bottom,o=t.findChildren(this.eventRenderer.rowStructs[e].tbodyEl);for(r=0;r<o.length;r++)if((n=o[r]).classList.remove("fc-limited"),n.getBoundingClientRect().bottom>i)return r;return!1},r.prototype.limitRow=function(e,r){var n,i,o,s,l,a,d,c,h,p,u,f,m,g,y,v=this,b=this.colCnt,S=this.context.isRtl,w=this.eventRenderer.rowStructs[e],C=[],E=0,R=function(n){for(;E<n;)(a=v.getCellSegs(e,E,r)).length&&(h=i[r-1][E],y=v.renderMoreLink(e,E,a),g=t.createElement("div",null,y),h.appendChild(g),C.push(g)),E++};if(r&&r<w.segLevels.length){for(n=w.segLevels[r-1],i=w.cellMatrix,(o=t.findChildren(w.tbodyEl).slice(r)).forEach((function(e){e.classList.add("fc-limited")})),s=0;s<n.length;s++){l=n[s];var H=S?b-1-l.lastCol:l.firstCol,k=S?b-1-l.firstCol:l.lastCol;for(R(H),c=[],d=0;E<=k;)a=this.getCellSegs(e,E,r),c.push(a),d+=a.length,E++;if(d){for(p=(h=i[r-1][H]).rowSpan||1,u=[],f=0;f<c.length;f++)m=t.createElement("td",{className:"fc-more-cell",rowSpan:p}),a=c[f],y=this.renderMoreLink(e,H+f,[l].concat(a)),g=t.createElement("div",null,y),m.appendChild(g),u.push(m),C.push(m);h.classList.add("fc-limited"),t.insertAfterElement(h,u),o.push(h)}}R(this.colCnt),w.moreEls=C,w.limitedEls=o}},r.prototype.unlimitRow=function(e){var r=this.eventRenderer.rowStructs[e];r.moreEls&&(r.moreEls.forEach(t.removeElement),r.moreEls=null),r.limitedEls&&(r.limitedEls.forEach((function(e){e.classList.remove("fc-limited")})),r.limitedEls=null)},r.prototype.renderMoreLink=function(e,r,n){var i=this,o=this.context,s=o.calendar,l=o.view,a=o.dateEnv,d=o.options,c=o.isRtl,h=t.createElement("a",{className:"fc-more"});return h.innerText=this.getMoreLinkText(n.length),h.addEventListener("click",(function(t){var o=d.eventLimitClick,h=c?i.colCnt-r-1:r,p=i.props.cells[e][h].date,u=t.currentTarget,f=i.getCellEl(e,r),m=i.getCellSegs(e,r),g=i.resliceDaySegs(m,p),y=i.resliceDaySegs(n,p);"function"==typeof o&&(o=s.publiclyTrigger("eventLimitClick",[{date:a.toDate(p),allDay:!0,dayEl:f,moreEl:u,segs:g,hiddenSegs:y,jsEvent:t,view:l}])),"popover"===o?i.showSegPopover(e,r,u,g):"string"==typeof o&&s.zoomTo(p,o)})),h},r.prototype.showSegPopover=function(e,r,n,i){var o,l,a=this,d=this.context,c=d.calendar,h=d.view,p=d.theme,f=d.isRtl,m=f?this.colCnt-r-1:r,g=n.parentNode;o=1===this.rowCnt?h.el:this.rowEls[e],l={className:"fc-more-popover "+p.getClass("popover"),parentEl:h.el,top:t.computeRect(o).top,autoHide:!0,content:function(t){a.segPopoverTile=new u(t),a.updateSegPopoverTile(a.props.cells[e][m].date,i)},hide:function(){a.segPopoverTile.destroy(),a.segPopoverTile=null,a.segPopover.destroy(),a.segPopover=null}},f?l.right=t.computeRect(g).right+1:l.left=t.computeRect(g).left-1,this.segPopover=new s(l),this.segPopover.show(),c.releaseAfterSizingTriggers()},r.prototype.resliceDaySegs=function(e,r){for(var n=r,o={start:n,end:t.addDays(n,1)},s=[],l=0,a=e;l<a.length;l++){var d=a[l],c=d.eventRange,h=c.range,p=t.intersectRanges(h,o);p&&s.push(i({},d,{eventRange:{def:c.def,ui:i({},c.ui,{durationEditable:!1}),instance:c.instance,range:p},isStart:d.isStart&&p.start.valueOf()===h.start.valueOf(),isEnd:d.isEnd&&p.end.valueOf()===h.end.valueOf()}))}return s},r.prototype.getMoreLinkText=function(e){var t=this.context.options.eventLimitText;return"function"==typeof t?t(e):"+"+e+" "+t},r.prototype.getCellSegs=function(e,t,r){for(var n,i=this.eventRenderer.rowStructs[e].segMatrix,o=r||0,s=[];o<i.length;)(n=i[o][t])&&s.push(n),o++;return s},r}(t.DateComponent),S=t.createFormatter({week:"numeric"}),w=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.processOptions=t.memoize(r._processOptions),r.renderSkeleton=t.memoizeRendering(r._renderSkeleton,r._unrenderSkeleton),r.renderHeadIntroHtml=function(){var e=r.context,n=e.theme,i=e.options;return r.colWeekNumbersVisible?'<th class="fc-week-number '+n.getClass("widgetHeader")+'" '+r.weekNumberStyleAttr()+"><span>"+t.htmlEscape(i.weekLabel)+"</span></th>":""},r.renderDayGridNumberIntroHtml=function(e,n){var i=r.context,o=i.options,s=i.dateEnv,l=n.props.cells[e][0].date;return r.colWeekNumbersVisible?'<td class="fc-week-number" '+r.weekNumberStyleAttr()+">"+t.buildGotoAnchorHtml(o,s,{date:l,type:"week",forceOff:1===n.colCnt},s.format(l,S))+"</td>":""},r.renderDayGridBgIntroHtml=function(){var e=r.context.theme;return r.colWeekNumbersVisible?'<td class="fc-week-number '+e.getClass("widgetContent")+'" '+r.weekNumberStyleAttr()+"></td>":""},r.renderDayGridIntroHtml=function(){return r.colWeekNumbersVisible?'<td class="fc-week-number" '+r.weekNumberStyleAttr()+"></td>":""},r}return n(r,e),r.prototype._processOptions=function(e){e.weekNumbers?e.weekNumbersWithinDays?(this.cellWeekNumbersVisible=!0,this.colWeekNumbersVisible=!1):(this.cellWeekNumbersVisible=!1,this.colWeekNumbersVisible=!0):(this.colWeekNumbersVisible=!1,this.cellWeekNumbersVisible=!1)},r.prototype.render=function(t,r){e.prototype.render.call(this,t,r),this.processOptions(r.options),this.renderSkeleton(r)},r.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderSkeleton.unrender()},r.prototype._renderSkeleton=function(e){this.el.classList.add("fc-dayGrid-view"),this.el.innerHTML=this.renderSkeletonHtml(),this.scroller=new t.ScrollComponent("hidden","auto");var r=this.scroller.el;this.el.querySelector(".fc-body > tr > td").appendChild(r),r.classList.add("fc-day-grid-container");var n=t.createElement("div",{className:"fc-day-grid"});r.appendChild(n),this.dayGrid=new b(n,{renderNumberIntroHtml:this.renderDayGridNumberIntroHtml,renderBgIntroHtml:this.renderDayGridBgIntroHtml,renderIntroHtml:this.renderDayGridIntroHtml,colWeekNumbersVisible:this.colWeekNumbersVisible,cellWeekNumbersVisible:this.cellWeekNumbersVisible})},r.prototype._unrenderSkeleton=function(){this.el.classList.remove("fc-dayGrid-view"),this.dayGrid.destroy(),this.scroller.destroy()},r.prototype.renderSkeletonHtml=function(){var e=this.context,t=e.theme,r=e.options;return'<table class="'+t.getClass("tableGrid")+'">'+(r.columnHeader?'<thead class="fc-head"><tr><td class="fc-head-container '+t.getClass("widgetHeader")+'">&nbsp;</td></tr></thead>':"")+'<tbody class="fc-body"><tr><td class="'+t.getClass("widgetContent")+'"></td></tr></tbody></table>'},r.prototype.weekNumberStyleAttr=function(){return null!=this.weekNumberWidth?'style="width:'+this.weekNumberWidth+'px"':""},r.prototype.hasRigidRows=function(){var e=this.context.options.eventLimit;return e&&"number"!=typeof e},r.prototype.updateSize=function(t,r,n){e.prototype.updateSize.call(this,t,r,n),this.dayGrid.updateSize(t)},r.prototype.updateBaseSize=function(e,r,n){var i,o,s=this.dayGrid,l=this.context.options.eventLimit,a=this.header?this.header.el:null;s.rowEls?(this.colWeekNumbersVisible&&(this.weekNumberWidth=t.matchCellWidths(t.findElements(this.el,".fc-week-number"))),this.scroller.clear(),a&&t.uncompensateScroll(a),s.removeSegPopover(),l&&"number"==typeof l&&s.limitRows(l),i=this.computeScrollerHeight(r),this.setGridHeight(i,n),l&&"number"!=typeof l&&s.limitRows(l),n||(this.scroller.setHeight(i),((o=this.scroller.getScrollbarWidths()).left||o.right)&&(a&&t.compensateScroll(a,o),i=this.computeScrollerHeight(r),this.scroller.setHeight(i)),this.scroller.lockOverflow(o))):n||(i=this.computeScrollerHeight(r),this.scroller.setHeight(i))},r.prototype.computeScrollerHeight=function(e){return e-t.subtractInnerElHeight(this.el,this.scroller.el)},r.prototype.setGridHeight=function(e,r){this.context.options.monthMode?(r&&(e*=this.dayGrid.rowCnt/6),t.distributeHeight(this.dayGrid.rowEls,e,!r)):r?t.undistributeHeight(this.dayGrid.rowEls):t.distributeHeight(this.dayGrid.rowEls,e,!0)},r.prototype.computeDateScroll=function(e){return{top:0}},r.prototype.queryDateScroll=function(){return{top:this.scroller.getScrollTop()}},r.prototype.applyDateScroll=function(e){void 0!==e.top&&this.scroller.setScrollTop(e.top)},r}(t.View);w.prototype.dateProfileGeneratorClass=o;var C=function(e){function t(t){var r=e.call(this,t.el)||this;return r.slicer=new E,r.dayGrid=t,r}return n(t,e),t.prototype.firstContext=function(e){e.calendar.registerInteractiveComponent(this,{el:this.dayGrid.el})},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.context.calendar.unregisterInteractiveComponent(this)},t.prototype.render=function(e,t){var r=this.dayGrid,n=e.dateProfile,o=e.dayTable;r.receiveContext(t),r.receiveProps(i({},this.slicer.sliceProps(e,n,e.nextDayThreshold,t.calendar,r,o),{dateProfile:n,cells:o.cells,isRigid:e.isRigid}),t)},t.prototype.buildPositionCaches=function(){this.dayGrid.buildPositionCaches()},t.prototype.queryHit=function(e,t){var r=this.dayGrid.positionToHit(e,t);if(r)return{component:this.dayGrid,dateSpan:r.dateSpan,dayEl:r.dayEl,rect:{left:r.relativeRect.left,right:r.relativeRect.right,top:r.relativeRect.top,bottom:r.relativeRect.bottom},layer:0}},t}(t.DateComponent),E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.sliceRange=function(e,t){return t.sliceRange(e)},t}(t.Slicer),R=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.buildDayTable=t.memoize(H),r}return n(r,e),r.prototype.render=function(t,r){e.prototype.render.call(this,t,r);var n=this.props.dateProfile,i=this.dayTable=this.buildDayTable(n,t.dateProfileGenerator);this.header&&this.header.receiveProps({dateProfile:n,dates:i.headerDates,datesRepDistinctDays:1===i.rowCnt,renderIntroHtml:this.renderHeadIntroHtml},r),this.simpleDayGrid.receiveProps({dateProfile:n,dayTable:i,businessHours:t.businessHours,dateSelection:t.dateSelection,eventStore:t.eventStore,eventUiBases:t.eventUiBases,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize,isRigid:this.hasRigidRows(),nextDayThreshold:this.context.nextDayThreshold},r)},r.prototype._renderSkeleton=function(r){e.prototype._renderSkeleton.call(this,r),r.options.columnHeader&&(this.header=new t.DayHeader(this.el.querySelector(".fc-head-container"))),this.simpleDayGrid=new C(this.dayGrid)},r.prototype._unrenderSkeleton=function(){e.prototype._unrenderSkeleton.call(this),this.header&&this.header.destroy(),this.simpleDayGrid.destroy()},r}(w);function H(e,r){var n=new t.DaySeries(e.renderRange,r);return new t.DayTable(n,/year|month|week/.test(e.currentRangeUnit))}var k=t.createPlugin({defaultView:"dayGridMonth",views:{dayGrid:R,dayGridDay:{type:"dayGrid",duration:{days:1}},dayGridWeek:{type:"dayGrid",duration:{weeks:1}},dayGridMonth:{type:"dayGrid",duration:{months:1},monthMode:!0,fixedWeekCount:!0}}});e.AbstractDayGridView=w,e.DayBgRow=m,e.DayGrid=b,e.DayGridSlicer=E,e.DayGridView=R,e.SimpleDayGrid=C,e.buildBasicDayTable=H,e.default=k,Object.defineProperty(e,"__esModule",{value:!0})}));
/*!
FullCalendar Time Grid Plugin v4.4.2
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@fullcalendar/core"),require("@fullcalendar/daygrid")):"function"==typeof define&&define.amd?define(["exports","@fullcalendar/core","@fullcalendar/daygrid"],t):t((e=e||self).FullCalendarTimeGrid={},e.FullCalendar,e.FullCalendarDayGrid)}(this,(function(e,t,r){"use strict";var i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function n(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return(o=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},s=function(e){function r(t){var r=e.call(this)||this;return r.timeGrid=t,r}return n(r,e),r.prototype.renderSegs=function(r,i,n){e.prototype.renderSegs.call(this,r,i,n),this.fullTimeFormat=t.createFormatter({hour:"numeric",minute:"2-digit",separator:this.context.options.defaultRangeSeparator})},r.prototype.attachSegs=function(e,t){for(var r=this.timeGrid.groupSegsByCol(e),i=0;i<r.length;i++)r[i]=this.sortEventSegs(r[i]);this.segsByCol=r,this.timeGrid.attachSegsByCol(r,this.timeGrid.fgContainerEls)},r.prototype.detachSegs=function(e){e.forEach((function(e){t.removeElement(e.el)})),this.segsByCol=null},r.prototype.computeSegSizes=function(e){var t=this.timeGrid,r=this.segsByCol,i=t.colCnt;if(t.computeSegVerticals(e),r)for(var n=0;n<i;n++)this.computeSegHorizontals(r[n])},r.prototype.assignSegSizes=function(e){var t=this.timeGrid,r=this.segsByCol,i=t.colCnt;if(t.assignSegVerticals(e),r)for(var n=0;n<i;n++)this.assignSegCss(r[n])},r.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",meridiem:!1}},r.prototype.computeDisplayEventEnd=function(){return!0},r.prototype.renderSegHtml=function(e,r){var i,n,o,s=e.eventRange,a=s.def,l=s.ui,d=a.allDay,c=t.computeEventDraggable(this.context,a,l),h=e.isStart&&t.computeEventStartResizable(this.context,a,l),u=e.isEnd&&t.computeEventEndResizable(this.context,a,l),p=this.getSegClasses(e,c,h||u,r),f=t.cssToStr(this.getSkinCss(l));if(p.unshift("fc-time-grid-event"),t.isMultiDayRange(s.range)){if(e.isStart||e.isEnd){var g=e.start,m=e.end;i=this._getTimeText(g,m,d),n=this._getTimeText(g,m,d,this.fullTimeFormat),o=this._getTimeText(g,m,d,null,!1)}}else i=this.getTimeText(s),n=this.getTimeText(s,this.fullTimeFormat),o=this.getTimeText(s,null,!1);return'<a class="'+p.join(" ")+'"'+(a.url?' href="'+t.htmlEscape(a.url)+'"':"")+(f?' style="'+f+'"':"")+'><div class="fc-content">'+(i?'<div class="fc-time" data-start="'+t.htmlEscape(o)+'" data-full="'+t.htmlEscape(n)+'"><span>'+t.htmlEscape(i)+"</span></div>":"")+(a.title?'<div class="fc-title">'+t.htmlEscape(a.title)+"</div>":"")+"</div>"+(u?'<div class="fc-resizer fc-end-resizer"></div>':"")+"</a>"},r.prototype.computeSegHorizontals=function(e){var t,r,i;if(function(e){var t,r,i,n,o;for(t=0;t<e.length;t++)for(r=e[t],i=0;i<r.length;i++)for((n=r[i]).forwardSegs=[],o=t+1;o<e.length;o++)l(n,e[o],n.forwardSegs)}(t=function(e){var t,r,i,n=[];for(t=0;t<e.length;t++){for(r=e[t],i=0;i<n.length&&l(r,n[i]).length;i++);r.level=i,(n[i]||(n[i]=[])).push(r)}return n}(e)),r=t[0]){for(i=0;i<r.length;i++)a(r[i]);for(i=0;i<r.length;i++)this.computeSegForwardBack(r[i],0,0)}},r.prototype.computeSegForwardBack=function(e,t,r){var i,n=e.forwardSegs;if(void 0===e.forwardCoord)for(n.length?(this.sortForwardSegs(n),this.computeSegForwardBack(n[0],t+1,r),e.forwardCoord=n[0].backwardCoord):e.forwardCoord=1,e.backwardCoord=e.forwardCoord-(e.forwardCoord-r)/(t+1),i=0;i<n.length;i++)this.computeSegForwardBack(n[i],0,e.forwardCoord)},r.prototype.sortForwardSegs=function(e){var r=e.map(d),i=[{field:"forwardPressure",order:-1},{field:"backwardCoord",order:1}].concat(this.context.eventOrderSpecs);return r.sort((function(e,r){return t.compareByFieldSpecs(e,r,i)})),r.map((function(e){return e._seg}))},r.prototype.assignSegCss=function(e){for(var r=0,i=e;r<i.length;r++){var n=i[r];t.applyStyle(n.el,this.generateSegCss(n)),n.level>0&&n.el.classList.add("fc-time-grid-event-inset"),n.eventRange.def.title&&n.bottom-n.top<30&&n.el.classList.add("fc-short")}},r.prototype.generateSegCss=function(e){var t,r,i=this.context.options.slotEventOverlap,n=e.backwardCoord,o=e.forwardCoord,s=this.timeGrid.generateSegVerticalCss(e),a=this.context.isRtl;return i&&(o=Math.min(1,n+2*(o-n))),a?(t=1-o,r=n):(t=n,r=1-o),s.zIndex=e.level+1,s.left=100*t+"%",s.right=100*r+"%",i&&e.forwardPressure&&(s[a?"marginLeft":"marginRight"]=20),s},r}(t.FgEventRenderer);function a(e){var t,r,i=e.forwardSegs,n=0;if(void 0===e.forwardPressure){for(t=0;t<i.length;t++)a(r=i[t]),n=Math.max(n,1+r.forwardPressure);e.forwardPressure=n}}function l(e,t,r){void 0===r&&(r=[]);for(var i=0;i<t.length;i++)n=e,o=t[i],n.bottom>o.top&&n.top<o.bottom&&r.push(t[i]);var n,o;return r}function d(e){var r=t.buildSegCompareObj(e);return r.forwardPressure=e.forwardPressure,r.backwardCoord=e.backwardCoord,r}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.attachSegs=function(e,t){this.segsByCol=this.timeGrid.groupSegsByCol(e),this.timeGrid.attachSegsByCol(this.segsByCol,this.timeGrid.mirrorContainerEls),this.sourceSeg=t.sourceSeg},t.prototype.generateSegCss=function(t){var r=e.prototype.generateSegCss.call(this,t),i=this.sourceSeg;if(i&&i.col===t.col){var n=e.prototype.generateSegCss.call(this,i);r.left=n.left,r.right=n.right,r.marginLeft=n.marginLeft,r.marginRight=n.marginRight}return r},t}(s),h=function(e){function t(t){var r=e.call(this)||this;return r.timeGrid=t,r}return n(t,e),t.prototype.attachSegs=function(e,t){var r,i=this.timeGrid;return"bgEvent"===e?r=i.bgContainerEls:"businessHours"===e?r=i.businessContainerEls:"highlight"===e&&(r=i.highlightContainerEls),i.attachSegsByCol(i.groupSegsByCol(t),r),t.map((function(e){return e.el}))},t.prototype.computeSegSizes=function(e){this.timeGrid.computeSegVerticals(e)},t.prototype.assignSegSizes=function(e){this.timeGrid.assignSegVerticals(e)},t}(t.FillRenderer),u=[{hours:1},{minutes:30},{minutes:15},{seconds:30},{seconds:15}],p=function(e){function i(r,i){var n=e.call(this,r)||this;n.isSlatSizesDirty=!1,n.isColSizesDirty=!1,n.processOptions=t.memoize(n._processOptions),n.renderSkeleton=t.memoizeRendering(n._renderSkeleton),n.renderSlats=t.memoizeRendering(n._renderSlats,null,[n.renderSkeleton]),n.renderColumns=t.memoizeRendering(n._renderColumns,n._unrenderColumns,[n.renderSkeleton]),n.renderProps=i;var o=n.renderColumns,a=n.eventRenderer=new s(n),l=n.fillRenderer=new h(n);return n.mirrorRenderer=new c(n),n.renderBusinessHours=t.memoizeRendering(l.renderSegs.bind(l,"businessHours"),l.unrender.bind(l,"businessHours"),[o]),n.renderDateSelection=t.memoizeRendering(n._renderDateSelection,n._unrenderDateSelection,[o]),n.renderFgEvents=t.memoizeRendering(a.renderSegs.bind(a),a.unrender.bind(a),[o]),n.renderBgEvents=t.memoizeRendering(l.renderSegs.bind(l,"bgEvent"),l.unrender.bind(l,"bgEvent"),[o]),n.renderEventSelection=t.memoizeRendering(a.selectByInstanceId.bind(a),a.unselectByInstanceId.bind(a),[n.renderFgEvents]),n.renderEventDrag=t.memoizeRendering(n._renderEventDrag,n._unrenderEventDrag,[o]),n.renderEventResize=t.memoizeRendering(n._renderEventResize,n._unrenderEventResize,[o]),n}return n(i,e),i.prototype._processOptions=function(e){var r,i,n=e.slotDuration,o=e.snapDuration;n=t.createDuration(n),o=o?t.createDuration(o):n,null===(r=t.wholeDivideDurations(n,o))&&(o=n,r=1),this.slotDuration=n,this.snapDuration=o,this.snapsPerSlot=r,i=e.slotLabelFormat,Array.isArray(i)&&(i=i[i.length-1]),this.labelFormat=t.createFormatter(i||{hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"short"}),i=e.slotLabelInterval,this.labelInterval=i?t.createDuration(i):this.computeLabelInterval(n)},i.prototype.computeLabelInterval=function(e){var r,i,n;for(r=u.length-1;r>=0;r--)if(i=t.createDuration(u[r]),null!==(n=t.wholeDivideDurations(i,e))&&n>1)return i;return e},i.prototype.render=function(e,t){this.processOptions(t.options);var r=e.cells;this.colCnt=r.length,this.renderSkeleton(t.theme),this.renderSlats(e.dateProfile),this.renderColumns(e.cells,e.dateProfile),this.renderBusinessHours(t,e.businessHourSegs),this.renderDateSelection(e.dateSelectionSegs),this.renderFgEvents(t,e.fgEventSegs),this.renderBgEvents(t,e.bgEventSegs),this.renderEventSelection(e.eventSelection),this.renderEventDrag(e.eventDrag),this.renderEventResize(e.eventResize)},i.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderSlats.unrender(),this.renderColumns.unrender(),this.renderSkeleton.unrender()},i.prototype.updateSize=function(e){var t=this.fillRenderer,r=this.eventRenderer,i=this.mirrorRenderer;(e||this.isSlatSizesDirty)&&(this.buildSlatPositions(),this.isSlatSizesDirty=!1),(e||this.isColSizesDirty)&&(this.buildColPositions(),this.isColSizesDirty=!1),t.computeSizes(e),r.computeSizes(e),i.computeSizes(e),t.assignSizes(e),r.assignSizes(e),i.assignSizes(e)},i.prototype._renderSkeleton=function(e){var t=this.el;t.innerHTML='<div class="fc-bg"></div><div class="fc-slats"></div><hr class="fc-divider '+e.getClass("widgetHeader")+'" style="display:none" />',this.rootBgContainerEl=t.querySelector(".fc-bg"),this.slatContainerEl=t.querySelector(".fc-slats"),this.bottomRuleEl=t.querySelector(".fc-divider")},i.prototype._renderSlats=function(e){var r=this.context.theme;this.slatContainerEl.innerHTML='<table class="'+r.getClass("tableGrid")+'">'+this.renderSlatRowHtml(e)+"</table>",this.slatEls=t.findElements(this.slatContainerEl,"tr"),this.slatPositions=new t.PositionCache(this.el,this.slatEls,!1,!0),this.isSlatSizesDirty=!0},i.prototype.renderSlatRowHtml=function(e){for(var r,i,n,o=this.context,s=o.dateEnv,a=o.theme,l=o.isRtl,d="",c=t.startOfDay(e.renderRange.start),h=e.minTime,u=t.createDuration(0);t.asRoughMs(h)<t.asRoughMs(e.maxTime);)r=s.add(c,h),i=null!==t.wholeDivideDurations(u,this.labelInterval),n='<td class="fc-axis fc-time '+a.getClass("widgetContent")+'">'+(i?"<span>"+t.htmlEscape(s.format(r,this.labelFormat))+"</span>":"")+"</td>",d+='<tr data-time="'+t.formatIsoTimeString(r)+'"'+(i?"":' class="fc-minor"')+">"+(l?"":n)+'<td class="'+a.getClass("widgetContent")+'"></td>'+(l?n:"")+"</tr>",h=t.addDurations(h,this.slotDuration),u=t.addDurations(u,this.slotDuration);return d},i.prototype._renderColumns=function(e,i){var n=this.context,o=n.calendar,s=n.view,a=n.isRtl,l=n.theme,d=n.dateEnv,c=new r.DayBgRow(this.context);this.rootBgContainerEl.innerHTML='<table class="'+l.getClass("tableGrid")+'">'+c.renderHtml({cells:e,dateProfile:i,renderIntroHtml:this.renderProps.renderBgIntroHtml})+"</table>",this.colEls=t.findElements(this.el,".fc-day, .fc-disabled-day");for(var h=0;h<this.colCnt;h++)o.publiclyTrigger("dayRender",[{date:d.toDate(e[h].date),el:this.colEls[h],view:s}]);a&&this.colEls.reverse(),this.colPositions=new t.PositionCache(this.el,this.colEls,!0,!1),this.renderContentSkeleton(),this.isColSizesDirty=!0},i.prototype._unrenderColumns=function(){this.unrenderContentSkeleton()},i.prototype.renderContentSkeleton=function(){var e,r=this.context.isRtl,i=[];i.push(this.renderProps.renderIntroHtml());for(var n=0;n<this.colCnt;n++)i.push('<td><div class="fc-content-col"><div class="fc-event-container fc-mirror-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>');r&&i.reverse(),e=this.contentSkeletonEl=t.htmlToElement('<div class="fc-content-skeleton"><table><tr>'+i.join("")+"</tr></table></div>"),this.colContainerEls=t.findElements(e,".fc-content-col"),this.mirrorContainerEls=t.findElements(e,".fc-mirror-container"),this.fgContainerEls=t.findElements(e,".fc-event-container:not(.fc-mirror-container)"),this.bgContainerEls=t.findElements(e,".fc-bgevent-container"),this.highlightContainerEls=t.findElements(e,".fc-highlight-container"),this.businessContainerEls=t.findElements(e,".fc-business-container"),r&&(this.colContainerEls.reverse(),this.mirrorContainerEls.reverse(),this.fgContainerEls.reverse(),this.bgContainerEls.reverse(),this.highlightContainerEls.reverse(),this.businessContainerEls.reverse()),this.el.appendChild(e)},i.prototype.unrenderContentSkeleton=function(){t.removeElement(this.contentSkeletonEl)},i.prototype.groupSegsByCol=function(e){var t,r=[];for(t=0;t<this.colCnt;t++)r.push([]);for(t=0;t<e.length;t++)r[e[t].col].push(e[t]);return r},i.prototype.attachSegsByCol=function(e,t){var r,i,n;for(r=0;r<this.colCnt;r++)for(i=e[r],n=0;n<i.length;n++)t[r].appendChild(i[n].el)},i.prototype.getNowIndicatorUnit=function(){return"minute"},i.prototype.renderNowIndicator=function(e,r){if(this.colContainerEls){var i,n=this.computeDateTop(r),o=[];for(i=0;i<e.length;i++){var s=t.createElement("div",{className:"fc-now-indicator fc-now-indicator-line"});s.style.top=n+"px",this.colContainerEls[e[i].col].appendChild(s),o.push(s)}if(e.length>0){var a=t.createElement("div",{className:"fc-now-indicator fc-now-indicator-arrow"});a.style.top=n+"px",this.contentSkeletonEl.appendChild(a),o.push(a)}this.nowIndicatorEls=o}},i.prototype.unrenderNowIndicator=function(){this.nowIndicatorEls&&(this.nowIndicatorEls.forEach(t.removeElement),this.nowIndicatorEls=null)},i.prototype.getTotalSlatHeight=function(){return this.slatContainerEl.getBoundingClientRect().height},i.prototype.computeDateTop=function(e,r){return r||(r=t.startOfDay(e)),this.computeTimeTop(t.createDuration(e.valueOf()-r.valueOf()))},i.prototype.computeTimeTop=function(e){var r,i,n=this.slatEls.length,o=this.props.dateProfile,s=(e.milliseconds-t.asRoughMs(o.minTime))/t.asRoughMs(this.slotDuration);return s=Math.max(0,s),s=Math.min(n,s),r=Math.floor(s),i=s-(r=Math.min(r,n-1)),this.slatPositions.tops[r]+this.slatPositions.getHeight(r)*i},i.prototype.computeSegVerticals=function(e){var t,r,i,n=this.context.options.timeGridEventMinHeight;for(t=0;t<e.length;t++)r=e[t],i=this.props.cells[r.col].date,r.top=this.computeDateTop(r.start,i),r.bottom=Math.max(r.top+n,this.computeDateTop(r.end,i))},i.prototype.assignSegVerticals=function(e){var r,i;for(r=0;r<e.length;r++)i=e[r],t.applyStyle(i.el,this.generateSegVerticalCss(i))},i.prototype.generateSegVerticalCss=function(e){return{top:e.top,bottom:-e.bottom}},i.prototype.buildPositionCaches=function(){this.buildColPositions(),this.buildSlatPositions()},i.prototype.buildColPositions=function(){this.colPositions.build()},i.prototype.buildSlatPositions=function(){this.slatPositions.build()},i.prototype.positionToHit=function(e,r){var i=this.context.dateEnv,n=this.snapsPerSlot,o=this.slatPositions,s=this.colPositions,a=s.leftToIndex(e),l=o.topToIndex(r);if(null!=a&&null!=l){var d=o.tops[l],c=o.getHeight(l),h=(r-d)/c,u=l*n+Math.floor(h*n),p=this.props.cells[a].date,f=t.addDurations(this.props.dateProfile.minTime,t.multiplyDuration(this.snapDuration,u)),g=i.add(p,f);return{col:a,dateSpan:{range:{start:g,end:i.add(g,this.snapDuration)},allDay:!1},dayEl:this.colEls[a],relativeRect:{left:s.lefts[a],right:s.rights[a],top:d,bottom:d+c}}}},i.prototype._renderEventDrag=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),e.isEvent?this.mirrorRenderer.renderSegs(this.context,e.segs,{isDragging:!0,sourceSeg:e.sourceSeg}):this.fillRenderer.renderSegs("highlight",this.context,e.segs))},i.prototype._unrenderEventDrag=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),e.isEvent?this.mirrorRenderer.unrender(this.context,e.segs,{isDragging:!0,sourceSeg:e.sourceSeg}):this.fillRenderer.unrender("highlight",this.context))},i.prototype._renderEventResize=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),this.mirrorRenderer.renderSegs(this.context,e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},i.prototype._unrenderEventResize=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.mirrorRenderer.unrender(this.context,e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},i.prototype._renderDateSelection=function(e){e&&(this.context.options.selectMirror?this.mirrorRenderer.renderSegs(this.context,e,{isSelecting:!0}):this.fillRenderer.renderSegs("highlight",this.context,e))},i.prototype._unrenderDateSelection=function(e){e&&(this.context.options.selectMirror?this.mirrorRenderer.unrender(this.context,e,{isSelecting:!0}):this.fillRenderer.unrender("highlight",this.context))},i}(t.DateComponent),f=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.getKeyInfo=function(){return{allDay:{},timed:{}}},r.prototype.getKeysForDateSpan=function(e){return e.allDay?["allDay"]:["timed"]},r.prototype.getKeysForEventDef=function(e){return e.allDay?t.hasBgRendering(e)?["timed","allDay"]:["allDay"]:["timed"]},r}(t.Splitter),g=t.createFormatter({week:"short"}),m=function(e){function i(){var r=null!==e&&e.apply(this,arguments)||this;return r.splitter=new f,r.renderSkeleton=t.memoizeRendering(r._renderSkeleton,r._unrenderSkeleton),r.renderHeadIntroHtml=function(){var e,i=r.context,n=i.theme,o=i.dateEnv,s=i.options,a=r.props.dateProfile.renderRange,l=t.diffDays(a.start,a.end);return s.weekNumbers?(e=o.format(a.start,g),'<th class="fc-axis fc-week-number '+n.getClass("widgetHeader")+'" '+r.axisStyleAttr()+">"+t.buildGotoAnchorHtml(s,o,{date:a.start,type:"week",forceOff:l>1},t.htmlEscape(e))+"</th>"):'<th class="fc-axis '+n.getClass("widgetHeader")+'" '+r.axisStyleAttr()+"></th>"},r.renderTimeGridBgIntroHtml=function(){return'<td class="fc-axis '+r.context.theme.getClass("widgetContent")+'" '+r.axisStyleAttr()+"></td>"},r.renderTimeGridIntroHtml=function(){return'<td class="fc-axis" '+r.axisStyleAttr()+"></td>"},r.renderDayGridBgIntroHtml=function(){var e=r.context,i=e.theme,n=e.options;return'<td class="fc-axis '+i.getClass("widgetContent")+'" '+r.axisStyleAttr()+"><span>"+t.getAllDayHtml(n)+"</span></td>"},r.renderDayGridIntroHtml=function(){return'<td class="fc-axis" '+r.axisStyleAttr()+"></td>"},r}return n(i,e),i.prototype.render=function(t,r){e.prototype.render.call(this,t,r),this.renderSkeleton(r)},i.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderSkeleton.unrender()},i.prototype._renderSkeleton=function(e){this.el.classList.add("fc-timeGrid-view"),this.el.innerHTML=this.renderSkeletonHtml(),this.scroller=new t.ScrollComponent("hidden","auto");var i=this.scroller.el;this.el.querySelector(".fc-body > tr > td").appendChild(i),i.classList.add("fc-time-grid-container");var n=t.createElement("div",{className:"fc-time-grid"});if(i.appendChild(n),this.timeGrid=new p(n,{renderBgIntroHtml:this.renderTimeGridBgIntroHtml,renderIntroHtml:this.renderTimeGridIntroHtml}),e.options.allDaySlot){this.dayGrid=new r.DayGrid(this.el.querySelector(".fc-day-grid"),{renderNumberIntroHtml:this.renderDayGridIntroHtml,renderBgIntroHtml:this.renderDayGridBgIntroHtml,renderIntroHtml:this.renderDayGridIntroHtml,colWeekNumbersVisible:!1,cellWeekNumbersVisible:!1});var o=this.el.querySelector(".fc-divider");this.dayGrid.bottomCoordPadding=o.getBoundingClientRect().height}},i.prototype._unrenderSkeleton=function(){this.el.classList.remove("fc-timeGrid-view"),this.timeGrid.destroy(),this.dayGrid&&this.dayGrid.destroy(),this.scroller.destroy()},i.prototype.renderSkeletonHtml=function(){var e=this.context,t=e.theme,r=e.options;return'<table class="'+t.getClass("tableGrid")+'">'+(r.columnHeader?'<thead class="fc-head"><tr><td class="fc-head-container '+t.getClass("widgetHeader")+'">&nbsp;</td></tr></thead>':"")+'<tbody class="fc-body"><tr><td class="'+t.getClass("widgetContent")+'">'+(r.allDaySlot?'<div class="fc-day-grid"></div><hr class="fc-divider '+t.getClass("widgetHeader")+'" />':"")+"</td></tr></tbody></table>"},i.prototype.getNowIndicatorUnit=function(){return this.timeGrid.getNowIndicatorUnit()},i.prototype.unrenderNowIndicator=function(){this.timeGrid.unrenderNowIndicator()},i.prototype.updateSize=function(t,r,i){e.prototype.updateSize.call(this,t,r,i),this.timeGrid.updateSize(t),this.dayGrid&&this.dayGrid.updateSize(t)},i.prototype.updateBaseSize=function(e,r,i){var n,o,s,a=this;if(this.axisWidth=t.matchCellWidths(t.findElements(this.el,".fc-axis")),this.timeGrid.colEls){var l=t.findElements(this.el,".fc-row").filter((function(e){return!a.scroller.el.contains(e)}));this.timeGrid.bottomRuleEl.style.display="none",this.scroller.clear(),l.forEach(t.uncompensateScroll),this.dayGrid&&(this.dayGrid.removeSegPopover(),(n=this.context.options.eventLimit)&&"number"!=typeof n&&(n=5),n&&this.dayGrid.limitRows(n)),i||(o=this.computeScrollerHeight(r),this.scroller.setHeight(o),((s=this.scroller.getScrollbarWidths()).left||s.right)&&(l.forEach((function(e){t.compensateScroll(e,s)})),o=this.computeScrollerHeight(r),this.scroller.setHeight(o)),this.scroller.lockOverflow(s),this.timeGrid.getTotalSlatHeight()<o&&(this.timeGrid.bottomRuleEl.style.display=""))}else i||(o=this.computeScrollerHeight(r),this.scroller.setHeight(o))},i.prototype.computeScrollerHeight=function(e){return e-t.subtractInnerElHeight(this.el,this.scroller.el)},i.prototype.computeDateScroll=function(e){var t=this.timeGrid.computeTimeTop(e);return(t=Math.ceil(t))&&t++,{top:t}},i.prototype.queryDateScroll=function(){return{top:this.scroller.getScrollTop()}},i.prototype.applyDateScroll=function(e){void 0!==e.top&&this.scroller.setScrollTop(e.top)},i.prototype.axisStyleAttr=function(){return null!=this.axisWidth?'style="width:'+this.axisWidth+'px"':""},i}(t.View);m.prototype.usesMinMaxTime=!0;var y=function(e){function r(r){var i=e.call(this,r.el)||this;return i.buildDayRanges=t.memoize(v),i.slicer=new S,i.timeGrid=r,i}return n(r,e),r.prototype.firstContext=function(e){e.calendar.registerInteractiveComponent(this,{el:this.timeGrid.el})},r.prototype.destroy=function(){e.prototype.destroy.call(this),this.context.calendar.unregisterInteractiveComponent(this)},r.prototype.render=function(e,t){var r=this.context.dateEnv,i=e.dateProfile,n=e.dayTable,s=this.dayRanges=this.buildDayRanges(n,i,r),a=this.timeGrid;a.receiveContext(t),a.receiveProps(o({},this.slicer.sliceProps(e,i,null,t.calendar,a,s),{dateProfile:i,cells:n.cells[0]}),t)},r.prototype.renderNowIndicator=function(e){this.timeGrid.renderNowIndicator(this.slicer.sliceNowDate(e,this.timeGrid,this.dayRanges),e)},r.prototype.buildPositionCaches=function(){this.timeGrid.buildPositionCaches()},r.prototype.queryHit=function(e,t){var r=this.timeGrid.positionToHit(e,t);if(r)return{component:this.timeGrid,dateSpan:r.dateSpan,dayEl:r.dayEl,rect:{left:r.relativeRect.left,right:r.relativeRect.right,top:r.relativeRect.top,bottom:r.relativeRect.bottom},layer:0}},r}(t.DateComponent);function v(e,t,r){for(var i=[],n=0,o=e.headerDates;n<o.length;n++){var s=o[n];i.push({start:r.add(s,t.minTime),end:r.add(s,t.maxTime)})}return i}var S=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.sliceRange=function(e,r){for(var i=[],n=0;n<r.length;n++){var o=t.intersectRanges(e,r[n]);o&&i.push({start:o.start,end:o.end,isStart:o.start.valueOf()===e.start.valueOf(),isEnd:o.end.valueOf()===e.end.valueOf(),col:n})}return i},r}(t.Slicer),C=function(e){function i(){var r=null!==e&&e.apply(this,arguments)||this;return r.buildDayTable=t.memoize(E),r}return n(i,e),i.prototype.render=function(t,r){e.prototype.render.call(this,t,r);var i=this.props,n=i.dateProfile,s=i.dateProfileGenerator,a=r.nextDayThreshold,l=this.buildDayTable(n,s),d=this.splitter.splitProps(t);this.header&&this.header.receiveProps({dateProfile:n,dates:l.headerDates,datesRepDistinctDays:!0,renderIntroHtml:this.renderHeadIntroHtml},r),this.simpleTimeGrid.receiveProps(o({},d.timed,{dateProfile:n,dayTable:l}),r),this.simpleDayGrid&&this.simpleDayGrid.receiveProps(o({},d.allDay,{dateProfile:n,dayTable:l,nextDayThreshold:a,isRigid:!1}),r),this.startNowIndicator(n,s)},i.prototype._renderSkeleton=function(i){e.prototype._renderSkeleton.call(this,i),i.options.columnHeader&&(this.header=new t.DayHeader(this.el.querySelector(".fc-head-container"))),this.simpleTimeGrid=new y(this.timeGrid),this.dayGrid&&(this.simpleDayGrid=new r.SimpleDayGrid(this.dayGrid))},i.prototype._unrenderSkeleton=function(){e.prototype._unrenderSkeleton.call(this),this.header&&this.header.destroy(),this.simpleTimeGrid.destroy(),this.simpleDayGrid&&this.simpleDayGrid.destroy()},i.prototype.renderNowIndicator=function(e){this.simpleTimeGrid.renderNowIndicator(e)},i}(m);function E(e,r){var i=new t.DaySeries(e.renderRange,r);return new t.DayTable(i,!1)}var b=t.createPlugin({defaultView:"timeGridWeek",views:{timeGrid:{class:C,allDaySlot:!0,slotDuration:"00:30:00",slotEventOverlap:!0},timeGridDay:{type:"timeGrid",duration:{days:1}},timeGridWeek:{type:"timeGrid",duration:{weeks:1}}}});e.AbstractTimeGridView=m,e.TimeGrid=p,e.TimeGridSlicer=S,e.TimeGridView=C,e.buildDayRanges=v,e.buildDayTable=E,e.default=b,Object.defineProperty(e,"__esModule",{value:!0})}));
/*!
FullCalendar List View Plugin v4.4.2
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@fullcalendar/core")):"function"==typeof define&&define.amd?define(["exports","@fullcalendar/core"],t):t((e=e||self).FullCalendarList={},e.FullCalendar)}(this,(function(e,t){"use strict";var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function r(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var s=function(e){function n(t){var n=e.call(this)||this;return n.listView=t,n}return r(n,e),n.prototype.attachSegs=function(e){e.length?this.listView.renderSegList(e):this.listView.renderEmptyMessage()},n.prototype.detachSegs=function(){},n.prototype.renderSegHtml=function(e){var n,r=this.context,s=r.theme,o=r.options,i=e.eventRange,a=i.def,l=i.instance,d=i.ui,c=a.url,p=["fc-list-item"].concat(d.classNames),h=d.backgroundColor;return n=a.allDay?t.getAllDayHtml(o):t.isMultiDayRange(i.range)?e.isStart?t.htmlEscape(this._getTimeText(l.range.start,e.end,!1)):e.isEnd?t.htmlEscape(this._getTimeText(e.start,l.range.end,!1)):t.getAllDayHtml(o):t.htmlEscape(this.getTimeText(i)),c&&p.push("fc-has-url"),'<tr class="'+p.join(" ")+'">'+(this.displayEventTime?'<td class="fc-list-item-time '+s.getClass("widgetContent")+'">'+(n||"")+"</td>":"")+'<td class="fc-list-item-marker '+s.getClass("widgetContent")+'"><span class="fc-event-dot"'+(h?' style="background-color:'+h+'"':"")+'></span></td><td class="fc-list-item-title '+s.getClass("widgetContent")+'"><a'+(c?' href="'+t.htmlEscape(c)+'"':"")+">"+t.htmlEscape(a.title||"")+"</a></td></tr>"},n.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",meridiem:"short"}},n}(t.FgEventRenderer),o=function(e){function n(n,r){var o=e.call(this,n,r)||this;o.computeDateVars=t.memoize(i),o.eventStoreToSegs=t.memoize(o._eventStoreToSegs),o.renderSkeleton=t.memoizeRendering(o._renderSkeleton,o._unrenderSkeleton);var a=o.eventRenderer=new s(o);return o.renderContent=t.memoizeRendering(a.renderSegs.bind(a),a.unrender.bind(a),[o.renderSkeleton]),o}return r(n,e),n.prototype.firstContext=function(e){e.calendar.registerInteractiveComponent(this,{el:this.el})},n.prototype.render=function(t,n){e.prototype.render.call(this,t,n);var r=this.computeDateVars(t.dateProfile),s=r.dayDates,o=r.dayRanges;this.dayDates=s,this.renderSkeleton(n),this.renderContent(n,this.eventStoreToSegs(t.eventStore,t.eventUiBases,o))},n.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderSkeleton.unrender(),this.renderContent.unrender(),this.context.calendar.unregisterInteractiveComponent(this)},n.prototype._renderSkeleton=function(e){var n=e.theme;this.el.classList.add("fc-list-view");for(var r=0,s=(n.getClass("listView")||"").split(" ");r<s.length;r++){var o=s[r];o&&this.el.classList.add(o)}this.scroller=new t.ScrollComponent("hidden","auto"),this.el.appendChild(this.scroller.el),this.contentEl=this.scroller.el},n.prototype._unrenderSkeleton=function(){this.scroller.destroy()},n.prototype.updateSize=function(t,n,r){e.prototype.updateSize.call(this,t,n,r),this.eventRenderer.computeSizes(t),this.eventRenderer.assignSizes(t),this.scroller.clear(),r||this.scroller.setHeight(this.computeScrollerHeight(n))},n.prototype.computeScrollerHeight=function(e){return e-t.subtractInnerElHeight(this.el,this.scroller.el)},n.prototype._eventStoreToSegs=function(e,n,r){return this.eventRangesToSegs(t.sliceEventStore(e,n,this.props.dateProfile.activeRange,this.context.nextDayThreshold).fg,r)},n.prototype.eventRangesToSegs=function(e,t){for(var n=[],r=0,s=e;r<s.length;r++){var o=s[r];n.push.apply(n,this.eventRangeToSegs(o,t))}return n},n.prototype.eventRangeToSegs=function(e,n){var r,s,o,i=this.context,a=i.dateEnv,l=i.nextDayThreshold,d=e.range,c=e.def.allDay,p=[];for(r=0;r<n.length;r++)if((s=t.intersectRanges(d,n[r]))&&(o={component:this,eventRange:e,start:s.start,end:s.end,isStart:e.isStart&&s.start.valueOf()===d.start.valueOf(),isEnd:e.isEnd&&s.end.valueOf()===d.end.valueOf(),dayIndex:r},p.push(o),!o.isEnd&&!c&&r+1<n.length&&d.end<a.add(n[r+1].start,l))){o.end=d.end,o.isEnd=!0;break}return p},n.prototype.renderEmptyMessage=function(){this.contentEl.innerHTML='<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">'+t.htmlEscape(this.context.options.noEventsMessage)+"</div></div></div>"},n.prototype.renderSegList=function(e){var n,r,s,o=this.context.theme,i=this.groupSegsByDay(e),a=t.htmlToElement('<table class="fc-list-table '+o.getClass("tableList")+'"><tbody></tbody></table>'),l=a.querySelector("tbody");for(n=0;n<i.length;n++)if(r=i[n])for(l.appendChild(this.buildDayHeaderRow(this.dayDates[n])),r=this.eventRenderer.sortEventSegs(r),s=0;s<r.length;s++)l.appendChild(r[s].el);this.contentEl.innerHTML="",this.contentEl.appendChild(a)},n.prototype.groupSegsByDay=function(e){var t,n,r=[];for(t=0;t<e.length;t++)(r[(n=e[t]).dayIndex]||(r[n.dayIndex]=[])).push(n);return r},n.prototype.buildDayHeaderRow=function(e){var n=this.context,r=n.theme,s=n.dateEnv,o=n.options,i=t.createFormatter(o.listDayFormat),a=t.createFormatter(o.listDayAltFormat);return t.createElement("tr",{className:"fc-list-heading","data-date":s.formatIso(e,{omitTime:!0})},'<td class="'+(r.getClass("tableListHeading")||r.getClass("widgetHeader"))+'" colspan="3">'+(i?t.buildGotoAnchorHtml(o,s,e,{class:"fc-list-heading-main"},t.htmlEscape(s.format(e,i))):"")+(a?t.buildGotoAnchorHtml(o,s,e,{class:"fc-list-heading-alt"},t.htmlEscape(s.format(e,a))):"")+"</td>")},n}(t.View);function i(e){for(var n=t.startOfDay(e.renderRange.start),r=e.renderRange.end,s=[],o=[];n<r;)s.push(n),o.push({start:n,end:t.addDays(n,1)}),n=t.addDays(n,1);return{dayDates:s,dayRanges:o}}o.prototype.fgSegSelector=".fc-list-item";var a=t.createPlugin({views:{list:{class:o,buttonTextKey:"list",listDayFormat:{month:"long",day:"numeric",year:"numeric"}},listDay:{type:"list",duration:{days:1},listDayFormat:{weekday:"long"}},listWeek:{type:"list",duration:{weeks:1},listDayFormat:{weekday:"long"},listDayAltFormat:{month:"long",day:"numeric",year:"numeric"}},listMonth:{type:"list",duration:{month:1},listDayAltFormat:{weekday:"long"}},listYear:{type:"list",duration:{year:1},listDayAltFormat:{weekday:"long"}}}});e.ListView=o,e.default=a,Object.defineProperty(e,"__esModule",{value:!0})}));
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.FullCalendarLocalesAll = factory());
}(this, function () { 'use strict';

    var _m0 = {
        code: "af",
        week: {
            dow: 1,
            doy: 4 // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
        },
        buttonText: {
            prev: "Vorige",
            next: "Volgende",
            today: "Vandag",
            year: "Jaar",
            month: "Maand",
            week: "Week",
            day: "Dag",
            list: "Agenda"
        },
        allDayHtml: "Heeldag",
        eventLimitText: "Addisionele",
        noEventsMessage: "Daar is geen gebeurtenisse nie"
    };

    var _m1 = {
        code: "ar-dz",
        week: {
            dow: 0,
            doy: 4 // The week that contains Jan 1st is the first week of the year.
        },
        dir: 'rtl',
        buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
        },
        weekLabel: "أسبوع",
        allDayText: "اليوم كله",
        eventLimitText: "أخرى",
        noEventsMessage: "أي أحداث لعرض"
    };

    var _m2 = {
        code: "ar-kw",
        week: {
            dow: 0,
            doy: 12 // The week that contains Jan 1st is the first week of the year.
        },
        dir: 'rtl',
        buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
        },
        weekLabel: "أسبوع",
        allDayText: "اليوم كله",
        eventLimitText: "أخرى",
        noEventsMessage: "أي أحداث لعرض"
    };

    var _m3 = {
        code: "ar-ly",
        week: {
            dow: 6,
            doy: 12 // The week that contains Jan 1st is the first week of the year.
        },
        dir: 'rtl',
        buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
        },
        weekLabel: "أسبوع",
        allDayText: "اليوم كله",
        eventLimitText: "أخرى",
        noEventsMessage: "أي أحداث لعرض"
    };

    var _m4 = {
        code: "ar-ma",
        week: {
            dow: 6,
            doy: 12 // The week that contains Jan 1st is the first week of the year.
        },
        dir: 'rtl',
        buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
        },
        weekLabel: "أسبوع",
        allDayText: "اليوم كله",
        eventLimitText: "أخرى",
        noEventsMessage: "أي أحداث لعرض"
    };

    var _m5 = {
        code: "ar-sa",
        week: {
            dow: 0,
            doy: 6 // The week that contains Jan 1st is the first week of the year.
        },
        dir: 'rtl',
        buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
        },
        weekLabel: "أسبوع",
        allDayText: "اليوم كله",
        eventLimitText: "أخرى",
        noEventsMessage: "أي أحداث لعرض"
    };

    var _m6 = {
        code: "ar-tn",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        dir: 'rtl',
        buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
        },
        weekLabel: "أسبوع",
        allDayText: "اليوم كله",
        eventLimitText: "أخرى",
        noEventsMessage: "أي أحداث لعرض"
    };

    var _m7 = {
        code: "ar",
        week: {
            dow: 6,
            doy: 12 // The week that contains Jan 1st is the first week of the year.
        },
        dir: 'rtl',
        buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
        },
        weekLabel: "أسبوع",
        allDayText: "اليوم كله",
        eventLimitText: "أخرى",
        noEventsMessage: "أي أحداث لعرض"
    };

    var _m8 = {
        code: "az",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Əvvəl",
            next: "Sonra",
            today: "Bu Gün",
            month: "Ay",
            week: "Həftə",
            day: "Gün",
            list: "Gündəm"
        },
        weekLabel: "Həftə",
        allDayText: "Bütün Gün",
        eventLimitText: function (n) {
            return "+ daha çox " + n;
        },
        noEventsMessage: "Göstərmək üçün hadisə yoxdur"
    };

    var _m9 = {
        code: "bg",
        week: {
            dow: 1,
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        },
        buttonText: {
            prev: "назад",
            next: "напред",
            today: "днес",
            month: "Месец",
            week: "Седмица",
            day: "Ден",
            list: "График"
        },
        allDayText: "Цял ден",
        eventLimitText: function (n) {
            return "+още " + n;
        },
        noEventsMessage: "Няма събития за показване"
    };

    var _m10 = {
        code: "bs",
        week: {
            dow: 1,
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        },
        buttonText: {
            prev: "Prošli",
            next: "Sljedeći",
            today: "Danas",
            month: "Mjesec",
            week: "Sedmica",
            day: "Dan",
            list: "Raspored"
        },
        weekLabel: "Sed",
        allDayText: "Cijeli dan",
        eventLimitText: function (n) {
            return "+ još " + n;
        },
        noEventsMessage: "Nema događaja za prikazivanje"
    };

    var _m11 = {
        code: "ca",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Anterior",
            next: "Següent",
            today: "Avui",
            month: "Mes",
            week: "Setmana",
            day: "Dia",
            list: "Agenda"
        },
        weekLabel: "Set",
        allDayText: "Tot el dia",
        eventLimitText: "més",
        noEventsMessage: "No hi ha esdeveniments per mostrar"
    };

    var _m12 = {
        code: "cs",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Dříve",
            next: "Později",
            today: "Nyní",
            month: "Měsíc",
            week: "Týden",
            day: "Den",
            list: "Agenda"
        },
        weekLabel: "Týd",
        allDayText: "Celý den",
        eventLimitText: function (n) {
            return "+další: " + n;
        },
        noEventsMessage: "Žádné akce k zobrazení"
    };

    var _m13 = {
        code: "da",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Forrige",
            next: "Næste",
            today: "I dag",
            month: "Måned",
            week: "Uge",
            day: "Dag",
            list: "Agenda"
        },
        weekLabel: "Uge",
        allDayText: "Hele dagen",
        eventLimitText: "flere",
        noEventsMessage: "Ingen arrangementer at vise"
    };

    var _m14 = {
        code: "de",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Zurück",
            next: "Vor",
            today: "Heute",
            year: "Jahr",
            month: "Monat",
            week: "Woche",
            day: "Tag",
            list: "Terminübersicht"
        },
        weekLabel: "KW",
        allDayText: "Ganztägig",
        eventLimitText: function (n) {
            return "+ weitere " + n;
        },
        noEventsMessage: "Keine Ereignisse anzuzeigen"
    };

    var _m15 = {
        code: "el",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4st is the first week of the year.
        },
        buttonText: {
            prev: "Προηγούμενος",
            next: "Επόμενος",
            today: "Σήμερα",
            month: "Μήνας",
            week: "Εβδομάδα",
            day: "Ημέρα",
            list: "Ατζέντα"
        },
        weekLabel: "Εβδ",
        allDayText: "Ολοήμερο",
        eventLimitText: "περισσότερα",
        noEventsMessage: "Δεν υπάρχουν γεγονότα προς εμφάνιση"
    };

    var _m16 = {
        code: "en-au",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    var _m17 = {
        code: "en-gb",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    var _m18 = {
        code: "en-nz",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    var _m19 = {
        code: "es",
        week: {
            dow: 0,
            doy: 6 // The week that contains Jan 1st is the first week of the year.
        },
        buttonText: {
            prev: "Ant",
            next: "Sig",
            today: "Hoy",
            month: "Mes",
            week: "Semana",
            day: "Día",
            list: "Agenda"
        },
        weekLabel: "Sm",
        allDayHtml: "Todo<br/>el día",
        eventLimitText: "más",
        noEventsMessage: "No hay eventos para mostrar"
    };

    var _m20 = {
        code: "es",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Ant",
            next: "Sig",
            today: "Hoy",
            month: "Mes",
            week: "Semana",
            day: "Día",
            list: "Agenda"
        },
        weekLabel: "Sm",
        allDayHtml: "Todo<br/>el día",
        eventLimitText: "más",
        noEventsMessage: "No hay eventos para mostrar"
    };

    var _m21 = {
        code: "et",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Eelnev",
            next: "Järgnev",
            today: "Täna",
            month: "Kuu",
            week: "Nädal",
            day: "Päev",
            list: "Päevakord"
        },
        weekLabel: "näd",
        allDayText: "Kogu päev",
        eventLimitText: function (n) {
            return "+ veel " + n;
        },
        noEventsMessage: "Kuvamiseks puuduvad sündmused"
    };

    var _m22 = {
        code: "eu",
        week: {
            dow: 1,
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        },
        buttonText: {
            prev: "Aur",
            next: "Hur",
            today: "Gaur",
            month: "Hilabetea",
            week: "Astea",
            day: "Eguna",
            list: "Agenda"
        },
        weekLabel: "As",
        allDayHtml: "Egun<br/>osoa",
        eventLimitText: "gehiago",
        noEventsMessage: "Ez dago ekitaldirik erakusteko"
    };

    var _m23 = {
        code: "fa",
        week: {
            dow: 6,
            doy: 12 // The week that contains Jan 1st is the first week of the year.
        },
        dir: 'rtl',
        buttonText: {
            prev: "قبلی",
            next: "بعدی",
            today: "امروز",
            month: "ماه",
            week: "هفته",
            day: "روز",
            list: "برنامه"
        },
        weekLabel: "هف",
        allDayText: "تمام روز",
        eventLimitText: function (n) {
            return "بیش از " + n;
        },
        noEventsMessage: "هیچ رویدادی به نمایش"
    };

    var _m24 = {
        code: "fi",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Edellinen",
            next: "Seuraava",
            today: "Tänään",
            month: "Kuukausi",
            week: "Viikko",
            day: "Päivä",
            list: "Tapahtumat"
        },
        weekLabel: "Vk",
        allDayText: "Koko päivä",
        eventLimitText: "lisää",
        noEventsMessage: "Ei näytettäviä tapahtumia"
    };

    var _m25 = {
        code: "fr",
        buttonText: {
            prev: "Précédent",
            next: "Suivant",
            today: "Aujourd'hui",
            year: "Année",
            month: "Mois",
            week: "Semaine",
            day: "Jour",
            list: "Mon planning"
        },
        weekLabel: "Sem.",
        allDayHtml: "Toute la<br/>journée",
        eventLimitText: "en plus",
        noEventsMessage: "Aucun événement à afficher"
    };

    var _m26 = {
        code: "fr-ch",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Précédent",
            next: "Suivant",
            today: "Courant",
            year: "Année",
            month: "Mois",
            week: "Semaine",
            day: "Jour",
            list: "Mon planning"
        },
        weekLabel: "Sm",
        allDayHtml: "Toute la<br/>journée",
        eventLimitText: "en plus",
        noEventsMessage: "Aucun événement à afficher"
    };

    var _m27 = {
        code: "fr",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Précédent",
            next: "Suivant",
            today: "Aujourd'hui",
            year: "Année",
            month: "Mois",
            week: "Semaine",
            day: "Jour",
            list: "Planning"
        },
        weekLabel: "Sem.",
        allDayHtml: "Toute la<br/>journée",
        eventLimitText: "en plus",
        noEventsMessage: "Aucun événement à afficher"
    };

    var _m28 = {
        code: "gl",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Ant",
            next: "Seg",
            today: "Hoxe",
            month: "Mes",
            week: "Semana",
            day: "Día",
            list: "Axenda"
        },
        weekLabel: "Sm",
        allDayHtml: "Todo<br/>o día",
        eventLimitText: "máis",
        noEventsMessage: "Non hai eventos para amosar"
    };

    var _m29 = {
        code: "he",
        dir: 'rtl',
        buttonText: {
            prev: "הקודם",
            next: "הבא",
            today: "היום",
            month: "חודש",
            week: "שבוע",
            day: "יום",
            list: "סדר יום"
        },
        allDayText: "כל היום",
        eventLimitText: "אחר",
        noEventsMessage: "אין אירועים להצגה",
        weekLabel: "שבוע"
    };

    var _m30 = {
        code: "hi",
        week: {
            dow: 0,
            doy: 6 // The week that contains Jan 1st is the first week of the year.
        },
        buttonText: {
            prev: "पिछला",
            next: "अगला",
            today: "आज",
            month: "महीना",
            week: "सप्ताह",
            day: "दिन",
            list: "कार्यसूची"
        },
        weekLabel: "हफ्ता",
        allDayText: "सभी दिन",
        eventLimitText: function (n) {
            return "+अधिक " + n;
        },
        noEventsMessage: "कोई घटनाओं को प्रदर्शित करने के लिए"
    };

    var _m31 = {
        code: "hr",
        week: {
            dow: 1,
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        },
        buttonText: {
            prev: "Prijašnji",
            next: "Sljedeći",
            today: "Danas",
            month: "Mjesec",
            week: "Tjedan",
            day: "Dan",
            list: "Raspored"
        },
        weekLabel: "Tje",
        allDayText: "Cijeli dan",
        eventLimitText: function (n) {
            return "+ još " + n;
        },
        noEventsMessage: "Nema događaja za prikaz"
    };

    var _m32 = {
        code: "hu",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "vissza",
            next: "előre",
            today: "ma",
            month: "Hónap",
            week: "Hét",
            day: "Nap",
            list: "Napló"
        },
        weekLabel: "Hét",
        allDayText: "Egész nap",
        eventLimitText: "további",
        noEventsMessage: "Nincs megjeleníthető esemény"
    };

    var _m33 = {
        code: "id",
        week: {
            dow: 1,
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        },
        buttonText: {
            prev: "mundur",
            next: "maju",
            today: "hari ini",
            month: "Bulan",
            week: "Minggu",
            day: "Hari",
            list: "Agenda"
        },
        weekLabel: "Mg",
        allDayHtml: "Sehari<br/>penuh",
        eventLimitText: "lebih",
        noEventsMessage: "Tidak ada acara untuk ditampilkan"
    };

    var _m34 = {
        code: "is",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Fyrri",
            next: "Næsti",
            today: "Í dag",
            month: "Mánuður",
            week: "Vika",
            day: "Dagur",
            list: "Dagskrá"
        },
        weekLabel: "Vika",
        allDayHtml: "Allan<br/>daginn",
        eventLimitText: "meira",
        noEventsMessage: "Engir viðburðir til að sýna"
    };

    var _m35 = {
        code: "it",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Prec",
            next: "Succ",
            today: "Oggi",
            month: "Mese",
            week: "Settimana",
            day: "Giorno",
            list: "Agenda"
        },
        weekLabel: "Sm",
        allDayHtml: "Tutto il<br/>giorno",
        eventLimitText: function (n) {
            return "+altri " + n;
        },
        noEventsMessage: "Non ci sono eventi da visualizzare"
    };

    var _m36 = {
        code: "ja",
        buttonText: {
            prev: "前",
            next: "次",
            today: "今日",
            month: "月",
            week: "週",
            day: "日",
            list: "予定リスト"
        },
        weekLabel: "週",
        allDayText: "終日",
        eventLimitText: function (n) {
            return "他 " + n + " 件";
        },
        noEventsMessage: "表示する予定はありません"
    };

    var _m37 = {
        code: "ka",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "წინა",
            next: "შემდეგი",
            today: "დღეს",
            month: "თვე",
            week: "კვირა",
            day: "დღე",
            list: "დღის წესრიგი"
        },
        weekLabel: "კვ",
        allDayText: "მთელი დღე",
        eventLimitText: function (n) {
            return "+ კიდევ " + n;
        },
        noEventsMessage: "ღონისძიებები არ არის"
    };

    var _m38 = {
        code: "kk",
        week: {
            dow: 1,
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        },
        buttonText: {
            prev: "Алдыңғы",
            next: "Келесі",
            today: "Бүгін",
            month: "Ай",
            week: "Апта",
            day: "Күн",
            list: "Күн тәртібі"
        },
        weekLabel: "Не",
        allDayText: "Күні бойы",
        eventLimitText: function (n) {
            return "+ тағы " + n;
        },
        noEventsMessage: "Көрсету үшін оқиғалар жоқ"
    };

    var _m39 = {
        code: "ko",
        buttonText: {
            prev: "이전달",
            next: "다음달",
            today: "오늘",
            month: "월",
            week: "주",
            day: "일",
            list: "일정목록"
        },
        weekLabel: "주",
        allDayText: "종일",
        eventLimitText: "개",
        noEventsMessage: "일정이 없습니다"
    };

    var _m40 = {
        code: "lb",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Zréck",
            next: "Weider",
            today: "Haut",
            month: "Mount",
            week: "Woch",
            day: "Dag",
            list: "Terminiwwersiicht"
        },
        weekLabel: "W",
        allDayText: "Ganzen Dag",
        eventLimitText: "méi",
        noEventsMessage: "Nee Evenementer ze affichéieren"
    };

    var _m41 = {
        code: "lt",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Atgal",
            next: "Pirmyn",
            today: "Šiandien",
            month: "Mėnuo",
            week: "Savaitė",
            day: "Diena",
            list: "Darbotvarkė"
        },
        weekLabel: "SAV",
        allDayText: "Visą dieną",
        eventLimitText: "daugiau",
        noEventsMessage: "Nėra įvykių rodyti"
    };

    var _m42 = {
        code: "lv",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Iepr.",
            next: "Nāk.",
            today: "Šodien",
            month: "Mēnesis",
            week: "Nedēļa",
            day: "Diena",
            list: "Dienas kārtība"
        },
        weekLabel: "Ned.",
        allDayText: "Visu dienu",
        eventLimitText: function (n) {
            return "+vēl " + n;
        },
        noEventsMessage: "Nav notikumu"
    };

    var _m43 = {
        code: "mk",
        buttonText: {
            prev: "претходно",
            next: "следно",
            today: "Денес",
            month: "Месец",
            week: "Недела",
            day: "Ден",
            list: "График"
        },
        weekLabel: "Сед",
        allDayText: "Цел ден",
        eventLimitText: function (n) {
            return "+повеќе " + n;
        },
        noEventsMessage: "Нема настани за прикажување"
    };

    var _m44 = {
        code: "ms",
        week: {
            dow: 1,
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        },
        buttonText: {
            prev: "Sebelum",
            next: "Selepas",
            today: "hari ini",
            month: "Bulan",
            week: "Minggu",
            day: "Hari",
            list: "Agenda"
        },
        weekLabel: "Mg",
        allDayText: "Sepanjang hari",
        eventLimitText: function (n) {
            return "masih ada " + n + " acara";
        },
        noEventsMessage: "Tiada peristiwa untuk dipaparkan"
    };

    var _m45 = {
        code: "nb",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Forrige",
            next: "Neste",
            today: "I dag",
            month: "Måned",
            week: "Uke",
            day: "Dag",
            list: "Agenda"
        },
        weekLabel: "Uke",
        allDayText: "Hele dagen",
        eventLimitText: "til",
        noEventsMessage: "Ingen hendelser å vise"
    };

    var _m46 = {
        code: "nl",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Voorgaand",
            next: "Volgende",
            today: "Vandaag",
            year: "Jaar",
            month: "Maand",
            week: "Week",
            day: "Dag",
            list: "Agenda"
        },
        allDayText: "Hele dag",
        eventLimitText: "extra",
        noEventsMessage: "Geen evenementen om te laten zien"
    };

    var _m47 = {
        code: "nn",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Førre",
            next: "Neste",
            today: "I dag",
            month: "Månad",
            week: "Veke",
            day: "Dag",
            list: "Agenda"
        },
        weekLabel: "Veke",
        allDayText: "Heile dagen",
        eventLimitText: "til",
        noEventsMessage: "Ingen hendelser å vise"
    };

    var _m48 = {
        code: "pl",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Poprzedni",
            next: "Następny",
            today: "Dziś",
            month: "Miesiąc",
            week: "Tydzień",
            day: "Dzień",
            list: "Plan dnia"
        },
        weekLabel: "Tydz",
        allDayText: "Cały dzień",
        eventLimitText: "więcej",
        noEventsMessage: "Brak wydarzeń do wyświetlenia"
    };

    var _m49 = {
        code: "pt-br",
        buttonText: {
            prev: "Anterior",
            next: "Próximo",
            today: "Hoje",
            month: "Mês",
            week: "Semana",
            day: "Dia",
            list: "Lista"
        },
        weekLabel: "Sm",
        allDayText: "dia inteiro",
        eventLimitText: function (n) {
            return "mais +" + n;
        },
        noEventsMessage: "Não há eventos para mostrar"
    };

    var _m50 = {
        code: "pt",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Anterior",
            next: "Seguinte",
            today: "Hoje",
            month: "Mês",
            week: "Semana",
            day: "Dia",
            list: "Agenda"
        },
        weekLabel: "Sem",
        allDayText: "Todo o dia",
        eventLimitText: "mais",
        noEventsMessage: "Não há eventos para mostrar"
    };

    var _m51 = {
        code: "ro",
        week: {
            dow: 1,
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        },
        buttonText: {
            prev: "precedentă",
            next: "următoare",
            today: "Azi",
            month: "Lună",
            week: "Săptămână",
            day: "Zi",
            list: "Agendă"
        },
        weekLabel: "Săpt",
        allDayText: "Toată ziua",
        eventLimitText: function (n) {
            return "+alte " + n;
        },
        noEventsMessage: "Nu există evenimente de afișat"
    };

    var _m52 = {
        code: "ru",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Пред",
            next: "След",
            today: "Сегодня",
            month: "Месяц",
            week: "Неделя",
            day: "День",
            list: "Повестка дня"
        },
        weekLabel: "Нед",
        allDayText: "Весь день",
        eventLimitText: function (n) {
            return "+ ещё " + n;
        },
        noEventsMessage: "Нет событий для отображения"
    };

    var _m53 = {
        code: "sk",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Predchádzajúci",
            next: "Nasledujúci",
            today: "Dnes",
            month: "Mesiac",
            week: "Týždeň",
            day: "Deň",
            list: "Rozvrh"
        },
        weekLabel: "Ty",
        allDayText: "Celý deň",
        eventLimitText: function (n) {
            return "+ďalšie: " + n;
        },
        noEventsMessage: "Žiadne akcie na zobrazenie"
    };

    var _m54 = {
        code: "sl",
        week: {
            dow: 1,
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        },
        buttonText: {
            prev: "Prejšnji",
            next: "Naslednji",
            today: "Trenutni",
            month: "Mesec",
            week: "Teden",
            day: "Dan",
            list: "Dnevni red"
        },
        weekLabel: "Teden",
        allDayText: "Ves dan",
        eventLimitText: "več",
        noEventsMessage: "Ni dogodkov za prikaz"
    };

    var _m55 = {
        code: "sq",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "mbrapa",
            next: "Përpara",
            today: "sot",
            month: "Muaj",
            week: "Javë",
            day: "Ditë",
            list: "Listë"
        },
        weekLabel: "Ja",
        allDayHtml: "Gjithë<br/>ditën",
        eventLimitText: function (n) {
            return "+më tepër " + n;
        },
        noEventsMessage: "Nuk ka evente për të shfaqur"
    };

    var _m56 = {
        code: "sr-cyrl",
        week: {
            dow: 1,
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        },
        buttonText: {
            prev: "Претходна",
            next: "следећи",
            today: "Данас",
            month: "Месец",
            week: "Недеља",
            day: "Дан",
            list: "Планер"
        },
        weekLabel: "Сед",
        allDayText: "Цео дан",
        eventLimitText: function (n) {
            return "+ још " + n;
        },
        noEventsMessage: "Нема догађаја за приказ"
    };

    var _m57 = {
        code: "sr",
        week: {
            dow: 1,
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        },
        buttonText: {
            prev: "Prethodna",
            next: "Sledeći",
            today: "Danas",
            month: "Mеsеc",
            week: "Nеdеlja",
            day: "Dan",
            list: "Planеr"
        },
        weekLabel: "Sed",
        allDayText: "Cеo dan",
        eventLimitText: function (n) {
            return "+ još " + n;
        },
        noEventsMessage: "Nеma događaja za prikaz"
    };

    var _m58 = {
        code: "sv",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Förra",
            next: "Nästa",
            today: "Idag",
            month: "Månad",
            week: "Vecka",
            day: "Dag",
            list: "Program"
        },
        weekLabel: "v.",
        allDayText: "Heldag",
        eventLimitText: "till",
        noEventsMessage: "Inga händelser att visa"
    };

    var _m59 = {
        code: "th",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "ก่อนหน้า",
            next: "ถัดไป",
            prevYear: 'ปีก่อนหน้า',
            nextYear: 'ปีถัดไป',
            year: 'ปี',
            today: "วันนี้",
            month: "เดือน",
            week: "สัปดาห์",
            day: "วัน",
            list: "กำหนดการ"
        },
        weekLabel: "สัปดาห์",
        allDayText: "ตลอดวัน",
        eventLimitText: "เพิ่มเติม",
        noEventsMessage: "ไม่มีกิจกรรมที่จะแสดง"
    };

    var _m60 = {
        code: "tr",
        week: {
            dow: 1,
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        },
        buttonText: {
            prev: "geri",
            next: "ileri",
            today: "bugün",
            month: "Ay",
            week: "Hafta",
            day: "Gün",
            list: "Ajanda"
        },
        weekLabel: "Hf",
        allDayText: "Tüm gün",
        eventLimitText: "daha fazla",
        noEventsMessage: "Gösterilecek etkinlik yok"
    };

    var _m61 = {
        code: "ug",
        buttonText: {
            month: "ئاي",
            week: "ھەپتە",
            day: "كۈن",
            list: "كۈنتەرتىپ"
        },
        allDayText: "پۈتۈن كۈن"
    };

    var _m62 = {
        code: "uk",
        week: {
            dow: 1,
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        },
        buttonText: {
            prev: "Попередній",
            next: "далі",
            today: "Сьогодні",
            month: "Місяць",
            week: "Тиждень",
            day: "День",
            list: "Порядок денний"
        },
        weekLabel: "Тиж",
        allDayText: "Увесь день",
        eventLimitText: function (n) {
            return "+ще " + n + "...";
        },
        noEventsMessage: "Немає подій для відображення"
    };

    var _m63 = {
        code: "uz",
        buttonText: {
            month: "Oy",
            week: "Xafta",
            day: "Kun",
            list: "Kun tartibi"
        },
        allDayText: "Kun bo'yi",
        eventLimitText: function (n) {
            return "+ yana " + n;
        },
        noEventsMessage: "Ko'rsatish uchun voqealar yo'q"
    };

    var _m64 = {
        code: "vi",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "Trước",
            next: "Tiếp",
            today: "Hôm nay",
            month: "Tháng",
            week: "Tuần",
            day: "Ngày",
            list: "Lịch biểu"
        },
        weekLabel: "Tu",
        allDayText: "Cả ngày",
        eventLimitText: function (n) {
            return "+ thêm " + n;
        },
        noEventsMessage: "Không có sự kiện để hiển thị"
    };

    var _m65 = {
        code: "zh-cn",
        week: {
            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "上月",
            next: "下月",
            today: "今天",
            month: "月",
            week: "周",
            day: "日",
            list: "日程"
        },
        weekLabel: "周",
        allDayText: "全天",
        eventLimitText: function (n) {
            return "另外 " + n + " 个";
        },
        noEventsMessage: "没有事件显示"
    };

    var _m66 = {
        code: "zh-tw",
        buttonText: {
            prev: "上月",
            next: "下月",
            today: "今天",
            month: "月",
            week: "週",
            day: "天",
            list: "活動列表"
        },
        weekLabel: "周",
        allDayText: "整天",
        eventLimitText: '顯示更多',
        noEventsMessage: "没有任何活動"
    };

    var _rollupPluginMultiEntry_entryPoint = [
    _m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9, _m10, _m11, _m12, _m13, _m14, _m15, _m16, _m17, _m18, _m19, _m20, _m21, _m22, _m23, _m24, _m25, _m26, _m27, _m28, _m29, _m30, _m31, _m32, _m33, _m34, _m35, _m36, _m37, _m38, _m39, _m40, _m41, _m42, _m43, _m44, _m45, _m46, _m47, _m48, _m49, _m50, _m51, _m52, _m53, _m54, _m55, _m56, _m57, _m58, _m59, _m60, _m61, _m62, _m63, _m64, _m65, _m66
    ];

    return _rollupPluginMultiEntry_entryPoint;

}));
