/*
* @Author: Ha Manh
* @Date:   2020-11-14 14:51:18
* @Last Modified by:   Ha Manh
* @Last Modified time: 2020-11-16 11:36:50
*/
var config = {
    config: {
        mixins: {
            'Magento_ConfigurableProduct/js/configurable': {
                'Magepow_ConfigurablePreselect/js/configurable': true
            }
        },
        mixins:{
        	'Magento_Swatches/js/swatch-renderer':{
        		'Magepow_ConfigurablePreselect/js/swatch-renderer':true
        	}
        }
    }
};