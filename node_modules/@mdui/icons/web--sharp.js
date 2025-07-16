import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWeb_Sharp = class IconWeb_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 4H2v16h20V4zM4 9h10.5v3.5H4V9zm0 5.5h10.5V18H4v-3.5zM20 18h-3.5V9H20v9z"/>');
    }
};
IconWeb_Sharp.styles = style;
IconWeb_Sharp = __decorate([
    customElement('mdui-icon-web--sharp')
], IconWeb_Sharp);
export { IconWeb_Sharp };
