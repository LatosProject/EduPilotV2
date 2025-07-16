import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowDownward_Rounded = class IconArrowDownward_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M11 5v11.17l-4.88-4.88c-.39-.39-1.03-.39-1.42 0a.996.996 0 0 0 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 1 0-1.41-1.41L13 16.17V5c0-.55-.45-1-1-1s-1 .45-1 1z"/>');
    }
};
IconArrowDownward_Rounded.styles = style;
IconArrowDownward_Rounded = __decorate([
    customElement('mdui-icon-arrow-downward--rounded')
], IconArrowDownward_Rounded);
export { IconArrowDownward_Rounded };
