import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDoorFront_Sharp = class IconDoorFront_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 19V3H5v16H3v2h18v-2h-2zm-4-6h-2v-2h2v2z"/>');
    }
};
IconDoorFront_Sharp.styles = style;
IconDoorFront_Sharp = __decorate([
    customElement('mdui-icon-door-front--sharp')
], IconDoorFront_Sharp);
export { IconDoorFront_Sharp };
