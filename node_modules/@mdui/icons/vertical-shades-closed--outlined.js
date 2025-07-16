import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVerticalShadesClosed_Outlined = class IconVerticalShadesClosed_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 19V3H4v16H2v2h20v-2h-2zM13 5h1.5v14H13V5zm-2 14H9.5V5H11v14zM6 5h1.5v14H6V5zm10.5 14V5H18v14h-1.5z"/>');
    }
};
IconVerticalShadesClosed_Outlined.styles = style;
IconVerticalShadesClosed_Outlined = __decorate([
    customElement('mdui-icon-vertical-shades-closed--outlined')
], IconVerticalShadesClosed_Outlined);
export { IconVerticalShadesClosed_Outlined };
