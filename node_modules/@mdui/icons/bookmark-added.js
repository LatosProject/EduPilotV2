import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBookmarkAdded = class IconBookmarkAdded extends LitElement {
    render() {
        return svgTag('<path d="m19 21-7-3-7 3V5c0-1.1.9-2 2-2h7a5.002 5.002 0 0 0 5 7.9V21zM17.83 9 15 6.17l1.41-1.41 1.41 1.41 3.54-3.54 1.41 1.41L17.83 9z"/>');
    }
};
IconBookmarkAdded.styles = style;
IconBookmarkAdded = __decorate([
    customElement('mdui-icon-bookmark-added')
], IconBookmarkAdded);
export { IconBookmarkAdded };
