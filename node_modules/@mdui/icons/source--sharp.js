import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSource_Sharp = class IconSource_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m12 6-2-2H2v16h20V6H12zm2 10H6v-2h8v2zm4-4H6v-2h12v2z"/>');
    }
};
IconSource_Sharp.styles = style;
IconSource_Sharp = __decorate([
    customElement('mdui-icon-source--sharp')
], IconSource_Sharp);
export { IconSource_Sharp };
