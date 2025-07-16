import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPlayArrow_TwoTone = class IconPlayArrow_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M10 8.64v6.72L15.27 12z" opacity=".3"/><path d="m8 19 11-7L8 5v14zm2-10.36L15.27 12 10 15.36V8.64z"/>');
    }
};
IconPlayArrow_TwoTone.styles = style;
IconPlayArrow_TwoTone = __decorate([
    customElement('mdui-icon-play-arrow--two-tone')
], IconPlayArrow_TwoTone);
export { IconPlayArrow_TwoTone };
