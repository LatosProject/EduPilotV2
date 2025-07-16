import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDoorBack_Sharp = class IconDoorBack_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 19V3H5v16H3v2h18v-2h-2zm-8-6H9v-2h2v2z"/>');
    }
};
IconDoorBack_Sharp.styles = style;
IconDoorBack_Sharp = __decorate([
    customElement('mdui-icon-door-back--sharp')
], IconDoorBack_Sharp);
export { IconDoorBack_Sharp };
