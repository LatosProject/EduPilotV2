import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDirections_Sharp = class IconDirections_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22.41 12 12 1.59 1.59 11.99 12 22.41 22.41 12zM14 14.5V12h-4v3H8v-5h6V7.5l3.5 3.5-3.5 3.5z"/>');
    }
};
IconDirections_Sharp.styles = style;
IconDirections_Sharp = __decorate([
    customElement('mdui-icon-directions--sharp')
], IconDirections_Sharp);
export { IconDirections_Sharp };
