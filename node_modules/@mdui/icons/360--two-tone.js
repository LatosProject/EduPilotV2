import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let Icon360_TwoTone = class Icon360_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M9 16.77V20l4-4-4-4v2.73c-3.15-.56-5-1.9-5-2.73 0-1.06 3.04-3 8-3s8 1.94 8 3c0 .73-1.46 1.89-4 2.53v2.05c3.53-.77 6-2.53 6-4.58 0-2.76-4.48-5-10-5S2 9.24 2 12c0 2.24 2.94 4.13 7 4.77z"/>');
    }
};
Icon360_TwoTone.styles = style;
Icon360_TwoTone = __decorate([
    customElement('mdui-icon-360--two-tone')
], Icon360_TwoTone);
export { Icon360_TwoTone };
