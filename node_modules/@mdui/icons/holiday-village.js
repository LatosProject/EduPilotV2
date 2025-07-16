import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHolidayVillage = class IconHolidayVillage extends LitElement {
    render() {
        return svgTag('<path d="M18 20V8.35L13.65 4h-2.83L16 9.18V20h2zm4 0V6.69L19.31 4h-2.83L20 7.52V20h2zM8 4l-6 6v10h5v-5h2v5h5V10L8 4zm1 9H7v-2h2v2z"/>');
    }
};
IconHolidayVillage.styles = style;
IconHolidayVillage = __decorate([
    customElement('mdui-icon-holiday-village')
], IconHolidayVillage);
export { IconHolidayVillage };
