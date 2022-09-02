function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "line1-patch-fate.bilibiligame.net")
        || dnsDomainIs(host, "line2-patch-fate.bilibiligame.net")) {
        return "PROXY fgo.neptunia.vip:18000";
    }

    return "DIRECT";
}
