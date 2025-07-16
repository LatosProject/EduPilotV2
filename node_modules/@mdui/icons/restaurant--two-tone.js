import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRestaurant_TwoTone = class IconRestaurant_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4zm-5 3H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7z"/>');
    }
};
IconRestaurant_TwoTone.styles = style;
IconRestaurant_TwoTone = __decorate([
    customElement('mdui-icon-restaurant--two-tone')
], IconRestaurant_TwoTone);
export { IconRestaurant_TwoTone };
