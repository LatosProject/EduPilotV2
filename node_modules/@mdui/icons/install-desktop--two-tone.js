import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconInstallDesktop_TwoTone = class IconInstallDesktop_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M14.83 9 16 10.17zM4 17h16v-3.17l-3 3L9.17 9 13 5.17V5H4z" opacity=".3"/><path d="M20 17H4V5h9V3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2v-5.17l-2 2V17z"/><path d="M18 10.17V3h-2v7.17l-2.59-2.58L12 9l5 5 5-5-1.41-1.41z"/>');
    }
};
IconInstallDesktop_TwoTone.styles = style;
IconInstallDesktop_TwoTone = __decorate([
    customElement('mdui-icon-install-desktop--two-tone')
], IconInstallDesktop_TwoTone);
export { IconInstallDesktop_TwoTone };
