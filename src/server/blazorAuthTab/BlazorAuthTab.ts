import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/blazorAuthTab/index.html")
@PreventIframe("/blazorAuthTab/config.html")
@PreventIframe("/blazorAuthTab/remove.html")
export class BlazorAuthTab {
}
