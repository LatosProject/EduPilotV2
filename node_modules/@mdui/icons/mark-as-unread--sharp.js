import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMarkAsUnread_Sharp = class IconMarkAsUnread_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M16.23 7h4.12L10.5 2 2 6.21V17h2V7.4L10.5 4z"/><path d="M5 8v13h17V8H5zm15 4-6.5 3.33L7 12v-2l6.5 3.33L20 10v2z"/>');
    }
};
IconMarkAsUnread_Sharp.styles = style;
IconMarkAsUnread_Sharp = __decorate([
    customElement('mdui-icon-mark-as-unread--sharp')
], IconMarkAsUnread_Sharp);
export { IconMarkAsUnread_Sharp };
