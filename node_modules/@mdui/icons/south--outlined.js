import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSouth_Outlined = class IconSouth_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7 7-7z"/>');
    }
};
IconSouth_Outlined.styles = style;
IconSouth_Outlined = __decorate([
    customElement('mdui-icon-south--outlined')
], IconSouth_Outlined);
export { IconSouth_Outlined };
