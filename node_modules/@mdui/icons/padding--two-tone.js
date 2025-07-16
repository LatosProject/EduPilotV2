import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPadding_TwoTone = class IconPadding_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 19h14V5H5v14zM15 7h2v2h-2V7zm-4 0h2v2h-2V7zM7 7h2v2H7V7z" opacity=".3"/><path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 14H5V5h14v14z"/><path d="M15 7h2v2h-2zM7 7h2v2H7zm4 0h2v2h-2z"/>');
    }
};
IconPadding_TwoTone.styles = style;
IconPadding_TwoTone = __decorate([
    customElement('mdui-icon-padding--two-tone')
], IconPadding_TwoTone);
export { IconPadding_TwoTone };
