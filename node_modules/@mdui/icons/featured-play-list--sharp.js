import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFeaturedPlayList_Sharp = class IconFeaturedPlayList_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 3H1v18h22V3zm-11 8H3V9h9v2zm0-4H3V5h9v2z"/>');
    }
};
IconFeaturedPlayList_Sharp.styles = style;
IconFeaturedPlayList_Sharp = __decorate([
    customElement('mdui-icon-featured-play-list--sharp')
], IconFeaturedPlayList_Sharp);
export { IconFeaturedPlayList_Sharp };
