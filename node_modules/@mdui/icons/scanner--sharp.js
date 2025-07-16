import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconScanner_Sharp = class IconScanner_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m4.2 5-.7 1.9L17.6 12H3v8h18v-8.86L4.2 5zM7 17H5v-2h2v2zm12 0H9v-2h10v2z"/>');
    }
};
IconScanner_Sharp.styles = style;
IconScanner_Sharp = __decorate([
    customElement('mdui-icon-scanner--sharp')
], IconScanner_Sharp);
export { IconScanner_Sharp };
