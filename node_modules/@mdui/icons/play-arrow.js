import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPlayArrow = class IconPlayArrow extends LitElement {
    render() {
        return svgTag('<path d="M8 5v14l11-7z"/>');
    }
};
IconPlayArrow.styles = style;
IconPlayArrow = __decorate([
    customElement('mdui-icon-play-arrow')
], IconPlayArrow);
export { IconPlayArrow };
