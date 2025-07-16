import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEMobiledata_TwoTone = class IconEMobiledata_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M16 9V7H8v10h8v-2h-6v-2h6v-2h-6V9h6z"/>');
    }
};
IconEMobiledata_TwoTone.styles = style;
IconEMobiledata_TwoTone = __decorate([
    customElement('mdui-icon-e-mobiledata--two-tone')
], IconEMobiledata_TwoTone);
export { IconEMobiledata_TwoTone };
