import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHideImage_Sharp = class IconHideImage_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H5.83L21 18.17zM2.81 2.81 1.39 4.22 3 5.83V21h15.17l1.61 1.61 1.41-1.41L2.81 2.81zM6 17l3-4 2.25 3 .82-1.1 2.1 2.1H6z"/>');
    }
};
IconHideImage_Sharp.styles = style;
IconHideImage_Sharp = __decorate([
    customElement('mdui-icon-hide-image--sharp')
], IconHideImage_Sharp);
export { IconHideImage_Sharp };
