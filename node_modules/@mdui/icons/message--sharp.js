import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMessage_Sharp = class IconMessage_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 2H2.01L2 22l4-4h16V2zm-4 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>');
    }
};
IconMessage_Sharp.styles = style;
IconMessage_Sharp = __decorate([
    customElement('mdui-icon-message--sharp')
], IconMessage_Sharp);
export { IconMessage_Sharp };
