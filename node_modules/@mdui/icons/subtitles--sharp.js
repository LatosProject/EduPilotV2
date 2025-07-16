import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSubtitles_Sharp = class IconSubtitles_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 4H2v16h20V4zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z"/>');
    }
};
IconSubtitles_Sharp.styles = style;
IconSubtitles_Sharp = __decorate([
    customElement('mdui-icon-subtitles--sharp')
], IconSubtitles_Sharp);
export { IconSubtitles_Sharp };
