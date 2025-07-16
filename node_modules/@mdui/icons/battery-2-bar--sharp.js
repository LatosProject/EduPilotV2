import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBattery_2Bar_Sharp = class IconBattery_2Bar_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 4v18H7V4h3V2h4v2h3zm-2 2H9v10h6V6z"/>');
    }
};
IconBattery_2Bar_Sharp.styles = style;
IconBattery_2Bar_Sharp = __decorate([
    customElement('mdui-icon-battery-2-bar--sharp')
], IconBattery_2Bar_Sharp);
export { IconBattery_2Bar_Sharp };
