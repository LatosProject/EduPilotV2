import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChevronLeft = class IconChevronLeft extends LitElement {
    render() {
        return svgTag('<path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>');
    }
};
IconChevronLeft.styles = style;
IconChevronLeft = __decorate([
    customElement('mdui-icon-chevron-left')
], IconChevronLeft);
export { IconChevronLeft };
