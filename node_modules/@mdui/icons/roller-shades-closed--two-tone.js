import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRollerShadesClosed_TwoTone = class IconRollerShadesClosed_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M6 5h12v10H6z" opacity=".3"/><path d="M20 19V3H4v16H2v2h8.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H22v-2h-2zm-9 0H6v-2h5v2zm7 0h-5v-2h5v2zm0-4H6V5h12v10z"/>');
    }
};
IconRollerShadesClosed_TwoTone.styles = style;
IconRollerShadesClosed_TwoTone = __decorate([
    customElement('mdui-icon-roller-shades-closed--two-tone')
], IconRollerShadesClosed_TwoTone);
export { IconRollerShadesClosed_TwoTone };
