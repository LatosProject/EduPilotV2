import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStop_Sharp = class IconStop_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M6 6h12v12H6V6z"/>');
    }
};
IconStop_Sharp.styles = style;
IconStop_Sharp = __decorate([
    customElement('mdui-icon-stop--sharp')
], IconStop_Sharp);
export { IconStop_Sharp };
