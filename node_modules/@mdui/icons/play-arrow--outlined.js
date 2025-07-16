import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPlayArrow_Outlined = class IconPlayArrow_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M10 8.64 15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/>');
    }
};
IconPlayArrow_Outlined.styles = style;
IconPlayArrow_Outlined = __decorate([
    customElement('mdui-icon-play-arrow--outlined')
], IconPlayArrow_Outlined);
export { IconPlayArrow_Outlined };
