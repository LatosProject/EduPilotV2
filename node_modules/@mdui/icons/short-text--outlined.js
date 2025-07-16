import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconShortText_Outlined = class IconShortText_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M4 9h16v2H4V9zm0 4h10v2H4v-2z"/>');
    }
};
IconShortText_Outlined.styles = style;
IconShortText_Outlined = __decorate([
    customElement('mdui-icon-short-text--outlined')
], IconShortText_Outlined);
export { IconShortText_Outlined };
