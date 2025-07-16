import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSwipeRightAlt = class IconSwipeRightAlt extends LitElement {
    render() {
        return svgTag('<path d="M13.9 11a5 5 0 1 0 0 2h4.27l-1.59 1.59L18 16l4-4-4-4-1.41 1.41L18.17 11H13.9z"/>');
    }
};
IconSwipeRightAlt.styles = style;
IconSwipeRightAlt = __decorate([
    customElement('mdui-icon-swipe-right-alt')
], IconSwipeRightAlt);
export { IconSwipeRightAlt };
