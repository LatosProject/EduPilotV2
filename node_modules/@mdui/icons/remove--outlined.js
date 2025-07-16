import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRemove_Outlined = class IconRemove_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 13H5v-2h14v2z"/>');
    }
};
IconRemove_Outlined.styles = style;
IconRemove_Outlined = __decorate([
    customElement('mdui-icon-remove--outlined')
], IconRemove_Outlined);
export { IconRemove_Outlined };
