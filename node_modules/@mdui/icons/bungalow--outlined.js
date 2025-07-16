import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBungalow_Outlined = class IconBungalow_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M13 14h-2v-2h2v2zm5.1 2.56L17 14.79V21H7v-6.2l-1.1 1.76-1.7-1.06L12 3l7.8 12.5-1.7 1.06zM15 11.59l-3-4.8-3 4.8V19h2v-3h2v3h2v-7.41z"/>');
    }
};
IconBungalow_Outlined.styles = style;
IconBungalow_Outlined = __decorate([
    customElement('mdui-icon-bungalow--outlined')
], IconBungalow_Outlined);
export { IconBungalow_Outlined };
