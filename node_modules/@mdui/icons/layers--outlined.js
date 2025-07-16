import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLayers_Outlined = class IconLayers_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m11.99 18.54-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z"/>');
    }
};
IconLayers_Outlined.styles = style;
IconLayers_Outlined = __decorate([
    customElement('mdui-icon-layers--outlined')
], IconLayers_Outlined);
export { IconLayers_Outlined };
