import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAirlineSeatFlat = class IconAirlineSeatFlat extends LitElement {
    render() {
        return svgTag('<path d="M22 11v2H9V7h9c2.21 0 4 1.79 4 4zM2 14v2h6v2h8v-2h6v-2H2zm5.14-1.9a3 3 0 0 0-.04-4.24 3 3 0 0 0-4.24.04 3 3 0 0 0 .04 4.24 3 3 0 0 0 4.24-.04z"/>');
    }
};
IconAirlineSeatFlat.styles = style;
IconAirlineSeatFlat = __decorate([
    customElement('mdui-icon-airline-seat-flat')
], IconAirlineSeatFlat);
export { IconAirlineSeatFlat };
