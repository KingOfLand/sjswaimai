<?php

	namespace Home\Controller;
	use Think\controller;

	class UserController extends controller{
		    public function checklog(){
		    	$token = I('token');
		    	$arr=M('token')->where(array('token'=>$token))->select();
		    	if(empty($arr)){
		    		echo json_encode(array('result'=>$token));
		    	}else{
		    		if($arr[0]['pass_time']<time()){
		    		echo json_encode(array('result'=>'pass_timeout'));
		    	}else{
		    		$map=D('User')->get_user($token);
		    		echo json_encode(array('result'=>'ok','nick'=>$map['nick']));
		    	}
		    	}
		    	
		    }
		 	
		 	function order(){
		 		$token=I('post.token');
		 		$this->display();
		 	}
		 	function address(){
		 		$token = I('token');
		 		
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
<<<<<<< HEAD
		}
=======

		 	function register(){
		 		layout(false);
		 		$this->display();
		 	}
		 	function log(){
		 		layout(false);
		 		$this->display();
		 	}
		 	function log_submit(){
		 		$uname = I('post.uname');
		 		$password = I('post.password');
		 		$user = M('user')->where($arr)->select();
		        // var_dump($arr);
		     	if($user){
		     		
		     		//用户名存在
		     		$uid=$user[0]['id'];
		     		// echo $uid;
		     		$token=D('User')->get_token($uid);
		     		if($token){
		     	    //token exist
		     			// echo $uid;
		     				$update_token=D('User')->update_token($uid);
		     				echo json_encode(array('result'=>'ok','uname'=>$user[0]['uname'],
		     					'nick'=>$user[0]['nick'],'avatar'=>$user[0]['avatar'],
		     					'id'=>$user[0]['id'],'token'=>$update_token[0]['token']));
		     				return;
		     			}else{
		     				// var_dump( $uid);
		     				$add_token=D('User')->add_token($uid);
		     				echo  json_encode(array('result'=>'ok','uname'=>$user[0]['uname'],
		     					'nick'=>$user[0]['nick'],'avatar'=>$user[0]['avatar'],
		     					'id'=>$user[0]['id'],'token'=>md5(strtotime('+ 7 days').$uid)));
		     				return;
		     			}

		     		}else{echo json_encode(array('result'=>'no'));return;}

				 	
				}
				function register_submit(){
					$uname = I('uname');
					$password = I('password');
					$telephone = I('telephone');
					
			        // var_dump($userName);
			     	$arr = array('uname'=>$uname);
			     	if(M('user')->where($arr)->select()){
			     		echo json_encode(array('result'=>'no','id'=>'1'));
						return;
			     	}

			     	$data=array('uname'=>$uname,'telephone'=>$telephone,'password'=>$password);
			     	if(M('user')->add($data)){
			     		$arr=M('user')->where($arr)->select();
			     		$uid=$arr[0]['id'];
			     		if($add_token=D('User')->add_token($uid)){
			     			$token=D('User')->get_token($uid);
			     			echo json_encode(array('result'=>'ok','token'=>$token));
			     		}
			     		   
			     		return;
			     	}else{
			     		echo json_encode(array('result'=>'no','id'=>'0'));
			     		return;
			     	}

     
				}
			}
>>>>>>> cdbabc04081a6766d4607514ebc8ec0f0a95bef8
