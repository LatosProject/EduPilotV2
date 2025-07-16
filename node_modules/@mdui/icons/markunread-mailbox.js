import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMarkunreadMailbox = class IconMarkunreadMailbox extends LitElement {
    render() {
        return svgTag('<path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>');
    }
};
IconMarkunreadMailbox.styles = style;
IconMarkunreadMailbox = __decorate([
    customElement('mdui-icon-markunread-mailbox')
], IconMarkunreadMailbox);
export { IconMarkunreadMailbox };
