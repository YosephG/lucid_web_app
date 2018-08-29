import $ = require("jquery");

import Widget from "./Widget";
import * as coordinatesView from "../views/coordinatesView";

export default class Coordinates extends Widget {

    constructor() {
        super('Coords', 'coords', false);
    }

    render(): void {
        coordinatesView.renderWidget();
    }

}