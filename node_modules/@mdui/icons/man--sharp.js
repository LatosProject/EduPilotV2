import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMan_Sharp = class IconMan_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M16 7H8v8h2v7h4v-7h2z"/><circle cx="12" cy="4" r="2"/>');
    }
};
IconMan_Sharp.styles = style;
IconMan_Sharp = __decorate([
    customElement('mdui-icon-man--sharp')
], IconMan_Sharp);
export { IconMan_Sharp };
