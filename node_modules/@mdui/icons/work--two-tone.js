import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWork_TwoTone = class IconWork_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 8h16v11H4z" opacity=".3"/><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z"/>');
    }
};
IconWork_TwoTone.styles = style;
IconWork_TwoTone = __decorate([
    customElement('mdui-icon-work--two-tone')
], IconWork_TwoTone);
export { IconWork_TwoTone };
