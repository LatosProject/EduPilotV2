import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPermDeviceInformation_Sharp = class IconPermDeviceInformation_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zM5 1v22h14V1H5zm12 18H7V5h10v14z"/>');
    }
};
IconPermDeviceInformation_Sharp.styles = style;
IconPermDeviceInformation_Sharp = __decorate([
    customElement('mdui-icon-perm-device-information--sharp')
], IconPermDeviceInformation_Sharp);
export { IconPermDeviceInformation_Sharp };
