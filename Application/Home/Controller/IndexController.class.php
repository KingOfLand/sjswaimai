<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        $data = M('Cate')->select();
        $this->assign('data',$data);

        $data_store = M('store')->select();
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
        // echo '<pre>';
        //     print_r($data_store);
        // echo '</pre>';
        $this->assign('data_store',$data_store);
        $this->display();
    }

    public function shop(){
        $goodsdata = M('goods')->join('tb_title on tb_title.title_id = tb_goods.title_id')
        ->field('
            tb_goods.goods_name,
            tb_goods.goods_url,
            tb_goods.title_id,
            tb_goods.goods_reminder,
            tb_goods.goods_price,
            tb_goods.goods_number,
            tb_goods.storage,
            tb_goods.recommend')
        ->select();

        $data_title = M('title')->select();


        for ($i=0; $i < count($data_title) ; $i++) 
        { 
            foreach ($goodsdata as $value) 
            {
                if($data_title[$i]['title_id'] == $value['title_id'])
                    $data_title[$i]['goodsdata'][] = $value;
            }
        }

        // echo '<pre>';
        //     print_r($data_title);
        // echo '</pre>';
        $this->assign('data_title',$data_title);
        // $this->assign('data_title',$data_title);
        $this->display();
    }

}

