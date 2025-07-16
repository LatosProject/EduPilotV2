import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAddLocation_Sharp = class IconAddLocation_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M13 6h-2v3H8v2h3v3h2v-3h3V9h-3V6zm-1-4c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"/>');
    }
};
IconAddLocation_Sharp.styles = style;
IconAddLocation_Sharp = __decorate([
    customElement('mdui-icon-add-location--sharp')
], IconAddLocation_Sharp);
export { IconAddLocation_Sharp };
