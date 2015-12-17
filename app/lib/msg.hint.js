/**
 * @author jie.tang
 * @param options
 * 封装zui的modal，加入常用的回调方法
 */
function MsgBox(options){
	
}

jQuery.extend(MsgBox, {
	DEFAULT:{
		title:"提示",
		custom:function(){
				return "这是一个提示信息";
		},
		width:350,
		icon: 'info',
		position:'fit',
		fade:false,
		delay: 0
	},

	alert:function(title,msg,callback){
		var options = $.extend({name:"msg_box_alert"},this.DEFAULT);
		if(msg != ""){
			options.custom = function(){
				return msg+"<div style='text-align:right;'><input type='button' id='modal_ok_button' class='btn btn-primary' data-dismiss='modal' value='确定'></div>";
			}
		}
		options.hidden = function(){
			$("#msg_box_alert + .modal-backdrop").remove();
		}
		options.shown = function(){
			$("#msg_box_alert").css("z-index",1080);
			$("#msg_box_alert + .modal-backdrop").css("z-index",1079);
		}
		if(title != ""){
			options.title = title;
		}
		if($.isFunction(callback)){
			options.hidden = function(){
				$("#msg_box_alert + .modal-backdrop").remove();
				callback();
			}
		}

		var tigger = new $.zui.ModalTrigger(options);
		tigger.show();
		
		$("#modal_ok_button").focus().andSelf().keypress(function(e){
			  if (e.keyCode == 13 || e.which == 13) {
				  $("#modal_ok_button").click();
			    }
		 });
	},

	confirm:function(title,msg,callback){
		var tigger = new $.zui.ModalTrigger();
		var options = $.extend({name:"msg_box_confirm"},this.DEFAULT);
		debugger;
		options.backdrop = 'static';
		options.icon="question-sign";
		options.fade = false;
		var click_ok = false;
		if(msg != ""){
			options.custom = function(){
				return msg+"<div style='text-align:right;'>"+
				"<input type='button' id='modal_ok_button' class='btn btn-primary' data-dismiss='modal' value='确定'><span style='min-width:5px;'>&nbsp;</span>"+
				"<input type='button' id='modal_cancel_button' class='btn btn-default' data-dismiss='modal' value='取消'>"+
				"</div>";
			}
		}
		if(title != ""){
			options.title = title;
		}
		options.hidden = function(){
			$("#msg_box_confirm +.modal-backdrop").remove();
		}

		options.shown = function(){
			$("#msg_box_confirm").css("z-index",1080);
			$("#msg_box_confirm + .modal-backdrop").css("z-index",1079);
		}

		/*options.onShow = function(){
			$("#calendar").hide();
		}*/

		if($.isFunction(callback)){
			options.hidden = function(){
				$("#msg_box_confirm + .modal-backdrop").remove();
				if(click_ok){
					callback();
				}
			}
				
		}

		tigger.show(options);
		$("#modal_ok_button").focus().andSelf().keypress(function(e){
			  if (e.keyCode == 13 || e.which == 13) {
				  $("#modal_ok_button").click();
			    }
		 });

		jQuery('#msg_box_confirm input[type=button]').click(function() {
	        var clicked = $(this);
	        if(clicked.val()=="确定"){
	        	click_ok = true;
	        }
		 });
		
		
		

	},

	showLoading:function(){
		var options = $.extend({onlyShowLoading:true,backdrop:'static',name:"msg_box_loading"},this.DEFAULT);
		options.shown = function(){
			$("#msg_box_loading").css("z-index",1080);
			$("#msg_box_loading +.modal-backdrop").css("z-index",1079);
		}
		var tigger = new $.zui.ModalTrigger(options);
		tigger.show();
		
	},

	removeLoading:function(){
		$("#msg_box_loading + .modal-backdrop").remove();
		$("#msg_box_loading").remove();

	},

	panel:function(title,contentHtml,callback){
		var tigger = new $.zui.ModalTrigger();
		var options = $.extend({name:"msg_box_panel"},this.DEFAULT);
		debugger;
		options.backdrop = 'static';
		options.icon="question-sign";
		options.fade = false;
		var click_ok = false;
		if(contentHtml != ""){
			options.custom = function(){
				return contentHtml+"<div style='text-align:right;'>"+
					"<input type='button' id='modal_ok_button' class='btn btn-primary' data-dismiss='modal' value='确定'><span style='min-width:5px;'>&nbsp;</span>"+
					"<input type='button' id='modal_cancel_button' class='btn btn-default' data-dismiss='modal' value='取消'>"+
					"</div>";
			}
		}
		if(title != ""){
			options.title = title;
		}
		options.hidden = function(){
			$("#msg_box_panel + .modal-backdrop").remove();
		}

		/*options.onShow = function(){
			$("#msg_box_panel").hide();
		}*/

		if($.isFunction(callback)){
			options.hidden = function(){
				$("#msg_box_panel + .modal-backdrop").remove();
				if(click_ok){
					callback();
				}
			}

		}

		tigger.show(options);
		$("#modal_ok_button").focus().andSelf().keypress(function(e){
			if (e.keyCode == 13 || e.which == 13) {
				$("#modal_ok_button").click();
			}
		});

		jQuery('#msg_box_panel input[type=button]').click(function() {
			var clicked = $(this);
			if(clicked.val()=="确定"){
				click_ok = true;
			}
		});
	}


	
});