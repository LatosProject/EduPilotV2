import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBorderOuter_TwoTone = class IconBorderOuter_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M11 11h2v2h-2zm0-4h2v2h-2zm10-4H3v18h18V3zm-2 16H5V5h14v14zm-4-8h2v2h-2zm-8 0h2v2H7zm4 4h2v2h-2z"/>');
    }
};
IconBorderOuter_TwoTone.styles = style;
IconBorderOuter_TwoTone = __decorate([
    customElement('mdui-icon-border-outer--two-tone')
], IconBorderOuter_TwoTone);
export { IconBorderOuter_TwoTone };
