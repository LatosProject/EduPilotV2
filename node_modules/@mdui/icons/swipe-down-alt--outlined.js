import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSwipeDownAlt_Outlined = class IconSwipeDownAlt_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M13 13.9a5 5 0 1 0-2 0v4.27l-1.59-1.59L8 18l4 4 4-4-1.41-1.41L13 18.17V13.9zM15 9c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"/>');
    }
};
IconSwipeDownAlt_Outlined.styles = style;
IconSwipeDownAlt_Outlined = __decorate([
    customElement('mdui-icon-swipe-down-alt--outlined')
], IconSwipeDownAlt_Outlined);
export { IconSwipeDownAlt_Outlined };
