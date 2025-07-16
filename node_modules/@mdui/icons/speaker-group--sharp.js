import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSpeakerGroup_Sharp = class IconSpeakerGroup_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 1H8v17.99h12V1zm-6 2c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/><circle cx="14" cy="12.5" r="2.5"/><path d="M6 5H4v18h12v-2H6z"/>');
    }
};
IconSpeakerGroup_Sharp.styles = style;
IconSpeakerGroup_Sharp = __decorate([
    customElement('mdui-icon-speaker-group--sharp')
], IconSpeakerGroup_Sharp);
export { IconSpeakerGroup_Sharp };
