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
	}