import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEgg_Sharp = class IconEgg_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 3C8.5 3 5 9.33 5 14c0 3.87 3.13 7 7 7s7-3.13 7-7c0-4.67-3.5-11-7-11zm1 15c-3 0-5-1.99-5-5v-1h2v1c0 2.92 2.42 3 3 3h1v2h-1z"/>');
    }
};
IconEgg_Sharp.styles = style;
IconEgg_Sharp = __decorate([
    customElement('mdui-icon-egg--sharp')
], IconEgg_Sharp);
export { IconEgg_Sharp };
