import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAccountBalance_Sharp = class IconAccountBalance_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/>');
    }
};
IconAccountBalance_Sharp.styles = style;
IconAccountBalance_Sharp = __decorate([
    customElement('mdui-icon-account-balance--sharp')
], IconAccountBalance_Sharp);
export { IconAccountBalance_Sharp };
