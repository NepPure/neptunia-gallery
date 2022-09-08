function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "line3-patch-fate.bilibiligame.net")
        || dnsDomainIs(host, "line1-patch-fate.bilibiligame.net")) {
        return "PROXY fgo.neptunia.vip:18004";
    }

    return "DIRECT";
}
