import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMeetingRoom_Outlined = class IconMeetingRoom_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 19V4h-4V3H5v16H3v2h12V6h2v15h4v-2h-2zm-6 0H7V5h6v14zm-3-8h2v2h-2z"/>');
    }
};
IconMeetingRoom_Outlined.styles = style;
IconMeetingRoom_Outlined = __decorate([
    customElement('mdui-icon-meeting-room--outlined')
], IconMeetingRoom_Outlined);
export { IconMeetingRoom_Outlined };
