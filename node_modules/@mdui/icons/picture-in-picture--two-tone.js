import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPictureInPicture_TwoTone = class IconPictureInPicture_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M19 7h-8v6h8V7zm-2 4h-4V9h4v2z"/><path d="M13 9h4v2h-4z" opacity=".3"/><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"/>');
    }
};
IconPictureInPicture_TwoTone.styles = style;
IconPictureInPicture_TwoTone = __decorate([
    customElement('mdui-icon-picture-in-picture--two-tone')
], IconPictureInPicture_TwoTone);
export { IconPictureInPicture_TwoTone };
