function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "line1-patch-fate.bilibiligame.net")) {
        return "PROXY fgo.neptunia.vip:8001";
    }

    return "DIRECT";
}
