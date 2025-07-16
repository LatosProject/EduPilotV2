import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCropOriginal_Sharp = class IconCropOriginal_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zm-2 16H5V5h14v14zm-5.04-6.71-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/>');
    }
};
IconCropOriginal_Sharp.styles = style;
IconCropOriginal_Sharp = __decorate([
    customElement('mdui-icon-crop-original--sharp')
], IconCropOriginal_Sharp);
export { IconCropOriginal_Sharp };
