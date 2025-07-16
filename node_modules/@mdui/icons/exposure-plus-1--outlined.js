import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconExposurePlus_1_Outlined = class IconExposurePlus_1_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M10 7H8v4H4v2h4v4h2v-4h4v-2h-4V7zm10 11h-2V7.38L15 8.4V6.7L19.7 5h.3v13z"/>');
    }
};
IconExposurePlus_1_Outlined.styles = style;
IconExposurePlus_1_Outlined = __decorate([
    customElement('mdui-icon-exposure-plus-1--outlined')
], IconExposurePlus_1_Outlined);
export { IconExposurePlus_1_Outlined };
