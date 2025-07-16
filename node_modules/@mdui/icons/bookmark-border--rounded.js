import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBookmarkBorder_Rounded = class IconBookmarkBorder_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15-5-2.18L7 18V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v12z"/>');
    }
};
IconBookmarkBorder_Rounded.styles = style;
IconBookmarkBorder_Rounded = __decorate([
    customElement('mdui-icon-bookmark-border--rounded')
], IconBookmarkBorder_Rounded);
export { IconBookmarkBorder_Rounded };
