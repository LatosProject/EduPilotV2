import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVerticalShades_TwoTone = class IconVerticalShades_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M6 5h2v14H6zm10 0h2v14h-2z" opacity=".3"/><path d="M20 19V3H4v16H2v2h20v-2h-2zM8 19H6V5h2v14zm6 0h-4V5h4v14zm4 0h-2V5h2v14z"/>');
    }
};
IconVerticalShades_TwoTone.styles = style;
IconVerticalShades_TwoTone = __decorate([
    customElement('mdui-icon-vertical-shades--two-tone')
], IconVerticalShades_TwoTone);
export { IconVerticalShades_TwoTone };
