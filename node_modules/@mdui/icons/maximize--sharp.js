import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMaximize_Sharp = class IconMaximize_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 3h18v2H3V3z"/>');
    }
};
IconMaximize_Sharp.styles = style;
IconMaximize_Sharp = __decorate([
    customElement('mdui-icon-maximize--sharp')
], IconMaximize_Sharp);
export { IconMaximize_Sharp };
