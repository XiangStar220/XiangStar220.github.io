_sw_analytics=function(){return{r:"4.10.19",id:"72BDDBB750E44CE6BA26207D2E354E3E",d:document,w:window,crypto:new _sw_crypto,hit:new _sw_hit_info,cookie:new _sw_cookie,user:new _sw_user_info,transaction:null,connect_lead_id:null,debug:Boolean(""),b:Boolean(""),partnerName:"yola",ttdAdvId:"",ttdTagId:"",fbqID:"",fbqSingleMode:Boolean(""),gawConvId:"",gawConvLabel:{},gawCurrency:"",goals:{1:"WEB_SIGNUP_GOAL",3:"TRANSACTION",5:"WEB_DL_GOAL",6:"WEB_DEFAULT_GOAL",9:"WEB_CALL_GOAL",21:"WEB_FORM_GOAL",22:"WEB_APPT_GOAL",23:"WEB_NAV_GOAL",24:"WEB_STREAMING_GOAL",25:"WEB_MAIL_GOAL",26:"WEB_LIKE_GOAL",27:"WEB_SHARE_GOAL",28:"WEB_SUB_GOAL"},name:"sw",noip:Boolean("1"),noms:Boolean("1"),noinit:Boolean(""),use_connect:Boolean("1"),use_tradedesk:Boolean(""),use_gaw:Boolean(""),use_fbq:Boolean(""),tradedesk_info:null,use_mongoose:function(t){this.log("This function has been removed")},pl:0,pc:0,set_beta:function(t){this.debug=t},get_domain:function(){return null!=this.hit.domain?this.hit.domain:this.d.domain},get_page:function(){return null!=this.hit.page?this.hit.page:this.d.location.href},set_goal:function(t){this.hit.set_goal(t)},get_os:function(){try{var t=navigator.userAgent,e=new RegExp(/\([^\)]*\)/gi).exec(t)[0];return e=(e=e.replace(/(\(|\))/gi,"")).split("; "),t.toLowerCase().indexOf("opera")>-1?osv=e[0]:osv=e[2],osv}catch(t){return"-"}},get_browser:function(){var t=navigator.userAgent,e=new RegExp(/\([^\)]*\)/gi).exec(t);return e?(uapl=e[0].replace(/(\(|\))/gi,"").split("; "),uapl&&uapl.length>1?("u"==uapl[1].toLowerCase()|"i"==uapl[1].toLowerCase()|"n"==uapl[1].toLowerCase()?enctype=uapl[1]:enctype="-",t.toLowerCase().indexOf("msie")>-1&&(vers=uapl[1]),oa=t.replace(e,""),oa=oa.replace(/(\(|\))/gi,""),oa=oa.replace(/\s{2,}/gi," "),oa&&(oa=oa.split(" "),oa.length>2&&(vers=oa[2]),t.toLowerCase().indexOf("safari")>-1&&(vers=oa[6]),t.toLowerCase().indexOf("opera")>-1&&(vers=oa[0]),t.toLowerCase().indexOf("chrome")>-1&&(vers=oa[5]))):vers="unknown"):navigator.appName?vers=navigator.appName+" "+naviigator.appVersion:vers="unknown",vers},get_flash:function(){var fver="0",flash;if(navigator.plugins&&navigator.plugins.length){for(var ve=0;ve<navigator.plugins.length;ve++)if(-1!=navigator.plugins[ve].name.indexOf("Shockwave Flash")){fver=navigator.plugins[ve].description.split("Shockwave Flash ")[1];break}}else if(window.ActiveXObject)for(var v=10;v>=2;v--)try{if(flash=eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+v+"');"),flash){fver=v+".0";break}}catch(t){}return fver},get_java:function(){return 0},get_referrer:function(){var t=this.d.referrer;return t&&""!=t?t:"-"},get_plugins:function(){var t="";if(navigator.plugins&&navigator.plugins.length>0){this.pc=navigator.plugins.length;for(var e=0;e<navigator.plugins.length;e++){t+=this.handle_undefined(navigator.plugins[e].name)+this.handle_undefined(navigator.plugins[e].description)+this.handle_undefined(navigator.plugins[e].filename);for(var n=0;n<navigator.plugins[e].length;n++)t+=this.handle_undefined(navigator.plugins[e][n].description)+this.handle_undefined(navigator.plugins[e][n].type)}}else window.ActiveXObject&&(t=this.get_plugins_ie());return t},get_plugins_ie:function(){var t=["AcroPDF.PDF","PDF.PdfCtrl","ShockwaveFlash.ShockwaveFlash","QuickTime.QuickTime","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","RealPlayer","SWCtl.SWCtl","WMPlayer.OCX","AgControl.AgControl"],e="";this.pc=0;for(var n=0;n<t.length;n++){try{control=new ActiveXObject(t[n]),e+=t[n],this.pc++}catch(t){continue}try{e+=control.GetVariable("$version")}catch(t){}try{e+=control.GetVersions()}catch(t){}try{e+=control.QuickTimeVersion.toString(16)}catch(t){}try{e+=control.GetVersionInfo()}catch(t){}try{e+=control.ShockwaveVersion("")}catch(t){}try{e+=control.versionInfo?control.versionInfo:""}catch(t){}}return e},get_fp:function(){return this.crypto.hash(this.get_raw_fp())},get_raw_fp:function(){var t="GMT"+new Date("1/1/2011").getTimezoneOffset()/60*-1,e=this.get_plugins(),n=navigator.userAgent;return this.pl=e.length,e+n+t+screen.width+screen.height+screen.colorDepth},handle_undefined:function(t){return"undefined"==t?"":t},create_dom_img:function(t,e){var n=new Image(1,1);n.src=t,n.onload=function(){n.onload=null,"function"==typeof e&&e(null,t)},n.onerror=function(){n.onerror=null,"function"==typeof e&&e(new Error("Pixel load failure"),t)}},debug_hit:function(t){t=t||"",this.log("HIT: "+t);var e=new RegExp("[?&]_sw_dat(=([^&#]*)|&|#|$)"),n=e.exec(t);n&&n[2]&&this.log("Pixel: \n"+_sw_b6.d(decodeURIComponent(n[2].replace(/\+/g," "))).replace(/\|/g,"\n")),(n=(e=new RegExp("[?&]_sw_trans(=([^&#]*)|&|#|$)")).exec(t))&&n[2]&&this.log("Trans: \n"+_sw_b6.d(decodeURIComponent(n[2].replace(/\+/g," "))).replace(/\|/g,"\n"))},log:function(t){var e=window;e.console=e.console||{log:function(t){this.data.push(t)},data:[]},e.console=e.console||function(){},console.log(t)},register_page_view:function(t){if(this.use_tradedesk)this.debug?this.query_tradedesk_debug():this.query_tradedesk(t);else{var e=this.get_page_view_url();this.debug?this.debug_hit(e):this.create_dom_img(e,t)}},register_contact_form:function(t,e){var n=document.getElementById("_swciFrm");"object"==typeof t&&n&&window.postMessage?n.contentWindow.postMessage({swaction:"contactdata",formdata:t},document.location.protocol+"//connect.sitewit.com"):this.pixel(21,e)},register_appointment:function(t){this.pixel(22,t)},register_directions:function(t){this.pixel(23,t)},register_download:function(t){this.pixel(5,t)},register_lead:function(t){this.pixel(6,t)},register_mailto:function(t){this.pixel(25,t)},register_mediastream:function(t){this.pixel(24,t)},register_phonecall:function(t){this.pixel(9,t)},register_signup:function(t){this.pixel(1,t)},register_social_like:function(t){this.pixel(26,t)},register_social_share:function(t){this.pixel(27,t)},register_subscribe:function(t){this.pixel(28,t)},pixel:function(t,e){if(this.use_gaw&&this.gawConvLabel[t]){window.dataLayer=window.dataLayer||[],function(){dataLayer.push(arguments)}("event","conversion",{send_to:"AW-/"+this.gawConvLabel[t]})}if(this.goals[t]){var n=this.goals[t];this.hit.set_page(n);var i=this.get_page_view_url();this.debug?this.debug_hit(i):this.create_dom_img(i,e)}},track:function(t,e){this.use_fbq&&window.fbq&&(this.fbqSingleMode?fbq("trackSingle","",t,e):fbq("track",t,e)),"Purchase"!==t&&(this.hit.set_page(t),this.register_page_view())},trackCustom:function(t,e){this.use_fbq&&window.fbq&&(this.fbqSingleMode?fbq("trackSingleCustom","",t,e):fbq("trackCustom",t,e)),this.hit.set_page(t),this.register_page_view()},get_page_view_url:function(){var t="_sw_"+this.partnerName+"id="+this.id;t+="&_sw_uid="+this.user.get_sw_uid(),t+="&_sw_fp="+this.get_fp(),t+="&_sw_pl="+this.pl,t+="&_sw_pc="+this.pc,t+="&_sw_dat=";var e=(navigator.cookieEnabled?1:0)+"|";e+=this.get_domain()+"|",e+=this.get_page().replace(/\|/gi,"&")+"|",e+=(null!=navigator.browserLanguage?navigator.browserLanguage:navigator.language)+"|",e+=screen.width+"|",e+=screen.height+"|",e+=screen.colorDepth+"|",e+=this.get_browser().replace(/\|/gi,"&")+"|",e+=(this.get_os()?this.get_os():"-")+"|",e+=(-1!=this.get_java()?1:0)+"|",e+=this.get_java()+"|",e+=(-1!=this.get_flash()?1:0)+"|",e+=this.get_flash()+"|",e+=this.get_referrer().replace(/\|/gi,"&")+"|",e+=this.user.get_site_unique_id().replace(/\|/gi,"&")+"|",e+=(""!=this.hit.goal?this.hit.goal:"-")+"|",this.use_tradedesk&&null!=this.tradedesk_info?e+=this.tradedesk_info.TDID:e+="-",null!=this.connect_lead_id?e+="|"+this.connect_lead_id:e+="|-",this.noip?e+="|137.132.218.0|1":e+="|137.132.218.135|0";var n=new Date,i=t+_sw_b6.e(e);null!=this.transaction&&(i+=this.transaction.get_transaction_b6()),i+="&to="+n.getMilliseconds(),this.user.set_sw_uid(this.user.get_sw_uid(),this.noms),_dp=window.location.protocol;var o="analytics.sitewit.com/images/cq_blank.gif?"+i;switch(_dp){case"http:":o="http://"+o;break;case"https:":o="https://"+o}return o},query_tradedesk:function(t){var e=document.getElementsByTagName("head")[0]||document.documentElement,n=document.createElement("script"),i="https:"==document.location.protocol?"https://insight.":"http://insight.";(n.setAttribute("src",i+"adsrvr.org/track/evnt?adv="+(this.ttdAdvId.length>0?this.ttdAdvId:"uxnsr9x")+"&fmt=2&callback="+this.name+".td_callback"),n.setAttribute("type","text/javascript"),n.onerror=void this.td_callback(null,t),e.appendChild(n),this.ttdAdvId.length>0&&this.ttdTagId.length>0)&&(new Image(1,1).src=i+"adsrvr.org/track/evnt?adv="+this.ttdAdvId+"&ct=0:"+this.ttdTagId+"&fmt=3")},td_callback:function(t,e){this.tradedesk_info=t;var n=this.get_page_view_url();this.create_dom_img(n,e)},query_tradedesk_debug:function(){var t=document.getElementsByTagName("head")[0]||document.documentElement,e=document.createElement("script"),n="https:"==document.location.protocol?"https://insight.":"http://insight.";e.setAttribute("src",n+"adsrvr.org/track/evnt?fmt=2&callback="+this.name+".td_callback"),e.setAttribute("type","text/javascript"),e.onerror=void this.td_callback_debug(null),t.appendChild(e)},td_callback_debug:function(t){this.tradedesk_info=t;var e=this.get_page_view_url();this.debug_hit(e)},create_transaction:function(t,e,n,i,o,r,a,s){if(this.transaction=new _sw_transaction,this.transaction.orderid=t,this.transaction.affiliation=e,this.transaction.subtotal=n,this.transaction.ordertotal=s||n,this.transaction.tax=i,this.transaction.city=o,this.transaction.state=r,this.transaction.country=a,this.use_gaw&&this.gawConvLabel[3]){window.dataLayer=window.dataLayer||[],function(){dataLayer.push(arguments)}("event","conversion",{send_to:"AW-/"+this.gawConvLabel[3],value:s||n,currency:"",transaction_id:t})}return this.use_fbq&&this.track(),this.transaction}}},_sw_cookie=function(){return{me:null,_sw_cookie:function(){me=this},write:function(t,e,n){var i=location.hostname,o=i.split(".");if(n&&n>0){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3);var a="; expires="+r.toGMTString()}else a="";o.length>2&&(i=o[o.length-2]+"."+o[o.length-1]),document.cookie=t+"="+e+a+"; path=/; domain="+i},read:function(t){for(var e=t+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var o=n[i];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(e))return o.substring(e.length,o.length)}return""},clear:function(t){this.write(t,"")}}},_sw_user_info=function(){return{c:new _sw_cookie,get_sw_uid:function(){var t=this.c.read("_swa_u");return""==t?"57d8aa10-3e3c-4379-91c6-eac18730766e":t},get_site_unique_id:function(){return _sw_b6.d(this.c.read("_swa_su"+window["sw"].id))},set_site_unique_id:function(t){this.c.write("_swa_su"+window["sw"].id,_sw_b6.e(t),0)},set_sw_uid:function(t,e){e=e||window["sw"].noms,this.c.write("_swa_u",t,e?0:1e3)}}},_sw_hit_info=function(){return{page:null,domain:null,goal:"",set_page:function(t){this.page=t},set_domain:function(t){this.domain=t},set_goal:function(t){this.goal=t}}},_sw_item=function(){return{orderid:null,sku:null,productname:null,category:null,price:null,quantity:null}},_sw_transaction=function(){return{orderid:null,affiliation:null,subtotal:null,ordertotal:null,tax:null,city:null,state:null,country:null,items:new Array,add_item:function(t,e,n,i,o){itm=new _sw_item,itm.orderid=this.orderid,itm.sku=t,itm.name=e,itm.category=n,itm.price=i,itm.quantity=o,this.items.push(itm)},get_transaction_b6:function(){var t=this.orderid+"|"+(this.affiliation?this.affiliation.toString():"").replace(/\|/gi," ")+"|"+this.ordertotal+"|"+this.tax+"|"+this.city+"|"+this.state+"|"+this.country+"|"+this.subtotal;t=_sw_b6.e(t);var e="";for(x=0;x<this.items.length;x++)itm=this.items[x],e+=itm.orderid+"|"+itm.sku+"|"+(itm.name?itm.name.toString():"").replace(/\|/gi," ")+"|"+(itm.category?itm.category.toString():"").replace(/\|/gi," ")+"|"+itm.price+"|"+itm.quantity+":::";return"&_sw_trans="+t+"&_sw_itms="+(e=_sw_b6.e(e))}}},_sw_crypto=function(){return{rot_l:function(t,e){return t<<e|t>>>32-e},lsb_hex:function(t){for(var e,n="",i=0;i<=6;i+=2)e=t>>>4*i&15,n+=(t>>>4*i+4&15).toString(16)+e.toString(16);return n},to_hex:function(t){for(var e="",n=7;n>=0;n--)e+=(t>>>4*n&15).toString(16);return e},toUTF8:function(t){var e="";t=t.replace(/\r\n/g,"\n");for(var n=0;n<t.length;n++){var i=t.charCodeAt(n);e+=i<128?String.fromCharCode(i):i>127&&i<2048?String.fromCharCode(i>>6|192)+String.fromCharCode(63&i|128):String.fromCharCode(i>>12|224)+String.fromCharCode(i>>6&63|128)+String.fromCharCode(63&i|128)}return e},hash:function(t){var e,n,i,o,r,a,s,c,h,l=new Array(80),d=1732584193,u=4023233417,g=2562383102,_=271733878,f=3285377520,w=(t=this.toUTF8(t)).length,p=new Array;for(n=0;n<w-3;n+=4)i=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),p.push(i);switch(w%4){case 0:n=2147483648;break;case 1:n=t.charCodeAt(w-1)<<24|8388608;break;case 2:n=t.charCodeAt(w-2)<<24|t.charCodeAt(w-1)<<16|32768;break;case 3:n=t.charCodeAt(w-3)<<24|t.charCodeAt(w-2)<<16|t.charCodeAt(w-1)<<8|128}for(p.push(n);p.length%16!=14;)p.push(0);for(p.push(w>>>29),p.push(w<<3&4294967295),e=0;e<p.length;e+=16){for(n=0;n<16;n++)l[n]=p[e+n];for(n=16;n<=79;n++)l[n]=this.rot_l(l[n-3]^l[n-8]^l[n-14]^l[n-16],1);for(o=d,r=u,a=g,s=_,c=f,n=0;n<=19;n++)h=this.rot_l(o,5)+(r&a|~r&s)+c+l[n]+1518500249&4294967295,c=s,s=a,a=this.rot_l(r,30),r=o,o=h;for(n=20;n<=39;n++)h=this.rot_l(o,5)+(r^a^s)+c+l[n]+1859775393&4294967295,c=s,s=a,a=this.rot_l(r,30),r=o,o=h;for(n=40;n<=59;n++)h=this.rot_l(o,5)+(r&a|r&s|a&s)+c+l[n]+2400959708&4294967295,c=s,s=a,a=this.rot_l(r,30),r=o,o=h;for(n=60;n<=79;n++)h=this.rot_l(o,5)+(r^a^s)+c+l[n]+3395469782&4294967295,c=s,s=a,a=this.rot_l(r,30),r=o,o=h;d=d+o&4294967295,u=u+r&4294967295,g=g+a&4294967295,_=_+s&4294967295,f=f+c&4294967295}return(h=this.to_hex(d)+this.to_hex(u)+this.to_hex(g)+this.to_hex(_)+this.to_hex(f)).toLowerCase()}}};var _sw_b6={_k:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e:function(t){var e,n,i,o,r,a,s,c="",h=0;for(t=_sw_b6.ue(t);h<t.length;)o=(e=t.charCodeAt(h++))>>2,r=(3&e)<<4|(n=t.charCodeAt(h++))>>4,a=(15&n)<<2|(i=t.charCodeAt(h++))>>6,s=63&i,isNaN(n)?a=s=64:isNaN(i)&&(s=64),c=c+this._k.charAt(o)+this._k.charAt(r)+this._k.charAt(a)+this._k.charAt(s);return c},d:function(t){var e,n,i,o,r,a,s="",c=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");c<t.length;)e=this._k.indexOf(t.charAt(c++))<<2|(o=this._k.indexOf(t.charAt(c++)))>>4,n=(15&o)<<4|(r=this._k.indexOf(t.charAt(c++)))>>2,i=(3&r)<<6|(a=this._k.indexOf(t.charAt(c++))),s+=String.fromCharCode(e),64!=r&&(s+=String.fromCharCode(n)),64!=a&&(s+=String.fromCharCode(i));return s=this.ud(s)},ue:function(t){t=t.replace(/\r\n/g,"\n");for(var e="",n=0;n<t.length;n++){var i=t.charCodeAt(n);i<128?e+=String.fromCharCode(i):i>127&&i<2048?(e+=String.fromCharCode(i>>6|192),e+=String.fromCharCode(63&i|128)):(e+=String.fromCharCode(i>>12|224),e+=String.fromCharCode(i>>6&63|128),e+=String.fromCharCode(63&i|128))}return e},ud:function(t){for(var e="",n=0,i=c1=c2=0;n<t.length;)(i=t.charCodeAt(n))<128?(e+=String.fromCharCode(i),n++):i>191&&i<224?(c2=t.charCodeAt(n+1),e+=String.fromCharCode((31&i)<<6|63&c2),n+=2):(c2=t.charCodeAt(n+1),c3=t.charCodeAt(n+2),e+=String.fromCharCode((15&i)<<12|(63&c2)<<6|63&c3),n+=3);return e}};function gup(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var e=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(window.location.href);return null==e?"":e[1]}var _swInitPageRegister=function(t){t=t||"sw",window[t].name=t,"function"==typeof swPreRegister&&(swPreRegister(t),window[t].b&&(window[t].debug=1)),window[t].noinit||window[t].register_page_view(),"function"==typeof swPostRegister&&swPostRegister(t);try{switch(window[t].get_browser().split("/")[0]){case"Firefox":parseInt(window[t].get_browser().split("/")[1])<6&&(window[t].use_connect=!1)}}catch(t){}var e,n,i=[];window[t].use_connect&&i.push(("https:"==document.location.protocol?"https://":"http://")+"connect.sitewit.com/js/"+window[t].id+"/sw_connect.js?"+(location.search.indexOf("swc")>0?"ts="+Math.floor(1e5*Math.random())+"&":"")+"ispartner=yola&ns="+t),window[t].use_gaw&&i.push("https://www.googletagmanager.com/gtag/js?id=AW-"),window[t].use_fbq&&!window.fbq&&i.push("https://connect.facebook.net/en_US/fbevents.js");var o=[],r=document.scripts[0];function a(){for(var t;o[0]&&"loaded"==o[0].readyState;)(t=o.shift()).onreadystatechange=null,r.parentNode.insertBefore(t,r)}for(;e=i.shift();)"async"in r?((n=document.createElement("script")).async=!1,n.src=e,document.head.appendChild(n)):r.readyState?(n=document.createElement("script"),o.push(n),n.onreadystatechange=a,n.src=e):((n=document.createElement("script")).src=e,document.head.appendChild(n));if(window[t].use_gaw){function s(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],s("js",new Date),s("config","AW-")}if(window[t].use_fbq){if(!window.fbq){var c=window.fbq=function(){c.callMethod?c.callMethod.apply(c,arguments):c.queue.push(arguments)};window._fbq||(window._fbq=c),c.push=c,c.loaded=!0,c.version="2.0",c.queue=[]}fbq("init","")}};window["sw"]=window["sw"]||new _sw_analytics,_swInitPageRegister("sw");