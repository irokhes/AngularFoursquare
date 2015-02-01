var requestParams = {
    clientId: "TGFG15JODGFPEDPOIX42URX1YYLTVZMXMXX1UY4BPM3YVF10",
    clientSecret: "O5E1J3ZFJM4XH12Z0VLEFMT3MRNKHQQSDAGCT5GIKOWE12UQ",
    version: "20130815"
}

app.provider('explorerService', function($resource) {
    var requestUri = 'https://api.foursquare.com/v2/venues/:action';
    
    return $resource(requestUri,
    {
        action: 'explore',
        client_id: requestParams.clientId,
        client_secret: requestParams.clientSecret,
        v: requestParams.version,
        venuePhotos: '1',
        callback: 'JSON_CALLBACK'
    },
    {
        get: { method: 'JSONP' }
    });
});