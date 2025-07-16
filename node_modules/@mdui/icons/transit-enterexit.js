import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTransitEnterexit = class IconTransitEnterexit extends LitElement {
    render() {
        return svgTag('<path d="M16 18H6V8h3v4.77L15.98 6 18 8.03 11.15 15H16v3z"/>');
    }
};
IconTransitEnterexit.styles = style;
IconTransitEnterexit = __decorate([
    customElement('mdui-icon-transit-enterexit')
], IconTransitEnterexit);
export { IconTransitEnterexit };
