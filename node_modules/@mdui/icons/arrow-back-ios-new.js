import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowBackIosNew = class IconArrowBackIosNew extends LitElement {
    render() {
        return svgTag('<path d="M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"/>');
    }
};
IconArrowBackIosNew.styles = style;
IconArrowBackIosNew = __decorate([
    customElement('mdui-icon-arrow-back-ios-new')
], IconArrowBackIosNew);
export { IconArrowBackIosNew };
