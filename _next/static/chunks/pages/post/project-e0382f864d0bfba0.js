(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[36],{27484:function(t){t.exports=function(){"use strict";var t=1e3,n=6e4,e=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},g={s:p,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+p(r,2,"0")+":"+p(i,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var r=12*(e.year()-n.year())+(e.month()-n.month()),i=n.clone().add(r,c),s=e-i<0,u=n.clone().add(r+(s?-1:1),c);return+(-(r+(e-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=m;var w=function(t){return t instanceof x},D=function t(n,e,r){var i;if(!n)return y;if("string"==typeof n){var s=n.toLowerCase();M[s]&&(i=s),e&&(M[s]=e,i=s);var u=n.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=n.name;M[a]=n,i=a}return!r&&i&&(y=i),i||!r&&y},S=function(t,n){if(w(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new x(e)},_=g;_.l=D,_.i=w,_.w=function(t,n){return S(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var x=function(){function m(t){this.$L=D(t.locale,null,!0),this.parse(t)}var p=m.prototype;return p.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(_.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return e?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return _},p.isValid=function(){return!(this.$d.toString()===l)},p.isSame=function(t,n){var e=S(t);return this.startOf(n)<=e&&e<=this.endOf(n)},p.isAfter=function(t,n){return S(t)<this.startOf(n)},p.isBefore=function(t,n){return this.endOf(n)<S(t)},p.$g=function(t,n,e){return _.u(t)?this[n]:this.set(e,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,n){var e=this,r=!!_.u(n)||n,f=_.p(t),l=function(t,n){var i=_.w(e.$u?Date.UTC(e.$y,n,t):new Date(e.$y,n,t),e);return r?i:i.endOf(a)},$=function(t,n){return _.w(e.toDate()[t].apply(e.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(n)),e)},v=this.$W,m=this.$M,p=this.$D,g="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,m):l(0,m+1);case o:var y=this.$locale().weekStart||0,M=(v<y?v+7:v)-y;return l(r?p-M:p+(6-M),m);case a:case d:return $(g+"Hours",0);case u:return $(g+"Minutes",1);case s:return $(g+"Seconds",2);case i:return $(g+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,n){var e,o=_.p(t),f="set"+(this.$u?"UTC":""),l=(e={},e[a]=f+"Date",e[d]=f+"Date",e[c]=f+"Month",e[h]=f+"FullYear",e[u]=f+"Hours",e[s]=f+"Minutes",e[i]=f+"Seconds",e[r]=f+"Milliseconds",e)[o],$=o===a?this.$D+(n-this.$W):n;if(o===c||o===h){var v=this.clone().set(d,1);v.$d[l]($),v.init(),this.$d=v.set(d,Math.min(this.$D,v.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},p.set=function(t,n){return this.clone().$set(t,n)},p.get=function(t){return this[_.p(t)]()},p.add=function(r,f){var d,l=this;r=Number(r);var $=_.p(f),v=function(t){var n=S(l);return _.w(n.date(n.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return v(1);if($===o)return v(7);var m=(d={},d[s]=n,d[u]=e,d[i]=t,d)[$]||1,p=this.$d.getTime()+r*m;return _.w(p,this)},p.subtract=function(t,n){return this.add(-1*t,n)},p.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),s=this.$H,u=this.$m,a=this.$M,o=e.weekdays,c=e.months,f=function(t,e,i,s){return t&&(t[e]||t(n,r))||i[e].slice(0,s)},h=function(t){return _.s(s%12||12,t,"0")},d=e.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:_.s(a+1,2,"0"),MMM:f(e.monthsShort,a,c,3),MMMM:f(c,a),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:f(e.weekdaysMin,this.$W,o,2),ddd:f(e.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:_.s(s,2,"0"),h:h(1),hh:h(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:_.s(u,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:i};return r.replace(v,(function(t,n){return n||$[t]||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,d,l){var $,v=_.p(d),m=S(r),p=(m.utcOffset()-this.utcOffset())*n,g=this-m,y=_.m(this,m);return y=($={},$[h]=y/12,$[c]=y,$[f]=y/3,$[o]=(g-p)/6048e5,$[a]=(g-p)/864e5,$[u]=g/e,$[s]=g/n,$[i]=g/t,$)[v]||g,l?y:_.a(y)},p.daysInMonth=function(){return this.endOf(c).$D},p.$locale=function(){return M[this.$L]},p.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=D(t,n,!0);return r&&(e.$L=r),e},p.clone=function(){return _.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},m}(),O=x.prototype;return S.prototype=O,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){O[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),S.extend=function(t,n){return t.$i||(t(n,x,S),t.$i=!0),S},S.locale=D,S.isDayjs=w,S.unix=function(t){return S(1e3*t)},S.en=M[y],S.Ls=M,S.p={},S}()},20252:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/project",function(){return e(56842)}])},35583:function(t,n,e){"use strict";e.d(n,{Z:function(){return m}});var r=e(85893),i=e(16829),s=e(36336),u=e(29630),a=e(61642);function o(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function c(){var t=o(["\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: inherit;\n\t}\n\tmargin: 3rem 0;\n\ttext-decoration: none;\n\tdisplay: block;\n\t/* border-bottom: 1px solid #afafaf; */\n\t@media (max-width: 760px) {\n\t\t//\ubaa8\ubc14\uc77c\n\t\tmargin: 2rem 0;\n\n\t\t&:first-child {\n\t\t\tmargin-top: 0;\n\t\t}\n\t}\n"]);return c=function(){return t},t}function f(){var t=o(["\n\twidth: 100%;\n\tp {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tdisplay: -webkit-box;\n\t\t-webkit-box-orient: vertical;\n\t\t-webkit-line-clamp: 3;\n\t}\n"]);return f=function(){return t},t}function h(){var t=o(["\n\t/* padding: 0 1rem; */\n\tmargin: 0 0.875rem 0.875rem 0;\n\t/* border-radius: 1rem; */\n\t/* background: #afafaf; */\n\tdisplay: inline-flex;\n\tfont-size: 14px;\n"]);return h=function(){return t},t}function d(t){var n=t.folderPath,e=t.frontmatter,i=t.slug;return(0,r.jsx)(l,{children:(0,r.jsxs)("a",{href:"/".concat(n,"/").concat(i),children:[(0,r.jsx)(u.Z,{variant:"h5",component:"h2",color:"primary",sx:{fontWeight:700,wordBreak:"keep-all"},children:e.title}),(0,r.jsx)(u.Z,{variant:"body2",noWrap:!0,component:"p",sx:{color:"#afafaf"},children:(0,a.v)(e.date)}),(0,r.jsx)($,{children:(0,r.jsx)("p",{children:e.except})})]})})}var l=i.Z.li(c()),$=i.Z.div(f());i.Z.div(h());function v(){var t,n,e=(t=["\n\tlist-style: none;\n\tpadding: 0;\n"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));return v=function(){return e},e}function m(t){var n=t.posts;return(0,r.jsx)(s.Z,{maxWidth:"md",children:(0,r.jsx)(p,{children:n.map((function(t,n){return(0,r.jsx)(d,{folderPath:t.folderPath,frontmatter:t.frontmatter,slug:t.slug},n)}))})})}var p=i.Z.ul(v())},56842:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSG:function(){return s},default:function(){return u}});var r=e(85893),i=e(35583),s=!0;function u(t){var n=t.posts;return(0,r.jsx)(i.Z,{posts:n})}},61642:function(t,n,e){"use strict";e.d(n,{v:function(){return s}});var r=e(27484),i=e.n(r),s=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY\ub144 MM\uc6d4 DD\uc77c";return i()(t).format(n)}}},function(t){t.O(0,[774,888,179],(function(){return n=20252,t(t.s=n);var n}));var n=t.O();_N_E=n}]);