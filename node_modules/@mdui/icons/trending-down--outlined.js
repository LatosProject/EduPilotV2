import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTrendingDown_Outlined = class IconTrendingDown_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m16 18 2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6h-6z"/>');
    }
};
IconTrendingDown_Outlined.styles = style;
IconTrendingDown_Outlined = __decorate([
    customElement('mdui-icon-trending-down--outlined')
], IconTrendingDown_Outlined);
export { IconTrendingDown_Outlined };
