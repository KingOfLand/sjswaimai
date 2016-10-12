<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="/sjswaimai/Public/js/uni_armorwidget_wrapper.js"></script>
    <meta charset="utf-8">
    <title>石景山外卖</title>
    <link rel="stylesheet" type="text/css" href="/sjswaimai/Public/css/main_5d1e2f0.css"/>
    <link rel="stylesheet" type="text/css" href="/sjswaimai/Public/css/common_12dc87d.css"/>
    <link rel="stylesheet" type="text/css" href="/sjswaimai/Public/css/landing_dc1f971.css"/>
    <link rel="stylesheet" type="text/css" href="/sjswaimai/Public/css/shoplist_a774a9c.css"/>
    <link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/main_5d1e2f0.css">
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/common_12dc87d.css">
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/landing_dc1f971.css">
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/menu_4e4a7c2.css">
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/order_23df2f5.css">
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/usercenter_1e040d1.css">

    <script type="text/javascript" src="/sjswaimai/Public/js/main_d338062.js"></script>
    <script type="text/javascript" src="/sjswaimai/Public/js/lib_fcbc5e7.js"></script>
    <script type="text/javascript" src="/sjswaimai/Public/js/landing_cb95d02.js"></script>
    <script type="text/javascript" src="/sjswaimai/Public/js/shoplist_03c450c.js"></script>
</head>
<body>
    <header class="header">
        <div class="ui-width header-wrap">
            <figure>
                <a href="<?php echo U('Index/index');?>" class="wm-logo">石景山外卖</a>

            </figure>
            <figure><h1>&nbsp&nbsp&nbsp&nbsp用户注册</h1></figure>
            
            <div id="user_info" class="user-info-widget" style="1px solid blue;">
                <div id="login_user_info" style="display:none;"></div>
                <div id="logout_user_info">
                    <ul class="logout_info">
                        <li>
                            <span style="color:#ccc">已有石景山账号?</span><a id="login" href="<?php echo U('User/log');?>" >&nbsp;登录</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
            
        </div>
    </header>
    <div>

    <div style=" width: 560px; height: 400px; margin:50px auto;background-color: rgb(255, 255, 255);" class="mod-dialog-wrap">
         <div>
            <h1 style="color:#f6c;margin:30px 0">----------------------------------------------------------------------</h1>
            
        </div>
        <div class="addr-detail new-address-section"> 
           <form>        
            <table class="addr-table" border="0">            
                <tbody>
                    <tr>                
                        <td valign="top">
                            <span class="l-label">用&nbsp;&nbsp;户&nbsp;&nbsp;名</span></td>               
                             <td>                    
                                                    
                                <div class="form-group">                        
                                    <div class="input-control">                            
                                        <input type="text" name="uname"  value="" class="placeholder-con" placeholder="请填写您的用户名" pattern="/^\s*[\u4e00-\u9fa5]{1,}[\u4e00-\u9fa5.·]{0,15}[\u4e00-\u9fa5]{1,}\s*$/" required="required">                            
                                        <span style="color:#f6c">*</span>                        </div>                        
                                            <div id="checkuname" class="error-msg v-hide">
                                                以英文开头至少6位</div>               
                                    </div>                    
                                             
                            </td>            
                        </tr>   
                        <tr>                
                        <td valign="top">
                            <span class="l-label">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</span></td>               
                             <td>                    
                                                    
                                <div class="form-group">                        
                                    <div class="input-control">                            
                                        <input type="password" name="password"  value="" class="placeholder-con" placeholder="请填写您的密码" style="width:400px;padding: 10px 9px;
    border: 1px solid #e4e4e4;height: 20px;
    line-height: 20px;">                            
                                        <span style="color:#f6c">*</span>                        </div>                        
                                            <div id="checkpassword" class="error-msg v-hide">字母（大小写不限）、数字、下划线组成的6-15位字符</div>               
                                    </div>                    
                                             
                            </td>            
                        </tr> 
                        <tr>                
                        <td valign="top">
                            <span class="l-label">确认密码</span></td>               
                             <td>                    
                                                    
                                <div class="form-group">                        
                                    <div class="input-control">                            
                                        <input type="password" name="password2"  value="" class="placeholder-con" placeholder="请再次输入您的密码" style="width:400px;padding: 10px 9px;
    border: 1px solid #e4e4e4;height: 20px;
    line-height: 20px;">                            
                                        <span style="color:#f6c">*</span>                        </div>                        
                                            <div id="confirmpassword" class="error-msg v-hide">两次密码输入不一致</div>               
                                    </div>                    
                                             
                            </td>            
                        </tr>             
                        <tr>                
                            <td valign="top"><span class="l-label">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话</span>
                            </td>                
                            <td>                    
                                <div class="form-group">                        
                                    <div class="input-control">                            
                                        <input type="text" name="telephone" placeholder="11位手机号" value="" class="placeholder-con">                            
                                        <span style="color:#f6c">*</span>                        
                                    </div>                        
                                    <div id="checkphone"class="error-msg v-hide">请填写正确的手机号</div>                    
                                </div>                
                            </td>            
                        </tr>            
                               
                    </tbody>
                </table>        
                <div class="form-group form-submit">            
                    <input type="button" style="background-color:#f6c"class="saveBtn" data-node="saveBtn" value="注册">                            
                                       
                </div>   
            </form>
           </div>
        </div>
    
    </div>

    <script type="text/javascript">
        $('input[name=password]').blur(function(){
            if(!isPassword($(this).val())){
                $('#checkpassword')[0].style.visibility="visible";
            }else{$('#checkpassword')[0].style.visibility="hidden";}
        })
        $('input[name=password2]').blur(function(){
            if($(this).val()==$('input[name=password]').val()){
                $('#confirmpassword')[0].style.visibility="hidden";
            }else{$('#confirmpassword')[0].style.visibility="visible";}
        })
        $('input[name=telephone]').blur(function(){
        
            if(!isPhone($(this).val())){
                $('#checkphone')[0].style.visibility="visible";
            }else{$('#checkphone')[0].style.visibility="hidden";}

        })
        $('input[name=uname]').blur(function(){
            if(!isUsername($(this).val())){
             $('#checkuname')[0].style.visibility="visible";
            }else{$('#checkuname')[0].style.visibility="hidden";}
        })
        $('input[value=注册]').click(function(){
            uname = $('input[name=uname]').val();
            password = $('input[name=password]').val();
            telephone = $('input[name=telephone]').val();
            data = {
                uname:uname,
                password:password,
                telephone:telephone
            }
            $.ajax({url:"<?php echo U('User/register_submit');?>",type:'POST',data:data,success:
                function(succ){
                    
                        result = JSON.parse(succ);
                        console.log(result);
                        if(result.result=='ok'){
                              alert('注册成功');
                              localStorage.setItem(token,result.token);
                               window.location.href="<?php echo U('Index/index');?>"; 
                        }else{
                            if (result.id=='0') {
                                alert('注册失败');
                            }
                            if(result.id=='1'){
                                alert('用户名已存在');
                            }
                        }
                            
                }
            })
        })
        function isPhone(name) {
            var pattern = /^1[34578]\d{9}$/;
            return pattern.test(name);
        }
        function isPassword(name){
            var pattern = /^[0-9a-zA-Z_]{6,15}$/;
            return pattern.test(name);
        }
        function isUsername(name){
            var pattern = /^[a-zA-Z][a-zA-Z0-9_]{5,}$/;
            return pattern.test(name);
        }
        function rep(name){
            var valwin = name.val();//获取Windowstext文本框的值
            var valtag = /[0-9a-zA-Z_]/;
            var t =valwin.replace(valtag,'*');
            name.val(t);
        }
         
    </script>