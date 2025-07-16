import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTripOrigin_TwoTone = class IconTripOrigin_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>');
    }
};
IconTripOrigin_TwoTone.styles = style;
IconTripOrigin_TwoTone = __decorate([
    customElement('mdui-icon-trip-origin--two-tone')
], IconTripOrigin_TwoTone);
export { IconTripOrigin_TwoTone };
