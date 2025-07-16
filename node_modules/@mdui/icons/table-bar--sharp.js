import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTableBar_Sharp = class IconTableBar_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 7.5C22 5.57 17.52 4 12 4S2 5.57 2 7.5c0 1.81 3.95 3.31 9 3.48V15H8l-2 5h2l1.2-3h5.6l1.2 3h2l-2-5h-3v-4.02c5.05-.17 9-1.67 9-3.48z"/>');
    }
};
IconTableBar_Sharp.styles = style;
IconTableBar_Sharp = __decorate([
    customElement('mdui-icon-table-bar--sharp')
], IconTableBar_Sharp);
export { IconTableBar_Sharp };
