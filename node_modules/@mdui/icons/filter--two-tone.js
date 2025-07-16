import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilter_TwoTone = class IconFilter_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7 17h14V3H7v14zm4.25-5.53 1.96 2.36 2.75-3.54L19.5 15h-11l2.75-3.53z" opacity=".3"/><path d="M1 21c0 1.1.9 2 2 2h16v-2H3V5H1v16zM21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-5.04-6.71-2.75 3.54-1.96-2.36L8.5 15h11z"/>');
    }
};
IconFilter_TwoTone.styles = style;
IconFilter_TwoTone = __decorate([
    customElement('mdui-icon-filter--two-tone')
], IconFilter_TwoTone);
export { IconFilter_TwoTone };
