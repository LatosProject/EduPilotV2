import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWebStories_Sharp = class IconWebStories_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 4h2v16h-2V4zM2 2v20h13V2H2zm19 16h1.5V6H21v12z"/>');
    }
};
IconWebStories_Sharp.styles = style;
IconWebStories_Sharp = __decorate([
    customElement('mdui-icon-web-stories--sharp')
], IconWebStories_Sharp);
export { IconWebStories_Sharp };
