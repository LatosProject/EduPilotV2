import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSnippetFolder_Sharp = class IconSnippetFolder_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m12 6-2-2H2v16h20V6H12zm7 11h-6V9h3.5l2.5 2.5V17zm-3.12-6.5 1.62 1.62v3.38h-3v-5h1.38z"/>');
    }
};
IconSnippetFolder_Sharp.styles = style;
IconSnippetFolder_Sharp = __decorate([
    customElement('mdui-icon-snippet-folder--sharp')
], IconSnippetFolder_Sharp);
export { IconSnippetFolder_Sharp };
