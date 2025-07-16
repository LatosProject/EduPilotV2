import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChairAlt_Sharp = class IconChairAlt_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M16 10h3V3H5v7h3v2H5v9h2v-3h10v3h2v-9h-3v-2zM7 8V5h10v3H7zm10 8H7v-2h10v2zm-3-4h-4v-2h4v2z"/>');
    }
};
IconChairAlt_Sharp.styles = style;
IconChairAlt_Sharp = __decorate([
    customElement('mdui-icon-chair-alt--sharp')
], IconChairAlt_Sharp);
export { IconChairAlt_Sharp };
