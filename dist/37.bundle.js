(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/support/arcgisLayers":1231,"esri/layers/support/lazyLayerLoader":1343,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/esri-webpack-template/node_modules/arcgis-js-api/layers/support/lazyLayerLoader":1343})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1231:function(e,n,r){var t,a;t=[r.dj.c(e.i),n,r(12),r(134),r(27),r(9),r(8),r(129),r(129),r(1343)],void 0===(a=function(e,n,t,a,u,c,o,i,l,s){function f(e){return(0,s.layerLookupMap[e])()}function p(e){return u(e,{responseType:"json",callbackParamName:"callback",query:{f:"json"}}).then(function(e){return e.data})}Object.defineProperty(n,"__esModule",{value:!0}),n.fromUrl=function(e){return function(e){var n=l.parse(e);if(!n)return o.reject(new c("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e}));var r,t=n.serverType,u=n.sublayer;switch(t){case"MapServer":r=null!=u?"FeatureLayer":function(e){return p(e).then(function(e){return e.tileInfo})}(e).then(function(e){return e?"TileLayer":"MapImageLayer"});break;case"ImageServer":r=p(e).then(function(e){var n=e.tileInfo&&e.tileInfo.format;return e.tileInfo?n&&"LERC"===n.toUpperCase()&&e.cacheType&&"elevation"===e.cacheType.toLowerCase()?"ElevationLayer":"TileLayer":"ImageryLayer"});break;case"SceneServer":r=p(n.url.path).then(function(e){var n={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){var r=e.layers[0].layerType;if(null!=n[r])return n[r]}return"SceneLayer"});break;default:r={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"}[t]}var i,s={FeatureLayer:!0,SceneLayer:!0},y={parsedUrl:n,Constructor:null,sublayerIds:null};return a(r).then(function(n){if(i=n,s[n]&&null==u)return function(e){return p(e).then(function(e){return e&&Array.isArray(e.layers)?e.layers.map(function(e){return e.id}).reverse():[]})}(e).then(function(e){1!==e.length&&(y.sublayerIds=e)})}).then(function(){return f(i)}).then(function(e){return y.Constructor=e,y})}(e.url).then(function(n){var a=function(e,n){var r=e.Constructor.prototype.declaredClass;return"esri.layers.FeatureLayer"===r||"esri.layers.StreamLayer"===r?t({outFields:["*"]},n):n}(n,t({},e.properties,{url:e.url}));return n.sublayerIds?o.create(function(e){return Promise.resolve().then(function(){var n=[r(238)];e.apply(null,n)}.bind(this)).catch(r.oe)}).then(function(e){var r=new e({title:n.parsedUrl.title});return function(e,n){return e.sublayerIds.map(function(r){return new e.Constructor(t({},n,{layerId:r,sublayerTitleMode:"service-name"}))})}(n,a).forEach(function(e){return r.add(e)}),o.resolve(r)}):o.resolve(new n.Constructor(a))})},n.fetchServerVersion=function(e){if(!i.test(e))return o.reject();var n=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return u(n,{query:{f:"json"},responseType:"json",callbackParamName:"callback"}).then(function(e){return e.data&&e.data.currentVersion?e.data.currentVersion:o.reject()})}}.apply(null,t))||(e.exports=a)},1343:function(e,n,r){var t,a;t=[r.dj.c(e.i),n,r(8)],void 0===(a=function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.layerLookupMap={CSVLayer:function(){return t.create(function(e){return Promise.resolve().then(function(){var n=[r(246)];e.apply(null,n)}.bind(this)).catch(r.oe)})},ElevationLayer:function(){return t.create(function(e){return r.e(14).then(function(){var n=[r(1229)];e.apply(null,n)}.bind(this)).catch(r.oe)})},FeatureLayer:function(){return t.create(function(e){return Promise.resolve().then(function(){var n=[r(94)];e.apply(null,n)}.bind(this)).catch(r.oe)})},GroupLayer:function(){return t.create(function(e){return Promise.resolve().then(function(){var n=[r(238)];e.apply(null,n)}.bind(this)).catch(r.oe)})},GeoRSSLayer:function(){return t.create(function(e){return r.e(16).then(function(){var n=[r(1237)];e.apply(null,n)}.bind(this)).catch(r.oe)})},ImageryLayer:function(){return t.create(function(e){return r.e(31).then(function(){var n=[r(1235)];e.apply(null,n)}.bind(this)).catch(r.oe)})},KMLLayer:function(){return t.create(function(e){return r.e(18).then(function(){var n=[r(1238)];e.apply(null,n)}.bind(this)).catch(r.oe)})},MapImageLayer:function(){return t.create(function(e){return Promise.resolve().then(function(){var n=[r(137)];e.apply(null,n)}.bind(this)).catch(r.oe)})},MapNotesLayer:function(){return t.create(function(e){return r.e(51).then(function(){var n=[r(1493)];e.apply(null,n)}.bind(this)).catch(r.oe)})},OpenStreetMapLayer:function(){return t.create(function(e){return r.e(19).then(function(){var n=[r(1239)];e.apply(null,n)}.bind(this)).catch(r.oe)})},PointCloudLayer:function(){return t.create(function(e){return r.e(30).then(function(){var n=[r(1240)];e.apply(null,n)}.bind(this)).catch(r.oe)})},SceneLayer:function(){return t.create(function(e){return Promise.resolve().then(function(){var n=[r(244)];e.apply(null,n)}.bind(this)).catch(r.oe)})},IntegratedMeshLayer:function(){return t.create(function(e){return r.e(17).then(function(){var n=[r(1230)];e.apply(null,n)}.bind(this)).catch(r.oe)})},StreamLayer:function(){return t.create(function(e){return r.e(13).then(function(){var n=[r(1236)];e.apply(null,n)}.bind(this)).catch(r.oe)})},TileLayer:function(){return t.create(function(e){return r.e(52).then(function(){var n=[r(458)];e.apply(null,n)}.bind(this)).catch(r.oe)})},UnknownLayer:function(){return t.create(function(e){return r.e(53).then(function(){var n=[r(1494)];e.apply(null,n)}.bind(this)).catch(r.oe)})},UnsupportedLayer:function(){return t.create(function(e){return r.e(54).then(function(){var n=[r(1495)];e.apply(null,n)}.bind(this)).catch(r.oe)})},VectorTileLayer:function(){return t.create(function(e){return Promise.all([r.e(5),r.e(20)]).then(function(){var n=[r(1233)];e.apply(null,n)}.bind(this)).catch(r.oe)})},WebTileLayer:function(){return t.create(function(e){return r.e(21).then(function(){var n=[r(1232)];e.apply(null,n)}.bind(this)).catch(r.oe)})},WMSLayer:function(){return t.create(function(e){return r.e(22).then(function(){var n=[r(1241)];e.apply(null,n)}.bind(this)).catch(r.oe)})},WMTSLayer:function(){return t.create(function(e){return r.e(85).then(function(){var n=[r(1496)];e.apply(null,n)}.bind(this)).catch(r.oe)})},BingMapsLayer:function(){return t.create(function(e){return r.e(7).then(function(){var n=[r(245)];e.apply(null,n)}.bind(this)).catch(r.oe)})}}}.apply(null,t))||(e.exports=a)}}]);