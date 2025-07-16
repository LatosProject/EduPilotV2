import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTablet_Outlined = class IconTablet_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"/>');
    }
};
IconTablet_Outlined.styles = style;
IconTablet_Outlined = __decorate([
    customElement('mdui-icon-tablet--outlined')
], IconTablet_Outlined);
export { IconTablet_Outlined };
