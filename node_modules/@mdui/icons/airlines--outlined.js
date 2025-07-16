import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAirlines_Outlined = class IconAirlines_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M17.34 18H5.8l8.25-12h5.54l-2.25 12zM13 4 2 20h17l3-16h-9zm1.5 5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5z"/>');
    }
};
IconAirlines_Outlined.styles = style;
IconAirlines_Outlined = __decorate([
    customElement('mdui-icon-airlines--outlined')
], IconAirlines_Outlined);
export { IconAirlines_Outlined };
