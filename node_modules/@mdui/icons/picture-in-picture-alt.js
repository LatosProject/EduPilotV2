import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPictureInPictureAlt = class IconPictureInPictureAlt extends LitElement {
    render() {
        return svgTag('<path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"/>');
    }
};
IconPictureInPictureAlt.styles = style;
IconPictureInPictureAlt = __decorate([
    customElement('mdui-icon-picture-in-picture-alt')
], IconPictureInPictureAlt);
export { IconPictureInPictureAlt };
