import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMp_Sharp = class IconMp_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zM6 9h6.5v6H11v-4.5h-1v3H8.5v-3h-1V15H6V9zm9 6h-1.5V9H18v4.5h-3V15zm0-3h1.5v-1.5H15V12z"/>');
    }
};
IconMp_Sharp.styles = style;
IconMp_Sharp = __decorate([
    customElement('mdui-icon-mp--sharp')
], IconMp_Sharp);
export { IconMp_Sharp };
