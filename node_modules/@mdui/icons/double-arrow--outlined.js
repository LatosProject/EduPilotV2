import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDoubleArrow_Outlined = class IconDoubleArrow_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M15.5 5H11l5 7-5 7h4.5l5-7z"/><path d="M8.5 5H4l5 7-5 7h4.5l5-7z"/>');
    }
};
IconDoubleArrow_Outlined.styles = style;
IconDoubleArrow_Outlined = __decorate([
    customElement('mdui-icon-double-arrow--outlined')
], IconDoubleArrow_Outlined);
export { IconDoubleArrow_Outlined };
