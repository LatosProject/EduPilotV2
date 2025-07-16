import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconShortcut_Sharp = class IconShortcut_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m21 11-6-6v5H8c-2.76 0-5 2.24-5 5v4h2v-4c0-1.65 1.35-3 3-3h7v5l6-6z"/>');
    }
};
IconShortcut_Sharp.styles = style;
IconShortcut_Sharp = __decorate([
    customElement('mdui-icon-shortcut--sharp')
], IconShortcut_Sharp);
export { IconShortcut_Sharp };
