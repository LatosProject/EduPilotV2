import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWaterfallChart_Outlined = class IconWaterfallChart_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M18 4h3v16h-3V4zM3 13h3v7H3v-7zm11-9h3v3h-3V4zm-4 1h3v4h-3V5zm-3 5h3v4H7v-4z"/>');
    }
};
IconWaterfallChart_Outlined.styles = style;
IconWaterfallChart_Outlined = __decorate([
    customElement('mdui-icon-waterfall-chart--outlined')
], IconWaterfallChart_Outlined);
export { IconWaterfallChart_Outlined };
