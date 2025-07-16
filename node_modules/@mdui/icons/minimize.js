import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMinimize = class IconMinimize extends LitElement {
    render() {
        return svgTag('<path d="M6 19h12v2H6z"/>');
    }
};
IconMinimize.styles = style;
IconMinimize = __decorate([
    customElement('mdui-icon-minimize')
], IconMinimize);
export { IconMinimize };
