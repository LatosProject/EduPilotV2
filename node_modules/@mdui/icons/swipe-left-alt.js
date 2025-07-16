import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSwipeLeftAlt = class IconSwipeLeftAlt extends LitElement {
    render() {
        return svgTag('<path d="M10.1 13a5 5 0 1 0 0-2H5.83l1.59-1.59L6 8l-4 4 4 4 1.41-1.41L5.83 13h4.27z"/>');
    }
};
IconSwipeLeftAlt.styles = style;
IconSwipeLeftAlt = __decorate([
    customElement('mdui-icon-swipe-left-alt')
], IconSwipeLeftAlt);
export { IconSwipeLeftAlt };
