import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconInstallDesktop_Outlined = class IconInstallDesktop_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 17H4V5h8V3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2v-3h-2v3z"/><path d="m17 14 5-5-1.41-1.41L18 10.17V3h-2v7.17l-2.59-2.58L12 9z"/>');
    }
};
IconInstallDesktop_Outlined.styles = style;
IconInstallDesktop_Outlined = __decorate([
    customElement('mdui-icon-install-desktop--outlined')
], IconInstallDesktop_Outlined);
export { IconInstallDesktop_Outlined };
