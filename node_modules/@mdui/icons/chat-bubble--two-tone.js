import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChatBubble_TwoTone = class IconChatBubble_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m4 18 2-2h14V4H4z" opacity=".3"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>');
    }
};
IconChatBubble_TwoTone.styles = style;
IconChatBubble_TwoTone = __decorate([
    customElement('mdui-icon-chat-bubble--two-tone')
], IconChatBubble_TwoTone);
export { IconChatBubble_TwoTone };
