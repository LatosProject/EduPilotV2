import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCommentBank = class IconCommentBank extends LitElement {
    render() {
        return svgTag('<path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 11-2.5-1.5L14 13V5h5v8z"/>');
    }
};
IconCommentBank.styles = style;
IconCommentBank = __decorate([
    customElement('mdui-icon-comment-bank')
], IconCommentBank);
export { IconCommentBank };
