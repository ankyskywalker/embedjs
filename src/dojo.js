var embed, dojo;
embed = dojo = {};
embed.config = {};
embed.global = this;
embed.doc = this.document || null;
embed.body = function() {
	var ebd = embed;
	return ebd.doc && ebd.doc.body;
};
embed.version = "0.1";
