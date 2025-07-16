import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconInstallMobile_Outlined = class IconInstallMobile_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M17 18H7V6h7V4H7V3h7V1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-5h-2v2zm0 3H7v-1h10v1z"/><path d="m18 14 5-5-1.41-1.41L19 10.17V3h-2v7.17l-2.59-2.58L13 9z"/>');
    }
};
IconInstallMobile_Outlined.styles = style;
IconInstallMobile_Outlined = __decorate([
    customElement('mdui-icon-install-mobile--outlined')
], IconInstallMobile_Outlined);
export { IconInstallMobile_Outlined };
