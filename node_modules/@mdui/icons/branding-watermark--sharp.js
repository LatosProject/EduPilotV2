import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBrandingWatermark_Sharp = class IconBrandingWatermark_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 3H1v18h22V3zm-2 16h-9v-6h9v6z"/>');
    }
};
IconBrandingWatermark_Sharp.styles = style;
IconBrandingWatermark_Sharp = __decorate([
    customElement('mdui-icon-branding-watermark--sharp')
], IconBrandingWatermark_Sharp);
export { IconBrandingWatermark_Sharp };
