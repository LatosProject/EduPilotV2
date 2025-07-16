import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVideocam_TwoTone = class IconVideocam_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 8h10v8H5z" opacity=".3"/><path d="M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7zm-2 9H5V8h10v8z"/>');
    }
};
IconVideocam_TwoTone.styles = style;
IconVideocam_TwoTone = __decorate([
    customElement('mdui-icon-videocam--two-tone')
], IconVideocam_TwoTone);
export { IconVideocam_TwoTone };
