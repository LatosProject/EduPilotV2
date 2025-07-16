import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVolumeMute = class IconVolumeMute extends LitElement {
    render() {
        return svgTag('<path d="M7 9v6h4l5 5V4l-5 5H7z"/>');
    }
};
IconVolumeMute.styles = style;
IconVolumeMute = __decorate([
    customElement('mdui-icon-volume-mute')
], IconVolumeMute);
export { IconVolumeMute };
