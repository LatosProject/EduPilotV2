import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDoorBack = class IconDoorBack extends LitElement {
    render() {
        return svgTag('<path d="M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-8-6H9v-2h2v2z"/>');
    }
};
IconDoorBack.styles = style;
IconDoorBack = __decorate([
    customElement('mdui-icon-door-back')
], IconDoorBack);
export { IconDoorBack };
