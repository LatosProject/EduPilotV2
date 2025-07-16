import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCameraIndoor_Sharp = class IconCameraIndoor_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 3 4 9v12h16V9l-8-6zm4 13.06L14 15v2H8v-6h6v2l2-1.06v4.12z"/>');
    }
};
IconCameraIndoor_Sharp.styles = style;
IconCameraIndoor_Sharp = __decorate([
    customElement('mdui-icon-camera-indoor--sharp')
], IconCameraIndoor_Sharp);
export { IconCameraIndoor_Sharp };
