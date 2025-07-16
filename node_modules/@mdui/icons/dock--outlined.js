import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDock_Outlined = class IconDock_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M8 23h8v-2H8v2zm8-21.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM16 15H8V5h8v10z"/>');
    }
};
IconDock_Outlined.styles = style;
IconDock_Outlined = __decorate([
    customElement('mdui-icon-dock--outlined')
], IconDock_Outlined);
export { IconDock_Outlined };
