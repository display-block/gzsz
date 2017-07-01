//控制下拉菜单点击后不隐藏
		$('.dropdown-menu').click(function(e) {
		    e.stopPropagation();
		});
		//日期插件
		$(".form-datetime").datetimepicker({
			format: "yyyy-mm-dd",
			autoclose: true,
			todayBtn: true,
			todayHighlight: true,
			showMeridian: true,
			pickerPosition: "bottom-left",
			language: 'zh-CN',
			startView: 2,
			minView: 2
		});
		//登陆界面
		$("#singin").hide();
		$(".lf-a-sigin").click(function(){
				$("#login").hide();
				if($("#singin").hide()){
					$("#singin").show();
				}
		});
		$(".lf-a-login").click(function(){
				$("#singin").hide();
				if($("#login").hide()){
					$("#login").show();
				}
		});