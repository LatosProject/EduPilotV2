import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAreaChart_Sharp = class IconAreaChart_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 13v7h18v-1.5l-9-7L8 17l-5-4zm0-6 4 3 5-7 5 4h4v8.97l-9.4-7.31-3.98 5.48L3 10.44V7z"/>');
    }
};
IconAreaChart_Sharp.styles = style;
IconAreaChart_Sharp = __decorate([
    customElement('mdui-icon-area-chart--sharp')
], IconAreaChart_Sharp);
export { IconAreaChart_Sharp };
