import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSplitscreen_Rounded = class IconSplitscreen_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M18 4v5H6V4h12zm0-2H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 13v5H6v-5h12zm0-2H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2z"/>');
    }
};
IconSplitscreen_Rounded.styles = style;
IconSplitscreen_Rounded = __decorate([
    customElement('mdui-icon-splitscreen--rounded')
], IconSplitscreen_Rounded);
export { IconSplitscreen_Rounded };
