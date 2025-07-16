import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWorkOutline_Sharp = class IconWorkOutline_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm18-2v15H2.01V6H8V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2h6z"/>');
    }
};
IconWorkOutline_Sharp.styles = style;
IconWorkOutline_Sharp = __decorate([
    customElement('mdui-icon-work-outline--sharp')
], IconWorkOutline_Sharp);
export { IconWorkOutline_Sharp };
