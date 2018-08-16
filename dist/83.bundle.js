(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	'esri/layers/support/lazyLayerLoader':"./node_modules/arcgis-js-api/layers/support/lazyLayerLoader.js",
	'esri/views/3d/layers/VectorTileLayerView3D':"./node_modules/arcgis-js-api/views/3d/layers/VectorTileLayerView3D.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83],{

/***/ "./node_modules/arcgis-js-api/layers/support/lazyLayerLoader.js":
/*!**********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/lazyLayerLoader.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2018 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.8/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/promiseUtils */ \"./node_modules/arcgis-js-api/core/promiseUtils.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,n){Object.defineProperty(r,\"__esModule\",{value:!0}),r.layerLookupMap={CSVLayer:function(){return n.create(function(r){return __webpack_require__.e(/*! AMD require */ 55).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../CSVLayer */ \"./node_modules/arcgis-js-api/layers/CSVLayer.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},ElevationLayer:function(){return n.create(function(r){return Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../ElevationLayer */ \"./node_modules/arcgis-js-api/layers/ElevationLayer.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},FeatureLayer:function(){return n.create(function(r){return Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../FeatureLayer */ \"./node_modules/arcgis-js-api/layers/FeatureLayer.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},GroupLayer:function(){return n.create(function(r){return Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../GroupLayer */ \"./node_modules/arcgis-js-api/layers/GroupLayer.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},GeoRSSLayer:function(){return n.create(function(r){return __webpack_require__.e(/*! AMD require */ 40).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../GeoRSSLayer */ \"./node_modules/arcgis-js-api/layers/GeoRSSLayer.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},ImageryLayer:function(){return n.create(function(r){return __webpack_require__.e(/*! AMD require */ 52).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../ImageryLayer */ \"./node_modules/arcgis-js-api/layers/ImageryLayer.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},KMLLayer:function(){return n.create(function(r){return __webpack_require__.e(/*! AMD require */ 58).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../KMLLayer */ \"./node_modules/arcgis-js-api/layers/KMLLayer.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},MapImageLayer:function(){return n.create(function(r){return __webpack_require__.e(/*! AMD require */ 54).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../MapImageLayer */ \"./node_modules/arcgis-js-api/layers/MapImageLayer.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},MapNotesLayer:function(){return n.create(function(r){return __webpack_require__.e(/*! AMD require */ 71).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../MapNotesLayer */ \"./node_modules/arcgis-js-api/layers/MapNotesLayer.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},OpenStreetMapLayer:function(){return n.create(function(r){return __webpack_require__.e(/*! AMD require */ 59).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../OpenStreetMapLayer */ \"./node_modules/arcgis-js-api/layers/OpenStreetMapLayer.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},PointCloudLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(32), __webpack_require__.e(53)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../PointCloudLayer */ \"./node_modules/arcgis-js-api/layers/PointCloudLayer.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},SceneLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(33), __webpack_require__.e(37)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../SceneLayer */ \"./node_modules/arcgis-js-api/layers/SceneLayer.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},IntegratedMeshLayer:function(){return n.create(function(r){return __webpack_require__.e(/*! AMD require */ 41).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../IntegratedMeshLayer */ \"./node_modules/arcgis-js-api/layers/IntegratedMeshLayer.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},StreamLayer:function(){return n.create(function(r){return __webpack_require__.e(/*! AMD require */ 38).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../StreamLayer */ \"./node_modules/arcgis-js-api/layers/StreamLayer.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},TileLayer:function(){return n.create(function(r){return __webpack_require__.e(/*! AMD require */ 10).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../TileLayer */ \"./node_modules/arcgis-js-api/layers/TileLayer.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},UnknownLayer:function(){return n.create(function(r){return __webpack_require__.e(/*! AMD require */ 72).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../UnknownLayer */ \"./node_modules/arcgis-js-api/layers/UnknownLayer.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},UnsupportedLayer:function(){return n.create(function(r){return __webpack_require__.e(/*! AMD require */ 73).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../UnsupportedLayer */ \"./node_modules/arcgis-js-api/layers/UnsupportedLayer.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},VectorTileLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(9), __webpack_require__.e(11)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../VectorTileLayer */ \"./node_modules/arcgis-js-api/layers/VectorTileLayer.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},WebTileLayer:function(){return n.create(function(r){return __webpack_require__.e(/*! AMD require */ 42).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../WebTileLayer */ \"./node_modules/arcgis-js-api/layers/WebTileLayer.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},WMSLayer:function(){return n.create(function(r){return __webpack_require__.e(/*! AMD require */ 56).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../WMSLayer */ \"./node_modules/arcgis-js-api/layers/WMSLayer.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},WMTSLayer:function(){return n.create(function(r){return __webpack_require__.e(/*! AMD require */ 100).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../WMTSLayer */ \"./node_modules/arcgis-js-api/layers/WMTSLayer.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},BingMapsLayer:function(){return n.create(function(r){return __webpack_require__.e(/*! AMD require */ 22).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../BingMapsLayer */ \"./node_modules/arcgis-js-api/layers/BingMapsLayer.js\")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})}}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS9sYXllcnMvc3VwcG9ydC9sYXp5TGF5ZXJMb2FkZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS9sYXllcnMvc3VwcG9ydC9sYXp5TGF5ZXJMb2FkZXIuanM/MTVhYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT1BZUklHSFQgwqkgMjAxOCBFc3JpXG4vL1xuLy8gQWxsIHJpZ2h0cyByZXNlcnZlZCB1bmRlciB0aGUgY29weXJpZ2h0IGxhd3Mgb2YgdGhlIFVuaXRlZCBTdGF0ZXNcbi8vIGFuZCBhcHBsaWNhYmxlIGludGVybmF0aW9uYWwgbGF3cywgdHJlYXRpZXMsIGFuZCBjb252ZW50aW9ucy5cbi8vXG4vLyBUaGlzIG1hdGVyaWFsIGlzIGxpY2Vuc2VkIGZvciB1c2UgdW5kZXIgdGhlIEVzcmkgTWFzdGVyIExpY2Vuc2Vcbi8vIEFncmVlbWVudCAoTUxBKSwgYW5kIGlzIGJvdW5kIGJ5IHRoZSB0ZXJtcyBvZiB0aGF0IGFncmVlbWVudC5cbi8vIFlvdSBtYXkgcmVkaXN0cmlidXRlIGFuZCB1c2UgdGhpcyBjb2RlIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuLy8gcHJvdmlkZWQgeW91IGFkaGVyZSB0byB0aGUgdGVybXMgb2YgdGhlIE1MQSBhbmQgaW5jbHVkZSB0aGlzXG4vLyBjb3B5cmlnaHQgbm90aWNlLlxuLy9cbi8vIFNlZSB1c2UgcmVzdHJpY3Rpb25zIGF0IGh0dHA6Ly93d3cuZXNyaS5jb20vbGVnYWwvcGRmcy9tbGFfZTIwNF9lMzAwL2VuZ2xpc2hcbi8vXG4vLyBGb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiwgY29udGFjdDpcbi8vIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbi8vIEF0dG46IENvbnRyYWN0cyBhbmQgTGVnYWwgU2VydmljZXMgRGVwYXJ0bWVudFxuLy8gMzgwIE5ldyBZb3JrIFN0cmVldFxuLy8gUmVkbGFuZHMsIENhbGlmb3JuaWEsIFVTQSA5MjM3M1xuLy8gVVNBXG4vL1xuLy8gZW1haWw6IGNvbnRyYWN0c0Blc3JpLmNvbVxuLy9cbi8vIFNlZSBodHRwOi8vanMuYXJjZ2lzLmNvbS80LjgvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuXG5kZWZpbmUoW1wicmVxdWlyZVwiLFwiZXhwb3J0c1wiLFwiLi4vLi4vY29yZS9wcm9taXNlVXRpbHNcIl0sZnVuY3Rpb24oZSxyLG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHIubGF5ZXJMb29rdXBNYXA9e0NTVkxheWVyOmZ1bmN0aW9uKCl7cmV0dXJuIG4uY3JlYXRlKGZ1bmN0aW9uKHIpe3JldHVybiBlKFtcIi4uL0NTVkxheWVyXCJdLHIpfSl9LEVsZXZhdGlvbkxheWVyOmZ1bmN0aW9uKCl7cmV0dXJuIG4uY3JlYXRlKGZ1bmN0aW9uKHIpe3JldHVybiBlKFtcIi4uL0VsZXZhdGlvbkxheWVyXCJdLHIpfSl9LEZlYXR1cmVMYXllcjpmdW5jdGlvbigpe3JldHVybiBuLmNyZWF0ZShmdW5jdGlvbihyKXtyZXR1cm4gZShbXCIuLi9GZWF0dXJlTGF5ZXJcIl0scil9KX0sR3JvdXBMYXllcjpmdW5jdGlvbigpe3JldHVybiBuLmNyZWF0ZShmdW5jdGlvbihyKXtyZXR1cm4gZShbXCIuLi9Hcm91cExheWVyXCJdLHIpfSl9LEdlb1JTU0xheWVyOmZ1bmN0aW9uKCl7cmV0dXJuIG4uY3JlYXRlKGZ1bmN0aW9uKHIpe3JldHVybiBlKFtcIi4uL0dlb1JTU0xheWVyXCJdLHIpfSl9LEltYWdlcnlMYXllcjpmdW5jdGlvbigpe3JldHVybiBuLmNyZWF0ZShmdW5jdGlvbihyKXtyZXR1cm4gZShbXCIuLi9JbWFnZXJ5TGF5ZXJcIl0scil9KX0sS01MTGF5ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gbi5jcmVhdGUoZnVuY3Rpb24ocil7cmV0dXJuIGUoW1wiLi4vS01MTGF5ZXJcIl0scil9KX0sTWFwSW1hZ2VMYXllcjpmdW5jdGlvbigpe3JldHVybiBuLmNyZWF0ZShmdW5jdGlvbihyKXtyZXR1cm4gZShbXCIuLi9NYXBJbWFnZUxheWVyXCJdLHIpfSl9LE1hcE5vdGVzTGF5ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gbi5jcmVhdGUoZnVuY3Rpb24ocil7cmV0dXJuIGUoW1wiLi4vTWFwTm90ZXNMYXllclwiXSxyKX0pfSxPcGVuU3RyZWV0TWFwTGF5ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gbi5jcmVhdGUoZnVuY3Rpb24ocil7cmV0dXJuIGUoW1wiLi4vT3BlblN0cmVldE1hcExheWVyXCJdLHIpfSl9LFBvaW50Q2xvdWRMYXllcjpmdW5jdGlvbigpe3JldHVybiBuLmNyZWF0ZShmdW5jdGlvbihyKXtyZXR1cm4gZShbXCIuLi9Qb2ludENsb3VkTGF5ZXJcIl0scil9KX0sU2NlbmVMYXllcjpmdW5jdGlvbigpe3JldHVybiBuLmNyZWF0ZShmdW5jdGlvbihyKXtyZXR1cm4gZShbXCIuLi9TY2VuZUxheWVyXCJdLHIpfSl9LEludGVncmF0ZWRNZXNoTGF5ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gbi5jcmVhdGUoZnVuY3Rpb24ocil7cmV0dXJuIGUoW1wiLi4vSW50ZWdyYXRlZE1lc2hMYXllclwiXSxyKX0pfSxTdHJlYW1MYXllcjpmdW5jdGlvbigpe3JldHVybiBuLmNyZWF0ZShmdW5jdGlvbihyKXtyZXR1cm4gZShbXCIuLi9TdHJlYW1MYXllclwiXSxyKX0pfSxUaWxlTGF5ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gbi5jcmVhdGUoZnVuY3Rpb24ocil7cmV0dXJuIGUoW1wiLi4vVGlsZUxheWVyXCJdLHIpfSl9LFVua25vd25MYXllcjpmdW5jdGlvbigpe3JldHVybiBuLmNyZWF0ZShmdW5jdGlvbihyKXtyZXR1cm4gZShbXCIuLi9Vbmtub3duTGF5ZXJcIl0scil9KX0sVW5zdXBwb3J0ZWRMYXllcjpmdW5jdGlvbigpe3JldHVybiBuLmNyZWF0ZShmdW5jdGlvbihyKXtyZXR1cm4gZShbXCIuLi9VbnN1cHBvcnRlZExheWVyXCJdLHIpfSl9LFZlY3RvclRpbGVMYXllcjpmdW5jdGlvbigpe3JldHVybiBuLmNyZWF0ZShmdW5jdGlvbihyKXtyZXR1cm4gZShbXCIuLi9WZWN0b3JUaWxlTGF5ZXJcIl0scil9KX0sV2ViVGlsZUxheWVyOmZ1bmN0aW9uKCl7cmV0dXJuIG4uY3JlYXRlKGZ1bmN0aW9uKHIpe3JldHVybiBlKFtcIi4uL1dlYlRpbGVMYXllclwiXSxyKX0pfSxXTVNMYXllcjpmdW5jdGlvbigpe3JldHVybiBuLmNyZWF0ZShmdW5jdGlvbihyKXtyZXR1cm4gZShbXCIuLi9XTVNMYXllclwiXSxyKX0pfSxXTVRTTGF5ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gbi5jcmVhdGUoZnVuY3Rpb24ocil7cmV0dXJuIGUoW1wiLi4vV01UU0xheWVyXCJdLHIpfSl9LEJpbmdNYXBzTGF5ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gbi5jcmVhdGUoZnVuY3Rpb24ocil7cmV0dXJuIGUoW1wiLi4vQmluZ01hcHNMYXllclwiXSxyKX0pfX19KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/arcgis-js-api/layers/support/lazyLayerLoader.js\n");

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/layers/VectorTileLayerView3D.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/layers/VectorTileLayerView3D.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2018 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.8/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/extendsHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js\"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js\"),__webpack_require__(/*! dojo/promise/all */ \"./node_modules/dojo/promise/all.js\"),__webpack_require__(/*! ../../../core/promiseUtils */ \"./node_modules/arcgis-js-api/core/promiseUtils.js\"),__webpack_require__(/*! ../../../core/watchUtils */ \"./node_modules/arcgis-js-api/core/watchUtils.js\"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ \"./node_modules/arcgis-js-api/core/accessorSupport/decorators.js\"),__webpack_require__(/*! ./TiledLayerView3D */ \"./node_modules/arcgis-js-api/views/3d/layers/TiledLayerView3D.js\"),__webpack_require__(/*! ../../vectorTiles/SchemaHelper */ \"./node_modules/arcgis-js-api/views/vectorTiles/SchemaHelper.js\"),__webpack_require__(/*! ../../vectorTiles/TileHandler */ \"./node_modules/arcgis-js-api/views/vectorTiles/TileHandler.js\"),__webpack_require__(/*! ../../vectorTiles/renderers/Renderer */ \"./node_modules/arcgis-js-api/views/vectorTiles/renderers/Renderer.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,i,r,t,l,n,a,o,s,c,p,d){return function(e){function i(i){return e.call(this)||this}return r(i,e),i.prototype.initialize=function(){var e,i,r=this,t=this.layer.compatibleTileInfo256,o=this._getTileInfoSupportError(t,this.layer.fullExtent);o?this.addResolvingPromise(n.reject(o)):i=a.whenTrueOnce(this.view,\"basemapTerrain.tilingSchemeLocked\").then(function(){var e=r.view.basemapTerrain.tilingScheme,i=e.pixelSize[0];r.schemeHelper=new c(i,r.view.spatialReference.isWGS84);var t;t=256===i?r.layer.compatibleTileInfo256:r.view.spatialReference.isWGS84?r.layer.compatibleTileInfo512:r.layer.tileInfo;var l=r._getTileInfoCompatibilityError(t,e);if(l)throw l;r.tileInfo=t,r._updateMinMaxDataLevel()});var s;e=this._initializeTileHandler(),this.tileHandler=e[0],this.renderer=e[1],s=e[2],this._tileHandlerPromise=s,this.watch(\"layer.currentStyleInfo\",function(){var e,i,t,l;r._tileHandlerPromise.isFulfilled()||r._tileHandlerPromise.cancel(),e=r._initializeTileHandler(),i=e[0],t=e[1],l=e[2],r._tileHandlerPromise=s,l.then(function(){var e=r.tileHandler;r.renderer=t,r.tileHandler=i,r.emit(\"data-changed\"),e.destroy()})});var p=l([i,s]);this.addResolvingPromise(p)},i.prototype.destroy=function(){this.renderer=null,this.tileHandler.destroy(),this.tileHandler=null},i.prototype._initializeTileHandler=function(){var e=new p(this.layer,function(){},1),i=new d,r=e.start();return r.then(function(){i.initialize(e.spriteMosaic,e.glyphMosaic,!1)}),[e,i,r]},t([o.property({aliasOf:\"layer.fullExtent\"})],i.prototype,\"fullExtent\",void 0),t([o.property()],i.prototype,\"layer\",void 0),t([o.property()],i.prototype,\"updatingPercentageValue\",void 0),i=t([o.subclass(\"esri.views.3d.layers.VectorTileLayerView3D\")],i)}(o.declared(s))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS92aWV3cy8zZC9sYXllcnMvVmVjdG9yVGlsZUxheWVyVmlldzNELmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FyY2dpcy1qcy1hcGkvdmlld3MvM2QvbGF5ZXJzL1ZlY3RvclRpbGVMYXllclZpZXczRC5qcz8zYjVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENPUFlSSUdIVCDCqSAyMDE4IEVzcmlcbi8vXG4vLyBBbGwgcmlnaHRzIHJlc2VydmVkIHVuZGVyIHRoZSBjb3B5cmlnaHQgbGF3cyBvZiB0aGUgVW5pdGVkIFN0YXRlc1xuLy8gYW5kIGFwcGxpY2FibGUgaW50ZXJuYXRpb25hbCBsYXdzLCB0cmVhdGllcywgYW5kIGNvbnZlbnRpb25zLlxuLy9cbi8vIFRoaXMgbWF0ZXJpYWwgaXMgbGljZW5zZWQgZm9yIHVzZSB1bmRlciB0aGUgRXNyaSBNYXN0ZXIgTGljZW5zZVxuLy8gQWdyZWVtZW50IChNTEEpLCBhbmQgaXMgYm91bmQgYnkgdGhlIHRlcm1zIG9mIHRoYXQgYWdyZWVtZW50LlxuLy8gWW91IG1heSByZWRpc3RyaWJ1dGUgYW5kIHVzZSB0aGlzIGNvZGUgd2l0aG91dCBtb2RpZmljYXRpb24sXG4vLyBwcm92aWRlZCB5b3UgYWRoZXJlIHRvIHRoZSB0ZXJtcyBvZiB0aGUgTUxBIGFuZCBpbmNsdWRlIHRoaXNcbi8vIGNvcHlyaWdodCBub3RpY2UuXG4vL1xuLy8gU2VlIHVzZSByZXN0cmljdGlvbnMgYXQgaHR0cDovL3d3dy5lc3JpLmNvbS9sZWdhbC9wZGZzL21sYV9lMjA0X2UzMDAvZW5nbGlzaFxuLy9cbi8vIEZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uLCBjb250YWN0OlxuLy8gRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuLy8gQXR0bjogQ29udHJhY3RzIGFuZCBMZWdhbCBTZXJ2aWNlcyBEZXBhcnRtZW50XG4vLyAzODAgTmV3IFlvcmsgU3RyZWV0XG4vLyBSZWRsYW5kcywgQ2FsaWZvcm5pYSwgVVNBIDkyMzczXG4vLyBVU0Fcbi8vXG4vLyBlbWFpbDogY29udHJhY3RzQGVzcmkuY29tXG4vL1xuLy8gU2VlIGh0dHA6Ly9qcy5hcmNnaXMuY29tLzQuOC9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG5cbmRlZmluZShbXCJyZXF1aXJlXCIsXCJleHBvcnRzXCIsXCIuLi8uLi8uLi9jb3JlL3RzU3VwcG9ydC9leHRlbmRzSGVscGVyXCIsXCIuLi8uLi8uLi9jb3JlL3RzU3VwcG9ydC9kZWNvcmF0ZUhlbHBlclwiLFwiZG9qby9wcm9taXNlL2FsbFwiLFwiLi4vLi4vLi4vY29yZS9wcm9taXNlVXRpbHNcIixcIi4uLy4uLy4uL2NvcmUvd2F0Y2hVdGlsc1wiLFwiLi4vLi4vLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9yc1wiLFwiLi9UaWxlZExheWVyVmlldzNEXCIsXCIuLi8uLi92ZWN0b3JUaWxlcy9TY2hlbWFIZWxwZXJcIixcIi4uLy4uL3ZlY3RvclRpbGVzL1RpbGVIYW5kbGVyXCIsXCIuLi8uLi92ZWN0b3JUaWxlcy9yZW5kZXJlcnMvUmVuZGVyZXJcIl0sZnVuY3Rpb24oZSxpLHIsdCxsLG4sYSxvLHMsYyxwLGQpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiBpKGkpe3JldHVybiBlLmNhbGwodGhpcyl8fHRoaXN9cmV0dXJuIHIoaSxlKSxpLnByb3RvdHlwZS5pbml0aWFsaXplPWZ1bmN0aW9uKCl7dmFyIGUsaSxyPXRoaXMsdD10aGlzLmxheWVyLmNvbXBhdGlibGVUaWxlSW5mbzI1NixvPXRoaXMuX2dldFRpbGVJbmZvU3VwcG9ydEVycm9yKHQsdGhpcy5sYXllci5mdWxsRXh0ZW50KTtvP3RoaXMuYWRkUmVzb2x2aW5nUHJvbWlzZShuLnJlamVjdChvKSk6aT1hLndoZW5UcnVlT25jZSh0aGlzLnZpZXcsXCJiYXNlbWFwVGVycmFpbi50aWxpbmdTY2hlbWVMb2NrZWRcIikudGhlbihmdW5jdGlvbigpe3ZhciBlPXIudmlldy5iYXNlbWFwVGVycmFpbi50aWxpbmdTY2hlbWUsaT1lLnBpeGVsU2l6ZVswXTtyLnNjaGVtZUhlbHBlcj1uZXcgYyhpLHIudmlldy5zcGF0aWFsUmVmZXJlbmNlLmlzV0dTODQpO3ZhciB0O3Q9MjU2PT09aT9yLmxheWVyLmNvbXBhdGlibGVUaWxlSW5mbzI1NjpyLnZpZXcuc3BhdGlhbFJlZmVyZW5jZS5pc1dHUzg0P3IubGF5ZXIuY29tcGF0aWJsZVRpbGVJbmZvNTEyOnIubGF5ZXIudGlsZUluZm87dmFyIGw9ci5fZ2V0VGlsZUluZm9Db21wYXRpYmlsaXR5RXJyb3IodCxlKTtpZihsKXRocm93IGw7ci50aWxlSW5mbz10LHIuX3VwZGF0ZU1pbk1heERhdGFMZXZlbCgpfSk7dmFyIHM7ZT10aGlzLl9pbml0aWFsaXplVGlsZUhhbmRsZXIoKSx0aGlzLnRpbGVIYW5kbGVyPWVbMF0sdGhpcy5yZW5kZXJlcj1lWzFdLHM9ZVsyXSx0aGlzLl90aWxlSGFuZGxlclByb21pc2U9cyx0aGlzLndhdGNoKFwibGF5ZXIuY3VycmVudFN0eWxlSW5mb1wiLGZ1bmN0aW9uKCl7dmFyIGUsaSx0LGw7ci5fdGlsZUhhbmRsZXJQcm9taXNlLmlzRnVsZmlsbGVkKCl8fHIuX3RpbGVIYW5kbGVyUHJvbWlzZS5jYW5jZWwoKSxlPXIuX2luaXRpYWxpemVUaWxlSGFuZGxlcigpLGk9ZVswXSx0PWVbMV0sbD1lWzJdLHIuX3RpbGVIYW5kbGVyUHJvbWlzZT1zLGwudGhlbihmdW5jdGlvbigpe3ZhciBlPXIudGlsZUhhbmRsZXI7ci5yZW5kZXJlcj10LHIudGlsZUhhbmRsZXI9aSxyLmVtaXQoXCJkYXRhLWNoYW5nZWRcIiksZS5kZXN0cm95KCl9KX0pO3ZhciBwPWwoW2ksc10pO3RoaXMuYWRkUmVzb2x2aW5nUHJvbWlzZShwKX0saS5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMucmVuZGVyZXI9bnVsbCx0aGlzLnRpbGVIYW5kbGVyLmRlc3Ryb3koKSx0aGlzLnRpbGVIYW5kbGVyPW51bGx9LGkucHJvdG90eXBlLl9pbml0aWFsaXplVGlsZUhhbmRsZXI9ZnVuY3Rpb24oKXt2YXIgZT1uZXcgcCh0aGlzLmxheWVyLGZ1bmN0aW9uKCl7fSwxKSxpPW5ldyBkLHI9ZS5zdGFydCgpO3JldHVybiByLnRoZW4oZnVuY3Rpb24oKXtpLmluaXRpYWxpemUoZS5zcHJpdGVNb3NhaWMsZS5nbHlwaE1vc2FpYywhMSl9KSxbZSxpLHJdfSx0KFtvLnByb3BlcnR5KHthbGlhc09mOlwibGF5ZXIuZnVsbEV4dGVudFwifSldLGkucHJvdG90eXBlLFwiZnVsbEV4dGVudFwiLHZvaWQgMCksdChbby5wcm9wZXJ0eSgpXSxpLnByb3RvdHlwZSxcImxheWVyXCIsdm9pZCAwKSx0KFtvLnByb3BlcnR5KCldLGkucHJvdG90eXBlLFwidXBkYXRpbmdQZXJjZW50YWdlVmFsdWVcIix2b2lkIDApLGk9dChbby5zdWJjbGFzcyhcImVzcmkudmlld3MuM2QubGF5ZXJzLlZlY3RvclRpbGVMYXllclZpZXczRFwiKV0saSl9KG8uZGVjbGFyZWQocykpfSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/arcgis-js-api/views/3d/layers/VectorTileLayerView3D.js\n");

/***/ })

}]);