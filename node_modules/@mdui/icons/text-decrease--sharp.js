import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTextDecrease_Sharp = class IconTextDecrease_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M.99 19h2.42l1.27-3.58h5.65L11.59 19h2.42L8.75 5h-2.5L.99 19zm4.42-5.61L7.44 7.6h.12l2.03 5.79H5.41zM23 11v2h-8v-2h8z"/>');
    }
};
IconTextDecrease_Sharp.styles = style;
IconTextDecrease_Sharp = __decorate([
    customElement('mdui-icon-text-decrease--sharp')
], IconTextDecrease_Sharp);
export { IconTextDecrease_Sharp };
