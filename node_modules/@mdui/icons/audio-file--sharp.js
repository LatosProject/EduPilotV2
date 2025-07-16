import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAudioFile_Sharp = class IconAudioFile_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M14 2H4v20h16V8l-6-6zm2 11h-3v3.75c0 1.24-1.01 2.25-2.25 2.25S8.5 17.99 8.5 16.75s1.01-2.25 2.25-2.25c.46 0 .89.14 1.25.38V11h4v2zm-3-4V3.5L18.5 9H13z"/>');
    }
};
IconAudioFile_Sharp.styles = style;
IconAudioFile_Sharp = __decorate([
    customElement('mdui-icon-audio-file--sharp')
], IconAudioFile_Sharp);
export { IconAudioFile_Sharp };
