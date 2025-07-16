import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMarkChatRead_Outlined = class IconMarkChatRead_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M12 18H6l-4 4V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v7h-2V4H4v12h8v2zm11-3.66-1.41-1.41-4.24 4.24-2.12-2.12-1.41 1.41L17.34 20 23 14.34z"/>');
    }
};
IconMarkChatRead_Outlined.styles = style;
IconMarkChatRead_Outlined = __decorate([
    customElement('mdui-icon-mark-chat-read--outlined')
], IconMarkChatRead_Outlined);
export { IconMarkChatRead_Outlined };
