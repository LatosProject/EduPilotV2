import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNavigation_TwoTone = class IconNavigation_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m7.72 17.7 3.47-1.53.81-.36.81.36 3.47 1.53L12 7.27z" opacity=".3"/><path d="m4.5 20.29.71.71L12 18l6.79 3 .71-.71L12 2 4.5 20.29zm8.31-4.12-.81-.36-.81.36-3.47 1.53L12 7.27l4.28 10.43-3.47-1.53z"/>');
    }
};
IconNavigation_TwoTone.styles = style;
IconNavigation_TwoTone = __decorate([
    customElement('mdui-icon-navigation--two-tone')
], IconNavigation_TwoTone);
export { IconNavigation_TwoTone };
