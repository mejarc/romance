<?php
require_once 'library/facebook.php';
$app_id = "112427873827";
$app_secret = "e1f6f709d008551e50f19240eb97ad71";
$baseUrl= 'http://twobanjos.com/romance/';
$appBaseUrl = 'https://apps.facebook.com/romance-author-name/';

session_start();
$code = $_REQUEST["code"];

// if (isset($_GET['code'])){
//        header("Location: " . $appBaseUrl);
//        exit;
//    }
    
$facebook = new Facebook(array(
'appId' => $app_id,
'secret' => $app_secret,
'cookie' => true
));


if(empty($code)) {
   //  $_SESSION['state'] = md5(uniqid(rand(), TRUE)); //CSRF protection
     $dialog_url = "https://www.facebook.com/dialog/oauth?client_id=" 
       . $app_id . "&redirect_uri=" . urlencode($appBaseUrl) . "&state="
       . $_SESSION['state'];

     echo("<script> top.location.href='" . $dialog_url . "'</script>");
   }
$user = $facebook->getUser();
$loginUrl = $facebook->getLoginUrl(
 array('scope' =>'publish_stream,user_about_me'
 )
);
if ($user) {
  try {
    // Proceed knowing you have a logged in user who's authenticated.
    $user_profile = $facebook->api('/me');
    echo "LIne 28!!";
  } catch (FacebookApiException $e) {
   //remove on production error_log($e);
   d($e);
    $user = null;
  }
}

   //get user basic description
//    $userInfo           = $facebook->api("/$user");

    function d($d){
        echo '<pre>';
        print_r($d);
        echo '</pre>';
    }
?>