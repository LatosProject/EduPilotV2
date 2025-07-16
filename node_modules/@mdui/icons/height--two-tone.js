import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHeight_TwoTone = class IconHeight_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M13 6.99h3L12 3 8 6.99h3v10.02H8L12 21l4-3.99h-3z"/>');
    }
};
IconHeight_TwoTone.styles = style;
IconHeight_TwoTone = __decorate([
    customElement('mdui-icon-height--two-tone')
], IconHeight_TwoTone);
export { IconHeight_TwoTone };
