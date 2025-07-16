import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFileOpen_TwoTone = class IconFileOpen_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M15 14h3V9h-5V4H6v16h9z" opacity=".3"/><path d="M15 22H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h8l6 6v6h-2V9h-5V4H6v16h9v2zm4-.34v-2.24l2.95 2.95 1.41-1.41L20.41 18h2.24v-2H17v5.66h2z"/>');
    }
};
IconFileOpen_TwoTone.styles = style;
IconFileOpen_TwoTone = __decorate([
    customElement('mdui-icon-file-open--two-tone')
], IconFileOpen_TwoTone);
export { IconFileOpen_TwoTone };
