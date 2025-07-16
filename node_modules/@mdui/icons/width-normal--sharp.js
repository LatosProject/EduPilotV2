import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWidthNormal_Sharp = class IconWidthNormal_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 4H2v16h20V4zM4 6h4v12H4V6zm16 12h-4V6h4v12z"/>');
    }
};
IconWidthNormal_Sharp.styles = style;
IconWidthNormal_Sharp = __decorate([
    customElement('mdui-icon-width-normal--sharp')
], IconWidthNormal_Sharp);
export { IconWidthNormal_Sharp };
