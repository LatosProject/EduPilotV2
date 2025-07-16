import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGridView_Outlined = class IconGridView_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"/>');
    }
};
IconGridView_Outlined.styles = style;
IconGridView_Outlined = __decorate([
    customElement('mdui-icon-grid-view--outlined')
], IconGridView_Outlined);
export { IconGridView_Outlined };
