import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPlaylistAdd_Outlined = class IconPlaylistAdd_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M14 10H3v2h11v-2zm0-4H3v2h11V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM3 16h7v-2H3v2z"/>');
    }
};
IconPlaylistAdd_Outlined.styles = style;
IconPlaylistAdd_Outlined = __decorate([
    customElement('mdui-icon-playlist-add--outlined')
], IconPlaylistAdd_Outlined);
export { IconPlaylistAdd_Outlined };
