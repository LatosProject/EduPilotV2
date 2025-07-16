import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDateRange_Sharp = class IconDateRange_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm4-7h-3V2h-2v2H8V2H6v2H3v18h18V4zm-2 16H5V9h14v11z"/>');
    }
};
IconDateRange_Sharp.styles = style;
IconDateRange_Sharp = __decorate([
    customElement('mdui-icon-date-range--sharp')
], IconDateRange_Sharp);
export { IconDateRange_Sharp };
