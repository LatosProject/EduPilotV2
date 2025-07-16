import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBookmark_TwoTone = class IconBookmark_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m7 17.97 5-2.15 5 2.15V5H7z" opacity=".3"/><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 14.97-5-2.14-5 2.14V5h10v12.97z"/>');
    }
};
IconBookmark_TwoTone.styles = style;
IconBookmark_TwoTone = __decorate([
    customElement('mdui-icon-bookmark--two-tone')
], IconBookmark_TwoTone);
export { IconBookmark_TwoTone };
