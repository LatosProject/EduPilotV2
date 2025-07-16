import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTrendingUp = class IconTrendingUp extends LitElement {
    render() {
        return svgTag('<path d="m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>');
    }
};
IconTrendingUp.styles = style;
IconTrendingUp = __decorate([
    customElement('mdui-icon-trending-up')
], IconTrendingUp);
export { IconTrendingUp };
