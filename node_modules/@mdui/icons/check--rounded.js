import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCheck_Rounded = class IconCheck_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17z"/>');
    }
};
IconCheck_Rounded.styles = style;
IconCheck_Rounded = __decorate([
    customElement('mdui-icon-check--rounded')
], IconCheck_Rounded);
export { IconCheck_Rounded };
