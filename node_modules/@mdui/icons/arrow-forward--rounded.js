import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowForward_Rounded = class IconArrowForward_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41l-6.58-6.6a.996.996 0 1 0-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z"/>');
    }
};
IconArrowForward_Rounded.styles = style;
IconArrowForward_Rounded = __decorate([
    customElement('mdui-icon-arrow-forward--rounded')
], IconArrowForward_Rounded);
export { IconArrowForward_Rounded };
