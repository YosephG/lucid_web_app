import $ = require("jquery");

import EsriMap from "esri/Map";
import MapImageLayer from "esri/layers/MapImageLayer";

import Widget from "./Widget";
import * as acreageView from "../views/acreageView";
import {elements, acreageProducers} from "../views/base";



export default class Acreage extends Widget {

    constructor() {
        super('Acreage', 'acreage');
    }

    render(): void {
        acreageView.renderWidget();
    }

    addFeature(map: EsriMap, producer: string, state: { acreage: string[] }): void {

        if (!this.isDuplicate(map, producer)) {

            const featureURL = `https://gisportal.lucid-energy.com/arcgis/rest/services/Acreage/${producer}/MapServer`;
            map.add(new MapImageLayer({url: featureURL, id: `${producer}`}));
            
            acreageView.renderListItem(producer);

            state.acreage.push(producer);
            
        }

    }

    removeFeature(map: EsriMap, producer: string, state: { acreage: string[] }): void {

        const feature = map.findLayerById(producer);
        map.remove(feature);
        acreageView.removeListItem(producer);

        state.acreage = state.acreage.filter((item: string) => item !== producer);
    }

    populateSelect(): void {

        acreageProducers.forEach(producer => {
            $(elements.acreage.dropdown).append(`<option>${producer}</option>`);
        });

    }

    isDuplicate(map: EsriMap, id: string): boolean {

       return (map.findLayerById(id)) ? true : false;

    }

    addCurrentLayersToList(state: { acreage: string[] }) {
        state.acreage.forEach((layer) => {
            acreageView.renderListItem(layer);
        });
    }

    removeAllFeatures(map: EsriMap, state: { acreage: string[] }) {

        state.acreage.forEach((producer: string) => {
            map.remove(map.findLayerById(producer));
            acreageView.removeListItem(producer);
        });
        
    }
}