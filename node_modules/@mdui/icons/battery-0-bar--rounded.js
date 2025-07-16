import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBattery_0Bar_Rounded = class IconBattery_0Bar_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V3c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h2c.55 0 1 .45 1 1zm-2 1H9v14h6V6z"/>');
    }
};
IconBattery_0Bar_Rounded.styles = style;
IconBattery_0Bar_Rounded = __decorate([
    customElement('mdui-icon-battery-0-bar--rounded')
], IconBattery_0Bar_Rounded);
export { IconBattery_0Bar_Rounded };
