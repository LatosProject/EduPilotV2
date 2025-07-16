import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLineWeight_Sharp = class IconLineWeight_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"/>');
    }
};
IconLineWeight_Sharp.styles = style;
IconLineWeight_Sharp = __decorate([
    customElement('mdui-icon-line-weight--sharp')
], IconLineWeight_Sharp);
export { IconLineWeight_Sharp };
