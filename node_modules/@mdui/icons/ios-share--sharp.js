import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconIosShare_Sharp = class IconIosShare_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 8h-5v2h3v11H6V10h3V8H4v15h16z"/><path d="M11 16h2V5h3l-4-4-4 4h3z"/>');
    }
};
IconIosShare_Sharp.styles = style;
IconIosShare_Sharp = __decorate([
    customElement('mdui-icon-ios-share--sharp')
], IconIosShare_Sharp);
export { IconIosShare_Sharp };
