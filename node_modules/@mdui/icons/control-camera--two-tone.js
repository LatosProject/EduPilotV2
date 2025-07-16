import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconControlCamera_TwoTone = class IconControlCamera_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7.3 13.77 5.54 12l1.76-1.77-1.76-1.77L2 12l3.54 3.54zm8.24 4.69-1.77-1.76L12 18.46l-1.77-1.76-1.77 1.76L12 22zm2.92-2.92L22 12l-3.54-3.54-1.76 1.77L18.46 12l-1.76 1.77zM12 5.54l1.77 1.76 1.77-1.76L12 2 8.46 5.54l1.77 1.76z"/><circle cx="12" cy="12" r="3"/>');
    }
};
IconControlCamera_TwoTone.styles = style;
IconControlCamera_TwoTone = __decorate([
    customElement('mdui-icon-control-camera--two-tone')
], IconControlCamera_TwoTone);
export { IconControlCamera_TwoTone };
