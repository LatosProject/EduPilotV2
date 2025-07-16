import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNotes = class IconNotes extends LitElement {
    render() {
        return svgTag('<path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"/>');
    }
};
IconNotes.styles = style;
IconNotes = __decorate([
    customElement('mdui-icon-notes')
], IconNotes);
export { IconNotes };
