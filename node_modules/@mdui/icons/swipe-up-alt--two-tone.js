import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSwipeUpAlt_TwoTone = class IconSwipeUpAlt_TwoTone extends LitElement {
    render() {
        return svgTag('<circle cx="12" cy="15" r="3" opacity=".3"/><path d="m13 5.83 1.59 1.59L16 6l-4-4-4 4 1.41 1.41L11 5.83v4.27a5 5 0 1 0 2 0V5.83zM12 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>');
    }
};
IconSwipeUpAlt_TwoTone.styles = style;
IconSwipeUpAlt_TwoTone = __decorate([
    customElement('mdui-icon-swipe-up-alt--two-tone')
], IconSwipeUpAlt_TwoTone);
export { IconSwipeUpAlt_TwoTone };
