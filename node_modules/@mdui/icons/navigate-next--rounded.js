import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNavigateNext_Rounded = class IconNavigateNext_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z"/>');
    }
};
IconNavigateNext_Rounded.styles = style;
IconNavigateNext_Rounded = __decorate([
    customElement('mdui-icon-navigate-next--rounded')
], IconNavigateNext_Rounded);
export { IconNavigateNext_Rounded };
