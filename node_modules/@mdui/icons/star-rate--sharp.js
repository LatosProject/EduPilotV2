import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStarRate_Sharp = class IconStarRate_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z"/>');
    }
};
IconStarRate_Sharp.styles = style;
IconStarRate_Sharp = __decorate([
    customElement('mdui-icon-star-rate--sharp')
], IconStarRate_Sharp);
export { IconStarRate_Sharp };
