import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCameraOutdoor_Sharp = class IconCameraOutdoor_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M18 14v-2h-6v6h6v-2l2 1.06v-4.12L18 14zM12 3 4 9v12h16v-2H6v-9l6-4.5 6 4.5v1h2V9l-8-6z"/>');
    }
};
IconCameraOutdoor_Sharp.styles = style;
IconCameraOutdoor_Sharp = __decorate([
    customElement('mdui-icon-camera-outdoor--sharp')
], IconCameraOutdoor_Sharp);
export { IconCameraOutdoor_Sharp };
