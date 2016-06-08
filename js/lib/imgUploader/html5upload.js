
(function(){
	var ERRORS ={
		"MAXCOUNT":"一次最多上传5张图片。",
		"MAXSIZE":"文件太大，请不要超过5M。",
		"TYPE":"文件格式错误，请上传JPG/PNG/GIF格式图片。"
	};
		
	function QUpload(opts){
		this.opts = opts;
		this.filesDone = 0;
		this.filesCount = 0;
		this.filesLength = 0;
	};

	QUpload.prototype = {
		bindElement:function(){
			var that = this;
			var files;
			this.opts.input.on('change',function(){
				files = Array.prototype.slice.call(this.files);
				that.checkfiles(files);
			});
		},
		checkfiles:function(files){
			var qualifiedFiles = [],
				wrongName ="",
				filesCount = files.length,
				maxSize = this.opts.maxfilesize;

			//无图片返回
			if(filesCount < 1){
				return;
			}
			//图片是否超过单次上传限制	
			if (filesCount > this.opts.maxfiles) {
				return this.onerror(ERRORS.MAXCOUNT);
			}
			//判断是否是图片
			files.forEach(function(file,i){
		        if(/image\/\w+/.test(file.type)){
		            qualifiedFiles.push(file);
		        }else{
					if(i == files.length - 1){
						wrongName += file.name + ERRORS.TYPE;
					}else{
						wrongName += file.name + "，";	
					}		        	
		        }					
			});

			//判断文件大小
			files = [];
			qualifiedFiles.forEach(function(file,i){
				if(file.size <= maxSize){
					files.push(file);
				}else{
					if(i == qualifiedFiles.length - 1){
						wrongName += file.name + ERRORS.MAXSIZE;
					}else{
						wrongName += file.name + "，";	
					}
				}
			});

			if(wrongName.length >0){
				this.onerror(wrongName);
			}
			
			if(files.length < 1){
				return;
			}		

			this.upload(files);
		},
		onerror:function(errmsg){
			return this.opts.onerror(errmsg) && false;
		},
		upload:function(files){
			var that = this;
			that.filesLength = files.length;
			that.filesDone = 0;
			files.forEach(function(filesObj, index){
				that.analyData(filesObj);
			});	
		},
		analyData:function(filesObj){
			try{
				var that = this;
				if(this.opts.uploadType == "BinaryString"){
					var formData = new FormData();
					formData.append(this.opts.paramname, filesObj);
					this.send(filesObj,formData);//发送二进制
			    }

				if(this.opts.uploadType == "DataURL"){
					var reader = new FileReader();	
					reader.readAsDataURL(filesObj);
					reader.onloadend = function(e){	
						var r = this.opts.paramname + '=' + this.result.split(',')[1];
						that.send(filesObj,r);//发送base64数据给后端
					}
				}

			}catch(err){
				return this.onerror(err);
			}

		},
		send:function(filesObj, result){
			var that = this,
				xhr = new XMLHttpRequest(),
				upload = xhr.upload;

			filesObj.currentProgress = 0;
			filesObj.startData = 0;
			filesObj.startTime = Date.now();
			filesObj.id = +(filesObj.lastModifiedDate) + parseInt(Math.random()*100000); //每个文件一个特定的id
			upload.addEventListener("progress", function(event){
				that.progress(event, filesObj);
			},false);		
			xhr.open("POST", this.opts.url, true);

			if(this.opts.uploadType == "DataURL"){
				xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
			}
			xhr.send(result);
			this.opts.uploadStarted(filesObj);//上传开始回调
			xhr.onload = function() { 
			    if (xhr.responseText) {
				    filesObj.timeDiff = Date.now() - filesObj.startTime;
				    that.opts.uploadFinished(JSON.parse(xhr.responseText), filesObj);	
					that.filesDone++;
					if(that.filesDone == that.filesLength) {
						that.opts.afterAll();
					}
			    }
			};
		},
	    progress:function(event, filesObj) {
			if (event.lengthComputable) {
				var loaded = event.loaded,
					percentage = Math.round((loaded * 100) / event.total);				
				if (filesObj.currentProgress != percentage) {				
					filesObj.currentProgress = percentage;	//上传进度
					var now = Date.now(),
						diffTime = now - (filesObj.currentStart?filesObj.currentStart:filesObj.startTime),
					    diffData = loaded - filesObj.startData;
					filesObj.speed = Math.floor(diffData / diffTime); // KB per second
					filesObj.startData = loaded;
					filesObj.currentStart = now;
					this.opts.progressUpdated(filesObj);	
				}
			}
		},
		afterAll:function(){
			return this.opts.afterAll()
		}
	}; 

	$.extend({
		html5Upload: function(options) {
			var opts = $.ObjectH.mix({
				url: '',
				input:'',
				loadImg:'',

				paramname: 'imgage',
				maxfiles: 5,
				uploadType:"BinaryString",
				maxfilesize: 1024*1024*5,
				afterAll: function(){},
				onerror: function(){},
				uploadStarted: function(){},
				uploadFinished: function(){},
				progressUpdated: function(){}
			}, options, true);

			var ql = new QUpload(opts);

			ql.bindElement();
		}
	})
})();
