package com.zqkc.model;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Logs {

	private int id;// 日志编号

	private int uid;// 用户编号

	private String controller;// 控制器

	private String action;// 操作

	private String params;// 参数列表

	private String result;// 返回结果

	private String consuming;// 耗时

	private SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss:SSS");
	private Date date = new Date();
	private String createtime = sdf.format(date);// 操作时间

	private byte status;// 操作状态 0成功 1 失败 2异常 3其他

	private byte isdel = 1;// 是否删除 0已删除 1未删除

	/**
	 * 定义一个空构造函数
	 */
	public Logs() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public String getController() {
		return controller;
	}

	public void setController(String controller) {
		this.controller = controller;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public String getCreatetime() {
		return createtime;
	}

	public void setCreatetime(String createtime) {

		this.createtime = createtime;
	}

	public byte getStatus() {
		return status;
	}

	public void setStatus(byte status) {
		this.status = status;
	}

	public byte getIsdel() {
		return isdel;
	}

	public void setIsdel(byte isdel) {
		this.isdel = isdel;
	}

	public String getParams() {
		return params;
	}

	public void setParams(String params) {
		this.params = params;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public String getConsuming() {
		return consuming;
	}

	public void setConsuming(String consuming) {
		this.consuming = consuming;
	}

}
