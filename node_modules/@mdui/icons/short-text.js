import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconShortText = class IconShortText extends LitElement {
    render() {
        return svgTag('<path d="M4 9h16v2H4V9zm0 4h10v2H4v-2z"/>');
    }
};
IconShortText.styles = style;
IconShortText = __decorate([
    customElement('mdui-icon-short-text')
], IconShortText);
export { IconShortText };
