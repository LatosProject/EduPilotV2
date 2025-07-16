import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilterBAndW_Outlined = class IconFilterBAndW_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16-7-8v8H5l7-8V5h7v14z"/>');
    }
};
IconFilterBAndW_Outlined.styles = style;
IconFilterBAndW_Outlined = __decorate([
    customElement('mdui-icon-filter-b-and-w--outlined')
], IconFilterBAndW_Outlined);
export { IconFilterBAndW_Outlined };
