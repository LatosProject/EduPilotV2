import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCreateNewFolder_Sharp = class IconCreateNewFolder_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 6H12l-2-2H2v16h20V6zm-3 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"/>');
    }
};
IconCreateNewFolder_Sharp.styles = style;
IconCreateNewFolder_Sharp = __decorate([
    customElement('mdui-icon-create-new-folder--sharp')
], IconCreateNewFolder_Sharp);
export { IconCreateNewFolder_Sharp };
