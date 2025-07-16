import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDelete_TwoTone = class IconDelete_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M8 9h8v10H8z" opacity=".3"/><path d="m15.5 4-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"/>');
    }
};
IconDelete_TwoTone.styles = style;
IconDelete_TwoTone = __decorate([
    customElement('mdui-icon-delete--two-tone')
], IconDelete_TwoTone);
export { IconDelete_TwoTone };
