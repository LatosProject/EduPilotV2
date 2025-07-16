import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNoSim_Sharp = class IconNoSim_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3.79 3.74 2.38 5.15l2.74 2.74-.12.12V21h13.27l1.58 1.62 1.41-1.41zM19 16.11V3h-8.99L7.95 5.06z"/>');
    }
};
IconNoSim_Sharp.styles = style;
IconNoSim_Sharp = __decorate([
    customElement('mdui-icon-no-sim--sharp')
], IconNoSim_Sharp);
export { IconNoSim_Sharp };
