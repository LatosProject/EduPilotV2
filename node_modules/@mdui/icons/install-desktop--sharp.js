import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconInstallDesktop_Sharp = class IconInstallDesktop_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 17H4V5h8V3H2v16h6v2h8v-2h6v-5h-2z"/><path d="m17 14 5-5-1.41-1.41L18 10.17V3h-2v7.17l-2.59-2.58L12 9z"/>');
    }
};
IconInstallDesktop_Sharp.styles = style;
IconInstallDesktop_Sharp = __decorate([
    customElement('mdui-icon-install-desktop--sharp')
], IconInstallDesktop_Sharp);
export { IconInstallDesktop_Sharp };
