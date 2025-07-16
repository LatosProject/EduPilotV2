import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCameraAlt_Sharp = class IconCameraAlt_Sharp extends LitElement {
    render() {
        return svgTag('<circle cx="12" cy="12" r="3"/><path d="M16.83 4 15 2H9L7.17 4H2v16h20V4h-5.17zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>');
    }
};
IconCameraAlt_Sharp.styles = style;
IconCameraAlt_Sharp = __decorate([
    customElement('mdui-icon-camera-alt--sharp')
], IconCameraAlt_Sharp);
export { IconCameraAlt_Sharp };
