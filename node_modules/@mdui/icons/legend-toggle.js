import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLegendToggle = class IconLegendToggle extends LitElement {
    render() {
        return svgTag('<path d="M20 15H4v-2h16v2zm0 2H4v2h16v-2zm-5-6 5-3.55V5l-5 3.55L10 5 4 8.66V11l5.92-3.61L15 11z"/>');
    }
};
IconLegendToggle.styles = style;
IconLegendToggle = __decorate([
    customElement('mdui-icon-legend-toggle')
], IconLegendToggle);
export { IconLegendToggle };
