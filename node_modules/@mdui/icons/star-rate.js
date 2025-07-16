import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStarRate = class IconStarRate extends LitElement {
    render() {
        return svgTag('<path d="M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z"/>');
    }
};
IconStarRate.styles = style;
IconStarRate = __decorate([
    customElement('mdui-icon-star-rate')
], IconStarRate);
export { IconStarRate };
