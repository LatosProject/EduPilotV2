import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSouthEast_Rounded = class IconSouthEast_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M18 9c-.56 0-1 .45-1 1v5.59L6.12 4.7a.996.996 0 1 0-1.41 1.41L15.59 17H10c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1z"/>');
    }
};
IconSouthEast_Rounded.styles = style;
IconSouthEast_Rounded = __decorate([
    customElement('mdui-icon-south-east--rounded')
], IconSouthEast_Rounded);
export { IconSouthEast_Rounded };
