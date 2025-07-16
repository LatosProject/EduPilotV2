import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVolumeUp_TwoTone = class IconVolumeUp_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 13h2.83L10 15.17V8.83L7.83 11H5z" opacity=".3"/><path d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zm4-.86v8.05c1.48-.73 2.5-2.25 2.5-4.02A4.5 4.5 0 0 0 14 7.97zm0-4.74v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"/>');
    }
};
IconVolumeUp_TwoTone.styles = style;
IconVolumeUp_TwoTone = __decorate([
    customElement('mdui-icon-volume-up--two-tone')
], IconVolumeUp_TwoTone);
export { IconVolumeUp_TwoTone };
