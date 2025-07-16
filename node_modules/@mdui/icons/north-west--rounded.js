import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNorthWest_Rounded = class IconNorthWest_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M6 15c.56 0 1-.45 1-1V8.41L17.89 19.3a.996.996 0 1 0 1.41-1.41L8.41 7H14c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1z"/>');
    }
};
IconNorthWest_Rounded.styles = style;
IconNorthWest_Rounded = __decorate([
    customElement('mdui-icon-north-west--rounded')
], IconNorthWest_Rounded);
export { IconNorthWest_Rounded };
