import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconExposurePlus_1_Rounded = class IconExposurePlus_1_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M9 7c-.55 0-1 .45-1 1v3H5c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1zm11 11h-2V7.38L15 8.4V6.7L19.7 5h.3v13z"/>');
    }
};
IconExposurePlus_1_Rounded.styles = style;
IconExposurePlus_1_Rounded = __decorate([
    customElement('mdui-icon-exposure-plus-1--rounded')
], IconExposurePlus_1_Rounded);
export { IconExposurePlus_1_Rounded };
