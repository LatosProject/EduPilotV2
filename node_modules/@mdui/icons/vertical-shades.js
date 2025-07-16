import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVerticalShades = class IconVerticalShades extends LitElement {
    render() {
        return svgTag('<path d="M20 19V3H4v16H2v2h20v-2h-2zm-10 0V5h4v14h-4z"/>');
    }
};
IconVerticalShades.styles = style;
IconVerticalShades = __decorate([
    customElement('mdui-icon-vertical-shades')
], IconVerticalShades);
export { IconVerticalShades };
