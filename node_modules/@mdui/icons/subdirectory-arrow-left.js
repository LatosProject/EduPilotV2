import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSubdirectoryArrowLeft = class IconSubdirectoryArrowLeft extends LitElement {
    render() {
        return svgTag('<path d="m11 9 1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"/>');
    }
};
IconSubdirectoryArrowLeft.styles = style;
IconSubdirectoryArrowLeft = __decorate([
    customElement('mdui-icon-subdirectory-arrow-left')
], IconSubdirectoryArrowLeft);
export { IconSubdirectoryArrowLeft };
