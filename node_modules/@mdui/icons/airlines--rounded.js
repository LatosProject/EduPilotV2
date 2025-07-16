import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAirlines_Rounded = class IconAirlines_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M19.59 4h-5.01c-.99 0-1.91.49-2.47 1.3L2 20h17l2.56-13.63C21.79 5.14 20.84 4 19.59 4zM14.5 14a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>');
    }
};
IconAirlines_Rounded.styles = style;
IconAirlines_Rounded = __decorate([
    customElement('mdui-icon-airlines--rounded')
], IconAirlines_Rounded);
export { IconAirlines_Rounded };
