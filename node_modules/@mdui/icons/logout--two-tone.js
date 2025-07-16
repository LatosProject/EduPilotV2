import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLogout_TwoTone = class IconLogout_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5zm16 7-4-4v3H9v2h8v3l4-4z"/>');
    }
};
IconLogout_TwoTone.styles = style;
IconLogout_TwoTone = __decorate([
    customElement('mdui-icon-logout--two-tone')
], IconLogout_TwoTone);
export { IconLogout_TwoTone };
