import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDehaze = class IconDehaze extends LitElement {
    render() {
        return svgTag('<path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"/>');
    }
};
IconDehaze.styles = style;
IconDehaze = __decorate([
    customElement('mdui-icon-dehaze')
], IconDehaze);
export { IconDehaze };
