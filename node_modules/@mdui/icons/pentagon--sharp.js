import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPentagon_Sharp = class IconPentagon_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m2 9 4 12h12l4-12-10-7z"/>');
    }
};
IconPentagon_Sharp.styles = style;
IconPentagon_Sharp = __decorate([
    customElement('mdui-icon-pentagon--sharp')
], IconPentagon_Sharp);
export { IconPentagon_Sharp };
