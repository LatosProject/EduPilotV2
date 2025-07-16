import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAdfScanner_Sharp = class IconAdfScanner_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 12h-4V4H6v8H2v8h20v-8zm-6 0H8V6h8v6zm2 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>');
    }
};
IconAdfScanner_Sharp.styles = style;
IconAdfScanner_Sharp = __decorate([
    customElement('mdui-icon-adf-scanner--sharp')
], IconAdfScanner_Sharp);
export { IconAdfScanner_Sharp };
