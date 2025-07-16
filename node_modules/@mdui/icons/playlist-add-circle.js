import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPlaylistAddCircle = class IconPlaylistAddCircle extends LitElement {
    render() {
        return svgTag('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7 7h7v2H7V7zm3 8H7v-2h3v2zm-3-3v-2h7v2H7zm12 3h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z"/>');
    }
};
IconPlaylistAddCircle.styles = style;
IconPlaylistAddCircle = __decorate([
    customElement('mdui-icon-playlist-add-circle')
], IconPlaylistAddCircle);
export { IconPlaylistAddCircle };
