import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPlaylistAddCheck_TwoTone = class IconPlaylistAddCheck_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm17.59-2.07-4.25 4.24-2.12-2.12-1.41 1.41L16.34 19 22 13.34z"/>');
    }
};
IconPlaylistAddCheck_TwoTone.styles = style;
IconPlaylistAddCheck_TwoTone = __decorate([
    customElement('mdui-icon-playlist-add-check--two-tone')
], IconPlaylistAddCheck_TwoTone);
export { IconPlaylistAddCheck_TwoTone };
