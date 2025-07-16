import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDetails_Rounded = class IconDetails_Rounded extends LitElement {
    render() {
        return svgTag('<path d="m11.13 4.57-8.3 14.94c-.37.67.11 1.49.87 1.49h16.6c.76 0 1.24-.82.87-1.49l-8.3-14.94a.997.997 0 0 0-1.74 0zM13 8.92 18.6 19H13V8.92zm-2 0V19H5.4L11 8.92z"/>');
    }
};
IconDetails_Rounded.styles = style;
IconDetails_Rounded = __decorate([
    customElement('mdui-icon-details--rounded')
], IconDetails_Rounded);
export { IconDetails_Rounded };
