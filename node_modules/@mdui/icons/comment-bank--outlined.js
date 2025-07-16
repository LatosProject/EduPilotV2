import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCommentBank_Outlined = class IconCommentBank_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M18 14V6h-5v8l2.5-1.5z"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>');
    }
};
IconCommentBank_Outlined.styles = style;
IconCommentBank_Outlined = __decorate([
    customElement('mdui-icon-comment-bank--outlined')
], IconCommentBank_Outlined);
export { IconCommentBank_Outlined };
