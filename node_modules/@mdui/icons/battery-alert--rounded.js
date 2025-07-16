import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBatteryAlert_Rounded = class IconBatteryAlert_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.34 22h7.32c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM13 18h-2v-2h2v2zm0-5c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1s1 .45 1 1v3z"/>');
    }
};
IconBatteryAlert_Rounded.styles = style;
IconBatteryAlert_Rounded = __decorate([
    customElement('mdui-icon-battery-alert--rounded')
], IconBatteryAlert_Rounded);
export { IconBatteryAlert_Rounded };
