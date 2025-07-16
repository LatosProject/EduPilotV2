import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSubdirectoryArrowLeft_Outlined = class IconSubdirectoryArrowLeft_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m11 9 1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"/>');
    }
};
IconSubdirectoryArrowLeft_Outlined.styles = style;
IconSubdirectoryArrowLeft_Outlined = __decorate([
    customElement('mdui-icon-subdirectory-arrow-left--outlined')
], IconSubdirectoryArrowLeft_Outlined);
export { IconSubdirectoryArrowLeft_Outlined };
