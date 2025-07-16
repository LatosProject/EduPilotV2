import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMarkAsUnread_TwoTone = class IconMarkAsUnread_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M13.5 13.33 20 10H7z" opacity=".3"/><path d="M7 12v7h13v-7l-6.5 3.33z" opacity=".3"/><path d="M16.23 7h2.6c-.06-.47-.36-.94-.79-1.17L10.5 2 2.8 5.83c-.48.26-.8.81-.8 1.34V15c0 1.1.9 2 2 2V7.4L10.5 4l5.73 3z"/><path d="M20 8H7c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm0 11H7v-7l6.5 3.33L20 12v7zm-6.5-5.67L7 10h13l-6.5 3.33z"/>');
    }
};
IconMarkAsUnread_TwoTone.styles = style;
IconMarkAsUnread_TwoTone = __decorate([
    customElement('mdui-icon-mark-as-unread--two-tone')
], IconMarkAsUnread_TwoTone);
export { IconMarkAsUnread_TwoTone };
