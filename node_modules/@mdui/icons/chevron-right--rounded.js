import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChevronRight_Rounded = class IconChevronRight_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/>');
    }
};
IconChevronRight_Rounded.styles = style;
IconChevronRight_Rounded = __decorate([
    customElement('mdui-icon-chevron-right--rounded')
], IconChevronRight_Rounded);
export { IconChevronRight_Rounded };
