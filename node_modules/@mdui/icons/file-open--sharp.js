import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFileOpen_Sharp = class IconFileOpen_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M14 2H4v20h11v-8h5V8l-6-6zm-1 7V3.5L18.5 9H13zm4 12.66V16h5.66v2h-2.24l2.95 2.95-1.41 1.41L19 19.41v2.24h-2z"/>');
    }
};
IconFileOpen_Sharp.styles = style;
IconFileOpen_Sharp = __decorate([
    customElement('mdui-icon-file-open--sharp')
], IconFileOpen_Sharp);
export { IconFileOpen_Sharp };
