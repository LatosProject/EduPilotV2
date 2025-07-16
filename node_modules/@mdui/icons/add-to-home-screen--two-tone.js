import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAddToHomeScreen_TwoTone = class IconAddToHomeScreen_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M18 1.01 8 1c-1.1 0-2 .9-2 2v3h2V5h10v14H8v-1H6v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM10 15h2V8H5v2h3.59L3 15.59 4.41 17 10 11.41V15z"/>');
    }
};
IconAddToHomeScreen_TwoTone.styles = style;
IconAddToHomeScreen_TwoTone = __decorate([
    customElement('mdui-icon-add-to-home-screen--two-tone')
], IconAddToHomeScreen_TwoTone);
export { IconAddToHomeScreen_TwoTone };
