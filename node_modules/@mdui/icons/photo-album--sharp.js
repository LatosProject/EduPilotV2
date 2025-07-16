import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPhotoAlbum_Sharp = class IconPhotoAlbum_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 2H4v20h16V2zm-9 2h5v7l-2.5-1.5L11 11V4zM7 18l2.38-3.17L11 17l2.62-3.5L17 18H7z"/>');
    }
};
IconPhotoAlbum_Sharp.styles = style;
IconPhotoAlbum_Sharp = __decorate([
    customElement('mdui-icon-photo-album--sharp')
], IconPhotoAlbum_Sharp);
export { IconPhotoAlbum_Sharp };
