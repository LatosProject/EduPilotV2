import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFiberPin_Sharp = class IconFiberPin_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M5.5 10.5h2v1h-2v-1zM22 4H2v16h20V4zM9 13H5.5v2H4V9h5v4zm3.5 2H11V9h1.5v6zm7.5 0h-1.2l-2.55-3.5V15H15V9h1.25l2.5 3.5V9H20v6z"/>');
    }
};
IconFiberPin_Sharp.styles = style;
IconFiberPin_Sharp = __decorate([
    customElement('mdui-icon-fiber-pin--sharp')
], IconFiberPin_Sharp);
export { IconFiberPin_Sharp };
