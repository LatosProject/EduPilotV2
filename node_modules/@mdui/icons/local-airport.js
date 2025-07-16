import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLocalAirport = class IconLocalAirport extends LitElement {
    render() {
        return svgTag('<path d="M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-5.5L22 16z"/>');
    }
};
IconLocalAirport.styles = style;
IconLocalAirport = __decorate([
    customElement('mdui-icon-local-airport')
], IconLocalAirport);
export { IconLocalAirport };
