import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStickyNote_2_Sharp = class IconStickyNote_2_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M2.99 3 3 21h12l6-6V3H2.99zM7 8h10v2H7V8zm5 6H7v-2h5v2zm2 5.5V14h5.5L14 19.5z"/>');
    }
};
IconStickyNote_2_Sharp.styles = style;
IconStickyNote_2_Sharp = __decorate([
    customElement('mdui-icon-sticky-note-2--sharp')
], IconStickyNote_2_Sharp);
export { IconStickyNote_2_Sharp };
