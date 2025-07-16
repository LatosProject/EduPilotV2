import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMan_2_Rounded = class IconMan_2_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M14 7h-4c-1.1 0-2 .9-2 2v5c0 .55.45 1 1 1h1.5v5.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V15H15c.55 0 1-.45 1-1V9c0-1.1-.9-2-2-2z"/><circle cx="12" cy="4" r="2"/>');
    }
};
IconMan_2_Rounded.styles = style;
IconMan_2_Rounded = __decorate([
    customElement('mdui-icon-man-2--rounded')
], IconMan_2_Rounded);
export { IconMan_2_Rounded };
