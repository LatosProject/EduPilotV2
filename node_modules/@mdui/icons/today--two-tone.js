import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconToday_TwoTone = class IconToday_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zm-7 4H7v5h5v-5z"/><path d="M5 5h14v2H5z" opacity=".3"/>');
    }
};
IconToday_TwoTone.styles = style;
IconToday_TwoTone = __decorate([
    customElement('mdui-icon-today--two-tone')
], IconToday_TwoTone);
export { IconToday_TwoTone };
