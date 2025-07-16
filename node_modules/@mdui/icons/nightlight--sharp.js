import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNightlight_Sharp = class IconNightlight_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M14 2c1.82 0 3.53.5 5 1.35-2.99 1.73-5 4.95-5 8.65s2.01 6.92 5 8.65A9.973 9.973 0 0 1 14 22C8.48 22 4 17.52 4 12S8.48 2 14 2z"/>');
    }
};
IconNightlight_Sharp.styles = style;
IconNightlight_Sharp = __decorate([
    customElement('mdui-icon-nightlight--sharp')
], IconNightlight_Sharp);
export { IconNightlight_Sharp };
