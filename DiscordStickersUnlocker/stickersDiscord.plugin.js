//META{"name":"DiscordStickersUnlocker","authorId":"275269545651077120"}*//
module.exports = class {
	getName = () => "Discord Stickers Unlocker"
	getAuthor = () => "Ar4ys"
	getVersion = () => "0.5"
	getDescription = () => "Unlock Discord stickers before release"

	start() { try {
		const StickersExperiment = ZeresPluginLibrary.WebpackModules.getByProps("StickersUserExperiment")
		this.unpatch = ZeresPluginLibrary.Patcher.after(
			"sticker-picker", StickersExperiment, 'useShouldRenderStickerPickerForChannel',
			() => true
		)
	} catch(e) {console.error("[DiscordStickersUnlocker]", e)}}

	stop() { try {
		this.unpatch()
	} catch(e) {console.error("[DiscordStickersUnlocker]", e)}}
}