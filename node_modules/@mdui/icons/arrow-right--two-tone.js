import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowRight_TwoTone = class IconArrowRight_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m10 17 5-5-5-5v10z"/>');
    }
};
IconArrowRight_TwoTone.styles = style;
IconArrowRight_TwoTone = __decorate([
    customElement('mdui-icon-arrow-right--two-tone')
], IconArrowRight_TwoTone);
export { IconArrowRight_TwoTone };
