import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEventNote_TwoTone = class IconEventNote_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 5h14v2H5z" opacity=".3"/><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zM7 11h10v2H7zm0 4h7v2H7z"/>');
    }
};
IconEventNote_TwoTone.styles = style;
IconEventNote_TwoTone = __decorate([
    customElement('mdui-icon-event-note--two-tone')
], IconEventNote_TwoTone);
export { IconEventNote_TwoTone };
