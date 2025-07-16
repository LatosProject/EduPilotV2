import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewArray_Outlined = class IconViewArray_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M15 7v10H9V7h6zm6-2h-3v14h3V5zm-4 0H7v14h10V5zM6 5H3v14h3V5z"/>');
    }
};
IconViewArray_Outlined.styles = style;
IconViewArray_Outlined = __decorate([
    customElement('mdui-icon-view-array--outlined')
], IconViewArray_Outlined);
export { IconViewArray_Outlined };
