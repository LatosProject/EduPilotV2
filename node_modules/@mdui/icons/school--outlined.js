import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSchool_Outlined = class IconSchool_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>');
    }
};
IconSchool_Outlined.styles = style;
IconSchool_Outlined = __decorate([
    customElement('mdui-icon-school--outlined')
], IconSchool_Outlined);
export { IconSchool_Outlined };
