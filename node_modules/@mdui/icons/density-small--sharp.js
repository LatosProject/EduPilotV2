import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDensitySmall_Sharp = class IconDensitySmall_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 2h18v2H3zm0 18h18v2H3zm0-6h18v2H3zm0-6h18v2H3z"/>');
    }
};
IconDensitySmall_Sharp.styles = style;
IconDensitySmall_Sharp = __decorate([
    customElement('mdui-icon-density-small--sharp')
], IconDensitySmall_Sharp);
export { IconDensitySmall_Sharp };
