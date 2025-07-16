import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBattery_3Bar_Rounded = class IconBattery_3Bar_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V3c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h2c.55 0 1 .45 1 1zm-2 1H9v8h6V6z"/>');
    }
};
IconBattery_3Bar_Rounded.styles = style;
IconBattery_3Bar_Rounded = __decorate([
    customElement('mdui-icon-battery-3-bar--rounded')
], IconBattery_3Bar_Rounded);
export { IconBattery_3Bar_Rounded };
