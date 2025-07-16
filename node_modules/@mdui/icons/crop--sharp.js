import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCrop_Sharp = class IconCrop_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 15h2V5H9v2h8v8zM7 17V1H5v4H1v2h4v12h12v4h2v-4h4v-2H7z"/>');
    }
};
IconCrop_Sharp.styles = style;
IconCrop_Sharp = __decorate([
    customElement('mdui-icon-crop--sharp')
], IconCrop_Sharp);
export { IconCrop_Sharp };
