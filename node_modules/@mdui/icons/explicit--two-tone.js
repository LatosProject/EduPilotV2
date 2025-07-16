import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconExplicit_TwoTone = class IconExplicit_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 19h14V5H5v14zM9 7h6v2h-4v2h4v2h-4v2h4v2H9V7z" opacity=".3"/><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 0H5V5h14v14zm-4-4h-4v-2h4v-2h-4V9h4V7H9v10h6z"/>');
    }
};
IconExplicit_TwoTone.styles = style;
IconExplicit_TwoTone = __decorate([
    customElement('mdui-icon-explicit--two-tone')
], IconExplicit_TwoTone);
export { IconExplicit_TwoTone };
