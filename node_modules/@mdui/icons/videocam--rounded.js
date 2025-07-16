import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVideocam_Rounded = class IconVideocam_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l2.29 2.29c.63.63 1.71.18 1.71-.71V8.91c0-.89-1.08-1.34-1.71-.71L17 10.5z"/>');
    }
};
IconVideocam_Rounded.styles = style;
IconVideocam_Rounded = __decorate([
    customElement('mdui-icon-videocam--rounded')
], IconVideocam_Rounded);
export { IconVideocam_Rounded };
