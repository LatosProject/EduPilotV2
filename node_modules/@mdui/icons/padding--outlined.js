import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPadding_Outlined = class IconPadding_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 14H5V5h14v14zM11 7h2v2h-2V7zM7 7h2v2H7V7zm8 0h2v2h-2V7z"/>');
    }
};
IconPadding_Outlined.styles = style;
IconPadding_Outlined = __decorate([
    customElement('mdui-icon-padding--outlined')
], IconPadding_Outlined);
export { IconPadding_Outlined };
