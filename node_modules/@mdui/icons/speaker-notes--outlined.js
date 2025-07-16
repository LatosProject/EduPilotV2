import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSpeakerNotes_Outlined = class IconSpeakerNotes_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zM6 12h2v2H6zm0-3h2v2H6zm0-3h2v2H6zm4 6h5v2h-5zm0-3h8v2h-8zm0-3h8v2h-8z"/>');
    }
};
IconSpeakerNotes_Outlined.styles = style;
IconSpeakerNotes_Outlined = __decorate([
    customElement('mdui-icon-speaker-notes--outlined')
], IconSpeakerNotes_Outlined);
export { IconSpeakerNotes_Outlined };
