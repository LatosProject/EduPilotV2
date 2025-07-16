import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChatBubble_Sharp = class IconChatBubble_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 2H2v20l4-4h16V2z"/>');
    }
};
IconChatBubble_Sharp.styles = style;
IconChatBubble_Sharp = __decorate([
    customElement('mdui-icon-chat-bubble--sharp')
], IconChatBubble_Sharp);
export { IconChatBubble_Sharp };
