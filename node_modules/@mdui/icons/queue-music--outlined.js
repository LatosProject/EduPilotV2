import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconQueueMusic_Outlined = class IconQueueMusic_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M22 6h-5v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6zm-7 0H3v2h12V6zm0 4H3v2h12v-2zm-4 4H3v2h8v-2z"/>');
    }
};
IconQueueMusic_Outlined.styles = style;
IconQueueMusic_Outlined = __decorate([
    customElement('mdui-icon-queue-music--outlined')
], IconQueueMusic_Outlined);
export { IconQueueMusic_Outlined };
