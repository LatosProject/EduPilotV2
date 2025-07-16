import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSlideshow_Outlined = class IconSlideshow_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>');
    }
};
IconSlideshow_Outlined.styles = style;
IconSlideshow_Outlined = __decorate([
    customElement('mdui-icon-slideshow--outlined')
], IconSlideshow_Outlined);
export { IconSlideshow_Outlined };
