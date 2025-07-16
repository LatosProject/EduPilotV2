import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFlightClass_Sharp = class IconFlightClass_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M18 4h-6v9h6V4zM9.5 16H18v2H8L5 8V4h2v4l2.5 8zM8 19h10v2H8v-2z"/>');
    }
};
IconFlightClass_Sharp.styles = style;
IconFlightClass_Sharp = __decorate([
    customElement('mdui-icon-flight-class--sharp')
], IconFlightClass_Sharp);
export { IconFlightClass_Sharp };
