import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChatBubbleOutline_Rounded = class IconChatBubbleOutline_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M20 4v12H5.17L4 17.17V4h16m0-2H4c-1.1 0-2 .9-2 2v15.59c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>');
    }
};
IconChatBubbleOutline_Rounded.styles = style;
IconChatBubbleOutline_Rounded = __decorate([
    customElement('mdui-icon-chat-bubble-outline--rounded')
], IconChatBubbleOutline_Rounded);
export { IconChatBubbleOutline_Rounded };
