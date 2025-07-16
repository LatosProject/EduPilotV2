import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDensityLarge_TwoTone = class IconDensityLarge_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 3h18v2H3zm0 16h18v2H3z"/>');
    }
};
IconDensityLarge_TwoTone.styles = style;
IconDensityLarge_TwoTone = __decorate([
    customElement('mdui-icon-density-large--two-tone')
], IconDensityLarge_TwoTone);
export { IconDensityLarge_TwoTone };
