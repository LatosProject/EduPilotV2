import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBattery_5Bar = class IconBattery_5Bar extends LitElement {
    render() {
        return svgTag('<path d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V2h4v2h2c.55 0 1 .45 1 1zm-2 1H9v4h6V6z"/>');
    }
};
IconBattery_5Bar.styles = style;
IconBattery_5Bar = __decorate([
    customElement('mdui-icon-battery-5-bar')
], IconBattery_5Bar);
export { IconBattery_5Bar };
