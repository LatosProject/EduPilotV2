import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLibraryMusic_Sharp = class IconLibraryMusic_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 2H6v16h16V2zm-4 5h-3v5.5a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v16h16v-2H4V6z"/>');
    }
};
IconLibraryMusic_Sharp.styles = style;
IconLibraryMusic_Sharp = __decorate([
    customElement('mdui-icon-library-music--sharp')
], IconLibraryMusic_Sharp);
export { IconLibraryMusic_Sharp };
