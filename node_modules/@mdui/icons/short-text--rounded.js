import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconShortText_Rounded = class IconShortText_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M5 9h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm0 4h8c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1z"/>');
    }
};
IconShortText_Rounded.styles = style;
IconShortText_Rounded = __decorate([
    customElement('mdui-icon-short-text--rounded')
], IconShortText_Rounded);
export { IconShortText_Rounded };
