import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHexagon_Rounded = class IconHexagon_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M16.05 3h-8.1c-.71 0-1.37.38-1.73 1l-4.04 7c-.36.62-.36 1.38 0 2l4.04 7c.36.62 1.02 1 1.73 1h8.09c.71 0 1.37-.38 1.73-1l4.04-7c.36-.62.36-1.38 0-2l-4.04-7c-.35-.62-1.01-1-1.72-1z"/>');
    }
};
IconHexagon_Rounded.styles = style;
IconHexagon_Rounded = __decorate([
    customElement('mdui-icon-hexagon--rounded')
], IconHexagon_Rounded);
export { IconHexagon_Rounded };
