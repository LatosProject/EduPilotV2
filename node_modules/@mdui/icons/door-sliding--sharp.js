import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDoorSliding_Sharp = class IconDoorSliding_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 19V3h-7.25v16h-1.5V3H4v16H3v2h18v-2h-1zm-10-6H8v-2h2v2zm6 0h-2v-2h2v2z"/>');
    }
};
IconDoorSliding_Sharp.styles = style;
IconDoorSliding_Sharp = __decorate([
    customElement('mdui-icon-door-sliding--sharp')
], IconDoorSliding_Sharp);
export { IconDoorSliding_Sharp };
