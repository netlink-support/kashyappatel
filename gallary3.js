(function() {

    var filename = 'https://tympanus.net/codrops/adpacks/cda_sponsor.css?' + new Date().getTime();
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);
    document.getElementsByTagName("head")[0].appendChild(fileref);

    let cdaSpots = ['ad1', 'ad2'];
    let cdaSpot = cdaSpots[Math.floor(Math.random() * cdaSpots.length)];

    switch (cdaSpot) {
        case "ad1":
            var cdaLink = 'https://ad.doubleclick.net/ddm/trackclk/N1224323.3091281BUYSELLADS/B29258209.358661418;dc_trk_aid=549462698;dc_trk_cid=186410004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=';
            var cdaSponsorName = 'Mailchimp';
            break;
        case "ad2":
            var cdaLink = 'https://srv.buysellads.com/ads/long/x/T6PVCZS6TTTTTTFYUWWCVTTTTTTGJFQFKETTTTTTBT74O7TTTTTTTRPN22VNKKPKZHWWN73L2QQFEKPHVWSNAB77KWSE';
            var cdaSponsorName = 'Applitools Centra';
            break;
        case "ad3":
            var cdaLink = 'https://ad.doubleclick.net/ddm/trackclk/N718679.452584BUYSELLADS.COM/B26953268.342937760;dc_trk_aid=534766646;dc_trk_cid=175795063;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=';
            var cdaSponsorName = 'Squarespace';
            break;
        default:
            var cdaLink = 'https://www.elegantthemes.com/affiliates/idevaffiliate.php?id=17972_5_1_16';
            var cdaSponsorName = 'Divi';
    }

    var cda = document.createElement('div');
    cda.id = 'cdawrap';
    cda.className = 'cdawrap';
    cda.innerHTML = '<span class="cda-sponsor-name">Sponsored by</span> <a href="' + cdaLink + '" class="cda-sponsor-link" target="_blank" rel="nofollow noopener">'+ cdaSponsorName +'</a>';
    document.getElementsByClassName('frame')[0].appendChild(cda);
    
})();