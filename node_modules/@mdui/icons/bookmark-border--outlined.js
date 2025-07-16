import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBookmarkBorder_Outlined = class IconBookmarkBorder_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15-5-2.18L7 18V5h10v13z"/>');
    }
};
IconBookmarkBorder_Outlined.styles = style;
IconBookmarkBorder_Outlined = __decorate([
    customElement('mdui-icon-bookmark-border--outlined')
], IconBookmarkBorder_Outlined);
export { IconBookmarkBorder_Outlined };
