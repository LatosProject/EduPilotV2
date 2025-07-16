import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCrop_16_9_Outlined = class IconCrop_16_9_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"/>');
    }
};
IconCrop_16_9_Outlined.styles = style;
IconCrop_16_9_Outlined = __decorate([
    customElement('mdui-icon-crop-16-9--outlined')
], IconCrop_16_9_Outlined);
export { IconCrop_16_9_Outlined };
