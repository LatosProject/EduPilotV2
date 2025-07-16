import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNumbers_Outlined = class IconNumbers_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m20.5 10 .5-2h-4l1-4h-2l-1 4h-4l1-4h-2L9 8H5l-.5 2h4l-1 4h-4L3 16h4l-1 4h2l1-4h4l-1 4h2l1-4h4l.5-2h-4l1-4h4zm-7 4h-4l1-4h4l-1 4z"/>');
    }
};
IconNumbers_Outlined.styles = style;
IconNumbers_Outlined = __decorate([
    customElement('mdui-icon-numbers--outlined')
], IconNumbers_Outlined);
export { IconNumbers_Outlined };
