import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDone_Rounded = class IconDone_Rounded extends LitElement {
    render() {
        return svgTag('<path d="m9 16.2-3.5-3.5a.984.984 0 0 0-1.4 0 .984.984 0 0 0 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7a.984.984 0 0 0 0-1.4.984.984 0 0 0-1.4 0L9 16.2z"/>');
    }
};
IconDone_Rounded.styles = style;
IconDone_Rounded = __decorate([
    customElement('mdui-icon-done--rounded')
], IconDone_Rounded);
export { IconDone_Rounded };
