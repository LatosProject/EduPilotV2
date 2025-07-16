import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPlaylistPlay = class IconPlaylistPlay extends LitElement {
    render() {
        return svgTag('<path d="M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm13-1v8l6-4z"/>');
    }
};
IconPlaylistPlay.styles = style;
IconPlaylistPlay = __decorate([
    customElement('mdui-icon-playlist-play')
], IconPlaylistPlay);
export { IconPlaylistPlay };
