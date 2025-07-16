import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVolumeMute_Rounded = class IconVolumeMute_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M7 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L11 9H8c-.55 0-1 .45-1 1z"/>');
    }
};
IconVolumeMute_Rounded.styles = style;
IconVolumeMute_Rounded = __decorate([
    customElement('mdui-icon-volume-mute--rounded')
], IconVolumeMute_Rounded);
export { IconVolumeMute_Rounded };
