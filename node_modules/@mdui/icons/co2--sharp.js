import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCo2_Sharp = class IconCo2_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M15 9h-5v6h5V9zm-1.5 4.5h-2v-3h2v3zM8 13v2H3V9h5v2H6.5v-.5h-2v3h2V13H8zm10.5 2.5v1h3V18H17v-3.5h3v-1h-3V12h4.5v3.5h-3z"/>');
    }
};
IconCo2_Sharp.styles = style;
IconCo2_Sharp = __decorate([
    customElement('mdui-icon-co2--sharp')
], IconCo2_Sharp);
export { IconCo2_Sharp };
