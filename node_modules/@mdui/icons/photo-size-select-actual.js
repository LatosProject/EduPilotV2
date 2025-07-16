import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPhotoSizeSelectActual = class IconPhotoSizeSelectActual extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"/>');
    }
};
IconPhotoSizeSelectActual.styles = style;
IconPhotoSizeSelectActual = __decorate([
    customElement('mdui-icon-photo-size-select-actual')
], IconPhotoSizeSelectActual);
export { IconPhotoSizeSelectActual };
