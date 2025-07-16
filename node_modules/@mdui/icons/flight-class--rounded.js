import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFlightClass_Rounded = class IconFlightClass_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M16 4h-2c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM6 4c.55 0 1 .45 1 1v3l2.5 8H17c.55 0 1 .45 1 1s-.45 1-1 1H9.49c-.88 0-1.66-.58-1.92-1.43L5.08 8.28A2.24 2.24 0 0 1 5 7.71V5c0-.55.45-1 1-1zm12 16c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1z"/>');
    }
};
IconFlightClass_Rounded.styles = style;
IconFlightClass_Rounded = __decorate([
    customElement('mdui-icon-flight-class--rounded')
], IconFlightClass_Rounded);
export { IconFlightClass_Rounded };
