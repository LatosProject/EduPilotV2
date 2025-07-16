import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWysiwyg_Outlined = class IconWysiwyg_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 16H5V7h14v12zm-2-7H7v-2h10v2zm-4 4H7v-2h6v2z"/>');
    }
};
IconWysiwyg_Outlined.styles = style;
IconWysiwyg_Outlined = __decorate([
    customElement('mdui-icon-wysiwyg--outlined')
], IconWysiwyg_Outlined);
export { IconWysiwyg_Outlined };
