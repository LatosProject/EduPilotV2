import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVolumeDown = class IconVolumeDown extends LitElement {
    render() {
        return svgTag('<path d="M18.5 12A4.5 4.5 0 0 0 16 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/>');
    }
};
IconVolumeDown.styles = style;
IconVolumeDown = __decorate([
    customElement('mdui-icon-volume-down')
], IconVolumeDown);
export { IconVolumeDown };
