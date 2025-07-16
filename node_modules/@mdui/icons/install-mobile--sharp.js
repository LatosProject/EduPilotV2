import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconInstallMobile_Sharp = class IconInstallMobile_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 18H7V6h7V1H5v22h14v-7h-2z"/><path d="m18 14 5-5-1.41-1.41L19 10.17V3h-2v7.17l-2.59-2.58L13 9z"/>');
    }
};
IconInstallMobile_Sharp.styles = style;
IconInstallMobile_Sharp = __decorate([
    customElement('mdui-icon-install-mobile--sharp')
], IconInstallMobile_Sharp);
export { IconInstallMobile_Sharp };
