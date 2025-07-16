import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOndemandVideo = class IconOndemandVideo extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 0 0-2-2zm0 14H3V5h18v12zm-5-6-7 4V7z"/>');
    }
};
IconOndemandVideo.styles = style;
IconOndemandVideo = __decorate([
    customElement('mdui-icon-ondemand-video')
], IconOndemandVideo);
export { IconOndemandVideo };
