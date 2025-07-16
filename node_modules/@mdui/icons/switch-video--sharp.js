import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSwitchVideo_Sharp = class IconSwitchVideo_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M18 9.5V5H2v14h16v-4.5l4 4v-13l-4 4zm-5 6V13H7v2.5L3.5 12 7 8.5V11h6V8.5l3.5 3.5-3.5 3.5z"/>');
    }
};
IconSwitchVideo_Sharp.styles = style;
IconSwitchVideo_Sharp = __decorate([
    customElement('mdui-icon-switch-video--sharp')
], IconSwitchVideo_Sharp);
export { IconSwitchVideo_Sharp };
