import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSdCard_Outlined = class IconSdCard_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V8.83L10.83 4H18v16zM9 7h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z"/>');
    }
};
IconSdCard_Outlined.styles = style;
IconSdCard_Outlined = __decorate([
    customElement('mdui-icon-sd-card--outlined')
], IconSdCard_Outlined);
export { IconSdCard_Outlined };
