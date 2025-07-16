import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMarkunreadMailbox_Outlined = class IconMarkunreadMailbox_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 6H10v2h10v12H4V8h2v4h2V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>');
    }
};
IconMarkunreadMailbox_Outlined.styles = style;
IconMarkunreadMailbox_Outlined = __decorate([
    customElement('mdui-icon-markunread-mailbox--outlined')
], IconMarkunreadMailbox_Outlined);
export { IconMarkunreadMailbox_Outlined };
