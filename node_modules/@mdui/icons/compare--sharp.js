import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCompare_Sharp = class IconCompare_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M10 3H3v18h7v2h2V1h-2v2zm0 15H5l5-6v6zM21 3h-7v2h5v13l-5-6v9h7V3z"/>');
    }
};
IconCompare_Sharp.styles = style;
IconCompare_Sharp = __decorate([
    customElement('mdui-icon-compare--sharp')
], IconCompare_Sharp);
export { IconCompare_Sharp };
