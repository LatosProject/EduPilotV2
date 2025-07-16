import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSpeakerNotes_Sharp = class IconSpeakerNotes_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 2H2.01L2 22l4-4h16V2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"/>');
    }
};
IconSpeakerNotes_Sharp.styles = style;
IconSpeakerNotes_Sharp = __decorate([
    customElement('mdui-icon-speaker-notes--sharp')
], IconSpeakerNotes_Sharp);
export { IconSpeakerNotes_Sharp };
