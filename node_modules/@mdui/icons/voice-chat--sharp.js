import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVoiceChat_Sharp = class IconVoiceChat_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 2H2.01L2 22l4-4h16V2zm-4 12-4-3.2V14H6V6h8v3.2L18 6v8z"/>');
    }
};
IconVoiceChat_Sharp.styles = style;
IconVoiceChat_Sharp = __decorate([
    customElement('mdui-icon-voice-chat--sharp')
], IconVoiceChat_Sharp);
export { IconVoiceChat_Sharp };
