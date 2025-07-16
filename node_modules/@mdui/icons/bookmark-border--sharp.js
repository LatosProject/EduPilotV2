import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBookmarkBorder_Sharp = class IconBookmarkBorder_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 3H5v18l7-3 7 3V3zm-2 15-5-2.18L7 18V5h10v13z"/>');
    }
};
IconBookmarkBorder_Sharp.styles = style;
IconBookmarkBorder_Sharp = __decorate([
    customElement('mdui-icon-bookmark-border--sharp')
], IconBookmarkBorder_Sharp);
export { IconBookmarkBorder_Sharp };
