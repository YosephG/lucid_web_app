(function(){(this||window).webpackJsonp.registerAbsMids({"esri/portal/support/portalLayers":1245,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/esri-webpack-template/node_modules/arcgis-js-api/portal/support/portalLayers":1245,"esri/layers/support/lazyLayerLoader":1343,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/esri-webpack-template/node_modules/arcgis-js-api/layers/support/lazyLayerLoader":1343,"esri/portal/support/mapNotesUtils":1602,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/esri-webpack-template/node_modules/arcgis-js-api/portal/support/mapNotesUtils":1602,"esri/portal/support/layersCreator":1648,"C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/esri-webpack-template/node_modules/arcgis-js-api/portal/support/layersCreator":1648})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[24,38],{1245:function(e,r,a){var t,n;t=[a.dj.c(e.i),r,a(12),a(27),a(18),a(9),a(8),a(1343),a(114),a(1602)],void 0===(n=function(e,r,a,t,n,i,o,c,u,l){function y(e){switch(e.type){case"Map Service":return function(e){return p(e).then(function(e){return e?{className:"TileLayer"}:{className:"MapImageLayer"}})}(e);case"Feature Service":return function(e){return L(e).then(function(e){if("object"==typeof e){var r={outFields:["*"]};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}})}(e);case"Feature Collection":return function(e){return e.load().then(function(){return e.fetchData()}).then(function(e){if(e&&Array.isArray(e.layers)){if(l.isMapNotesLayer(e))return{className:"MapNotesLayer"};if(1===e.layers.length)return{className:"FeatureLayer"}}return{className:"GroupLayer"}})}(e);case"Scene Service":return function(e){return L(e).then(function(r){if("object"==typeof r){var a={},t=void 0;if(null!=r.id?(a.layerId=r.id,t=e.url+"/layers/"+r.id):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0)for(var n={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer"},i=0,o=Object.keys(n);i<o.length;i++){var c=o[i];if(-1!==e.typeKeywords.indexOf(c))return{className:n[c]}}return f(t).then(function(e){var r="SceneLayer";return null!=e&&"IntegratedMesh"===e.layerType?r="IntegratedMeshLayer":null!=e&&"PointCloud"===e.layerType&&(r="PointCloudLayer"),{className:r,properties:a}})}return{className:"GroupLayer"}})}(e);case"Image Service":return function(e){return p(e).then(function(r){var a=new n(e.typeKeywords);return r?a.find(function(e){return"elevation 3d layer"===e.toLowerCase()})?{className:"ElevationLayer"}:{className:"TileLayer"}:{className:"ImageryLayer"}})}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return o.reject(new i("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function s(e){return(0,c.layerLookupMap[e.className])().then(function(r){return{constructor:r,properties:e.properties}})}function p(e){return f(e.url).then(function(e){return e.tileInfo})}function L(e){return!e.url||e.url.match(/\/\d+$/)?o.resolve({}):e.load().then(function(){return e.fetchData()}).then(function(r){return r&&Array.isArray(r.layers)?1===r.layers.length&&{id:r.layers[0].id}:f(e.url).then(function(e){return e&&Array.isArray(e.layers)?1===e.layers.length&&{id:e.layers[0].id}:{}})})}function f(e){return t(e,{responseType:"json",callbackParamName:"callback",query:{f:"json"}}).then(function(e){return e.data})}Object.defineProperty(r,"__esModule",{value:!0}),r.fromItem=function(e){return!e.portalItem||e.portalItem instanceof u||e.portalItem.constructor&&e.portalItem.constructor._meta||(e=a({},e,{portalItem:new u(e.portalItem)})),function(e){return e.load().then(y).then(s)}(e.portalItem).then(function(r){var t=a({portalItem:e.portalItem},r.properties),n=r.constructor;return"esri.layers.FeatureLayer"===n.declaredClass&&(t.outFields=["*"]),o.resolve(new n(t))})},r.selectLayerClassPath=y}.apply(null,t))||(e.exports=n)},1343:function(e,r,a){var t,n;t=[a.dj.c(e.i),r,a(8)],void 0===(n=function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.layerLookupMap={CSVLayer:function(){return t.create(function(e){return Promise.resolve().then(function(){var r=[a(246)];e.apply(null,r)}.bind(this)).catch(a.oe)})},ElevationLayer:function(){return t.create(function(e){return a.e(14).then(function(){var r=[a(1229)];e.apply(null,r)}.bind(this)).catch(a.oe)})},FeatureLayer:function(){return t.create(function(e){return Promise.resolve().then(function(){var r=[a(94)];e.apply(null,r)}.bind(this)).catch(a.oe)})},GroupLayer:function(){return t.create(function(e){return Promise.resolve().then(function(){var r=[a(238)];e.apply(null,r)}.bind(this)).catch(a.oe)})},GeoRSSLayer:function(){return t.create(function(e){return a.e(16).then(function(){var r=[a(1237)];e.apply(null,r)}.bind(this)).catch(a.oe)})},ImageryLayer:function(){return t.create(function(e){return a.e(31).then(function(){var r=[a(1235)];e.apply(null,r)}.bind(this)).catch(a.oe)})},KMLLayer:function(){return t.create(function(e){return a.e(18).then(function(){var r=[a(1238)];e.apply(null,r)}.bind(this)).catch(a.oe)})},MapImageLayer:function(){return t.create(function(e){return Promise.resolve().then(function(){var r=[a(137)];e.apply(null,r)}.bind(this)).catch(a.oe)})},MapNotesLayer:function(){return t.create(function(e){return a.e(51).then(function(){var r=[a(1493)];e.apply(null,r)}.bind(this)).catch(a.oe)})},OpenStreetMapLayer:function(){return t.create(function(e){return a.e(19).then(function(){var r=[a(1239)];e.apply(null,r)}.bind(this)).catch(a.oe)})},PointCloudLayer:function(){return t.create(function(e){return a.e(30).then(function(){var r=[a(1240)];e.apply(null,r)}.bind(this)).catch(a.oe)})},SceneLayer:function(){return t.create(function(e){return Promise.resolve().then(function(){var r=[a(244)];e.apply(null,r)}.bind(this)).catch(a.oe)})},IntegratedMeshLayer:function(){return t.create(function(e){return a.e(17).then(function(){var r=[a(1230)];e.apply(null,r)}.bind(this)).catch(a.oe)})},StreamLayer:function(){return t.create(function(e){return a.e(13).then(function(){var r=[a(1236)];e.apply(null,r)}.bind(this)).catch(a.oe)})},TileLayer:function(){return t.create(function(e){return a.e(52).then(function(){var r=[a(458)];e.apply(null,r)}.bind(this)).catch(a.oe)})},UnknownLayer:function(){return t.create(function(e){return a.e(53).then(function(){var r=[a(1494)];e.apply(null,r)}.bind(this)).catch(a.oe)})},UnsupportedLayer:function(){return t.create(function(e){return a.e(54).then(function(){var r=[a(1495)];e.apply(null,r)}.bind(this)).catch(a.oe)})},VectorTileLayer:function(){return t.create(function(e){return Promise.all([a.e(5),a.e(20)]).then(function(){var r=[a(1233)];e.apply(null,r)}.bind(this)).catch(a.oe)})},WebTileLayer:function(){return t.create(function(e){return a.e(21).then(function(){var r=[a(1232)];e.apply(null,r)}.bind(this)).catch(a.oe)})},WMSLayer:function(){return t.create(function(e){return a.e(22).then(function(){var r=[a(1241)];e.apply(null,r)}.bind(this)).catch(a.oe)})},WMTSLayer:function(){return t.create(function(e){return a.e(85).then(function(){var r=[a(1496)];e.apply(null,r)}.bind(this)).catch(a.oe)})},BingMapsLayer:function(){return t.create(function(e){return a.e(7).then(function(){var r=[a(245)];e.apply(null,r)}.bind(this)).catch(a.oe)})}}}.apply(null,t))||(e.exports=n)},1602:function(e,r,a){var t,n;t=[a.dj.c(e.i),r],void 0===(n=function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.isMapNotesLayer=function(e){var r=["TITLE","DESCRIPTION","IMAGE_URL","IMAGE_LINK_URL"],a=e.layers||e.featureCollection&&e.featureCollection.layers;if(a&&Array.isArray(a)){var t=a[0];return t.layerDefinition.fields&&t.layerDefinition.fields.forEach(function(e){var a=r.indexOf(e.name);a>-1&&r.splice(a,1)}),!r.length}}}.apply(null,t))||(e.exports=n)},1648:function(e,r,a){var t,n;t=[a.dj.c(e.i),r,a(10),a(8),a(77),a(1343),a(114),a(1602),a(1245),a(259)],void 0===(n=function(e,r,a,t,n,i,o,c,u,l){function y(e,r){return function(e,r){var a=r.context,t=function(e){var r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=h;break;case"ground":r=d;break;default:r=f}break;default:switch(e.layerContainerType){case"basemap":r=S;break;default:r=v}}return r}(a),n=e.layerType||e.type;!n&&r&&r.defaultLayerType&&(n=r.defaultLayerType);var l=t[n],y=l?i.layerLookupMap[l]:i.layerLookupMap.UnknownLayer;if("Feature Collection"===e.type){if(e.itemId){var s=new o({id:e.itemId,portal:a&&a.portal});return s.load().then(u.selectLayerClassPath).then(function(e){var r=e.className||"UnknownLayer";return i.layerLookupMap[r]}).then(function(e){return e()})}}else"ArcGISFeatureLayer"===n&&c.isMapNotesLayer(e)&&(y=i.layerLookupMap.MapNotesLayer);return e.wmtsInfo&&(y=i.layerLookupMap.WMTSLayer),y()}(e,r).then(function(a){return function(e,r,a){var n,i,o={};return r.itemId&&(o.portalItem={id:r.itemId,portal:a.context.portal}),(i=n=new e(o)).read(r,a.context),l.loadStyleRenderer(i,a.context).then(function(){return t.resolve(n)})}(a,e,r)})}function s(e,r,a){return r&&r.filter?a.then(function(e){var a=r.filter(e);return void 0===a?t.resolve(e):a instanceof n?t.resolve(a):a}):a}function p(e,r,a){if(!r)return[];for(var n=[],i=[],o=0;o<r.length;o++){var c=r[o],u=y(c,a);if(n.push(u),i.push(null),"GroupLayer"===c.layerType){var l=c;if(l.layers&&Array.isArray(l.layers)&&l.layers.length>0){var p=l.layers.map(function(e){return y(e,a)});n.push.apply(n,p);for(var f=0;f<p.length;f++)i.push(u)}}}var d={};return n.map(function(r,n){var o=function(e,r){d[r.id]=n;var a=e.findIndex(function(e){if(!e.id)return!1;var r=d[e.id];return void 0!==r&&n<r});a<0&&(a=void 0),e.add(r,a)},c=s(0,a,r).then(function(r){return null!==i[n]?i[n].then(function(e){return o(e.layers,r),t.resolve(r)}):(o(e,r),t.resolve(r))});return L&&(c=c.catch(function(e){return console.error(e.toString?e.toString():e),t.reject(e)})),c})}Object.defineProperty(r,"__esModule",{value:!0});var L=a("dojo-debug-messages"),f={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},d={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer"},h={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},v={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",GeoRSS:"GeoRSSLayer",KML:"KMLLayer",WMS:"WMSLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",DefaultTileLayer:"TileLayer"},S={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};r.createLayer=y,r.processLayer=s,r.populateLayers=p,r.populateOperationalLayers=function(e,r,a){return p(e,r,a)}}.apply(null,t))||(e.exports=n)}}]);