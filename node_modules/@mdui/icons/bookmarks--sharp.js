import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBookmarks_Sharp = class IconBookmarks_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m19 18 2 1V1H7v2h12v15zM17 5H3v18l7-3 7 3V5z"/>');
    }
};
IconBookmarks_Sharp.styles = style;
IconBookmarks_Sharp = __decorate([
    customElement('mdui-icon-bookmarks--sharp')
], IconBookmarks_Sharp);
export { IconBookmarks_Sharp };
