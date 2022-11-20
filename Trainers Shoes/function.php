<?php
if (!defined('_VALID_MOS') && !defined('_JEXEC')) die('Direct Access to ' . basename(__FILE__) . ' is not allowed.');

if (!function_exists('checkJavaScriptIncludedOS')) {
	
  function checkJavaScriptIncludedOS($name) {

      $doc = JFactory::getDocument();

      foreach($doc->_scripts as $script_path=>$value){
        if(strpos( $script_path, $name ) !== false ) return true ;
      }
      return false;
  }
}