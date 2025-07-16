import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPrint_Sharp = class IconPrint_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 8H2v9h4v4h12v-4h4V8zm-6 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>');
    }
};
IconPrint_Sharp.styles = style;
IconPrint_Sharp = __decorate([
    customElement('mdui-icon-print--sharp')
], IconPrint_Sharp);
export { IconPrint_Sharp };
