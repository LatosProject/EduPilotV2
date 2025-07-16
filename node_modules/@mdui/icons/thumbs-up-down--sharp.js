import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconThumbsUpDown_Sharp = class IconThumbsUpDown_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 5H5.82l.78-3.78L5.38 0 0 5.38V14h9.24L12 7.54zm2.76 5L12 16.46V19h6.18l-.78 3.78L18.62 24 24 18.62V10z"/>');
    }
};
IconThumbsUpDown_Sharp.styles = style;
IconThumbsUpDown_Sharp = __decorate([
    customElement('mdui-icon-thumbs-up-down--sharp')
], IconThumbsUpDown_Sharp);
export { IconThumbsUpDown_Sharp };
