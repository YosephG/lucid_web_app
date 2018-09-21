(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/KMLLayer":1229,"esri/layers/support/kmlUtils":1606,"esri/layers/support/KMLSublayer":1968})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1229:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(10),t(2),t(0),t(15),t(181),t(9),t(8),t(1),t(22),t(49),t(107),t(106),t(239),t(169),t(1968),t(1606)],void 0===(o=function(e,r,n,o,i,l,s,a,u,p,y,f,c,d,b,h,v,m){return function(e){function r(r,t){var n=e.call(this)||this;return n._visibleFolders=[],n.allSublayers=new s({root:n,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return e.sublayers}}),n.outSpatialReference=y.WGS84,n.operationalLayerType="KML",n.sublayers=null,n.type="kml",n.url=null,n.watch("sublayers",function(e,r){r&&r.forEach(function(e){e.parent=null,e.layer=null}),e&&e.forEach(function(e){e.parent=n,e.layer=n})},!0),n}return o(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?n({url:e},r):e},r.prototype.readSublayersFromItemOrWebMap=function(e,r,t){this._visibleFolders=r.visibleFolders},r.prototype.readSublayers=function(e,r,t){return m.sublayersFromJSON(v,r,t,this._visibleFolders)},r.prototype.writeSublayers=function(e,r,t,n){for(var o=[],i=e.toArray();i.length;){var l=i[0];l.networkLink||(l.visible&&o.push(l.id),l.sublayers&&i.push.apply(i,l.sublayers.toArray())),i.shift()}r.visibleFolders=o},Object.defineProperty(r.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=this.url.substring(this.url.lastIndexOf("/")+1,this.parsedUrl.path.lastIndexOf("."));return 0===e.length&&(e="KML"),e}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"visibleSublayers",{get:function(){var e=this.sublayers,r=[],t=function(e){e.visible&&(r.push(e),e.sublayers&&e.sublayers.forEach(t))};return e&&e.forEach(t),r},enumerable:!0,configurable:!0}),r.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]}).then(function(){return e._fetchService()})),this.when()},r.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return u.create(function(e){return t.e(58).then(function(){var r=[t(2103)];e.apply(null,r)}.bind(this)).catch(t.oe)});case"3d":return u.reject(new a("kml-layer:view-not-supported","KMLLayer is only supported in 2D"))}},r.prototype._fetchService=function(){var e=this;return u.resolve().then(function(){return e.resourceInfo?{ssl:!1,data:e.resourceInfo}:m.fetchService(e.url,e.outSpatialReference,e.refreshInterval)}).then(function(r){var t=m.parseKML(r.data);t&&e.read(t,{origin:"service"})})},i([p.property({readOnly:!0})],r.prototype,"allSublayers",void 0),i([p.property({type:y})],r.prototype,"outSpatialReference",void 0),i([p.property()],r.prototype,"operationalLayerType",void 0),i([p.property({type:l.ofType(v),json:{write:{ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),i([p.reader(["web-map","portal-item"],"sublayers",["visibleFolders"])],r.prototype,"readSublayersFromItemOrWebMap",null),i([p.reader("service","sublayers",["sublayers"])],r.prototype,"readSublayers",null),i([p.writer("sublayers")],r.prototype,"writeSublayers",null),i([p.property({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),i([p.property({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}},dependsOn:["url","parsedUrl"]})],r.prototype,"title",null),i([p.property()],r.prototype,"url",void 0),i([p.property({readOnly:!0,dependsOn:["sublayers"]})],r.prototype,"visibleSublayers",null),i([p.subclass("esri.layers.KMLLayer")],r)}(p.declared(f,c,d,b,h))}.apply(null,n))||(e.exports=o)},1606:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(45),t(95),t(24),t(4),t(142),t(112)],void 0===(o=function(e,r,t,n,o,i,l,s){function a(e,r,t){t.forEach(function(t){e.set(t.attributes[r],t)})}Object.defineProperty(r,"__esModule",{value:!0});var u={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};r.parseKML=function(e){var r=e.folders.slice(),t=new Map,n=new Map,o=new Map,l=new Map,s=new Map,p={esriGeometryPoint:n,esriGeometryPolyline:o,esriGeometryPolygon:l};return e.featureCollection.layers.forEach(function(e){var r=i.clone(e);r.featureSet.features=[];var s=e.featureSet.geometryType;t.set(s,r);var u=e.layerDefinition.objectIdField;"esriGeometryPoint"===s?a(n,u,e.featureSet.features):"esriGeometryPolyline"===s?a(o,u,e.featureSet.features):"esriGeometryPolygon"===s&&a(l,u,e.featureSet.features)}),e.groundOverlays&&e.groundOverlays.forEach(function(e){s.set(e.id,e)}),e.folders.forEach(function(t){t.networkLinkIds.forEach(function(n){var o=function(e,r,t){var n=function(e,r){var t;return r.some(function(r){return r.id===e&&(t=r,!0)}),t}(e,t);return n&&(n.parentFolderId=r,n.networkLink=n),n}(n,t.id,e.networkLinks);o&&r.push(o)})}),r.forEach(function(e){e.featureInfos&&(e.points=i.clone(t.get("esriGeometryPoint")),e.polylines=i.clone(t.get("esriGeometryPolyline")),e.polygons=i.clone(t.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos.map(function(r){switch(r.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var t=p[r.type].get(r.id);t&&e[u[r.type]].featureSet.features.push(t);break;case"GroundOverlay":var n=s.get(r.id);n&&e.mapImages.push(n)}}))}),{folders:e.folders,sublayers:r}},r.fetchService=function(e,r,n){var i=t.kmlServiceUrl;return o(i,{callbackParamName:"callback",query:{url:e,model:"simple",folders:"",refresh:0!==n||void 0,outSR:JSON.stringify(r)},responseType:"json"})},r.sublayersFromJSON=function(e,r,t,n){void 0===t&&(t=null),void 0===n&&(n=[]);var o=[],i={},l=r.sublayers,s=r.folders.map(function(e){return e.id});return l.forEach(function(r){var l=new e;if(t?l.read(r,t):l.read(r),n.length&&s.indexOf(l.id)>-1&&(l.visible=-1!==n.indexOf(l.id)),i[r.id]=l,null!=r.parentFolderId&&-1!==r.parentFolderId){var a=i[r.parentFolderId];a.sublayers||(a.sublayers=[]),a.sublayers.unshift(l)}else o.unshift(l)}),o},r.getGraphics=function(e){var r=s.fromJSON(e.featureSet).features,t=e.layerDefinition,o=l.fromJSON(t.drawingInfo.renderer),i=n.fromJSON(e.popupInfo);return r.map(function(e){var r=o.getSymbol(e);return e.symbol=r,e.popupTemplate=i,e})}}.apply(null,n))||(e.exports=o)},1968:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(2),t(0),t(54),t(15),t(6),t(120),t(18),t(1),t(30),t(1606)],void 0===(o=function(e,r,t,n,o,i,l,s,a,u,p,y){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._sublayersHandles=null,r.description=null,r.id=null,r.networkLink=null,r.title=null,r}var o;return t(r,e),o=r,r.prototype.initialize=function(){var e=this;a.whenOnce(this,"networkLink").then(function(r){return a.whenTrueOnce(e,"visible")}).then(function(){return e.load()})},r.prototype.load=function(){var e=this;if(!this.networkLink)return this.when();var r=this._fetchService(this._get("networkLink").href).then(function(r){var t=p.default(i.ofType(o),y.sublayersFromJSON(o,r));e.sublayers?e.sublayers.addMany(t):e.sublayers=t,e.layer&&e.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(r),this.when()},Object.defineProperty(r.prototype,"layer",{set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(function(r){return r.layer=e})},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"sublayers",{set:function(e){var r=this,t=this._get("sublayers");t&&(t.forEach(function(e){e.parent=null,e.layer=null}),this._sublayersHandles.forEach(function(e){return e.remove()}),this._sublayersHandles=null),e&&(e.forEach(function(e){e.parent=r,e.layer=r.layer}),this._sublayersHandles=[e.on("after-add",function(e){var t=e.item;t.parent=r,t.layer=r.layer}),e.on("after-remove",function(e){var r=e.item;r.parent=null,r.layer=null})]),this._set("sublayers",e)},enumerable:!0,configurable:!0}),r.prototype.castSublayers=function(e){return p.default(i.ofType(o),e)},Object.defineProperty(r.prototype,"visible",{get:function(){return this._get("visible")},set:function(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))},enumerable:!0,configurable:!0}),r.prototype.readVisible=function(e,r){return!!r.visibility},r.prototype._fetchService=function(e){return y.fetchService(e,this.layer.outSpatialReference,this.layer.refreshInterval).then(function(e){return y.parseKML(e.data)})},n([u.property()],r.prototype,"description",void 0),n([u.property()],r.prototype,"id",void 0),n([u.property({value:null})],r.prototype,"layer",null),n([u.property({readOnly:!0,value:null})],r.prototype,"networkLink",void 0),n([u.property({json:{write:{allowNull:!0}}})],r.prototype,"parent",void 0),n([u.property({value:null,json:{write:{allowNull:!0}}})],r.prototype,"sublayers",null),n([u.cast("sublayers")],r.prototype,"castSublayers",null),n([u.property({value:null,json:{read:{source:"name"}}})],r.prototype,"title",void 0),n([u.property({value:!0})],r.prototype,"visible",null),n([u.reader("visible",["visibility"])],r.prototype,"readVisible",null),o=n([u.subclass("esri.layers.support.KMLSublayer")],r)}(u.declared(l,s))}.apply(null,n))||(e.exports=o)}}]);