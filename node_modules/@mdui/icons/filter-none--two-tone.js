import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilterNone_TwoTone = class IconFilterNone_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7 3h14v14H7z" opacity=".3"/><path d="M3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2zM21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"/>');
    }
};
IconFilterNone_TwoTone.styles = style;
IconFilterNone_TwoTone = __decorate([
    customElement('mdui-icon-filter-none--two-tone')
], IconFilterNone_TwoTone);
export { IconFilterNone_TwoTone };
