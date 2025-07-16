import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconScheduleSend_Outlined = class IconScheduleSend_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85-.7.71z"/><path d="m11 12-6-1.5V7.01l8.87 3.74c.94-.47 2-.75 3.13-.75.1 0 .19.01.28.01L3 4v16l7-2.95V17c0-.8.14-1.56.39-2.28L5 16.99V13.5l6-1.5z"/>');
    }
};
IconScheduleSend_Outlined.styles = style;
IconScheduleSend_Outlined = __decorate([
    customElement('mdui-icon-schedule-send--outlined')
], IconScheduleSend_Outlined);
export { IconScheduleSend_Outlined };
