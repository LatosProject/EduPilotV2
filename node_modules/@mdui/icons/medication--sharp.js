import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMedication_Sharp = class IconMedication_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M6 3h12v2H6zm13 3H5v15h14V6zm-3 9h-2.5v2.5h-3V15H8v-3h2.5V9.5h3V12H16v3z"/>');
    }
};
IconMedication_Sharp.styles = style;
IconMedication_Sharp = __decorate([
    customElement('mdui-icon-medication--sharp')
], IconMedication_Sharp);
export { IconMedication_Sharp };
