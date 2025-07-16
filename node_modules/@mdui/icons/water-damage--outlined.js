import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWaterDamage_Outlined = class IconWaterDamage_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M12 3 2 12h3v8h14v-8h3L12 3zM7 18v-7.81l5-4.5 5 4.5V18H7zm7-4c0 1.1-.9 2-2 2s-2-.9-2-2 2-4 2-4 2 2.9 2 4z"/>');
    }
};
IconWaterDamage_Outlined.styles = style;
IconWaterDamage_Outlined = __decorate([
    customElement('mdui-icon-water-damage--outlined')
], IconWaterDamage_Outlined);
export { IconWaterDamage_Outlined };
