<?php
namespace Magepow\ConfigurablePreselect\Model\Config\Source;

use Magento\Framework\Data\OptionSourceInterface;


    
class preSelectedOptions implements OptionSourceInterface

{
    
   
    /**
     * @return array
     */
    public function toOptionArray() : array
     
    {
        $options = ['1' => __('Default Preselected'),'2' => __('Highest Preselected Price'),'3' => __('Lowest Preselected Price')];
     foreach ($options as $key => $value) {
         $res[] = ['value'=>$key, 'label'=>$value] ;
     }
       return $res;

    }
}