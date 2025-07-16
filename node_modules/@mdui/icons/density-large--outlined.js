import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDensityLarge_Outlined = class IconDensityLarge_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M3 3h18v2H3zm0 16h18v2H3z"/>');
    }
};
IconDensityLarge_Outlined.styles = style;
IconDensityLarge_Outlined = __decorate([
    customElement('mdui-icon-density-large--outlined')
], IconDensityLarge_Outlined);
export { IconDensityLarge_Outlined };
