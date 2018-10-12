(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/TileLayer":458,"esri/layers/support/arcgisLayers":1231,"esri/layers/mixins/ArcGISCachedService":1341,"esri/layers/support/TilemapCache":1416,"esri/layers/support/Tilemap":1430})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[52,20],{1231:function(e,t,r){var i,a;i=[r.dj.c(e.i),t,r(12),r(134),r(27),r(9),r(8),r(129),r(129),r(1343)],void 0===(a=function(e,t,i,a,n,l,o,s,c,p){function u(e){return(0,p.layerLookupMap[e])()}function h(e){return n(e,{responseType:"json",callbackParamName:"callback",query:{f:"json"}}).then(function(e){return e.data})}Object.defineProperty(t,"__esModule",{value:!0}),t.fromUrl=function(e){return function(e){var t=c.parse(e);if(!t)return o.reject(new l("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e}));var r,i=t.serverType,n=t.sublayer;switch(i){case"MapServer":r=null!=n?"FeatureLayer":function(e){return h(e).then(function(e){return e.tileInfo})}(e).then(function(e){return e?"TileLayer":"MapImageLayer"});break;case"ImageServer":r=h(e).then(function(e){var t=e.tileInfo&&e.tileInfo.format;return e.tileInfo?t&&"LERC"===t.toUpperCase()&&e.cacheType&&"elevation"===e.cacheType.toLowerCase()?"ElevationLayer":"TileLayer":"ImageryLayer"});break;case"SceneServer":r=h(t.url.path).then(function(e){var t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){var r=e.layers[0].layerType;if(null!=t[r])return t[r]}return"SceneLayer"});break;default:r={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"}[i]}var s,p={FeatureLayer:!0,SceneLayer:!0},f={parsedUrl:t,Constructor:null,sublayerIds:null};return a(r).then(function(t){if(s=t,p[t]&&null==n)return function(e){return h(e).then(function(e){return e&&Array.isArray(e.layers)?e.layers.map(function(e){return e.id}).reverse():[]})}(e).then(function(e){1!==e.length&&(f.sublayerIds=e)})}).then(function(){return u(s)}).then(function(e){return f.Constructor=e,f})}(e.url).then(function(t){var a=function(e,t){var r=e.Constructor.prototype.declaredClass;return"esri.layers.FeatureLayer"===r||"esri.layers.StreamLayer"===r?i({outFields:["*"]},t):t}(t,i({},e.properties,{url:e.url}));return t.sublayerIds?o.create(function(e){return Promise.resolve().then(function(){var t=[r(238)];e.apply(null,t)}.bind(this)).catch(r.oe)}).then(function(e){var r=new e({title:t.parsedUrl.title});return function(e,t){return e.sublayerIds.map(function(r){return new e.Constructor(i({},t,{layerId:r,sublayerTitleMode:"service-name"}))})}(t,a).forEach(function(e){return r.add(e)}),o.resolve(r)}):o.resolve(new t.Constructor(a))})},t.fetchServerVersion=function(e){if(!s.test(e))return o.reject();var t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return n(t,{query:{f:"json"},responseType:"json",callbackParamName:"callback"}).then(function(e){return e.data&&e.data.currentVersion?e.data.currentVersion:o.reject()})}}.apply(null,i))||(e.exports=a)},1341:function(e,t,r){var i,a;i=[r.dj.c(e.i),t,r(12),r(2),r(1),r(29),r(0),r(174),r(455),r(1416)],void 0===(a=function(e,t,r,i,a,n,l,o,s,c){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.copyright=null,t.minScale=0,t.maxScale=0,t.spatialReference=null,t.tileInfo=null,t.tilemapCache=null,t}return i(t,e),Object.defineProperty(t.prototype,"supportsBlankTile",{get:function(){return this.version>=10.2},enumerable:!0,configurable:!0}),t.prototype.readTileInfo=function(e,t){var r=function(e){return Math.round(1e4*e)/1e4},i=t.minScale?r(t.minScale):1/0,a=t.maxScale?r(t.maxScale):-1/0;return e?(e.lods=e.lods.filter(function(e){var t=r(e.scale);return t<=i&&t>=a}),s.fromJSON(e)):null},t.prototype.readTilemapCache=function(e,t){return t.capabilities&&t.capabilities.indexOf("Tilemap")>-1?new c({layer:this}):null},a([l.property({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),a([l.property({json:{origins:{service:{read:!1}}}})],t.prototype,"minScale",void 0),a([l.property({json:{origins:{service:{read:!1}}}})],t.prototype,"maxScale",void 0),a([l.property({type:n.SpatialReference})],t.prototype,"spatialReference",void 0),a([l.property({readOnly:!0,dependsOn:["version"]})],t.prototype,"supportsBlankTile",null),a([l.property({type:s})],t.prototype,"tileInfo",void 0),a([l.reader("service","tileInfo",["tileInfo","minScale","maxScale"])],t.prototype,"readTileInfo",null),a([l.property()],t.prototype,"tilemapCache",void 0),a([l.reader("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),a([l.property()],t.prototype,"version",void 0),a([l.subclass("esri.layers.mixins.ArcGISCachedService")],t)}(l.declared(o))}.apply(null,i))||(e.exports=a)},1416:function(e,t,r){var i,a;i=[r.dj.c(e.i),t,r(12),r(2),r(1),r(78),r(27),r(4),r(9),r(15),r(7),r(468),r(8),r(17),r(0),r(1430)],void 0===(a=function(e,t,r,i,a,n,l,o,s,c,p,u,h,f,y,v){var d=p.getLogger("esri.layers.support.TilemapCache");return function(e){function t(t){var r=e.call(this)||this;return r._handles=new c,r._pendingTilemapRequests={},r._availableLevels={},r.levels=5,r.cacheByteSize=2097152,r.request=l,r}return i(t,e),t.prototype.initialize=function(){var e=this;this._tilemapCache=new u(this.cacheByteSize,{sizeOfFunction:function(e){return e.byteSize}}),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers"],function(){return e._initializeTilemapDefinition()}),f.init(this,"layer.tileInfo.lods",function(t){return e._initializeAvailableLevels(t)},!0)]),this._initializeTilemapDefinition()},t.prototype.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null)},t.prototype.castLevels=function(e){return e<=2?(d.error("Minimum levels for Tilemap is 3, but got ",e),3):e},Object.defineProperty(t.prototype,"size",{get:function(){return 1<<this.levels},enumerable:!0,configurable:!0}),t.prototype.getTilemap=function(e,t,r){return this._tilemapFromCache(e,t,r,this._tmpTilemapDefinition)},t.prototype.fetchTilemap=function(e,t,r,i){var a=this;if(!this._availableLevels[e])return h.reject(new s("tilemap-cache:level-unavailable","Level "+e+" is unavailable in the service"));var n=this._tmpTilemapDefinition,l=this._tilemapFromCache(e,t,r,n);if(l)return h.resolve(l);var o=v.tilemapDefinitionId(n),c=this._pendingTilemapRequests[o];return c||(c=v.Tilemap.fromDefinition(n,i).then(function(e){return a._tilemapCache.set(o,e),delete a._pendingTilemapRequests[o],e}).catch(function(e){return delete a._pendingTilemapRequests[o],h.reject(e)}),this._pendingTilemapRequests[o]=c),h.create(function(e,t){c.then(e,t)})},t.prototype.getAvailability=function(e,t,r){if(!this._availableLevels[e])return"unavailable";var i=this.getTilemap(e,t,r);return i?i.getAvailability(t,r):"unknown"},t.prototype.getAvailabilityUpsample=function(e,t,r,i){i.level=e,i.row=t,i.col=r;var a=this.layer.tileInfo;for(a.updateTileInfo(i);;){var n=this.getAvailability(i.level,i.row,i.col);if("unavailable"!==n)return n;if(!a.upsampleTile(i))return"unavailable"}},t.prototype.fetchAvailability=function(e,t,r,i){return this._availableLevels[e]?this.fetchTilemap(e,t,r,i).always(function(i){if(i instanceof v.Tilemap){var a=i.getAvailability(t,r);return"unavailable"===a?h.reject(new s("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:r})):a}return i&&"cancel"===i.dojoType?h.reject(i):"unknown"}):h.reject(new s("tilemap-cache:level-unavailable","Level "+e+" is unavailable in the service"))},t.prototype.fetchAvailabilityUpsample=function(e,t,r,i,a){var n=this;i.level=e,i.row=t,i.col=r;var l=this.layer.tileInfo;return l.updateTileInfo(i),this.fetchAvailability(e,t,r,a).catch(function(e){return e&&"cancel"===e.dojoType?h.reject(e):l.upsampleTile(i)?n.fetchAvailabilityUpsample(i.level,i.row,i.col,i):h.reject(e)})},t.prototype._initializeTilemapDefinition=function(){if(this.layer.parsedUrl){var e=this.layer.parsedUrl,t=e.query;t&&t.token||!this.layer.token||(t=r({},t,{token:this.layer.token})),this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?n.objectToQuery(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}},t.prototype._tilemapFromCache=function(e,t,r,i){var a=this._getTilemapDefinition(e,t,r,i),n=v.tilemapDefinitionId(a);return this._tilemapCache.get(n)},t.prototype._getTilemapDefinition=function(e,t,r,i){return i.level=e,i.row=t-t%this.size,i.col=r-r%this.size,i},t.prototype._initializeAvailableLevels=function(e){var t=this;this._availableLevels={},e&&e.forEach(function(e){return t._availableLevels[e.level]=!0})},a([y.property({constructOnly:!0,type:Number})],t.prototype,"levels",void 0),a([y.cast("levels")],t.prototype,"castLevels",null),a([y.property({readOnly:!0,dependsOn:["levels"],type:Number})],t.prototype,"size",null),a([y.property({constructOnly:!0,type:Number})],t.prototype,"cacheByteSize",void 0),a([y.property({constructOnly:!0})],t.prototype,"layer",void 0),a([y.property({constructOnly:!0})],t.prototype,"request",void 0),a([y.subclass("esri.layers.support.TilemapCache")],t)}(y.declared(o))}.apply(null,i))||(e.exports=a)},1430:function(e,t,r){var i,a;i=[r.dj.c(e.i),t,r(12),r(27),r(9),r(5),r(8)],void 0===(a=function(e,t,r,i,a,n,l){function o(e){var t;if("vector-tile"===e.service.type)t=e.service.url+"/tilemap/"+e.level+"/"+e.row+"/"+e.col+"/"+e.width+"/"+e.height;else{var r=e.service.tileServers;t=(r&&r.length?r[e.row%r.length]:e.service.url)+"/tilemap/"+e.level+"/"+e.row+"/"+e.col+"/"+e.width+"/"+e.height}var i=e.service.query;return i&&(t=t+"?"+i),t}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(){this.location={left:0,top:0,width:0,height:0},this.byteSize=40}return e.prototype.getAvailability=function(e,t){if(this._isAllAvailable)return"available";if(this._isAllUnvailable)return"unavailable";var r=(e-this.location.top)*this.location.width+(t-this.location.left),i=r%8,a=r>>3,n=this._tileAvailabilityBitSet;return a<0||a>n.length?"unknown":n[a]&1<<i?"available":"unavailable"},e.prototype._updateFromData=function(e){for(var t=this.location.width,r=this.location.height,i=!0,a=!0,n=Math.ceil(t*r/8),l=new Uint8Array(n),o=0,s=0;s<e.length;s++){var c=s%8;e[s]?(a=!1,l[o]|=1<<c):i=!1,7===c&&++o}this._isAllUnvailable=a,this._isAllAvailable=i,this._isAllAvailable||this._isAllUnvailable||(this._tileAvailabilityBitSet=l,this.byteSize+=l.length)},e.fromDefinition=function(t,n){var s=t.service.request||i,c=t.row,p=t.col,u=t.width,h=t.height,f={query:{f:"json"},callbackParamName:"callback"};return n=n?r({},f,n):f,s(o(t),n).then(function(e){return e.data}).catch(function(e){return e&&e.details&&422===e.details.httpStatus?{location:{top:c,left:p,width:u,height:h},valid:!0,data:function(){for(var e=[],t=0,r=u*h;t<r;t++)e[t]=0;return e}()}:l.reject(e)}).then(function(t){if(t.location&&(t.location.top!==c||t.location.left!==p||t.location.width!==u||t.location.height!==h))throw new a("tilemap:location-mismatch","Tilemap response for different location than requested",{response:t,definition:{top:c,left:p,width:u,height:h}});return e.fromJSON(t)})},e.fromJSON=function(t){e.validateJSON(t);var r=new e;return r.location=Object.freeze(n.clone(t.location)),r._updateFromData(t.data),Object.freeze(r)},e.validateJSON=function(e){if(!e||!e.location)throw new a("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new a("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new a("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new a("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new a("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")},e}();t.Tilemap=s,t.tilemapDefinitionId=function(e){return e.level+"/"+e.row+"/"+e.col+"/"+e.width+"/"+e.height},t.tilemapDefinitionUrl=o,t.default=s}.apply(null,i))||(e.exports=a)},458:function(e,t,r){var i,a;i=[r.dj.c(e.i),t,r(12),r(2),r(1),r(78),r(29),r(27),r(8),r(22),r(0),r(77),r(1341),r(476),r(132),r(130),r(240),r(169),r(1231),r(129)],void 0===(a=function(e,t,i,a,n,l,o,s,c,p,u,h,f,y,v,d,m,b,g,_){var T=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];return function(e){function t(t,r){var i=e.call(this)||this;return i.url=null,i.type="tile",i.spatialReference=null,i}return a(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?i({url:e},t):e},t.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service","Map Service"]}).always(function(){return e._fetchService()})),this.when()},Object.defineProperty(t.prototype,"operationalLayerType",{get:function(){if(this.capabilities)return this.capabilities.operations.supportsExportMap?"ArcGISTiledMapServiceLayer":"ArcGISTiledImageServiceLayer";var e=this.url||this.portalItem&&this.portalItem.url;return e&&/\/ImageServer(\/|\/?$)/i.test(e)?"ArcGISTiledImageServiceLayer":"ArcGISTiledMapServiceLayer"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"attributionDataUrl",{get:function(){return this._getDefaultAttribution(this._getMapName(this.parsedUrl.path.toLowerCase()))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tileServers",{get:function(){return this._getDefaultTileServers(this.parsedUrl.path)},enumerable:!0,configurable:!0}),t.prototype.castTileServers=function(e){return Array.isArray(e)?e.map(function(e){return p.urlToObject(e).path}):null},t.prototype.readSpatialReference=function(e,t){return(e=e||t.tileInfo&&t.tileInfo.spatialReference)&&o.SpatialReference.fromJSON(e)},t.prototype.fetchTile=function(e,t,r,i){var a=this.getTileUrl(e,t,r),n={responseType:"image",allowImageDataAccess:i&&i.allowImageDataAccess||!1};return i&&i.timestamp&&(n.query={_ts:i.timestamp}),s(a,n).then(function(e){return e.data})},t.prototype.getTileUrl=function(e,t,r){var a=!this.tilemapCache&&this.supportsBlankTile,n=l.objectToQuery(i({},this.parsedUrl.query,{blankTile:!a&&null,token:this.token?encodeURIComponent(this.token):null})),o=this.tileServers;return(o&&o.length?o[t%o.length]:this.parsedUrl.path)+"/tile/"+e+"/"+t+"/"+r+(n?"?"+n:"")},t.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return c.create(function(e){return r.e(12).then(function(){var t=[r(1471)];e.apply(null,t)}.bind(this)).catch(r.oe)});case"3d":return c.create(function(e){return Promise.all([r.e(4),r.e(5),r.e(6),r.e(59)]).then(function(){var t=[r(1461)];e.apply(null,t)}.bind(this)).catch(r.oe)})}},t.prototype._fetchService=function(){var e=this;return c.create(function(t,r){e.resourceInfo?t({data:e.resourceInfo}):s(e.parsedUrl.path,{query:i({f:"json"},e.parsedUrl.query),responseType:"json",callbackParamName:"callback"}).then(t,r)}).then(function(t){if(t.ssl&&(e.url=e.url.replace(/^http:/i,"https:")),e.read(t.data,{origin:"service",url:e.parsedUrl}),10.1===e.version&&!_.isHostedAgolService(e.url))return g.fetchServerVersion(e.url).then(function(t){e.read({currentVersion:t})}).catch(function(){})})},t.prototype._getMapName=function(e){var t=e.match(/^(?:https?:)?\/\/(server|services)\.arcgisonline\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return t&&t[2]},t.prototype._getDefaultAttribution=function(e){if(e){var t;e=e.toLowerCase();for(var r=0,i=T.length;r<i;r++)if((t=T[r]).toLowerCase().indexOf(e)>-1)return p.makeAbsolute("//static.arcgis.com/attribution/"+t)}},t.prototype._getDefaultTileServers=function(e){var t=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),r=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return t||r?[e,e.replace(t?/server\.arcgisonline/i:/services\.arcgisonline/i,t?"services.arcgisonline":"server.arcgisonline")]:[]},n([u.property({readOnly:!0})],t.prototype,"operationalLayerType",null),n([u.property({readOnly:!0,dependsOn:["parsedUrl"]})],t.prototype,"attributionDataUrl",null),n([u.property()],t.prototype,"popupTemplates",void 0),n([u.property()],t.prototype,"resourceInfo",void 0),n([u.property({dependsOn:["parsedUrl"]})],t.prototype,"tileServers",null),n([u.cast("tileServers")],t.prototype,"castTileServers",null),n([u.property({json:{origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writer:p.writeOperationalLayerUrl}}}}})],t.prototype,"url",void 0),n([u.property({readOnly:!0,json:{read:!1}})],t.prototype,"type",void 0),n([u.property({type:o.SpatialReference})],t.prototype,"spatialReference",void 0),n([u.reader("spatialReference",["spatialReference","tileInfo"])],t.prototype,"readSpatialReference",null),n([u.subclass("esri.layers.TileLayer")],t)}(u.declared(h,y,f,b,v,d,m))}.apply(null,i))||(e.exports=a)}}]);