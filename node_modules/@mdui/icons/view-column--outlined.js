import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewColumn_Outlined = class IconViewColumn_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M3 5v14h18V5H3zm5.33 12H5V7h3.33v10zm5.34 0h-3.33V7h3.33v10zM19 17h-3.33V7H19v10z"/>');
    }
};
IconViewColumn_Outlined.styles = style;
IconViewColumn_Outlined = __decorate([
    customElement('mdui-icon-view-column--outlined')
], IconViewColumn_Outlined);
export { IconViewColumn_Outlined };
