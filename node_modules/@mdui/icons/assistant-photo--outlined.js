import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAssistantPhoto_Outlined = class IconAssistantPhoto_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m12.36 6 .08.39.32 1.61H18v6h-3.36l-.08-.39-.32-1.61H7V6h5.36M14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6L14 4z"/>');
    }
};
IconAssistantPhoto_Outlined.styles = style;
IconAssistantPhoto_Outlined = __decorate([
    customElement('mdui-icon-assistant-photo--outlined')
], IconAssistantPhoto_Outlined);
export { IconAssistantPhoto_Outlined };
