import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewCarousel_Outlined = class IconViewCarousel_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M2 7h4v10H2V7zm5 12h10V5H7v14zM9 7h6v10H9V7zm9 0h4v10h-4V7z"/>');
    }
};
IconViewCarousel_Outlined.styles = style;
IconViewCarousel_Outlined = __decorate([
    customElement('mdui-icon-view-carousel--outlined')
], IconViewCarousel_Outlined);
export { IconViewCarousel_Outlined };
