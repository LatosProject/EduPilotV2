import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAddToQueue_Outlined = class IconAddToQueue_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M11 15h2v-3h3v-2h-3V7h-2v3H8v2h3zM21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 14H3V5h18v12z"/>');
    }
};
IconAddToQueue_Outlined.styles = style;
IconAddToQueue_Outlined = __decorate([
    customElement('mdui-icon-add-to-queue--outlined')
], IconAddToQueue_Outlined);
export { IconAddToQueue_Outlined };
