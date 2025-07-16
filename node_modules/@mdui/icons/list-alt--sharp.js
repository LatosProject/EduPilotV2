import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconListAlt_Sharp = class IconListAlt_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM3 3v18h18V3H3zm16 16H5V5h14v14z"/>');
    }
};
IconListAlt_Sharp.styles = style;
IconListAlt_Sharp = __decorate([
    customElement('mdui-icon-list-alt--sharp')
], IconListAlt_Sharp);
export { IconListAlt_Sharp };
