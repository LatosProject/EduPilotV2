import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVolumeDown_Outlined = class IconVolumeDown_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M16 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02A4.5 4.5 0 0 0 16 7.97zM5 9v6h4l5 5V4L9 9H5zm7-.17v6.34L9.83 13H7v-2h2.83L12 8.83z"/>');
    }
};
IconVolumeDown_Outlined.styles = style;
IconVolumeDown_Outlined = __decorate([
    customElement('mdui-icon-volume-down--outlined')
], IconVolumeDown_Outlined);
export { IconVolumeDown_Outlined };
