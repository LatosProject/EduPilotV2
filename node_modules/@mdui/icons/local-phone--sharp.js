import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLocalPhone_Sharp = class IconLocalPhone_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m21 15.46-5.27-.61-2.52 2.52a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51z"/>');
    }
};
IconLocalPhone_Sharp.styles = style;
IconLocalPhone_Sharp = __decorate([
    customElement('mdui-icon-local-phone--sharp')
], IconLocalPhone_Sharp);
export { IconLocalPhone_Sharp };
