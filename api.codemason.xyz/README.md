# Install
   install dependencies:
     $ npm install
   run the app:
     $ DEBUG=del:* npm start

# Modify DB
update chain set chain_name="Codemason", chain_code3="CMN" where chain_name ="Dash"

# Interface

获取本地货币价格接口
接口：https://api.codemason.xyz/rate
请求方式：GET
返回的数据是I/O数据流：
解析之后的格式为：
(
{
    baseCurrency = USD;
    price = "17.7414";
    quoteCurrency = ZAR;
    retrieved = "2020-03-23T09:33:18.055922963Z";
    source = "dashretail-average";
    symbol = USDZAR;
},
{
    baseCurrency = USDT;
    price = "1.4484";
    quoteCurrency = CAD;
    retrieved = "2020-03-23T09:33:18.011899324Z";
    source = "dashretail-composite";
    symbol = USDTCAD;
},
{
    baseCurrency = USDT;
    price = "0.8629";
    quoteCurrency = GBP;
    retrieved = "2020-03-23T09:33:18.011902369Z";
    source = "dashretail-composite";
    symbol = USDTGBP;
}
)