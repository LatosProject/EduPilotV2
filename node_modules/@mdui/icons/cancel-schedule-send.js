import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCancelScheduleSend = class IconCancelScheduleSend extends LitElement {
    render() {
        return svgTag('<path d="M16.5 9c-.42 0-.83.04-1.24.11L1.01 3 1 10l9 2-9 2 .01 7 8.07-3.46C9.59 21.19 12.71 24 16.5 24c4.14 0 7.5-3.36 7.5-7.5S20.64 9 16.5 9zm0 13c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z"/><path d="m18.27 14.03-1.77 1.76-1.77-1.76-.7.7 1.76 1.77-1.76 1.77.7.7 1.77-1.76 1.77 1.76.7-.7-1.76-1.77 1.76-1.77z"/>');
    }
};
IconCancelScheduleSend.styles = style;
IconCancelScheduleSend = __decorate([
    customElement('mdui-icon-cancel-schedule-send')
], IconCancelScheduleSend);
export { IconCancelScheduleSend };
