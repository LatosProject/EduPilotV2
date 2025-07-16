import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowRight_Rounded = class IconArrowRight_Rounded extends LitElement {
    render() {
        return svgTag('<path d="m11.71 15.29 2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z"/>');
    }
};
IconArrowRight_Rounded.styles = style;
IconArrowRight_Rounded = __decorate([
    customElement('mdui-icon-arrow-right--rounded')
], IconArrowRight_Rounded);
export { IconArrowRight_Rounded };
