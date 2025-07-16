import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconModeComment = class IconModeComment extends LitElement {
    render() {
        return svgTag('<path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/>');
    }
};
IconModeComment.styles = style;
IconModeComment = __decorate([
    customElement('mdui-icon-mode-comment')
], IconModeComment);
export { IconModeComment };
