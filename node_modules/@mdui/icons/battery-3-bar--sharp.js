import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBattery_3Bar_Sharp = class IconBattery_3Bar_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 4v18H7V4h3V2h4v2h3zm-2 2H9v8h6V6z"/>');
    }
};
IconBattery_3Bar_Sharp.styles = style;
IconBattery_3Bar_Sharp = __decorate([
    customElement('mdui-icon-battery-3-bar--sharp')
], IconBattery_3Bar_Sharp);
export { IconBattery_3Bar_Sharp };
