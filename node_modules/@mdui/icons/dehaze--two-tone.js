import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDehaze_TwoTone = class IconDehaze_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z"/>');
    }
};
IconDehaze_TwoTone.styles = style;
IconDehaze_TwoTone = __decorate([
    customElement('mdui-icon-dehaze--two-tone')
], IconDehaze_TwoTone);
export { IconDehaze_TwoTone };
