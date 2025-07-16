import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSplitscreen_TwoTone = class IconSplitscreen_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M6 4h12v5H6zm0 11h12v5H6z" opacity=".3"/><path d="M18 2H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 7H6V4h12v5zm0 4H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm0 7H6v-5h12v5z"/>');
    }
};
IconSplitscreen_TwoTone.styles = style;
IconSplitscreen_TwoTone = __decorate([
    customElement('mdui-icon-splitscreen--two-tone')
], IconSplitscreen_TwoTone);
export { IconSplitscreen_TwoTone };
