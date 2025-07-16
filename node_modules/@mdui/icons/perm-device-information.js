import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPermDeviceInformation = class IconPermDeviceInformation extends LitElement {
    render() {
        return svgTag('<path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>');
    }
};
IconPermDeviceInformation.styles = style;
IconPermDeviceInformation = __decorate([
    customElement('mdui-icon-perm-device-information')
], IconPermDeviceInformation);
export { IconPermDeviceInformation };
