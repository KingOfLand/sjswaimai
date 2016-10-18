<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        $data = M('Cate')->select();
        $this->assign('data',$data);
        // var_dump($data);
        // echo '<hr>';
        $data_store = M('store')->select();
        // for ($i=0; $i < count($data_store) ; $i++) 
        // { 
        //     foreach ($data_store as $value) {
        //         $data_store[]['stime'] = strtotime($value['stime']);
        //     }
        // }
        // var_dump( $data_store);
        // $data_store['stime'] = strtotime($data_store['stime']); 
        $feature = M('store')->join('tb_build on tb_build.sid = tb_store.sid')
            ->join(' tb_feature on tb_feature.tid=tb_build.tid')
            ->field('tb_build.content,tb_feature.img_url,tb_build.sid')
            ->select();
        for ($i=0; $i < count($data_store) ; $i++) 
        { 
            foreach ($feature as $value) 
            {
                if($data_store[$i]['sid'] == $value['sid'])
                    $data_store[$i]['feature'][] = $value;
            }
        }
        echo '<pre>';
            print_r($data_store);
        echo '</pre>';
        $this->assign('data_store',$data_store);
        $this->display();
    }

}

