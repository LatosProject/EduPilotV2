import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewArray_TwoTone = class IconViewArray_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M9 7h6v10H9z" opacity=".3"/><path d="M15 7v10H9V7h6zm6-2h-3v14h3V5zm-4 0H7v14h10V5zM6 5H3v14h3V5z"/>');
    }
};
IconViewArray_TwoTone.styles = style;
IconViewArray_TwoTone = __decorate([
    customElement('mdui-icon-view-array--two-tone')
], IconViewArray_TwoTone);
export { IconViewArray_TwoTone };
