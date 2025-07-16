import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPages_Sharp = class IconPages_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 3v8h5L7 7l4 1V3H3zm5 10H3v8h8v-5l-4 1 1-4zm9 4-4-1v5h8v-8h-5l1 4zm4-14h-8v5l4-1-1 4h5V3z"/>');
    }
};
IconPages_Sharp.styles = style;
IconPages_Sharp = __decorate([
    customElement('mdui-icon-pages--sharp')
], IconPages_Sharp);
export { IconPages_Sharp };
