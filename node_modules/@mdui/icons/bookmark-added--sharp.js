import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBookmarkAdded_Sharp = class IconBookmarkAdded_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m19 21-7-3-7 3V3h9a5.002 5.002 0 0 0 5 7.9V21zM17.83 9 15 6.17l1.41-1.41 1.41 1.41 3.54-3.54 1.41 1.41L17.83 9z"/>');
    }
};
IconBookmarkAdded_Sharp.styles = style;
IconBookmarkAdded_Sharp = __decorate([
    customElement('mdui-icon-bookmark-added--sharp')
], IconBookmarkAdded_Sharp);
export { IconBookmarkAdded_Sharp };
