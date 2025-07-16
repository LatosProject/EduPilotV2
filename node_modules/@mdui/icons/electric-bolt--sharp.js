import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconElectricBolt_Sharp = class IconElectricBolt_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M15 2 2.5 13 13 14l-5 7 1 1 12.5-11L11 10l5-7z"/>');
    }
};
IconElectricBolt_Sharp.styles = style;
IconElectricBolt_Sharp = __decorate([
    customElement('mdui-icon-electric-bolt--sharp')
], IconElectricBolt_Sharp);
export { IconElectricBolt_Sharp };
