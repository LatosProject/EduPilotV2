import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLaptop_Sharp = class IconLaptop_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m20 18 2-2V4H2v12l2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>');
    }
};
IconLaptop_Sharp.styles = style;
IconLaptop_Sharp = __decorate([
    customElement('mdui-icon-laptop--sharp')
], IconLaptop_Sharp);
export { IconLaptop_Sharp };
