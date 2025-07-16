import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVerticalAlignBottom_TwoTone = class IconVerticalAlignBottom_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M11 3v10H8l4 4 4-4h-3V3zM4 19h16v2H4z"/>');
    }
};
IconVerticalAlignBottom_TwoTone.styles = style;
IconVerticalAlignBottom_TwoTone = __decorate([
    customElement('mdui-icon-vertical-align-bottom--two-tone')
], IconVerticalAlignBottom_TwoTone);
export { IconVerticalAlignBottom_TwoTone };
