import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLowPriority_Outlined = class IconLowPriority_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M14 5h8v2h-8V5zm0 5.5h8v2h-8v-2zm0 5.5h8v2h-8v-2zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"/>');
    }
};
IconLowPriority_Outlined.styles = style;
IconLowPriority_Outlined = __decorate([
    customElement('mdui-icon-low-priority--outlined')
], IconLowPriority_Outlined);
export { IconLowPriority_Outlined };
