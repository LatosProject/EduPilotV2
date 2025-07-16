import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTextRotationDown = class IconTextRotationDown extends LitElement {
    render() {
        return svgTag('<path d="M21 12v-1.5L10 5.75v2.1l2.2.9v5l-2.2.9v2.1L21 12zm-7-2.62 5.02 1.87L14 13.12V9.38zM6 19.75l3-3H7V4.25H5v12.5H3l3 3z"/>');
    }
};
IconTextRotationDown.styles = style;
IconTextRotationDown = __decorate([
    customElement('mdui-icon-text-rotation-down')
], IconTextRotationDown);
export { IconTextRotationDown };
