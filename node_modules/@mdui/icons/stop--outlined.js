import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStop_Outlined = class IconStop_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M16 8v8H8V8h8m2-2H6v12h12V6z"/>');
    }
};
IconStop_Outlined.styles = style;
IconStop_Outlined = __decorate([
    customElement('mdui-icon-stop--outlined')
], IconStop_Outlined);
export { IconStop_Outlined };
