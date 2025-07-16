import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSlideshow_TwoTone = class IconSlideshow_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 19h14V5H5v14zm5-11 5 4-5 4V8z" opacity=".3"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM10 8v8l5-4z"/>');
    }
};
IconSlideshow_TwoTone.styles = style;
IconSlideshow_TwoTone = __decorate([
    customElement('mdui-icon-slideshow--two-tone')
], IconSlideshow_TwoTone);
export { IconSlideshow_TwoTone };
