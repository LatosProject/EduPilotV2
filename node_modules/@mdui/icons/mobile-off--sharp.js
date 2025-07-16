import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMobileOff_Sharp = class IconMobileOff_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 5v8.61l2 2V1H5v.61L8.39 5zM2.9 2.35 1.49 3.76 5 7.27V23h14v-1.73l1.7 1.7 1.41-1.41L2.9 2.35zM7 19V9.27L16.73 19H7z"/>');
    }
};
IconMobileOff_Sharp.styles = style;
IconMobileOff_Sharp = __decorate([
    customElement('mdui-icon-mobile-off--sharp')
], IconMobileOff_Sharp);
export { IconMobileOff_Sharp };
