import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowUpward = class IconArrowUpward extends LitElement {
    render() {
        return svgTag('<path d="m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>');
    }
};
IconArrowUpward.styles = style;
IconArrowUpward = __decorate([
    customElement('mdui-icon-arrow-upward')
], IconArrowUpward);
export { IconArrowUpward };
