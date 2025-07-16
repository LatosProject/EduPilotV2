import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVolumeMute_TwoTone = class IconVolumeMute_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M9 13h2.83L14 15.17V8.83L11.83 11H9z" opacity=".3"/><path d="M7 9v6h4l5 5V4l-5 5H7zm7-.17v6.34L11.83 13H9v-2h2.83L14 8.83z"/>');
    }
};
IconVolumeMute_TwoTone.styles = style;
IconVolumeMute_TwoTone = __decorate([
    customElement('mdui-icon-volume-mute--two-tone')
], IconVolumeMute_TwoTone);
export { IconVolumeMute_TwoTone };
