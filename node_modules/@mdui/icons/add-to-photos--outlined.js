import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAddToPhotos_Outlined = class IconAddToPhotos_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7-1h2v-4h4V9h-4V5h-2v4H9v2h4z"/>');
    }
};
IconAddToPhotos_Outlined.styles = style;
IconAddToPhotos_Outlined = __decorate([
    customElement('mdui-icon-add-to-photos--outlined')
], IconAddToPhotos_Outlined);
export { IconAddToPhotos_Outlined };
