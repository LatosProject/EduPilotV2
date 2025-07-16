import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowForwardIos_TwoTone = class IconArrowForwardIos_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"/>');
    }
};
IconArrowForwardIos_TwoTone.styles = style;
IconArrowForwardIos_TwoTone = __decorate([
    customElement('mdui-icon-arrow-forward-ios--two-tone')
], IconArrowForwardIos_TwoTone);
export { IconArrowForwardIos_TwoTone };
