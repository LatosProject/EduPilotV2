import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSpaceBar_Rounded = class IconSpaceBar_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M18 10v3H6v-3c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1z"/>');
    }
};
IconSpaceBar_Rounded.styles = style;
IconSpaceBar_Rounded = __decorate([
    customElement('mdui-icon-space-bar--rounded')
], IconSpaceBar_Rounded);
export { IconSpaceBar_Rounded };
