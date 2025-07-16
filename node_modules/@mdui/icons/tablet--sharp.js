import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTablet_Sharp = class IconTablet_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 4H1v16h21.99L23 4zm-4 14H5V6h14v12z"/>');
    }
};
IconTablet_Sharp.styles = style;
IconTablet_Sharp = __decorate([
    customElement('mdui-icon-tablet--sharp')
], IconTablet_Sharp);
export { IconTablet_Sharp };
