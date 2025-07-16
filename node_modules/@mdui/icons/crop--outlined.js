import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCrop_Outlined = class IconCrop_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"/>');
    }
};
IconCrop_Outlined.styles = style;
IconCrop_Outlined = __decorate([
    customElement('mdui-icon-crop--outlined')
], IconCrop_Outlined);
export { IconCrop_Outlined };
