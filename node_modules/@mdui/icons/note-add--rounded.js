import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNoteAdd_Rounded = class IconNoteAdd_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M14.59 2.59c-.38-.38-.89-.59-1.42-.59H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.41l-4.82-4.83zM15 16h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H9c-.55 0-1-.45-1-1s.45-1 1-1h2v-2c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1zm-2-8V3.5L18.5 9H14c-.55 0-1-.45-1-1z"/>');
    }
};
IconNoteAdd_Rounded.styles = style;
IconNoteAdd_Rounded = __decorate([
    customElement('mdui-icon-note-add--rounded')
], IconNoteAdd_Rounded);
export { IconNoteAdd_Rounded };
