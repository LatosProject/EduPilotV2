import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowRightAlt_TwoTone = class IconArrowRightAlt_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>');
    }
};
IconArrowRightAlt_TwoTone.styles = style;
IconArrowRightAlt_TwoTone = __decorate([
    customElement('mdui-icon-arrow-right-alt--two-tone')
], IconArrowRightAlt_TwoTone);
export { IconArrowRightAlt_TwoTone };
