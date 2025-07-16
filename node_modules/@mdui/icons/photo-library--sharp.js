import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPhotoLibrary_Sharp = class IconPhotoLibrary_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 18V2H6v16h16zm-11-6 2.03 2.71L16 11l4 5H8l3-4zM2 6v16h16v-2H4V6H2z"/>');
    }
};
IconPhotoLibrary_Sharp.styles = style;
IconPhotoLibrary_Sharp = __decorate([
    customElement('mdui-icon-photo-library--sharp')
], IconPhotoLibrary_Sharp);
export { IconPhotoLibrary_Sharp };
