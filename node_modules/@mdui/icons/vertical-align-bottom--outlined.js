import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVerticalAlignBottom_Outlined = class IconVerticalAlignBottom_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"/>');
    }
};
IconVerticalAlignBottom_Outlined.styles = style;
IconVerticalAlignBottom_Outlined = __decorate([
    customElement('mdui-icon-vertical-align-bottom--outlined')
], IconVerticalAlignBottom_Outlined);
export { IconVerticalAlignBottom_Outlined };
