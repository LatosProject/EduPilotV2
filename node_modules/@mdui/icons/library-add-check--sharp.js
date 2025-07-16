import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLibraryAddCheck_Sharp = class IconLibraryAddCheck_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 2H6v16h16V2zm-9.53 12L9 10.5l1.4-1.41 2.07 2.08L17.6 6 19 7.41 12.47 14zM4 6H2v16h16v-2H4V6z"/>');
    }
};
IconLibraryAddCheck_Sharp.styles = style;
IconLibraryAddCheck_Sharp = __decorate([
    customElement('mdui-icon-library-add-check--sharp')
], IconLibraryAddCheck_Sharp);
export { IconLibraryAddCheck_Sharp };
