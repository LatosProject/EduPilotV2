import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStarHalf_Outlined = class IconStarHalf_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>');
    }
};
IconStarHalf_Outlined.styles = style;
IconStarHalf_Outlined = __decorate([
    customElement('mdui-icon-star-half--outlined')
], IconStarHalf_Outlined);
export { IconStarHalf_Outlined };
