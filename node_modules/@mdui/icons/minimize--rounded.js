import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMinimize_Rounded = class IconMinimize_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M7 19h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1z"/>');
    }
};
IconMinimize_Rounded.styles = style;
IconMinimize_Rounded = __decorate([
    customElement('mdui-icon-minimize--rounded')
], IconMinimize_Rounded);
export { IconMinimize_Rounded };
