import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSkipPrevious_TwoTone = class IconSkipPrevious_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M16 14.14V9.86L12.97 12z" opacity=".3"/><path d="M6 6h2v12H6zm12 12V6l-8.5 6 8.5 6zm-2-3.86L12.97 12 16 9.86v4.28z"/>');
    }
};
IconSkipPrevious_TwoTone.styles = style;
IconSkipPrevious_TwoTone = __decorate([
    customElement('mdui-icon-skip-previous--two-tone')
], IconSkipPrevious_TwoTone);
export { IconSkipPrevious_TwoTone };
