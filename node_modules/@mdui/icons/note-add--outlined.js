import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNoteAdd_Outlined = class IconNoteAdd_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M13 11h-2v3H8v2h3v3h2v-3h3v-2h-3zm1-9H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>');
    }
};
IconNoteAdd_Outlined.styles = style;
IconNoteAdd_Outlined = __decorate([
    customElement('mdui-icon-note-add--outlined')
], IconNoteAdd_Outlined);
export { IconNoteAdd_Outlined };
