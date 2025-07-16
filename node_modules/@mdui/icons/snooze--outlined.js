import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSnooze_Outlined = class IconSnooze_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M9 11h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9v2zm7.056-7.654 1.282-1.535 4.607 3.85-1.28 1.54zM3.336 7.19l-1.28-1.536L6.662 1.81l1.28 1.536zM12 6c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7m0-2a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 4z"/>');
    }
};
IconSnooze_Outlined.styles = style;
IconSnooze_Outlined = __decorate([
    customElement('mdui-icon-snooze--outlined')
], IconSnooze_Outlined);
export { IconSnooze_Outlined };
