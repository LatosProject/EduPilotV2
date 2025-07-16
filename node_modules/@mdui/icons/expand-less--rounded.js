import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconExpandLess_Rounded = class IconExpandLess_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M11.29 8.71 6.7 13.3a.996.996 0 1 0 1.41 1.41L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0z"/>');
    }
};
IconExpandLess_Rounded.styles = style;
IconExpandLess_Rounded = __decorate([
    customElement('mdui-icon-expand-less--rounded')
], IconExpandLess_Rounded);
export { IconExpandLess_Rounded };
