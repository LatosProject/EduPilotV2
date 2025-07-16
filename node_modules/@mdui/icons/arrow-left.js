import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowLeft = class IconArrowLeft extends LitElement {
    render() {
        return svgTag('<path d="m14 7-5 5 5 5V7z"/>');
    }
};
IconArrowLeft.styles = style;
IconArrowLeft = __decorate([
    customElement('mdui-icon-arrow-left')
], IconArrowLeft);
export { IconArrowLeft };
