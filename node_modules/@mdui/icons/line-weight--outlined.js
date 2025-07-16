import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLineWeight_Outlined = class IconLineWeight_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"/>');
    }
};
IconLineWeight_Outlined.styles = style;
IconLineWeight_Outlined = __decorate([
    customElement('mdui-icon-line-weight--outlined')
], IconLineWeight_Outlined);
export { IconLineWeight_Outlined };
