import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFlightClass_TwoTone = class IconFlightClass_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M14 6h2v5h-2z" opacity=".3"/><path d="M16 4h-2c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 7h-2V6h2v5zm-6.5 5H18v2H9.49c-.88 0-1.66-.58-1.92-1.43L5 8V4h2v4l2.5 8zM8 19h10v2H8v-2z"/>');
    }
};
IconFlightClass_TwoTone.styles = style;
IconFlightClass_TwoTone = __decorate([
    customElement('mdui-icon-flight-class--two-tone')
], IconFlightClass_TwoTone);
export { IconFlightClass_TwoTone };
