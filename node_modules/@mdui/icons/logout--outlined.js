import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLogout_Outlined = class IconLogout_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"/>');
    }
};
IconLogout_Outlined.styles = style;
IconLogout_Outlined = __decorate([
    customElement('mdui-icon-logout--outlined')
], IconLogout_Outlined);
export { IconLogout_Outlined };
