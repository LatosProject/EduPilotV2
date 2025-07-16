import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardTab_Sharp = class IconKeyboardTab_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M11.59 7.41 15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z"/>');
    }
};
IconKeyboardTab_Sharp.styles = style;
IconKeyboardTab_Sharp = __decorate([
    customElement('mdui-icon-keyboard-tab--sharp')
], IconKeyboardTab_Sharp);
export { IconKeyboardTab_Sharp };
