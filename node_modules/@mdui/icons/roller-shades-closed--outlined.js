import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRollerShadesClosed_Outlined = class IconRollerShadesClosed_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 19V3H4v16H2v2h8.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H22v-2h-2zM18 5v10H6V5h12zM6 19v-2h5v2H6zm7 0v-2h5v2h-5z"/>');
    }
};
IconRollerShadesClosed_Outlined.styles = style;
IconRollerShadesClosed_Outlined = __decorate([
    customElement('mdui-icon-roller-shades-closed--outlined')
], IconRollerShadesClosed_Outlined);
export { IconRollerShadesClosed_Outlined };
