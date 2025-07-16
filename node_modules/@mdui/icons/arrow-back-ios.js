import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowBackIos = class IconArrowBackIos extends LitElement {
    render() {
        return svgTag('<path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/>');
    }
};
IconArrowBackIos.styles = style;
IconArrowBackIos = __decorate([
    customElement('mdui-icon-arrow-back-ios')
], IconArrowBackIos);
export { IconArrowBackIos };
