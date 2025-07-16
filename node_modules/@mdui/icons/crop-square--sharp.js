import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCropSquare_Sharp = class IconCropSquare_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 4H4v16h16V4zm-2 14H6V6h12v12z"/>');
    }
};
IconCropSquare_Sharp.styles = style;
IconCropSquare_Sharp = __decorate([
    customElement('mdui-icon-crop-square--sharp')
], IconCropSquare_Sharp);
export { IconCropSquare_Sharp };
