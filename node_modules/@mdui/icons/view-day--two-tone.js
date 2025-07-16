import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewDay_TwoTone = class IconViewDay_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 10h15v4H4z" opacity=".3"/><path d="M2 18h19v2H2zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6H4v-4h15v4zM2 4h19v2H2z"/>');
    }
};
IconViewDay_TwoTone.styles = style;
IconViewDay_TwoTone = __decorate([
    customElement('mdui-icon-view-day--two-tone')
], IconViewDay_TwoTone);
export { IconViewDay_TwoTone };
