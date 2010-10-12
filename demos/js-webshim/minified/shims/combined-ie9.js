(function(a){if(!navigator.geolocation){a.support.geolocation="shim";var r=function(){setTimeout(function(){throw"document.write is overwritten by geolocation shim. This method is incompatibel with this plugin";},1)},l=0;navigator.geolocation=function(){var o,d={getCurrentPosition:function(k,g,c){var e=function(){clearTimeout(f);if(!(o||!window.google||!google.loader||!google.loader.ClientLocation)){var i=google.loader.ClientLocation;o={latitude:i.latitude,longitude:i.longitude,altitude:null,accuracy:43E3,
altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null}}if(o)k({coords:o,timestamp:(new Date).getTime()});else g&&g({code:2,message:"POSITION_UNAVAILABLE"})},f;if(!window.google||!google.loader){if(a.webshims.modules.geolocation.options.destroyWrite){document.write=r;document.writeln=r}a(document).one("google-loaderReady",e);a.webshims.loader.loadScript("http://www.google.com/jsapi",false,"google-loader");if(c&&c.timeout)f=setTimeout(function(){a(document).unbind("google-loader",e);g&&g({code:3,
message:"TIMEOUT"})},c.timeout)}else setTimeout(e,1)},clearWatch:a.noop};d.watchPosition=function(k,g,c){d.getCurrentPosition(k,g,c);l++;return l};return d}()}})(jQuery);
jQuery.webshims.ready("es5",function(a){a.extend(a.expr.filters,{valid:function(l){return(a.attr(l,"validity")||{valid:true}).valid},invalid:function(l){return!a.expr.filters.valid(l)},willValidate:function(l){return a.attr(l,"willValidate")}});a.webshims.validityAlert=function(){var l={hideDelay:5E3,showFor:function(e,f){e=a(e);var i=(e.data("inputUIReplace")||{visual:e}).visual;c();l.clear();o.attr("for",i.attr("id"));this.getMessage(e);this.position(i);this.show();if(this.hideDelay)d=setTimeout(k,
this.hideDelay);if(!f){i.focus();a(document).bind("focusout.validityalert",k)}},getMessage:function(e){a("> span",o).html(e.attr("validationMessage"))},position:function(e){var f=e.offset();f.top+=e.outerHeight();o.css(f)},show:function(){o.css("display")==="none"?o.fadeIn():o.fadeTo(400,1)},hide:function(){l.clear();o.fadeOut()},clear:function(){clearTimeout(d);a(document).unbind("focusout.validityalert");o.stop().removeAttr("for")},alert:a('<label class="validity-alert" role="alert"><span class="va-box" /></label>').css({position:"absolute",
display:"none"})},o=l.alert,d=false,k=a.proxy(l,"hide"),g=false,c=function(){if(!g){g=true;a(function(){o.appendTo("body")})}};return l}();a.webshims.validityMessages.en=a.webshims.validityMessages.en||a.webshims.validityMessages["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},
rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",stepMismatch:"The value {%value} is not allowed for this form.",tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};a.webshims.validityMessages["en-US"]=a.webshims.validityMessages["en-US"]||
a.webshims.validityMessages.en;a.webshims.validityMessages[""]=a.webshims.validityMessages[""]||a.webshims.validityMessages.en;a.webshims.validityMessages.de=a.webshims.validityMessages.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},
rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",
valueMissing:"Sie m\u00fcssen einen Wert eingeben"};var r=a.webshims.validityMessages[""];a(document).bind("htmlExtLangChange",function(){a.webshims.activeLang(a.webshims.validityMessages,"validation-base",function(l){r=l})});a.webshims.createValidationMessage=function(l,o){var d=r[o];if(d&&typeof d!=="string")d=d[(l.getAttribute("type")||"").toLowerCase()]||d.defaultMessage;d&&a.each(["value","min","max","title","maxlength","label"],function(k,g){if(d.indexOf("{%"+g)!==-1){var c=(g=="label"?a.trim(a("label[for="+
l.id+"]",l.form).text()).replace(/\*$|:$/,""):a.attr(l,g))||"";d=d.replace("{%"+g+"}",c);if("value"==g)d=d.replace("{%valueLen}",c.length)}});return d||""};a.each(a.support.validationMessage?["customValidationMessage"]:["customValidationMessage","validationMessage"],function(l,o){a.webshims.attr(o,{elementNames:["input","select","textarea"],getter:function(d){var k="";if(!a.attr(d,"willValidate"))return k;var g=a.attr(d,"validity")||{valid:1};if(g.valid)return k;if(g.customError||o==="validationMessage")if(k=
"validationMessage"in d?d.validationMessage:a.data(d,"customvalidationMessage"))return k;a.each(g,function(c,e){if(!(c=="valid"||!e))if(k=a.webshims.createValidationMessage(d,c))return false});return k||""}})});(function(){var l,o=[],d,k,g,c;a.support.validity===true&&window.addEventListener&&!window.noHTMLExtFixes&&window.addEventListener("submit",function(e){if(e.target.checkValidity&&a.attr(e.target,"novalidate")===undefined&&!e.target.checkValidity())g=true},true);a(document).bind("invalid",function(e){if(!l){k=
e.target.form;if(a.support.validity===true&&k&&!window.noHTMLExtFixes){var f=a(k).bind("submit.preventInvalidSubmit",function(i){if(a.attr(k,"novalidate")===undefined){i.stopImmediatePropagation();return false}}).data("events").submit;f&&f.length>1&&f.unshift(f.pop())}l=a.Event("firstinvalid");a(e.target).trigger(l)}l&&l.isDefaultPrevented()&&e.preventDefault();if(a.support.validity!==true||a.inArray(e.target,o)==-1)o.push(e.target);else if(!window.noHTMLExtFixes){c=true;e.stopImmediatePropagation()}e.extraData=
"fix";clearTimeout(d);d=setTimeout(function(){var i={type:"lastinvalid",cancelable:false,invalidlist:a(o)};g&&!c&&l.target!==document.activeElement&&document.activeElement&&!a.data(l.target,"maybePreventedinvalid")&&a.webshims.validityAlert.showFor(l.target);g=l=c=false;o=[];a(k).unbind("submit.preventInvalidSubmit");a(e.target).trigger(i,i)},0)})})();(function(){if(!(a.support.validity!==true||a.support.fieldsetValidation||window.noHTMLExtFixes)){a.support.fieldsetValidation="shim";a.webshims.addMethod("checkValidity",
function(){if(a.nodeName(this,"fieldset")){var l=true;a(this.elements||"input, textarea, select",this).each(function(){if(this.checkValidity)this.checkValidity()||(l=false)});return l}else if(this.checkValidity)return this.checkValidity()})}})();a.support.validationMessage=a.support.validationMessage||"shim";a.webshims.createReadyEvent("validation-base")},true,true);
jQuery.webshims.ready("validation-base",function(a){if(!a.support.validity){a.webshims.inputTypes=a.webshims.inputTypes||{};var r=a.webshims.inputTypes,l={radio:1,checkbox:1};a.webshims.addInputType=function(c,e){r[c]=e};var o={customError:false,typeMismatch:false,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false,tooLong:false,patternMismatch:false,valueMissing:false,valid:true},d={valueMissing:function(c,e){if(!c.attr("required"))return false;return l[c[0].type]?!a(c[0].form&&c[0].name?
c[0].form[c[0].name]:[]).filter(":checked")[0]:!e},tooLong:function(c,e){if(e==="")return false;var f=c.attr("maxlength"),i=false,b=e.length;if(b&&f>=0&&e.replace&&(typeof f=="number"||f&&f==f*1))i=b>f;return i},typeMismatch:function(c,e,f){if(e==="")return false;var i=false;if(!("type"in f))f.type=(c[0].getAttribute("type")||"").toLowerCase();if(r[f.type]&&r[f.type].mismatch)i=r[f.type].mismatch(e,c);return i},patternMismatch:function(c,e){if(e==="")return false;var f=c.attr("pattern");if(!f)return false;
return!RegExp("^(?:"+f+")$").test(e)}};a.webshims.addValidityRule=function(c,e){d[c]=e};a.webshims.addMethod("checkValidity",function(){var c,e=function(f){var i,b=a.attr(f,"validity");if(b)a.data(f,"cachedValidity",b);else b={valid:true};if(!b.valid){i=a.Event("invalid");var h=a(f).trigger(i);if(!c&&!i.isDefaultPrevented()){a.webshims.validityAlert.showFor(h);c=true}}a.data(f,"cachedValidity",false);return b.valid};return function(){c=false;if(a.nodeName(this,"form")||a.nodeName(this,"fieldset")){for(var f=
true,i=this.elements||a("input, textarea, select",this),b=0,h=i.length;b<h;b++)e(i[b])||(f=false);return f}else return this.form?e(this):true}}());a.event.special.invalid={add:function(){a.data(this,"invalidEventShim")||a.event.special.invalid.setup.call(this)},setup:function(){a(this).bind("submit",a.event.special.invalid.handler).data("invalidEventShim",true);var c=a(this).data("events").submit;c&&c.length>1&&c.unshift(c.pop())},teardown:function(){a(this).unbind("submit",a.event.special.invalid.handler).data("invalidEventShim",
false)},handler:function(c){if(!(c.type!="submit"||!a.nodeName(c.target,"form")||a.attr(c.target,"novalidate")!==undefined||a.data(c.target,"novalidate")))if(!a(c.target).checkValidity()){!c.originalEvent&&!window.debugValidityShim&&window.console&&console.log&&console.log("submit");c.stopImmediatePropagation();return false}}};a.webshims.attr("validity",{elementNames:["input","select","textarea"],getter:function(c){var e=a.data(c,"cachedValidity");if(e)return e;e=a.extend({},o);if(!a.attr(c,"willValidate"))return e;
var f=a(c),i=f.val(),b={};e.customError=!!a.data(c,"customvalidationMessage");if(e.customError)e.valid=false;if((c.nodeName||"").toLowerCase()=="select")return e;a.each(d,function(h,j){if(j(f,i,b)){e[h]=true;e.valid=false}});return e}});a.webshims.addMethod("setCustomValidity",function(c){a.data(this,"customvalidationMessage",""+c)});a.webshims.attr("validationMessage",{elementNames:["input","select","textarea"],getter:function(c,e){var f=e()||a.data(c,"customvalidationMessage");return!f||!a.attr(c,
"willValidate")?"":f}});a.webshims.createBooleanAttrs("required",["input","textarea"]);a.webshims.attr("willValidate",{elementNames:["input","select","textarea"],getter:function(){var c={button:1,reset:1,add:1,remove:1,"move-up":1,"move-down":1,hidden:1,submit:1};return function(e){return!!(e.name&&e.form&&!e.disabled&&!e.readOnly&&!c[e.type]&&a.attr(e.form,"novalidate")===undefined)}}()});a.webshims.addInputType("email",{mismatch:function(){var c=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(e){return!c.test(e)}}()});a.webshims.addInputType("url",{mismatch:function(){var c=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(e){return!c.test(e)}}()});var k=function(){var c=this;if(c.form){a.data(c.form,"novalidate",true);setTimeout(function(){a.data(c.form,"novalidate",false)},1)}},g={submit:1,button:1};a(document).bind("click",function(c){c.target&&c.target.form&&g[c.target.type]&&a.attr(c.target,"formnovalidate")!==undefined&&k.call(c.target)});a.webshims.addReady(function(c){a("form",c).bind("invalid",a.noop).find("button[formnovalidate]").bind("click",k)});(function(){if(a.support.validity!==true){a.support.validity=
"shim";var c={input:1,textarea:1},e={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,color:1,range:1},f=function(i){var b;i[0].getAttribute("type");var h=i.val(),j=function(m){if(i){var q=i.val();if(q!==h){h=q;if(!m||m.type!="input")i.trigger("input")}}},p=function(){i.unbind("focusout",p).unbind("input",j);clearInterval(b);j();i=null};clearInterval(b);b=setInterval(j,150);setTimeout(j,9);i.bind("focusout",p).bind("input",j)};a(document).bind("focusin",function(i){if(i.target&&i.target.type&&
!i.target.readonly&&!i.target.readOnly&&!i.target.disabled&&c[(i.target.nodeName||"").toLowerCase()]&&!e[i.target.type])f(a(i.target))})}})();a.webshims.createReadyEvent("validity")}},true,true);
(function(a){var r,l=function(){if(!r){r=true;var o=parseInt("NaN",10),d=a.webshims.inputTypes,k=function(b){return typeof b=="number"||a.trim(b)&&b==b*1},g=function(b){return a('<input type="'+b+'" />').attr("type")===b},c=function(b){return(b.getAttribute("type")||"").toLowerCase()},e=function(b,h){var j=a.attr(b,"step");if(j==="any")return j;h=h||c(b);if(!d[h]||!d[h].step)return j;j=d.number.asNumber(j);return(!isNaN(j)&&j>0?j:d[h].step)*d[h].stepScaleFactor},f=function(b,h,j){if(!(b+"AsNumber"in
j)){j[b+"AsNumber"]=d[j.type].asNumber(h.attr(b));if(isNaN(j[b+"AsNumber"])&&b+"Default"in d[j.type])j[b+"AsNumber"]=d[j.type][b+"Default"]}},i=function(b,h){b=""+b;h-=b.length;for(var j=0;j<h;j++)b="0"+b;return b};a.webshims.addValidityRule("stepMismatch",function(b,h,j){if(h==="")return false;if(!("type"in j))j.type=c(b[0]);if(j.type=="date")return false;var p=false;if(d[j.type]&&d[j.type].step){if(!("step"in j))j.step=e(b[0],j.type);if(j.step=="any")return false;if(!("valueAsNumber"in j))j.valueAsNumber=
d[j.type].asNumber(h);if(isNaN(j.valueAsNumber))return false;f("min",b,j);b=j.minAsNumber;if(isNaN(b))b=d[j.type].stepBase||0;p=Math.abs((j.valueAsNumber-b)%j.step);p=!(p<=1.0E-7||Math.abs(p-j.step)<=1.0E-7)}return p});a.each([{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}],function(b,h){a.webshims.addValidityRule(h.name,function(j,p,m){var q=false;if(p==="")return q;if(!("type"in m))m.type=c(j[0]);if(d[m.type]&&d[m.type].asNumber){if(!("valueAsNumber"in m))m.valueAsNumber=
d[m.type].asNumber(p);if(isNaN(m.valueAsNumber))return false;f(h.attr,j,m);if(isNaN(m[h.attr+"AsNumber"]))return q;q=m[h.attr+"AsNumber"]*h.factor<m.valueAsNumber*h.factor-1.0E-7}return q})});a.webshims.attr("valueAsNumber",{elementNames:["input"],getter:function(b){var h=c(b);return d[h]&&d[h].asNumber?d[h].asNumber(a.attr(b,"value")):o},setter:function(b,h,j){var p=c(b);if(d[p]&&d[p].numberToString)if(isNaN(h))a.attr(b,"value","");else{h=d[p].numberToString(h);if(h!==false)a.attr(b,"value",h);else throw"INVALID_STATE_ERR: DOM Exception 11";
}else j()}});a.webshims.attr("valueAsDate",{elementNames:["input"],getter:function(b){var h=c(b);return d[h]&&d[h].asDate&&!d[h].noAsDate?d[h].asDate(a.attr(b,"value")):null},setter:function(b,h,j){var p=c(b);if(d[p]&&d[p].dateToString){if(!window.noHTMLExtFixes)throw"there are some serious issues in opera's implementation. don't use!";if(h===null)a.attr(b,"value","");else{h=d[p].dateToString(h);if(h!==false)a.attr(b,"value",h);else throw"INVALID_STATE_ERR: DOM Exception 11";}}else j()}});g("number")||
a.webshims.addInputType("number",{mismatch:function(b){return!k(b)},step:1,stepScaleFactor:1,asNumber:function(b){return k(b)?b*1:o},numberToString:function(b){return k(b)?b:false}});!g("number")&&d.number&&a.webshims.addInputType("range",a.extend({},d.number,{minDefault:0,maxDefault:100}));!g("date")&&d.number&&a.webshims.addInputType("date",{mismatch:function(b){if(!b||!b.split||!/\d$/.test(b))return true;var h=b.split(/\u002D/);if(h.length!==3)return true;var j=false;a.each(h,function(p,m){if(!(k(m)||
m&&m=="0"+m*1)){j=true;return false}});if(j)return j;if(h[0].length!==4||h[1].length!=2||h[1]>12||h[2].length!=2||h[2]>33)j=true;return b!==this.dateToString(this.asDate(b,true))},step:1,stepScaleFactor:864E5,asDate:function(b,h){if(!h&&this.mismatch(b))return null;return new Date(this.asNumber(b,true))},asNumber:function(b,h){var j=o;if(h||!this.mismatch(b)){b=b.split(/\u002D/);j=Date.UTC(b[0],b[1]-1,b[2])}return j},numberToString:function(b){return k(b)?this.dateToString(new Date(b*1)):false},dateToString:function(b){return b&&
b.getFullYear?b.getUTCFullYear()+"-"+i(b.getUTCMonth()+1,2)+"-"+i(b.getUTCDate(),2):false}});!g("time")&&d.number&&d.date&&a.webshims.addInputType("time",a.extend({},d.date,{mismatch:function(b,h){if(!b||!b.split||!/\d$/.test(b))return true;b=b.split(/\u003A/);if(b.length<2||b.length>3)return true;var j=false,p;if(b[2]){b[2]=b[2].split(/\u002E/);p=parseInt(b[2][1],10);b[2]=b[2][0]}a.each(b,function(m,q){if(!(k(q)||q&&q=="0"+q*1)||q.length!==2){j=true;return false}});if(j)return true;if(b[0]>23||b[0]<
0||b[1]>59||b[1]<0)return true;if(b[2]&&(b[2]>59||b[2]<0))return true;if(p&&isNaN(p))return true;if(p)if(p<100)p*=100;else if(p<10)p*=10;return h===true?[b,p]:false},step:60,stepBase:0,stepScaleFactor:1E3,asDate:function(b){b=new Date(this.asNumber(b));return isNaN(b)?null:b},asNumber:function(b){var h=o;b=this.mismatch(b,true);if(b!==true){h=Date.UTC("1970",0,1,b[0][0],b[0][1],b[0][2]||0);if(b[1])h+=b[1]}return h},dateToString:function(b){if(b&&b.getUTCHours){var h=i(b.getUTCHours(),2)+":"+i(b.getUTCMinutes(),
2),j=b.getSeconds();if(j!="0")h+=":"+i(j,2);j=b.getUTCMilliseconds();if(j!="0")h+="."+i(j,3);return h}else return false}}));!g("datetime-local")&&d.number&&d.time&&a.webshims.addInputType("datetime-local",a.extend({},d.time,{mismatch:function(b,h){if(!b||!b.split||(b+"special").split(/\u0054/).length!==2)return true;b=b.split(/\u0054/);return d.date.mismatch(b[0])||d.time.mismatch(b[1],h)},noAsDate:true,asDate:function(b){b=new Date(this.asNumber(b));return isNaN(b)?null:b},asNumber:function(b){var h=
o,j=this.mismatch(b,true);if(j!==true){b=b.split(/\u0054/)[0].split(/\u002D/);h=Date.UTC(b[0],b[1]-1,b[2],j[0][0],j[0][1],j[0][2]||0);if(j[1])h+=j[1]}return h},dateToString:function(b,h){return d.date.dateToString(b)+"T"+d.time.dateToString(b,h)}}));(function(){var b=a.webshims.modules["number-date-type"].options,h=function(m,q,n){n=n||{};if(!("type"in n))n.type=c(m);if(!("step"in n))n.step=e(m,n.type);if(!("valueAsNumber"in n))n.valueAsNumber=d[n.type].asNumber(a.attr(m,"value"));var s=n.step=="any"?
d[n.type].step*d[n.type].stepScaleFactor:n.step;f("min",a(m),n);f("max",a(m),n);if(isNaN(n.valueAsNumber))n.valueAsNumber=d[n.type].stepBase||0;if(n.step!=="any")n.valueAsNumber=Math.round((n.valueAsNumber-(n.valueAsNumber-(n.minAsnumber||0))%n.step)*1E7)/1E7;m=n.valueAsNumber+s*q;if(!isNaN(n.minAsNumber)&&m<n.minAsNumber)m=n.valueAsNumber*q<n.minAsNumber?n.minAsNumber:isNaN(n.maxAsNumber)?Number.MAX_VALUE:n.maxAsNumber;else if(!isNaN(n.maxAsNumber)&&m>n.maxAsNumber)m=n.valueAsNumber*q>n.maxAsNumber?
n.maxAsNumber:isNaN(n.minAsNumber)?Number.MIN_VALUE:n.minAsNumber;return m},j=function(m,q,n){if(!(m.disabled||m.readOnly||a(n).hasClass("step-controls"))){a.attr(m,"value",d[q].numberToString(h(m,a(n).hasClass("step-up")?1:-1,{type:q})));a(m).unbind("blur.stepeventshim").trigger("input");if(document.activeElement){if(document.activeElement!==m)try{m.focus()}catch(s){}setTimeout(function(){if(document.activeElement!==m)try{m.focus()}catch(t){}a(m).one("blur.stepeventshim",function(){a(m).trigger("change")})},
0)}}};if(b.stepArrows){var p={elementNames:["input"],setter:function(m,q,n){n();if(q=a.data(m,"step-controls"))q[m.disabled||m.readonly?"addClass":"removeClass"]("disabled-step-control")}};a.webshims.attr("disabled",p);a.webshims.attr("readonly",p)}a.webshims.addReady(function(m){b.stepArrows&&a("input",m).each(function(){var q=c(this);if(!(!d[q]||!d[q].asNumber||!b.stepArrows||b.stepArrows!==true&&!b.stepArrows[q])){var n=this,s=a(this).css("direction")=="rtl"?{action:"insertBefore",side:"Left",
otherSide:"right"}:{action:"insertAfter",side:"Right",otherSide:"left"},t=a('<span class="step-controls"><span class="step-up" /><span class="step-down" tabindex="-1" /></span>')[s.action](this).bind("mousedown mousepress",function(w){j(n,q,w.target);return false});a(this).addClass("has-step-controls").data("step-controls",t).attr({readonly:this.readOnly,disabled:this.disabled});if(b.calculateWidth){var u=a(this).width()||parseInt(a(this).css("width"),10);if(u){var v=(parseInt(a(this).css("margin"+
s.side),10)||0)+(parseInt(t.css("margin"+s.side),10)||0);a(this).css("width",u-t.outerWidth(true));v&&t.css("margin"+s.side,v)}}}})});a.webshims.createReadyEvent("number-date-type")})();a.webshims.attr("type",{elementNames:["input"],getter:function(b){var h=c(b);return a.webshims.inputTypes[h]?h:b.type||b.getAttribute("type")},setter:true})}};a.support.validity===true?a.webshims.ready("implement-types",l,true,true):a.webshims.ready("validity",l,true,true)})(jQuery);
(function(a){a.support.inputUI="shim";var r=a.webshims.modules.inputUI.options,l=function(d){a("input",d).each(function(){var k=a.attr(this,"type");l[k]&&!a.data(this,"inputUIReplace")&&l[k](a(this))})};l.common=function(d,k,g){r.replaceNative&&d.bind("invalid",function(e){setTimeout(function(){if(!a.data(e.target,"maybePreventedinvalid"))throw"you have to handle invalid events, if you replace native input-widgets.";},9)});var c={css:{marginRight:d.css("marginRight"),marginLeft:d.css("marginLeft")},
outerWidth:d.outerWidth()};k.addClass(d[0].className).data("html5element",d);d.after(k).data("inputUIReplace",{visual:k,methods:g}).hide();return c};l.date=function(d){if(a.fn.datepicker){var k=a('<input type="text" class="input-date" />'),g=this.common(d,k,l.date.attrs),c;if(g.css){k.css(g.css);g.outerWidth&&k.outerWidth(g.outerWidth)}c=k.datepicker(a.extend({},r.date)).bind("change",function(){l.date.blockAttr=true;var e;try{e=(e=a.datepicker.parseDate(c.settings.dateFormat,k.attr("value")))?a.datepicker.formatDate("yy-mm-dd",
e):k.attr("value")}catch(f){e=k.attr("value")}d.attr("value",e);l.date.blockAttr=false;d.trigger("change")}).data("datepicker");c.dpDiv.addClass("input-date-datepicker-control");a.each(["disabled","min","max","value"],function(e,f){d.attr(f,function(i,b){return b||""})})}};l.date.attrs={disabled:function(d,k,g){k.datepicker("option","disabled",!!g)},min:function(d,k,g){try{g=a.datepicker.parseDate("yy-mm-dd",g)}catch(c){g=false}g&&k.datepicker("option","minDate",g)},max:function(d,k,g){try{g=a.datepicker.parseDate("yy-mm-dd",
g)}catch(c){g=false}g&&k.datepicker("option","maxDate",g)},value:function(d,k,g){if(!l.date.blockAttr){try{var c=a.datepicker.parseDate("yy-mm-dd",g)}catch(e){c=false}c?k.datepicker("setDate",c):k.attr("value",g)}}};l.range=function(d){if(a.fn.slider){var k=a('<span class="input-range" />'),g=this.common(d,k,l.range.attrs);if(g.css){k.css(g.css);g.outerWidth&&k.outerWidth(g.outerWidth)}k.slider(a.extend(r.slider,{change:function(c,e){if(c.originalEvent){l.range.blockAttr=true;d.attr("value",e.value);
l.range.blockAttr=false;d.trigger("change")}}}));a.each(["disabled","min","max","value","step"],function(c,e){d.attr(e,function(f,i){return i||""})})}};l.range.attrs={disabled:function(d,k,g){k.slider("option","disabled",!!g)},min:function(d,k,g){g=g?g*1||0:0;k.slider("option","min",g)},max:function(d,k,g){g=g||g===0?g*1||100:100;k.slider("option","max",g)},value:function(d,k,g){g=a(d).attr("valueAsNumber");if(isNaN(g)){g=(k.slider("option","max")-k.slider("option","min"))/2;d.value=g}l.range.blockAttr||
k.slider("option","value",g)},step:function(d,k,g){g=g&&a.trim(g)?g*1||1:1;k.slider("option","step",g)}};a.each(["disabled","min","max","value","step"],function(d,k){a.webshims.attr(k,{elementNames:["input"],setter:function(g,c,e){var f=a.data(g,"inputUIReplace");e();f&&f.methods[k]&&f.methods[k](g,f.visual,c)},getter:true})});var o=function(d){if(d){d=a.extend({},d,r.date);a("input.input-date.hasDatepicker").datepicker("option",d).each(function(){var k=a.data(this,"html5element");k&&a.each(["disabled",
"min","max","value"],function(g,c){k.attr(c,function(e,f){return f||""})})});a.datepicker.setDefaults(d)}};a(document).bind("jquery-uiReady.langchange input-widgetsReady.langchange",function(){a.datepicker&&a(document).bind("htmlExtLangChange",function(){a.webshims.activeLang(a.datepicker.regional,"inputUI",o)}).unbind("jquery-uiReady.langchange input-widgetsReady.langchange")});a.webshims.ready("number-date-type",function(){a.webshims.addReady(function(d){a(document).bind("jquery-uiReady.initinputui input-widgetsReady.initinputui",
function(){if(a.datepicker||a.fn.slider){l(d);a.datepicker&&a.fn.slider&&a(document).unbind("jquery-uiReady.initinputui input-widgetsReady.initinputui")}})});a.webshims.createReadyEvent("inputUI")},true,true)})(jQuery);
(function(a){if(!a.support.placeholder){a.support.placeholder="shim";var r=function(c,e,f,i,b){if(!i){i=a.data(c,"placeHolder");if(!i)return}if(b=="focus")i.box.removeClass("placeholder-visible");else{if(e===false)e=a.attr(c,"value");if(e)i.box.removeClass("placeholder-visible");else{if(f===false)f=a.attr(c,"placeholder");i.box[f&&!e?"addClass":"removeClass"]("placeholder-visible")}}},l=0,o=function(c){c=a(c);var e=c.attr("id"),f=!!(c.attr("title")||c.attr("aria-labeledby"));if(!f&&e)f=!!a("label[for="+
e+"]",c[0].form)[0];else if(!e){l++;e="input-placeholder-id-"+l;c.attr("id",e)}return a(f?'<span class="placeholder-text"></span>':'<label for="'+e+'" class="placeholder-text"></label>')},d=function(){var c=/\n|\r|\f|\t/g,e={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(f){var i=a.data(f,"placeHolder");if(i)return i;i=a.data(f,"placeHolder",{text:o(f)});i.box=a(f).wrap('<span class="placeholder-box placeholder-box-'+(f.nodeName||"").toLowerCase()+'" />').bind("focus.placeholder blur.placeholder",
function(p){r(this,false,false,i,p.type)}).parent();i.text.insertAfter(f).bind("mousedown.placeholder",function(){r(this,false,false,i,"focus");f.focus();return false});a.each(["Left","Top"],function(p,m){var q=(parseInt(a.curCSS(f,"padding"+m),10)||0)+Math.max(parseInt(a.curCSS(f,"margin"+m),10)||0,0)+(parseInt(a.curCSS(f,"border"+m+"Width"),10)||0);i.text.css("padding"+m,q)});var b=a.curCSS(f,"lineHeight"),h={width:a(f).width()||parseInt(a.curCSS(f,"width"),10),height:a(f).height()||parseInt(a.curCSS(f,
"height"),10)},j=a.curCSS(f,"float");i.text.css("lineHeight")!==b&&i.text.css("lineHeight",b);h.width&&h.height&&i.text.css(h);j!=="none"&&i.box.addClass("placeholder-box-"+j);return i},update:function(f,i){if(e[a.attr(f,"type")]||a.nodeName(f,"textarea")){if(a.nodeName(f,"input"))i=i.replace(c,"");var b=d.create(f);f.setAttribute("placeholder",i);b.text.text(i);r(f,false,i,b)}}}}();a.webshims.attr("placeholder",{elementNames:["input","textarea"],setter:function(c,e){d.update(c,e)},getter:function(c){return c.getAttribute("placeholder")||
""}});var k={elementNames:["input","textarea"],setter:function(c,e,f){var i=c.getAttribute("placeholder");i&&"value"in c&&r(c,e,i);f()},getter:true};a.webshims.attr("value",k);var g=a.fn.val;a.fn.val=function(c){c!==undefined&&this.each(function(){this.nodeType===1&&k.setter(this,c,a.noop)});return g.apply(this,arguments)};a.webshims.addReady(function(c){a("input[placeholder], textarea[placeholder]",c).attr("placeholder",function(e,f){return f})})}})(jQuery);