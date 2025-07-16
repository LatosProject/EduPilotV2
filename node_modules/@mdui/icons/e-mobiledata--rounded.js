import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEMobiledata_Rounded = class IconEMobiledata_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M16 8c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-5v-2h5c.55 0 1-.45 1-1s-.45-1-1-1h-5V9h5c.55 0 1-.45 1-1z"/>');
    }
};
IconEMobiledata_Rounded.styles = style;
IconEMobiledata_Rounded = __decorate([
    customElement('mdui-icon-e-mobiledata--rounded')
], IconEMobiledata_Rounded);
export { IconEMobiledata_Rounded };
