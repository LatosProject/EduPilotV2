import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPolyline_TwoTone = class IconPolyline_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12 4h2v2h-2V4zM7 14H5v-2h2v2zm12 6h-2v-2h2v2z" opacity=".3"/><path d="M15 16v1.26l-6-3v-3.17L11.7 8H16V2h-6v4.9L7.3 10H3v6h5l7 3.5V22h6v-6h-6zM12 4h2v2h-2V4zM7 14H5v-2h2v2zm12 6h-2v-2h2v2z"/>');
    }
};
IconPolyline_TwoTone.styles = style;
IconPolyline_TwoTone = __decorate([
    customElement('mdui-icon-polyline--two-tone')
], IconPolyline_TwoTone);
export { IconPolyline_TwoTone };
