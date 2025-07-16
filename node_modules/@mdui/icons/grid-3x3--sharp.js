import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGrid_3x3_Sharp = class IconGrid_3x3_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4zm-6 4h-4v-4h4v4z"/>');
    }
};
IconGrid_3x3_Sharp.styles = style;
IconGrid_3x3_Sharp = __decorate([
    customElement('mdui-icon-grid-3x3--sharp')
], IconGrid_3x3_Sharp);
export { IconGrid_3x3_Sharp };
