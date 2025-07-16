import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAdfScanner_Outlined = class IconAdfScanner_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 12h-1V4H6v8H5c-1.66 0-3 1.34-3 3v5h20v-5c0-1.66-1.34-3-3-3zM8 6h8v6H8V6zm12 12H4v-3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v3z"/><circle cx="18" cy="16" r="1"/>');
    }
};
IconAdfScanner_Outlined.styles = style;
IconAdfScanner_Outlined = __decorate([
    customElement('mdui-icon-adf-scanner--outlined')
], IconAdfScanner_Outlined);
export { IconAdfScanner_Outlined };
