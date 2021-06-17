/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define(['jquery','jquery-ui-modules/widget'], function ($) {
    'use strict';
return function(SwatchRenderer){
    /**
     * Extend form SwatchRenderer to support swatch accessibility
     */
    $.widget('mage.SwatchRenderer', $['mage']['SwatchRenderer'], {



_init: function () {
  var type = this.options.typeConfigurablePreselectedProduct;
  console.log(type);

   
 
        if (_.isEmpty(this.options.jsonConfig.images)) {
            this.options.useAjax = true;
            // creates debounced variant of _LoadProductMedia()
            // to use it in events handlers instead of _LoadProductMedia()
            this._debouncedLoadProductMedia = _.debounce(this._LoadProductMedia.bind(this), 500);
        }

        if (this.options.jsonConfig !== '' && this.options.jsonSwatchConfig !== '') {
            // store unsorted attributes
            this.options.jsonConfig.mappedAttributes = _.clone(this.options.jsonConfig.attributes);
            this._sortAttributes();
            this._RenderControls();
           if(type == 2){
            if($('.swatch-attribute').length >0){              
                    var mcs_widget = this;                  
                    var product_id;
                    var selectswatch = this.element.find('.' + this.options.classes.attributeClass + ' .' + this.options.classes.attributeOptionsWrapper);
                    $.each(this.options.jsonConfig.attributes, function () {
                        var item = this;        
                      
                            var price = 0;
                            
                            $.each(item.options, function() {
                      
                                var opt = this;                             
            

                                   $.each(opt.products, function(){

                                        var prd = this;
                                        var prd_prices = mcs_widget.options.jsonConfig.optionPrices[prd];

                                        if(price < prd_prices['finalPrice']['amount']) {
                                       
                                            price = prd_prices['finalPrice']['amount'];

                                            product_id = prd;
                            


                                        }
                                    });
                        
                            
                        });
                    });

                    if(product_id){
                    
                        $.each(this.options.jsonConfig.attributes, function () {
                            var item = this;

                          
                          
                               
                                $.each(item.options, function() {

                                     var opt = this;
                                   
                                    $.each(opt.products, function(){
                                    
                                        var prd = this;

                                        if(prd == product_id) {
                                       
                                         
                    $.each(selectswatch, function (index, item) {
                        var swatchOption = $(item).find('div[data-option-id="' + opt.id + '"]');
                        console.log(swatchOption);
                        if (swatchOption.length && !$(item).find('div.swatch-option').hasClass('selected')) {
                            swatchOption.trigger('click');
                        }
                      });
                      var $selectedId = $('.color div.swatch-attribute-options').find('.selected').attr('id');
                 localStorage.setItem("selectedId", $selectedId);
                                           
                                        }
                                    });
                                    
                                });
                            
                        });                                     


                    }

                }
                }else if (type == 3) {
                   if($('.swatch-attribute').length >0){              
                    var mcs_widget = this;                  
                    var product_id;
                    var selectswatch = this.element.find('.' + this.options.classes.attributeClass + ' .' + this.options.classes.attributeOptionsWrapper);
                    $.each(this.options.jsonConfig.attributes, function () {
                        var item = this;        
                      
                            var price = 0;
                            
                            $.each(item.options, function() {
                      
                                var opt = this;                             
            

                                   $.each(opt.products, function(){

                                        var prd = this;
                                        var prd_prices = mcs_widget.options.jsonConfig.optionPrices[prd];

                                        if(price > prd_prices['finalPrice']['amount']) {
                                       
                                            price = prd_prices['finalPrice']['amount'];

                                            product_id = prd;
                            


                                        }
                                    });
                        
                            
                        });
                    });

                    if(product_id){
                    
                        $.each(this.options.jsonConfig.attributes, function () {
                            var item = this;

                          
                          
                               
                                $.each(item.options, function() {

                                     var opt = this;
                                   
                                    $.each(opt.products, function(){
                                    
                                        var prd = this;

                                        if(prd == product_id) {
                                       
                                         
                    $.each(selectswatch, function (index, item) {
                        var swatchOption = $(item).find('div[data-option-id="' + opt.id + '"]');
                        console.log(swatchOption);
                        if (swatchOption.length && !$(item).find('div.swatch-option').hasClass('selected')) {
                            swatchOption.trigger('click');
                        }
                      });
                      var $selectedId = $('.color div.swatch-attribute-options').find('.selected').attr('id');
                 localStorage.setItem("selectedId", $selectedId);
                                           
                                        }
                                    });
                                    
                                });
                            
                        });                                     


                    }
                  }
                } else if (type == 1) {
                  if($('.swatch-attribute').length >0) {
                    var selectswatch = this.element.find('.' + this.options.classes.attributeClass + ' .' + this.options.classes.attributeOptionsWrapper);
                    $.each(selectswatch, function (index, item) {
                        var swatchOption = $(item).find('div.swatch-option').first();
                        if (swatchOption.length && !$(item).find('div.swatch-option').hasClass('selected')) {
                            swatchOption.trigger('click');
                        }
                    });
                }
                var $selectedId = $('.color div.swatch-attribute-options').find('.selected').attr('id');
                localStorage.setItem("selectedId", $selectedId);
                }
                            
            this._setPreSelectedGallery();
            $(this.element).trigger('swatch.initialized');
        } else {
            console.log('SwatchRenderer: No input data received');
        }
        this.options.tierPriceTemplate = $(this.options.tierPriceTemplateSelector).html();
    },
});
    return $['mage']['SwatchRenderer'];
};
});
