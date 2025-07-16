import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBattery_2Bar_Outlined = class IconBattery_2Bar_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V2h4v2h2c.55 0 1 .45 1 1zm-2 1H9v10h6V6z"/>');
    }
};
IconBattery_2Bar_Outlined.styles = style;
IconBattery_2Bar_Outlined = __decorate([
    customElement('mdui-icon-battery-2-bar--outlined')
], IconBattery_2Bar_Outlined);
export { IconBattery_2Bar_Outlined };
