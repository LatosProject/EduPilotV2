import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAlignVerticalCenter_Outlined = class IconAlignVerticalCenter_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M22 11h-5V6h-3v5h-4V3H7v8H1.84v2H7v8h3v-8h4v5h3v-5h5z"/>');
    }
};
IconAlignVerticalCenter_Outlined.styles = style;
IconAlignVerticalCenter_Outlined = __decorate([
    customElement('mdui-icon-align-vertical-center--outlined')
], IconAlignVerticalCenter_Outlined);
export { IconAlignVerticalCenter_Outlined };
