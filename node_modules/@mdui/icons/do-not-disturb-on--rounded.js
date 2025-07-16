import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDoNotDisturbOn_Rounded = class IconDoNotDisturbOn_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"/>');
    }
};
IconDoNotDisturbOn_Rounded.styles = style;
IconDoNotDisturbOn_Rounded = __decorate([
    customElement('mdui-icon-do-not-disturb-on--rounded')
], IconDoNotDisturbOn_Rounded);
export { IconDoNotDisturbOn_Rounded };
