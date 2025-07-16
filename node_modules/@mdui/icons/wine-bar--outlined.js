import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWineBar_Outlined = class IconWineBar_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M6 3v6c0 2.97 2.16 5.43 5 5.91V19H8v2h8v-2h-3v-4.09c2.84-.48 5-2.94 5-5.91V3H6zm6 10c-1.86 0-3.41-1.28-3.86-3h7.72c-.45 1.72-2 3-3.86 3zm4-5H8V5h8v3z"/>');
    }
};
IconWineBar_Outlined.styles = style;
IconWineBar_Outlined = __decorate([
    customElement('mdui-icon-wine-bar--outlined')
], IconWineBar_Outlined);
export { IconWineBar_Outlined };
