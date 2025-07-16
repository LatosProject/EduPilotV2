import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewComfy_Outlined = class IconViewComfy_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M2 4v16h20V4H2zm2 2h16v5H4V6zm0 12v-5h4v5H4zm6 0v-5h10v5H10z"/>');
    }
};
IconViewComfy_Outlined.styles = style;
IconViewComfy_Outlined = __decorate([
    customElement('mdui-icon-view-comfy--outlined')
], IconViewComfy_Outlined);
export { IconViewComfy_Outlined };
