import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconQueuePlayNext_Sharp = class IconQueuePlayNext_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 3H1v16h7v2h8v-2h2v-2H3V5h18v8h2V3zm-10 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z"/>');
    }
};
IconQueuePlayNext_Sharp.styles = style;
IconQueuePlayNext_Sharp = __decorate([
    customElement('mdui-icon-queue-play-next--sharp')
], IconQueuePlayNext_Sharp);
export { IconQueuePlayNext_Sharp };
