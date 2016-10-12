<?php
namespace Home\Model;
use Think\Model;
class UserModel extends Model{
	 protected $autoCheckFields=false;
	 public  function get_token($uid){
	 	return M('token')->where('uid='.intval($uid).' or token="'.$uid.'"')->select();
	 }

	 public function add_token($uid){
	 	$passtime=strtotime('+ 7 days');
	 	$arr=array('uid'=>$uid,'token'=>md5($passtime.$uid),'pass_time'=>$passtime);
	 	 M('token')->add($arr);
	 	 return $this->get_token($uid);
	 }

	 public function update_token($uid){
	 	$passtime=strtotime('+ 7 days');
	 	$arr=array('token'=>md5($passtime.$uid),'pass_time'=>$passtime);
	 	M('token')->where('uid='.$uid)->save($arr);
	 	return $this->get_token($uid);
	 }

	 public function get_user($token){
	 	$arrr=M('token')->where(array('token'=>$token))->select();
	 	$uid=$arrr[0]['uid'];
	 	$arr=M('user')->where(array('id'=>$uid))->select();
	 	$username=$arr[0];
	 	
	 	return $username;
	 }


}