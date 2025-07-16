import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPolyline = class IconPolyline extends LitElement {
    render() {
        return svgTag('<path d="M15 16v1.26l-6-3v-3.17L11.7 8H16V2h-6v4.9L7.3 10H3v6h5l7 3.5V22h6v-6z"/>');
    }
};
IconPolyline.styles = style;
IconPolyline = __decorate([
    customElement('mdui-icon-polyline')
], IconPolyline);
export { IconPolyline };
