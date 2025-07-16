import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStickyNote_2_TwoTone = class IconStickyNote_2_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 5v14h9v-5h5V5H5zm7 9H7v-2h5v2zm5-4H7V8h10v2z" opacity=".3"/><path d="M19 5v9h-5v5H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10l6-6V5c0-1.1-.9-2-2-2zm-7 11H7v-2h5v2zm5-4H7V8h10v2z"/>');
    }
};
IconStickyNote_2_TwoTone.styles = style;
IconStickyNote_2_TwoTone = __decorate([
    customElement('mdui-icon-sticky-note-2--two-tone')
], IconStickyNote_2_TwoTone);
export { IconStickyNote_2_TwoTone };
