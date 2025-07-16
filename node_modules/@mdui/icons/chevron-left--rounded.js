import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChevronLeft_Rounded = class IconChevronLeft_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"/>');
    }
};
IconChevronLeft_Rounded.styles = style;
IconChevronLeft_Rounded = __decorate([
    customElement('mdui-icon-chevron-left--rounded')
], IconChevronLeft_Rounded);
export { IconChevronLeft_Rounded };
