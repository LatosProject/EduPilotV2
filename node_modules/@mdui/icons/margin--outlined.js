import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMargin_Outlined = class IconMargin_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM11 7h2v2h-2V7zM7 7h2v2H7V7zm8 0h2v2h-2V7zm-8 4h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/>');
    }
};
IconMargin_Outlined.styles = style;
IconMargin_Outlined = __decorate([
    customElement('mdui-icon-margin--outlined')
], IconMargin_Outlined);
export { IconMargin_Outlined };
