import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSouthWest_Rounded = class IconSouthWest_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M15 18c0-.56-.45-1-1-1H8.41L19.3 6.11a.996.996 0 1 0-1.41-1.41L7 15.59V10c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1z"/>');
    }
};
IconSouthWest_Rounded.styles = style;
IconSouthWest_Rounded = __decorate([
    customElement('mdui-icon-south-west--rounded')
], IconSouthWest_Rounded);
export { IconSouthWest_Rounded };
