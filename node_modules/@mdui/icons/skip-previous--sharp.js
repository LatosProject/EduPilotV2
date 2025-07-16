import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSkipPrevious_Sharp = class IconSkipPrevious_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M6 6h2v12H6V6zm3.5 6 8.5 6V6l-8.5 6z"/>');
    }
};
IconSkipPrevious_Sharp.styles = style;
IconSkipPrevious_Sharp = __decorate([
    customElement('mdui-icon-skip-previous--sharp')
], IconSkipPrevious_Sharp);
export { IconSkipPrevious_Sharp };
