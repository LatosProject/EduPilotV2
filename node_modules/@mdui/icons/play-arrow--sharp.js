import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPlayArrow_Sharp = class IconPlayArrow_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M8 5v14l11-7L8 5z"/>');
    }
};
IconPlayArrow_Sharp.styles = style;
IconPlayArrow_Sharp = __decorate([
    customElement('mdui-icon-play-arrow--sharp')
], IconPlayArrow_Sharp);
export { IconPlayArrow_Sharp };
