import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSlideshow_Sharp = class IconSlideshow_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M10 8v8l5-4-5-4zm11-5H3v18h18V3zm-2 16H5V5h14v14z"/>');
    }
};
IconSlideshow_Sharp.styles = style;
IconSlideshow_Sharp = __decorate([
    customElement('mdui-icon-slideshow--sharp')
], IconSlideshow_Sharp);
export { IconSlideshow_Sharp };
