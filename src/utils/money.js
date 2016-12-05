export default class Money {

    static maskInputs() { 

        $(".money").maskMoney({
            thousands: ".",
            decimal: ","
        });
    }

    static toFloat(str) {

        if (!str)
            return 0;
        
        str = str.replace(/\./g, "").replace(",", ".");
        
        var value = parseFloat(str);
        
        if (isNaN(value))
            value = 0;
        
        return value;
    }    

    static toString(value, decimals) {

        var isNegative = false;
	
        if (!value) {
            value = 0;
        } else if (value < 0) {
            isNegative = true;
            value = (value * (-1));
        }
        
        var count = 0;
        var split = Money.splitFloat(value, decimals);
        var strInteger = split[0];
        var strDecimals = split[1];
        var masked = ","+strDecimals;	
        var intValue = Number(strInteger);			
        
        if (intValue == 0) {
            masked = "0"+masked;
        } else if (intValue  == 1000) {
            masked = "1.000"+masked;
        } else if (intValue < 1000) {
            masked = strInteger+masked;
        } else {
            while (intValue > 1000) {
                
                count++;
                
                intValue = (intValue / 1000);
                split = Money.splitFloat(intValue, 3);
                strInteger = split[0];
                strDecimals = split[1];
                
                if (count > 1) {
                    masked = strDecimals+"."+masked;
                } else {		
                    masked = strDecimals+masked;
                };			
            }
            
            masked = strInteger+"."+masked;
        };	
        
        if (isNegative)
            masked = "-" + masked;
        
        return masked;
    }

    static splitFloat(value, decimals) {

        var str = Money.formatFloat(value, decimals);
        var index = str.indexOf(".");
        var splitValue = str.substring(0, index);
        var splitDecimals = str.substring(index + 1);	
        
        return [splitValue, splitDecimals];
    }

    static formatFloat(value, decimals) {

        if (value == undefined)
		    return "";
	
        if (!decimals)
            decimals = 2;
        
        var str = value.toFixed(decimals);
        
        return str;
    }
}