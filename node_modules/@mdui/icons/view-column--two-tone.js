import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewColumn_TwoTone = class IconViewColumn_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M8.33 17H5V7h3.33v10zm5.34 0h-3.33V7h3.33v10zM19 17h-3.33V7H19v10z" opacity=".3"/><path d="M3 5v14h18V5H3zm5.33 12H5V7h3.33v10zm5.34 0h-3.33V7h3.33v10zM19 17h-3.33V7H19v10z"/>');
    }
};
IconViewColumn_TwoTone.styles = style;
IconViewColumn_TwoTone = __decorate([
    customElement('mdui-icon-view-column--two-tone')
], IconViewColumn_TwoTone);
export { IconViewColumn_TwoTone };
