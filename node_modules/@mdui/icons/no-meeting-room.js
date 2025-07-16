import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNoMeetingRoom = class IconNoMeetingRoom extends LitElement {
    render() {
        return svgTag('<path d="M11 11h-1v2h2v-1l9.73 9.73L20.46 23 14 16.54V21H3v-2h2V7.54l-4-4 1.27-1.27L11 11zm3 .49L5.51 3H14v1h5v12.49l-2-2V6h-3v5.49z"/>');
    }
};
IconNoMeetingRoom.styles = style;
IconNoMeetingRoom = __decorate([
    customElement('mdui-icon-no-meeting-room')
], IconNoMeetingRoom);
export { IconNoMeetingRoom };
