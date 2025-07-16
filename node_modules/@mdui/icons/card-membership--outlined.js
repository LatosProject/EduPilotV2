import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCardMembership_Outlined = class IconCardMembership_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"/>');
    }
};
IconCardMembership_Outlined.styles = style;
IconCardMembership_Outlined = __decorate([
    customElement('mdui-icon-card-membership--outlined')
], IconCardMembership_Outlined);
export { IconCardMembership_Outlined };
