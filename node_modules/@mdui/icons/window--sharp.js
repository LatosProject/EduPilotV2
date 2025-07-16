import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWindow_Sharp = class IconWindow_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z"/>');
    }
};
IconWindow_Sharp.styles = style;
IconWindow_Sharp = __decorate([
    customElement('mdui-icon-window--sharp')
], IconWindow_Sharp);
export { IconWindow_Sharp };
