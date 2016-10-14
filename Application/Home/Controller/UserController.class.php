<?php

	namespace Home\Controller;
	use Think\controller;

	class UserController extends controller{
		 	
		 	function order(){

		 		$this->display();
		 	}
		 	function address(){
		 		$arr = M('address')->select();
		 		$this->assign("address",$arr);

		 		$this->display();
		 	}
		 	function collect(){

		 		$this->display();
		 	}
		 	function count(){

		 		$this->display();
		 	}
		 	function setting(){

		 		$this->display();
		 	}
		 	function reg(){

		 		$this->display();
		 	}

		 	function address_submit(){
		 		$data['aname']=I('post.aname');
		 		$data['telephone']=I('post.telephone');
		 		$data['address']=I('post.address');
		 		$data['uid']=I('post.uid');
		 		$data['ifdefault']=I('post.ifdefault');
		 		if(M('address')->add($data)){
		 			echo json_encode(array('result'=>'ok'));
		 		}
		 	}

		 	function address_delete(){
		 		$data['aid']=I('post.aid');
		 		if(M('address')->where($data)->delete()){
		 			echo json_encode(array('result'=>'ok'));
		 		}
		 	}
		 	function address_modify(){
		 		$data['aname']=I('post.aname');
		 		$data['telephone']=I('post.telephone');
		 		$data['address']=I('post.address');
		 		$select['aid']=I('post.aid');
		 		if(M('address')->where($select)->save($data)){
		 			echo json_encode(array('result'=>'ok'));
		 		}
		 	}
		 	function address_default(){
		 		$data['aid']=I('post.aid');
		 		$arr=M('address')->where(array('ifdefault'=>'1'))->select();
		 		
		 		if($arr){
		 			$aid=$arr[0]['aid'];
		 			M('address')->where(array('aid'=>$aid))->save(array('ifdefault'=>'0'));
		 		}
		 		if(M('address')->where($data)->save(array('ifdefault'=>'1'))){
		 			echo json_encode(array('result'=>'ok'));
		 		}
		 	}
		}