import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHMobiledata_Rounded = class IconHMobiledata_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M15 11H9V8c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1v-3h6v3c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v3z"/>');
    }
};
IconHMobiledata_Rounded.styles = style;
IconHMobiledata_Rounded = __decorate([
    customElement('mdui-icon-h-mobiledata--rounded')
], IconHMobiledata_Rounded);
export { IconHMobiledata_Rounded };
