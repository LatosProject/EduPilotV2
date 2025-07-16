import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMultipleStop_Sharp = class IconMultipleStop_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m17 4 4 4-4 4V9h-4V7h4V4zM7 17h4v-2H7v-3l-4 4 4 4v-3zm12-2h-2v2h2v-2zm-4 0h-2v2h2v-2zm-4-8H9v2h2V7zM7 7H5v2h2V7z"/>');
    }
};
IconMultipleStop_Sharp.styles = style;
IconMultipleStop_Sharp = __decorate([
    customElement('mdui-icon-multiple-stop--sharp')
], IconMultipleStop_Sharp);
export { IconMultipleStop_Sharp };
