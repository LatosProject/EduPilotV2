import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChevronRight_TwoTone = class IconChevronRight_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>');
    }
};
IconChevronRight_TwoTone.styles = style;
IconChevronRight_TwoTone = __decorate([
    customElement('mdui-icon-chevron-right--two-tone')
], IconChevronRight_TwoTone);
export { IconChevronRight_TwoTone };
