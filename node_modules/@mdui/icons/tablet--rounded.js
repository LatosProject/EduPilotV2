import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTablet_Rounded = class IconTablet_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"/>');
    }
};
IconTablet_Rounded.styles = style;
IconTablet_Rounded = __decorate([
    customElement('mdui-icon-tablet--rounded')
], IconTablet_Rounded);
export { IconTablet_Rounded };
