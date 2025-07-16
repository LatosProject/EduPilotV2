import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPark_TwoTone = class IconPark_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M13.26 10h1.9l-3.15-4.5L8.88 10h1.81l-3.9 6h10.47z" opacity=".3"/><path d="M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.95v-4H21l-4-6zM6.79 16l3.9-6H8.88l3.13-4.5 3.15 4.5h-1.9l4 6H6.79z"/>');
    }
};
IconPark_TwoTone.styles = style;
IconPark_TwoTone = __decorate([
    customElement('mdui-icon-park--two-tone')
], IconPark_TwoTone);
export { IconPark_TwoTone };
