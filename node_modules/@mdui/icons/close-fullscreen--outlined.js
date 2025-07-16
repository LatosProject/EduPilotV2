import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCloseFullscreen_Outlined = class IconCloseFullscreen_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M22 3.41 16.71 8.7 20 12h-8V4l3.29 3.29L20.59 2 22 3.41zM3.41 22l5.29-5.29L12 20v-8H4l3.29 3.29L2 20.59 3.41 22z"/>');
    }
};
IconCloseFullscreen_Outlined.styles = style;
IconCloseFullscreen_Outlined = __decorate([
    customElement('mdui-icon-close-fullscreen--outlined')
], IconCloseFullscreen_Outlined);
export { IconCloseFullscreen_Outlined };
