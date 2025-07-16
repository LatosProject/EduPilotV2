import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBrightness_1_TwoTone = class IconBrightness_1_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12 20c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8z" opacity=".3"/><path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8z"/>');
    }
};
IconBrightness_1_TwoTone.styles = style;
IconBrightness_1_TwoTone = __decorate([
    customElement('mdui-icon-brightness-1--two-tone')
], IconBrightness_1_TwoTone);
export { IconBrightness_1_TwoTone };
