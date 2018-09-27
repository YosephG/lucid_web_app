(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	'esri/views/2d/engine/webgl/MaterialInfo':"./node_modules/arcgis-js-api/views/2d/engine/webgl/MaterialInfo.js",
	'esri/views/2d/engine/webgl/MaterialInfoUtils':"./node_modules/arcgis-js-api/views/2d/engine/webgl/MaterialInfoUtils.js",
	'esri/views/2d/engine/webgl/MaterialInfoUtils_updateMaterialVariations':"./node_modules/arcgis-js-api/views/2d/engine/webgl/MaterialInfoUtils_updateMaterialVariations.js",
	'esri/views/2d/engine/webgl/MaterialKeyInfo':"./node_modules/arcgis-js-api/views/2d/engine/webgl/MaterialKeyInfo.js",
	'esri/views/2d/engine/webgl/util/serializationUtils':"./node_modules/arcgis-js-api/views/2d/engine/webgl/util/serializationUtils.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/arcgis-js-api/views/2d/engine/webgl/MaterialInfo.js":
/*!**************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/webgl/MaterialInfo.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2018 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.8/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./enums */ \"./node_modules/arcgis-js-api/views/2d/engine/webgl/enums.js\"),__webpack_require__(/*! ./MaterialInfoUtils */ \"./node_modules/arcgis-js-api/views/2d/engine/webgl/MaterialInfoUtils.js\"),__webpack_require__(/*! ./MaterialInfoUtils_updateMaterialVariations */ \"./node_modules/arcgis-js-api/views/2d/engine/webgl/MaterialInfoUtils_updateMaterialVariations.js\"),__webpack_require__(/*! ./MaterialKeyInfo */ \"./node_modules/arcgis-js-api/views/2d/engine/webgl/MaterialKeyInfo.js\"),__webpack_require__(/*! ./util/serializationUtils */ \"./node_modules/arcgis-js-api/views/2d/engine/webgl/util/serializationUtils.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,a,n,r,o){Object.defineProperty(t,\"__esModule\",{value:!0});var l=function(){function e(e,t,i){this.unit=e,this.pageId=t,this.semantic=i}return e.prototype.clone=function(){return new e(this.unit,this.pageId,this.semantic)},e.prototype.serialize=function(e){return e.writeInt32(this.unit),e.writeInt32(this.pageId),e},e.deserialize=function(t){return new e(t.readInt32(),t.readInt32(),\"u_texture\")},e}();t.TexBindingInfo=l;var s=function(){function e(e,t){this.name=e,this.value=t}return e.prototype.clone=function(){return new e(this.name,this.value)},e.prototype.serialize=function(e){return e.writeInt32(this.value),e},e.deserialize=function(t){return new e(\"u_my_param\",t.readInt32())},e}();t.MaterialParam=s;var v=function(){function e(){this.texBindingInfo=[],this.materialParams=[]}return e.fromSprite=function(t,n,o){var s=new e,v=new r;return v.geometryType=n,t?(v.sdf=t.sdf,v.pattern=!0,s.texBindingInfo.push(new l(1,t.page,\"u_texture\"))):(v.sdf=!1,v.pattern=!1),0===o?v.vvOpacity=v.vvSizeMinMaxValue=v.vvSizeScaleStops=v.vvSizeFieldStops=v.vvSizeUnitValue=v.vvColor=v.vvRotation=!1:(v.vvOpacity=0!=(o&i.WGLVVFlag.OPACITY),v.vvSizeMinMaxValue=0!=(o&i.WGLVVFlag.SIZE_MINMAX_VALUE),v.vvSizeScaleStops=0!=(o&i.WGLVVFlag.SIZE_SCALE_STOPS),v.vvSizeFieldStops=0!=(o&i.WGLVVFlag.SIZE_FIELD_STOPS),v.vvSizeUnitValue=0!=(o&i.WGLVVFlag.SIZE_UNIT_VALUE),v.vvColor=0!=(o&i.WGLVVFlag.COLOR),v.vvRotation=0!=(o&i.WGLVVFlag.ROTATION)),v.visibility=!1,s.materialKey=a.getMaterialKey(v),s.materialKeyInfo=v,s},e.fromGlyph=function(t,n,o){var s=new e,v=new r;return v.geometryType=n,v.sdf=!0,v.pattern=!1,v.visibility=!1,v.heatmap=!1,s.texBindingInfo.push(new l(2,t.page,\"u_texture\")),0===o?v.vvOpacity=v.vvSizeMinMaxValue=v.vvSizeScaleStops=v.vvSizeFieldStops=v.vvSizeUnitValue=v.vvColor=v.vvRotation=!1:(v.vvOpacity=0!=(o&i.WGLVVFlag.OPACITY),v.vvSizeMinMaxValue=0!=(o&i.WGLVVFlag.SIZE_MINMAX_VALUE),v.vvSizeScaleStops=0!=(o&i.WGLVVFlag.SIZE_SCALE_STOPS),v.vvSizeFieldStops=0!=(o&i.WGLVVFlag.SIZE_FIELD_STOPS),v.vvSizeUnitValue=0!=(o&i.WGLVVFlag.SIZE_UNIT_VALUE),v.vvColor=0!=(o&i.WGLVVFlag.COLOR),v.vvRotation=0!=(o&i.WGLVVFlag.ROTATION)),s.materialKey=a.getMaterialKey(v),s.materialKeyInfo=v,s},e.prototype.copy=function(e){this.materialParams=e.materialParams.map(function(e){return e.clone()}),this.texBindingInfo=e.texBindingInfo.map(function(e){return e.clone()}),e.materialKeyInfo&&(this.materialKeyInfo=new r,this.materialKeyInfo.copy(e.materialKeyInfo)),this.materialKey=e.materialKey},e.prototype.serialize=function(e){return e.writeInt32(this.materialKey),o.serializeList(e,this.texBindingInfo),o.serializeList(e,this.materialParams),e},e.deserialize=function(t){var i=new e;return i.materialKey=t.readInt32(),i.texBindingInfo=o.deserializeList(t,l),i.materialParams=o.deserializeList(t,s),i.materialKeyInfo=new r,n(i.materialKeyInfo,i.materialKey),i},e}();t.default=v}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS92aWV3cy8yZC9lbmdpbmUvd2ViZ2wvTWF0ZXJpYWxJbmZvLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FyY2dpcy1qcy1hcGkvdmlld3MvMmQvZW5naW5lL3dlYmdsL01hdGVyaWFsSW5mby5qcz85MjM0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENPUFlSSUdIVCDCqSAyMDE4IEVzcmlcbi8vXG4vLyBBbGwgcmlnaHRzIHJlc2VydmVkIHVuZGVyIHRoZSBjb3B5cmlnaHQgbGF3cyBvZiB0aGUgVW5pdGVkIFN0YXRlc1xuLy8gYW5kIGFwcGxpY2FibGUgaW50ZXJuYXRpb25hbCBsYXdzLCB0cmVhdGllcywgYW5kIGNvbnZlbnRpb25zLlxuLy9cbi8vIFRoaXMgbWF0ZXJpYWwgaXMgbGljZW5zZWQgZm9yIHVzZSB1bmRlciB0aGUgRXNyaSBNYXN0ZXIgTGljZW5zZVxuLy8gQWdyZWVtZW50IChNTEEpLCBhbmQgaXMgYm91bmQgYnkgdGhlIHRlcm1zIG9mIHRoYXQgYWdyZWVtZW50LlxuLy8gWW91IG1heSByZWRpc3RyaWJ1dGUgYW5kIHVzZSB0aGlzIGNvZGUgd2l0aG91dCBtb2RpZmljYXRpb24sXG4vLyBwcm92aWRlZCB5b3UgYWRoZXJlIHRvIHRoZSB0ZXJtcyBvZiB0aGUgTUxBIGFuZCBpbmNsdWRlIHRoaXNcbi8vIGNvcHlyaWdodCBub3RpY2UuXG4vL1xuLy8gU2VlIHVzZSByZXN0cmljdGlvbnMgYXQgaHR0cDovL3d3dy5lc3JpLmNvbS9sZWdhbC9wZGZzL21sYV9lMjA0X2UzMDAvZW5nbGlzaFxuLy9cbi8vIEZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uLCBjb250YWN0OlxuLy8gRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuLy8gQXR0bjogQ29udHJhY3RzIGFuZCBMZWdhbCBTZXJ2aWNlcyBEZXBhcnRtZW50XG4vLyAzODAgTmV3IFlvcmsgU3RyZWV0XG4vLyBSZWRsYW5kcywgQ2FsaWZvcm5pYSwgVVNBIDkyMzczXG4vLyBVU0Fcbi8vXG4vLyBlbWFpbDogY29udHJhY3RzQGVzcmkuY29tXG4vL1xuLy8gU2VlIGh0dHA6Ly9qcy5hcmNnaXMuY29tLzQuOC9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG5cbmRlZmluZShbXCJyZXF1aXJlXCIsXCJleHBvcnRzXCIsXCIuL2VudW1zXCIsXCIuL01hdGVyaWFsSW5mb1V0aWxzXCIsXCIuL01hdGVyaWFsSW5mb1V0aWxzX3VwZGF0ZU1hdGVyaWFsVmFyaWF0aW9uc1wiLFwiLi9NYXRlcmlhbEtleUluZm9cIixcIi4vdXRpbC9zZXJpYWxpemF0aW9uVXRpbHNcIl0sZnVuY3Rpb24oZSx0LGksYSxuLHIsbyl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCxpKXt0aGlzLnVuaXQ9ZSx0aGlzLnBhZ2VJZD10LHRoaXMuc2VtYW50aWM9aX1yZXR1cm4gZS5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGUodGhpcy51bml0LHRoaXMucGFnZUlkLHRoaXMuc2VtYW50aWMpfSxlLnByb3RvdHlwZS5zZXJpYWxpemU9ZnVuY3Rpb24oZSl7cmV0dXJuIGUud3JpdGVJbnQzMih0aGlzLnVuaXQpLGUud3JpdGVJbnQzMih0aGlzLnBhZ2VJZCksZX0sZS5kZXNlcmlhbGl6ZT1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IGUodC5yZWFkSW50MzIoKSx0LnJlYWRJbnQzMigpLFwidV90ZXh0dXJlXCIpfSxlfSgpO3QuVGV4QmluZGluZ0luZm89bDt2YXIgcz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXt0aGlzLm5hbWU9ZSx0aGlzLnZhbHVlPXR9cmV0dXJuIGUucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBlKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0sZS5wcm90b3R5cGUuc2VyaWFsaXplPWZ1bmN0aW9uKGUpe3JldHVybiBlLndyaXRlSW50MzIodGhpcy52YWx1ZSksZX0sZS5kZXNlcmlhbGl6ZT1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IGUoXCJ1X215X3BhcmFtXCIsdC5yZWFkSW50MzIoKSl9LGV9KCk7dC5NYXRlcmlhbFBhcmFtPXM7dmFyIHY9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dGhpcy50ZXhCaW5kaW5nSW5mbz1bXSx0aGlzLm1hdGVyaWFsUGFyYW1zPVtdfXJldHVybiBlLmZyb21TcHJpdGU9ZnVuY3Rpb24odCxuLG8pe3ZhciBzPW5ldyBlLHY9bmV3IHI7cmV0dXJuIHYuZ2VvbWV0cnlUeXBlPW4sdD8odi5zZGY9dC5zZGYsdi5wYXR0ZXJuPSEwLHMudGV4QmluZGluZ0luZm8ucHVzaChuZXcgbCgxLHQucGFnZSxcInVfdGV4dHVyZVwiKSkpOih2LnNkZj0hMSx2LnBhdHRlcm49ITEpLDA9PT1vP3YudnZPcGFjaXR5PXYudnZTaXplTWluTWF4VmFsdWU9di52dlNpemVTY2FsZVN0b3BzPXYudnZTaXplRmllbGRTdG9wcz12LnZ2U2l6ZVVuaXRWYWx1ZT12LnZ2Q29sb3I9di52dlJvdGF0aW9uPSExOih2LnZ2T3BhY2l0eT0wIT0obyZpLldHTFZWRmxhZy5PUEFDSVRZKSx2LnZ2U2l6ZU1pbk1heFZhbHVlPTAhPShvJmkuV0dMVlZGbGFnLlNJWkVfTUlOTUFYX1ZBTFVFKSx2LnZ2U2l6ZVNjYWxlU3RvcHM9MCE9KG8maS5XR0xWVkZsYWcuU0laRV9TQ0FMRV9TVE9QUyksdi52dlNpemVGaWVsZFN0b3BzPTAhPShvJmkuV0dMVlZGbGFnLlNJWkVfRklFTERfU1RPUFMpLHYudnZTaXplVW5pdFZhbHVlPTAhPShvJmkuV0dMVlZGbGFnLlNJWkVfVU5JVF9WQUxVRSksdi52dkNvbG9yPTAhPShvJmkuV0dMVlZGbGFnLkNPTE9SKSx2LnZ2Um90YXRpb249MCE9KG8maS5XR0xWVkZsYWcuUk9UQVRJT04pKSx2LnZpc2liaWxpdHk9ITEscy5tYXRlcmlhbEtleT1hLmdldE1hdGVyaWFsS2V5KHYpLHMubWF0ZXJpYWxLZXlJbmZvPXYsc30sZS5mcm9tR2x5cGg9ZnVuY3Rpb24odCxuLG8pe3ZhciBzPW5ldyBlLHY9bmV3IHI7cmV0dXJuIHYuZ2VvbWV0cnlUeXBlPW4sdi5zZGY9ITAsdi5wYXR0ZXJuPSExLHYudmlzaWJpbGl0eT0hMSx2LmhlYXRtYXA9ITEscy50ZXhCaW5kaW5nSW5mby5wdXNoKG5ldyBsKDIsdC5wYWdlLFwidV90ZXh0dXJlXCIpKSwwPT09bz92LnZ2T3BhY2l0eT12LnZ2U2l6ZU1pbk1heFZhbHVlPXYudnZTaXplU2NhbGVTdG9wcz12LnZ2U2l6ZUZpZWxkU3RvcHM9di52dlNpemVVbml0VmFsdWU9di52dkNvbG9yPXYudnZSb3RhdGlvbj0hMToodi52dk9wYWNpdHk9MCE9KG8maS5XR0xWVkZsYWcuT1BBQ0lUWSksdi52dlNpemVNaW5NYXhWYWx1ZT0wIT0obyZpLldHTFZWRmxhZy5TSVpFX01JTk1BWF9WQUxVRSksdi52dlNpemVTY2FsZVN0b3BzPTAhPShvJmkuV0dMVlZGbGFnLlNJWkVfU0NBTEVfU1RPUFMpLHYudnZTaXplRmllbGRTdG9wcz0wIT0obyZpLldHTFZWRmxhZy5TSVpFX0ZJRUxEX1NUT1BTKSx2LnZ2U2l6ZVVuaXRWYWx1ZT0wIT0obyZpLldHTFZWRmxhZy5TSVpFX1VOSVRfVkFMVUUpLHYudnZDb2xvcj0wIT0obyZpLldHTFZWRmxhZy5DT0xPUiksdi52dlJvdGF0aW9uPTAhPShvJmkuV0dMVlZGbGFnLlJPVEFUSU9OKSkscy5tYXRlcmlhbEtleT1hLmdldE1hdGVyaWFsS2V5KHYpLHMubWF0ZXJpYWxLZXlJbmZvPXYsc30sZS5wcm90b3R5cGUuY29weT1mdW5jdGlvbihlKXt0aGlzLm1hdGVyaWFsUGFyYW1zPWUubWF0ZXJpYWxQYXJhbXMubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNsb25lKCl9KSx0aGlzLnRleEJpbmRpbmdJbmZvPWUudGV4QmluZGluZ0luZm8ubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNsb25lKCl9KSxlLm1hdGVyaWFsS2V5SW5mbyYmKHRoaXMubWF0ZXJpYWxLZXlJbmZvPW5ldyByLHRoaXMubWF0ZXJpYWxLZXlJbmZvLmNvcHkoZS5tYXRlcmlhbEtleUluZm8pKSx0aGlzLm1hdGVyaWFsS2V5PWUubWF0ZXJpYWxLZXl9LGUucHJvdG90eXBlLnNlcmlhbGl6ZT1mdW5jdGlvbihlKXtyZXR1cm4gZS53cml0ZUludDMyKHRoaXMubWF0ZXJpYWxLZXkpLG8uc2VyaWFsaXplTGlzdChlLHRoaXMudGV4QmluZGluZ0luZm8pLG8uc2VyaWFsaXplTGlzdChlLHRoaXMubWF0ZXJpYWxQYXJhbXMpLGV9LGUuZGVzZXJpYWxpemU9ZnVuY3Rpb24odCl7dmFyIGk9bmV3IGU7cmV0dXJuIGkubWF0ZXJpYWxLZXk9dC5yZWFkSW50MzIoKSxpLnRleEJpbmRpbmdJbmZvPW8uZGVzZXJpYWxpemVMaXN0KHQsbCksaS5tYXRlcmlhbFBhcmFtcz1vLmRlc2VyaWFsaXplTGlzdCh0LHMpLGkubWF0ZXJpYWxLZXlJbmZvPW5ldyByLG4oaS5tYXRlcmlhbEtleUluZm8saS5tYXRlcmlhbEtleSksaX0sZX0oKTt0LmRlZmF1bHQ9dn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/arcgis-js-api/views/2d/engine/webgl/MaterialInfo.js\n");

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/webgl/MaterialInfoUtils.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/webgl/MaterialInfoUtils.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2018 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.8/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./enums */ \"./node_modules/arcgis-js-api/views/2d/engine/webgl/enums.js\"),__webpack_require__(/*! ./MaterialInfo */ \"./node_modules/arcgis-js-api/views/2d/engine/webgl/MaterialInfo.js\"),__webpack_require__(/*! ./MaterialKeyInfo */ \"./node_modules/arcgis-js-api/views/2d/engine/webgl/MaterialKeyInfo.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,i,t,a,v){function n(e){var i=[];return i[0]=!!e.sdf,i[1]=!!e.vvSizeMinMaxValue,i[2]=!!e.vvSizeScaleStops,i[3]=!!e.vvSizeFieldStops,i[4]=!!e.vvSizeUnitValue,i[5]=!!e.vvColor,i[6]=!!e.vvRotation,i[7]=!!e.vvOpacity,i[8]=!!e.visibility,i[9]=!!e.pattern,i[10]=!!e.heatmap,i.reduce(function(e,i,t){return i&&(e|=1<<t+2),e},0)}function o(e,i,n){var o=new a.default,r=new v;return r.geometryType=n,r.sdf=!0,r.pattern=!1,r.visibility=!1,r.heatmap=!1,o.texBindingInfo.push(new a.TexBindingInfo(2,e.page,\"u_texture\")),0===i?r.vvOpacity=r.vvSizeMinMaxValue=r.vvSizeScaleStops=r.vvSizeFieldStops=r.vvSizeUnitValue=r.vvColor=r.vvRotation=!1:(r.vvOpacity=0!=(i&t.WGLVVFlag.OPACITY),r.vvSizeMinMaxValue=0!=(i&t.WGLVVFlag.SIZE_MINMAX_VALUE),r.vvSizeScaleStops=0!=(i&t.WGLVVFlag.SIZE_SCALE_STOPS),r.vvSizeFieldStops=0!=(i&t.WGLVVFlag.SIZE_FIELD_STOPS),r.vvSizeUnitValue=0!=(i&t.WGLVVFlag.SIZE_UNIT_VALUE),r.vvColor=0!=(i&t.WGLVVFlag.COLOR),r.vvRotation=0!=(i&t.WGLVVFlag.ROTATION)),o.materialKey=l(r),o.materialKeyInfo=r,o}function r(e,i,n){var o=new a.default,r=new v;if(r.geometryType=i,e){var S=e.spriteMosaicItem;r.sdf=S.sdf,r.pattern=!0,o.texBindingInfo.push(new a.TexBindingInfo(1,S.page,\"u_texture\"))}else r.sdf=!1,r.pattern=!1;return 0===n?r.vvOpacity=r.vvSizeMinMaxValue=r.vvSizeScaleStops=r.vvSizeFieldStops=r.vvSizeUnitValue=r.vvColor=r.vvRotation=!1:(r.vvOpacity=0!=(n&t.WGLVVFlag.OPACITY),r.vvSizeMinMaxValue=0!=(n&t.WGLVVFlag.SIZE_MINMAX_VALUE),r.vvSizeScaleStops=0!=(n&t.WGLVVFlag.SIZE_SCALE_STOPS),r.vvSizeFieldStops=0!=(n&t.WGLVVFlag.SIZE_FIELD_STOPS),r.vvSizeUnitValue=0!=(n&t.WGLVVFlag.SIZE_UNIT_VALUE),r.vvColor=0!=(n&t.WGLVVFlag.COLOR),r.vvRotation=0!=(n&t.WGLVVFlag.ROTATION)),r.visibility=!1,o.materialKey=l(r),o.materialKeyInfo=r,o}function l(e){if(e.geometryType===t.WGLGeometryType.UNKNOWN)return-1;var i=n(e)<<3;return e.geometryType+i}function S(e){var i=7&e;return e>>=3,{geometryType:i,variations:[0!=(1&e),0!=(2&e),0!=(4&e),0!=(8&e),0!=(16&e),0!=(32&e),0!=(64&e),0!=(128&e),0!=(256&e),0!=(512&e),0!=(1024&e),0!=(2048&e),0!=(4096&e)]}}Object.defineProperty(i,\"__esModule\",{value:!0}),i.createTextMaterialInfo=o,i.createMaterialInfo=r,i.getMaterialKey=l,i.getMaterialVariations=S}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS92aWV3cy8yZC9lbmdpbmUvd2ViZ2wvTWF0ZXJpYWxJbmZvVXRpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS92aWV3cy8yZC9lbmdpbmUvd2ViZ2wvTWF0ZXJpYWxJbmZvVXRpbHMuanM/NDNjMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT1BZUklHSFQgwqkgMjAxOCBFc3JpXG4vL1xuLy8gQWxsIHJpZ2h0cyByZXNlcnZlZCB1bmRlciB0aGUgY29weXJpZ2h0IGxhd3Mgb2YgdGhlIFVuaXRlZCBTdGF0ZXNcbi8vIGFuZCBhcHBsaWNhYmxlIGludGVybmF0aW9uYWwgbGF3cywgdHJlYXRpZXMsIGFuZCBjb252ZW50aW9ucy5cbi8vXG4vLyBUaGlzIG1hdGVyaWFsIGlzIGxpY2Vuc2VkIGZvciB1c2UgdW5kZXIgdGhlIEVzcmkgTWFzdGVyIExpY2Vuc2Vcbi8vIEFncmVlbWVudCAoTUxBKSwgYW5kIGlzIGJvdW5kIGJ5IHRoZSB0ZXJtcyBvZiB0aGF0IGFncmVlbWVudC5cbi8vIFlvdSBtYXkgcmVkaXN0cmlidXRlIGFuZCB1c2UgdGhpcyBjb2RlIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuLy8gcHJvdmlkZWQgeW91IGFkaGVyZSB0byB0aGUgdGVybXMgb2YgdGhlIE1MQSBhbmQgaW5jbHVkZSB0aGlzXG4vLyBjb3B5cmlnaHQgbm90aWNlLlxuLy9cbi8vIFNlZSB1c2UgcmVzdHJpY3Rpb25zIGF0IGh0dHA6Ly93d3cuZXNyaS5jb20vbGVnYWwvcGRmcy9tbGFfZTIwNF9lMzAwL2VuZ2xpc2hcbi8vXG4vLyBGb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiwgY29udGFjdDpcbi8vIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbi8vIEF0dG46IENvbnRyYWN0cyBhbmQgTGVnYWwgU2VydmljZXMgRGVwYXJ0bWVudFxuLy8gMzgwIE5ldyBZb3JrIFN0cmVldFxuLy8gUmVkbGFuZHMsIENhbGlmb3JuaWEsIFVTQSA5MjM3M1xuLy8gVVNBXG4vL1xuLy8gZW1haWw6IGNvbnRyYWN0c0Blc3JpLmNvbVxuLy9cbi8vIFNlZSBodHRwOi8vanMuYXJjZ2lzLmNvbS80LjgvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuXG5kZWZpbmUoW1wicmVxdWlyZVwiLFwiZXhwb3J0c1wiLFwiLi9lbnVtc1wiLFwiLi9NYXRlcmlhbEluZm9cIixcIi4vTWF0ZXJpYWxLZXlJbmZvXCJdLGZ1bmN0aW9uKGUsaSx0LGEsdil7ZnVuY3Rpb24gbihlKXt2YXIgaT1bXTtyZXR1cm4gaVswXT0hIWUuc2RmLGlbMV09ISFlLnZ2U2l6ZU1pbk1heFZhbHVlLGlbMl09ISFlLnZ2U2l6ZVNjYWxlU3RvcHMsaVszXT0hIWUudnZTaXplRmllbGRTdG9wcyxpWzRdPSEhZS52dlNpemVVbml0VmFsdWUsaVs1XT0hIWUudnZDb2xvcixpWzZdPSEhZS52dlJvdGF0aW9uLGlbN109ISFlLnZ2T3BhY2l0eSxpWzhdPSEhZS52aXNpYmlsaXR5LGlbOV09ISFlLnBhdHRlcm4saVsxMF09ISFlLmhlYXRtYXAsaS5yZWR1Y2UoZnVuY3Rpb24oZSxpLHQpe3JldHVybiBpJiYoZXw9MTw8dCsyKSxlfSwwKX1mdW5jdGlvbiBvKGUsaSxuKXt2YXIgbz1uZXcgYS5kZWZhdWx0LHI9bmV3IHY7cmV0dXJuIHIuZ2VvbWV0cnlUeXBlPW4sci5zZGY9ITAsci5wYXR0ZXJuPSExLHIudmlzaWJpbGl0eT0hMSxyLmhlYXRtYXA9ITEsby50ZXhCaW5kaW5nSW5mby5wdXNoKG5ldyBhLlRleEJpbmRpbmdJbmZvKDIsZS5wYWdlLFwidV90ZXh0dXJlXCIpKSwwPT09aT9yLnZ2T3BhY2l0eT1yLnZ2U2l6ZU1pbk1heFZhbHVlPXIudnZTaXplU2NhbGVTdG9wcz1yLnZ2U2l6ZUZpZWxkU3RvcHM9ci52dlNpemVVbml0VmFsdWU9ci52dkNvbG9yPXIudnZSb3RhdGlvbj0hMTooci52dk9wYWNpdHk9MCE9KGkmdC5XR0xWVkZsYWcuT1BBQ0lUWSksci52dlNpemVNaW5NYXhWYWx1ZT0wIT0oaSZ0LldHTFZWRmxhZy5TSVpFX01JTk1BWF9WQUxVRSksci52dlNpemVTY2FsZVN0b3BzPTAhPShpJnQuV0dMVlZGbGFnLlNJWkVfU0NBTEVfU1RPUFMpLHIudnZTaXplRmllbGRTdG9wcz0wIT0oaSZ0LldHTFZWRmxhZy5TSVpFX0ZJRUxEX1NUT1BTKSxyLnZ2U2l6ZVVuaXRWYWx1ZT0wIT0oaSZ0LldHTFZWRmxhZy5TSVpFX1VOSVRfVkFMVUUpLHIudnZDb2xvcj0wIT0oaSZ0LldHTFZWRmxhZy5DT0xPUiksci52dlJvdGF0aW9uPTAhPShpJnQuV0dMVlZGbGFnLlJPVEFUSU9OKSksby5tYXRlcmlhbEtleT1sKHIpLG8ubWF0ZXJpYWxLZXlJbmZvPXIsb31mdW5jdGlvbiByKGUsaSxuKXt2YXIgbz1uZXcgYS5kZWZhdWx0LHI9bmV3IHY7aWYoci5nZW9tZXRyeVR5cGU9aSxlKXt2YXIgUz1lLnNwcml0ZU1vc2FpY0l0ZW07ci5zZGY9Uy5zZGYsci5wYXR0ZXJuPSEwLG8udGV4QmluZGluZ0luZm8ucHVzaChuZXcgYS5UZXhCaW5kaW5nSW5mbygxLFMucGFnZSxcInVfdGV4dHVyZVwiKSl9ZWxzZSByLnNkZj0hMSxyLnBhdHRlcm49ITE7cmV0dXJuIDA9PT1uP3IudnZPcGFjaXR5PXIudnZTaXplTWluTWF4VmFsdWU9ci52dlNpemVTY2FsZVN0b3BzPXIudnZTaXplRmllbGRTdG9wcz1yLnZ2U2l6ZVVuaXRWYWx1ZT1yLnZ2Q29sb3I9ci52dlJvdGF0aW9uPSExOihyLnZ2T3BhY2l0eT0wIT0obiZ0LldHTFZWRmxhZy5PUEFDSVRZKSxyLnZ2U2l6ZU1pbk1heFZhbHVlPTAhPShuJnQuV0dMVlZGbGFnLlNJWkVfTUlOTUFYX1ZBTFVFKSxyLnZ2U2l6ZVNjYWxlU3RvcHM9MCE9KG4mdC5XR0xWVkZsYWcuU0laRV9TQ0FMRV9TVE9QUyksci52dlNpemVGaWVsZFN0b3BzPTAhPShuJnQuV0dMVlZGbGFnLlNJWkVfRklFTERfU1RPUFMpLHIudnZTaXplVW5pdFZhbHVlPTAhPShuJnQuV0dMVlZGbGFnLlNJWkVfVU5JVF9WQUxVRSksci52dkNvbG9yPTAhPShuJnQuV0dMVlZGbGFnLkNPTE9SKSxyLnZ2Um90YXRpb249MCE9KG4mdC5XR0xWVkZsYWcuUk9UQVRJT04pKSxyLnZpc2liaWxpdHk9ITEsby5tYXRlcmlhbEtleT1sKHIpLG8ubWF0ZXJpYWxLZXlJbmZvPXIsb31mdW5jdGlvbiBsKGUpe2lmKGUuZ2VvbWV0cnlUeXBlPT09dC5XR0xHZW9tZXRyeVR5cGUuVU5LTk9XTilyZXR1cm4tMTt2YXIgaT1uKGUpPDwzO3JldHVybiBlLmdlb21ldHJ5VHlwZStpfWZ1bmN0aW9uIFMoZSl7dmFyIGk9NyZlO3JldHVybiBlPj49Myx7Z2VvbWV0cnlUeXBlOmksdmFyaWF0aW9uczpbMCE9KDEmZSksMCE9KDImZSksMCE9KDQmZSksMCE9KDgmZSksMCE9KDE2JmUpLDAhPSgzMiZlKSwwIT0oNjQmZSksMCE9KDEyOCZlKSwwIT0oMjU2JmUpLDAhPSg1MTImZSksMCE9KDEwMjQmZSksMCE9KDIwNDgmZSksMCE9KDQwOTYmZSldfX1PYmplY3QuZGVmaW5lUHJvcGVydHkoaSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxpLmNyZWF0ZVRleHRNYXRlcmlhbEluZm89byxpLmNyZWF0ZU1hdGVyaWFsSW5mbz1yLGkuZ2V0TWF0ZXJpYWxLZXk9bCxpLmdldE1hdGVyaWFsVmFyaWF0aW9ucz1TfSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/arcgis-js-api/views/2d/engine/webgl/MaterialInfoUtils.js\n");

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/webgl/MaterialInfoUtils_updateMaterialVariations.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/webgl/MaterialInfoUtils_updateMaterialVariations.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2018 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.8/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,i){function t(e,i){return e.geometryType=7&i,i>>=3,e.sdf=0!=(4&i),e.vvSizeMinMaxValue=0!=(8&i),e.vvSizeScaleStops=0!=(16&i),e.vvSizeFieldStops=0!=(32&i),e.vvSizeUnitValue=0!=(64&i),e.vvColor=0!=(128&i),e.vvRotation=0!=(256&i),e.vvOpacity=0!=(512&i),e.visibility=0!=(1024&i),e.pattern=0!=(2048&i),e.heatmap=0!=(4096&i),e}return t}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS92aWV3cy8yZC9lbmdpbmUvd2ViZ2wvTWF0ZXJpYWxJbmZvVXRpbHNfdXBkYXRlTWF0ZXJpYWxWYXJpYXRpb25zLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FyY2dpcy1qcy1hcGkvdmlld3MvMmQvZW5naW5lL3dlYmdsL01hdGVyaWFsSW5mb1V0aWxzX3VwZGF0ZU1hdGVyaWFsVmFyaWF0aW9ucy5qcz8xNDBiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENPUFlSSUdIVCDCqSAyMDE4IEVzcmlcbi8vXG4vLyBBbGwgcmlnaHRzIHJlc2VydmVkIHVuZGVyIHRoZSBjb3B5cmlnaHQgbGF3cyBvZiB0aGUgVW5pdGVkIFN0YXRlc1xuLy8gYW5kIGFwcGxpY2FibGUgaW50ZXJuYXRpb25hbCBsYXdzLCB0cmVhdGllcywgYW5kIGNvbnZlbnRpb25zLlxuLy9cbi8vIFRoaXMgbWF0ZXJpYWwgaXMgbGljZW5zZWQgZm9yIHVzZSB1bmRlciB0aGUgRXNyaSBNYXN0ZXIgTGljZW5zZVxuLy8gQWdyZWVtZW50IChNTEEpLCBhbmQgaXMgYm91bmQgYnkgdGhlIHRlcm1zIG9mIHRoYXQgYWdyZWVtZW50LlxuLy8gWW91IG1heSByZWRpc3RyaWJ1dGUgYW5kIHVzZSB0aGlzIGNvZGUgd2l0aG91dCBtb2RpZmljYXRpb24sXG4vLyBwcm92aWRlZCB5b3UgYWRoZXJlIHRvIHRoZSB0ZXJtcyBvZiB0aGUgTUxBIGFuZCBpbmNsdWRlIHRoaXNcbi8vIGNvcHlyaWdodCBub3RpY2UuXG4vL1xuLy8gU2VlIHVzZSByZXN0cmljdGlvbnMgYXQgaHR0cDovL3d3dy5lc3JpLmNvbS9sZWdhbC9wZGZzL21sYV9lMjA0X2UzMDAvZW5nbGlzaFxuLy9cbi8vIEZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uLCBjb250YWN0OlxuLy8gRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuLy8gQXR0bjogQ29udHJhY3RzIGFuZCBMZWdhbCBTZXJ2aWNlcyBEZXBhcnRtZW50XG4vLyAzODAgTmV3IFlvcmsgU3RyZWV0XG4vLyBSZWRsYW5kcywgQ2FsaWZvcm5pYSwgVVNBIDkyMzczXG4vLyBVU0Fcbi8vXG4vLyBlbWFpbDogY29udHJhY3RzQGVzcmkuY29tXG4vL1xuLy8gU2VlIGh0dHA6Ly9qcy5hcmNnaXMuY29tLzQuOC9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG5cbmRlZmluZShbXCJyZXF1aXJlXCIsXCJleHBvcnRzXCJdLGZ1bmN0aW9uKGUsaSl7ZnVuY3Rpb24gdChlLGkpe3JldHVybiBlLmdlb21ldHJ5VHlwZT03JmksaT4+PTMsZS5zZGY9MCE9KDQmaSksZS52dlNpemVNaW5NYXhWYWx1ZT0wIT0oOCZpKSxlLnZ2U2l6ZVNjYWxlU3RvcHM9MCE9KDE2JmkpLGUudnZTaXplRmllbGRTdG9wcz0wIT0oMzImaSksZS52dlNpemVVbml0VmFsdWU9MCE9KDY0JmkpLGUudnZDb2xvcj0wIT0oMTI4JmkpLGUudnZSb3RhdGlvbj0wIT0oMjU2JmkpLGUudnZPcGFjaXR5PTAhPSg1MTImaSksZS52aXNpYmlsaXR5PTAhPSgxMDI0JmkpLGUucGF0dGVybj0wIT0oMjA0OCZpKSxlLmhlYXRtYXA9MCE9KDQwOTYmaSksZX1yZXR1cm4gdH0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/arcgis-js-api/views/2d/engine/webgl/MaterialInfoUtils_updateMaterialVariations.js\n");

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/webgl/MaterialKeyInfo.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/webgl/MaterialKeyInfo.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2018 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.8/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,i){return function(){function t(){this.sdf=!1,this.vvSizeMinMaxValue=!1,this.vvSizeScaleStops=!1,this.vvSizeFieldStops=!1,this.vvSizeUnitValue=!1,this.vvColor=!1,this.vvRotation=!1,this.vvOpacity=!1,this.visibility=!1,this.pattern=!1,this.heatmap=!1}return t.prototype.copy=function(t){this.geometryType=t.geometryType,this.sdf=t.sdf,this.vvSizeMinMaxValue=t.vvSizeMinMaxValue,this.vvSizeScaleStops=t.vvSizeScaleStops,this.vvSizeFieldStops=t.vvSizeFieldStops,this.vvSizeUnitValue=t.vvSizeUnitValue,this.vvColor=t.vvColor,this.vvRotation=t.vvRotation,this.vvOpacity=t.vvOpacity,this.visibility=t.visibility,this.pattern=t.pattern,this.heatmap=t.heatmap},t.prototype.hasVV=function(){return void 0===this._hasVV&&(this._hasVV=this.vvColor||this.vvOpacity||this.vvRotation||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue),this._hasVV},t.prototype.hasVVSize=function(){return this.vvSizeMinMaxValue||this.vvSizeFieldStops||this.vvSizeScaleStops||this.vvSizeUnitValue},t.prototype.hasVVColor=function(){return this.vvColor},t.prototype.hasVVRotation=function(){return this.vvRotation},t.prototype.hasVVOpacity=function(){return this.vvOpacity},t}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS92aWV3cy8yZC9lbmdpbmUvd2ViZ2wvTWF0ZXJpYWxLZXlJbmZvLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FyY2dpcy1qcy1hcGkvdmlld3MvMmQvZW5naW5lL3dlYmdsL01hdGVyaWFsS2V5SW5mby5qcz82YTYyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENPUFlSSUdIVCDCqSAyMDE4IEVzcmlcbi8vXG4vLyBBbGwgcmlnaHRzIHJlc2VydmVkIHVuZGVyIHRoZSBjb3B5cmlnaHQgbGF3cyBvZiB0aGUgVW5pdGVkIFN0YXRlc1xuLy8gYW5kIGFwcGxpY2FibGUgaW50ZXJuYXRpb25hbCBsYXdzLCB0cmVhdGllcywgYW5kIGNvbnZlbnRpb25zLlxuLy9cbi8vIFRoaXMgbWF0ZXJpYWwgaXMgbGljZW5zZWQgZm9yIHVzZSB1bmRlciB0aGUgRXNyaSBNYXN0ZXIgTGljZW5zZVxuLy8gQWdyZWVtZW50IChNTEEpLCBhbmQgaXMgYm91bmQgYnkgdGhlIHRlcm1zIG9mIHRoYXQgYWdyZWVtZW50LlxuLy8gWW91IG1heSByZWRpc3RyaWJ1dGUgYW5kIHVzZSB0aGlzIGNvZGUgd2l0aG91dCBtb2RpZmljYXRpb24sXG4vLyBwcm92aWRlZCB5b3UgYWRoZXJlIHRvIHRoZSB0ZXJtcyBvZiB0aGUgTUxBIGFuZCBpbmNsdWRlIHRoaXNcbi8vIGNvcHlyaWdodCBub3RpY2UuXG4vL1xuLy8gU2VlIHVzZSByZXN0cmljdGlvbnMgYXQgaHR0cDovL3d3dy5lc3JpLmNvbS9sZWdhbC9wZGZzL21sYV9lMjA0X2UzMDAvZW5nbGlzaFxuLy9cbi8vIEZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uLCBjb250YWN0OlxuLy8gRW52aXJvbm1lbnRhbCBTeXN0ZW1zIFJlc2VhcmNoIEluc3RpdHV0ZSwgSW5jLlxuLy8gQXR0bjogQ29udHJhY3RzIGFuZCBMZWdhbCBTZXJ2aWNlcyBEZXBhcnRtZW50XG4vLyAzODAgTmV3IFlvcmsgU3RyZWV0XG4vLyBSZWRsYW5kcywgQ2FsaWZvcm5pYSwgVVNBIDkyMzczXG4vLyBVU0Fcbi8vXG4vLyBlbWFpbDogY29udHJhY3RzQGVzcmkuY29tXG4vL1xuLy8gU2VlIGh0dHA6Ly9qcy5hcmNnaXMuY29tLzQuOC9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG5cbmRlZmluZShbXCJyZXF1aXJlXCIsXCJleHBvcnRzXCJdLGZ1bmN0aW9uKHQsaSl7cmV0dXJuIGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3RoaXMuc2RmPSExLHRoaXMudnZTaXplTWluTWF4VmFsdWU9ITEsdGhpcy52dlNpemVTY2FsZVN0b3BzPSExLHRoaXMudnZTaXplRmllbGRTdG9wcz0hMSx0aGlzLnZ2U2l6ZVVuaXRWYWx1ZT0hMSx0aGlzLnZ2Q29sb3I9ITEsdGhpcy52dlJvdGF0aW9uPSExLHRoaXMudnZPcGFjaXR5PSExLHRoaXMudmlzaWJpbGl0eT0hMSx0aGlzLnBhdHRlcm49ITEsdGhpcy5oZWF0bWFwPSExfXJldHVybiB0LnByb3RvdHlwZS5jb3B5PWZ1bmN0aW9uKHQpe3RoaXMuZ2VvbWV0cnlUeXBlPXQuZ2VvbWV0cnlUeXBlLHRoaXMuc2RmPXQuc2RmLHRoaXMudnZTaXplTWluTWF4VmFsdWU9dC52dlNpemVNaW5NYXhWYWx1ZSx0aGlzLnZ2U2l6ZVNjYWxlU3RvcHM9dC52dlNpemVTY2FsZVN0b3BzLHRoaXMudnZTaXplRmllbGRTdG9wcz10LnZ2U2l6ZUZpZWxkU3RvcHMsdGhpcy52dlNpemVVbml0VmFsdWU9dC52dlNpemVVbml0VmFsdWUsdGhpcy52dkNvbG9yPXQudnZDb2xvcix0aGlzLnZ2Um90YXRpb249dC52dlJvdGF0aW9uLHRoaXMudnZPcGFjaXR5PXQudnZPcGFjaXR5LHRoaXMudmlzaWJpbGl0eT10LnZpc2liaWxpdHksdGhpcy5wYXR0ZXJuPXQucGF0dGVybix0aGlzLmhlYXRtYXA9dC5oZWF0bWFwfSx0LnByb3RvdHlwZS5oYXNWVj1mdW5jdGlvbigpe3JldHVybiB2b2lkIDA9PT10aGlzLl9oYXNWViYmKHRoaXMuX2hhc1ZWPXRoaXMudnZDb2xvcnx8dGhpcy52dk9wYWNpdHl8fHRoaXMudnZSb3RhdGlvbnx8dGhpcy52dlNpemVNaW5NYXhWYWx1ZXx8dGhpcy52dlNpemVTY2FsZVN0b3BzfHx0aGlzLnZ2U2l6ZUZpZWxkU3RvcHN8fHRoaXMudnZTaXplVW5pdFZhbHVlKSx0aGlzLl9oYXNWVn0sdC5wcm90b3R5cGUuaGFzVlZTaXplPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudnZTaXplTWluTWF4VmFsdWV8fHRoaXMudnZTaXplRmllbGRTdG9wc3x8dGhpcy52dlNpemVTY2FsZVN0b3BzfHx0aGlzLnZ2U2l6ZVVuaXRWYWx1ZX0sdC5wcm90b3R5cGUuaGFzVlZDb2xvcj1mdW5jdGlvbigpe3JldHVybiB0aGlzLnZ2Q29sb3J9LHQucHJvdG90eXBlLmhhc1ZWUm90YXRpb249ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52dlJvdGF0aW9ufSx0LnByb3RvdHlwZS5oYXNWVk9wYWNpdHk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52dk9wYWNpdHl9LHR9KCl9KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/arcgis-js-api/views/2d/engine/webgl/MaterialKeyInfo.js\n");

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/webgl/util/serializationUtils.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/webgl/util/serializationUtils.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2018 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.8/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r){function i(e,r){if(null===r)return void e.writeInt32(0);e.writeInt32(r.length);for(var i=0,n=r;i<n.length;i++){n[i].serialize(e)}return e}function n(e,r,i){for(var n=e.readInt32(),t=new Array(n),l=0;l<t.length;l++)t[l]=r.deserialize(e,i);return t}Object.defineProperty(r,\"__esModule\",{value:!0}),r.serializeList=i,r.deserializeList=n}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS92aWV3cy8yZC9lbmdpbmUvd2ViZ2wvdXRpbC9zZXJpYWxpemF0aW9uVXRpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS92aWV3cy8yZC9lbmdpbmUvd2ViZ2wvdXRpbC9zZXJpYWxpemF0aW9uVXRpbHMuanM/N2U1NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT1BZUklHSFQgwqkgMjAxOCBFc3JpXG4vL1xuLy8gQWxsIHJpZ2h0cyByZXNlcnZlZCB1bmRlciB0aGUgY29weXJpZ2h0IGxhd3Mgb2YgdGhlIFVuaXRlZCBTdGF0ZXNcbi8vIGFuZCBhcHBsaWNhYmxlIGludGVybmF0aW9uYWwgbGF3cywgdHJlYXRpZXMsIGFuZCBjb252ZW50aW9ucy5cbi8vXG4vLyBUaGlzIG1hdGVyaWFsIGlzIGxpY2Vuc2VkIGZvciB1c2UgdW5kZXIgdGhlIEVzcmkgTWFzdGVyIExpY2Vuc2Vcbi8vIEFncmVlbWVudCAoTUxBKSwgYW5kIGlzIGJvdW5kIGJ5IHRoZSB0ZXJtcyBvZiB0aGF0IGFncmVlbWVudC5cbi8vIFlvdSBtYXkgcmVkaXN0cmlidXRlIGFuZCB1c2UgdGhpcyBjb2RlIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuLy8gcHJvdmlkZWQgeW91IGFkaGVyZSB0byB0aGUgdGVybXMgb2YgdGhlIE1MQSBhbmQgaW5jbHVkZSB0aGlzXG4vLyBjb3B5cmlnaHQgbm90aWNlLlxuLy9cbi8vIFNlZSB1c2UgcmVzdHJpY3Rpb25zIGF0IGh0dHA6Ly93d3cuZXNyaS5jb20vbGVnYWwvcGRmcy9tbGFfZTIwNF9lMzAwL2VuZ2xpc2hcbi8vXG4vLyBGb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiwgY29udGFjdDpcbi8vIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbi8vIEF0dG46IENvbnRyYWN0cyBhbmQgTGVnYWwgU2VydmljZXMgRGVwYXJ0bWVudFxuLy8gMzgwIE5ldyBZb3JrIFN0cmVldFxuLy8gUmVkbGFuZHMsIENhbGlmb3JuaWEsIFVTQSA5MjM3M1xuLy8gVVNBXG4vL1xuLy8gZW1haWw6IGNvbnRyYWN0c0Blc3JpLmNvbVxuLy9cbi8vIFNlZSBodHRwOi8vanMuYXJjZ2lzLmNvbS80LjgvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuXG5kZWZpbmUoW1wicmVxdWlyZVwiLFwiZXhwb3J0c1wiXSxmdW5jdGlvbihlLHIpe2Z1bmN0aW9uIGkoZSxyKXtpZihudWxsPT09cilyZXR1cm4gdm9pZCBlLndyaXRlSW50MzIoMCk7ZS53cml0ZUludDMyKHIubGVuZ3RoKTtmb3IodmFyIGk9MCxuPXI7aTxuLmxlbmd0aDtpKyspe25baV0uc2VyaWFsaXplKGUpfXJldHVybiBlfWZ1bmN0aW9uIG4oZSxyLGkpe2Zvcih2YXIgbj1lLnJlYWRJbnQzMigpLHQ9bmV3IEFycmF5KG4pLGw9MDtsPHQubGVuZ3RoO2wrKyl0W2xdPXIuZGVzZXJpYWxpemUoZSxpKTtyZXR1cm4gdH1PYmplY3QuZGVmaW5lUHJvcGVydHkocixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxyLnNlcmlhbGl6ZUxpc3Q9aSxyLmRlc2VyaWFsaXplTGlzdD1ufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/arcgis-js-api/views/2d/engine/webgl/util/serializationUtils.js\n");

/***/ })

}]);