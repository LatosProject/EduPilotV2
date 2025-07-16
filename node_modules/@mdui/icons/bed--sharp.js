import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBed_Sharp = class IconBed_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 10V5H3v5H2v9h2v-2h16v2h2v-9h-1zm-8-3h6v3h-6V7zm-8 3V7h6v3H5zm-1 5v-3h16v3H4z"/>');
    }
};
IconBed_Sharp.styles = style;
IconBed_Sharp = __decorate([
    customElement('mdui-icon-bed--sharp')
], IconBed_Sharp);
export { IconBed_Sharp };
