import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSettingsOverscan_Sharp = class IconSettingsOverscan_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12.01 5.5 10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm9-13H1v18h22V3zm-2 16.01H3V4.99h18v14.02z"/>');
    }
};
IconSettingsOverscan_Sharp.styles = style;
IconSettingsOverscan_Sharp = __decorate([
    customElement('mdui-icon-settings-overscan--sharp')
], IconSettingsOverscan_Sharp);
export { IconSettingsOverscan_Sharp };
