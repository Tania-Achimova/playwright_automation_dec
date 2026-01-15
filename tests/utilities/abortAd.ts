import { Page } from '@playwright/test';

export async function blockAds(page: Page): Promise<void> {
    // Block common ad URLs
    await page.route('**/*ads*', route => route.abort());
    await page.route('**/ads/**', route => route.abort());
    await page.route('**/doubleclick.net/**', route => route.abort());
    await page.route('**/googlesyndication/**', route => route.abort());
    await page.route('**/pagead/**', route => route.abort());
    await page.route('**/securepubads.g.doubleclick.net/**', route => route.abort());
    await page.route('**/adservice.google.com/**', route => route.abort());
    await page.route('**/adserver/**', route => route.abort());
    await page.route('**/https://securepubads.g.doubleclick.net/gampad/ads?pvsid=422026321057096&correlator=2523390323493220&eid=31096234%2C31096241%2C31096295%2C83321072&output=ldjh&gdfp_req=1&vrg=202601130101&ptt=17&impl=fif&iu_parts=21849154601%3A22343295815%2CAd.Plus-Anchor&enc_prev_ius=%2F0%2F1&prev_iu_szs=320x50%7C300x75%7C300x50&ifi=2&dids=adplus-anchor&adfs=2271351273&sfv=1-0-45&sc=1&cookie=ID%3Dd96f4e6858c952c3%3AT%3D1767934565%3ART%3D1768498887%3AS%3DALNI_MaYWR_OwArF93BX0JatCxCkhYLdSA&gpic=UID%3D000012e8dbb821f6%3AT%3D1767934565%3ART%3D1768498887%3AS%3DALNI_MZA0MBR7CeR1hqzTEi9Enk7VSGFBA&abxe=1&dt=1768499066910&lmt=1710656768&adxs=0&adys=1041&biw=294&bih=929&scr_x=0&scr_y=112&btvi=1&ucis=1&oid=2&u_his=9&u_h=1080&u_w=1920&u_ah=1032&u_aw=1920&u_cd=24&u_sd=1&u_tz=-420&dmc=8&bc=31&nvt=2&uach=WyJXaW5kb3dzIiwiMTUuMC4wIiwieDg2IiwiIiwiMTQzLjAuNzQ5OS4xOTMiLG51bGwsMCxudWxsLCI2NCIsW1siR29vZ2xlIENocm9tZSIsIjE0My4wLjc0OTkuMTkzIl0sWyJDaHJvbWl1bSIsIjE0My4wLjc0OTkuMTkzIl0sWyJOb3QgQShCcmFuZCIsIjI0LjAuMC4wIl1dLDBd&url=https%3A%2F%2Fdemoqa.com%2Flogin&vis=1&psz=294x-1&msz=294x-1&fws=516&ohw=294&a3p=EhkKCnB1YmNpZC5vcmcYqNLj-LszSABSAghkEloKDWNyd2RjbnRybC5uZXQSQDYxMmI0ZjZkOTk4YTgzNzMxOGI1ZjEyYzdiYTY0OTQ1YTcwMjk2ZjdhNTNmYmM5MTJiNDdiNjFmOTAyYmZkMDAY2p_plbwzSAASGQoKdWlkYXBpLmNvbRio0uP4uzNIAFICCGQSGwoMaWQ1LXN5bmMuY29tGO_vppy7M0gAUgIIahL7AQoOZXNwLmNyaXRlby5jb20S3wF5Nnk3bFY5SVJrSkRVWFpTV25ONVdrRkViVmd3UWxsMU1XcGFPWGhaV0d4emRtTkNZVGh0ZGpFbE1rSWxNa1pHTmpKNVUybFVNRzlLUzA1MU0xcG5Nek5IUVVVNVZtODNTazB6VVRSVlJrNXBVR0ZrUnpOYVN6ZHBPREJTVDNGeGJFRlZZbTFUY2taTGFIUXhKVEpDUmtaMVNsaDVWMEYwTkdsV2JHSTRWVFJ5Ymxoak5rUnllbkZsYlZBM1JFTTNZV0oyTTNwdFNGcG9ZM2d4VkRGNlZrRWxNMFFsTTBRGOOf6ZW8M0gAEhYKB2V1aWQuZXUYptLj-LszSABSAghkEj4KBW9wZW54EixleUpwSWpvaVVEZDNhbXQxY1RKVVVGZGxVMlExWjJ3d2RtSTFaejA5SW4wPRiVoemVvDNIABIXCghydGJob3VzZRi36qacuzNIAFICCGo.&psd=WzMxLFtdXQ..&dlt=1768499063599&idt=2759&prev_scp=site%3Ddemoqa.com&adks=3465212154&frm=20&eo_id_str=ID%3D2c92b07fd5a98eb7%3AT%3D1767934565%3ART%3D1768498887%3AS%3DAA-AfjYNgX-OWH6o0ULDHAN8M2L4&pgls=CAk./**', route => route.abort());
    await page.route('**/https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js/**', route => route.abort());
}
