import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWeekend_Sharp = class IconWeekend_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M6 9.03V14h12V9.03h2V5H4v4.03zM19 15H5v-4.97H1V19h22v-8.97h-4z"/>');
    }
};
IconWeekend_Sharp.styles = style;
IconWeekend_Sharp = __decorate([
    customElement('mdui-icon-weekend--sharp')
], IconWeekend_Sharp);
export { IconWeekend_Sharp };
