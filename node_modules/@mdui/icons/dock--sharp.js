import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDock_Sharp = class IconDock_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M8 23h8v-2H8v2zM18 1.01 6 1v18h12V1.01zM16 15H8V5h8v10z"/>');
    }
};
IconDock_Sharp.styles = style;
IconDock_Sharp = __decorate([
    customElement('mdui-icon-dock--sharp')
], IconDock_Sharp);
export { IconDock_Sharp };
