import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPinEnd_TwoTone = class IconPinEnd_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M20 12V6H4v12h10v2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v6h-2zm-1 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-4.34-6H9v5.66l2.12-2.12 2.83 2.83 1.41-1.41-2.83-2.83L14.66 8z"/>');
    }
};
IconPinEnd_TwoTone.styles = style;
IconPinEnd_TwoTone = __decorate([
    customElement('mdui-icon-pin-end--two-tone')
], IconPinEnd_TwoTone);
export { IconPinEnd_TwoTone };
