import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSwipeDownAlt = class IconSwipeDownAlt extends LitElement {
    render() {
        return svgTag('<path d="M13 13.9a5 5 0 1 0-2 0v4.27l-1.59-1.59L8 18l4 4 4-4-1.41-1.41L13 18.17V13.9z"/>');
    }
};
IconSwipeDownAlt.styles = style;
IconSwipeDownAlt = __decorate([
    customElement('mdui-icon-swipe-down-alt')
], IconSwipeDownAlt);
export { IconSwipeDownAlt };
