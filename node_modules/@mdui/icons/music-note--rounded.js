import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMusicNote_Rounded = class IconMusicNote_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M12 5v8.55c-.94-.54-2.1-.75-3.33-.32-1.34.48-2.37 1.67-2.61 3.07a4.007 4.007 0 0 0 4.59 4.65c1.96-.31 3.35-2.11 3.35-4.1V7h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2c-1.1 0-2 .9-2 2z"/>');
    }
};
IconMusicNote_Rounded.styles = style;
IconMusicNote_Rounded = __decorate([
    customElement('mdui-icon-music-note--rounded')
], IconMusicNote_Rounded);
export { IconMusicNote_Rounded };
