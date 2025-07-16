import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDensitySmall_TwoTone = class IconDensitySmall_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 2h18v2H3zm0 18h18v2H3zm0-6h18v2H3zm0-6h18v2H3z"/>');
    }
};
IconDensitySmall_TwoTone.styles = style;
IconDensitySmall_TwoTone = __decorate([
    customElement('mdui-icon-density-small--two-tone')
], IconDensitySmall_TwoTone);
export { IconDensitySmall_TwoTone };
