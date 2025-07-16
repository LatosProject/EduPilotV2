import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTv_Sharp = class IconTv_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 3H1v16h7v2h8v-2h6.99L23 3zm-2 14H3V5h18v12z"/>');
    }
};
IconTv_Sharp.styles = style;
IconTv_Sharp = __decorate([
    customElement('mdui-icon-tv--sharp')
], IconTv_Sharp);
export { IconTv_Sharp };
