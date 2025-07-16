import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCarpenter_Sharp = class IconCarpenter_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M7 1.5 3.11 5.39l8.13 11.67-1.41 1.41 4.24 4.24 7.07-7.07L7 1.5zm5.66 16.97 4.24-4.24 1.41 1.41-4.24 4.24-1.41-1.41z"/>');
    }
};
IconCarpenter_Sharp.styles = style;
IconCarpenter_Sharp = __decorate([
    customElement('mdui-icon-carpenter--sharp')
], IconCarpenter_Sharp);
export { IconCarpenter_Sharp };
