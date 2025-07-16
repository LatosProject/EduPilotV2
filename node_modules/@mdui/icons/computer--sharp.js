import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconComputer_Sharp = class IconComputer_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m20 18 2-2V4H2v12l2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>');
    }
};
IconComputer_Sharp.styles = style;
IconComputer_Sharp = __decorate([
    customElement('mdui-icon-computer--sharp')
], IconComputer_Sharp);
export { IconComputer_Sharp };
