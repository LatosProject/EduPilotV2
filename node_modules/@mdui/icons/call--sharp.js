import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCall_Sharp = class IconCall_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m21 15.46-5.27-.61-2.52 2.52a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51z"/>');
    }
};
IconCall_Sharp.styles = style;
IconCall_Sharp = __decorate([
    customElement('mdui-icon-call--sharp')
], IconCall_Sharp);
export { IconCall_Sharp };
