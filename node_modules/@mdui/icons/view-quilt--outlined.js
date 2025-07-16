import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewQuilt_Outlined = class IconViewQuilt_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M3 5v14h18V5H3zm5.33 12H5V7h3.33v10zm5.34 0h-3.33v-4h3.33v4zM19 17h-3.33v-4H19v4zm0-6h-8.67V7H19v4z"/>');
    }
};
IconViewQuilt_Outlined.styles = style;
IconViewQuilt_Outlined = __decorate([
    customElement('mdui-icon-view-quilt--outlined')
], IconViewQuilt_Outlined);
export { IconViewQuilt_Outlined };
