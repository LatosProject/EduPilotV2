import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWoman_Sharp = class IconWoman_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M13.41 7h-2.82L7 16h3v6h4v-6h3z"/><circle cx="12" cy="4" r="2"/>');
    }
};
IconWoman_Sharp.styles = style;
IconWoman_Sharp = __decorate([
    customElement('mdui-icon-woman--sharp')
], IconWoman_Sharp);
export { IconWoman_Sharp };
