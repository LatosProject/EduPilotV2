import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconModeEditOutline = class IconModeEditOutline extends LitElement {
    render() {
        return svgTag('<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 5.63l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41z"/>');
    }
};
IconModeEditOutline.styles = style;
IconModeEditOutline = __decorate([
    customElement('mdui-icon-mode-edit-outline')
], IconModeEditOutline);
export { IconModeEditOutline };
