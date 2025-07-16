import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTry_TwoTone = class IconTry_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 17.17 5.17 16H20V4H4v13.17zm6.43-8.74L12 5l1.57 3.43L17 10l-3.43 1.57L12 15l-1.57-3.43L7 10l3.43-1.57z" opacity=".3"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/><path d="m12 15 1.57-3.43L17 10l-3.43-1.57L12 5l-1.57 3.43L7 10l3.43 1.57z"/>');
    }
};
IconTry_TwoTone.styles = style;
IconTry_TwoTone = __decorate([
    customElement('mdui-icon-try--two-tone')
], IconTry_TwoTone);
export { IconTry_TwoTone };
