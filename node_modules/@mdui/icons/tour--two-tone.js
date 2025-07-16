import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTour_TwoTone = class IconTour_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7 12V6h11.05l-1.2 3 1.2 3z" opacity=".3"/><path d="M21 4H7V2H5v20h2v-8h14l-2-5 2-5zM7 12V6h11.05l-1.2 3 1.2 3H7zm7-3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>');
    }
};
IconTour_TwoTone.styles = style;
IconTour_TwoTone = __decorate([
    customElement('mdui-icon-tour--two-tone')
], IconTour_TwoTone);
export { IconTour_TwoTone };
