import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOpenInNew_Sharp = class IconOpenInNew_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 19H5V5h7V3H3v18h18v-9h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>');
    }
};
IconOpenInNew_Sharp.styles = style;
IconOpenInNew_Sharp = __decorate([
    customElement('mdui-icon-open-in-new--sharp')
], IconOpenInNew_Sharp);
export { IconOpenInNew_Sharp };
