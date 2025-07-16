import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChecklistRtl_Outlined = class IconChecklistRtl_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M11 7H2v2h9V7zm0 8H2v2h9v-2zm5.34-4L12.8 7.46l1.41-1.41 2.12 2.12 4.24-4.24L22 5.34 16.34 11zm0 8-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L22 13.34 16.34 19z"/>');
    }
};
IconChecklistRtl_Outlined.styles = style;
IconChecklistRtl_Outlined = __decorate([
    customElement('mdui-icon-checklist-rtl--outlined')
], IconChecklistRtl_Outlined);
export { IconChecklistRtl_Outlined };
