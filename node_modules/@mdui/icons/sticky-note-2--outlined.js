import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStickyNote_2_Outlined = class IconStickyNote_2_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 5v9h-5v5H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10l6-6V5c0-1.1-.9-2-2-2zm-7 11H7v-2h5v2zm5-4H7V8h10v2z"/>');
    }
};
IconStickyNote_2_Outlined.styles = style;
IconStickyNote_2_Outlined = __decorate([
    customElement('mdui-icon-sticky-note-2--outlined')
], IconStickyNote_2_Outlined);
export { IconStickyNote_2_Outlined };
