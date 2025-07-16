import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPermMedia_Sharp = class IconPermMedia_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M2 6H0v16h20v-2H2V6zm22-2H14l-2-2H4v16h20V4zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"/>');
    }
};
IconPermMedia_Sharp.styles = style;
IconPermMedia_Sharp = __decorate([
    customElement('mdui-icon-perm-media--sharp')
], IconPermMedia_Sharp);
export { IconPermMedia_Sharp };
