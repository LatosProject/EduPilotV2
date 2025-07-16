import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAreaChart_Outlined = class IconAreaChart_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m17 7-5-4-5 7-4-3v13h18V7h-4zm2 9.95-7-5.45L8 17l-3-2.4V11l2.44 1.83 4.96-6.95L16.3 9H19v7.95z"/>');
    }
};
IconAreaChart_Outlined.styles = style;
IconAreaChart_Outlined = __decorate([
    customElement('mdui-icon-area-chart--outlined')
], IconAreaChart_Outlined);
export { IconAreaChart_Outlined };
