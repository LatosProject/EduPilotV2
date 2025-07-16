import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFileCopy_Sharp = class IconFileCopy_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M16 1H2v16h2V3h12V1zm-1 4 6 6v12H6V5h9zm-1 7h5.5L14 6.5V12z"/>');
    }
};
IconFileCopy_Sharp.styles = style;
IconFileCopy_Sharp = __decorate([
    customElement('mdui-icon-file-copy--sharp')
], IconFileCopy_Sharp);
export { IconFileCopy_Sharp };
