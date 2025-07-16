import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBorderOuter = class IconBorderOuter extends LitElement {
    render() {
        return svgTag('<path d="M13 7h-2v2h2V7zm0 4h-2v2h2v-2zm4 0h-2v2h2v-2zM3 3v18h18V3H3zm16 16H5V5h14v14zm-6-4h-2v2h2v-2zm-4-4H7v2h2v-2z"/>');
    }
};
IconBorderOuter.styles = style;
IconBorderOuter = __decorate([
    customElement('mdui-icon-border-outer')
], IconBorderOuter);
export { IconBorderOuter };
