import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStop = class IconStop extends LitElement {
    render() {
        return svgTag('<path d="M6 6h12v12H6z"/>');
    }
};
IconStop.styles = style;
IconStop = __decorate([
    customElement('mdui-icon-stop')
], IconStop);
export { IconStop };
