import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAddToPhotos_Sharp = class IconAddToPhotos_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M4 6H2v16h16v-2H4V6zm18-4H6v16h16V2zm-3 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/>');
    }
};
IconAddToPhotos_Sharp.styles = style;
IconAddToPhotos_Sharp = __decorate([
    customElement('mdui-icon-add-to-photos--sharp')
], IconAddToPhotos_Sharp);
export { IconAddToPhotos_Sharp };
