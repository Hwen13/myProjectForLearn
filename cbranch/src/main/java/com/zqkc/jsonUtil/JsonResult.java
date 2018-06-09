package com.zqkc.jsonUtil;

import java.io.Serializable;

public class JsonResult<T> implements Serializable{

	/**
	 *序列化 
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 *封装数据
	 */
	private T data;
	/**
	 *封装消息
	 */
	private String message;
	/**
	 *封装
	 */
	private boolean success;
	public T getData() {
		return data;
	}
	public void setData(T data) {
		this.data = data;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	
	  public JsonResult() {  
	        super();  
	    }  
	  
	    public JsonResult(T data, String message, boolean success) {  
	        this.data = data;  
	        this.message = message;  
	        this.success = success;  
	    }  
	  
	    public JsonResult(T data, String message) {  
	        this.data = data;  
	        this.message = message;  
	        this.success = true;  
	    }  
	  
	    public JsonResult(T data) {  
	        this.data = data;  
	        this.success = true;  
	    }  
}
