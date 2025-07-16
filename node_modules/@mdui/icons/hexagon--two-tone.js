import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHexagon_TwoTone = class IconHexagon_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M16.05 19h-8.1l-4.04-7 4.04-7h8.1l4.04 7z" opacity=".3"/><path d="M17.2 3H6.8l-5.2 9 5.2 9h10.4l5.2-9-5.2-9zm-1.15 16h-8.1l-4.04-7 4.04-7h8.09l4.04 7-4.03 7z"/>');
    }
};
IconHexagon_TwoTone.styles = style;
IconHexagon_TwoTone = __decorate([
    customElement('mdui-icon-hexagon--two-tone')
], IconHexagon_TwoTone);
export { IconHexagon_TwoTone };
