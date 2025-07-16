import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMouse_Sharp = class IconMouse_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z"/>');
    }
};
IconMouse_Sharp.styles = style;
IconMouse_Sharp = __decorate([
    customElement('mdui-icon-mouse--sharp')
], IconMouse_Sharp);
export { IconMouse_Sharp };
