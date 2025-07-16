import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowBackIos_Rounded = class IconArrowBackIos_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"/>');
    }
};
IconArrowBackIos_Rounded.styles = style;
IconArrowBackIos_Rounded = __decorate([
    customElement('mdui-icon-arrow-back-ios--rounded')
], IconArrowBackIos_Rounded);
export { IconArrowBackIos_Rounded };
