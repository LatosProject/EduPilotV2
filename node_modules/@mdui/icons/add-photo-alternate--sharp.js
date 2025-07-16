import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAddPhotoAlternate_Sharp = class IconAddPhotoAlternate_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H3v16h16V11h-3zM5 19l3-4 2 3 3-4 4 5H5z"/>');
    }
};
IconAddPhotoAlternate_Sharp.styles = style;
IconAddPhotoAlternate_Sharp = __decorate([
    customElement('mdui-icon-add-photo-alternate--sharp')
], IconAddPhotoAlternate_Sharp);
export { IconAddPhotoAlternate_Sharp };
