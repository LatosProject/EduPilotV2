import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLight_TwoTone = class IconLight_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M10 17c0 1.1.9 2 2 2s2-.9 2-2h-4z" opacity=".3"/><path d="M13 6.06V3h-2v3.06c-4.5.5-8 4.31-8 8.93C3 16.1 3.9 17 5.01 17H8c0 2.21 1.79 4 4 4s4-1.79 4-4h2.99c1.11 0 2.01-.9 2.01-2.01 0-4.62-3.5-8.43-8-8.93zM12 19c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm0-4H5c0-3.86 3.14-7 7-7s7 3.14 7 7h-7z"/>');
    }
};
IconLight_TwoTone.styles = style;
IconLight_TwoTone = __decorate([
    customElement('mdui-icon-light--two-tone')
], IconLight_TwoTone);
export { IconLight_TwoTone };
