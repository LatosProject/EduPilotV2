import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHeadsetMic_TwoTone = class IconHeadsetMic_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 17c0 .55.45 1 1 1h1v-4H5v3zm12-3h2v4h-2z" opacity=".3"/><path d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10a9 9 0 0 0-9-9zM7 14v4H6c-.55 0-1-.45-1-1v-3h2zm12 4h-2v-4h2v4z"/>');
    }
};
IconHeadsetMic_TwoTone.styles = style;
IconHeadsetMic_TwoTone = __decorate([
    customElement('mdui-icon-headset-mic--two-tone')
], IconHeadsetMic_TwoTone);
export { IconHeadsetMic_TwoTone };
