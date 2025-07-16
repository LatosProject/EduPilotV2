import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAddToQueue_Sharp = class IconAddToQueue_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 3H1v16h7v2h8v-2h7V3zm-2 14H3V5h18v12zm-5-7v2h-3v3h-2v-3H8v-2h3V7h2v3h3z"/>');
    }
};
IconAddToQueue_Sharp.styles = style;
IconAddToQueue_Sharp = __decorate([
    customElement('mdui-icon-add-to-queue--sharp')
], IconAddToQueue_Sharp);
export { IconAddToQueue_Sharp };
