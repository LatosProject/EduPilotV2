import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWidthWide_Sharp = class IconWidthWide_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 4H2v16h20V4zM4 6h2v12H4V6zm16 12h-2V6h2v12z"/>');
    }
};
IconWidthWide_Sharp.styles = style;
IconWidthWide_Sharp = __decorate([
    customElement('mdui-icon-width-wide--sharp')
], IconWidthWide_Sharp);
export { IconWidthWide_Sharp };
