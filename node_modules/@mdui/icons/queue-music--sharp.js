import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconQueueMusic_Sharp = class IconQueueMusic_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/>');
    }
};
IconQueueMusic_Sharp.styles = style;
IconQueueMusic_Sharp = __decorate([
    customElement('mdui-icon-queue-music--sharp')
], IconQueueMusic_Sharp);
export { IconQueueMusic_Sharp };
