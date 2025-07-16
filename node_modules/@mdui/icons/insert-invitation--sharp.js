import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconInsertInvitation_Sharp = class IconInsertInvitation_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H3.01v18H21V3h-3V1h-2zm3 18H5V8h14v11z"/>');
    }
};
IconInsertInvitation_Sharp.styles = style;
IconInsertInvitation_Sharp = __decorate([
    customElement('mdui-icon-insert-invitation--sharp')
], IconInsertInvitation_Sharp);
export { IconInsertInvitation_Sharp };
