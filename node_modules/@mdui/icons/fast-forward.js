import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFastForward = class IconFastForward extends LitElement {
    render() {
        return svgTag('<path d="m4 18 8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/>');
    }
};
IconFastForward.styles = style;
IconFastForward = __decorate([
    customElement('mdui-icon-fast-forward')
], IconFastForward);
export { IconFastForward };
