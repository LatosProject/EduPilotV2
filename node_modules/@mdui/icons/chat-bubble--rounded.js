import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChatBubble_Rounded = class IconChatBubble_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>');
    }
};
IconChatBubble_Rounded.styles = style;
IconChatBubble_Rounded = __decorate([
    customElement('mdui-icon-chat-bubble--rounded')
], IconChatBubble_Rounded);
export { IconChatBubble_Rounded };
