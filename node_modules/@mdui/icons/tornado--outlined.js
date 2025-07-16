import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTornado_Outlined = class IconTornado_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M23 3H1l11 19L23 3zm-3.47 2-1.74 3H6.21L4.47 5h15.06zm-9.27 10h3.48L12 18.01 10.26 15zm4.64-2H9.1l-1.74-3h9.27l-1.73 3z"/>');
    }
};
IconTornado_Outlined.styles = style;
IconTornado_Outlined = __decorate([
    customElement('mdui-icon-tornado--outlined')
], IconTornado_Outlined);
export { IconTornado_Outlined };
