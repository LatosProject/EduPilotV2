import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPictureInPicture_Outlined = class IconPictureInPicture_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 7h-8v6h8V7zm-2 4h-4V9h4v2zm4-8H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"/>');
    }
};
IconPictureInPicture_Outlined.styles = style;
IconPictureInPicture_Outlined = __decorate([
    customElement('mdui-icon-picture-in-picture--outlined')
], IconPictureInPicture_Outlined);
export { IconPictureInPicture_Outlined };
