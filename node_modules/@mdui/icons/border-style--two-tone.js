import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBorderStyle_TwoTone = class IconBorderStyle_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M19 19h2v2h-2zm0-8h2v2h-2zm0 4h2v2h-2zm-4 4h2v2h-2zM3 21h2V5h16V3H3zM19 7h2v2h-2zm-8 12h2v2h-2zm-4 0h2v2H7z"/>');
    }
};
IconBorderStyle_TwoTone.styles = style;
IconBorderStyle_TwoTone = __decorate([
    customElement('mdui-icon-border-style--two-tone')
], IconBorderStyle_TwoTone);
export { IconBorderStyle_TwoTone };
