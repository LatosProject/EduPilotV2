import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconForward_Outlined = class IconForward_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M14 8.83 17.17 12 14 15.17V14H6v-4h8V8.83M12 4v4H4v8h8v4l8-8-8-8z"/>');
    }
};
IconForward_Outlined.styles = style;
IconForward_Outlined = __decorate([
    customElement('mdui-icon-forward--outlined')
], IconForward_Outlined);
export { IconForward_Outlined };
