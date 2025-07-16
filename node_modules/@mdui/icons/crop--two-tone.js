import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCrop_TwoTone = class IconCrop_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 17c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7V1H5v4H1v2h4v10zm14-2V7c0-1.1-.9-2-2-2H9v2h8v8h2z"/>');
    }
};
IconCrop_TwoTone.styles = style;
IconCrop_TwoTone = __decorate([
    customElement('mdui-icon-crop--two-tone')
], IconCrop_TwoTone);
export { IconCrop_TwoTone };
