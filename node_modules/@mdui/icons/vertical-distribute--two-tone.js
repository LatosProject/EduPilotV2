import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVerticalDistribute_TwoTone = class IconVerticalDistribute_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M22 2v2H2V2h20zM7 10.5v3h10v-3H7zM2 20v2h20v-2H2z"/>');
    }
};
IconVerticalDistribute_TwoTone.styles = style;
IconVerticalDistribute_TwoTone = __decorate([
    customElement('mdui-icon-vertical-distribute--two-tone')
], IconVerticalDistribute_TwoTone);
export { IconVerticalDistribute_TwoTone };
