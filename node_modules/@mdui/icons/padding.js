import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPadding = class IconPadding extends LitElement {
    render() {
        return svgTag('<path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM11 7h2v2h-2zM7 7h2v2H7zm8 0h2v2h-2z"/>');
    }
};
IconPadding.styles = style;
IconPadding = __decorate([
    customElement('mdui-icon-padding')
], IconPadding);
export { IconPadding };
