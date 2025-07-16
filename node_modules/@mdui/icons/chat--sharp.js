import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChat_Sharp = class IconChat_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 2H2.01L2 22l4-4h16V2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>');
    }
};
IconChat_Sharp.styles = style;
IconChat_Sharp = __decorate([
    customElement('mdui-icon-chat--sharp')
], IconChat_Sharp);
export { IconChat_Sharp };
