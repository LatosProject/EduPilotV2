import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWysiwyg_Sharp = class IconWysiwyg_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 12H7v-2h10v2zm-4 2H7v2h6v-2zm8 7H3V3h18v18zM19 7H5v12h14V7z"/>');
    }
};
IconWysiwyg_Sharp.styles = style;
IconWysiwyg_Sharp = __decorate([
    customElement('mdui-icon-wysiwyg--sharp')
], IconWysiwyg_Sharp);
export { IconWysiwyg_Sharp };
