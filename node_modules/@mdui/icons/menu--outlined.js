import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMenu_Outlined = class IconMenu_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>');
    }
};
IconMenu_Outlined.styles = style;
IconMenu_Outlined = __decorate([
    customElement('mdui-icon-menu--outlined')
], IconMenu_Outlined);
export { IconMenu_Outlined };
