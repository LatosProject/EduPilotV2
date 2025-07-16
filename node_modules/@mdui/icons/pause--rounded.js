import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPause_Rounded = class IconPause_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z"/>');
    }
};
IconPause_Rounded.styles = style;
IconPause_Rounded = __decorate([
    customElement('mdui-icon-pause--rounded')
], IconPause_Rounded);
export { IconPause_Rounded };
