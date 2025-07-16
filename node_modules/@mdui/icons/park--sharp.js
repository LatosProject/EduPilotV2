import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPark_Sharp = class IconPark_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.96v-4H21z"/>');
    }
};
IconPark_Sharp.styles = style;
IconPark_Sharp = __decorate([
    customElement('mdui-icon-park--sharp')
], IconPark_Sharp);
export { IconPark_Sharp };
