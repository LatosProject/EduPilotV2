import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNoteAdd_Sharp = class IconNoteAdd_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M14 2H4v20h16V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"/>');
    }
};
IconNoteAdd_Sharp.styles = style;
IconNoteAdd_Sharp = __decorate([
    customElement('mdui-icon-note-add--sharp')
], IconNoteAdd_Sharp);
export { IconNoteAdd_Sharp };
