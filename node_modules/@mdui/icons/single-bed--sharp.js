import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSingleBed_Sharp = class IconSingleBed_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M18 10V5H6v5H4v7h1.33L6 19h1l.67-2h8.67l.66 2h1l.67-2H20v-7h-2zm-7 0H8V7h3v3zm5 0h-3V7h3v3z"/>');
    }
};
IconSingleBed_Sharp.styles = style;
IconSingleBed_Sharp = __decorate([
    customElement('mdui-icon-single-bed--sharp')
], IconSingleBed_Sharp);
export { IconSingleBed_Sharp };
