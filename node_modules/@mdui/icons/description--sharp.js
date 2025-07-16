import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDescription_Sharp = class IconDescription_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M14 2H4v20h16V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>');
    }
};
IconDescription_Sharp.styles = style;
IconDescription_Sharp = __decorate([
    customElement('mdui-icon-description--sharp')
], IconDescription_Sharp);
export { IconDescription_Sharp };
