import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStop_Rounded = class IconStop_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M8 6h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z"/>');
    }
};
IconStop_Rounded.styles = style;
IconStop_Rounded = __decorate([
    customElement('mdui-icon-stop--rounded')
], IconStop_Rounded);
export { IconStop_Rounded };
