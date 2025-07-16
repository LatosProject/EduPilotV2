import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStickyNote_2 = class IconStickyNote_2 extends LitElement {
    render() {
        return svgTag('<path d="M19 3H4.99C3.89 3 3 3.9 3 5l.01 14c0 1.1.89 2 1.99 2h10l6-6V5c0-1.1-.9-2-2-2zM7 8h10v2H7V8zm5 6H7v-2h5v2zm2 5.5V14h5.5L14 19.5z"/>');
    }
};
IconStickyNote_2.styles = style;
IconStickyNote_2 = __decorate([
    customElement('mdui-icon-sticky-note-2')
], IconStickyNote_2);
export { IconStickyNote_2 };
