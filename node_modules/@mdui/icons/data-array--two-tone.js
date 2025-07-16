import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDataArray_TwoTone = class IconDataArray_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M15 4v2h3v12h-3v2h5V4zM4 20h5v-2H6V6h3V4H4z"/>');
    }
};
IconDataArray_TwoTone.styles = style;
IconDataArray_TwoTone = __decorate([
    customElement('mdui-icon-data-array--two-tone')
], IconDataArray_TwoTone);
export { IconDataArray_TwoTone };
