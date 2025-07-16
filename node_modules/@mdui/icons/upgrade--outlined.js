import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconUpgrade_Outlined = class IconUpgrade_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M16 18v2H8v-2h8zM11 7.99V16h2V7.99h3L12 4 8 7.99h3z"/>');
    }
};
IconUpgrade_Outlined.styles = style;
IconUpgrade_Outlined = __decorate([
    customElement('mdui-icon-upgrade--outlined')
], IconUpgrade_Outlined);
export { IconUpgrade_Outlined };
