import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPersonalVideo_Outlined = class IconPersonalVideo_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 0 0-2-2zm0 14H3V5h18v12z"/>');
    }
};
IconPersonalVideo_Outlined.styles = style;
IconPersonalVideo_Outlined = __decorate([
    customElement('mdui-icon-personal-video--outlined')
], IconPersonalVideo_Outlined);
export { IconPersonalVideo_Outlined };
