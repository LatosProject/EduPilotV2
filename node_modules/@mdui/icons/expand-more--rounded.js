import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconExpandMore_Rounded = class IconExpandMore_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M15.88 9.29 12 13.17 8.12 9.29a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41c-.39-.38-1.03-.39-1.42 0z"/>');
    }
};
IconExpandMore_Rounded.styles = style;
IconExpandMore_Rounded = __decorate([
    customElement('mdui-icon-expand-more--rounded')
], IconExpandMore_Rounded);
export { IconExpandMore_Rounded };
