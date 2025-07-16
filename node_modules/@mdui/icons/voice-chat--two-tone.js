import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVoiceChat_TwoTone = class IconVoiceChat_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 17.17 5.17 16H20V4H4v13.17zM7 7h7v2.4L17 7v6l-3-2.4V13H7V7z" opacity=".3"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zm-6-5.4 3 2.4V7l-3 2.4V7H7v6h7z"/>');
    }
};
IconVoiceChat_TwoTone.styles = style;
IconVoiceChat_TwoTone = __decorate([
    customElement('mdui-icon-voice-chat--two-tone')
], IconVoiceChat_TwoTone);
export { IconVoiceChat_TwoTone };
