import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWidgets_Sharp = class IconWidgets_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"/>');
    }
};
IconWidgets_Sharp.styles = style;
IconWidgets_Sharp = __decorate([
    customElement('mdui-icon-widgets--sharp')
], IconWidgets_Sharp);
export { IconWidgets_Sharp };
