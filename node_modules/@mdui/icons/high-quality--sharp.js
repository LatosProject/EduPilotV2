import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHighQuality_Sharp = class IconHighQuality_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 4H3v16h18V4zM11 15H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7 0h-1.75v1.5h-1.5V15H13V9h5v6zm-3.5-1.5h2v-3h-2v3z"/>');
    }
};
IconHighQuality_Sharp.styles = style;
IconHighQuality_Sharp = __decorate([
    customElement('mdui-icon-high-quality--sharp')
], IconHighQuality_Sharp);
export { IconHighQuality_Sharp };
