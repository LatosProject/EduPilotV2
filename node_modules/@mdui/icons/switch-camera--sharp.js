import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSwitchCamera_Sharp = class IconSwitchCamera_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 4h-5.17L15 2H9L7.17 4H2v16h20V4zm-7 11.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5-3.5 3.5z"/>');
    }
};
IconSwitchCamera_Sharp.styles = style;
IconSwitchCamera_Sharp = __decorate([
    customElement('mdui-icon-switch-camera--sharp')
], IconSwitchCamera_Sharp);
export { IconSwitchCamera_Sharp };
