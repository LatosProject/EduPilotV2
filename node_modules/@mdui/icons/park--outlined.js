import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPark_Outlined = class IconPark_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.95v-4H21l-4-6zM6.79 16l3.9-6H8.88l3.13-4.5 3.15 4.5h-1.9l4 6H6.79z"/>');
    }
};
IconPark_Outlined.styles = style;
IconPark_Outlined = __decorate([
    customElement('mdui-icon-park--outlined')
], IconPark_Outlined);
export { IconPark_Outlined };
