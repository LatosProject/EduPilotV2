import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowLeft_Rounded = class IconArrowLeft_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M12.29 8.71 9.7 11.3a.996.996 0 0 0 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7z"/>');
    }
};
IconArrowLeft_Rounded.styles = style;
IconArrowLeft_Rounded = __decorate([
    customElement('mdui-icon-arrow-left--rounded')
], IconArrowLeft_Rounded);
export { IconArrowLeft_Rounded };
