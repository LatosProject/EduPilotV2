import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLocalHospital_Sharp = class IconLocalHospital_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3.01L3 21h18V3zm-3 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>');
    }
};
IconLocalHospital_Sharp.styles = style;
IconLocalHospital_Sharp = __decorate([
    customElement('mdui-icon-local-hospital--sharp')
], IconLocalHospital_Sharp);
export { IconLocalHospital_Sharp };
