import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCheck_Sharp = class IconCheck_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>');
    }
};
IconCheck_Sharp.styles = style;
IconCheck_Sharp = __decorate([
    customElement('mdui-icon-check--sharp')
], IconCheck_Sharp);
export { IconCheck_Sharp };
