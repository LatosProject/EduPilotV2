import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRemove_Rounded = class IconRemove_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"/>');
    }
};
IconRemove_Rounded.styles = style;
IconRemove_Rounded = __decorate([
    customElement('mdui-icon-remove--rounded')
], IconRemove_Rounded);
export { IconRemove_Rounded };
