import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWaterDamage = class IconWaterDamage extends LitElement {
    render() {
        return svgTag('<path d="M12 3 2 12h3v8h14v-8h3L12 3zm0 13c-1.1 0-2-.9-2-2s2-4 2-4 2 2.9 2 4-.9 2-2 2z"/>');
    }
};
IconWaterDamage.styles = style;
IconWaterDamage = __decorate([
    customElement('mdui-icon-water-damage')
], IconWaterDamage);
export { IconWaterDamage };
