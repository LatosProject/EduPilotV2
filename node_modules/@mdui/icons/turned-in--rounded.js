import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTurnedIn_Rounded = class IconTurnedIn_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>');
    }
};
IconTurnedIn_Rounded.styles = style;
IconTurnedIn_Rounded = __decorate([
    customElement('mdui-icon-turned-in--rounded')
], IconTurnedIn_Rounded);
export { IconTurnedIn_Rounded };
