import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSwipeDownAlt_Rounded = class IconSwipeDownAlt_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M13 13.9a5 5 0 1 0-2 0v4.27l-.88-.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59a.996.996 0 1 0-1.41-1.41l-.89.88V13.9z"/>');
    }
};
IconSwipeDownAlt_Rounded.styles = style;
IconSwipeDownAlt_Rounded = __decorate([
    customElement('mdui-icon-swipe-down-alt--rounded')
], IconSwipeDownAlt_Rounded);
export { IconSwipeDownAlt_Rounded };
