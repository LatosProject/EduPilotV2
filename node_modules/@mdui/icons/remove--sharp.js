import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRemove_Sharp = class IconRemove_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 13H5v-2h14v2z"/>');
    }
};
IconRemove_Sharp.styles = style;
IconRemove_Sharp = __decorate([
    customElement('mdui-icon-remove--sharp')
], IconRemove_Sharp);
export { IconRemove_Sharp };
