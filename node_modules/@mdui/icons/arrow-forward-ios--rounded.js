import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowForwardIos_Rounded = class IconArrowForwardIos_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"/>');
    }
};
IconArrowForwardIos_Rounded.styles = style;
IconArrowForwardIos_Rounded = __decorate([
    customElement('mdui-icon-arrow-forward-ios--rounded')
], IconArrowForwardIos_Rounded);
export { IconArrowForwardIos_Rounded };
