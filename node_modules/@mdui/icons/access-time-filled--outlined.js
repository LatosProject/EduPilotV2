import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAccessTimeFilled_Outlined = class IconAccessTimeFilled_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71-1.42 1.41z"/>');
    }
};
IconAccessTimeFilled_Outlined.styles = style;
IconAccessTimeFilled_Outlined = __decorate([
    customElement('mdui-icon-access-time-filled--outlined')
], IconAccessTimeFilled_Outlined);
export { IconAccessTimeFilled_Outlined };
