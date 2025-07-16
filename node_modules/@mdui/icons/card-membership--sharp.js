import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCardMembership_Sharp = class IconCardMembership_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 2H2v15h6v5l4-2 4 2v-5h6V2zm-2 13H4v-2h16v2zm0-5H4V4h16v6z"/>');
    }
};
IconCardMembership_Sharp.styles = style;
IconCardMembership_Sharp = __decorate([
    customElement('mdui-icon-card-membership--sharp')
], IconCardMembership_Sharp);
export { IconCardMembership_Sharp };
