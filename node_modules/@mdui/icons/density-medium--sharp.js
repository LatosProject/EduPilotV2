import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDensityMedium_Sharp = class IconDensityMedium_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3z"/>');
    }
};
IconDensityMedium_Sharp.styles = style;
IconDensityMedium_Sharp = __decorate([
    customElement('mdui-icon-density-medium--sharp')
], IconDensityMedium_Sharp);
export { IconDensityMedium_Sharp };
