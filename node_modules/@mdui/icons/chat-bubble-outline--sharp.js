import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChatBubbleOutline_Sharp = class IconChatBubbleOutline_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 2H2v20l4-4h16V2zm-2 14H6l-2 2V4h16v12z"/>');
    }
};
IconChatBubbleOutline_Sharp.styles = style;
IconChatBubbleOutline_Sharp = __decorate([
    customElement('mdui-icon-chat-bubble-outline--sharp')
], IconChatBubbleOutline_Sharp);
export { IconChatBubbleOutline_Sharp };
