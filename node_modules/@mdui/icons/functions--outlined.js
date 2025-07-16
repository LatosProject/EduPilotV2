import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFunctions_Outlined = class IconFunctions_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7V4z"/>');
    }
};
IconFunctions_Outlined.styles = style;
IconFunctions_Outlined = __decorate([
    customElement('mdui-icon-functions--outlined')
], IconFunctions_Outlined);
export { IconFunctions_Outlined };
