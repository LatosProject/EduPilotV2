import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilter_1_TwoTone = class IconFilter_1_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7 17h14V3H7v14zm5-12h4v10h-2V7h-2V5z" opacity=".3"/><path d="M14 15h2V5h-4v2h2zm7-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM1 5v16c0 1.1.9 2 2 2h16v-2H3V5H1z"/>');
    }
};
IconFilter_1_TwoTone.styles = style;
IconFilter_1_TwoTone = __decorate([
    customElement('mdui-icon-filter-1--two-tone')
], IconFilter_1_TwoTone);
export { IconFilter_1_TwoTone };
