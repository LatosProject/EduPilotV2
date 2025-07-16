import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVolumeDown_Rounded = class IconVolumeDown_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M18.5 12A4.5 4.5 0 0 0 16 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L9 9H6c-.55 0-1 .45-1 1z"/>');
    }
};
IconVolumeDown_Rounded.styles = style;
IconVolumeDown_Rounded = __decorate([
    customElement('mdui-icon-volume-down--rounded')
], IconVolumeDown_Rounded);
export { IconVolumeDown_Rounded };
