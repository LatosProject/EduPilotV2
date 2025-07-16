import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconShortcut_Outlined = class IconShortcut_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m15 5-1.41 1.41L15 7.83 17.17 10H8c-2.76 0-5 2.24-5 5v4h2v-4c0-1.65 1.35-3 3-3h9.17L15 14.17l-1.41 1.41L15 17l6-6-6-6z"/>');
    }
};
IconShortcut_Outlined.styles = style;
IconShortcut_Outlined = __decorate([
    customElement('mdui-icon-shortcut--outlined')
], IconShortcut_Outlined);
export { IconShortcut_Outlined };
