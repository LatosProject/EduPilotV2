import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAirlineSeatIndividualSuite = class IconAirlineSeatIndividualSuite extends LitElement {
    render() {
        return svgTag('<path d="M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3 1.35 3 3 3zm12-6h-8v7H3V7H1v10h22v-6c0-2.21-1.79-4-4-4z"/>');
    }
};
IconAirlineSeatIndividualSuite.styles = style;
IconAirlineSeatIndividualSuite = __decorate([
    customElement('mdui-icon-airline-seat-individual-suite')
], IconAirlineSeatIndividualSuite);
export { IconAirlineSeatIndividualSuite };
