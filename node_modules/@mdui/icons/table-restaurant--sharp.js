import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTableRestaurant_Sharp = class IconTableRestaurant_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m22.33 11-2-7H3.67l-2 7H5.2L4 20h2l.67-5h10.67l.66 5h2l-1.2-9h3.53zm-15.4 2 .27-2h9.6l.27 2H6.93z"/>');
    }
};
IconTableRestaurant_Sharp.styles = style;
IconTableRestaurant_Sharp = __decorate([
    customElement('mdui-icon-table-restaurant--sharp')
], IconTableRestaurant_Sharp);
export { IconTableRestaurant_Sharp };
