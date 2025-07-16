import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDensityMedium_Rounded = class IconDensityMedium_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M4 5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm16 14H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zm0-8H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1z"/>');
    }
};
IconDensityMedium_Rounded.styles = style;
IconDensityMedium_Rounded = __decorate([
    customElement('mdui-icon-density-medium--rounded')
], IconDensityMedium_Rounded);
export { IconDensityMedium_Rounded };
