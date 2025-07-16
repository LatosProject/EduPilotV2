import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPanorama_Outlined = class IconPanorama_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H3V6h18v12zm-6.5-7L11 15.51 8.5 12.5 5 17h14z"/>');
    }
};
IconPanorama_Outlined.styles = style;
IconPanorama_Outlined = __decorate([
    customElement('mdui-icon-panorama--outlined')
], IconPanorama_Outlined);
export { IconPanorama_Outlined };
