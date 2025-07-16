import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSwitchLeft_Sharp = class IconSwitchLeft_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M8.5 8.62v6.76L5.12 12 8.5 8.62M10 5l-7 7 7 7V5zm4 0v14l7-7-7-7z"/>');
    }
};
IconSwitchLeft_Sharp.styles = style;
IconSwitchLeft_Sharp = __decorate([
    customElement('mdui-icon-switch-left--sharp')
], IconSwitchLeft_Sharp);
export { IconSwitchLeft_Sharp };
