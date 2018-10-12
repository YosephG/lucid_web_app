(function(){(this||window).webpackJsonp.registerAbsMids({"esri/core/HandleOwner":1464,"esri/renderers/support/heatmapUtils":1609,"esri/views/2d/layers/features/processors/BaseProcessor":1685,"esri/views/2d/layers/features/processors/HeatmapProcessor":2174})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1464:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(2),r(1),r(4),r(15),r(0)],void 0===(o=function(e,t,r,n,o,i,a){return function(e){function t(){var t=e.call(this)||this;return t.handles=new i,t}return r(t,e),t.prototype.destroy=function(){this.handles.destroy()},n([a.property({readOnly:!0})],t.prototype,"handles",void 0),n([a.subclass("esri.core.HandleOwner")],t)}(a.declared(o))}.apply(null,n))||(e.exports=o)},1609:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(63),r(91)],void 0===(o=function(e,t,r,n){function o(e,t,r,o,i){for(var a=new Uint32Array(e*e),u=("buffer"in t?t:new Float64Array(t)),l=("buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer)),p=l.length/(i-o),s=0;s<u.length;s++){var d=u[s],c=Math.floor((d-o)*p);a[s]=l[n.clamp(c,0,l.length-1)]}return a.buffer}function i(e){for(var t=Math.round(4.5*e),r=e*e,n=new Float64Array(2*t+1),o=0;o<=n.length;o++)n[o]=Math.exp(-Math.pow(o-t,2)/(2*r))/Math.sqrt(2*Math.PI)*(e/2);return n}function a(e,t){return"function"==typeof e?e:e?"string"==typeof t?function(t){return-1*+t[e]}:function(r){return+r[e]+t}:function(e){return 1}}Object.defineProperty(t,"__esModule",{value:!0}),t.generateGradient=function(){if(!("document"in r))return function(e){return null};var e=document.createElement("canvas"),t=e.getContext("2d");return e.height=512,e.width=1,function(r){for(var n=t.createLinearGradient(0,0,0,e.height),o=0,i=r.colorStops;o<i.length;o++){var a=i[o],u=a.ratio,l=a.color;n.addColorStop(u,"rgba("+l[0]+", "+l[1]+", "+l[2]+", "+l[3]+")")}return t.fillStyle=n,t.fillRect(0,0,1,e.height),t.getImageData(0,0,1,e.height).data}}(),t.calculateHeatmapIntensityInfo=function(e,t,r,n){for(var o,u=t.blurRadius,l=t.fieldOffset,p=t.field,s=new Float64Array(r*n),d=i(u),c=Math.round(4.5*u),f=Number.NEGATIVE_INFINITY,y=a(p,l),h=0,v=e;h<v.length;h++)for(var g=v[h],m=g.geometry,b=g.attributes,w=m.x-c,O=m.y-c,M=Math.max(0,w),x=Math.max(0,O),I=Math.min(n,m.y+c),U=Math.min(r,m.x+c),R=+y(b),T=x;T<I;T++)for(var j=d[T-O],A=M;A<U;A++){var C=d[A-w];(o=s[T*r+A]+=j*C*R)>f&&(f=o)}return{matrix:s.buffer,max:f}},t.drawHeatmap=function(e,t,r,n,i,a){var u=e.getContext("2d");u.clearRect(0,0,t,t);var l=u.getImageData(0,0,t,t);return l.data.set(new Uint8ClampedArray(o(t,r,n,i,a))),u.putImageData(l,0,0),e},t.createHeatmapImageData=o,t.createKernel=i,t.createValueFunction=a}.apply(null,n))||(e.exports=o)},1685:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(2),r(1),r(4),r(1464),r(0),r(1346)],void 0===(o=function(e,t,r,n,o,i,a,u){Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.initialize=function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])},t.prototype.destroy=function(){},Object.defineProperty(t.prototype,"supportsTileUpdates",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"spatialReference",{get:function(){var e=this.get("tileStore.spatialReference");return e&&e.toJSON()||null},enumerable:!0,configurable:!0}),n([a.property({readOnly:!0})],t.prototype,"supportsTileUpdates",null),n([a.property({constructOnly:!0})],t.prototype,"remoteClient",void 0),n([a.property({constructOnly:!0})],t.prototype,"service",void 0),n([a.property({dependsOn:["tileStore.spatialReference"]})],t.prototype,"spatialReference",null),n([a.property({constructOnly:!0})],t.prototype,"tileStore",void 0),n([a.subclass()],t)}(a.declared(o,i,u.default));t.default=l}.apply(null,n))||(e.exports=o)},2174:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(2),r(1),r(0),r(1609),r(1685)],void 0===(o=function(e,t,r,n,o,i,a){Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="heatmap",t.updating=!1,t}return r(t,e),Object.defineProperty(t.prototype,"queryInfo",{get:function(){var e=this.configuration,t=e.renderer,r=e.definitionExpression,n=e.outFields,o=e.gdbVersion,i=e.historicMoment;return{definitionExpression:r,orderByFields:null,outFields:n,pixelBuffer:Math.round(4.5*t.blurRadius),returnCentroid:!1,returnGeometry:!0,gdbVersion:o,historicMoment:i}},enumerable:!0,configurable:!0}),t.prototype.onTileData=function(e,t){if(t&&t.addOrUpdate&&t.addOrUpdate.length>0){var r=i.calculateHeatmapIntensityInfo(t.addOrUpdate,this.configuration.renderer,512,512);return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.key.id,intensityInfo:r},[r.matrix])}return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.key.id,intensityInfo:null})},t.prototype.onTileError=function(e,t){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t})},t.prototype.onTileUpdate=function(e){},n([o.property()],t.prototype,"configuration",void 0),n([o.property({constructOnly:!0})],t.prototype,"queryInfo",null),n([o.property()],t.prototype,"updating",void 0),n([o.subclass()],t)}(o.declared(a.default));t.default=u}.apply(null,n))||(e.exports=o)}}]);