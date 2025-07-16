import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconForward_Rounded = class IconForward_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M12 8V6.41c0-.89 1.08-1.34 1.71-.71l5.59 5.59c.39.39.39 1.02 0 1.41l-5.59 5.59c-.63.63-1.71.19-1.71-.7V16H5c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h7z"/>');
    }
};
IconForward_Rounded.styles = style;
IconForward_Rounded = __decorate([
    customElement('mdui-icon-forward--rounded')
], IconForward_Rounded);
export { IconForward_Rounded };
