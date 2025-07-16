import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconInsertInvitation_TwoTone = class IconInsertInvitation_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M19 5H5v2h14z" opacity=".3"/><path d="M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2zM5 7V5h14v2H5zm0 2h14v10H5V9zm7 3h5v5h-5z"/>');
    }
};
IconInsertInvitation_TwoTone.styles = style;
IconInsertInvitation_TwoTone = __decorate([
    customElement('mdui-icon-insert-invitation--two-tone')
], IconInsertInvitation_TwoTone);
export { IconInsertInvitation_TwoTone };
