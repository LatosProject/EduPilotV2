import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFlight_TwoTone = class IconFlight_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m10 19-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19z"/>');
    }
};
IconFlight_TwoTone.styles = style;
IconFlight_TwoTone = __decorate([
    customElement('mdui-icon-flight--two-tone')
], IconFlight_TwoTone);
export { IconFlight_TwoTone };
