import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVideocam = class IconVideocam extends LitElement {
    render() {
        return svgTag('<path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>');
    }
};
IconVideocam.styles = style;
IconVideocam = __decorate([
    customElement('mdui-icon-videocam')
], IconVideocam);
export { IconVideocam };
