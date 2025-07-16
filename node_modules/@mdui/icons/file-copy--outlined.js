import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFileCopy_Outlined = class IconFileCopy_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"/>');
    }
};
IconFileCopy_Outlined.styles = style;
IconFileCopy_Outlined = __decorate([
    customElement('mdui-icon-file-copy--outlined')
], IconFileCopy_Outlined);
export { IconFileCopy_Outlined };
