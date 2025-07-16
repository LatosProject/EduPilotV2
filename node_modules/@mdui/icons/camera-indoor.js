import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCameraIndoor = class IconCameraIndoor extends LitElement {
    render() {
        return svgTag('<path d="M12 3 4 9v12h16V9l-8-6zm4 13.06L14 15v1c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1l2-1.06v4.12z"/>');
    }
};
IconCameraIndoor.styles = style;
IconCameraIndoor = __decorate([
    customElement('mdui-icon-camera-indoor')
], IconCameraIndoor);
export { IconCameraIndoor };
