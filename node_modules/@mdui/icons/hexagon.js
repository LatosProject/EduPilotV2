import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHexagon = class IconHexagon extends LitElement {
    render() {
        return svgTag('<path d="M17.2 3H6.8l-5.2 9 5.2 9h10.4l5.2-9z"/>');
    }
};
IconHexagon.styles = style;
IconHexagon = __decorate([
    customElement('mdui-icon-hexagon')
], IconHexagon);
export { IconHexagon };
