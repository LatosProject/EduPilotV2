import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTour_Outlined = class IconTour_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M21 4H7V2H5v20h2v-8h14l-2-5 2-5zm-3.86 5.74.9 2.26H7V6h11.05l-.9 2.26-.3.74.29.74zM14 9c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>');
    }
};
IconTour_Outlined.styles = style;
IconTour_Outlined = __decorate([
    customElement('mdui-icon-tour--outlined')
], IconTour_Outlined);
export { IconTour_Outlined };
