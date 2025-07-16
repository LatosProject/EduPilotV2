import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHealthAndSafety_Sharp = class IconHealthAndSafety_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M10.5 13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3V13zM12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"/>');
    }
};
IconHealthAndSafety_Sharp.styles = style;
IconHealthAndSafety_Sharp = __decorate([
    customElement('mdui-icon-health-and-safety--sharp')
], IconHealthAndSafety_Sharp);
export { IconHealthAndSafety_Sharp };
