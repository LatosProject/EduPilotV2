import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDeviceHub_Outlined = class IconDeviceHub_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m17 16-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z"/>');
    }
};
IconDeviceHub_Outlined.styles = style;
IconDeviceHub_Outlined = __decorate([
    customElement('mdui-icon-device-hub--outlined')
], IconDeviceHub_Outlined);
export { IconDeviceHub_Outlined };
