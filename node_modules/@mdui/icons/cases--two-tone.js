import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCases_TwoTone = class IconCases_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7 7h14v9H7z" opacity=".3"/><path d="M3 9H1v11c0 1.11.89 2 2 2h17v-2H3V9z"/><path d="M18 5V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H5v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5h-5zm-6-2h4v2h-4V3zm9 13H7V7h14v9z"/>');
    }
};
IconCases_TwoTone.styles = style;
IconCases_TwoTone = __decorate([
    customElement('mdui-icon-cases--two-tone')
], IconCases_TwoTone);
export { IconCases_TwoTone };
