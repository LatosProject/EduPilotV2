import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilterBAndW_TwoTone = class IconFilterBAndW_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M19 5h-7v6l7 8zm-7 14v-8l-7 8z" opacity=".3"/><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-9 0H5l7-8V5h7v14l-7-8v8z"/>');
    }
};
IconFilterBAndW_TwoTone.styles = style;
IconFilterBAndW_TwoTone = __decorate([
    customElement('mdui-icon-filter-b-and-w--two-tone')
], IconFilterBAndW_TwoTone);
export { IconFilterBAndW_TwoTone };
