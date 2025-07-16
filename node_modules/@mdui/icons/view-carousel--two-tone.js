import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewCarousel_TwoTone = class IconViewCarousel_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M9 7h6v10H9z" opacity=".3"/><path d="M2 7h4v10H2V7zm5 12h10V5H7v14zM9 7h6v10H9V7zm9 0h4v10h-4V7z"/>');
    }
};
IconViewCarousel_TwoTone.styles = style;
IconViewCarousel_TwoTone = __decorate([
    customElement('mdui-icon-view-carousel--two-tone')
], IconViewCarousel_TwoTone);
export { IconViewCarousel_TwoTone };
