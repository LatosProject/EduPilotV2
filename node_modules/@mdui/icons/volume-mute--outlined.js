import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVolumeMute_Outlined = class IconVolumeMute_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M14 8.83v6.34L11.83 13H9v-2h2.83L14 8.83M16 4l-5 5H7v6h4l5 5V4z"/>');
    }
};
IconVolumeMute_Outlined.styles = style;
IconVolumeMute_Outlined = __decorate([
    customElement('mdui-icon-volume-mute--outlined')
], IconVolumeMute_Outlined);
export { IconVolumeMute_Outlined };
