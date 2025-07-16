import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLineWeight = class IconLineWeight extends LitElement {
    render() {
        return svgTag('<path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"/>');
    }
};
IconLineWeight.styles = style;
IconLineWeight = __decorate([
    customElement('mdui-icon-line-weight')
], IconLineWeight);
export { IconLineWeight };
