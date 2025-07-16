import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRemoveCircleOutline_Outlined = class IconRemoveCircleOutline_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>');
    }
};
IconRemoveCircleOutline_Outlined.styles = style;
IconRemoveCircleOutline_Outlined = __decorate([
    customElement('mdui-icon-remove-circle-outline--outlined')
], IconRemoveCircleOutline_Outlined);
export { IconRemoveCircleOutline_Outlined };
