<?php

	namespace Home\Controller;
	use Think\controller;
	require './Public/php-sdk-7.0.8/autoload.php';


	class UserController extends controller {
		    public function checklog(){
		    	$token = I('token');
		    	$arr=M('token')->where(array('token'=>$token))->select();
		    	if(empty($arr)){
		    		echo json_encode(array('result'=>$token));
		    	}else{
		    		if($arr[0]['pass_time']<time()){
		    		echo json_encode(array('result'=>'pass_timeout'));
			    	}else{
			    		cookie('token',$token);
			    		$map=D('User')->get_user($token);
			    		echo json_encode(array('result'=>'ok','nick'=>$map['nick']));
			    	}
		    	}
		    	
		    }
		 	function gotoinfo(){
		 		$token=I('token');
		 		$arr=M('token')->where(array('token'=>$token))->select();
		 		if($arr[0]['pass_time']>time()){
		 			echo json_encode(array('result'=>'login'));
		 		}else {
		 			echo json_encode(array('result'=>'logout'));
		 		}
		 	}
		 	function order(){
		 		$token=I('token');
		 		$this->display();
		 	}
		 	function address(){
		 		$token = cookie('token');
		 		$map=D('User')->get_user($token);
		 		$arr = M('address')->where(array('uid'=>$map['id']))->select();
		 		$this->assign("address",$arr);
		 		
		 		$this->display();
		 	}
		 	function collect(){
		 		$token = cookie('token');
		 		$map=D('User')->get_user($token);
		 		$arr = M('collect')->where(array('uid'=>$map['id']))->select();
		 		$this->assign("collect",$arr);
		 		

		 		$this->display();
		 	}

		 	function add_collect(){
		 		$token=cookie('token');
		 		$sid=I('sid');
		 		$map=D('User')->get_user($token);
		 		$store=M('store')->where(array('sid'=>$sid))->select();
		 		$data['uid']=$map['uid'];
		 		$data['log_url']=$store[0]['log_url'];
		 		$data['star']=$store[0]['stars'];
		 		$data['telephone']=$store[0]['telephone'];
		 		$data['store_id']=$sid;
		 		$data['least']=$store[0]['least'];
		 		$data['distribute']=$store[0]['distribute'];
		 		if(M('collect')->add($data)){
		 			echo json_encode(array('result'=>'ok'));
		 		}
		 	}
		 	function delete_collect(){
		 		$token=cookie('token');
		 		$sid=I('sid');
		 		$map=D('User')->get_user($token);
		 		//echo json_encode(array('result'=>M('collect')->where(array('collect_id'=>$sid,'uid'=>$map['id']))->delete()));
		 		if(M('store')->where(array('result'=>M('collect')->where(array('collect_id'=>$sid,'uid'=>$map['id']))->delete()))){
		 		echo json_encode(array('result'=>'ok'));
		 		}else{
		 			echo json_encode(array('result'=>'no'));
		 		}
		 	}

		 	function count(){

		 		$this->display();
		 	}
		 	function setting(){
		 		
		 		$bucket = 'rockerh';
				$accessKey = '_NhNW58wxLaH6GRQ8otOV1FGt_kWNB3tcNYqGgX_';
				$secretKey = 'uWs52dzbKP-0eKYSGNtfqnzPKGopr_0LjwyA6TVF';
				$auth = new  \Qiniu\Auth($accessKey, $secretKey);

				$upToken = $auth->uploadToken($bucket);
				/*
				$policy = array(
			      'callbackUrl' => 'http://samples.app.ucai.cn/php/ZX/callback.php',
			      'callbackBody' => 'filename=$(fname)&filesize=$(fsize)'
			  	);
			  	$uptoken = $auth->uploadToken($bucket, null, 3600, $policy);
			  	*/
			  	$uptoken = $auth->uploadToken($bucket, null, 3600);
		 		$this->assign('value',$uptoken);
		 		$this->display();
		 	}
<<<<<<< HEAD
		 	function setting_info(){
		 		$token=I('token');
		 		
		 		$map=D('User')->get_user($token);
		 		$arr=M('user')->where(array('id'=>$map['id']))->select();
		 		
		 		echo json_encode(array('info'=>$arr[0]));
		 	}
		 	function setting_modifyinfo(){
		 		$nick = I('nick');
		 		$telephone = I('telephone');
		 		$token = I('token');
		 		$map=D('User')->get_user($token);
		 		if(M('user')->where(array('id'=>$map['id']))->save(array('nick'=>$nick,'telephone'=>$telephone))){
		 			echo json_encode(array('result'=>'修改成功'));
		 		}
		 	}

		 	function saveadvatar(){
		 		$token=I('token');
		 		$advatar=I('newpath');
		 		$map=D('User')->get_user($token);
		 	
		 		if(M('user')->where(array('id'=>$map['id']))->save(array('avatar'=>$advatar))){
		 			echo json_encode(array('result'=>'no'));
		 		}else{
		 			echo json_encode(array('result'=>'ok'));
		 		}
		 	}

=======
		 	function reg(){

		 		$this->display();
		 	}

>>>>>>> b07f34f026185f02f5e9fea5282badfd175596b5
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
<<<<<<< HEAD

=======
>>>>>>> b07f34f026185f02f5e9fea5282badfd175596b5
		 	}

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
		     		cookie('token',$token);
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
			     			cookie('token',$token);
			     			echo json_encode(array('result'=>'ok','token'=>$token));
			     		}
			     		   
			     		return;
			     	}else{
			     		echo json_encode(array('result'=>'no','id'=>'0'));
			     		return;
			     	}

     
				}
			}

