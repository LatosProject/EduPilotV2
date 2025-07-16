import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBookmarkRemove_Sharp = class IconBookmarkRemove_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 7h-6V5h6v2zm-2 3.9c-.64.13-1.32.14-2.02 0-1.91-.38-3.47-1.92-3.87-3.83A5.02 5.02 0 0 1 14 3H5v18l7-3 7 3V10.9z"/>');
    }
};
IconBookmarkRemove_Sharp.styles = style;
IconBookmarkRemove_Sharp = __decorate([
    customElement('mdui-icon-bookmark-remove--sharp')
], IconBookmarkRemove_Sharp);
export { IconBookmarkRemove_Sharp };
