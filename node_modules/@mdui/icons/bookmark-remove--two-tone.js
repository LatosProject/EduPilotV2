import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBookmarkRemove_TwoTone = class IconBookmarkRemove_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M17 17.97V10.9A5 5 0 0 1 13 6c0-.34.03-.68.1-1H7v12.97l5-2.14 5 2.14z" opacity=".3"/><path d="M21 7h-6V5h6v2zm-4 10.97-5-2.14-5 2.14V5h6.1c.15-.74.46-1.42.9-2H7c-1.1 0-2 .9-2 2v16l7-3 7 3V10.9c-.32.07-.66.1-1 .1-.34 0-.68-.03-1-.1v7.07z"/>');
    }
};
IconBookmarkRemove_TwoTone.styles = style;
IconBookmarkRemove_TwoTone = __decorate([
    customElement('mdui-icon-bookmark-remove--two-tone')
], IconBookmarkRemove_TwoTone);
export { IconBookmarkRemove_TwoTone };
