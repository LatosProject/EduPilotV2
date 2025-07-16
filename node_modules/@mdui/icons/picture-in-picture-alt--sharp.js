import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPictureInPictureAlt_Sharp = class IconPictureInPictureAlt_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 11h-8v6h8v-6zm4 10V3H1v18h22zm-2-1.98H3V4.97h18v14.05z"/>');
    }
};
IconPictureInPictureAlt_Sharp.styles = style;
IconPictureInPictureAlt_Sharp = __decorate([
    customElement('mdui-icon-picture-in-picture-alt--sharp')
], IconPictureInPictureAlt_Sharp);
export { IconPictureInPictureAlt_Sharp };
