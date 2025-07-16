import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewList_Outlined = class IconViewList_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M3 5v14h18V5H3zm4 2v2H5V7h2zm-2 6v-2h2v2H5zm0 2h2v2H5v-2zm14 2H9v-2h10v2zm0-4H9v-2h10v2zm0-4H9V7h10v2z"/>');
    }
};
IconViewList_Outlined.styles = style;
IconViewList_Outlined = __decorate([
    customElement('mdui-icon-view-list--outlined')
], IconViewList_Outlined);
export { IconViewList_Outlined };
