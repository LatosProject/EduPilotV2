import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconForwardToInbox_Sharp = class IconForwardToInbox_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 4H2v16h11v-2H4V8l8 5 8-5v5h2V4zm-10 7L4 6h16l-8 5zm7 4 4 4-4 4v-3h-4v-2h4v-3z"/>');
    }
};
IconForwardToInbox_Sharp.styles = style;
IconForwardToInbox_Sharp = __decorate([
    customElement('mdui-icon-forward-to-inbox--sharp')
], IconForwardToInbox_Sharp);
export { IconForwardToInbox_Sharp };
