import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconExpand_Rounded = class IconExpand_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M5 20h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zM5 2h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm8 7h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.2-.2-.51-.2-.71 0L8.85 8.15a.5.5 0 0 0 .36.85H11v6H9.21c-.45 0-.67.54-.35.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79a.5.5 0 0 0-.35-.85H13V9z"/>');
    }
};
IconExpand_Rounded.styles = style;
IconExpand_Rounded = __decorate([
    customElement('mdui-icon-expand--rounded')
], IconExpand_Rounded);
export { IconExpand_Rounded };
