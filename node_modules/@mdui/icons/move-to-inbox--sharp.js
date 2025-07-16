import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMoveToInbox_Sharp = class IconMoveToInbox_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zm-2 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"/>');
    }
};
IconMoveToInbox_Sharp.styles = style;
IconMoveToInbox_Sharp = __decorate([
    customElement('mdui-icon-move-to-inbox--sharp')
], IconMoveToInbox_Sharp);
export { IconMoveToInbox_Sharp };
