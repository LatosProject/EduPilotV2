import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVerticalShades_Outlined = class IconVerticalShades_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 19V3H4v16H2v2h20v-2h-2zM14 5v14h-4V5h4zM6 5h2v14H6V5zm10 14V5h2v14h-2z"/>');
    }
};
IconVerticalShades_Outlined.styles = style;
IconVerticalShades_Outlined = __decorate([
    customElement('mdui-icon-vertical-shades--outlined')
], IconVerticalShades_Outlined);
export { IconVerticalShades_Outlined };
