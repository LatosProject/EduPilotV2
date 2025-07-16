import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNearMe_Rounded = class IconNearMe_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M18.75 3.94 4.07 10.08c-.83.35-.81 1.53.02 1.85L9.43 14a1 1 0 0 1 .57.57l2.06 5.33c.32.84 1.51.86 1.86.03l6.15-14.67c.33-.83-.5-1.66-1.32-1.32z"/>');
    }
};
IconNearMe_Rounded.styles = style;
IconNearMe_Rounded = __decorate([
    customElement('mdui-icon-near-me--rounded')
], IconNearMe_Rounded);
export { IconNearMe_Rounded };
