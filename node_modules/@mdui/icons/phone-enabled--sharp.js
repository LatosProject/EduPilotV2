import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPhoneEnabled_Sharp = class IconPhoneEnabled_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m3 15.46 5.27-.61 2.52 2.52c2.83-1.44 5.15-3.75 6.59-6.59l-2.53-2.53.61-5.25h5.51C21.55 13.18 13.18 21.55 3 20.97v-5.51z"/>');
    }
};
IconPhoneEnabled_Sharp.styles = style;
IconPhoneEnabled_Sharp = __decorate([
    customElement('mdui-icon-phone-enabled--sharp')
], IconPhoneEnabled_Sharp);
export { IconPhoneEnabled_Sharp };
