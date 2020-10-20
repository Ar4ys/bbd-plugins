/**
 * @name DiscordStickersUnlocker
 * @version 0.6
 * @description Unlock Discord stickers before release
 * @authorId 275269545651077120
 *
 * @source https://github.com/Ar4ys/bbd-plugins/tree/master/DiscordStickersUnlocker
 */

module.exports = class {
	getName = () => "Discord Stickers Unlocker"
	getAuthor = () => "Ar4ys"
	getVersion = () => "0.6"
	getDescription = () => "Unlock Discord stickers before release"

	start() { try {
		const StickersExperiment = ZeresPluginLibrary.WebpackModules.getByProps("StickersUserExperiment")
		this.unpatch = ZeresPluginLibrary.Patcher.after(
			"discordStickersUnlocker", StickersExperiment, 'useShouldRenderStickerPickerForChannel',
			() => true
		)
	} catch(e) {console.error("[DiscordStickersUnlocker]", e)}}

	stop() { try {
		this.unpatch()
	} catch(e) {console.error("[DiscordStickersUnlocker]", e)}}
}