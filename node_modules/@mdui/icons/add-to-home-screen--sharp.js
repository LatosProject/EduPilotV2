import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAddToHomeScreen_Sharp = class IconAddToHomeScreen_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 1.01 6 1v5h2V5h10v14H8v-1H6v5h14V1.01zM10 15h2V8H5v2h3.59L3 15.59 4.41 17 10 11.41V15z"/>');
    }
};
IconAddToHomeScreen_Sharp.styles = style;
IconAddToHomeScreen_Sharp = __decorate([
    customElement('mdui-icon-add-to-home-screen--sharp')
], IconAddToHomeScreen_Sharp);
export { IconAddToHomeScreen_Sharp };
