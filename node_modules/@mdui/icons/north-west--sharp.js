import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNorthWest_Sharp = class IconNorthWest_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M5 15h2V8.41L18.59 20 20 18.59 8.41 7H15V5H5v10z"/>');
    }
};
IconNorthWest_Sharp.styles = style;
IconNorthWest_Sharp = __decorate([
    customElement('mdui-icon-north-west--sharp')
], IconNorthWest_Sharp);
export { IconNorthWest_Sharp };
