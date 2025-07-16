import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowCircleLeft_Sharp = class IconArrowCircleLeft_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm10-1h4v2h-4v3l-4-4 4-4v3z"/>');
    }
};
IconArrowCircleLeft_Sharp.styles = style;
IconArrowCircleLeft_Sharp = __decorate([
    customElement('mdui-icon-arrow-circle-left--sharp')
], IconArrowCircleLeft_Sharp);
export { IconArrowCircleLeft_Sharp };
