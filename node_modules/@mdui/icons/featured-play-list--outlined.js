import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFeaturedPlayList_Outlined = class IconFeaturedPlayList_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 10h9v2H5zm0-3h9v2H5z"/>');
    }
};
IconFeaturedPlayList_Outlined.styles = style;
IconFeaturedPlayList_Outlined = __decorate([
    customElement('mdui-icon-featured-play-list--outlined')
], IconFeaturedPlayList_Outlined);
export { IconFeaturedPlayList_Outlined };
