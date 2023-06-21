/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[13],{490:function(ya,ua,r){function pa(){return!1}function na(x,y,ca){if(!(y in w))return!0;y=w[y];for(var ba=0;ba<y.length;ba++){var fa=x;var ea=y[ba];var oa=ca;if(ea.name in fa){var ia="",la=!1;fa=fa[ea.name];switch(ea.type){case "s":ia="String";la=Object(ja.isString)(fa);break;case "a":ia="Array";la=Object(ja.isArray)(fa);break;case "n":ia="Number";la=Object(ja.isNumber)(fa)&&Object(ja.isFinite)(fa);break;case "o":ia="Object",
la=Object(ja.isObject)(fa)&&!Object(ja.isArray)(fa)}la||oa.reject('Expected response field "'+ea.name+'" to have type '+ia);ea=la}else oa.reject('Response missing field "'+ea.name+'"'),ea=!1;if(!ea)return!1}return!0}function ma(x){for(var y=0,ca=["locale","excelMaxAllowedCellCount","applyPageBreaksToSheet","excelDefaultCellBorderWidth","displayChangeTracking"];y<ca.length;y++){var ba=ca[y],fa=ba;ba=ba.charAt(0).toUpperCase()+ba.slice(1);x[fa]&&(Object.defineProperty(x,ba,Object.getOwnPropertyDescriptor(x,
fa)),delete x[fa])}return x}r.r(ua);var ka=r(0),ja=r(1);r.n(ja);var ha=r(3);ya=r(48);var aa=r(25),z=r(510),n=r(105),f=r(417),a=r(46),b=r(187),h=function(){function x(){this.request=this.result=null;this.state=0;var y=this;y.promise=new Promise(function(ca,ba){y.resolve=function(){if(0===y.state||4===y.state)y.state=1,y.result=arguments[0],ca.apply(null,arguments)};y.reject=function(){if(0===y.state||4===y.state)y.state=2,ba.apply(null,arguments)}})}x.prototype.ev=function(){return 1===(this.state&
1)};x.prototype.$ma=function(){return 2===(this.state&2)};x.prototype.Ej=function(){return!this.$ma()&&!this.ev()};x.prototype.zma=function(){return 4===(this.state&4)};x.prototype.vQ=function(){this.state|=4};return x}(),e=function(){function x(){this.Nu={};this.Xb=[]}x.prototype.pop=function(){var y=this.Xb.pop();this.Nu[y.key]=void 0;return y};x.prototype.push=function(y,ca){ca={key:y,data:ca};this.Xb.push(ca);this.Nu[y]=ca.data};x.prototype.contains=function(y){return!!this.Nu[y]};x.prototype.get=
function(y){return this.Nu[y]};x.prototype.set=function(y,ca){var ba=this;this.Nu[y]=ca;this.Xb.forEach(function(fa,ea){fa.key===y&&(ba.Xb[ea]=fa)})};x.prototype.remove=function(y){var ca=this;this.Nu[y]=void 0;this.Xb.forEach(function(ba,fa){ba.key===y&&ca.Xb.splice(fa,1)})};x.prototype.length=function(){return this.Xb.length};return x}(),w={pages:[{name:"pages",type:"a"}],pdf:[{name:"url",type:"s"}],docmod:[{name:"url",type:"s"},{name:"rID",type:"s"}],health:[],tiles:[{name:"z",type:"n"},{name:"rID",
type:"n"},{name:"tiles",type:"a"},{name:"size",type:"n"}],cAnnots:[{name:"annots",type:"a"}],annots:[{name:"url",type:"s"},{name:"name",type:"s"}],image:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}],text:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}],ApString2Xod:[{name:"url",type:"s"},{name:"rID",type:"s"}]};r=function(){function x(y,ca,ba){var fa=this;this.cR=this.vX=!1;this.Ph=this.rI=this.sw=this.Ze=this.Hx=this.zp=this.Gx=this.Un=null;this.xn=new h;this.Tq=
new h;this.TD=!1;this.dg=this.cf=this.df=this.Vf=null;this.yg=[];this.FE=[];this.cache={};this.timeStamp=0;this.Kh=[];this.Nj=[];this.cM=null;this.iX=!1;this.i4=this.id=null;this.zO=this.e_=pa;this.Li=0;this.vN=!1;this.Z0=1;this.Kj={};this.Et=0;this.Gv=new e;ca.endsWith("/")||(ca+="/");ba=ba||{};this.vX=ba.disableWebsockets||!1;this.cR=ba.singleServerMode||!1;null!=ba.customQueryParameters&&Object(a.b)("wvsQueryParameters",ba.customQueryParameters);ca.endsWith("blackbox/")||(ca+="blackbox/");this.Un=
ba.uploadData||null;this.sw=ba.uriData||null;this.Gx=ba.cacheKey||null;if(this.zp=ba.officeOptions||null)this.zp=ma(this.zp);this.Ze=ba.rasterizerOptions||null;this.Hx=ba.cadOptions||null;this.zf=ca;this.DL=y;this.Lp(!0);this.Xt=(new z.a(ca,null,this.xi())).tia(!this.vX,function(ea){fa.Ooa(ea)},function(){return null},function(){fa.TD=!1},function(){fa.isa()})}x.prototype.Rea=function(){var y=this;return new Promise(function(ca,ba){var fa=new XMLHttpRequest;fa.open("GET",y.zf+"ck");fa.withCredentials=
y.xi();fa.onreadystatechange=function(){fa.readyState===XMLHttpRequest.DONE&&(200===fa.status?ca():ba())};fa.send()})};x.prototype.Xta=function(y){this.e_=y||pa;this.zO=pa};x.prototype.vda=function(){this.I3();return this.Xt.hr(!0)};x.prototype.I3=function(){Object(ka.b)(this,void 0,void 0,function(){return Object(ka.d)(this,function(y){switch(y.label){case 0:return this.Tq=new h,this.xn=new h,this.TD=!1,this.id=null,this.iX=!1,[4,this.Rea()];case 1:return y.ba(),[2]}})})};x.prototype.isa=function(){this.e_();
this.I3();this.Vf&&(this.Vf.Ej()?this.Vh(this.Vf.request):this.Vf.ev()&&this.zO(this.Vf.result.url,"pdf")&&(this.Vf=null,this.G3()));this.dg&&this.dg.Ej()&&this.Vh(this.dg.request);this.df&&this.df.Ej()?this.Vh(this.df.request):this.cf&&this.cf.Ej()&&this.QZ();var y;for(y=0;y<this.Kh.length;y++)this.Kh[y]&&(this.Kh[y].Ej()?this.Vh(this.Kh[y].request):this.Kh[y].ev()&&this.zO(this.Kh[y].result.url,"image")&&(this.Kh[y]=null,this.lH(Object(ja.uniqueId)(),y)));for(y=0;y<this.Nj.length;y++)this.Nj[y]&&
this.Nj[y].Ej()&&!this.Nj[y].zma()&&this.Vh(this.Nj[y].request);for(y=0;y<this.yg.length;y++)this.yg[y]&&this.yg[y].Ej()&&this.Vh(this.yg[y].request)};x.prototype.cma=function(){return this.TD?Promise.resolve():(this.TD=!0,this.timeStamp=Date.now(),this.Xt.JF())};x.prototype.Hwa=function(){var y=this,ca,ba,fa,ea,oa;return new Promise(function(ia,la){if(y.Un)ca=new FormData,ca.append("file",y.Un.fileHandle,y.Un.fileHandle.name),y.zp&&ca.append("officeOptions",JSON.stringify(y.zp)),y.Ze&&ca.append("rasterizerOptions",
JSON.stringify(y.Ze)),y.Hx&&ca.append("cadOptions",y.Hx.getJsonString()),y.Gx&&ca.append("cacheKey",y.Gx),ba=y.Un.loadCallback,ea="upload",fa=y.Un.extension;else if(y.sw)ca={uri:y.sw.uri,NAa:y.sw.shareId},ca=Object.keys(ca).map(function(sa){return sa+"="+(ca[sa]?encodeURIComponent(ca[sa]):"")}).join("&"),oa="application/x-www-form-urlencoded; charset=UTF-8",ba=y.sw.loadCallback,ea="url",fa=y.sw.extension;else{ia();return}var ra=new XMLHttpRequest,qa=Object(aa.k)(y.zf,"AuxUpload");qa=Object(b.a)(qa,
{type:ea,ext:fa});ra.open("POST",qa);ra.withCredentials=y.xi();oa&&ra.setRequestHeader("Content-Type",oa);ra.addEventListener("load",function(){if(ra.readyState===ra.DONE&&200===ra.status){var sa=JSON.parse(ra.response);y.DL=sa.uri;ba(sa);ia(sa)}});ra.addEventListener("error",function(){la(ra.statusText+" "+JSON.stringify(ra))});y.Un&&null!=y.Un.onProgress&&(ra.upload.onprogress=function(sa){y.Un.onProgress(sa)});ra.send(ca)})};x.prototype.Yra=function(y){this.password=y||null;this.xn.ev()||(this.xn=
new h,this.Vh({t:"pages"}));return this.xn.promise};x.prototype.CA=function(y){this.cM=y||null;this.xn.ev()||this.Vh({t:"pages"});return this.xn.promise};x.prototype.Tx=function(y){y=Object.assign(y,{uri:encodeURIComponent(this.DL)});this.cM&&(y.ext=this.cM);this.Ph&&(y.c=this.Ph);this.password&&(y.pswd=this.password);this.Gx&&(y.cacheKey=this.Gx);this.zp&&(y.officeOptions=this.zp);this.Ze&&(y.rastOptions=this.Ze);this.Hx&&(y.cadOptions=this.Hx.mImpl);return y};x.prototype.Ksa=function(){0<this.Gv.length()&&
10>=this.Et&&this.Lsa(this.Gv.pop().data)};x.prototype.Mca=function(y){0<this.Gv.length()&&this.Gv.contains(y)&&this.Gv.remove(y)};x.prototype.Vh=function(y){y=this.Tx(y);this.Xt.send(y)};x.prototype.d4=function(y,ca){10<this.Et?this.Gv.push(y,ca):(this.Et++,y=this.Tx(ca),this.Xt.send(y))};x.prototype.Lsa=function(y){this.Et++;y=this.Tx(y);this.Xt.send(y)};x.prototype.zm=function(y){return y};x.prototype.d_=function(y){this.cR&&y?Object(ha.j)("Server failed health check. Single server mode ignoring check."):
!this.eza&&y&&3>=this.Li?(this.vN=!0,this.Xt.hr()):3<this.Li&&(this.cR=!0)};x.prototype.Ooa=function(y){var ca=this,ba=y.data,fa=y.err,ea=y.t;switch(ea){case "upload":fa?this.Iwa.reject(fa):this.Iwa.resolve("Success");break;case "pages":fa?this.xn.reject(fa):na(ba,ea,this.xn)&&this.xn.resolve(ba);break;case "config":if(fa)this.Tq.reject(fa);else if(na(ba,ea,this.Tq)){this.d_(ba.unhealthy);ba.id&&(this.id=ba.id);if(ba.auth){var oa=Object(a.a)("wvsQueryParameters");oa.auth=ba.auth;Object(a.b)("wvsQueryParameters",
oa)}ba.serverVersion&&(this.rI=ba.serverVersion,Object(ha.h)("[WebViewer Server] server version: "+this.rI));ba.serverID?(this.Li=ba.serverID===this.i4&&this.vN?this.Li+1:0,this.i4=ba.serverID):this.Li=0;this.vN=!1;this.Tq.resolve(ba)}break;case "health":fa?this.Tq.reject(fa):na(ba,ea,this.Tq)&&this.d_(ba.unhealthy);break;case "pdf":ba.url=Object(b.a)(this.zf+"../"+encodeURI(ba.url));fa?this.Vf.reject(fa):na(ba,ea,this.Vf)&&this.Vf.resolve(ba);break;case "ApString2Xod":ba.url=Object(b.a)(this.zf+
"../data/"+encodeURI(ba.url));fa?this.Kj[ba.rID].reject(fa):na(ba,ea,this.Kj[ba.rID])&&this.Kj[ba.rID].resolve(ba);break;case "docmod":ba.url=Object(b.a)(this.zf+"../"+encodeURI(ba.url));fa?this.Kj[ba.rID].reject(fa):na(ba,ea,this.Vf)&&this.Kj[ba.rID].resolve(ba);break;case "xod":if(fa)this.df&&this.df.Ej()&&this.df.reject(fa),this.cf&&this.cf.Ej()&&this.cf.reject(fa);else if(ba.notFound)ba.noCreate||this.df&&this.df.Ej()&&this.df.resolve(ba),this.cf&&this.cf.Ej()&&this.cf.resolve(ba);else{ba.url&&
(ba.url=Object(b.a)(this.zf+"../"+encodeURI(ba.url)));if(!this.cf||this.cf.ev())this.cf=new h,this.cf.request={t:"xod",noCreate:!0};this.df||(this.df=new h,this.df.request={t:"xod"});this.cf.resolve(ba);this.df.resolve(ba)}break;case "cAnnots":oa=this.dg;if(fa)oa.reject(fa);else if(na(ba,ea,oa)){oa.vQ();var ia=[],la=ba.annots;ba=function(Ha){var za=la[Ha].s,Ja=la[Ha].e,Ta=ra.zf+"../"+encodeURI(la[Ha].xfdf),Ka="true"===la[Ha].hasAppearance?Object(b.a)(Ta+".xodapp"):null,Ma=Object(ja.range)(za,Ja+1);
ia[Ha]={range:Ma,promise:new Promise(function(Ca,Da){var La=new XMLHttpRequest;La.open("GET",Object(b.a)(Ta));La.responseType="text";La.withCredentials=ca.xi();La.addEventListener("load",function(){La.readyState===La.DONE&&200===La.status&&Ca({Ls:La.response,nm:Ka,range:Ma})});La.addEventListener("error",function(){Da(La.statusText+" "+JSON.stringify(La))});La.send()})}};var ra=this;for(fa=0;fa<la.length;fa++)ba(fa);oa.resolve(ia)}break;case "annots":if(fa)this.dg.reject(fa);else if(na(ba,ea,this.dg)){this.dg.vQ();
var qa=new XMLHttpRequest;oa=this.zf+"../"+encodeURI(ba.url);var sa=ba.hasAppearance?Object(b.a)(oa+".xodapp"):null;qa.open("GET",Object(b.a)(oa));qa.responseType="text";qa.withCredentials=this.xi();qa.addEventListener("load",function(){qa.readyState===qa.DONE&&200===qa.status&&ca.dg.resolve({Ls:qa.response,nm:sa})});qa.addEventListener("error",function(){ca.dg.reject(qa.statusText+" "+JSON.stringify(qa))});qa.send()}break;case "image":this.Et--;var wa=this.Kh[ba.p];fa?wa.promise.reject(fa):na(ba,
ea,wa)&&(wa.result=ba,wa.result.url=Object(b.a)(this.zf+"../"+encodeURI(wa.result.url)),wa.resolve(wa.result));break;case "tiles":this.Et--;wa=ba.rID;oa=this.yg[wa];this.yg[wa]=null;this.FE.push(wa);if(fa)oa.reject(fa);else if(na(ba,ea,oa)){for(fa=0;fa<ba.tiles.length;fa++)ba.tiles[fa]=Object(b.a)(this.zf+"../"+encodeURI(ba.tiles[fa]));oa.resolve(ba)}break;case "text":wa=this.Nj[ba.p];if(fa)wa.reject(fa);else if(na(ba,ea,wa)){wa.vQ();var Aa=new XMLHttpRequest;ba=Object(b.a)(this.zf+"../"+encodeURI(ba.url));
Aa.open("GET",ba);Aa.withCredentials=this.xi();Aa.addEventListener("load",function(){Aa.readyState===Aa.DONE&&200===Aa.status&&(wa.result=JSON.parse(Aa.response),wa.resolve(wa.result))});Aa.addEventListener("error",function(Ha){wa.reject(Aa.statusText+" "+JSON.stringify(Ha))});Aa.send()}break;case "progress":"loading"===ba.t&&this.trigger(n.a.Events.DOCUMENT_LOADING_PROGRESS,[ba.bytes,ba.total])}this.Ksa();!ea&&y.echo&&y&&"apstring2xod"===y.echo.t&&(y=y.echo.reqID)&&(2<=parseInt(this.rI,10)?this.Kj[y].reject("Message unhandled by server"):
this.Kj[y].reject())};x.prototype.dja=function(){return Object(ka.b)(this,void 0,void 0,function(){return Object(ka.d)(this,function(y){switch(y.label){case 0:return[4,this.cma()];case 1:return y.ba(),[2,this.Tq.promise]}})})};x.prototype.Lia=function(y){for(var ca=this,ba=new XMLHttpRequest,fa=Object(b.a)(this.zf+"aul",{id:this.id}),ea=new FormData,oa={},ia=0;ia<y.body.length;ia++){var la=y.body[ia];oa[la.id]=la.vK.w+";"+la.vK.h;ea.append(la.id,la.vK.dataString)}y={t:"apstring2xod",reqID:this.Z0++,
parts:oa};var ra=this.Tx(y);ea.append("msg",JSON.stringify(ra));this.Kj[ra.reqID]=new h;ba.open("POST",fa);ba.withCredentials=this.xi;fa=new Promise(function(qa,sa){ba.onreadystatechange=function(){4===ba.readyState&&(200===ba.status?qa():sa("An error occurred while sending down appearance strings to the server"))}});ba.send(ea);return fa.then(function(){return ca.Kj[ra.reqID].promise})};x.prototype.yda=function(){var y=this.rI.split("-")[0].split("."),ca=["1","5","9"];if(3!==y.length)throw Error("Invalid WVS version length.");
if(3!==ca.length)throw Error("Invalid version length.");for(var ba=0;ba<y.length;++ba){if(ca.length===ba||y[ba]>ca[ba])return-1;if(y[ba]!==ca[ba])return 1}return 0};x.prototype.Oq=function(){return 0>=this.yda()};x.prototype.lM=function(){this.dg||(this.dg=new h,this.Oq()?this.dg.request={t:"cAnnots"}:this.dg.request={t:"annots"},this.Vh(this.dg.request));return this.dg.promise};x.prototype.lH=function(y,ca){this.Kh[ca]||(this.Kh[ca]=new h,this.Kh[ca].request={t:"image",p:ca},this.d4(y,this.Kh[ca].request));
return this.Kh[ca].promise};x.prototype.Zra=function(y){this.Nj[y]||(this.Nj[y]=new h,this.Nj[y].request={t:"text",p:y},this.Vh(this.Nj[y].request));return this.Nj[y].promise};x.prototype.$ra=function(y,ca,ba,fa,ea){var oa=this.yg.length;this.FE.length&&(oa=this.FE.pop());this.yg[oa]=new h;this.yg[oa].request={t:"tiles",p:ca,z:ba,r:fa,size:ea,rID:oa};this.d4(y,this.yg[oa].request);return this.yg[oa].promise};x.prototype.G3=function(){this.Vf||(this.Vf=new h,this.Vf.request={t:"pdf"},this.iX?this.Vf.resolve({url:this.DL}):
this.Vh(this.Vf.request));return this.Vf.promise};x.prototype.iZ=function(y){var ca=this,ba=new XMLHttpRequest,fa=Object(b.a)(this.zf+"aul",{id:this.id}),ea=new FormData,oa={};y.annots&&(oa.annots="xfdf");y.watermark&&(oa.watermark="png");y.redactions&&(oa.redactions="redact");oa={t:"docmod",reqID:this.Z0++,parts:oa};y.print&&(oa.print=!0);var ia=this.Tx(oa);ea.append("msg",JSON.stringify(ia));return Promise.all([y.annots,y.watermark,y.redactions].map(function(la){return Promise.resolve(la)})).then(function(la){var ra=
la[0],qa=la[1];la=la[2];ra&&ea.append("annots",ra);qa&&ea.append("watermark",qa);la&&ea.append("redactions",la);ca.Kj[ia.reqID]=new h;ba.open("POST",fa);ba.withCredentials=ca.xi;ra=new Promise(function(sa,wa){ba.onreadystatechange=function(){4===ba.readyState&&(200===ba.status?sa():wa("An error occurred while sending down annotation data to the server"))}});ba.send(ea);return ra.then(function(){return ca.Kj[ia.reqID].promise})})};x.prototype.QZ=function(){this.cf||(this.cf=new h,this.cf.request={t:"xod",
noCreate:!0},this.Vh(this.cf.request));return this.cf.promise};x.prototype.asa=function(){this.df||(this.df=new h,this.df.request={t:"xod"},this.Vh(this.df.request));return this.df.promise};x.prototype.Hp=function(){return!0};x.prototype.request=function(){};x.prototype.T2=function(){};x.prototype.abort=function(){for(var y=0;y<this.yg.length;y++)this.yg[y]&&(this.yg[y].resolve(null),this.yg[y]=null,this.FE.push(y));this.close()};x.prototype.yH=function(y){this.Ph=this.Ph||{};this.Ph.headers=y};x.prototype.Lp=
function(y){this.Ph=this.Ph||{};this.Ph.internal=this.Ph.internal||{};this.Ph.internal.withCredentials=y};x.prototype.xi=function(){return this.Ph&&this.Ph.internal?this.Ph.internal.withCredentials:null};x.prototype.getFileData=function(){return Promise.reject()};return x}();Object(ya.a)(r);Object(f.a)(r);Object(f.b)(r);ua["default"]=r},510:function(ya,ua,r){var pa=r(0),na=r(3),ma=r(25),ka=r(46),ja=r(187),ha=r(81),aa=function(){function n(f,a,b,h,e,w){void 0===b&&(b=null);void 0===h&&(h=null);void 0===
e&&(e=null);void 0===w&&(w=null);this.F0=!1;this.Li=0;this.aW=this.bxa(f);this.url=a?this.aW+"/"+a:this.aW+"/ws";this.rL=b;this.Zz=h;this.Rx=e;this.RP=w}n.prototype.bxa=function(f){var a=f.indexOf("://"),b="ws://";0>a?a=0:(5===a&&(b="wss://"),a+=3);var h=f.lastIndexOf("/");0>h&&(h=f.length);return b+f.slice(a,h)};n.prototype.send=function(f){this.Yp.readyState===WebSocket.CLOSED||this.F0||this.Yp.send(JSON.stringify(f))};n.prototype.JF=function(){return Object(pa.b)(this,void 0,void 0,function(){var f,
a=this;return Object(pa.d)(this,function(){f=Object(ka.a)("wvsQueryParameters");f.bcid=Object(ma.l)(8);Object(ka.b)("wvsQueryParameters",f);return[2,new Promise(function(b,h){var e=Object(ja.a)(a.url);a.Yp=new WebSocket(e);a.Yp.onopen=function(){a.Zz&&a.Zz();b()};a.Yp.onerror=function(w){a.F0=!0;h(w)};a.Yp.onclose=function(w){var x=w.code;return Object(pa.b)(a,void 0,void 0,function(){var y=this;return Object(pa.d)(this,function(ca){switch(ca.label){case 0:return this.Rx&&this.Rx(),3E3===x?[3,3]:
8>this.Li++?[4,new Promise(function(ba){return setTimeout(function(){return Object(pa.b)(y,void 0,void 0,function(){return Object(pa.d)(this,function(fa){switch(fa.label){case 0:return this.RP(),[4,this.JF()];case 1:return fa.ba(),ba(),[2]}})})},3E3)})]:[3,2];case 1:return ca.ba(),[3,3];case 2:h(ha.a),ca.label=3;case 3:return[2]}})})};a.Yp.onmessage=function(w){w&&w.data&&(w=JSON.parse(w.data),w.hb?a.send({hb:!0}):w.end?close():a.rL(w))}})]})})};n.prototype.hr=function(f){void 0===f&&(f=!1);this.Li=
0;f?this.Yp.close(3E3):this.Yp.close();return Promise.resolve()};return n}(),z=function(){function n(f,a,b,h,e,w,x){void 0===h&&(h=null);void 0===e&&(e=null);void 0===w&&(w=null);void 0===x&&(x=null);this.Li=this.kH=this.id=0;this.hz=!1;this.request=null;f=this.lqa(f);this.url=a?f+"/"+a+"pf":f+"/pf";this.jI=b;this.rL=h;this.Zz=e;this.Rx=w;this.RP=x}n.prototype.lqa=function(f){var a=f.lastIndexOf("/");0>a&&(a=f.length);return f.slice(0,a)};n.prototype.yea=function(f){f=f.split("\n");for(f[f.length-
1]&&f.pop();0<f.length&&3>f[f.length-1].length;)"]"===f.pop()&&(this.id=0);0<f.length&&3>f[0].length&&f.shift();for(var a=0;a<f.length;++a)f[a].endsWith(",")&&(f[a]=f[a].substr(0,f[a].length-1));return f};n.prototype.Q3=function(){return Object(pa.b)(this,void 0,void 0,function(){var f=this;return Object(pa.d)(this,function(a){switch(a.label){case 0:return 8>this.Li++?[4,new Promise(function(b){return setTimeout(function(){f.RP();f.JF();b()},3E3)})]:[3,2];case 1:a.ba(),a.label=2;case 2:return[2]}})})};
n.prototype.nqa=function(f){Object(pa.b)(this,void 0,void 0,function(){var a,b;return Object(pa.d)(this,function(h){switch(h.label){case 0:a=null,b=0,h.label=1;case 1:if(!(b<f.length))return[3,6];a=JSON.parse(f[b]);if(!a)return[3,5];if(!a.end)return[3,2];close();return[3,5];case 2:if(!a.id||Number(a.id)===this.id)return[3,4];Object(na.j)("Reconnecting, new server detected");this.hr();return[4,this.Q3()];case 3:return h.ba(),[3,5];case 4:a.hb&&Number(a.id)===this.id?this.send({hb:!0}):this.hz||this.rL(a),
h.label=5;case 5:return++b,[3,1];case 6:return[2]}})})};n.prototype.Loa=function(f){Object(pa.b)(this,void 0,void 0,function(){var a,b,h;return Object(pa.d)(this,function(e){switch(e.label){case 0:if(!(3<=f.readyState))return[3,2];try{a=f.responseText.length}catch(w){return Object(na.h)("caught exception"),[2]}if(0<a)try{b=this.yea(f.responseText),0===this.id&&0<b.length&&(h=JSON.parse(b.shift()),this.id=h.id,this.Li=0),this.nqa(b)}catch(w){}return this.hz?[3,2]:[4,this.cY()];case 1:e.ba(),e.label=
2;case 2:return[2]}})})};n.prototype.cY=function(){return Object(pa.b)(this,void 0,void 0,function(){var f=this;return Object(pa.d)(this,function(){return[2,new Promise(function(a,b){function h(){return Object(pa.b)(f,void 0,void 0,function(){return Object(pa.d)(this,function(w){switch(w.label){case 0:b(),this.hr(),w.label=1;case 1:return this.hz&&8>this.Li?[4,this.Q3()]:[3,3];case 2:return w.ba(),[3,1];case 3:return[2]}})})}f.request=new XMLHttpRequest;f.request.withCredentials=f.jI;var e=Object(ja.a)(f.url,
0!==f.id?{id:String(f.id),uc:String(f.kH)}:{uc:String(f.kH)});f.kH++;f.request.open("GET",e,!0);f.request.setRequestHeader("Cache-Control","no-cache");f.request.setRequestHeader("X-Requested-With","XMLHttpRequest");f.request.onreadystatechange=function(){f.Loa(f.request)};f.request.addEventListener("error",h);f.request.addEventListener("timeout",h);f.request.addEventListener("load",function(){f.Zz&&f.Zz();a()});f.request.send()})]})})};n.prototype.JF=function(){var f=Object(ka.a)("wvsQueryParameters");
f.bcid=Object(ma.l)(8);Object(ka.b)("wvsQueryParameters",f);this.kH=this.id=0;this.hz=!1;return this.cY()};n.prototype.send=function(f){var a=this,b=new XMLHttpRequest;b.withCredentials=this.jI;var h=Object(ja.a)(this.url,{id:String(this.id)}),e=new FormData;e.append("data",JSON.stringify(f));b.addEventListener("error",function(){a.hr()});b.open("POST",h);b.setRequestHeader("X-Requested-With","XMLHttpRequest");b.send(e)};n.prototype.hr=function(){this.id=0;this.hz=!0;this.Rx&&this.Rx();this.request.abort();
return Promise.resolve()};return n}();ya=function(){function n(f,a,b){this.HW=f;this.target=a;this.jI=b}n.prototype.tia=function(f,a,b,h,e){void 0===f&&(f=!0);void 0===a&&(a=null);void 0===b&&(b=null);void 0===h&&(h=null);void 0===e&&(e=null);return f?new aa(this.HW,this.target,a,b,h,e):new z(this.HW,this.target,this.jI,a,b,h,e)};return n}();ua.a=ya}}]);}).call(this || window)