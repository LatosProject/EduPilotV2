import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTextsms_TwoTone = class IconTextsms_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m4 18 2-2h14V4H4v14zm11-9h2v2h-2V9zm-4 0h2v2h-2V9zM7 9h2v2H7V9z" opacity=".3"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/>');
    }
};
IconTextsms_TwoTone.styles = style;
IconTextsms_TwoTone = __decorate([
    customElement('mdui-icon-textsms--two-tone')
], IconTextsms_TwoTone);
export { IconTextsms_TwoTone };
