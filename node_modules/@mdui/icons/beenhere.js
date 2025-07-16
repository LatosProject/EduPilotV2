import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBeenhere = class IconBeenhere extends LitElement {
    render() {
        return svgTag('<path d="M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2zm-9 15-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z"/>');
    }
};
IconBeenhere.styles = style;
IconBeenhere = __decorate([
    customElement('mdui-icon-beenhere')
], IconBeenhere);
export { IconBeenhere };
