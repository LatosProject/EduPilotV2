import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHexagon_Sharp = class IconHexagon_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17.2 3H6.8l-5.2 9 5.2 9h10.4l5.2-9z"/>');
    }
};
IconHexagon_Sharp.styles = style;
IconHexagon_Sharp = __decorate([
    customElement('mdui-icon-hexagon--sharp')
], IconHexagon_Sharp);
export { IconHexagon_Sharp };
