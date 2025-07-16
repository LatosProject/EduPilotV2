import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFeaturedPlayList_TwoTone = class IconFeaturedPlayList_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 19h18V5H3v14zM5 7h9v2H5V7zm0 3h9v2H5v-2z" opacity=".3"/><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 10h9v2H5zm0-3h9v2H5z"/>');
    }
};
IconFeaturedPlayList_TwoTone.styles = style;
IconFeaturedPlayList_TwoTone = __decorate([
    customElement('mdui-icon-featured-play-list--two-tone')
], IconFeaturedPlayList_TwoTone);
export { IconFeaturedPlayList_TwoTone };
