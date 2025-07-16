import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSwipeUpAlt_Rounded = class IconSwipeUpAlt_Rounded extends LitElement {
    render() {
        return svgTag('<path d="m13 5.41.88.88a.996.996 0 1 0 1.41-1.41L12.7 2.29a.996.996 0 0 0-1.41 0L8.71 4.88a.996.996 0 1 0 1.41 1.41l.88-.88v4.27a5 5 0 1 0 2 0V5.41z"/>');
    }
};
IconSwipeUpAlt_Rounded.styles = style;
IconSwipeUpAlt_Rounded = __decorate([
    customElement('mdui-icon-swipe-up-alt--rounded')
], IconSwipeUpAlt_Rounded);
export { IconSwipeUpAlt_Rounded };
