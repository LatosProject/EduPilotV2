import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBookmark_Outlined = class IconBookmark_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>');
    }
};
IconBookmark_Outlined.styles = style;
IconBookmark_Outlined = __decorate([
    customElement('mdui-icon-bookmark--outlined')
], IconBookmark_Outlined);
export { IconBookmark_Outlined };
