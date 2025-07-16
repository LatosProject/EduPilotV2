import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBattery_6Bar_Rounded = class IconBattery_6Bar_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V3c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h2c.55 0 1 .45 1 1zm-2 1H9v2h6V6z"/>');
    }
};
IconBattery_6Bar_Rounded.styles = style;
IconBattery_6Bar_Rounded = __decorate([
    customElement('mdui-icon-battery-6-bar--rounded')
], IconBattery_6Bar_Rounded);
export { IconBattery_6Bar_Rounded };
