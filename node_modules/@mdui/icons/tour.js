import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTour = class IconTour extends LitElement {
    render() {
        return svgTag('<path d="M21 4H7V2H5v20h2v-8h14l-2-5 2-5zm-6 5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>');
    }
};
IconTour.styles = style;
IconTour = __decorate([
    customElement('mdui-icon-tour')
], IconTour);
export { IconTour };
