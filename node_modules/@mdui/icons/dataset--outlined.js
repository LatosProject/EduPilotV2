import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDataset_Outlined = class IconDataset_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M7 13h4v4H7zm6 0h4v4h-4z"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><path d="M7 7h4v4H7zm6 0h4v4h-4z"/>');
    }
};
IconDataset_Outlined.styles = style;
IconDataset_Outlined = __decorate([
    customElement('mdui-icon-dataset--outlined')
], IconDataset_Outlined);
export { IconDataset_Outlined };
