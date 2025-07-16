import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAdUnits_Rounded = class IconAdUnits_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-1 18H8c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z"/><path d="M15 6H9c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z"/>');
    }
};
IconAdUnits_Rounded.styles = style;
IconAdUnits_Rounded = __decorate([
    customElement('mdui-icon-ad-units--rounded')
], IconAdUnits_Rounded);
export { IconAdUnits_Rounded };
