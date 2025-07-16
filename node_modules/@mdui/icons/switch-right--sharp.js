import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSwitchRight_Sharp = class IconSwitchRight_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M15.5 15.38V8.62L18.88 12l-3.38 3.38M14 19l7-7-7-7v14zm-4 0V5l-7 7 7 7z"/>');
    }
};
IconSwitchRight_Sharp.styles = style;
IconSwitchRight_Sharp = __decorate([
    customElement('mdui-icon-switch-right--sharp')
], IconSwitchRight_Sharp);
export { IconSwitchRight_Sharp };
