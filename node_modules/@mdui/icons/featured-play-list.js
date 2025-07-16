import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFeaturedPlayList = class IconFeaturedPlayList extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z"/>');
    }
};
IconFeaturedPlayList.styles = style;
IconFeaturedPlayList = __decorate([
    customElement('mdui-icon-featured-play-list')
], IconFeaturedPlayList);
export { IconFeaturedPlayList };
