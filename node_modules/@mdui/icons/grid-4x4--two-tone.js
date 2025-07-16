import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGrid_4x4_TwoTone = class IconGrid_4x4_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M22 7V5h-3V2h-2v3h-4V2h-2v3H7V2H5v3H2v2h3v4H2v2h3v4H2v2h3v3h2v-3h4v3h2v-3h4v3h2v-3h3v-2h-3v-4h3v-2h-3V7h3zM7 7h4v4H7V7zm0 10v-4h4v4H7zm10 0h-4v-4h4v4zm0-6h-4V7h4v4z"/>');
    }
};
IconGrid_4x4_TwoTone.styles = style;
IconGrid_4x4_TwoTone = __decorate([
    customElement('mdui-icon-grid-4x4--two-tone')
], IconGrid_4x4_TwoTone);
export { IconGrid_4x4_TwoTone };
