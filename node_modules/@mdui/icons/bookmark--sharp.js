import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBookmark_Sharp = class IconBookmark_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 3H5v18l7-3 7 3V3z"/>');
    }
};
IconBookmark_Sharp.styles = style;
IconBookmark_Sharp = __decorate([
    customElement('mdui-icon-bookmark--sharp')
], IconBookmark_Sharp);
export { IconBookmark_Sharp };
