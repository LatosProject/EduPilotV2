import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTitle = class IconTitle extends LitElement {
    render() {
        return svgTag('<path d="M5 4v3h5.5v12h3V7H19V4z"/>');
    }
};
IconTitle.styles = style;
IconTitle = __decorate([
    customElement('mdui-icon-title')
], IconTitle);
export { IconTitle };
