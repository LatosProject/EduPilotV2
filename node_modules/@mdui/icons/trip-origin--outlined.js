import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTripOrigin_Outlined = class IconTripOrigin_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z"/>');
    }
};
IconTripOrigin_Outlined.styles = style;
IconTripOrigin_Outlined = __decorate([
    customElement('mdui-icon-trip-origin--outlined')
], IconTripOrigin_Outlined);
export { IconTripOrigin_Outlined };
