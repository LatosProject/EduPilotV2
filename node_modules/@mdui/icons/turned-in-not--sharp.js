import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTurnedInNot_Sharp = class IconTurnedInNot_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 3H5.01L5 21l7-3 7 3V3zm-2 15-5-2.18L7 18V5h10v13z"/>');
    }
};
IconTurnedInNot_Sharp.styles = style;
IconTurnedInNot_Sharp = __decorate([
    customElement('mdui-icon-turned-in-not--sharp')
], IconTurnedInNot_Sharp);
export { IconTurnedInNot_Sharp };
