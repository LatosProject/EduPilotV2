import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLabelOff_Sharp = class IconLabelOff_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m22 12-4.97-7H8.66l10.7 10.73zM2 4l1 1v14h14l2 2 1.41-1.41L3.44 2.62z"/>');
    }
};
IconLabelOff_Sharp.styles = style;
IconLabelOff_Sharp = __decorate([
    customElement('mdui-icon-label-off--sharp')
], IconLabelOff_Sharp);
export { IconLabelOff_Sharp };
