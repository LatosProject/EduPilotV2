import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSuperscript_Sharp = class IconSuperscript_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 7v1h3v1h-4V6h3V5h-3V4h4v3h-3zM5.88 20h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 6h-2.68l-3.07 4.99h-.12L8.85 6H6.19l4.32 6.73L5.88 20z"/>');
    }
};
IconSuperscript_Sharp.styles = style;
IconSuperscript_Sharp = __decorate([
    customElement('mdui-icon-superscript--sharp')
], IconSuperscript_Sharp);
export { IconSuperscript_Sharp };
