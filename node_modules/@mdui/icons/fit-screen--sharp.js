import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFitScreen_Sharp = class IconFitScreen_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 4h5v5h-2V6h-3V4zM4 9V6h3V4H2v5h2zm16 6v3h-3v2h5v-5h-2zM7 18H4v-3H2v5h5v-2zM18 8H6v8h12V8z"/>');
    }
};
IconFitScreen_Sharp.styles = style;
IconFitScreen_Sharp = __decorate([
    customElement('mdui-icon-fit-screen--sharp')
], IconFitScreen_Sharp);
export { IconFitScreen_Sharp };
