import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMarkChatUnread_Sharp = class IconMarkChatUnread_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 6.98V18H6l-4 4V2h12.1A5.002 5.002 0 0 0 19 8c1.13 0 2.16-.39 3-1.02zM16 3c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"/>');
    }
};
IconMarkChatUnread_Sharp.styles = style;
IconMarkChatUnread_Sharp = __decorate([
    customElement('mdui-icon-mark-chat-unread--sharp')
], IconMarkChatUnread_Sharp);
export { IconMarkChatUnread_Sharp };
