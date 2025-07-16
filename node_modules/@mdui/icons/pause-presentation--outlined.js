import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPausePresentation_Outlined = class IconPausePresentation_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3c-1.1 0-2 .85-2 1.95v14c0 1.1.9 2.05 2 2.05h18c1.1 0 2-.95 2-2.05v-14C23 3.85 22.1 3 21 3zm0 16H3V5h18v14zM9 8h2v8H9zm4 0h2v8h-2z"/>');
    }
};
IconPausePresentation_Outlined.styles = style;
IconPausePresentation_Outlined = __decorate([
    customElement('mdui-icon-pause-presentation--outlined')
], IconPausePresentation_Outlined);
export { IconPausePresentation_Outlined };
