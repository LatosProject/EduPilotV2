import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFullscreenExit = class IconFullscreenExit extends LitElement {
    render() {
        return svgTag('<path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>');
    }
};
IconFullscreenExit.styles = style;
IconFullscreenExit = __decorate([
    customElement('mdui-icon-fullscreen-exit')
], IconFullscreenExit);
export { IconFullscreenExit };
