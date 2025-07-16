import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCollectionsBookmark_Sharp = class IconCollectionsBookmark_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M4 6H2v16h16v-2H4V6zm18-4H6v16h16V2zm-2 10-2.5-1.5L15 12V4h5v8z"/>');
    }
};
IconCollectionsBookmark_Sharp.styles = style;
IconCollectionsBookmark_Sharp = __decorate([
    customElement('mdui-icon-collections-bookmark--sharp')
], IconCollectionsBookmark_Sharp);
export { IconCollectionsBookmark_Sharp };
