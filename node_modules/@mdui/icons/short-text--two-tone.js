import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconShortText_TwoTone = class IconShortText_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 9h16v2H4zm0 4h10v2H4z"/>');
    }
};
IconShortText_TwoTone.styles = style;
IconShortText_TwoTone = __decorate([
    customElement('mdui-icon-short-text--two-tone')
], IconShortText_TwoTone);
export { IconShortText_TwoTone };
