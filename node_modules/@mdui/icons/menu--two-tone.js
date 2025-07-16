import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMenu_TwoTone = class IconMenu_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>');
    }
};
IconMenu_TwoTone.styles = style;
IconMenu_TwoTone = __decorate([
    customElement('mdui-icon-menu--two-tone')
], IconMenu_TwoTone);
export { IconMenu_TwoTone };
