import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCameraRoll_Sharp = class IconCameraRoll_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M14 5V3h-3V1H5v2H2v19h12v-2h8V5h-8zm-2 13h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2z"/>');
    }
};
IconCameraRoll_Sharp.styles = style;
IconCameraRoll_Sharp = __decorate([
    customElement('mdui-icon-camera-roll--sharp')
], IconCameraRoll_Sharp);
export { IconCameraRoll_Sharp };
