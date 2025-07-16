import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFullscreen = class IconFullscreen extends LitElement {
    render() {
        return svgTag('<path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>');
    }
};
IconFullscreen.styles = style;
IconFullscreen = __decorate([
    customElement('mdui-icon-fullscreen')
], IconFullscreen);
export { IconFullscreen };
