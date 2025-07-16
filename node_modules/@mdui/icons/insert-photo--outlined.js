import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconInsertPhoto_Outlined = class IconInsertPhoto_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86-3 3.87L9 13.14 6 17h12l-3.86-5.14z"/>');
    }
};
IconInsertPhoto_Outlined.styles = style;
IconInsertPhoto_Outlined = __decorate([
    customElement('mdui-icon-insert-photo--outlined')
], IconInsertPhoto_Outlined);
export { IconInsertPhoto_Outlined };
