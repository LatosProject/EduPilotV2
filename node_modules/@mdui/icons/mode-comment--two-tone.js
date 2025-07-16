import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconModeComment_TwoTone = class IconModeComment_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm0 15.17L18.83 16H4V4h16v13.17z"/><path d="M4 4v12h14.83L20 17.17V4z" opacity=".3"/>');
    }
};
IconModeComment_TwoTone.styles = style;
IconModeComment_TwoTone = __decorate([
    customElement('mdui-icon-mode-comment--two-tone')
], IconModeComment_TwoTone);
export { IconModeComment_TwoTone };
