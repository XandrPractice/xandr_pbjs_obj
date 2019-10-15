var xandrpbjs = xandrpbjs || {};
xandrpbjs.pbjsObj || (xandrpbjs.pbjsObj = function(){
    var t = this;
    t.PREBID_TIMEOUT = 3000,
    t.googletag = t.googletag || {},
    t.googletag.cmd = t.googletag.cmd || [],
    t.pbjs = t.pbjs || {},
    t.pbjs.que = t.pbjs.que || [],
    t.adUnits = [{
        code: '/19968336/header-bid-tag-0',
        mediaTypes: {
            banner: {
                sizes: [
                    [300, 250]
                ]
            }
        },
        bids: [{
            bidder: 'appnexus',
            params: {
                placementId: 13144370
            }
        }]
    }],
    t.pbjs.que.push(function() {
        t.pbjs.addAdUnits(t.adUnits);
    }),
    t.slot1,
    t.googletag.cmd.push(function() {
        t.slot1 = t.googletag.defineSlot('/19968336/header-bid-tag-0', [[300, 250]], 'div-1')
            .addService(t.googletag.pubads());
        t.googletag.pubads().disableInitialLoad();
        t.googletag.pubads().enableSingleRequest();
        t.googletag.enableServices();
    }.bind(t)),
    t.refreshBid = function() {
        self.pbjs.que.push(function() {
            self.pbjs.requestBids({
                timeout: t.PREBID_TIMEOUT,
                adUnitCodes: ['/19968336/header-bid-tag-0'],
                bidsBackHandler: function() {
                    self.pbjs.setTargetingForGPTAsync(['/19968336/header-bid-tag-0']);
                    self.googletag.pubads().refresh([self.slot1]);
                }
            });
        }.bind(t));
    }
})();
