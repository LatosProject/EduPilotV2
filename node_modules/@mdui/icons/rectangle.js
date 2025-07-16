import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRectangle = class IconRectangle extends LitElement {
    render() {
        return svgTag('<path d="M2 4h20v16H2z"/>');
    }
};
IconRectangle.styles = style;
IconRectangle = __decorate([
    customElement('mdui-icon-rectangle')
], IconRectangle);
export { IconRectangle };
