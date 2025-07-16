import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPublish_Outlined = class IconPublish_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M5 4h14v2H5zm0 10h4v6h6v-6h4l-7-7-7 7zm8-2v6h-2v-6H9.83L12 9.83 14.17 12H13z"/>');
    }
};
IconPublish_Outlined.styles = style;
IconPublish_Outlined = __decorate([
    customElement('mdui-icon-publish--outlined')
], IconPublish_Outlined);
export { IconPublish_Outlined };
