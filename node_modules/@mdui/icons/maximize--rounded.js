import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMaximize_Rounded = class IconMaximize_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M4 3h16c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z"/>');
    }
};
IconMaximize_Rounded.styles = style;
IconMaximize_Rounded = __decorate([
    customElement('mdui-icon-maximize--rounded')
], IconMaximize_Rounded);
export { IconMaximize_Rounded };
