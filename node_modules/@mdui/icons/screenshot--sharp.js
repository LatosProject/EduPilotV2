import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconScreenshot_Sharp = class IconScreenshot_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M5 1v22h14V1H5zm12 17H7V6h10v12zM9.5 8.5H12V7H8v4h1.5V8.5zM12 17h4v-4h-1.5v2.5H12V17z"/>');
    }
};
IconScreenshot_Sharp.styles = style;
IconScreenshot_Sharp = __decorate([
    customElement('mdui-icon-screenshot--sharp')
], IconScreenshot_Sharp);
export { IconScreenshot_Sharp };
