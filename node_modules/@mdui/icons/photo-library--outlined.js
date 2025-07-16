import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPhotoLibrary_Outlined = class IconPhotoLibrary_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67 1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/>');
    }
};
IconPhotoLibrary_Outlined.styles = style;
IconPhotoLibrary_Outlined = __decorate([
    customElement('mdui-icon-photo-library--outlined')
], IconPhotoLibrary_Outlined);
export { IconPhotoLibrary_Outlined };
