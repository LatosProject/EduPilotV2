import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBookmarkAdded_Outlined = class IconBookmarkAdded_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M17 11v6.97l-5-2.14-5 2.14V5h6V3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V11h-2zm.83-2L15 6.17l1.41-1.41 1.41 1.41 3.54-3.54 1.41 1.41L17.83 9z"/>');
    }
};
IconBookmarkAdded_Outlined.styles = style;
IconBookmarkAdded_Outlined = __decorate([
    customElement('mdui-icon-bookmark-added--outlined')
], IconBookmarkAdded_Outlined);
export { IconBookmarkAdded_Outlined };
