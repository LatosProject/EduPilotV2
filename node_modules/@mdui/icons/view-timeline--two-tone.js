import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewTimeline_TwoTone = class IconViewTimeline_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 19h14V5H5v14zm7-12h6v2h-6V7zm-3 4h6v2H9v-2zm-3 4h6v2H6v-2z" opacity=".3"/><path d="M6 15h6v2H6zm6-8h6v2h-6zm-3 4h6v2H9z"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>');
    }
};
IconViewTimeline_TwoTone.styles = style;
IconViewTimeline_TwoTone = __decorate([
    customElement('mdui-icon-view-timeline--two-tone')
], IconViewTimeline_TwoTone);
export { IconViewTimeline_TwoTone };
