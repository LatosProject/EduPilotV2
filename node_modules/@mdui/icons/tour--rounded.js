import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTour_Rounded = class IconTour_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M20.45 5.37A.999.999 0 0 0 19.52 4H7V3c0-.55-.45-1-1-1s-1 .45-1 1v19h2v-8h12.52c.71 0 1.19-.71.93-1.37L19 9l1.45-3.63zM15 9c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>');
    }
};
IconTour_Rounded.styles = style;
IconTour_Rounded = __decorate([
    customElement('mdui-icon-tour--rounded')
], IconTour_Rounded);
export { IconTour_Rounded };
