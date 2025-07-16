import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDehaze_Outlined = class IconDehaze_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z"/>');
    }
};
IconDehaze_Outlined.styles = style;
IconDehaze_Outlined = __decorate([
    customElement('mdui-icon-dehaze--outlined')
], IconDehaze_Outlined);
export { IconDehaze_Outlined };
