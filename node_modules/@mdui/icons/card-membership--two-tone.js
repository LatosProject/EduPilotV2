import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCardMembership_TwoTone = class IconCardMembership_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 4h16v6H4zm0 9h16v2H4z" opacity=".3"/><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"/>');
    }
};
IconCardMembership_TwoTone.styles = style;
IconCardMembership_TwoTone = __decorate([
    customElement('mdui-icon-card-membership--two-tone')
], IconCardMembership_TwoTone);
export { IconCardMembership_TwoTone };
