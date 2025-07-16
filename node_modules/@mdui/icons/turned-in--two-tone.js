import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTurnedIn_TwoTone = class IconTurnedIn_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 14.97-4.21-1.81-.79-.34-.79.34L7 17.97V5h10v12.97z"/><path d="m7 17.97 4.21-1.81.79-.34.79.34L17 17.97V5H7z" opacity=".3"/>');
    }
};
IconTurnedIn_TwoTone.styles = style;
IconTurnedIn_TwoTone = __decorate([
    customElement('mdui-icon-turned-in--two-tone')
], IconTurnedIn_TwoTone);
export { IconTurnedIn_TwoTone };
