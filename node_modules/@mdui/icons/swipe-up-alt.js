import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSwipeUpAlt = class IconSwipeUpAlt extends LitElement {
    render() {
        return svgTag('<path d="m13 5.83 1.59 1.59L16 6l-4-4-4 4 1.41 1.41L11 5.83v4.27a5 5 0 1 0 2 0V5.83z"/>');
    }
};
IconSwipeUpAlt.styles = style;
IconSwipeUpAlt = __decorate([
    customElement('mdui-icon-swipe-up-alt')
], IconSwipeUpAlt);
export { IconSwipeUpAlt };
