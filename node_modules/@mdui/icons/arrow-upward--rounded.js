import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowUpward_Rounded = class IconArrowUpward_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0a.996.996 0 0 0 0-1.41l-6.59-6.59a.996.996 0 0 0-1.41 0l-6.6 6.58a.996.996 0 1 0 1.41 1.41L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1z"/>');
    }
};
IconArrowUpward_Rounded.styles = style;
IconArrowUpward_Rounded = __decorate([
    customElement('mdui-icon-arrow-upward--rounded')
], IconArrowUpward_Rounded);
export { IconArrowUpward_Rounded };
