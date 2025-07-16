import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDeleteSweep = class IconDeleteSweep extends LitElement {
    render() {
        return svgTag('<path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"/>');
    }
};
IconDeleteSweep.styles = style;
IconDeleteSweep = __decorate([
    customElement('mdui-icon-delete-sweep')
], IconDeleteSweep);
export { IconDeleteSweep };
