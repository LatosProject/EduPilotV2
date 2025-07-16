import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWaterDamage_TwoTone = class IconWaterDamage_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m12 5.69-5 4.5V18h10v-7.81l-5-4.5zM12 16c-1.1 0-2-.9-2-2s2-4 2-4 2 2.9 2 4-.9 2-2 2z" opacity=".3"/><path d="M12 3 2 12h3v8h14v-8h3L12 3zM7 18v-7.81l5-4.5 5 4.5V18H7zm7-4c0 1.1-.9 2-2 2s-2-.9-2-2 2-4 2-4 2 2.9 2 4z"/>');
    }
};
IconWaterDamage_TwoTone.styles = style;
IconWaterDamage_TwoTone = __decorate([
    customElement('mdui-icon-water-damage--two-tone')
], IconWaterDamage_TwoTone);
export { IconWaterDamage_TwoTone };
