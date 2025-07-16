import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPermPhoneMsg_Sharp = class IconPermPhoneMsg_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 3v10l3-3h6V3zm1.21 14.37a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61-2.52 2.52z"/>');
    }
};
IconPermPhoneMsg_Sharp.styles = style;
IconPermPhoneMsg_Sharp = __decorate([
    customElement('mdui-icon-perm-phone-msg--sharp')
], IconPermPhoneMsg_Sharp);
export { IconPermPhoneMsg_Sharp };
