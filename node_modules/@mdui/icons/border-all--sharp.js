import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBorderAll_Sharp = class IconBorderAll_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 3v18h18V3H3zm8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z"/>');
    }
};
IconBorderAll_Sharp.styles = style;
IconBorderAll_Sharp = __decorate([
    customElement('mdui-icon-border-all--sharp')
], IconBorderAll_Sharp);
export { IconBorderAll_Sharp };
