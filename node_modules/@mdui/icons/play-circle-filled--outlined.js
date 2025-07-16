import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPlayCircleFilled_Outlined = class IconPlayCircleFilled_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>');
    }
};
IconPlayCircleFilled_Outlined.styles = style;
IconPlayCircleFilled_Outlined = __decorate([
    customElement('mdui-icon-play-circle-filled--outlined')
], IconPlayCircleFilled_Outlined);
export { IconPlayCircleFilled_Outlined };
