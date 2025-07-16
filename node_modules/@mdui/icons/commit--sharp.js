import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCommit_Sharp = class IconCommit_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M16.9 11a5 5 0 0 0-9.8 0H2v2h5.1a5 5 0 0 0 9.8 0H22v-2h-5.1zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>');
    }
};
IconCommit_Sharp.styles = style;
IconCommit_Sharp = __decorate([
    customElement('mdui-icon-commit--sharp')
], IconCommit_Sharp);
export { IconCommit_Sharp };
