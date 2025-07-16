import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDone = class IconDone extends LitElement {
    render() {
        return svgTag('<path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>');
    }
};
IconDone.styles = style;
IconDone = __decorate([
    customElement('mdui-icon-done')
], IconDone);
export { IconDone };
