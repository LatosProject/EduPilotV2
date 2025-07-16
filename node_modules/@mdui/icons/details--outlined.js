import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDetails_Outlined = class IconDetails_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M12 3 2 21h20L12 3zm1 5.92L18.6 19H13V8.92zm-2 0V19H5.4L11 8.92z"/>');
    }
};
IconDetails_Outlined.styles = style;
IconDetails_Outlined = __decorate([
    customElement('mdui-icon-details--outlined')
], IconDetails_Outlined);
export { IconDetails_Outlined };
