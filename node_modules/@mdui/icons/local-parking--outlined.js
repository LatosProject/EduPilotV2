import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLocalParking_Outlined = class IconLocalParking_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/>');
    }
};
IconLocalParking_Outlined.styles = style;
IconLocalParking_Outlined = __decorate([
    customElement('mdui-icon-local-parking--outlined')
], IconLocalParking_Outlined);
export { IconLocalParking_Outlined };
