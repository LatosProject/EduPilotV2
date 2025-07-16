import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSave_Outlined = class IconSave_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"/>');
    }
};
IconSave_Outlined.styles = style;
IconSave_Outlined = __decorate([
    customElement('mdui-icon-save--outlined')
], IconSave_Outlined);
export { IconSave_Outlined };
