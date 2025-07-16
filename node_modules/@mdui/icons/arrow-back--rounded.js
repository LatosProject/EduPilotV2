import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowBack_Rounded = class IconArrowBack_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"/>');
    }
};
IconArrowBack_Rounded.styles = style;
IconArrowBack_Rounded = __decorate([
    customElement('mdui-icon-arrow-back--rounded')
], IconArrowBack_Rounded);
export { IconArrowBack_Rounded };
