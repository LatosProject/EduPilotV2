import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewTimeline_Sharp = class IconViewTimeline_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zm-9 14H6v-2h6v2zm3-4H9v-2h6v2zm3-4h-6V7h6v2z"/>');
    }
};
IconViewTimeline_Sharp.styles = style;
IconViewTimeline_Sharp = __decorate([
    customElement('mdui-icon-view-timeline--sharp')
], IconViewTimeline_Sharp);
export { IconViewTimeline_Sharp };
