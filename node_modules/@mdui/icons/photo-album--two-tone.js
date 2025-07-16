import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPhotoAlbum_TwoTone = class IconPhotoAlbum_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M16 4v7l-2.5-1.5L11 11V4H6v16h12V4h-2zM7 18l2.38-3.17L11 17l2.62-3.5L17 18H7z" opacity=".3"/><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V4h5v7l2.5-1.5L16 11V4h2v16zm-4.38-6.5L17 18H7l2.38-3.17L11 17l2.62-3.5z"/>');
    }
};
IconPhotoAlbum_TwoTone.styles = style;
IconPhotoAlbum_TwoTone = __decorate([
    customElement('mdui-icon-photo-album--two-tone')
], IconPhotoAlbum_TwoTone);
export { IconPhotoAlbum_TwoTone };
