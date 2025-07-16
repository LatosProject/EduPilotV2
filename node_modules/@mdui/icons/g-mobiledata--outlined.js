import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGMobiledata_Outlined = class IconGMobiledata_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M12 11v2h2v2H9V9h7c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-4h-4z"/>');
    }
};
IconGMobiledata_Outlined.styles = style;
IconGMobiledata_Outlined = __decorate([
    customElement('mdui-icon-g-mobiledata--outlined')
], IconGMobiledata_Outlined);
export { IconGMobiledata_Outlined };
