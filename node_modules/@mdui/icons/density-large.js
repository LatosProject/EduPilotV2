import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDensityLarge = class IconDensityLarge extends LitElement {
    render() {
        return svgTag('<path d="M3 3h18v2H3zm0 16h18v2H3z"/>');
    }
};
IconDensityLarge.styles = style;
IconDensityLarge = __decorate([
    customElement('mdui-icon-density-large')
], IconDensityLarge);
export { IconDensityLarge };
