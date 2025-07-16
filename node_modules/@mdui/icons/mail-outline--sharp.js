import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMailOutline_Sharp = class IconMailOutline_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 4H2.01L2 20h20V4zm-2 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>');
    }
};
IconMailOutline_Sharp.styles = style;
IconMailOutline_Sharp = __decorate([
    customElement('mdui-icon-mail-outline--sharp')
], IconMailOutline_Sharp);
export { IconMailOutline_Sharp };
