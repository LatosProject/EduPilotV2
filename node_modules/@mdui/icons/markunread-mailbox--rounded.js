import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMarkunreadMailbox_Rounded = class IconMarkunreadMailbox_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M20 6H10v5c0 .55-.45 1-1 1s-1-.45-1-1V4h5c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>');
    }
};
IconMarkunreadMailbox_Rounded.styles = style;
IconMarkunreadMailbox_Rounded = __decorate([
    customElement('mdui-icon-markunread-mailbox--rounded')
], IconMarkunreadMailbox_Rounded);
export { IconMarkunreadMailbox_Rounded };
