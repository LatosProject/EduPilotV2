import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconForwardToInbox_Outlined = class IconForwardToInbox_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H4V8l8 5 8-5v5h2V6c0-1.1-.9-2-2-2zm-8 7L4 6h16l-8 5zm7 4 4 4-4 4v-3h-4v-2h4v-3z"/>');
    }
};
IconForwardToInbox_Outlined.styles = style;
IconForwardToInbox_Outlined = __decorate([
    customElement('mdui-icon-forward-to-inbox--outlined')
], IconForwardToInbox_Outlined);
export { IconForwardToInbox_Outlined };
