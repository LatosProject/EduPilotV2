import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDeleteSweep_Sharp = class IconDeleteSweep_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M15 16h4v2h-4v-2zm0-8h7v2h-7V8zm0 4h6v2h-6v-2zM3 20h10V8H3v12zM14 5h-3l-1-1H6L5 5H2v2h12V5z"/>');
    }
};
IconDeleteSweep_Sharp.styles = style;
IconDeleteSweep_Sharp = __decorate([
    customElement('mdui-icon-delete-sweep--sharp')
], IconDeleteSweep_Sharp);
export { IconDeleteSweep_Sharp };
