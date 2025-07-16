import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVideocam_Outlined = class IconVideocam_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z"/>');
    }
};
IconVideocam_Outlined.styles = style;
IconVideocam_Outlined = __decorate([
    customElement('mdui-icon-videocam--outlined')
], IconVideocam_Outlined);
export { IconVideocam_Outlined };
