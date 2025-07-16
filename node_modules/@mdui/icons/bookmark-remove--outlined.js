import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBookmarkRemove_Outlined = class IconBookmarkRemove_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M17 11v6.97l-5-2.14-5 2.14V5h6V3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V11h-2zm4-4h-6V5h6v2z"/>');
    }
};
IconBookmarkRemove_Outlined.styles = style;
IconBookmarkRemove_Outlined = __decorate([
    customElement('mdui-icon-bookmark-remove--outlined')
], IconBookmarkRemove_Outlined);
export { IconBookmarkRemove_Outlined };
