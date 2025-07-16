import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMan_2_Sharp = class IconMan_2_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M16 7H8v8h2.5v7h3v-7H16z"/><circle cx="12" cy="4" r="2"/>');
    }
};
IconMan_2_Sharp.styles = style;
IconMan_2_Sharp = __decorate([
    customElement('mdui-icon-man-2--sharp')
], IconMan_2_Sharp);
export { IconMan_2_Sharp };
