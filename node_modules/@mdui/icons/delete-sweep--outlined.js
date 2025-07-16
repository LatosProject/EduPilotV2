import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDeleteSweep_Outlined = class IconDeleteSweep_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zm2-8h6v8H5v-8zm5-6H6L5 5H2v2h12V5h-3z"/>');
    }
};
IconDeleteSweep_Outlined.styles = style;
IconDeleteSweep_Outlined = __decorate([
    customElement('mdui-icon-delete-sweep--outlined')
], IconDeleteSweep_Outlined);
export { IconDeleteSweep_Outlined };
