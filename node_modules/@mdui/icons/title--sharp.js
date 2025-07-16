import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTitle_Sharp = class IconTitle_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M5 4v3h5.5v12h3V7H19V4H5z"/>');
    }
};
IconTitle_Sharp.styles = style;
IconTitle_Sharp = __decorate([
    customElement('mdui-icon-title--sharp')
], IconTitle_Sharp);
export { IconTitle_Sharp };
