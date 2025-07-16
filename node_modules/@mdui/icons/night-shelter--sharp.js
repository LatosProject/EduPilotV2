import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNightShelter_Sharp = class IconNightShelter_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 3 4 9v12h16V9l-8-6zm-2.25 9.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM17 18h-1v-1.5H8V18H7v-7h1v4.5h3.5V12H17v6z"/>');
    }
};
IconNightShelter_Sharp.styles = style;
IconNightShelter_Sharp = __decorate([
    customElement('mdui-icon-night-shelter--sharp')
], IconNightShelter_Sharp);
export { IconNightShelter_Sharp };
