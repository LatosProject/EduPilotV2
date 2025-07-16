import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDoorFront_Rounded = class IconDoorFront_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M20 19h-1V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zm-6-6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>');
    }
};
IconDoorFront_Rounded.styles = style;
IconDoorFront_Rounded = __decorate([
    customElement('mdui-icon-door-front--rounded')
], IconDoorFront_Rounded);
export { IconDoorFront_Rounded };
